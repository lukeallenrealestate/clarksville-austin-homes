import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading, Stat, Pill, RuleOrnament } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { realtorProfileSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";
import { AGENT } from "@/lib/site";
import { LINKS } from "@/lib/content/related";
import {
  PROFILE_STATS,
  ROLES,
  REVIEWS,
  REVIEW_AGG,
  REALTOR_FAQS,
  GOOGLE_PROFILE_URL,
  CLARKSVILLE_PROJECT,
} from "@/lib/content/realtor";

export const metadata: Metadata = pageMeta({
  title: "Clarksville Realtor | Luke Allen, Old West Austin Specialist",
  description:
    "Luke Allen is a 5-star rated Clarksville, Austin REALTOR and Old West Austin specialist, on the sales team for The Clarksville Condominiums. Buy or sell in 78703.",
  path: "/clarksville-realtor",
});

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-brass ${className}`} aria-hidden="true">
      {"★★★★★"}
    </span>
  );
}

const services = [
  {
    title: "For buyers",
    body: "On-market and off-market access to Clarksville homes, condos, and new construction, with honest guidance on value, historic designation, and the right block for your life.",
    href: "/buying-in-clarksville",
    cta: "Buying in Clarksville",
  },
  {
    title: "For sellers",
    body: "Pricing built on trailing-12-month MLS data, a marketing reach that includes a quiet off-market network, and a specialist who knows what a Clarksville buyer will pay.",
    href: "/sell-your-clarksville-home",
    cta: "Sell or value your home",
  },
  {
    title: "For developers",
    body: "Sales strategy and representation for boutique Clarksville projects, informed by hands-on project management and asset management experience.",
    href: "/contact",
    cta: "Start a conversation",
  },
];

export default function ClarksvilleRealtorPage() {
  return (
    <>
      <JsonLd data={realtorProfileSchema()} />

      <PageHero
        eyebrow="Your Clarksville, Austin specialist"
        title="Luke Allen, Clarksville Realtor"
        lead="A licensed Texas REALTOR who works Clarksville and Old West Austin as a specialty, not a side note. On the sales team for a Clarksville development, fluent in the neighborhood's history, micro-market, and off-market deals."
        photo={PHOTOS.streetscape}
        crumbs={[{ name: "Clarksville Realtor", path: "/clarksville-realtor" }]}
        meta={
          <div className="flex items-center gap-2.5 text-cream-soft">
            <Stars />
            <span className="font-num text-sm">
              5.0 on Google &middot; {REVIEW_AGG.reviewCount} verified client reviews
            </span>
          </div>
        }
      />

      {/* Profile + direct answer (AEO) */}
      <section className="bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[3px] border border-line">
              <Image
                src={PHOTOS.luke.src}
                alt={PHOTOS.luke.alt}
                width={PHOTOS.luke.width}
                height={PHOTOS.luke.height}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {ROLES.map((r) => (
                <Pill key={r} tone="brass">
                  {r}
                </Pill>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a href={AGENT.phoneHref} className="btn btn-heritage w-full">
                Call {AGENT.phone}
              </a>
              <a href={AGENT.smsHref} className="btn btn-outline w-full">
                Text Luke
              </a>
            </div>
          </div>

          <div>
            <Eyebrow>Who is the best Realtor in Clarksville?</Eyebrow>
            <p className="mt-4 font-display text-[1.7rem] leading-snug text-ink sm:text-[2rem]">
              Choosing the right Clarksville agent comes down to one thing: genuine, demonstrated
              specialization in this neighborhood, not citywide volume.
            </p>
            <div className="prose-clark mt-6 max-w-none">
              <p>
                <strong>Luke Allen</strong> is a licensed Texas REALTOR with Austin Marketing +
                Development Group (TREC #{AGENT.trecLicense}) who focuses on Clarksville and the Old
                West Austin area of 78703. He holds a 5-star rating from verified Google client
                reviews, sits on the sales team for{" "}
                <a href={CLARKSVILLE_PROJECT.url} target="_blank" rel="noopener noreferrer">
                  {CLARKSVILLE_PROJECT.name}
                </a>{" "}
                at 1711 Enfield Road, and represents developers, buyers, and sellers on both
                on-market and off-market homes.
              </p>
              <p>
                His deep dive into the neighborhood began while selling a boutique 10-home Clarksville
                condominium project, work that drove a level of hyperlocal market analysis most
                general Austin agents never develop. The expertise across{" "}
                <Link href="/neighborhood">this entire site</Link>, the history, the architecture and
                landmark rules, the building-by-building condo coverage, and the dated{" "}
                <Link href="/clarksville-market-report">market report</Link>, is his.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {PROFILE_STATS.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} sub={s.sub} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* The off-market advantage */}
      <section className="border-t border-line bg-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>The off-market advantage</Eyebrow>
            <h2 className="font-display mt-4 text-[2rem] leading-tight text-ink sm:text-[2.4rem]">
              In a neighborhood this small, the best homes never hit Zillow.
            </h2>
          </Reveal>
          <Reveal className="prose-clark max-w-none" delay={120}>
            <p>
              Clarksville runs on low inventory and high intent. A large share of Luke&rsquo;s business
              is off-market: homes sourced and sold through direct developer relationships and a
              network built specifically around this neighborhood, never listed publicly.
            </p>
            <p>
              For buyers, that means access to homes other agents cannot show you. For sellers, it
              means a quiet, qualified path to sale when a public listing is not the right move.
              Paired with pricing built on trailing-12-month MLS data rather than automated estimates,
              it is a real edge in a market where a single block changes the number.
            </p>
            <Link href="/buying-in-clarksville" className="btn btn-brass mt-2 inline-flex">
              How buying in Clarksville works
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* The Clarksville project affiliation */}
      <section className="bg-paper py-16">
        <Container>
          <div className="grid items-center gap-8 rounded-[3px] border border-brass/30 bg-brass-soft p-8 sm:p-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Eyebrow>On the sales team</Eyebrow>
              <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.2rem]">
                {CLARKSVILLE_PROJECT.name}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{CLARKSVILLE_PROJECT.note}</p>
              <p className="font-num mt-4 text-sm text-muted">
                {CLARKSVILLE_PROJECT.units} residences &middot; {CLARKSVILLE_PROJECT.address} &middot;
                Design by {CLARKSVILLE_PROJECT.designer}
              </p>
            </div>
            <div className="lg:text-right">
              <a
                href={CLARKSVILLE_PROJECT.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-heritage"
              >
                Visit the project
              </a>
              <p className="mt-3 text-xs text-muted">
                Independent agent representation. Not the official developer site.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="border-t border-line bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="The story" title="From Temple to a Clarksville specialty" />
          <div className="prose-clark mt-8 max-w-3xl">
            <p>
              Luke Allen was born and raised in Temple, Texas, and graduated from the University of
              Texas at Austin. He lived in Clarksville and fell for the place: the architecture, the
              history behind one of the oldest freedmen&rsquo;s towns west of the Mississippi, and the
              rare, walkable charm of a neighborhood where you can leave the car at home.
            </p>
            <p>
              That affection turned into a craft. Working with a developer to sell a unique 10-unit
              boutique condominium in Clarksville started a deep dive into the neighborhood&rsquo;s
              blocks, buildings, and numbers, and it became a genuine specialty. Today Luke pairs that
              local knowledge with work as a project management specialist and asset manager, and a
              luxury focus, to serve buyers, sellers, and developers across Clarksville and Old West
              Austin.
            </p>
          </div>
          <div className="mt-10">
            <RuleOrnament />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How Luke helps"
            title="Specialist representation, on every side of the deal"
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col bg-paper p-7">
                <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                <Link
                  href={s.href}
                  className="font-label mt-5 text-[0.6rem] text-brass-deep transition-colors hover:text-ink"
                >
                  {s.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="border-t border-line bg-heritage py-16 text-paper sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="dark">What clients say</Eyebrow>
              <h2 className="font-display mt-4 text-[2rem] leading-tight sm:text-[2.5rem]">
                5.0 stars across verified Google reviews
              </h2>
            </div>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light whitespace-nowrap"
            >
              Read reviews on Google
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.author}
                className="flex flex-col rounded-[3px] border border-white/10 bg-heritage-soft p-6"
              >
                <Stars className="text-base" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-cream-soft">
                  {r.text}
                </blockquote>
                <figcaption className="font-label mt-5 text-[0.62rem] text-brass">
                  {r.author} &middot; Google review
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection
        faqs={REALTOR_FAQS}
        eyebrow="Clarksville realtor FAQ"
        title="Questions about working with Luke"
      />

      <RelatedLinks
        title="See the expertise for yourself"
        links={[LINKS.market, LINKS.history, LINKS.condos, LINKS.buying, LINKS.selling, LINKS.neighborhood]}
      />

      <ContactCta
        heading="Work with a Clarksville specialist"
        body="Whether you are buying, selling, or developing in Clarksville, Luke Allen answers personally. Reach out for honest guidance on value, off-market options, and the right move in 78703."
        intent="general"
        cta="Send Luke a message"
      />
    </>
  );
}
