import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, articleSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";
import { AGENT } from "@/lib/site";
import { REVIEWS, REVIEW_AGG, GOOGLE_PROFILE_URL } from "@/lib/content/realtor";

export const metadata: Metadata = pageMeta({
  title: "Sell Your Clarksville Home | Clarksville Listing Agent Luke Allen",
  description:
    "Sell your Clarksville, Austin home for more, with a 5-star listing specialist. Real valuations, an off-market buyer network, and a proven sale in 78703. Free home value.",
  path: "/clarksville-listing-agent",
});

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-brass ${className}`} aria-hidden="true">
      {"★★★★★"}
    </span>
  );
}

const reasons = [
  {
    h: "A real number, not a Zestimate",
    p: "Clarksville is too scarce for algorithms. Luke prices your home on actual recent sales, condition, lot, and historic designation, so you list at the number that sells for the most.",
  },
  {
    h: "An off-market buyer network",
    p: "A large share of Clarksville sales happen privately. Luke can reach qualified, ready buyers before your home ever hits the MLS, discreetly, on your terms.",
  },
  {
    h: "One neighborhood, mastered",
    p: "Not a generalist covering all of Austin. Luke works Clarksville and Old West Austin as a specialty, and that block-by-block knowledge is what wins showings and offers.",
  },
  {
    h: "A negotiator on your side",
    p: "From pricing strategy to the final counter, you get honest guidance and a specialist who protects your equity through closing.",
  },
];

const steps = [
  { n: "1", h: "Get your value", p: "Send your address. Luke returns a considered valuation on real Clarksville comps, no obligation." },
  { n: "2", h: "Choose your strategy", p: "On-market for maximum exposure, or a quiet off-market sale. You decide, with a clear plan for each." },
  { n: "3", h: "Sell for more", p: "Professional marketing, the right buyers, and sharp negotiation, all the way to a strong close." },
];

const FAQS = [
  {
    q: "Who is the best listing agent in Clarksville, Austin?",
    a: "The strongest listing agent for a Clarksville home is a genuine neighborhood specialist, not a general Austin agent. Luke Allen (TREC #788149, Austin Marketing + Development Group) focuses on Clarksville and Old West Austin, holds a 5-star rating from verified Google reviews, sits on the sales team for The Clarksville Condominiums, and prices on real, trailing-12-month sales rather than automated estimates.",
  },
  {
    q: "How do I sell my house in Clarksville?",
    a: "Start with a real valuation on comparable Clarksville sales, then choose an on-market or off-market strategy. From there your agent handles preparation, marketing, showings, and negotiation through closing. Contact Luke Allen for a no-obligation valuation and a plan tailored to your home.",
  },
  {
    q: "How much does it cost to sell a home in Clarksville?",
    a: "Seller costs typically include the real estate commission (which is negotiable and agreed upfront), title and closing costs, and any pre-sale preparation. Luke reviews the full net-proceeds picture with you before you list, so there are no surprises at closing.",
  },
  {
    q: "How fast can I sell my Clarksville home?",
    a: "Clarksville is a low-inventory, high-demand neighborhood, so well-priced, well-presented homes can move quickly, and off-market sales can happen even faster to a ready buyer. Timing depends on your home and strategy, which Luke will map out with you.",
  },
];

export default function ListingAgentMoneyPage() {
  const featured = REVIEWS.slice(0, 3);
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "clarksville-listing-agent",
            title: "Sell Your Clarksville Home | Listing Agent Luke Allen",
            description: "Sell your Clarksville, Austin home with a 5-star listing specialist.",
            date: "2026-08-19",
            updated: "2026-08-19",
            image: PHOTOS.bungalow.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO with above-the-fold capture */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src={PHOTOS.streetscape.src}
          alt={PHOTOS.streetscape.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        <Container className="relative z-10 grid gap-12 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div className="hero-rise">
            <div className="flex items-center gap-3">
              <Stars />
              <span className="font-num text-sm text-cream-soft">
                5.0 on Google &middot; {REVIEW_AGG.reviewCount} verified reviews
              </span>
            </div>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[3.6rem]">
              Sell your Clarksville home for more.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream-soft">
              Clarksville is a seller&rsquo;s market, and the right listing agent is the difference
              between a good sale and a great one. Get a real valuation from the neighborhood
              specialist, on-market or off, with no obligation.
            </p>
            <ul className="mt-7 grid max-w-lg gap-2.5 sm:grid-cols-2">
              {[
                "Priced on real sales, not a Zestimate",
                "A private off-market buyer network",
                "5-star rated, Clarksville specialist",
                "$20M+ in team listings",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-cream-soft">
                  <span aria-hidden className="mt-1.5 h-[6px] w-[6px] shrink-0 rotate-45 bg-brass" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[4px] border border-brass/30 bg-paper p-6 shadow-2xl sm:p-8">
            <Eyebrow>Free, no obligation</Eyebrow>
            <p className="font-display mt-3 text-2xl leading-tight text-ink">
              What is your Clarksville home worth?
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Send your address and Luke will prepare a real valuation, usually the same day.
            </p>
            <div className="mt-5">
              <LeadForm defaultIntent="value" showAddress cta="Get my home value" />
            </div>
          </div>
        </Container>
      </section>

      {/* PROOF BAR */}
      <section className="border-b border-line bg-cream py-8">
        <Container className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { v: "5.0", l: "Google rating" },
            { v: `${REVIEW_AGG.reviewCount}`, l: "5-star reviews" },
            { v: "$20M+", l: "Team listings" },
            { v: "6 yrs", l: "Licensed REALTOR" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-num text-3xl text-ink sm:text-4xl">{s.v}</div>
              <div className="font-label mt-1.5 text-[0.58rem] text-brass-deep">{s.l}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* WHY LUKE */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why sell with Luke</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              A specialist sells a Clarksville home for more than a generalist
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reasons.map((r) => (
              <Reveal key={r.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{r.h}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{r.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="dark">Sellers and buyers agree</Eyebrow>
              <h2 className="font-display mt-4 text-[2rem] leading-tight sm:text-[2.6rem]">
                5.0 stars, in their words
              </h2>
            </div>
            <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light whitespace-nowrap">
              Read reviews on Google
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((r) => (
              <figure key={r.author} className="flex flex-col rounded-[3px] border border-white/10 bg-heritage-soft p-6">
                <Stars className="text-base" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-cream-soft">
                  {r.text.length > 240 ? `${r.text.slice(0, 237)}...` : r.text}
                </blockquote>
                <figcaption className="font-label mt-5 text-[0.62rem] text-brass">
                  {r.author} &middot; Google review
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Three steps to a strong sale
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col bg-paper p-8">
                <span className="font-display font-num text-4xl text-brass">{s.n}</span>
                <h3 className="font-display mt-3 text-2xl text-ink">{s.h}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            Prefer to read first? See the full{" "}
            <Link href="/sell-your-clarksville-home" className="text-brass-deep underline underline-offset-2">
              guide to selling in Clarksville
            </Link>{" "}
            and how an{" "}
            <Link href="/insights/selling-clarksville-home-off-market" className="text-brass-deep underline underline-offset-2">
              off-market sale
            </Link>{" "}
            works.
          </p>
        </Container>
      </section>

      {/* CLOSING CAPTURE */}
      <section className="bg-heritage py-20 text-paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="dark">Start today</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.9rem]">
              Find out what your home would bring
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
              It takes a minute and there is no obligation. Send your address for a real Clarksville
              valuation and an honest conversation about the best way to sell.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={AGENT.phoneHref} className="btn btn-brass">
                Call {AGENT.phone}
              </a>
              <a href={AGENT.smsHref} className="btn btn-ghost-light">
                Text Luke
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-1.5">
              <Pill tone="dark">{AGENT.name}</Pill>
              <Pill tone="dark">TREC #{AGENT.trecLicense}</Pill>
              <Pill tone="dark">{AGENT.brokerageShort}</Pill>
            </div>
          </div>
          <div className="rounded-[4px] border border-white/10 bg-paper p-6 sm:p-8">
            <LeadForm defaultIntent="value" showAddress cta="Get my home value" />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Selling questions</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Selling a Clarksville home, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
