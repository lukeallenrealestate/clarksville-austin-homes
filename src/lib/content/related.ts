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
};
