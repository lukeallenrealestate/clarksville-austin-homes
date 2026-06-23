import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { fmtDate, getGuide } from "@/lib/content/guides";
import { DINING, FORMER, AMENITIES } from "@/lib/content/dining";
import { LINKS } from "@/lib/content/related";
import { AGENT } from "@/lib/site";

const guide = getGuide("clarksville-restaurants")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Restaurants & West Lynn Dining Guide | Austin",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function DiningPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: guide.slug,
          title: guide.title,
          description: guide.description,
          date: guide.published,
          updated: guide.updated,
          image: guide.hero.src,
        })}
      />
      <PageHero
        eyebrow="Life on West Lynn"
        title="Clarksville restaurants and the West Lynn corridor"
        lead="The reason Clarksville feels like a village inside the city: you can walk to a steakhouse, a cafe, a wine list, and a grocer, all within a few tree-lined blocks."
        photo={guide.hero}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: "Dining", path: `/${guide.slug}` },
        ]}
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="font-label flex flex-wrap gap-x-4 text-[0.6rem] text-muted">
            <span>By {AGENT.name}</span>
            <span aria-hidden className="text-line">/</span>
            <span className="text-brass-deep">Updated {fmtDate(guide.updated)}</span>
          </div>
          <div className="prose-clark mt-8 max-w-3xl">
            <p>
              West Lynn Street is the heart of Clarksville. For decades it has carried an
              outsized share of Austin&rsquo;s best neighborhood dining, anchored by McGuire Moorman
              Lambert Hospitality&rsquo;s Jeffrey&rsquo;s and its sister cottage, Josephine House. Add a
              casual Italian standby, a polished oyster bar a few blocks east, a local coffee roaster,
              and a walkable grocer, and you have the rare central-Austin neighborhood where daily life
              does not require a car.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2">
            {DINING.map((d) => (
              <div key={d.name} className="bg-paper p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-2xl text-ink">{d.name}</h2>
                  <span className="font-label whitespace-nowrap text-[0.55rem] text-brass-deep">
                    {d.kind}
                  </span>
                </div>
                {d.address ? <p className="mt-1 text-sm text-muted">{d.address}</p> : null}
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{d.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[3px] border border-line bg-cream p-7">
            <Eyebrow>For the record</Eyebrow>
            {FORMER.map((f) => (
              <p key={f.name} className="mt-3 text-sm leading-relaxed text-ink-soft">
                <strong className="text-ink">{f.name}.</strong> {f.note}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <SectionHeading
            eyebrow="Beyond the table"
            title="Parks, trails, and a five-minute walk to downtown"
            lead="Dining is only half of it. Clarksville's location is its other great amenity."
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

      <RelatedLinks links={[LINKS.neighborhood, LINKS.schools, LINKS.homesForSale]} />
      <ContactCta />
    </>
  );
}
