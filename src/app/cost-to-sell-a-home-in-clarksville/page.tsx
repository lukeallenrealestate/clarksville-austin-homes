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

export const metadata: Metadata = pageMeta({
  title: "Cost to Sell a Home in Clarksville | Net Proceeds Guide (78703)",
  description:
    "What it really costs to sell a home in Clarksville, Austin (78703): the costs that come out at closing, how to estimate your net proceeds, and how to keep more of them. General guidance, not financial or legal advice.",
  path: "/cost-to-sell-a-home-in-clarksville",
  type: "article",
});

// No fabricated rates. Commission framing follows the post-2024 rules: agent
// compensation is negotiable and agreed in writing; buyer-agent compensation is
// negotiated separately and set by no rule. Figures are categories, not fixed
// numbers, and the page points sellers to a personalized net sheet.
const costs = [
  {
    h: "Agent commission",
    p: "Negotiable and agreed in writing with your listing agent. There is no standard or required rate. Since August 2024, what you offer toward a buyer's agent, if anything, is a separate decision you make with your agent, and it can affect your buyer pool.",
  },
  {
    h: "Title and closing costs",
    p: "In Texas the seller customarily pays for the owner's title insurance policy, though it is negotiable, plus a share of escrow and closing fees, recording, and document preparation.",
  },
  {
    h: "Prorated property taxes",
    p: "Texas property taxes are paid in arrears, so at closing you cover your share of the year up to the sale date. On a Clarksville home that line can be meaningful.",
  },
  {
    h: "HOA or condo fees",
    p: "Selling a condo at a building like The Belvedere or Westline usually means a resale certificate and possible transfer fees from the association.",
  },
  {
    h: "Preparation and concessions",
    p: "Staging, repairs, and photography, some of which a full-service agent absorbs, plus any repair or closing-cost concessions you negotiate with the buyer.",
  },
  {
    h: "Mortgage payoff",
    p: "Not a selling cost, but the remaining loan balance comes out of the proceeds at closing and is the biggest variable in what you actually net.",
  },
];

const keepMore = [
  {
    h: "Price to the real comps",
    p: "An aspirational list price sits, goes stale, and ultimately sells for less. Priced to genuine Clarksville comparables, a home sells faster and nearer ask.",
  },
  {
    h: "Prep that pays back",
    p: "Not every improvement returns its cost. The right, targeted preparation lifts the sale price by more than it costs. The wrong renovation does not.",
  },
  {
    h: "The off-market advantage",
    p: "A private, off-market first look to the right buyers can preserve leverage and reduce days on market, which protects your net on a scarce Clarksville home.",
  },
  {
    h: "Negotiation that holds the line",
    p: "The difference between accepting the first number and defending your price through inspection and appraisal often dwarfs every other line on this page.",
  },
];

const FAQS = [
  {
    q: "How much does it cost to sell a house in Clarksville, Austin?",
    a: "The total depends on your sale price, your remaining mortgage, and what you negotiate, so there is no single percentage. The main costs that come out at closing are the agent commission (negotiable), Texas title and closing costs, your prorated share of property taxes, any HOA or condo resale fees, agreed concessions, and your mortgage payoff. The reliable way to know your number is a personalized net sheet.",
  },
  {
    q: "Are real estate commissions negotiable?",
    a: "Yes. Commissions are always negotiable and are agreed in writing between you and your listing agent. There is no standard or legally set rate. Since the industry changes in August 2024, how a buyer's agent is compensated is negotiated separately, and whether you offer anything toward it is your decision, made with your agent.",
  },
  {
    q: "What does a seller pay at closing in Texas?",
    a: "Commonly the owner's title insurance policy (customary for the seller in Texas, but negotiable), a share of escrow and closing fees, your prorated property taxes up to the closing date, any HOA or condo transfer and resale-certificate fees, recording costs, any concessions you agreed to, and your mortgage payoff. Your title company provides an itemized settlement statement.",
  },
  {
    q: "How do I estimate my net proceeds?",
    a: "Start with your expected sale price, subtract your mortgage payoff, then subtract your selling costs (commission, title and closing, prorated taxes, HOA fees, concessions, and prep). What remains is your estimated net. A listing agent can prepare a line-by-line net sheet for your specific home before you commit to anything.",
  },
  {
    q: "Do I have to pay the buyer's agent when I sell?",
    a: "No, it is not required. Since August 2024, buyer-agent compensation is negotiated separately rather than set by any rule. You can choose whether to offer anything toward the buyer's side. It is worth discussing with your agent, because what you offer can influence how many buyers and buyer agents engage with your listing.",
  },
];

