import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ListingsView } from "@/components/ListingsView";
import { getActiveListings, DATA_AS_OF } from "@/lib/listings";
import { PHOTOS } from "@/lib/photos";
import { HOME_FAQS } from "@/lib/content/faqs";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Austin Homes for Sale | Historic 78703 Listings",
  description:
    "Browse homes for sale in Clarksville, the historic neighborhood in Austin, Texas (78703). Live MLS listings of cottages, bungalows, condos, and luxury new construction, with a local specialist.",
  path: "/clarksville-homes-for-sale",
});

export default async function HomesForSalePage() {
  const listings = await getActiveListings();
  return (
    <ListingsView
      eyebrow="For Sale"
      title="Clarksville homes for sale"
      lead="Every active listing inside the Clarksville boundary, rendered as real pages, with the local context the portals leave out."
      photo={PHOTOS.streetscape}
      listings={listings}
      asOf={DATA_AS_OF}
      crumbs={[{ name: "Homes for Sale", path: "/clarksville-homes-for-sale" }]}
      faqs={HOME_FAQS}
      intro={
        <>
          <p>
            Clarksville is one of Austin&rsquo;s smallest and most sought-after neighborhoods, so
            inventory is genuinely scarce. What comes to market spans a wide range: restored
            Craftsman bungalows and Victorian-era cottages on small historic lots, mid-century
            garden condos, and a growing set of luxury modern infill homes and new-construction
            condominiums like The Belvedere and Westline.
          </p>
          <p>
            Because the neighborhood is small, a single month&rsquo;s listings rarely tell the whole
            story. Use the filters to focus by type or price, and reach out for the homes that have
            not hit the portals yet. Every listing here is server-rendered on this domain, so you
            and the search engines see the same complete data.
          </p>
        </>
      }
      related={[
        { href: "/clarksville-condos-for-sale", title: "Condos for sale", blurb: "Lock-and-leave living and entry-point ownership in Clarksville." },
        { href: "/clarksville-bungalows-for-sale", title: "Bungalows for sale", blurb: "Historic Craftsman cottages on small, walkable lots." },
        { href: "/clarksville-luxury-homes", title: "Luxury homes", blurb: "The $2M-plus tier: estates, infill, and signature new builds." },
        { href: "/clarksville-new-construction", title: "New construction", blurb: "The Belvedere, Westline, The Clarksville, and more." },
        { href: "/old-west-austin-homes", title: "Old West Austin homes", blurb: "The broader 78703 area and its historic neighborhoods." },
        { href: "/clarksville-market-report", title: "Market report", blurb: "Dated, sourced values so you know what is real." },
      ]}
    />
  );
}
