import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getListingsByCategory, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";

export const revalidate = 3600;

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
        { href: "/clarksville-new-construction", title: "New construction", blurb: "The newest luxury product in the neighborhood." },
        { href: "/clarksville-architecture", title: "Architecture guide", blurb: "Styles, landmarks, and what renovation rules apply." },
        { href: "/sell-your-clarksville-home", title: "Sell your home", blurb: "What a luxury Clarksville home is worth today." },
      ]}
    />
  );
}
