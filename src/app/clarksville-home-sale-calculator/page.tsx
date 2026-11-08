import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { NetProceedsCalculator } from "@/components/NetProceedsCalculator";
import { articleSchema, faqSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Clarksville Home Sale Calculator | Net Proceeds (78703)",
  description:
    "Estimate your net proceeds from selling a home in Clarksville, Austin (78703). A free seller calculator: sale price minus payoff, commission, and closing costs.",
  path: "/clarksville-home-sale-calculator",
  type: "article",
});

const FAQS = [
  {
    q: "How do I calculate net proceeds when selling a home?",
    a: "Start with your expected sale price, subtract your remaining mortgage payoff, then subtract your selling costs: the agent commission (negotiable), Texas title and closing costs, and any concessions, repairs, or prep. What remains is your estimated net proceeds. This calculator does that math instantly; a listing agent can then prepare a precise, line-by-line net sheet.",
  },
  {
    q: "What costs does a seller pay at closing in Texas?",
    a: "Commonly the agent commission (negotiable), the owner's title insurance policy (customarily the seller's in Texas, though negotiable), a share of escrow and closing fees, your prorated property taxes up to the closing date, any HOA or condo transfer fees, agreed concessions, and your mortgage payoff. Your title company provides an itemized settlement statement.",
  },
  {
    q: "How much will I net selling my Clarksville home?",
    a: "It depends on your sale price, remaining mortgage, and what you negotiate, so there is no single number. Use the calculator above for an instant estimate, then request a free, hyperlocal net sheet from Luke Allen that prices your home against real Clarksville comps and itemizes every cost.",
  },
];

export default function HomeSaleCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "clarksville-home-sale-calculator",
            title: "Clarksville Home Sale Calculator: Estimate Your Net Proceeds",
            description: "A free calculator to estimate your net proceeds from selling in Clarksville, Austin.",
            date: "2026-11-08",
            updated: "2026-11-08",
            image: PHOTOS.porch.src,
          }),
          faqSchema(FAQS),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Clarksville Home Sale Calculator",
            url: `${SITE_URL}/clarksville-home-sale-calculator`,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Estimate your net proceeds from selling a home in Clarksville, Austin (78703).",
          },
        ]}
      />

      {/* HERO */}
      <section className="bg-ink pb-16 pt-36 text-paper">
        <Container>
          <div className="max-w-3xl">
            <p className="font-label text-brass">Free seller tool</p>
            <h1 className="font-display mt-4 text-[2.6rem] font-medium leading-[1.03] text-paper sm:text-[3.8rem]">
              Clarksville home sale calculator
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-soft">
              The number that matters when you sell is not the price, it is what you walk away with.
              Estimate your net proceeds in seconds, then get the exact figure from a Clarksville
              specialist.
            </p>
          </div>
        </Container>
      </section>

      {/* CALCULATOR */}
      <section className="bg-paper py-16">
        <Container>
          <NetProceedsCalculator />
        </Container>
      </section>

      {/* LEAD CAPTURE */}
      <section className="border-y border-line bg-heritage py-16 text-paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="dark">The exact number, free</Eyebrow>
            <h2 className="font-display mt-4 text-[2.1rem] leading-tight sm:text-[2.7rem]">
              Get your line-by-line net sheet
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
              The calculator is a planning estimate. For the real number, Luke prices your specific
              home against recent Clarksville comps and itemizes every closing cost, no obligation.
              Send your address and he will send your net sheet back.
            </p>
            <p className="mt-6 font-label text-[0.55rem] text-cream-soft/70">
              Luke Allen &middot; TREC #788149 &middot; Austin Marketing + Development Group
            </p>
          </div>
          <div className="rounded-[4px] border border-white/10 bg-paper p-6 sm:p-8">
            <LeadForm defaultIntent="value" showAddress cta="Send my free net sheet" />
          </div>
        </Container>
      </section>

      {/* CONTEXT */}
      <section className="bg-paper py-16">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <h2 className="font-display text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
              What goes into the math
            </h2>
            <p>
              Your net proceeds are the sale price minus everything that comes out at closing. The
              biggest variables are your mortgage payoff and the agent commission, which is negotiable
              and which you set in the calculator. The rest, Texas title and closing costs, prorated
              property taxes, any concessions, tends to be smaller and more predictable. For the full
              breakdown of each cost, see the{" "}
              <Link href="/cost-to-sell-a-home-in-clarksville" className="font-semibold text-brass-deep underline">
                cost to sell in Clarksville
              </Link>{" "}
              guide, and start a sale on the{" "}
              <Link href="/clarksville-listing-agent" className="font-semibold text-brass-deep underline">
                listing agent
              </Link>{" "}
              page.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-cream py-16">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Net proceeds, answered
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
            Estimates are for general planning only and are not a guarantee of results or a quote.
            Actual costs vary by transaction; your title company and your own advisors provide the
            figures that apply to your sale.
          </p>
        </Container>
      </section>
    </>
  );
}
