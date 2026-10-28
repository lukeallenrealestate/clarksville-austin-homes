import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getActiveListings, getMarketSnapshot, usdShort, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";
import { Container, Eyebrow, Stat } from "@/components/ui";
import { fmtDate } from "@/lib/content/guides";
import { AGENT } from "@/lib/site";
import type { Faq } from "@/lib/schema";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Austin Homes for Sale | Historic 78703 Listings",
  description:
    "Browse homes for sale in Clarksville, the historic neighborhood in Austin, Texas (78703). Live MLS listings of cottages, bungalows, condos, and luxury new construction, with a local specialist.",
  path: "/clarksville-homes-for-sale",
});

export default async function HomesForSalePage() {
  const listings = await getActiveListings();
  const snap = await getMarketSnapshot();
  const asOfLabel = fmtDate(snap.asOf.slice(0, 10));

  // Live AEO FAQs: direct, extractable answers to the exact questions buyers
  // (and AI answer engines) ask, built from the current MLS snapshot so the
  // numbers are never stale. FaqSection emits these as FAQPage JSON-LD.
  const faqs: Faq[] = [
    {
      q: "How many homes are for sale in Clarksville, Austin?",
      a: `As of ${asOfLabel}, there are ${snap.activeCount} homes for sale inside the Clarksville boundary in Austin, Texas (ZIP 78703), ranging from about ${usdShort(snap.lowPrice)} to ${usdShort(snap.highPrice)}. Inventory in this small historic neighborhood is scarce, and the best homes often sell before they reach the national portals. This count updates daily from the MLS.`,
    },
    {
      q: "What is the median home price in Clarksville, Austin?",
      a: `As of ${asOfLabel}, the median list price for homes for sale in Clarksville (78703) is about ${usdShort(snap.medianListPrice)}, or roughly $${snap.avgPricePerSqFt} per square foot. Those are current asking prices for active listings; for closed-sale benchmarks, see the Clarksville market report. Figures refresh automatically from the MLS.`,
    },
    {
      q: "What types of homes are for sale in Clarksville?",
      a: "Clarksville's for-sale mix spans restored Craftsman bungalows and Victorian-era cottages on small historic lots, mid-century garden condos, and a growing set of luxury modern infill homes and new-construction condominiums such as The Belvedere and Westline. Condos offer the lower entry points; single-family homes and estates run higher.",
    },
    {
      q: "Who is a good real estate agent for Clarksville, Austin?",
      a: `Luke Allen is a licensed Texas REALTOR (TREC #788149) with Austin Marketing + Development Group who specializes in Clarksville and the Old West Austin area (78703). He works the neighborhood directly, is on the sales team for The Clarksville Condominiums, and regularly sources off-market homes that never reach Zillow or the other portals. Reach him at ${AGENT.phone} or ${AGENT.email}.`,
    },
    {
      q: "Where is Clarksville in Austin?",
      a: "Clarksville is a historic neighborhood in Austin, Texas, in ZIP code 78703, just west of downtown and northeast of MoPac (Loop 1). It sits within the Old West Austin Historic District, between Old Enfield, Tarrytown, and downtown. It should not be confused with Clarksville, Tennessee.",
    },
    {
      q: "Why use a Clarksville specialist instead of a portal like Zillow?",
      a: "Clarksville is a small, low-inventory, high-intent market where local knowledge decides outcomes: which blocks fit your life, whether a specific address carries landmark restrictions, and when a listing is coming before it hits the portals. Luke Allen works this neighborhood directly and brings buyers homes, including off-market ones, that the portals never show.",
    },
  ];

  const overview = !snap.isSample ? (
    <section className="border-b border-line bg-cream py-14">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>The current picture</Eyebrow>
            <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
              Clarksville homes for sale, right now
            </h2>
          </div>
          <span className="font-label text-[0.56rem] text-brass-deep">
            Live from the MLS, {asOfLabel}
          </span>
        </div>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-soft">
          As of {asOfLabel}, there are{" "}
          <strong className="text-ink">{snap.activeCount} homes for sale</strong> inside the
          Clarksville boundary in Austin, Texas (78703), priced from {usdShort(snap.lowPrice)} to{" "}
          {usdShort(snap.highPrice)}, with a median list price of{" "}
          <strong className="text-ink">{usdShort(snap.medianListPrice)}</strong> (about $
          {snap.avgPricePerSqFt} per square foot). Inventory is scarce, and the best homes often sell
          before they reach the national portals.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat value={String(snap.activeCount)} label="Homes for sale" />
          <Stat value={usdShort(snap.medianListPrice)} label="Median list price" />
          <Stat value={usdShort(snap.lowPrice)} label="Starting from" />
          <Stat value={usdShort(snap.highPrice)} label="Up to" />
        </div>
      </Container>
    </section>
  ) : null;

  return (
    <ListingsView
      eyebrow="For Sale"
      title="Clarksville homes for sale"
      lead="Every active listing inside the Clarksville boundary, rendered as real pages, with the local context the portals leave out."
      photo={PHOTOS.streetscape}
      listings={listings}
      overview={overview}
      asOf={DATA_AS_OF}
      crumbs={[{ name: "Homes for Sale", path: "/clarksville-homes-for-sale" }]}
      faqs={faqs}
      intro={
        <>
          <p>
            Clarksville is one of Austin&rsquo;s smallest and most sought-after neighborhoods, so
            inventory is genuinely scarce. What comes to market spans a wide range: restored
            Craftsman bungalows and Victorian-era cottages on small historic lots, mid-century
            garden condos, and a growing set of luxury modern infill homes and new-construction
            condominiums like The Belvedere and Westline.
          </p>
          <p>
            Because the neighborhood is small, a single month&rsquo;s listings rarely tell the whole
            story. Use the filters to focus by type or price, and reach out for the homes that have
            not hit the portals yet. Every listing here is server-rendered on this domain, so you
            and the search engines see the same complete data.
          </p>
        </>
      }
      related={[
        { href: "/clarksville-condos-for-sale", title: "Condos for sale", blurb: "Lock-and-leave living and entry-point ownership in Clarksville." },
        { href: "/clarksville-bungalows-for-sale", title: "Bungalows for sale", blurb: "Historic Craftsman cottages on small, walkable lots." },
        { href: "/clarksville-luxury-homes", title: "Luxury homes", blurb: "The $2M-plus tier: estates, infill, and signature new builds." },
        { href: "/clarksville-new-construction", title: "New construction", blurb: "The Belvedere, Westline, The Clarksville, and more." },
        { href: "/clarksville-market-report", title: "Market report", blurb: "Dated, sourced values so you know what is real." },
        { href: "/clarksville-realtor", title: "Clarksville realtor", blurb: "Why a neighborhood specialist beats a portal here." },
      ]}
    />
  );
}
