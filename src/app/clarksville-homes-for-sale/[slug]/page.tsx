import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { getActiveListings, getListingBySlug } from "@/lib/listings";
import { ListingDetail } from "@/components/ListingDetail";

export const revalidate = 3600;

export async function generateStaticParams() {
  const listings = await getActiveListings();
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = await getListingBySlug(slug);
  if (!l) return {};
  const title = `${l.address}${l.unit ? `, ${l.unit}` : ""} | Clarksville, Austin`;
  const desc =
    (l.description && l.description.slice(0, 150)) ||
    `${l.beds} bedroom, ${l.baths} bath, ${l.sqft.toLocaleString()} sq ft home for sale in Clarksville, Austin (78703).`;
  return pageMeta({
    title,
    description: desc,
    path: `/clarksville-homes-for-sale/${slug}`,
    type: "article",
  });
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) notFound();
  const others = (await getActiveListings()).filter((l) => l.id !== listing.id).slice(0, 3);
  return <ListingDetail listing={listing} others={others} />;
}
