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
import { MARKET_SOURCES, type MarketStat } from "@/lib/content/market";

export const metadata: Metadata = pageMeta({
  title: "Is Now a Good Time to Buy or Sell in Clarksville? | 78703 Market Timing",
  description:
    "An honest read on timing the Clarksville, Austin (78703) market: what the current signals say for buyers and sellers, what actually decides your timing, and why trying to time the exact bottom or top rarely pays. Figures dated and sourced.",
  path: "/best-time-to-buy-or-sell-clarksville",
  type: "article",
});

// Pull the primary (most credible) MLS snapshot straight from the single source
// of truth, so every figure here stays dated, sourced, and consistent with the
// market report. No numbers are invented on this page.
const primary = MARKET_SOURCES[0];
const pick = (label: string) => primary.stats.find((s) => s.label === label);
const signals: MarketStat[] = ["Median sold price", "Months of supply", "Days on market", "Sale-to-list ratio"]
  .map(pick)
  .filter((s): s is MarketStat => Boolean(s));

const buyerPoints = [
  {
    h: "More room to negotiate than in the frenzy",
    p: `A sale-to-list ratio near ${pick("Sale-to-list ratio")?.value ?? "the high 80s"} and homes taking around ${pick("Days on market")?.value ?? "three months"} to sell mean buyers have leverage the 2021 market never allowed. Thoughtful offers get entertained.`,
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
    p: "While citywide Austin prices have softened, Clarksville's scarcity and historic character keep it resilient and well above the Austin median. That is the seller's tailwind here.",
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

const FAQS = [
  {
    q: "Is now a good time to buy a home in Clarksville?",
    a: `For a buyer with a multi-year horizon, the current signals are favorable: homes are taking around ${pick("Days on market")?.value ?? "three months"} to sell and the sale-to-list ratio is near ${pick("Sale-to-list ratio")?.value ?? "the high 80s"} (${primary.source}, as of ${primary.asOf}), so there is more negotiating room than during the peak. The caveat is scarcity: the best Clarksville homes still move quickly, so timing the overall market matters less than being ready when the right home appears.`,
  },
  {
    q: "Is it a good time to sell a home in Clarksville?",
    a: "Clarksville remains resilient and well above the citywide Austin median thanks to scarcity and historic protection, which supports sellers. The difference from the peak is that pricing to real comparable sales now matters more, because homes that are overpriced sit longer. A correctly priced, well-presented Clarksville home still draws strong interest.",
  },
  {
    q: "Are home prices in Clarksville going up or down?",
    a: `Citywide Austin prices softened year over year heading into 2026, but Clarksville has held well above the city median because supply is so limited. As of ${primary.asOf}, the trailing-12-month median sold price for Clarksville single-family homes was ${pick("Median sold price")?.value ?? "well above the city median"} (${primary.source}). Because monthly samples here are small, trailing figures are more reliable than any single month. See the market report for the current read.`,
  },
  {
    q: "Should I wait for interest rates to drop before buying?",
    a: "Waiting for a lower rate is a gamble on two unknowns at once: where rates go and what home prices and competition do in the meantime. You can refinance a rate later, but you cannot go back and buy a home that sold to someone else at today's price. If the home and your hold period are right, the rate is usually a secondary consideration.",
  },
  {
    q: "How long do homes take to sell in Clarksville?",
    a: `As of ${primary.asOf}, Clarksville single-family homes were averaging about ${pick("Days on market")?.value ?? "87 days"} on market on a trailing-12-month basis (${primary.source}). That is longer than the 2021 peak and reflects a more balanced market, though well-priced, well-presented homes still sell faster than the average.`,
  },
];

export default function MarketTimingPage() {
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
            updated: "2026-10-06",
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
              drive your decision. Every figure here is dated and sourced, and you can see the full
              picture on the{" "}
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
          <div className="max-w-2xl">
            <Eyebrow tone="dark">The signals right now</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.8rem]">
              What the numbers actually say
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {signals.map((s) => (
              <Reveal key={s.label} className="rounded-[3px] border border-white/10 bg-heritage-soft p-6">
                <div className="font-display font-num text-3xl text-brass">{s.value}</div>
                <div className="font-label mt-2 text-[0.56rem] text-paper">{s.label}</div>
                {s.note ? <div className="mt-1 text-xs leading-relaxed text-cream-soft/70">{s.note}</div> : null}
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist">
            Source: {primary.source}, as of {primary.asOf}. Clarksville's small sample means
            trailing-12-month figures are far more reliable than any single month. Confirm the current
            read on the{" "}
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
            , or read how Luke sells on the{" "}
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
            Figures cited are trailing-12-month, MLS-based readings as of {primary.asOf} and are for
            general information, not a prediction or a guarantee of future results. Markets change;
            confirm the current picture on the market report before acting.
          </p>
        </Container>
      </section>
    </>
  );
}
