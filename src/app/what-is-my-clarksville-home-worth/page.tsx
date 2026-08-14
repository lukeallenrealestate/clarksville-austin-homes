import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { LINKS } from "@/lib/content/related";

export const metadata: Metadata = pageMeta({
  title: "What Is My Clarksville Home Worth? | Free Home Valuation",
  description:
    "Get a real home valuation for Clarksville and Old West Austin (78703) from a local specialist, built on trailing-12-month MLS data, not an automated Zestimate.",
  path: "/what-is-my-clarksville-home-worth",
});

const steps = [
  {
    n: "1",
    title: "Share your address",
    body: "Send Luke your address and a few details about the home. It takes a minute, and there is no obligation.",
  },
  {
    n: "2",
    title: "Get a real valuation",
    body: "Luke prepares a considered value using trailing-12-month Clarksville sales, condition, lot, and any historic designation, not an algorithm.",
  },
  {
    n: "3",
    title: "Talk strategy",
    body: "You get an honest read on price and timing, including a quiet off-market sale if a public listing is not the right move.",
  },
];

const FAQS = [
  {
    q: "How much is my Clarksville home worth?",
    a: "Clarksville single-family homes generally sell in the low-to-mid seven figures, with wide variation by block, condition, lot, and historic designation. Because so few homes sell, an automated estimate is unreliable here. The accurate answer comes from a specialist comparing your home to real, recent Clarksville sales. Contact Luke Allen for a no-obligation valuation.",
  },
  {
    q: "Is a Zestimate accurate for Clarksville, Austin?",
    a: "Not usually. Automated estimates lean on volume and broad averages, and Clarksville has neither, only a handful of sales a year, a mix of condos and single-family homes, and landmark designations that materially change value. A Zestimate can be off by hundreds of thousands of dollars in a neighborhood like this. A local valuation on actual comps is far more reliable.",
  },
  {
    q: "How do you value a historic Clarksville home?",
    a: "You start with recent comparable sales, then adjust for the things that matter here: whether the home carries a binding City of Austin local historic landmark designation, its lot and condition, and demand for its specific block. Luke Allen also weighs off-market activity that never shows up in public data, which is often where the real market is set.",
  },
];

export default function ValuationPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: "what-is-my-clarksville-home-worth",
          title: "What Is My Clarksville Home Worth?",
          description:
            "Get a real home valuation for Clarksville and Old West Austin (78703) from a local specialist.",
          date: "2026-07-21",
          updated: "2026-07-21",
          image: PHOTOS.bungalow.src,
        })}
      />
      <PageHero
        eyebrow="Home Valuation"
        title="What is my Clarksville home worth?"
        lead="Not a Zestimate. A real valuation from a Clarksville specialist, built on the sales that actually set prices in 78703, and honest guidance on how to get the most for your home."
        photo={PHOTOS.bungalow}
        crumbs={[{ name: "Home Valuation", path: "/what-is-my-clarksville-home-worth" }]}
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <div className="prose-clark max-w-none">
            <p>
              Clarksville is one of the hardest neighborhoods in Austin to value from a screen. Only a
              handful of homes sell in a year, the mix of condos and single-family homes skews the
              averages, and a single historic landmark designation can move a number by hundreds of
              thousands of dollars. That is exactly why an automated estimate falls short here.
            </p>
            <h2>A valuation built on real Clarksville sales</h2>
            <p>
              Luke Allen values your home the way a buyer&rsquo;s appraiser and a serious buyer
              actually will: against recent, comparable Clarksville sales, adjusted for your lot,
              condition, and designation, and informed by{" "}
              <Link href="/off-market-clarksville-homes">off-market activity</Link> that never appears
              in public data. You get a number you can trust and the reasoning behind it. See the
              dated, sourced figures on the{" "}
              <Link href="/clarksville-market-report">Clarksville market report</Link> for context.
            </p>
            <p>
              Thinking further ahead than a valuation? The full{" "}
              <Link href="/sell-your-clarksville-home">guide to selling a Clarksville home</Link>{" "}
              walks through pricing, preparation, and the quiet off-market option.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[3px] border border-brass/40 bg-cream p-6 sm:p-8">
              <Eyebrow>No obligation</Eyebrow>
              <p className="font-display mt-3 text-2xl leading-tight text-ink">
                Get your Clarksville home value
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Send your address and Luke will prepare a considered valuation, usually the same day.
              </p>
              <div className="mt-5">
                <LeadForm defaultIntent="value" showAddress cta="Request my valuation" />
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <Container>
          <SectionHeading eyebrow="How it works" title="Three simple steps" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col bg-paper p-7">
                <span className="font-display font-num text-4xl text-brass">{s.n}</span>
                <h3 className="font-display mt-3 text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection faqs={FAQS} eyebrow="Home value FAQ" title="Clarksville home value questions" />

      <RelatedLinks
        title="Selling in Clarksville"
        links={[LINKS.selling, LINKS.market, LINKS.offMarket, LINKS.realtor, LINKS.insightInvestment]}
      />

      <ContactCta
        heading="Curious what your home would bring today?"
        body="Send Luke your address for a no-obligation Clarksville valuation and an honest conversation about price, timing, and the best way to sell, on or off the market."
        intent="value"
        showAddress
        cta="Request my valuation"
      />
    </>
  );
}
