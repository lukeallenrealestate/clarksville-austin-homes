import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";
import { getMarketSnapshot, usdShort } from "@/lib/listings";

export const metadata: Metadata = pageMeta({
  title: "Is Now a Good Time to Buy or Sell in Clarksville? | 78703 Market Timing",
  description:
    "An honest read on timing the Clarksville, Austin (78703) market: what the live inventory signals say for buyers and sellers, what actually decides your timing, and why trying to time the exact bottom or top rarely pays. Figures refresh automatically from the MLS.",
  path: "/best-time-to-buy-or-sell-clarksville",
  type: "article",
});

const buyerPoints = [
  {
    h: "More room to negotiate than in the frenzy",
    p: "Homes here take longer to sell than they did at the 2021 peak, which hands buyers leverage that market never allowed. The live days-on-market figure above tells you how patient the current market really is. Thoughtful offers get entertained.",
  },
  {
    h: "But scarcity still rules the good ones",
    p: "Clarksville is tiny and historically protected. Truly special homes, the restored cottage or the right block, still move quickly. Leverage on the market overall does not mean patience on the best listing.",
  },
  {
    h: "Rates are a payment question, not a price question",
    p: "You can refinance a rate later. You cannot renegotiate the price of a home you lost. If the home and the hold period are right, the financing is a secondary problem.",
  },
];

const sellerPoints = [
  {
    h: "Clarksville holds well above the city",
    p: "While citywide Austin prices have softened in recent years, Clarksville's scarcity and historic character keep it resilient and well above the Austin median. That is the seller's tailwind here.",
  },
  {
    h: "Pricing right matters more now",
    p: "With homes taking longer to sell than at the peak, an aspirational list price sits and goes stale. Priced to the real comps, a Clarksville home still commands attention.",
  },
  {
    h: "Presentation and off-market reach",
    p: "In a more selective market, the quality of the preparation, photography, and the private buyer network behind the listing is what separates a quick, strong sale from a slow one.",
  },
];

const deciders = [
  { h: "How long you will hold", p: "The single biggest factor. Over five to ten years in a scarce neighborhood like Clarksville, the exact month you bought matters far less than that you own." },
  { h: "Your life, not the headline", p: "A growing family, a job move, retirement. The right time is usually set by your life, and the market is something you work with, not wait on." },
  { h: "The specific home", p: "Clarksville trades home by home, not as an index. The right house coming available is a stronger signal than any market-wide average." },
  { h: "Your real numbers", p: "Carrying costs, the payment you are comfortable with, and the equity you are moving. Timing that ignores your own math is just guessing." },
];

