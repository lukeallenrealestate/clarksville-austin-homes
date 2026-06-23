/**
 * Listing + market data for Clarksville, Austin (78703).
 *
 * Data comes from src/data/clarksville-listings.json, produced by
 * scripts/sync-listings.mjs (run `npm run sync:listings`). That script pages the
 * MLS Grid (Unlock MLS / ACTRIS) replication feed, filters to a Clarksville
 * geo polygon inside 78703, and writes active for-sale listings with locally
 * stored photos. Listings therefore render as real, indexable HTML on this
 * domain (the No. 1 technical requirement: crawlable, AI-citable listing data).
 *
 * If the data file is empty (no token / never synced), we fall back to clearly
 * labeled SAMPLE data and the UI shows a "sample, not live" banner so nothing
 * misleading is ever published.
 *
 * Schedule scripts/sync-listings.mjs (GitHub Action) to keep listings fresh;
 * the visible "Last updated" reflects the sync time. Remove sold/expired
 * listings promptly per TREC: the feed only returns active records, so a synced
 * site self-prunes.
 */
import data from "@/data/clarksville-listings.json";

export type PropertyType = "single-family" | "condo" | "townhouse";
export type ListingStatus = "active" | "pending";

/** Marketing categories a listing can belong to (drives the filtered pages). */
export type Category = "condo" | "luxury" | "new-construction" | "bungalow" | "single-family";

export interface ListingPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Listing {
  id: string;
  /** URL slug, derived from the street address (and unit for condos). */
  slug: string;
  address: string;
  unit?: string;
  /** Condo/building name when the unit is part of a named community. */
  building?: string;
  propertyType: PropertyType;
  /** Derived marketing categories (see categoriesFor). */
  categories: Category[];
  status: ListingStatus;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt?: number;
  lotSizeAcres?: number;
  listDate: string;
  daysOnMarket?: number;
  /** Full MLS description (PublicRemarks), em dashes normalized to commas. */
  description?: string;
  /** Listing brokerage (required IDX attribution). */
  listOffice?: string;
  listAgent?: string;
  hoaFee?: number;
  hoaFrequency?: string;
  geo?: { lat: number; lng: number };
  photos?: ListingPhoto[];
  isSample: boolean;
}

export interface MarketSnapshot {
  asOf: string;
  activeCount: number;
  medianListPrice: number;
  avgPricePerSqFt: number;
  lowPrice: number;
  highPrice: number;
  condoShare: number;
  isSample: boolean;
}

type StoredData = {
  generatedAt: string;
  source: string;
  boundary: string;
  forSale: Listing[];
};

const stored = data as StoredData;
const hasLiveData = (stored.forSale?.length ?? 0) > 0;

/** True when serving placeholder data (the feed has not been synced). */
export const LISTINGS_ARE_SAMPLE = !hasLiveData;

/** ISO timestamp the displayed data reflects (sync time, or a stable sample date). */
export const DATA_AS_OF = hasLiveData ? stored.generatedAt : "2026-06-23T00:00:00.000Z";

/** Boundary string shown next to listing counts so the definition is explicit. */
export const LISTINGS_BOUNDARY =
  stored.boundary || "Clarksville polygon, 78703";

