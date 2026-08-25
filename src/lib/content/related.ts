/**
 * Canonical cross-links reused across guides so the internal-link graph stays
 * dense and consistent. Pick a few per page that genuinely relate.
 */
import type { RelatedLink } from "@/components/RelatedLinks";

export const LINKS: Record<string, RelatedLink> = {
  history: {
    href: "/clarksville-history",
    title: "The history of Clarksville",
    blurb: "Founded by a freedman in 1871, a National Register district since 1976.",
  },
  architecture: {
    href: "/clarksville-architecture",
    title: "Architecture & landmark rules",
    blurb: "Bungalows, cottages, infill, and what you can change.",
  },
  dining: {
    href: "/clarksville-restaurants",
    title: "Dining on West Lynn",
    blurb: "Jeffrey's, Josephine House, Cipollina, and the corridor.",
  },
  schools: {
    href: "/clarksville-schools",
    title: "Clarksville schools",
    blurb: "Top-ranked Mathews Elementary and the Austin ISD feeder.",
  },
  condos: {
    href: "/clarksville-condos",
    title: "Condo buildings",
    blurb: "The Belvedere, Westline, Colorfield, de Saligny, and more.",
  },
  market: {
    href: "/clarksville-market-report",
    title: "Market report",
    blurb: "Dated, sourced values for a tricky small market.",
  },
  homesForSale: {
    href: "/clarksville-homes-for-sale",
    title: "Homes for sale",
    blurb: "Every active Clarksville listing, server-rendered.",
  },
  neighborhood: {
    href: "/neighborhood",
    title: "Neighborhood guide",
    blurb: "The complete overview of Clarksville, Austin.",
  },
  selling: {
    href: "/sell-your-clarksville-home",
    title: "Sell your home",
    blurb: "What your Clarksville home is worth, by a local.",
  },
  buying: {
    href: "/buying-in-clarksville",
    title: "Buying in Clarksville",
    blurb: "How to win in a scarce, high-intent market.",
  },
  vsTarrytown: {
    href: "/clarksville-vs-tarrytown",
    title: "Clarksville vs Tarrytown",
    blurb: "Walkable history or leafy lots? A side-by-side.",
  },
  comparisons: {
    href: "/clarksville-vs-austin-neighborhoods",
    title: "Neighborhood comparisons",
    blurb: "Clarksville vs Tarrytown, Zilker, Hyde Park, and more.",
  },
  living: {
    href: "/living-in-clarksville",
    title: "A day in Clarksville",
    blurb: "What it actually feels like to live here, hour by hour.",
  },
  landmarks: {
    href: "/clarksville-landmarks",
    title: "Historic landmarks",
    blurb: "The five places that hold the neighborhood's story.",
  },
  story: {
    href: "/story-of-clarksville",
    title: "The story of Clarksville",
    blurb: "A visual timeline, 1871 to today.",
  },
  why: {
    href: "/why-clarksville",
    title: "Why Clarksville",
    blurb: "The case for Austin's most walkable historic neighborhood.",
  },
  homeStyles: {
    href: "/clarksville-home-styles",
    title: "Clarksville home styles",
    blurb: "A field guide: bungalows, cottages, mid-century, and infill.",
  },
  map: {
    href: "/clarksville-map",
    title: "The Clarksville map",
    blurb: "Boundaries, landmarks, dining, parks, and schools on one page.",
  },
  realtor: {
    href: "/clarksville-realtor",
    title: "Luke Allen, Clarksville Realtor",
    blurb: "A 5-star specialist on the sales team for The Clarksville.",
  },
  insights: {
    href: "/insights",
    title: "Clarksville insights",
    blurb: "Original guides on investing, moving, and buying in 78703.",
  },
  bungalows: {
    href: "/clarksville-bungalows-for-sale",
    title: "Clarksville bungalows",
    blurb: "Historic Craftsman cottages on small, walkable lots.",
  },
  oldWestAustin: {
    href: "/old-west-austin-homes",
    title: "Old West Austin homes",
    blurb: "The broader 78703 area: Clarksville, Old Enfield, and more.",
  },
  offMarket: {
    href: "/off-market-clarksville-homes",
    title: "Off-market Clarksville homes",
    blurb: "See homes before they hit Zillow, through Luke's private network.",
  },
  valuation: {
    href: "/what-is-my-clarksville-home-worth",
    title: "What is my home worth?",
    blurb: "A real Clarksville valuation on actual comps, not a Zestimate.",
  },
  listingAgent: {
    href: "/clarksville-listing-agent",
    title: "Sell your Clarksville home",
    blurb: "List with a 5-star Clarksville specialist. Free home value.",
  },
  buyWithLuke: {
    href: "/buy-in-clarksville",
    title: "Buy in Clarksville",
    blurb: "Work with a buyer's specialist. On-market and off-market access.",
  },
  insightNewConstruction: {
    href: "/insights/clarksville-new-construction-compared",
    title: "New construction compared",
    blurb: "The Belvedere, Westline, and The Clarksville, side by side.",
  },
  insightSellOffMarket: {
    href: "/insights/selling-clarksville-home-off-market",
    title: "Selling off-market",
    blurb: "How a quiet, private Clarksville sale actually works.",
  },
  insightInvestment: {
    href: "/insights/is-clarksville-a-good-investment",
    title: "Is Clarksville a good investment?",
    blurb: "Scarcity, protection, demand, and the numbers, weighed honestly.",
  },
  insightMoving: {
    href: "/insights/moving-to-clarksville",
    title: "Moving to Clarksville",
    blurb: "Cost, schools, walkability, and how to buy in a scarce market.",
  },
  insightLandmark: {
    href: "/insights/clarksville-historic-landmark-rules",
    title: "Historic landmark rules",
    blurb: "What you can and cannot change, and why it sets the price.",
  },
};
