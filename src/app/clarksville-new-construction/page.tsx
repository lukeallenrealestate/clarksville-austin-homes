import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getListingsByCategory, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";
import { CONDO_FAQS } from "@/lib/content/faqs";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Clarksville New Construction Homes & Condos | Austin 78703",
  description:
    "New construction in Clarksville, Austin (78703): The Belvedere, Westline, The Colorfield, and modern infill homes. What is selling, what is complete, and how to verify before you buy.",
  path: "/clarksville-new-construction",
});

export default async function NewConstructionPage() {
  const listings = await getListingsByCategory("new-construction");
  return (
    <ListingsView
      eyebrow="New Construction"
      title="Clarksville new construction"
      lead="Boutique condominiums and modern infill, built inside a protected historic district where new supply is rare by design."
      photo={PHOTOS.newBuild}
      listings={listings}
      lockedCategory="new-construction"
      asOf={DATA_AS_OF}
      crumbs={[
        { name: "Homes for Sale", path: "/clarksville-homes-for-sale" },
        { name: "New Construction", path: "/clarksville-new-construction" },
      ]}
      faqs={CONDO_FAQS}
      intro={
        <>
          <p>
            Historic protections mean new construction in Clarksville is unusual and tightly watched.
            The current generation centers on boutique condominiums, The Belvedere by Pearlstone
            Partners at 300 Pressler and Westline by Cumby Group at 1406 West 9th, alongside completed
            projects like The Colorfield and a steady trickle of architect-led infill homes on small
            lots.
          </p>
          <p>
            Delivery timelines and price sheets shift through each sales cycle, and the Belvedere
            residence count itself differs between sources. Treat any figure as provisional until
            confirmed, and see the condo buildings guide for the full briefing.
          </p>
        </>
      }
      related={[
        { href: "/clarksville-condos", title: "Condo buildings guide", blurb: "Every building, its developer, and what to verify." },
        { href: "/clarksville-luxury-homes", title: "Luxury homes", blurb: "The high end, new and historic." },
        { href: "/clarksville-architecture", title: "Architecture & rules", blurb: "Why new builds are rare and what is allowed." },
      ]}
    />
  );
}
