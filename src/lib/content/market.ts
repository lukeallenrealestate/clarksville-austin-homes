/**
 * Clarksville market figures, every one dated and sourced. Sources conflict for
 * Clarksville because of small monthly samples and condo/single-family mixing,
 * so we present trailing-12-month MLS-based figures and name the source and date
 * on each. Redfin/Orchard monthly swings are treated as unreliable and labeled
 * as such. Verify live before publishing per the brief.
 */
export type MarketStat = { label: string; value: string; note?: string };

export type MarketSource = {
  source: string;
  asOf: string;
  reliability: "primary" | "context" | "caution";
  stats: MarketStat[];
  summary: string;
};

export const MARKET_UPDATED = "2026-06-23";

export const MARKET_SOURCES: MarketSource[] = [
  {
    source: "Keenan Group at Compass (live MLS polygon snapshot)",
    asOf: "June 23, 2026",
    reliability: "primary",
    summary:
      "An MLS polygon snapshot of Clarksville single-family homes on a trailing-12-month basis, the most credible read for single-family values.",
    stats: [
      { label: "Median sold price", value: "$1.6M", note: "single-family, trailing 12 months" },
      { label: "Closed sales", value: "31", note: "trailing 12 months" },
      { label: "Average price / sq ft", value: "$761" },
      { label: "Days on market", value: "~87" },
      { label: "Active listings", value: "7" },
      { label: "Months of supply", value: "2.7" },
      { label: "Sale-to-list ratio", value: "89%" },
    ],
  },
  {
    source: "CurbScout",
    asOf: "March 2026",
    reliability: "context",
    summary:
      "A broader read that mixes condos and single-family homes, which pulls the median down and the active count up. Useful for the all-property-type picture.",
    stats: [
      { label: "Median sold price", value: "$1.1M", note: "all property types, ~50 sales" },
      { label: "Average price / sq ft", value: "$864" },
      { label: "Active listings", value: "35" },
      { label: "Days on market", value: "74" },
      { label: "Condo vs single-family", value: "~63% / 37%", note: "of Clarksville listings" },
    ],
  },
  {
    source: "Redfin, City of Austin context",
    asOf: "Trailing 3 months, 2026",
    reliability: "context",
    summary:
      "Citywide context, not Clarksville-specific. Per Redfin's Austin Housing Market report, the median Austin sale price was about $542,000 over the last three months, down 2.3 percent year over year, at roughly $313 per square foot, down 6.8 percent. Clarksville sits well above the city median.",
    stats: [
      { label: "Austin median sale price", value: "$542K", note: "citywide, trailing 3 months" },
      { label: "Austin price / sq ft", value: "$313", note: "down 6.8% year over year" },
    ],
  },
];

export const MARKET_CAUTION =
  "Redfin and Orchard monthly medians for Clarksville swing wildly because only one to three homes may close in a given month. Those single-month figures are unreliable for a neighborhood this small, so this report leans on trailing-12-month, MLS-based numbers and names the date and source on each.";

export const PRICE_BANDS: { band: string; share: string }[] = [
  { band: "$1M to $1.5M", share: "26%" },
  { band: "$1.5M to $2M", share: "29%" },
  { band: "$2M to $3M", share: "16%" },
  { band: "$3M and above", share: "~10%" },
];

export const LUXURY_CEILING =
  "The luxury ceiling keeps rising: Westline residences have been priced to about $3.4 million, and recent nearby 78703 sales include 1810 West 35th at $3.19 million and 2719 Harris Boulevard at $3.25 million. Broader 78703 median home value runs around $1.5 million.";
