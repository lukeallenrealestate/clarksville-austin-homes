import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { fmtDate, getGuide } from "@/lib/content/guides";
import { SCHOOLS, PRIVATE_NOTE } from "@/lib/content/schools";
import { SCHOOL_FAQS } from "@/lib/content/faqs";
import { LINKS } from "@/lib/content/related";
import { AGENT } from "@/lib/site";

const guide = getGuide("clarksville-schools")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Schools | Mathews, O. Henry & Austin High (Austin ISD)",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function SchoolsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: guide.slug,
            title: guide.title,
            description: guide.description,
            date: guide.published,
            updated: guide.updated,
            image: guide.hero.src,
          }),
          faqSchema(SCHOOL_FAQS),
        ]}
      />
      <PageHero
        eyebrow="Austin ISD Feeder"
        title="Clarksville schools"
        lead="Clarksville's Austin ISD feeder pattern is led by one of the best-rated elementary schools in Texas, right on West Lynn at the center of the neighborhood."
        photo={guide.hero}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: "Schools", path: `/${guide.slug}` },
        ]}
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="font-label flex flex-wrap gap-x-4 text-[0.6rem] text-muted">
            <span>By {AGENT.name}</span>
            <span aria-hidden className="text-line">/</span>
            <span className="text-brass-deep">Updated {fmtDate(guide.updated)}</span>
          </div>

          <div className="mt-10 space-y-8">
            {SCHOOLS.map((s) => (
              <div key={s.name} className="rounded-[3px] border border-line bg-cream p-7 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-3xl text-ink">{s.name}</h2>
                  <span className="font-label text-[0.58rem] text-brass-deep">{s.level}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {[s.address, s.grades && `Grades ${s.grades}`].filter(Boolean).join(" · ")}
                </p>
                <ul className="mt-5 grid gap-2.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-2 h-[5px] w-[5px] shrink-0 rotate-45 bg-brass" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-soft">{PRIVATE_NOTE}</p>
          <p className="mt-4 text-xs text-muted">
            Rankings reflect the cited sources and years and can change. School assignment is set by
            Austin ISD and should be verified for a specific address before you rely on it.
          </p>
        </Container>
      </section>

      <FaqSection faqs={SCHOOL_FAQS} title="Clarksville school questions" />
      <RelatedLinks links={[LINKS.neighborhood, LINKS.dining, LINKS.homesForSale]} />
      <ContactCta />
    </>
  );
}
