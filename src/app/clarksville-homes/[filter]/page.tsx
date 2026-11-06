import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getActiveListings, getMarketSnapshot, usdShort, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";
import { Container, Eyebrow, Stat } from "@/components/ui";
import { fmtDate } from "@/lib/content/guides";
import type { Faq } from "@/lib/schema";
import { HOME_FILTERS, getHomeFilter } from "@/lib/content/home-filters";

export const revalidate = 3600;

export function generateStaticParams() {
  return HOME_FILTERS.map((f) => ({ filter: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filter: string }>;
}): Promise<Metadata> {
  const { filter } = await params;
  const f = getHomeFilter(filter);
  if (!f) return {};
  return pageMeta({
    title: f.title,
    description: f.metaDescription,
    path: `/clarksville-homes/${f.slug}`,
  });
}

export default async function FilterPage({ params }: { params: Promise<{ filter: string }> }) {
  const { filter } = await params;
  const f = getHomeFilter(filter);
  if (!f) notFound();

  const all = await getActiveListings();
  const listings = all.filter(f.predicate);
  const snap = await getMarketSnapshot();
  const asOfLabel = fmtDate(snap.asOf.slice(0, 10));

  const count = listings.length;
  const prices = listings.map((l) => l.price).filter(Boolean).sort((a, b) => a - b);
  const entry = prices.length ? prices[0] : 0;
  const median = prices.length ? prices[Math.floor(prices.length / 2)] : 0;

  const dynamicFaq: Faq = {
    q: `How many ${f.noun} are for sale in Clarksville, Austin?`,
    a: count
      ? `As of ${asOfLabel}, there ${count === 1 ? "is" : "are"} ${count} ${f.noun} listed inside the Clarksville boundary (78703)${
          entry ? `, starting around ${usdShort(entry)}` : ""
        }. This count updates daily from the MLS.`
      : `As of ${asOfLabel}, no ${f.noun} are listed inside the Clarksville boundary (78703) right now. Inventory in this small neighborhood is thin, so ask Luke to set up a saved search and you will hear first when one lists.`,
  };
  const faqs = [dynamicFaq, ...f.faqs];

  const overview =
    !snap.isSample && count > 0 ? (
      <section className="border-b border-line bg-cream py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>{f.eyebrow}</Eyebrow>
              <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
                {f.navLabel} in Clarksville, right now
              </h2>
            </div>
            <span className="font-label text-[0.56rem] text-brass-deep">Live from the MLS, {asOfLabel}</span>
          </div>
          <p className="mt-5 max-w-3xl leading-relaxed text-ink-soft">
            As of {asOfLabel}, there {count === 1 ? "is" : "are"}{" "}
            <strong className="text-ink">
              {count} {f.noun}
            </strong>{" "}
            listed inside the Clarksville boundary (Austin, 78703)
            {entry ? (
              <>
                , starting around <strong className="text-ink">{usdShort(entry)}</strong>
              </>
            ) : null}
            . Clarksville inventory is scarce, so the best homes often sell before they reach the
            national portals.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Stat value={String(count)} label={f.navLabel} />
            <Stat value={entry ? usdShort(entry) : "N/A"} label="Starting from" />
            <Stat value={median ? usdShort(median) : "N/A"} label="Median list price" />
          </div>
        </Container>
      </section>
    ) : null;

  return (
    <ListingsView
      eyebrow={f.eyebrow}
      title={f.title}
      lead={f.lead}
      photo={PHOTOS.bungalow}
      listings={listings}
      overview={overview}
      asOf={DATA_AS_OF}
      crumbs={[
        { name: "Homes for Sale", path: "/clarksville-homes-for-sale" },
        { name: f.navLabel, path: `/clarksville-homes/${f.slug}` },
      ]}
      faqs={faqs}
      intro={<>{f.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</>}
      related={[
        { href: "/clarksville-homes-for-sale", title: "All homes for sale", blurb: "Every active Clarksville listing across every price and type." },
        { href: "/clarksville-condos-for-sale", title: "Condos for sale", blurb: "Lock-and-leave and entry-point ownership in 78703." },
        { href: "/clarksville-homes-under-1-million", title: "Homes under $1M", blurb: "The affordable entry into Clarksville." },
        { href: "/clarksville-market-report", title: "Market report", blurb: "Live and dated Clarksville values so you know what is real." },
      ]}
    />
  );
}
