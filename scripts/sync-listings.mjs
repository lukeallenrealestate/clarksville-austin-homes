/**
 * Sync Clarksville (Austin, 78703) listings from MLS Grid (Unlock MLS / ACTRIS)
 * into src/data/clarksville-listings.json, and download each listing's photos
 * into public/listings/<ListingId>/.
 *
 * Why download photos: MLS Grid media URLs are tokenized and expire, and the
 * terms require storing media rather than hotlinking. So we pull images down and
 * serve them from our own domain via next/image. This is also why listings ship
 * as native, indexable HTML on this domain instead of a client-only widget.
 *
 * MLS Grid is a replication feed (cannot filter by neighborhood name), so we
 * page the active residential set, keep records inside a Clarksville geo polygon
 * within ZIP 78703, then re-query those by ListingId with media + detail fields.
 *
 * Run:  npm run sync:listings   (uses MLS_GRID_TOKEN from .env.local)
 * The GitHub Action runs this on a schedule and commits any changes.
 *
 * Boundary: tune CLARKSVILLE_BOX to match the boundary stated on the site. The
 * default captures Clarksville proper and its immediate blocks within 78703.
 */
import { writeFileSync, mkdirSync, rmSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TOKEN = process.env.MLS_GRID_TOKEN;
if (!TOKEN) {
  console.error(
    "MLS_GRID_TOKEN is not set. Run: node --env-file-if-exists=.env.local scripts/sync-listings.mjs",
  );
  process.exit(1);
}

const BASE = "https://api.mlsgrid.com/v2/Property";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src", "data", "clarksville-listings.json");
const PHOTO_ROOT = join(ROOT, "public", "listings");
const MAX_PHOTOS = 20;
const ZIP = "78703";

// Clarksville bounding box, calibrated against live MLS coordinates (June 2026).
// Covers the historic district and immediate blocks: MoPac (west) to roughly
// Lamar (east), West 6th and the Pressler/Belvedere pocket (south) up to about
// West 13th (north). Deliberately excludes Pemberton Heights and Old Enfield to
// the north (Woodlawn, Wethersfield, Kent, Enfield Rd), the downtown towers to
// the southeast (300 Bowie, 800 W 5th, 901 W 9th), and Tarrytown west of MoPac.
// Tune these four numbers if you want a wider or narrower published boundary.
const CLARKSVILLE_BOX = { minLat: 30.2708, maxLat: 30.2818, minLng: -97.7666, maxLng: -97.7528 };
const BOUNDARY_LABEL = "Clarksville polygon, 78703";

// Known condo / new-construction communities, matched against SubdivisionName or
// BuildingName so cards can carry the building tag.
const BUILDINGS = [
  { name: "The Belvedere", matchers: ["belvedere"] },
  { name: "Westline", matchers: ["westline"] },
  { name: "The Colorfield", matchers: ["colorfield"] },
  { name: "de Saligny", matchers: ["de saligny", "desaligny"] },
  { name: "Escorial", matchers: ["escorial"] },
  { name: "Woodlawn Place", matchers: ["woodlawn place"] },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const auth = { Authorization: `Bearer ${TOKEN}`, "Accept-Encoding": "gzip" };

const SCAN_SELECT = [
  "ListingId", "UnparsedAddress", "PostalCode", "Latitude", "Longitude",
  "StandardStatus", "MlsStatus", "PropertyType", "PropertySubType", "ListPrice",
].join(",");

const inBox = (r) =>
  r.Latitude != null &&
  r.Longitude != null &&
  r.Latitude >= CLARKSVILLE_BOX.minLat &&
  r.Latitude <= CLARKSVILLE_BOX.maxLat &&
  r.Longitude >= CLARKSVILLE_BOX.minLng &&
  r.Longitude <= CLARKSVILLE_BOX.maxLng;

const isClarksville = (r) =>
  r.PropertyType === "Residential" &&
  r.PostalCode === ZIP &&
  Number(r.ListPrice) > 0 &&
  inBox(r);

/**
 * Page the active set for a status; return matching ListingIds.
 *
 * MLS Grid is a replication feed: the $filter may ONLY use MlgCanView,
 * ModificationTimestamp, OriginatingSystemName, StandardStatus, ListingId,
 * PropertyType, ListOfficeMlsId. PostalCode is NOT filterable, so we filter to
 * Residential here (allowed) and narrow to ZIP 78703 + the Clarksville geo box
 * client-side in isClarksville().
 */
async function scanIds(status) {
  const filter = `OriginatingSystemName eq 'actris' and PropertyType eq 'Residential' and StandardStatus eq '${status}'`;
  let url = `${BASE}?$filter=${encodeURIComponent(filter)}&$select=${SCAN_SELECT}&$top=1000`;
  const ids = [];
  let pages = 0;
  let total = 0;
  while (url && pages < 50) {
    const res = await fetch(url, { headers: auth });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    const j = await res.json();
    for (const r of j.value || []) {
      if (isClarksville(r)) ids.push(r.ListingId);
    }
    total += (j.value || []).length;
    pages++;
    url = j["@odata.nextLink"] || null;
    await sleep(300);
  }
  console.log(`  ${status}: scanned ${total} in ${ZIP} across ${pages} pages, kept ${ids.length} in box`);
  return ids;
}

/** Re-query specific listings with Media + full detail fields, in chunks. */
async function fetchDetails(ids) {
  const out = [];
  for (let i = 0; i < ids.length; i += 6) {
    const chunk = ids.slice(i, i + 6);
    const orClause = chunk.map((id) => `ListingId eq '${id}'`).join(" or ");
    const filter = `OriginatingSystemName eq 'actris' and (${orClause})`;
    const url = `${BASE}?$filter=${encodeURIComponent(filter)}&$expand=Media&$top=10`;
    const res = await fetch(url, { headers: auth });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    const j = await res.json();
    out.push(...(j.value || []));
    await sleep(400);
  }
  return out;
}

const bathsOf = (r) => {
  const full = r.BathroomsFull ?? 0;
  const half = r.BathroomsHalf ?? 0;
  if (full || half) return full + half * 0.5;
  return r.BathroomsTotalInteger ?? 0;
};

const slugify = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

function buildingOf(r) {
  const hay = `${r.SubdivisionName || ""} ${r.BuildingName || ""}`.toLowerCase();
  for (const b of BUILDINGS) {
    if (b.matchers.some((m) => hay.includes(m))) return b.name;
  }
  return undefined;
}

function propertyTypeOf(r) {
  const sub = (r.PropertySubType || "").toLowerCase();
  if (sub.includes("condo")) return "condo";
  if (sub.includes("town")) return "townhouse";
  return "single-family";
}

const THIS_YEAR = new Date().getFullYear();

function categoriesOf(r, propertyType, building) {
  const cats = new Set();
  if (propertyType === "condo") cats.add("condo");
  if (propertyType !== "condo") cats.add("single-family");
  if ((r.ListPrice ?? 0) >= 2_000_000) cats.add("luxury");
  const newish =
    r.NewConstructionYN === true ||
    (r.YearBuilt && r.YearBuilt >= THIS_YEAR - 1) ||
    !!building;
  if (newish) cats.add("new-construction");
  const style = `${r.ArchitecturalStyle || ""} ${r.PublicRemarks || ""}`.toLowerCase();
  if (propertyType === "single-family" && (style.includes("bungalow") || (r.YearBuilt && r.YearBuilt <= 1945))) {
    cats.add("bungalow");
  }
  // De-prioritize new-construction tag for clearly old homes unless a building.
  if (cats.has("new-construction") && r.YearBuilt && r.YearBuilt < 2010 && !building) {
    cats.delete("new-construction");
  }
  return [...cats];
}

const statusOf = (r) =>
  r.StandardStatus === "Active Under Contract" || r.MlsStatus === "Pending" ? "pending" : "active";

// Project rule: no em dashes in copy. MLS remarks sometimes contain them.
const noDashes = (s) => (s ? s.replace(/\s*[—–]\s*/g, ", ").replace(/ {2,}/g, " ") : s);

/** Group media by Order, pick the variant nearest 1600px wide, cap, dedupe. */
function chooseMedia(media) {
  const byOrder = new Map();
  for (const m of media || []) {
    const t = String(m.MediaType || "").toLowerCase();
    if (t && t !== "jpg" && t !== "jpeg") continue;
    if (!m.MediaURL) continue;
    const o = m.Order ?? 0;
    const cur = byOrder.get(o);
    const score = (x) => (x <= 1600 ? x : 1600 - (x - 1600));
    if (!cur || score(m.ImageWidth ?? 0) > score(cur.ImageWidth ?? 0)) byOrder.set(o, m);
  }
  return [...byOrder.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, m]) => m)
    .slice(0, MAX_PHOTOS);
}

