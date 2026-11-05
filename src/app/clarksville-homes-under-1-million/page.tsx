import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getActiveListings, getMarketSnapshot, usdShort, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";
import { Container, Eyebrow, Stat } from "@/components/ui";
import { fmtDate } from "@/lib/content/guides";
import type { Faq } from "@/lib/schema";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Homes Under $1 Million | Austin 78703",
  description:
    "Can you buy in Clarksville, Austin (78703) under $1 million? The entry points, mostly boutique and established condos, with live listings under $1M and a local specialist.",
  path: "/clarksville-homes-under-1-million",
});

const CAP = 1_000_000;

export default async function HomesUnderOneMillionPage() {
  const all = await getActiveListings();
  const listings = all.filter((l) => l.price > 0 && l.price < CAP);
  const snap = await getMarketSnapshot();
  const asOfLabel = fmtDate(snap.asOf.slice(0, 10));
  const count = listings.length;
  const entry = listings.length ? Math.min(...listings.map((l) => l.price)) : 0;
  const condoCount = listings.filter((l) => l.propertyType === "condo").length;

  const faqs: Faq[] = [
    {
      q: "Can you buy a home in Clarksville, Austin for under $1 million?",
      a: `Yes, though the options are mostly condominiums. As of ${asOfLabel}, there ${
        count === 1 ? "was" : "were"
      } ${count} active listing${count === 1 ? "" : "s"} under $1 million inside the Clarksville boundary (78703)${
        entry ? `, starting around ${usdShort(entry)}` : ""
      }. Single-family houses here generally trade above $1 million, so the realistic sub-$1M path is a boutique or established condo. This count updates daily from the MLS.`,
    },
    {
      q: "What is the most affordable way to own in Clarksville?",
      a: "Condominiums are the entry point. Boutique and established condo communities offer ownership in 78703 starting in the high $300s, far below the single-family median, which lets buyers get into the neighborhood and its walkable lifestyle without an estate budget.",
    },
    {
      q: "Are there single-family homes under $1 million in Clarksville?",
      a: "They are rare. Clarksville is one of Austin's smallest and most sought-after historic neighborhoods, and detached houses on historic lots usually sell above $1 million. When a smaller cottage does come in under that line, it tends to move quickly, often before it reaches the portals, so an off-market relationship helps.",
    },
    {
      q: "What do condos cost in Clarksville, Austin?",
      a: "Clarksville condos range widely, from entry-level garden units in the high $300s to new-construction and luxury residences well above $1 million. The sub-$1M segment is mostly established condos and boutique buildings. See the condos page for current listings.",
    },
  ];

  const overview = !snap.isSample ? (
    <section className="border-b border-line bg-cream py-14">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>The affordable entry</Eyebrow>
            <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
              Owning in Clarksville under $1 million
            </h2>
          </div>
          <span className="font-label text-[0.56rem] text-brass-deep">Live from the MLS, {asOfLabel}</span>
        </div>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-soft">
          As of {asOfLabel}, there{" "}
          {count === 1 ? "is" : "are"}{" "}
          <strong className="text-ink">
            {count} active listing{count === 1 ? "" : "s"} under $1 million
          </strong>{" "}
          inside the Clarksville boundary (Austin, 78703)
          {entry ? (
            <>
              , starting around <strong className="text-ink">{usdShort(entry)}</strong>
            </>
          ) : null}
          . Nearly all are condominiums; detached houses here typically start above $1 million.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          <Stat value={String(count)} label="Listings under $1M" />
          <Stat value={entry ? usdShort(entry) : "N/A"} label="Entry price" />
          <Stat value={String(condoCount)} label="Of those, condos" />
        </div>
      </Container>
    </section>
  ) : null;

  return (
    <ListingsView
      eyebrow="Under $1M"
      title="Clarksville homes under $1 million"
      lead="The realistic entry into one of Austin's scarcest historic neighborhoods, mostly boutique and established condos, with the local context the portals leave out."
      photo={PHOTOS.bungalow}
      listings={listings}
      overview={overview}
      asOf={DATA_AS_OF}
      crumbs={[
        { name: "Homes for Sale", path: "/clarksville-homes-for-sale" },
        { name: "Under $1M", path: "/clarksville-homes-under-1-million" },
      ]}
      faqs={faqs}
      intro={
        <>
          <p>
            Clarksville is famous for its multimillion-dollar estates, but it is not only that. The
            neighborhood&rsquo;s condominiums, boutique new construction and established garden
            communities alike, open a genuine door to ownership here for well under seven figures.
            That is how many people first get into 78703: a lock-and-leave condo, walkable to West
            Lynn, in a neighborhood that holds its value.
          </p>
          <p>
            Detached historic houses are the scarce, higher-priced tier and usually trade above $1
            million. So if your budget is under that line, the path runs through the condo market, and
            through knowing which buildings and units are worth it. Below are the current listings
            under $1 million; reach out for the ones coming before they hit the portals.
          </p>
        </>
      }
      related={[
        { href: "/clarksville-condos-for-sale", title: "Condos for sale", blurb: "The main path to sub-$1M ownership in Clarksville." },
        { href: "/clarksville-condos", title: "Condo buildings", blurb: "A building-by-building guide to The Belvedere, Westline, and more." },
        { href: "/clarksville-homes-for-sale", title: "All homes for sale", blurb: "Every active Clarksville listing across every price." },
        { href: "/clarksville-lock-and-leave", title: "Lock-and-leave", blurb: "Low-maintenance condo living in 78703." },
      ]}
    />
  );
}
