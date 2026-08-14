/**
 * Cornerstone insights articles (the content engine). Each lives at
 * /insights/<slug> and reuses ArticleShell. Slugs intentionally include the
 * "insights/" prefix so the shared Article schema, breadcrumbs, and sitemap all
 * resolve to the correct /insights/ path without special-casing.
 *
 * These are deep, original, search-targeted pieces that expand topical coverage
 * and feed both Google and AI answer engines. Bump `updated` when revised.
 */
import type { Guide } from "./guides";
import type { Faq } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";

export type Insight = Guide & { readMins: number; category: string; faqs: Faq[] };

export const INSIGHTS: Insight[] = [
  {
    slug: "insights/is-clarksville-a-good-investment",
    title: "Is Clarksville a Good Investment in 2026?",
    navLabel: "Clarksville investment",
    description:
      "A balanced look at Clarksville, Austin as a real estate investment: scarcity, historic protections, durable demand, recent price data, and the risks buyers should weigh first.",
    hero: PHOTOS.bungalow,
    published: "2026-06-24",
    updated: "2026-06-24",
    kind: "insights",
    readMins: 7,
    category: "Investment",
    faqs: [
      {
        q: "Is Clarksville, Austin a good investment?",
        a: "Clarksville has historically held value well for a simple reason: scarcity. The core historic district is roughly ten blocks, historic protections limit new supply, and durable demand from the West Lynn dining scene, walkability, and downtown proximity supports long-term prices. Single-family medians run roughly $1.1M to $1.6M with luxury new construction reaching the $3M range. It suits buyers seeking a scarce, low-inventory asset rather than quick appreciation, and figures should be verified against current MLS data.",
      },
      {
        q: "Are Clarksville home values going up?",
        a: "Clarksville sits well above the Austin median and has shown more price resilience than the broader city, though monthly figures swing because so few homes sell. The most reliable read uses trailing-12-month MLS data rather than single-month snapshots. See the dated Clarksville market report for current numbers.",
      },
      {
        q: "Should I buy a condo or a single-family home in Clarksville to invest?",
        a: "Both have a case. Single-family homes on small historic lots are the scarcest asset and carry land value, but landmark designations can limit changes. Condos and new construction like The Belvedere or Westline offer lock-and-leave ownership and a lower entry point. The right choice depends on your horizon, appetite for renovation, and whether a specific address carries a binding local historic landmark designation.",
      },
    ],
  },
  {
    slug: "insights/moving-to-clarksville",
    title: "Moving to Clarksville, Austin: The Complete Guide",
    navLabel: "Moving to Clarksville",
    description:
      "Everything to know before moving to Clarksville: what it is like to live there, housing and prices, schools, walkability, who it suits, and how to buy in a low-inventory market.",
    hero: PHOTOS.canopy,
    published: "2026-06-24",
    updated: "2026-06-24",
    kind: "insights",
    readMins: 8,
    category: "Relocation",
    faqs: [
      {
        q: "Is Clarksville a good place to live?",
        a: "Clarksville is one of the most walkable and characterful neighborhoods in Austin: a historic freedmen's town with a tree canopy, the West Lynn dining corridor, top-ranked Mathews Elementary, and a five-minute walk to West Sixth and downtown. It suits people who value walkable urbanism, historic character, and a tight neighborhood fabric over large lots.",
      },
      {
        q: "What is it like to live in Clarksville, Austin?",
        a: "Daily life is walkable and village-like. Residents walk to coffee at Cafe Medici, dinner at Jeffrey's, Josephine House, or Cipollina, groceries at Fresh Plus, and the Lady Bird Lake trail, while staying minutes from downtown. The streets are quiet, canopied, and architecturally mixed, from restored cottages and bungalows to modern infill.",
      },
      {
        q: "How much does it cost to live in Clarksville?",
        a: "Clarksville is a premium market. Single-family homes commonly trade above one million dollars, with medians roughly $1.1M to $1.6M and luxury new builds into the $3M range, while condos and established communities offer more accessible entry points. Verify current figures against the dated Clarksville market report before budgeting.",
      },
    ],
  },
  {
    slug: "insights/clarksville-historic-landmark-rules",
    title: "Clarksville Historic Landmark Rules: What Buyers Must Know",
    navLabel: "Landmark rules",
    description:
      "Before you buy, renovate, or build in Clarksville, understand the difference between the National Register district and a binding City of Austin local historic landmark, and why a designation check matters on every address.",
    hero: PHOTOS.haskellHouse,
    published: "2026-06-24",
    updated: "2026-06-24",
    kind: "insights",
    readMins: 7,
    category: "Buyer Guide",
    faqs: [
      {
        q: "Is Clarksville a historic district?",
        a: "Yes. The Clarksville district was added to the National Register of Historic Places in 1976, and it sits within the Old West Austin Historic District. National Register status is largely honorific, but it is different from an individual City of Austin local historic landmark, which carries binding review of exterior changes and demolition.",
      },
      {
        q: "Can you tear down a house in Clarksville?",
        a: "It depends entirely on the specific address. A home with an individual City of Austin local historic landmark designation requires Historic Landmark Commission review for demolition or exterior changes, which can prevent a teardown. A home with only National Register district status faces fewer binding restrictions. Always run a designation check and confirm zoning overlays with the City before relying on redevelopment economics.",
      },
      {
        q: "What are the rules for renovating a historic Clarksville home?",
        a: "If a home carries a local historic landmark designation, exterior alterations generally require review and a certificate of appropriateness from the City of Austin Historic Landmark Commission. Interior work is typically less restricted. Because rules turn on each property's specific designation and any neighborhood conservation overlay, verify the requirements for your exact address with the City before you plan a renovation or make an offer.",
      },
    ],
  },
  {
    slug: "insights/clarksville-new-construction-compared",
    title: "Clarksville New Construction Compared: The Belvedere, Westline, and The Clarksville",
    navLabel: "New construction compared",
    description:
      "A buyer's comparison of Clarksville's boutique new-construction condominiums, The Belvedere, Westline, and The Clarksville, on price, size, ownership, and lifestyle.",
    hero: PHOTOS.newBuild,
    published: "2026-07-21",
    updated: "2026-07-21",
    kind: "insights",
    readMins: 6,
    category: "New Construction",
    faqs: [
      {
        q: "What new construction is available in Clarksville, Austin?",
        a: "Clarksville's boutique new-construction and recently reimagined condominiums include The Belvedere at 300 Pressler, Westline at 1406 West 9th, The Colorfield on Baylor, and The Clarksville at 1711 Enfield. They range from full-service luxury condos to lock-and-leave residences to off-market boutique homes, at price points from the high $300s into the multi-millions.",
      },
      {
        q: "Which is better, The Belvedere, Westline, or The Clarksville?",
        a: "It depends on what you want. The Belvedere offers full-service, trail-connected luxury; Westline offers larger lock-and-leave residences with private garages; The Clarksville offers character-driven, off-market homes at the most accessible entry point. The right one comes down to budget, size, and whether you value amenities, space, or price.",
      },
      {
        q: "What is the most affordable new construction in Clarksville?",
        a: "Among current options, The Clarksville Condominiums at 1711 Enfield offers the most accessible entry, with one-bedroom homes from the high $300s, sold off-market. Contact Luke Allen for current availability across every Clarksville building.",
      },
    ],
  },
  {
    slug: "insights/selling-clarksville-home-off-market",
    title: "How to Sell a Clarksville Home Off-Market",
    navLabel: "Selling off-market",
    description:
      "Why many Clarksville homes sell privately, and how an off-market or pocket sale works for sellers who want discretion, control, or a quiet, qualified buyer.",
    hero: PHOTOS.streetscape,
    published: "2026-07-21",
    updated: "2026-07-21",
    kind: "insights",
    readMins: 6,
    category: "Selling",
    faqs: [
      {
        q: "Can I sell my Clarksville home off-market?",
        a: "Yes. In a low-inventory, high-demand neighborhood like Clarksville, off-market and pre-market sales are common. A specialist with a network of qualified buyers can often find the right buyer privately, without ever posting your home on the MLS or Zillow. Contact Luke Allen to discuss whether an off-market sale fits your goals.",
      },
      {
        q: "What is a pocket listing when selling?",
        a: "A pocket listing is a home marketed privately, to an agent's network of buyers, rather than publicly on the MLS. Sellers choose it for privacy, to test price, or to avoid the disruption of showings and open houses, while still reaching serious, qualified buyers.",
      },
      {
        q: "Is it better to sell off-market in Clarksville?",
        a: "It depends on your priorities. A public listing maximizes exposure and competing offers; an off-market sale maximizes privacy, control, and convenience, and in a scarce neighborhood like Clarksville, demand is strong enough that a quiet sale can still command a strong price. The right choice is a conversation, not a default.",
      },
    ],
  },
  {
    slug: "insights/clarksville-property-taxes-cost-of-ownership",
    title: "Clarksville Property Taxes and the Real Cost of Ownership",
    navLabel: "Property taxes and costs",
    description:
      "Beyond the mortgage: property taxes, homestead exemptions, HOA and condo dues, and insurance to budget when you buy in Clarksville and 78703.",
    hero: PHOTOS.bungalow,
    published: "2026-07-21",
    updated: "2026-07-21",
    kind: "insights",
    readMins: 6,
    category: "Buyer Guide",
    faqs: [
      {
        q: "What are property taxes in Clarksville, Austin?",
        a: "Clarksville is in Travis County, where combined property tax rates typically land in the low-2-percent range of assessed value, varying by year and taxing entities. On a home valued around $1.5M, that can mean roughly $30,000 or more per year before exemptions. A homestead exemption reduces the taxable value on your primary residence. Always confirm the current rate and your assessed value with the Travis Central Appraisal District (TCAD).",
      },
      {
        q: "Does Clarksville have HOA fees?",
        a: "Single-family homes in Clarksville generally have no HOA. Condominiums do: monthly dues vary widely by building and cover services, amenities, insurance, and reserves. Confirm the exact dues and what they include for any specific building before you offer.",
      },
      {
        q: "What does it cost to own a Clarksville home beyond the mortgage?",
        a: "Budget for property taxes (the largest add-on in Texas, which has no state income tax), homeowners insurance, maintenance on older historic homes, and, for condos, monthly HOA dues. For historic homes, factor in specialized upkeep and any requirements tied to a landmark designation.",
      },
    ],
  },
  {
    slug: "insights/best-time-to-sell-clarksville-home",
    title: "When Is the Best Time to Sell a Home in Clarksville?",
    navLabel: "Best time to sell",
    description:
      "Does season matter when selling in Clarksville? Why a scarce, high-demand neighborhood behaves differently, and what actually determines your result.",
    hero: PHOTOS.porch,
    published: "2026-07-21",
    updated: "2026-07-21",
    kind: "insights",
    readMins: 5,
    category: "Selling",
    faqs: [
      {
        q: "When is the best time to sell a house in Clarksville, Austin?",
        a: "Austin's broader market is busiest in spring and early summer, when buyer demand peaks. But Clarksville is scarce and in high demand year-round, so timing matters less here than in a typical suburb. A well-priced, well-presented Clarksville home can sell in any season, and off-market sales happen year-round.",
      },
      {
        q: "Do homes sell faster in spring in Austin?",
        a: "Generally yes, spring brings the most active buyers citywide, which can mean faster sales and more competing offers. In a low-inventory neighborhood like Clarksville, however, the shortage of homes can outweigh seasonality, so strong homes move well outside the spring window too.",
      },
      {
        q: "Should I wait to sell my Clarksville home?",
        a: "It depends on your goals more than the calendar. Because Clarksville demand is durable, the bigger levers are pricing on real comps, condition and presentation, and whether an on-market or off-market strategy fits your situation. A specialist can tell you whether waiting actually helps or just delays.",
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
