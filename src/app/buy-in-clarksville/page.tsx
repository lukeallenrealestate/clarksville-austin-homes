import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { ListingCard } from "@/components/ListingCard";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, articleSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";
import { AGENT } from "@/lib/site";
import { getActiveListings } from "@/lib/listings";
import { CONDOS } from "@/lib/content/condos";
import { REVIEWS, REVIEW_AGG, GOOGLE_PROFILE_URL } from "@/lib/content/realtor";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Buy a Home in Clarksville | Buyer's Specialist Luke Allen",
  description:
    "Buy a home in Clarksville, Austin (78703) with a 5-star buyer's specialist. On-market and off-market access, honest guidance, and homes you will not find on Zillow.",
  path: "/buy-in-clarksville",
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
    h: "Homes before the portals",
    p: "A large share of Clarksville sales happen off-market. Luke sees them first, and can get you in front of homes that never reach Zillow or the public MLS.",
  },
  {
    h: "A designation check before you offer",
    p: "Whether a home carries a binding historic landmark designation decides what you can change and what it is worth. Luke pulls that before you write, so there are no expensive surprises.",
  },
  {
    h: "One neighborhood, mastered",
    p: "Not a generalist covering all of Austin. Block-by-block knowledge of Clarksville and Old West Austin is what wins the right home in a market this scarce.",
  },
  {
    h: "A negotiator on your side",
    p: "From strategy to the final counter, you get an advocate who protects your money and your interests all the way to closing.",
  },
];

const FAQS = [
  {
    q: "How do I buy a home in Clarksville, Austin?",
    a: "Start with a specialist who knows the neighborhood and has off-market access, since many Clarksville homes sell privately. Get clear on your criteria and budget, line up financing, and have your agent surface both listed and off-market homes. Luke Allen represents buyers across Clarksville and Old West Austin, contact him to start.",
  },
  {
    q: "Do I need a buyer's agent to buy in Clarksville?",
    a: "A buyer's agent representing your interests is strongly recommended, especially in a scarce, competitive, historically-regulated neighborhood like Clarksville. Buyer representation terms are agreed upfront; in many transactions the seller contributes to buyer-agent compensation, though this is negotiable. Luke will explain exactly how it works for your situation.",
  },
  {
    q: "Can I see off-market Clarksville homes?",
    a: "Yes. A meaningful share of Clarksville homes trade off-market. Through developer and owner relationships, Luke can bring you homes and new developments that never appear publicly. Tell him what you are looking for and you will hear about the right ones first.",
  },
  {
    q: "How competitive is the Clarksville real estate market?",
    a: "Very. Clarksville runs on low inventory and durable demand, with only a handful of homes selling in a year. Strong homes can move quickly, and off-market deals can close before a listing ever goes public, which is why local access and fast, informed guidance matter so much.",
  },
];

export default async function BuyInClarksville() {
  const listings = (await getActiveListings()).slice(0, 3);
  const clark = CONDOS.find((c) => c.slug === "the-clarksville");
  const featured = REVIEWS.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "buy-in-clarksville",
            title: "Buy a Home in Clarksville | Buyer's Specialist Luke Allen",
            description: "Buy a home in Clarksville, Austin with a 5-star buyer's specialist.",
            date: "2026-08-20",
            updated: "2026-08-20",
            image: PHOTOS.bungalow.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO with centered capture card */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image src={PHOTOS.bungalow.src} alt={PHOTOS.bungalow.alt} fill priority sizes="100vw" className="img-grade object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />
        <Container className="relative z-10 py-24 text-center sm:py-28">
          <div className="hero-rise mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3">
              <Stars />
              <span className="font-num text-sm text-cream-soft">
                5.0 on Google &middot; {REVIEW_AGG.reviewCount} verified reviews
              </span>
            </div>
            <h1 className="font-display mt-5 text-[2.8rem] font-medium leading-[1.0] text-paper sm:text-[4rem]">
              Find your Clarksville home
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream-soft">
              In a neighborhood this scarce, the best homes go to buyers with the best access. Work
              with the Clarksville specialist, and see homes before they ever reach Zillow.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl rounded-[4px] border border-brass/30 bg-paper p-6 text-left shadow-2xl sm:p-8">
            <Eyebrow>Get on the inside track</Eyebrow>
            <p className="font-display mt-3 text-2xl leading-tight text-ink">
              Tell Luke what you are looking for
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Your criteria, on-market and off. Be first in line for the right Clarksville home.
            </p>
            <div className="mt-5">
              <LeadForm defaultIntent="buy" cta="Start my search" />
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
            { v: "Off-market", l: "Homes before Zillow" },
            { v: "78703", l: "Clarksville specialist" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-num text-2xl text-ink sm:text-3xl">{s.v}</div>
              <div className="font-label mt-1.5 text-[0.56rem] text-brass-deep">{s.l}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* WHY LUKE */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why buy with Luke</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              The right home here is often won before it is listed
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

      {/* LIVE INVENTORY TEASER */}
      <section className="border-t border-line bg-cream py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Available now</Eyebrow>
              <h2 className="font-display mt-4 text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
                A look at what is for sale
              </h2>
            </div>
            <Link href="/clarksville-homes-for-sale" className="btn btn-outline">
              All Clarksville homes
            </Link>
          </div>
          {listings.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((l, i) => (
                <Reveal key={l.id} delay={i * 70}>
                  <ListingCard listing={l} priority={i === 0} />
                </Reveal>
              ))}
            </div>
          ) : null}
          {clark?.heroImage ? (
            <Reveal className="mt-8 grid items-stretch gap-0 overflow-hidden rounded-[3px] border border-line lg:grid-cols-2">
              <div className="relative min-h-[240px] lg:min-h-[340px]">
                <Image src={clark.heroImage.src} alt={clark.heroImage.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="img-grade object-cover" />
              </div>
              <div className="flex flex-col justify-center gap-3 bg-paper p-8 sm:p-10">
                <div className="flex gap-1.5">
                  <Pill tone="brass">Off-market</Pill>
                  <Pill>3 remaining</Pill>
                </div>
                <h3 className="font-display text-3xl text-ink">The Clarksville Condominiums</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Ten boutique homes at 1711 Enfield, seven sold, entirely off-market from the high
                  $300s. Exactly the kind of opportunity you only reach through the right agent.
                </p>
                <Link href="/clarksville-condos/the-clarksville" className="btn btn-heritage self-start">
                  See the listing
                </Link>
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* REVIEWS */}
      <section className="bg-heritage py-20 text-paper">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="dark">What buyers say</Eyebrow>
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

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Buying questions</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Buying a Clarksville home, answered
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

      {/* CLOSING CTA */}
      <section className="bg-heritage py-20 text-paper">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Eyebrow tone="dark">Ready when you are</Eyebrow>
          <h2 className="font-display max-w-2xl text-[2rem] leading-tight sm:text-[2.6rem]">
            Let us find the one before someone else does
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={AGENT.phoneHref} className="btn btn-brass">
              Call {AGENT.phone}
            </a>
            <a href={AGENT.smsHref} className="btn btn-ghost-light">
              Text Luke
            </a>
          </div>
          <p className="font-label mt-2 text-[0.55rem] text-cream-soft/70">
            {AGENT.name} &middot; TREC #{AGENT.trecLicense} &middot; {AGENT.brokerage}
          </p>
        </Container>
      </section>
    </>
  );
}
