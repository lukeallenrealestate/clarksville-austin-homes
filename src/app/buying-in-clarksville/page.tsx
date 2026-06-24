import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { LINKS } from "@/lib/content/related";
import { HOME_FAQS } from "@/lib/content/faqs";

export const metadata: Metadata = pageMeta({
  title: "Buying a Home in Clarksville, Austin | A Local Buyer's Guide",
  description:
    "How to buy in Clarksville, Austin (78703): winning a scarce, high-intent market, running a historic landmark designation check, and getting to off-market homes first.",
  path: "/buying-in-clarksville",
});

const steps = [
  {
    n: "01",
    t: "Define the real target",
    d: "Clarksville is small and varied. We narrow by block, home type (cottage, bungalow, condo, infill), and the trade-offs you actually care about, so you recognize the right home instantly.",
  },
  {
    n: "02",
    t: "Get ahead of inventory",
    d: "With roughly 2.7 months of supply, the right home may not be listed today. A saved search plus Luke's off-market relationships put you in front of homes before they hit the portals.",
  },
  {
    n: "03",
    t: "Run a designation check",
    d: "Before any offer, we confirm whether the specific address carries a City of Austin local historic landmark designation, which governs renovation and demolition. This protects your plans and your budget.",
  },
  {
    n: "04",
    t: "Price and structure the offer",
    d: "Each Clarksville sale is a small sample, so comps require judgment, not an algorithm. We build an offer that is competitive and protects you, then negotiate to a sale-to-list that respects your number.",
  },
];

export default function BuyingPage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <PageHero
        eyebrow="For Buyers"
        title="Buying in Clarksville, the right way"
        lead="A scarce, high-intent market rewards preparation and access over luck. Here is how a single-neighborhood specialist gets you the home, and protects you on the way in."
        photo={PHOTOS.bungalow}
        crumbs={[{ name: "Buying", path: "/buying-in-clarksville" }]}
      />

      <section className="bg-paper py-16">
        <Container>
          <SectionHeading
            eyebrow="The process"
            title="Four moves that decide a Clarksville purchase"
            lead="Buying here is less about touring everything and more about being ready for the right thing."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="bg-paper p-8">
                <span className="font-display font-num text-4xl text-brass/60">{s.n}</span>
                <h3 className="font-display mt-3 text-2xl text-ink">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection faqs={HOME_FAQS} title="Buyer questions about Clarksville" />
      <RelatedLinks
        links={[LINKS.insightMoving, LINKS.homesForSale, LINKS.market]}
        title="Start your search"
      />
      <ContactCta
        intent="buy"
        heading="Ready to find your Clarksville home?"
        cta="Start the search"
      />
    </>
  );
}
