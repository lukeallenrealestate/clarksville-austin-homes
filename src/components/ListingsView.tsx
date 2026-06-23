import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { ListingsBrowser } from "./ListingsBrowser";
import { SampleNotice } from "./SampleNotice";
import { FaqSection } from "./FaqSection";
import { RelatedLinks, type RelatedLink } from "./RelatedLinks";
import { ContactCta } from "./ContactCta";
import { Container } from "./ui";
import type { Listing, Category } from "@/lib/listings";
import { LISTINGS_BOUNDARY } from "@/lib/listings";
import type { PhotoMeta } from "@/lib/photos";
import type { Crumb, Faq } from "@/lib/schema";
import { fmtDate } from "@/lib/content/guides";

/**
 * Shared template for the listings index and every category page. The grid is
 * server-rendered (crawlable HTML), with a client filter/sort layered on top. An
 * SEO intro paragraph gives each page genuine on-page text beyond the listings.
 */
export function ListingsView({
  eyebrow,
  title,
  lead,
  intro,
  photo,
  listings,
  lockedCategory,
  crumbs,
  asOf,
  faqs,
  related,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  intro: ReactNode;
  photo: PhotoMeta;
  listings: Listing[];
  lockedCategory?: Category;
  crumbs: Crumb[];
  asOf: string;
  faqs?: Faq[];
  related?: RelatedLink[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} photo={photo} crumbs={crumbs} />

      <section className="bg-paper py-16">
        <Container>
          <div className="prose-clark max-w-3xl">{intro}</div>
          <p className="font-label mt-6 text-[0.58rem] text-muted">
            Boundary: {LISTINGS_BOUNDARY} &middot; Updated {fmtDate(asOf.slice(0, 10))}
          </p>
          <SampleNotice className="mt-4" />
          <div className="mt-8">
            <ListingsBrowser listings={listings} lockedCategory={lockedCategory} />
          </div>
        </Container>
      </section>

      {faqs?.length ? <FaqSection faqs={faqs} /> : null}
      {related?.length ? <RelatedLinks links={related} /> : null}
      <ContactCta intent="buy" />
    </>
  );
}