export default async function MarketTimingPage() {
  const snap = await getMarketSnapshot();
  const asOf = new Date(snap.asOf).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const signals = [
    { value: String(snap.activeCount), label: "Active listings", note: "for sale right now" },
    { value: usdShort(snap.medianListPrice), label: "Median list price", note: "asking, active listings" },
    { value: String(snap.medianDaysOnMarket), label: "Median days on market", note: "how long current homes have sat" },
    { value: `$${snap.avgPricePerSqFt}`, label: "Avg price / sq ft", note: "active listings" },
  ];

  const FAQS = [
    {
      q: "Is now a good time to buy a home in Clarksville?",
      a: `For a buyer with a multi-year horizon, the current signals are reasonable. As of ${asOf}, about ${snap.activeCount} homes were listed inside the Clarksville boundary, with a median asking price near ${usdShort(snap.medianListPrice)} and current listings sitting a median of roughly ${snap.medianDaysOnMarket} days, longer than the 2021 peak, which gives buyers more negotiating room. The caveat is scarcity: the best Clarksville homes still move quickly, so being ready when the right home appears matters more than timing the overall market. These figures refresh automatically from the MLS.`,
    },
    {
      q: "Is it a good time to sell a home in Clarksville?",
      a: "Clarksville remains resilient and well above the citywide Austin median thanks to scarcity and historic protection, which supports sellers. The difference from the peak is that pricing to real comparable sales now matters more, because homes that are overpriced sit longer. A correctly priced, well-presented Clarksville home still draws strong interest.",
    },
    {
      q: "Are home prices in Clarksville going up or down?",
      a: `Citywide Austin prices have softened in recent years, but Clarksville has held well above the city median because supply is so limited. As of ${asOf}, the median asking price across active Clarksville listings was about ${usdShort(snap.medianListPrice)}. Because monthly samples here are small, trailing figures are more reliable than any single month, so read this alongside the Clarksville market report.`,
    },
    {
      q: "Should I wait for interest rates to drop before buying?",
      a: "Waiting for a lower rate is a gamble on two unknowns at once: where rates go and what home prices and competition do in the meantime. You can refinance a rate later, but you cannot go back and buy a home that sold to someone else at today's price. If the home and your hold period are right, the rate is usually a secondary consideration.",
    },
    {
      q: "How long do homes take to sell in Clarksville?",
      a: `As of ${asOf}, the homes currently listed inside the Clarksville boundary had sat a median of roughly ${snap.medianDaysOnMarket} days on market, a signal that updates automatically from the MLS. That is longer than the 2021 peak and reflects a more balanced market, though well-priced, well-presented homes still sell faster than the average.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "best-time-to-buy-or-sell-clarksville",
            title: "Is Now a Good Time to Buy or Sell in Clarksville?",
            description:
              "An honest read on timing the Clarksville, Austin (78703) market for buyers and sellers.",
            date: "2026-10-06",
            updated: snap.asOf.slice(0, 10),
            image: PHOTOS.streetscape.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.streetscape.src}
          alt={PHOTOS.streetscape.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">Market timing, honestly</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.2rem]">
              Is now a good time to buy or sell in Clarksville?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              The honest answer is not a headline. It is what the current signals say, what actually
              decides your timing, and why chasing the exact bottom or top rarely pays in a
              neighborhood this scarce.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Everyone wants to be told to buy at the bottom and sell at the top. In a market as small
              as Clarksville, where only a few dozen homes change hands in a year, that precision is a
              myth. A single month's numbers swing wildly on one or two sales.
            </p>
            <p>
              So this is not a prediction. It is a clear read of where the signals sit today, what they
              mean depending on which side of the deal you are on, and the factors that should actually
              drive your decision. The figures below refresh automatically from the MLS, and you can see
              the full picture on the{" "}
              <Link href="/clarksville-market-report" className="font-semibold text-brass-deep underline">
                Clarksville market report
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* THE SIGNALS NOW */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow tone="dark">The signals right now</Eyebrow>
              <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.8rem]">
                What the market says today
              </h2>
            </div>
            <span className="font-label text-[0.56rem] text-brass">Auto-updated {asOf} from the MLS</span>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {signals.map((s) => (
              <Reveal key={s.label} className="rounded-[3px] border border-white/10 bg-heritage-soft p-6">
                <div className="font-display font-num text-3xl text-brass">{s.value}</div>
                <div className="font-label mt-2 text-[0.56rem] text-paper">{s.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-cream-soft/70">{s.note}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist">
            These describe active inventory, the asking side of the market, and update automatically
            each day. Clarksville's small sample means trailing closed-sale figures are more reliable
            than any single month, so read them alongside the{" "}
            <Link href="/clarksville-market-report" className="underline hover:text-brass">
              market report
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* BUYERS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>If you are buying</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              What these signals mean for a buyer
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {buyerPoints.map((b) => (
              <Reveal key={b.h} className="border-t border-line pt-6">
                <h3 className="font-display text-xl text-ink">{b.h}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{b.p}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            Start with{" "}
            <Link href="/clarksville-homes-for-sale" className="font-semibold text-brass-deep underline">
              homes for sale
            </Link>{" "}
            and the{" "}
            <Link href="/off-market-clarksville-homes" className="font-semibold text-brass-deep underline">
              off-market homes
            </Link>{" "}
            that never reach the public sites.
          </p>
        </Container>
      </section>

      {/* SELLERS */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>If you are selling</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              What these signals mean for a seller
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {sellerPoints.map((b) => (
              <Reveal key={b.h} className="border-t border-line pt-6">
                <h3 className="font-display text-xl text-ink">{b.h}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{b.p}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            See what your home could bring with a{" "}
            <Link href="/what-is-my-clarksville-home-worth" className="font-semibold text-brass-deep underline">
              Clarksville home valuation
            </Link>
            , what it{" "}
            <Link href="/cost-to-sell-a-home-in-clarksville" className="font-semibold text-brass-deep underline">
              costs to sell
            </Link>
            , or how Luke sells on the{" "}
            <Link href="/clarksville-listing-agent" className="font-semibold text-brass-deep underline">
              listing agent
            </Link>{" "}
            page.
          </p>
        </Container>
      </section>

      {/* WHAT ACTUALLY DECIDES TIMING */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The truth about timing</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              What should actually decide your timing
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {deciders.map((d) => (
              <Reveal key={d.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{d.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{d.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Get a straight read for your situation"
        body="Timing is personal. Tell Luke whether you are buying or selling, your timeline, and the home or block in question, and he will give you an honest, specific read on Clarksville, not a sales pitch."
        intent="general"
        cta="Ask Luke for an honest read"
      />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Timing the Clarksville market, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs leading-relaxed text-muted">
            Live figures describe active listings inside the Clarksville boundary as of {asOf} and
            refresh automatically from the MLS. They are the asking side of the market, not closed
            sales, and are for general information, not a prediction or guarantee of future results.
          </p>
        </Container>
      </section>
    </>
  );
}
