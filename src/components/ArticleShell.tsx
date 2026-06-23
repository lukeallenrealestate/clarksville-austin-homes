import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";
import { articleSchema } from "@/lib/schema";
import { PageHero } from "./PageHero";
import { FaqSection } from "./FaqSection";
import { RelatedLinks, type RelatedLink } from "./RelatedLinks";
import { ContactCta } from "./ContactCta";
import { Container } from "./ui";
import { fmtDate, type Guide } from "@/lib/content/guides";
import type { Faq } from "@/lib/schema";
import { AGENT } from "@/lib/site";

/**
 * Shared layout for editorial guide pages: photographic hero, a visible
 * authored byline with published/updated dates (E-E-A-T + freshness), the
 * long-form body, an optional FAQ block with schema, related cross-links, and
 * the soft contact CTA. Keeps every guide consistent and on-brand.
 */
export function ArticleShell({
  guide,
  lead,
  children,
  faqs,
  related,
  ctaHeading,
  ctaBody,
}: {
  guide: Guide;
  lead: string;
  children: ReactNode;
  faqs?: Faq[];
  related?: RelatedLink[];
  ctaHeading?: string;
  ctaBody?: string;
}) {
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
        eyebrow="Clarksville Guide"
        title={guide.title}
        lead={lead}
        photo={guide.hero}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: guide.navLabel, path: `/${guide.slug}` },
        ]}
      />

      <Container size="narrow" className="py-16">
        <div className="font-label flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.6rem] text-muted">
          <span>By {AGENT.name}, TREC #{AGENT.trecLicense}</span>
          <span aria-hidden className="text-line">
            /
          </span>
          <span>Published {fmtDate(guide.published)}</span>
          <span aria-hidden className="text-line">
            /
          </span>
          <span className="text-brass-deep">Last updated {fmtDate(guide.updated)}</span>
        </div>
        <div className="rule-double mt-5" />

        <div className="prose-clark mt-10">{children}</div>
      </Container>

      {faqs?.length ? <FaqSection faqs={faqs} /> : null}
      {related?.length ? <RelatedLinks links={related} /> : null}
      <ContactCta heading={ctaHeading} body={ctaBody} />
    </>
  );
}