async function downloadPhotos(listingId, media, address) {
  const dir = join(PHOTO_ROOT, listingId);
  mkdirSync(dir, { recursive: true });
  const photos = [];
  let idx = 0;
  for (const m of media) {
    const n = String(idx).padStart(2, "0");
    const file = `${n}.jpg`;
    const full = join(dir, file);
    // Idempotent: reuse an already-downloaded file (survives rate limiting on
    // re-syncs) rather than re-fetching. Only download when the file is missing.
    let ok = existsSync(full);
    if (!ok) {
      try {
        let res;
        for (let attempt = 0; attempt < 4; attempt++) {
          res = await fetch(m.MediaURL);
          if (res.status !== 429) break;
          await sleep(1500 * (attempt + 1));
        }
        if (res && res.ok) {
          writeFileSync(full, Buffer.from(await res.arrayBuffer()));
          ok = true;
          await sleep(150);
        } else {
          console.warn(`    photo ${n} HTTP ${res ? res.status : "error"}, skipping`);
        }
      } catch (e) {
        console.warn(`    photo ${n} failed: ${e.message}`);
      }
    }
    if (ok) {
      photos.push({
        src: `/listings/${listingId}/${file}`,
        width: m.ImageWidth ?? 1600,
        height: m.ImageHeight ?? 1067,
        alt:
          (m.ShortDescription && String(m.ShortDescription).trim()) ||
          `${address}, Clarksville, Austin, photo ${idx + 1}`,
      });
      idx++;
    }
  }
  return photos;
}

