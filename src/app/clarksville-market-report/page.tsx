import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading, Stat } from "@/components/ui";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { fmtDate, getGuide } from "@/lib/content/guides";
import {
  MARKET_SOURCES,
  MARKET_CAUTION,
  MARKET_UPDATED,
  PRICE_BANDS,
  LUXURY_CEILING,
} from "@/lib/content/market";
import { MARKET_FAQS } from "@/lib/content/faqs";
import { LINKS } from "@/lib/content/related";
import { AGENT } from "@/lib/site";

const guide = getGuide("clarksville-market-report")!;

const reliabilityLabel: Record<string, string> = {
  primary: "Most reliable",
  context: "Context",
  caution: "Use with caution",
};

export const metadata: Metadata = pageMeta({
  title: "Clarksville Market Report | Home Prices & Trends (78703)",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function MarketReportPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: guide.slug,
            title: guide.title,
            description: guide.description,
            date: guide.published,
            updated: guide.updated,
            image: guide.hero.src,
          }),
          faqSchema(MARKET_FAQS),
        ]}
      />
      <PageHero
        eyebrow="Dated & Sourced"
        title="Clarksville market report"
        lead="What homes really sell for in Clarksville, Austin (78703), with the date and source on every number. Because this market is small, we lead with trailing-12-month MLS figures and treat single-month estimates as unreliable."
        photo={guide.hero}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: "Market Report", path: `/${guide.slug}` },
        ]}
        meta={
          <span className="font-label text-[0.6rem] text-brass">
            Last updated {fmtDate(MARKET_UPDATED)} by {AGENT.name}, TREC #{AGENT.trecLicense}
          </span>
        }
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="prose-clark max-w-3xl">
            <p>
              Clarksville is hard to price with a single number, and anyone who gives you one without
              a date and a source is guessing. The neighborhood is small, its listings skew heavily
              toward condos, and only a handful of homes may close in a given month. That is why
              estimates range from about $1.1 million to $1.6 million depending on what is being
              measured. Below is each credible read, labeled by source, date, and how much to trust
              it.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {MARKET_SOURCES.map((src) => (
              <div key={src.source} className="rounded-[3px] border border-line bg-cream p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl text-ink">{src.source}</h2>
                    <p className="font-label mt-1 text-[0.55rem] text-muted">As of {src.asOf}</p>
                  </div>
                  <span
                    className={`font-label rounded-[2px] border px-2.5 py-1 text-[0.55rem] ${
                      src.reliability === "primary"
                        ? "border-canopy/40 bg-heritage text-paper"
                        : "border-brass/30 bg-brass-soft text-brass-deep"
                    }`}
                  >
                    {reliabilityLabel[src.reliability]}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{src.summary}</p>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-3 lg:grid-cols-4">
                  {src.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display font-num text-2xl text-ink sm:text-3xl">{s.value}</div>
                      <div className="font-label mt-1.5 text-[0.55rem] text-brass-deep">{s.label}</div>
                      {s.note ? <div className="mt-0.5 text-xs text-muted">{s.note}</div> : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[3px] border-l-2 border-brick bg-brass-soft p-6">
            <Eyebrow>Why estimates conflict</Eyebrow>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">{MARKET_CAUTION}</p>
          </div>
        </Container>
      </section>

      {/* Price bands + luxury ceiling */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow tone="dark">Single-family price bands</Eyebrow>
            <p className="mt-4 text-sm text-cream-soft">
              Share of Clarksville single-family sales by price, per the Keenan Group at Compass MLS
              polygon snapshot (June 23, 2026).
            </p>
            <ul className="mt-7 space-y-4">
              {PRICE_BANDS.map((b) => (
                <li key={b.band}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-paper">{b.band}</span>
                    <span className="font-num text-brass">{b.share}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-heritage-soft">
                    <div
                      className="h-full rounded-full bg-brass"
                      style={{ width: b.share.replace(/[^0-9]/g, "") + "%" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow tone="dark">The luxury ceiling</Eyebrow>
            <p className="mt-4 leading-relaxed text-cream-soft">{LUXURY_CEILING}</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Stat tone="dark" value="$3.4M" label="Westline, to" />
              <Stat tone="dark" value="$1.5M" label="78703 median value" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container>
          <SectionHeading
            eyebrow="What it means for you"
            title="Translating the numbers into a strategy"
          />
          <div className="prose-clark mt-8 max-w-3xl">
            <p>
              For buyers, the takeaway is patience and access. With roughly 2.7 months of supply and
              a sale-to-list ratio near 89 percent, well-located homes do not linger, but the right
              one may not be listed today. A saved search and off-market relationships matter more
              here than refreshing a portal.
            </p>
            <p>
              For sellers, presentation and pricing carry more weight than in higher-volume
              neighborhoods, because each sale is a small sample that sets the comp for the next one.
              A hyperlocal valuation, not an automated estimate, is the only honest starting point.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection faqs={MARKET_FAQS} title="Clarksville market questions" />
      <RelatedLinks links={[LINKS.insightInvestment, LINKS.selling, LINKS.homesForSale]} />
      <ContactCta
        intent="value"
        showAddress
        heading="Want a real number for your home?"
        body="Automated estimates miss badly in a market this small. Luke prepares a hyperlocal comparative market analysis from trailing-12-month Clarksville data. Send your address for a true valuation."
        cta="Request my home value"
      />
    </>
  );
}
