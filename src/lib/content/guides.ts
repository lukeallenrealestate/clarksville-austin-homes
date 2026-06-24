/**
 * Registry of editorial guide pages (the content moat). Drives the sitemap
 * lastmod, Article schema dates, the neighborhood hub grid, and cross-linking.
 * Every guide carries a visible published/updated date for E-E-A-T and freshness.
 *
 * Dates are real and version-stamped. When you materially update a page, bump
 * its `updated` field so the "Last updated" line and schema dateModified move.
 */
import { PHOTOS, type PhotoMeta } from "@/lib/photos";

export type Guide = {
  slug: string; // path without leading slash
  title: string; // H1 / schema headline
  navLabel: string;
  description: string; // meta description + hub blurb
  hero: PhotoMeta;
  published: string;
  updated: string;
  /** Hub grouping. */
  kind: "guide" | "market" | "comparison" | "listings" | "transact" | "insights";
};

export const GUIDES: Guide[] = [
  {
    slug: "clarksville-history",
    title: "The History of Clarksville, Austin: A Freedmen's Town Since 1871",
    navLabel: "History",
    description:
      "How Charles Clark, a freedman, founded Clarksville in 1871 on land bought from a Confederate general, and how the neighborhood survived to become a National Register historic district.",
    hero: PHOTOS.church,
    published: "2026-06-15",
    updated: "2026-06-23",
    kind: "guide",
  },
  {
    slug: "clarksville-architecture",
    title: "Clarksville Architecture: Bungalows, Cottages, and Modern Infill",
    navLabel: "Architecture",
    description:
      "A field guide to Clarksville's housing stock, from Victorian-era cottages and Craftsman bungalows to luxury modern infill, and what historic landmark rules mean for renovation.",
    hero: PHOTOS.porch,
    published: "2026-06-15",
    updated: "2026-06-23",
    kind: "guide",
  },
  {
    slug: "clarksville-restaurants",
    title: "Clarksville Restaurants and the West Lynn Dining Corridor",
    navLabel: "Dining",
    description:
      "The West Lynn corridor is the heart of Clarksville: Jeffrey's, Josephine House, Cipollina, Clark's Oyster Bar, and the walkable cafes and grocers that anchor the neighborhood.",
    hero: PHOTOS.westLynn,
    published: "2026-06-15",
    updated: "2026-06-23",
    kind: "guide",
  },
  {
    slug: "clarksville-schools",
    title: "Clarksville Schools: Mathews, O. Henry, and Austin High",
    navLabel: "Schools",
    description:
      "The Austin ISD feeder pattern for Clarksville, led by top-ranked Mathews Elementary, plus O. Henry Middle School, Austin High, and nearby private options.",
    hero: PHOTOS.streetscape,
    published: "2026-06-15",
    updated: "2026-06-23",
    kind: "guide",
  },
  {
    slug: "clarksville-condos",
    title: "Clarksville Condos and New Construction: The Belvedere, Westline, and More",
    navLabel: "Condo Buildings",
    description:
      "A building-by-building guide to Clarksville condominiums and new construction, from The Belvedere and Westline to established communities for entry-point ownership.",
    hero: PHOTOS.newBuild,
    published: "2026-06-15",
    updated: "2026-06-23",
    kind: "guide",
  },
  {
    slug: "clarksville-market-report",
    title: "Clarksville Market Report: Home Prices and Trends",
    navLabel: "Market Report",
    description:
      "A dated, sourced look at Clarksville home values: median sold prices, price per square foot, days on market, and the condo-versus-single-family mix in 78703.",
    hero: PHOTOS.bungalow,
    published: "2026-06-01",
    updated: "2026-06-23",
    kind: "market",
  },
];

export const COMPARISONS: Guide[] = [
  {
    slug: "clarksville-vs-tarrytown",
    title: "Clarksville vs Tarrytown: Which Old West Austin Neighborhood Fits You?",
    navLabel: "Clarksville vs Tarrytown",
    description:
      "Clarksville and Tarrytown sit on opposite sides of MoPac. Here is how they differ on walkability, lot size, price, schools, and character.",
    hero: PHOTOS.canopy,
    published: "2026-06-18",
    updated: "2026-06-23",
    kind: "comparison",
  },
  {
    slug: "clarksville-vs-old-enfield",
    title: "Clarksville vs Old Enfield: Comparing Two Historic Austin Neighborhoods",
    navLabel: "Clarksville vs Old Enfield",
    description:
      "Old Enfield's grand estates or Clarksville's walkable cottages? A side-by-side on architecture, price, lot size, and lifestyle in 78703.",
    hero: PHOTOS.streetscape,
    published: "2026-06-18",
    updated: "2026-06-23",
    kind: "comparison",
  },
  {
    slug: "clarksville-vs-pemberton-heights",
    title: "Clarksville vs Pemberton Heights: A Buyer's Comparison",
    navLabel: "Clarksville vs Pemberton Heights",
    description:
      "Pemberton Heights' estate lots and curated calm versus Clarksville's historic, walkable urbanism. How the two compare for buyers in Old West Austin.",
    hero: PHOTOS.park,
    published: "2026-06-18",
    updated: "2026-06-23",
    kind: "comparison",
  },
];

export const ALL_GUIDES = [...GUIDES, ...COMPARISONS];

export function getGuide(slug: string): Guide | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug);
}

/** Human-readable date, e.g. "June 23, 2026". */
export function fmtDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