function mapListing(r, photos) {
  const propertyType = propertyTypeOf(r);
  const building = buildingOf(r);
  const address = (r.UnparsedAddress || "").split(",")[0].trim() || r.UnparsedAddress || "";
  const unit = String(r.UnitNumber ?? "").trim();
  const slug = slugify(`${address}${unit ? `-${unit}` : ""}`) || slugify(r.ListingId);
  return {
    id: r.ListingId,
    slug,
    address,
    unit: unit ? `Unit ${unit}` : undefined,
    building,
    propertyType,
    categories: categoriesOf(r, propertyType, building),
    status: statusOf(r),
    price: r.ListPrice ?? 0,
    beds: r.BedroomsTotal ?? 0,
    baths: bathsOf(r),
    sqft: r.LivingArea ?? 0,
    yearBuilt: r.YearBuilt ?? undefined,
    lotSizeAcres: r.LotSizeAcres ?? undefined,
    listDate: (r.ListingContractDate || "").slice(0, 10),
    description: noDashes((r.PublicRemarks || "").trim()) || undefined,
    listOffice: r.ListOfficeName || undefined,
    listAgent: r.ListAgentFullName || undefined,
    hoaFee: r.AssociationFee ?? undefined,
    hoaFrequency: r.AssociationFeeFrequency || undefined,
    geo: r.Latitude != null && r.Longitude != null ? { lat: r.Latitude, lng: r.Longitude } : undefined,
    photos,
    isSample: false,
  };
}

function prune(keepIds) {
  if (!existsSync(PHOTO_ROOT)) return;
  for (const name of readdirSync(PHOTO_ROOT)) {
    if (name.startsWith(".")) continue;
    if (!keepIds.has(name)) {
      rmSync(join(PHOTO_ROOT, name), { recursive: true, force: true });
      console.log(`  pruned stale photos: ${name}`);
    }
  }
}

async function main() {
  console.log("Syncing Clarksville listings from MLS Grid...");
  const ids = [...(await scanIds("Active")), ...(await scanIds("Active Under Contract"))];
  console.log(`Clarksville listings found: ${ids.length}`);

  const records = await fetchDetails(ids);
  const forSale = [];
  for (const r of records) {
    const media = chooseMedia(r.Media);
    const address = (r.UnparsedAddress || "").split(",")[0].trim();
    console.log(`  ${r.ListingId} ${address}: ${media.length} photos`);
    const photos = await downloadPhotos(r.ListingId, media, address);
    forSale.push(mapListing(r, photos));
  }

  forSale.sort((a, b) => b.price - a.price);
  prune(new Set(records.map((r) => r.ListingId)));

  const out = {
    generatedAt: new Date().toISOString(),
    source: "MLS Grid (Unlock MLS / ACTRIS)",
    boundary: BOUNDARY_LABEL,
    forSale,
  };
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
  console.log(`Wrote ${forSale.length} Clarksville listings to ${OUT}`);
}

main().catch((e) => {
  console.error("Sync failed:", e.message);
  process.exit(1);
});