export default function CostToSellPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "cost-to-sell-a-home-in-clarksville",
            title: "Cost to Sell a Home in Clarksville | Net Proceeds Guide",
            description:
              "What it really costs to sell a home in Clarksville, Austin (78703), and how to estimate your net proceeds.",
            date: "2026-10-06",
            updated: "2026-10-06",
            image: PHOTOS.porch.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.porch.src}
          alt={PHOTOS.porch.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">Selling in 78703</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              What it really costs to sell in Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              The sale price is not the number that matters. Your net is. Here is an honest look at
              what comes out at closing, how to estimate what you walk away with, and how to keep more
              of it.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Ask most sellers what their home will sell for and they can guess. Ask what they will
              actually net, and the room goes quiet. The gap between those two numbers is this page.
            </p>
            <p>
              None of it is mysterious once it is laid out. A handful of named costs come out at
              closing, your mortgage payoff comes off the top, and what remains is yours. Below is each
              piece, in plain English, with an honest note on commissions after the 2024 rule changes.
            </p>
          </div>
        </Container>
      </section>

      {/* WHERE THE MONEY GOES */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Where the money goes</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              The costs that come out at closing
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {costs.map((c) => (
              <Reveal key={c.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{c.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{c.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* THE NET PROCEEDS FORMULA */}
      <section className="bg-heritage py-20 text-paper">
        <Container size="narrow">
          <Eyebrow tone="dark">The math</Eyebrow>
          <h2 className="font-display mt-4 text-[2.1rem] leading-tight sm:text-[2.6rem]">
            How to estimate your net proceeds
          </h2>
          <div className="mt-10 space-y-3">
            {[
              { k: "Start with", v: "Your expected sale price" },
              { k: "Subtract", v: "Your mortgage payoff" },
              { k: "Subtract", v: "Selling costs (commission, title and closing, prorated taxes, HOA, concessions, prep)" },
              { k: "You net", v: "What is left is yours to keep" },
            ].map((row, i) => (
              <div
                key={row.k}
                className={`flex flex-col gap-1 rounded-[3px] border border-white/10 p-5 sm:flex-row sm:items-baseline sm:gap-6 ${
                  i === 3 ? "bg-brass/15" : "bg-heritage-soft"
                }`}
              >
                <span className="font-label w-24 shrink-0 text-[0.56rem] text-brass">{row.k}</span>
                <span className={`leading-relaxed ${i === 3 ? "font-display text-xl text-paper" : "text-cream-soft"}`}>
                  {row.v}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-cream-soft">
            The honest version of this is not a calculator, it is a net sheet built for your specific
            home. Luke prepares one line by line, before you commit to anything.
          </p>
        </Container>
      </section>

      {/* KEEP MORE OF IT */}
      <section className="border-t border-line bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Keep more of it</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Four levers that protect your net
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {keepMore.map((k) => (
              <Reveal key={k.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{k.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{k.p}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            Keep reading: the{" "}
            <Link href="/sell-your-clarksville-home" className="font-semibold text-brass-deep underline">
              Clarksville selling guide
            </Link>
            , a{" "}
            <Link href="/what-is-my-clarksville-home-worth" className="font-semibold text-brass-deep underline">
              home valuation
            </Link>
            , whether it is{" "}
            <Link href="/best-time-to-buy-or-sell-clarksville" className="font-semibold text-brass-deep underline">
              the right time to sell
            </Link>
            , and the taxes behind the proration on the{" "}
            <Link href="/clarksville-property-taxes" className="font-semibold text-brass-deep underline">
              property taxes
            </Link>{" "}
            page.
          </p>
        </Container>
      </section>

      <ContactCta
        heading="Get a personalized net sheet"
        body="Tell Luke about your Clarksville home and your mortgage situation, and he will prepare a line-by-line estimate of your net proceeds, so you decide with the real number in front of you, not a guess."
        intent="value"
        showAddress
        cta="Request my net proceeds estimate"
      />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            The cost of selling, answered
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
            This page is general information, not financial, tax, or legal advice. Costs vary by
            transaction and are negotiable; your title company and your own advisors provide the
            figures that apply to your sale.
          </p>
        </Container>
      </section>
    </>
  );
}