// Fallback sample data, used only when the feed has never been synced. These
// are realistic, clearly-labeled placeholders (NOT real listings) so the design
// and SEO structure are reviewable before MLS Grid credentials are wired.
const SAMPLE: Listing[] = [
  {
    id: "sample-1",
    slug: "sample-w-10th-bungalow",
    address: "West 10th Street (sample)",
    propertyType: "single-family",
    categories: ["single-family", "bungalow"],
    status: "active",
    price: 1395000,
    beds: 3,
    baths: 2,
    sqft: 1840,
    yearBuilt: 1924,
    lotSizeAcres: 0.15,
    listDate: "2026-05-30",
    description:
      "Sample placeholder. A restored Craftsman bungalow with a deep front porch, original longleaf pine floors, and a detached studio, steps from the West Lynn corridor.",
    isSample: true,
  },
  {
    id: "sample-2",
    slug: "sample-pressler-belvedere-residence",
    address: "Pressler Street (sample)",
    unit: "Residence 4",
    building: "The Belvedere",
    propertyType: "condo",
    categories: ["condo", "new-construction", "luxury"],
    status: "active",
    price: 1850000,
    beds: 2,
    baths: 2.5,
    sqft: 1720,
    yearBuilt: 2026,
    listDate: "2026-06-04",
    description:
      "Sample placeholder. A new-construction condominium residence with floor-to-ceiling glass, concierge service, and direct Butler Hike-and-Bike Trail access.",
    isSample: true,
  },
  {
    id: "sample-3",
    slug: "sample-westline-townhome",
    address: "West 9th Street (sample)",
    building: "Westline",
    propertyType: "townhouse",
    categories: ["new-construction", "luxury", "single-family"],
    status: "active",
    price: 2950000,
    beds: 3,
    baths: 3.5,
    sqft: 2980,
    yearBuilt: 2026,
    listDate: "2026-05-18",
    description:
      "Sample placeholder. A lock-and-leave luxury residence in a managed condominium association, with a private two-car garage and rooftop terrace.",
    isSample: true,
  },
  {
    id: "sample-4",
    slug: "sample-waterston-cottage",
    address: "Waterston Avenue (sample)",
    propertyType: "single-family",
    categories: ["single-family", "luxury"],
    status: "active",
    price: 2450000,
    beds: 4,
    baths: 3,
    sqft: 2680,
    yearBuilt: 2019,
    lotSizeAcres: 0.17,
    listDate: "2026-06-10",
    description:
      "Sample placeholder. A modern infill home behind a historic streetscape, with white oak interiors, a pool, and a casita under a mature live oak canopy.",
    isSample: true,
  },
];

export async function getActiveListings(): Promise<Listing[]> {
  const source = hasLiveData ? stored.forSale : SAMPLE;
  return [...source].sort((a, b) => b.price - a.price);
}

export async function getListingBySlug(slug: string): Promise<Listing | undefined> {
  const all = await getActiveListings();
  return all.find((l) => l.slug === slug);
}

export async function getListingsByCategory(category: Category): Promise<Listing[]> {
  const all = await getActiveListings();
  return all.filter((l) => l.categories.includes(category));
}

const median = (nums: number[]): number => {
  if (!nums.length) return 0;
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
};

/**
 * Live, listing-derived snapshot of the active market on this site's boundary.
 * Kept distinct from the editorial trailing-12-month market report (which uses
 * dated, sourced MLS figures); this only summarizes what is for sale right now.
 */
export async function getMarketSnapshot(): Promise<MarketSnapshot> {
  const active = await getActiveListings();
  const prices = active.map((l) => l.price).filter(Boolean);
  const ppsf = active.filter((l) => l.sqft > 0).map((l) => l.price / l.sqft);
  const condos = active.filter((l) => l.propertyType === "condo").length;

  return {
    asOf: DATA_AS_OF,
    activeCount: active.length,
    medianListPrice: median(prices),
    avgPricePerSqFt: ppsf.length
      ? Math.round(ppsf.reduce((a, b) => a + b, 0) / ppsf.length)
      : 0,
    lowPrice: prices.length ? Math.min(...prices) : 0,
    highPrice: prices.length ? Math.max(...prices) : 0,
    condoShare: active.length ? Math.round((condos / active.length) * 100) : 0,
    isSample: LISTINGS_ARE_SAMPLE,
  };
}

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

/** Compact price for cards: $1.85M, $985K. */
export const usdShort = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return usd(n);
};

export const CATEGORY_LABEL: Record<Category, string> = {
  condo: "Condo",
  luxury: "Luxury",
  "new-construction": "New Construction",
  bungalow: "Bungalow",
  "single-family": "Single-Family",
};
