import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getListingsByCategory, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";
import { CONDO_FAQS } from "@/lib/content/faqs";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Condos for Sale | The Belvedere, Westline & More",
  description:
    "Condos for sale in Clarksville, Austin (78703): boutique new construction like The Belvedere and Westline, plus established communities for entry-point ownership in Old West Austin.",
  path: "/clarksville-condos-for-sale",
});

export default async function CondosForSalePage() {
  const listings = await getListingsByCategory("condo");
  return (
    <ListingsView
      eyebrow="Condos"
      title="Clarksville condos for sale"
      lead="Lock-and-leave luxury and the most accessible way into the neighborhood, from boutique new construction to established mid-century communities."
      photo={PHOTOS.newBuild}
      listings={listings}
      lockedCategory="condo"
      asOf={DATA_AS_OF}
      crumbs={[
        { name: "Homes for Sale", path: "/clarksville-homes-for-sale" },
        { name: "Condos", path: "/clarksville-condos-for-sale" },
      ]}
      faqs={CONDO_FAQS}
      intro={
        <>
          <p>
            Condominiums are a defining part of Clarksville: by some counts the majority of listings
            in the neighborhood are condos rather than single-family homes. They range from
            full-service new construction such as The Belvedere at 300 Pressler and the lock-and-leave
            residences at Westline, to established communities like Escorial and Woodlawn Place that
            offer a lower entry point into a notoriously scarce market.
          </p>
          <p>
            New-construction pricing and availability move through each sales cycle, so confirm the
            current price sheet before relying on a figure. For a building-by-building briefing, see
            the Clarksville condo buildings guide.
          </p>
        </>
      }
      related={[
        { href: "/clarksville-condos", title: "Condo buildings guide", blurb: "The Belvedere, Westline, Colorfield, de Saligny, and more." },
        { href: "/clarksville-new-construction", title: "New construction", blurb: "Everything currently being built or recently delivered." },
        { href: "/clarksville-homes-for-sale", title: "All homes", blurb: "The full Clarksville for-sale picture." },
      ]}
    />
  );
}
