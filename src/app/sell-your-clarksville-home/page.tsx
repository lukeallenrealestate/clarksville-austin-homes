import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading, Stat } from "@/components/ui";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { LeadForm } from "@/components/LeadForm";
import { PHOTOS } from "@/lib/photos";
import { LINKS } from "@/lib/content/related";
import { SELLER_FAQS } from "@/lib/content/faqs";

export const metadata: Metadata = pageMeta({
  title: "Sell Your Clarksville Home | Free Home Valuation (Austin 78703)",
  description:
    "What is your Clarksville home worth? Get a hyperlocal valuation from a 78703 specialist, built on trailing-12-month MLS data, not an automated estimate that misses in a small market.",
  path: "/sell-your-clarksville-home",
});

const reasons = [
  {
    t: "Automated estimates miss here",
    d: "Zestimate-style tools rely on volume. Clarksville closes only a handful of homes a month and mixes condos with single-family, so algorithmic values swing wildly. A human comp set is the only honest read.",
  },
  {
    t: "Designation changes value",
    d: "Whether your home carries a City of Austin local historic landmark designation affects buyer pool and price. We account for it, and position it, correctly.",
  },
  {
    t: "Presentation sets the comp",
    d: "Each sale becomes the comp for the next. Preparing and pricing your home well does not just sell it; it lifts the whole block, and your net.",
  },
];

export default function SellPage() {
  return (
    <>
      <JsonLd data={faqSchema(SELLER_FAQS)} />
      <PageHero
        eyebrow="For Sellers"
        title="What is your Clarksville home worth?"
        lead="Get a real number from a specialist who sells this neighborhood, built on trailing-12-month MLS data for your block, not a national algorithm guessing from afar."
        photo={PHOTOS.porch}
        crumbs={[{ name: "Sell / Home Value", path: "/sell-your-clarksville-home" }]}
      />

      <section className="bg-paper py-16">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1.3fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why a local valuation"
              title="Pricing Clarksville takes judgment, not an algorithm"
            />
            <div className="mt-8 space-y-6">
              {reasons.map((r) => (
                <div key={r.t} className="border-l-2 border-brass pl-5">
                  <h3 className="font-display text-xl text-ink">{r.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              <Stat value="89%" label="Sale to list" sub="Trailing 12 mo." />
              <Stat value="~87" label="Days on market" />
              <Stat value="2.7" label="Months supply" />
            </div>
            <p className="mt-4 text-xs text-muted">
              Figures: Keenan Group at Compass MLS polygon snapshot, June 23, 2026. Your home may
              differ; that is the point of a custom analysis.
            </p>
          </div>

          <aside className="rounded-[3px] border border-line bg-cream p-7 lg:sticky lg:top-24">
            <h2 className="font-display text-2xl text-ink">Request your home valuation</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Send your address and Luke will prepare a hyperlocal comparative market analysis, no
              obligation.
            </p>
            <div className="mt-5">
              <LeadForm defaultIntent="value" showAddress cta="Get my valuation" />
            </div>
          </aside>
        </Container>
      </section>

      <FaqSection faqs={SELLER_FAQS} title="Clarksville seller questions" />
      <RelatedLinks links={[LINKS.market, LINKS.neighborhood, LINKS.homesForSale]} />
      <ContactCta
        intent="value"
        showAddress
        heading="Curious what your home would bring today?"
        body="No pressure and no obligation. Just an honest, local read on your Clarksville home's value, prepared by hand."
        cta="Request my home value"
      />
    </>
  );
}
