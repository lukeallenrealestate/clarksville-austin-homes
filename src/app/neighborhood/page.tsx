import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading, Stat, Pill } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { NEIGHBORHOOD } from "@/lib/site";
import { GUIDES, COMPARISONS, fmtDate } from "@/lib/content/guides";
import { HOME_FAQS } from "@/lib/content/faqs";
import { AMENITIES } from "@/lib/content/dining";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Neighborhood Guide | Old West Austin, 78703",
  description:
    "The complete guide to living in Clarksville, Austin (78703): history, architecture, dining, schools, parks, condo buildings, and the market, by a local REALTOR.",
  path: "/neighborhood",
});

export default function NeighborhoodPage() {
  return (
    <>
      <PageHero
        eyebrow="The Complete Guide"
        title="Clarksville, Austin: a neighborhood guide"
        lead="A historic freedmen's town turned one of Austin's most walkable luxury enclaves. Here is everything that makes 78703's Clarksville singular, and how to buy or sell here well."
        photo={PHOTOS.canopy}
        crumbs={[{ name: "Neighborhood", path: "/neighborhood" }]}
      />

      {/* Orientation */}
      <section className="bg-paper py-16">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1.3fr] lg:items-start">
          <div className="prose-clark">
            <p>
              Clarksville sits just west of downtown Austin, northeast of MoPac (Loop 1), inside the
              Old West Austin Historic District. It was founded in 1871 by Charles Clark, a freedman,
              and is one of the oldest freedmen&rsquo;s towns west of the Mississippi. The blocks are
              small and walkable, the canopy is mature, and the West Lynn corridor gives the
              neighborhood a village center that almost no other part of central Austin can match.
            </p>
            <p>
              {NEIGHBORHOOD.boundaryStatement} It is wholly within ZIP {NEIGHBORHOOD.zip}, in{" "}
              {NEIGHBORHOOD.county}, City Council {NEIGHBORHOOD.councilDistrict}, neighbored by{" "}
              {NEIGHBORHOOD.neighbors.join(", ")}.
            </p>
          </div>
          <div className="rounded-[3px] border border-line bg-cream p-7">
            <Eyebrow>At a glance</Eyebrow>
            <div className="mt-5 grid grid-cols-2 gap-6">
              <Stat value="1871" label="Founded" />
              <Stat value="1976" label="Nat'l Register" />
              <Stat value="78703" label="ZIP" />
              <Stat value="District 9" label="Council" />
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {NEIGHBORHOOD.neighbors.map((n) => (
                <Pill key={n}>{n}</Pill>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Guide grid */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Explore"
            title="The Clarksville knowledge base"
            lead="Deep, original guides to every part of the neighborhood. Each is dated and updated, written from the ground, not scraped."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g, i) => (
              <Reveal key={g.slug} delay={i * 70}>
                <Link
                  href={`/${g.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-line bg-paper transition-colors hover:border-brass/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Photo photo={g.hero} sizes="(max-width: 768px) 100vw, 33vw" className="h-full" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-label text-[0.58rem] text-brass-deep">{g.navLabel}</span>
                    <h3 className="font-display mt-2 text-2xl leading-tight text-ink transition-colors group-hover:text-brass-deep">
                      {g.title.split(":")[0]}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{g.description}</p>
                    <span className="font-label mt-4 text-[0.55rem] text-muted">
                      Updated {fmtDate(g.updated)}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Amenities */}
      <section className="bg-paper py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <SectionHeading
            eyebrow="Parks & Trails"
            title="Green space on every side"
            lead="Clarksville is ringed by the parks and trails that make it feel rural and urban at once."
          />
          <ul className="divide-y divide-line border-y border-line">
            {AMENITIES.map((a) => (
              <li key={a.name} className="py-5">
                <p className="font-display text-xl text-ink">{a.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{a.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Comparisons */}
      <section className="border-t border-line bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title="Clarksville vs the neighbors"
            lead="How Clarksville stacks up against the other historic enclaves of Old West Austin."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {COMPARISONS.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group rounded-[3px] border border-line bg-paper p-6 transition-colors hover:border-brass/50"
              >
                <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-brass-deep">
                  {c.navLabel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                <span className="font-label mt-4 inline-block text-[0.55rem] text-brass-deep">
                  Compare &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection faqs={HOME_FAQS} />
      <ContactCta />
    </>
  );
}
