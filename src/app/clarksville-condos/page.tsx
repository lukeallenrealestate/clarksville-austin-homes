import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Container, Pill } from "@/components/ui";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { fmtDate, getGuide } from "@/lib/content/guides";
import { CONDOS } from "@/lib/content/condos";
import { CONDO_FAQS } from "@/lib/content/faqs";
import { LINKS } from "@/lib/content/related";
import { AGENT } from "@/lib/site";

const guide = getGuide("clarksville-condos")!;

const statusLabel: Record<string, string> = {
  selling: "Now Selling",
  complete: "Complete",
  established: "Established",
};

export const metadata: Metadata = pageMeta({
  title: "Clarksville Condos & New Construction Buildings | Austin 78703",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function CondoBuildingsPage() {
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
          faqSchema(CONDO_FAQS),
        ]}
      />
      <PageHero
        eyebrow="Building by Building"
        title="Clarksville condos and new construction"
        lead="A field guide to the condominium and new-construction buildings in and around Clarksville, with the developer, the design team, and the details that change before each sales cycle."
        photo={guide.hero}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: "Condo Buildings", path: `/${guide.slug}` },
        ]}
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="font-label flex flex-wrap gap-x-4 text-[0.6rem] text-muted">
            <span>By {AGENT.name}</span>
            <span aria-hidden className="text-line">/</span>
            <span className="text-brass-deep">Updated {fmtDate(guide.updated)}</span>
          </div>

          <div className="mt-10 space-y-6">
            {CONDOS.map((c) => (
              <Link
                key={c.slug}
                href={`/clarksville-condos/${c.slug}`}
                className="group grid gap-6 rounded-[3px] border border-line bg-cream p-7 transition-colors hover:border-brass/50 sm:grid-cols-[2fr_1.3fr] sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Pill tone="brass">{statusLabel[c.status]}</Pill>
                    {c.developer ? (
                      <span className="text-xs text-muted">{c.developer}</span>
                    ) : null}
                  </div>
                  <h2 className="font-display mt-3 text-3xl text-ink transition-colors group-hover:text-brass-deep">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{c.address}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
                  <span className="font-label mt-4 inline-block text-[0.58rem] text-brass-deep">
                    Full briefing &rarr;
                  </span>
                </div>
                {c.priceNote ? (
                  <div className="rounded-[2px] border border-line bg-paper p-5">
                    <span className="font-label text-[0.55rem] text-muted">Pricing note</span>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.priceNote}</p>
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection faqs={CONDO_FAQS} title="Clarksville condo questions" />
      <RelatedLinks links={[LINKS.market, LINKS.homesForSale, LINKS.architecture]} />
      <ContactCta intent="buy" heading="Get the real story on a building" />
    </>
  );
}
