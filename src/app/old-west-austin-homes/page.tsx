import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { ListingCard } from "@/components/ListingCard";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { SampleNotice } from "@/components/SampleNotice";
import { Reveal } from "@/components/Reveal";
import { PHOTOS } from "@/lib/photos";
import { LINKS } from "@/lib/content/related";
import { getActiveListings } from "@/lib/listings";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Old West Austin Homes for Sale | 78703 Real Estate",
  description:
    "Old West Austin real estate (ZIP 78703): historic homes, condos, and new construction across Clarksville, Old Enfield, Tarrytown, Pemberton Heights, and Bryker Woods.",
  path: "/old-west-austin-homes",
});

const areas = [
  {
    name: "Clarksville",
    blurb: "The historic freedmen's town at the heart of it all, walkable to West Lynn dining and downtown.",
    href: "/clarksville-homes-for-sale",
    cta: "Clarksville homes",
  },
  {
    name: "Old Enfield",
    blurb: "Grand early-20th-century estates along Enfield Road, just north of Clarksville.",
    href: "/clarksville-vs-old-enfield",
    cta: "Clarksville vs Old Enfield",
  },
  {
    name: "Tarrytown",
    blurb: "Leafier, larger lots west of MoPac toward Lake Austin.",
    href: "/clarksville-vs-tarrytown",
    cta: "Clarksville vs Tarrytown",
  },
  {
    name: "Pemberton Heights",
    blurb: "A planned 1920s enclave of stately homes on curving, canopied streets.",
    href: "/clarksville-vs-pemberton-heights",
    cta: "Clarksville vs Pemberton Heights",
  },
  {
    name: "Bryker Woods",
    blurb: "A quieter, family-oriented pocket of cottages and Tudors near the central medical district.",
    href: "/clarksville-vs-bryker-woods",
    cta: "Clarksville vs Bryker Woods",
  },
  {
    name: "Downtown Austin",
    blurb: "The high-rise urban core, minutes east, for lock-and-leave tower living.",
    href: "/clarksville-vs-downtown-austin",
    cta: "Clarksville vs Downtown",
  },
];

const FAQS = [
  {
    q: "What neighborhoods are in Old West Austin?",
    a: "Old West Austin is the historic area just west of downtown Austin, largely within ZIP 78703. It includes Clarksville, Old Enfield, Bryker Woods, and Pemberton Heights, and is adjacent to Tarrytown across MoPac. Much of it falls within the Old West Austin Historic District, listed on the National Register of Historic Places.",
  },
  {
    q: "Is Old West Austin the same as 78703?",
    a: "They overlap closely but are not identical. ZIP 78703 covers Old West Austin's core neighborhoods plus Tarrytown to the west. Old West Austin refers specifically to the historic district and the neighborhoods around it, including Clarksville, Old Enfield, Bryker Woods, and Pemberton Heights.",
  },
  {
    q: "What is the average home price in Old West Austin (78703)?",
    a: "Broader 78703 home value runs around $1.5 million, with wide variation by neighborhood and property type. Clarksville single-family medians run roughly $1.1M to $1.6M, and luxury new construction reaches the $3M range. Figures move with a small sample, so verify against current, dated MLS data on the market report.",
  },
];

export default async function OldWestAustinPage() {
  const listings = await getActiveListings();
  return (
    <>
      <PageHero
        eyebrow="78703 & Old West Austin"
        title="Old West Austin homes for sale"
        lead="The historic heart of Austin just west of downtown: Clarksville, Old Enfield, Bryker Woods, and Pemberton Heights, most of it within ZIP 78703 and the Old West Austin Historic District."
        photo={PHOTOS.canopy}
        crumbs={[{ name: "Old West Austin Homes", path: "/old-west-austin-homes" }]}
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="prose-clark max-w-3xl">
            <p>
              Old West Austin is the collection of historic neighborhoods that sit between downtown
              and MoPac, largely inside ZIP 78703. It is where the city&rsquo;s oldest residential
              character survives: tree-canopied streets, early-1900s homes, and a walkable scale that
              newer parts of Austin cannot replicate. Much of the area is protected within the Old
              West Austin Historic District, listed on the National Register of Historic Places.
            </p>
            <p>
              Buyers come here for a specific kind of life, central, historic, and walkable, but the
              neighborhoods within it are distinct. The right one depends on whether you want
              walk-to-downtown energy, a grand estate, a quiet family street, or lock-and-leave ease.
              Clarksville is our specialty and the walkable core; use the comparisons below to place
              yourself.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="The neighborhoods" title="Old West Austin, block by block" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <Link key={a.name} href={a.href} className="group flex flex-col bg-paper p-6 transition-colors hover:bg-cream">
                <span className="font-display text-2xl text-ink transition-colors group-hover:text-brass-deep">
                  {a.name}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{a.blurb}</span>
                <span className="font-label mt-4 text-[0.58rem] text-brass-deep">{a.cta} &rarr;</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Available now" title="Homes for sale in the area" />
            <Link href="/clarksville-homes-for-sale" className="btn btn-outline">
              All Clarksville listings
            </Link>
          </div>
          <SampleNotice className="mt-6" />
          <p className="mt-4 max-w-2xl text-sm text-ink-soft">
            Live listings below are drawn from Clarksville, the walkable core of Old West Austin. For
            homes in Old Enfield, Tarrytown, Pemberton Heights, or Bryker Woods specifically, contact
            Luke directly, much of the best inventory here trades off-market.
          </p>
          {listings.length ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {listings.slice(0, 6).map((l, i) => (
                <Reveal key={l.id} delay={i * 60}>
                  <ListingCard listing={l} priority={i < 3} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <FaqSection faqs={FAQS} title="Old West Austin & 78703 questions" eyebrow="Good to know" />

      <RelatedLinks
        title="Go deeper"
        links={[LINKS.market, LINKS.history, LINKS.realtor, LINKS.homesForSale, LINKS.condos, LINKS.buying]}
      />

      <ContactCta
        heading="Buying or selling in Old West Austin?"
        body="Luke Allen specializes in Clarksville and the historic 78703 neighborhoods around it. Reach out for honest guidance on value, off-market options, and which block fits your life."
        intent="general"
      />
    </>
  );
}
