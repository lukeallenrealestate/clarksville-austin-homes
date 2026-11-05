import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getListingsByCategory, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";
import { AGENT } from "@/lib/site";
import type { Faq } from "@/lib/schema";

export const revalidate = 3600;

const LUXURY_FAQS: Faq[] = [
  {
    q: "How much do luxury homes cost in Clarksville, Austin?",
    a: "Clarksville's luxury tier generally starts around $2 million and runs to roughly $3.4 million and above for signature new builds such as Westline. Recent nearby 78703 sales include 1810 West 35th at $3.19 million and 2719 Harris Boulevard at $3.25 million. Inventory at this level is scarce and often sells off-market.",
  },
  {
    q: "What counts as a luxury home in Clarksville?",
    a: "In Clarksville (78703) the luxury tier spans architect-led modern infill set behind the historic streetscape, fully restored landmark homes, and new-construction residences at buildings like Westline. The common thread is scarcity, design, and privacy rather than a single price point.",
  },
  {
    q: "Are the best Clarksville luxury homes sold off-market?",
    a: "Often, yes. At the top of a market this small, many of the most desirable homes trade privately and never reach Zillow or the public portals. Off-market access through a neighborhood specialist is the main advantage a luxury buyer or seller has here.",
  },
  {
    q: "Who should I work with to buy a luxury home in Clarksville, Austin?",
    a: `A single-neighborhood specialist. Luke Allen (TREC #${AGENT.trecLicense}, ${AGENT.brokerage}) works Clarksville and Old West Austin directly, runs historic-designation checks before you offer, and sources off-market luxury homes. Reach him at ${AGENT.phone}.`,
  },
];

export const metadata: Metadata = pageMeta({
  title: "Clarksville Luxury Homes for Sale | Austin 78703",
  description:
    "Luxury homes for sale in Clarksville, Austin (78703): architectural infill, restored historic estates, and signature new builds from the $2M tier to $3.4M and above.",
  path: "/clarksville-luxury-homes",
});

export default async function LuxuryHomesPage() {
  const listings = await getListingsByCategory("luxury");
  return (
    <ListingsView
      eyebrow="Luxury"
      title="Clarksville luxury homes"
      lead="The top of a scarce market: architect-led infill, restored landmarks, and lock-and-leave residences with the finishes and privacy to match."
      photo={PHOTOS.bungalow}
      listings={listings}
      lockedCategory="luxury"
      asOf={DATA_AS_OF}
      faqs={LUXURY_FAQS}
      crumbs={[
        { name: "Homes for Sale", path: "/clarksville-homes-for-sale" },
        { name: "Luxury", path: "/clarksville-luxury-homes" },
      ]}
      intro={
        <>
          <p>
            Clarksville&rsquo;s luxury tier is small, specific, and rarely public for long. It runs
            from white-oak modern infill set discreetly behind a historic streetscape, to fully
            restored landmark homes, to the signature new builds at Westline, which have been priced
            to roughly $3.4 million. Recent nearby 78703 sales such as 1810 West 35th at $3.19 million
            and 2719 Harris Boulevard at $3.25 million mark the ceiling.
          </p>
          <p>
            At this level, the deciding factors are off-market access, a clear read on a specific
            block, and a designation check before you offer. That is the work a single-neighborhood
            specialist does that a portal cannot.
          </p>
        </>
      }
      related={[
        { href: "/austin-neighborhoods-for-doctors", title: "For physicians relocating", blurb: "Minutes from the hospitals, in a home worthy of the move." },
        { href: "/clarksville-new-construction", title: "New construction", blurb: "The newest luxury product in the neighborhood." },
        { href: "/clarksville-lock-and-leave", title: "Lock-and-leave living", blurb: "Low-maintenance homes for demanding schedules." },
      ]}
    />
  );
}
