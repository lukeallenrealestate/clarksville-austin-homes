import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { articleSchema, faqSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Clarksville Mortgage Calculator | Monthly Payment (78703)",
  description:
    "Estimate the monthly payment on a Clarksville, Austin home (78703): principal, interest, property taxes, and insurance. A free buyer calculator with a local specialist.",
  path: "/clarksville-mortgage-calculator",
  type: "article",
});

const FAQS = [
  {
    q: "How much is the monthly payment on a Clarksville home?",
    a: "It depends on the price, your down payment, and the interest rate. On a roughly $1.3 million Clarksville home with 20% down, the monthly payment, including principal, interest, property taxes, and insurance, typically lands in the mid five figures per month. Use the calculator above to model your own numbers, since Clarksville spans from sub-$500K condos to multimillion-dollar homes.",
  },
  {
    q: "What are property taxes on a Clarksville home?",
    a: "A Clarksville home in 78703 is taxed by several entities together (Austin ISD, the City of Austin, Travis County, and others), and in recent years the combined rate has run in roughly the low 2 percent range of taxable value. A homestead exemption and the 10 percent appraisal cap lower what you pay on a primary residence. See the Clarksville property taxes guide, and verify current rates with TCAD.",
  },
  {
    q: "How much do I need to earn to buy in Clarksville, Austin?",
    a: "There is no single answer because Clarksville ranges widely in price, from condos in the high $300s to multimillion-dollar homes. Model a specific price and down payment in the calculator to see the monthly payment, then talk to a lender about the income and reserves it requires. Luke can also point you to the Clarksville homes that fit a given budget.",
  },
];

export default function MortgageCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "clarksville-mortgage-calculator",
            title: "Clarksville Mortgage Calculator: Estimate Your Monthly Payment",
            description: "A free calculator to estimate the monthly payment on a Clarksville, Austin home.",
            date: "2026-11-08",
            updated: "2026-11-08",
            image: PHOTOS.bungalow.src,
          }),
          faqSchema(FAQS),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Clarksville Mortgage Calculator",
            url: `${SITE_URL}/clarksville-mortgage-calculator`,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Estimate the monthly payment on a Clarksville, Austin home (78703).",
          },
        ]}
      />

      {/* HERO */}
      <section className="bg-ink pb-16 pt-36 text-paper">
        <Container>
          <div className="max-w-3xl">
            <p className="font-label text-brass">Free buyer tool</p>
            <h1 className="font-display mt-4 text-[2.6rem] font-medium leading-[1.03] text-paper sm:text-[3.8rem]">
              Clarksville mortgage calculator
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-soft">
              See the real monthly cost of a Clarksville home, principal, interest, taxes, and
              insurance, then let a specialist find the homes that fit your number.
            </p>
          </div>
        </Container>
      </section>

      {/* CALCULATOR */}
      <section className="bg-paper py-16">
        <Container>
          <MortgageCalculator />
        </Container>
      </section>

      {/* LEAD CAPTURE */}
      <section className="border-y border-line bg-heritage py-16 text-paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="dark">Homes that fit your budget</Eyebrow>
            <h2 className="font-display mt-4 text-[2.1rem] leading-tight sm:text-[2.7rem]">
              Get matched to Clarksville homes
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
              Tell Luke your budget and what you want, and he will send the Clarksville homes that fit,
              including off-market and coming-soon listings you will not find on Zillow. No pressure,
              just the real picture.
            </p>
            <p className="mt-6 font-label text-[0.55rem] text-cream-soft/70">
              Luke Allen &middot; TREC #788149 &middot; Austin Marketing + Development Group
            </p>
          </div>
          <div className="rounded-[4px] border border-white/10 bg-paper p-6 sm:p-8">
            <LeadForm defaultIntent="buy" cta="Send me matching homes" />
          </div>
        </Container>
      </section>

      {/* CONTEXT */}
      <section className="bg-paper py-16">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <h2 className="font-display text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
              The real cost of a Clarksville home
            </h2>
            <p>
              The sticker price is only part of the story. In Texas, property taxes are a meaningful
              line in the monthly payment, which is why this calculator includes them. For how those
              taxes work, and the homestead exemption that lowers them, see the{" "}
              <Link href="/clarksville-property-taxes" className="font-semibold text-brass-deep underline">
                Clarksville property taxes
              </Link>{" "}
              guide. When you are ready, browse{" "}
              <Link href="/clarksville-homes-for-sale" className="font-semibold text-brass-deep underline">
                homes for sale
              </Link>{" "}
              or{" "}
              <Link href="/clarksville-homes-under-1-million" className="font-semibold text-brass-deep underline">
                homes under $1M
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-cream py-16">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Clarksville monthly cost, answered
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
            Estimates are for general planning only, not a loan offer or a guarantee. A licensed
            lender provides the rate, taxes, insurance, and terms that apply to you.
          </p>
        </Container>
      </section>
    </>
  );
}
