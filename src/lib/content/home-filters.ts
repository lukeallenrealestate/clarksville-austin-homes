/**
 * Long-tail "crabtrap" filter pages. Each entry defines a niche search intent
 * (bedroom count, a feature like a pool or guest house, a type) and a predicate
 * over the live MLS listings. One dynamic route (app/clarksville-homes/[filter])
 * renders them all, each with the actual filtered listings, a live count, unique
 * copy, FAQs, and schema, so they are substantive long-tail pages, not thin
 * doorway pages. Add a niche by adding an entry here; it auto-joins the sitemap.
 */
import type { Listing } from "@/lib/listings";
import type { Faq } from "@/lib/schema";

export type HomeFilter = {
  slug: string;
  navLabel: string;
  /** Doubles as the H1 and the meta title, keep at or under ~60 chars. */
  title: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  intro: string[];
  /** Short noun phrase used in the live overview sentence, e.g. "3-bedroom homes". */
  noun: string;
  predicate: (l: Listing) => boolean;
  faqs: Faq[];
};

const d = (l: Listing) => l.description ?? "";

export const HOME_FILTERS: HomeFilter[] = [
  {
    slug: "2-bedroom",
    navLabel: "2-Bedroom Homes",
    title: "2-Bedroom Homes in Clarksville, Austin (78703)",
    metaDescription:
      "2-bedroom homes and condos for sale in Clarksville, Austin (78703). Live MLS listings filtered to two bedrooms, with a local specialist.",
    eyebrow: "2 Bedrooms",
    lead: "Every active two-bedroom home and condo inside the Clarksville boundary, in one place.",
    noun: "2-bedroom homes",
    predicate: (l) => l.beds === 2,
    intro: [
      "Two-bedroom homes are among the most searched in Clarksville, and in a neighborhood this condo-rich they are often the entry point: a boutique condominium, a cottage, or a lock-and-leave residence walkable to West Lynn. Below are the active two-bedroom listings inside the Clarksville boundary.",
    ],
    faqs: [
      {
        q: "What do 2-bedroom homes cost in Clarksville, Austin?",
        a: "Two-bedroom options in Clarksville (78703) are mostly condominiums and smaller cottages, and they are the more accessible end of the neighborhood, with condos starting in the high $300s. Detached two-bedroom cottages command more for the land and location.",
      },
    ],
  },
  {
    slug: "3-bedroom",
    navLabel: "3-Bedroom Homes",
    title: "3-Bedroom Homes in Clarksville, Austin (78703)",
    metaDescription:
      "3-bedroom homes for sale in Clarksville, Austin (78703). Live MLS listings filtered to three bedrooms, cottages, bungalows, and condos.",
    eyebrow: "3 Bedrooms",
    lead: "Every active three-bedroom home inside the Clarksville boundary, the classic family footprint.",
    noun: "3-bedroom homes",
    predicate: (l) => l.beds === 3,
    intro: [
      "Three bedrooms is the classic Clarksville family footprint: a restored bungalow, a historic cottage, or a modern infill home on a walkable block. These are the listings buyers picture when they imagine the neighborhood. Here are the active three-bedroom homes inside the Clarksville boundary.",
    ],
    faqs: [
      {
        q: "Are there 3-bedroom houses for sale in Clarksville?",
        a: "Yes. Three-bedroom homes in Clarksville (78703) range from restored Craftsman bungalows and historic cottages to architect-led infill. Because the neighborhood is small, the best ones move quickly, often before they reach the portals, so a saved search and off-market access help.",
      },
    ],
  },
  {
    slug: "4-bedroom",
    navLabel: "4-Bedroom Homes",
    title: "4-Bedroom Homes in Clarksville, Austin (78703)",
    metaDescription:
      "4-bedroom homes for sale in Clarksville, Austin (78703). Live MLS listings filtered to four bedrooms, larger historic and modern homes.",
    eyebrow: "4 Bedrooms",
    lead: "Every active four-bedroom home inside the Clarksville boundary, the larger end of a small market.",
    noun: "4-bedroom homes",
    predicate: (l) => l.beds === 4,
    intro: [
      "Four-bedroom homes sit at the larger, scarcer end of Clarksville, usually a fully restored historic home or a ground-up modern infill build on one of the neighborhood's small lots. They are the homes families size up into without leaving the district. Here are the active four-bedroom listings.",
    ],
    faqs: [
      {
        q: "How much are 4-bedroom homes in Clarksville, Austin?",
        a: "Four-bedroom homes in Clarksville (78703) are typically restored historic houses or new modern infill and sit in the upper tier of the neighborhood, frequently above the single-family median and into the luxury range. Scarcity keeps them in demand.",
      },
    ],
  },
  {
    slug: "5-bedroom",
    navLabel: "5+ Bedroom Homes",
    title: "5+ Bedroom Homes in Clarksville, Austin (78703)",
    metaDescription:
      "5-bedroom and larger homes for sale in Clarksville, Austin (78703). Live MLS listings filtered to five or more bedrooms, the estate tier.",
    eyebrow: "5+ Bedrooms",
    lead: "The largest homes inside the Clarksville boundary, five bedrooms and up.",
    noun: "homes with five or more bedrooms",
    predicate: (l) => l.beds >= 5,
    intro: [
      "Five-bedroom-plus homes are rare in Clarksville, where historic lots are small and most homes were built at cottage scale. When they exist, they are almost always estate-level restorations or large new infill builds. Here are any active five-bedroom-and-up listings inside the Clarksville boundary.",
    ],
    faqs: [
      {
        q: "Can you find 5-bedroom homes in Clarksville, Austin?",
        a: "They are uncommon. Clarksville (78703) is a small historic neighborhood of mostly cottage-scaled lots, so five-bedroom homes are limited to estate restorations and larger new-construction infill, and they sell at the top of the market. If none are listed now, Luke can watch for them.",
      },
    ],
  },
  {
    slug: "with-a-pool",
    navLabel: "Homes with a Pool",
    title: "Clarksville Homes with a Pool | Austin 78703",
    metaDescription:
      "Clarksville, Austin homes for sale with a pool (78703). Live MLS listings whose details mention a pool, in a scarce central neighborhood.",
    eyebrow: "With a pool",
    lead: "Clarksville homes whose listings mention a pool, a genuine rarity on these small lots.",
    noun: "homes with a pool",
    predicate: (l) =>
      l.propertyType !== "condo" &&
      /\bpool\b/i.test(d(l)) &&
      !/room for a pool|potential for|deep eddy|barton springs|public pool|community pool|neighborhood pool|association pool|shared pool|resort|lap pool|pool table|near the pool|to the pool/i.test(d(l)),
    intro: [
      "A private pool is a real rarity in Clarksville. Lots here are small and historic, so a pool usually means a larger estate or a thoughtfully designed modern infill home that made room for one. Below are the active Clarksville listings whose MLS details mention a pool. Always confirm the feature on the specific listing.",
    ],
    faqs: [
      {
        q: "Are there homes with a pool in Clarksville, Austin?",
        a: "Some, but not many. Clarksville's small historic lots make a private pool uncommon, so pool homes tend to be estates or larger modern infill builds. This page lists the active homes whose MLS details mention a pool; if none are showing, Luke can flag them as they come up.",
      },
    ],
  },
  {
    slug: "with-a-guest-house",
    navLabel: "Homes with a Guest House",
    title: "Clarksville Homes with a Guest House | 78703",
    metaDescription:
      "Clarksville, Austin homes for sale with a guest house or casita (78703). Live MLS listings mentioning a guest house, ADU, or garage apartment.",
    eyebrow: "With a guest house",
    lead: "Clarksville homes whose listings mention a guest house, casita, or accessory dwelling.",
    noun: "homes with a guest house",
    predicate: (l) => /guest ?house|casita|garage apartment|accessory dwelling|\bADU\b|guest quarters/i.test(d(l)),
    intro: [
      "A guest house, casita, or garage apartment adds flexibility that is hard to find on Clarksville's compact lots: a home office, a rental, or a place for family. These homes are sought after and scarce. Below are active Clarksville listings whose details mention a guest house or accessory dwelling. Verify the specifics on each listing.",
    ],
    faqs: [
      {
        q: "Do Clarksville homes come with guest houses or casitas?",
        a: "Occasionally. On Clarksville's small historic lots, a separate guest house, casita, or garage apartment is a prized and limited feature, most common on larger or recently built properties. This page surfaces the active listings that mention one.",
      },
    ],
  },
  {
    slug: "single-story",
    navLabel: "Single-Story Homes",
    title: "Single-Story Homes in Clarksville, Austin (78703)",
    metaDescription:
      "Single-story, one-level homes for sale in Clarksville, Austin (78703). Live MLS listings whose details mention single-story living.",
    eyebrow: "One level",
    lead: "Clarksville homes whose listings describe single-story, one-level living.",
    noun: "single-story homes",
    predicate: (l) => /single.?stor|one.?stor|single.?level|one.?level/i.test(d(l)),
    intro: [
      "Single-story living is a priority for many buyers, from downsizers to anyone who simply prefers one level. Many of Clarksville's historic cottages were built that way, and some condos live on a single floor. Below are active Clarksville listings whose details describe single-story or one-level living. Confirm on the specific listing.",
    ],
    faqs: [
      {
        q: "Are there single-story homes in Clarksville, Austin?",
        a: "Yes. A good share of Clarksville's historic cottages and bungalows are single-story, and single-level condos exist as well. This page lists the active homes whose MLS details describe one-level living, which is worth confirming per listing since some historic homes have added second floors.",
      },
    ],
  },
  {
    slug: "renovated",
    navLabel: "Renovated Homes",
    title: "Renovated Homes in Clarksville, Austin (78703)",
    metaDescription:
      "Renovated and updated homes for sale in Clarksville, Austin (78703). Live MLS listings describing restored, remodeled, or move-in-ready homes.",
    eyebrow: "Move-in ready",
    lead: "Clarksville homes whose listings describe a renovation, restoration, or full update.",
    noun: "renovated homes",
    predicate: (l) => /renovat|remodel|fully updated|restored|redone|rebuilt|refreshed/i.test(d(l)),
    intro: [
      "Buying in a 150-year-old neighborhood does not have to mean taking on a project. Many Clarksville homes have been thoughtfully restored or fully updated, pairing historic character with modern systems and finishes. Below are active listings whose details describe a renovation or restoration. Review the scope on each listing.",
    ],
    faqs: [
      {
        q: "Can I find move-in-ready, renovated homes in Clarksville?",
        a: "Yes. Alongside original and fixer homes, Clarksville regularly offers fully renovated and restored houses that keep the historic character while updating kitchens, baths, and systems. This page surfaces the active listings that describe a renovation; confirm the extent of the work on each one.",
      },
    ],
  },
  {
    slug: "with-a-yard",
    navLabel: "Homes with a Yard",
    title: "Clarksville Homes with a Yard | Austin 78703",
    metaDescription:
      "Clarksville, Austin homes for sale with a yard (78703). Live MLS listings mentioning a yard or outdoor space, scarce on small historic lots.",
    eyebrow: "Outdoor space",
    lead: "Clarksville homes whose listings mention a yard or private outdoor space.",
    noun: "homes with a yard",
    predicate: (l) => /\b(yard|backyard|fenced)\b/i.test(d(l)),
    intro: [
      "On Clarksville's small historic lots, real outdoor space is a genuine selling point, a fenced backyard, a garden, a place for a dog or a table under the oaks. Below are active Clarksville listings whose details mention a yard or outdoor space. Lot sizes vary, so confirm the specifics on each listing.",
    ],
    faqs: [
      {
        q: "Do Clarksville homes have yards?",
        a: "Some do, though lots are small by nature in this historic district. Single-family cottages are more likely to offer a fenced yard or garden than condos. This page lists the active homes whose details mention a yard or outdoor space; the actual lot size is worth checking per listing.",
      },
    ],
  },
  {
    slug: "townhomes",
    navLabel: "Townhomes",
    title: "Townhomes for Sale in Clarksville, Austin (78703)",
    metaDescription:
      "Townhomes for sale in Clarksville, Austin (78703). Live MLS listings filtered to townhouse-style homes in the historic neighborhood.",
    eyebrow: "Townhomes",
    lead: "Townhouse-style homes inside the Clarksville boundary.",
    noun: "townhomes",
    predicate: (l) => l.propertyType === "townhouse",
    intro: [
      "Townhomes offer a middle path in Clarksville: more space and privacy than a condo, less upkeep than a detached historic house, often with a lock-and-leave ease. They are a limited slice of this small market. Below are the active townhouse-style listings inside the Clarksville boundary.",
    ],
    faqs: [
      {
        q: "Are there townhomes for sale in Clarksville, Austin?",
        a: "Occasionally. Clarksville (78703) is dominated by historic single-family homes and condominiums, so townhomes are a smaller category. When they list, they appeal to buyers who want more room than a condo without the maintenance of a detached historic house.",
      },
    ],
  },
  {
    slug: "lofts",
    navLabel: "Lofts",
    title: "Lofts for Sale in Clarksville, Austin (78703)",
    metaDescription:
      "Lofts and loft-style condos for sale in Clarksville, Austin (78703). Live MLS listings whose details describe a loft layout.",
    eyebrow: "Loft living",
    lead: "Loft and loft-style residences whose Clarksville listings describe the layout.",
    noun: "lofts",
    predicate: (l) => /\bloft/i.test(d(l)) || /loft/i.test(l.building ?? ""),
    intro: [
      "Loft layouts, open volumes, big windows, and a modern edge, are an uncommon and distinctive way to own in Clarksville, usually within a boutique condominium building. Below are active Clarksville listings whose details describe a loft. Confirm the layout on the specific listing.",
    ],
    faqs: [
      {
        q: "Are there lofts in Clarksville, Austin?",
        a: "A few. Loft-style residences in Clarksville (78703) are found mainly in boutique condominium buildings rather than historic houses. This page lists the active listings whose MLS details describe a loft layout; if none are showing, Luke can watch for them.",
      },
    ],
  },
  {
    slug: "large-lot",
    navLabel: "Homes on a Large Lot",
    title: "Clarksville Homes on a Large Lot | Austin 78703",
    metaDescription:
      "Clarksville, Austin homes for sale on a larger lot (78703). Live MLS listings with more land than the neighborhood's typical small historic lots.",
    eyebrow: "More land",
    lead: "Clarksville homes on a larger-than-typical lot, a rarity in a small-lot district.",
    noun: "homes on a large lot",
    predicate: (l) => (l.lotSizeAcres ?? 0) >= 0.2,
    intro: [
      "Clarksville's historic lots are famously small, so a larger parcel is a genuine rarity and a real premium, room to build, garden, or simply breathe. Below are active Clarksville listings on a larger-than-typical lot, roughly a fifth of an acre or more. Confirm the exact lot size on each listing.",
    ],
    faqs: [
      {
        q: "Can you find homes on a large lot in Clarksville, Austin?",
        a: "Rarely, and they command a premium. Most Clarksville (78703) lots are small by the standards of the historic district, so a larger parcel is scarce and valuable, often the basis for a major renovation or new build. This page surfaces the active listings with more land than the neighborhood norm.",
      },
    ],
  },
  {
    slug: "under-500k",
    navLabel: "Homes Under $500K",
    title: "Clarksville Homes Under $500,000 | Austin 78703",
    metaDescription:
      "Clarksville, Austin homes and condos for sale under $500,000 (78703). The most affordable live MLS listings in the historic neighborhood.",
    eyebrow: "Under $500K",
    lead: "The most affordable active listings inside the Clarksville boundary, under $500,000.",
    noun: "homes under $500,000",
    predicate: (l) => l.price > 0 && l.price < 500_000,
    intro: [
      "Under $500,000 is the most accessible door into Clarksville, and it is almost entirely condominiums: boutique and established buildings that put you in the neighborhood and its walkable lifestyle well below the single-family median. Below are the active listings under $500,000 inside the Clarksville boundary.",
    ],
    faqs: [
      {
        q: "Can you buy in Clarksville, Austin for under $500,000?",
        a: "Yes, and almost always as a condominium. Detached houses in Clarksville (78703) trade well above this line, so under $500,000 means an entry-level or established condo, the most affordable way to own in the neighborhood. Inventory is limited, so a saved search helps.",
      },
    ],
  },
  {
    slug: "under-750k",
    navLabel: "Homes Under $750K",
    title: "Clarksville Homes Under $750,000 | Austin 78703",
    metaDescription:
      "Clarksville, Austin homes and condos for sale under $750,000 (78703). Live MLS listings at the neighborhood's more accessible end.",
    eyebrow: "Under $750K",
    lead: "Active Clarksville listings under $750,000, the neighborhood's more accessible end.",
    noun: "homes under $750,000",
    predicate: (l) => l.price > 0 && l.price < 750_000,
    intro: [
      "Under $750,000 in Clarksville opens up a bit more: most of the condo market plus the occasional smaller cottage. It is where many buyers first get a foothold in 78703 without stretching to the single-family median. Below are the active listings under $750,000 inside the Clarksville boundary.",
    ],
    faqs: [
      {
        q: "What can you buy in Clarksville, Austin under $750,000?",
        a: "Mostly condominiums, from entry-level units to larger or newer residences, plus the rare smaller cottage. Detached historic houses in Clarksville (78703) generally start higher, so under $750,000 is primarily the condo market, which is also the neighborhood's lock-and-leave, walkable entry point.",
      },
    ],
  },
  {
    slug: "1m-to-2m",
    navLabel: "Homes $1M to $2M",
    title: "Clarksville Homes $1M to $2M | Austin 78703",
    metaDescription:
      "Clarksville, Austin homes for sale from $1 million to $2 million (78703). Live MLS listings at the heart of the single-family market.",
    eyebrow: "$1M to $2M",
    lead: "Active Clarksville listings from $1 million to $2 million, the core single-family market.",
    noun: "homes from $1M to $2M",
    predicate: (l) => l.price >= 1_000_000 && l.price < 2_000_000,
    intro: [
      "The $1 million to $2 million band is the heart of the Clarksville single-family market: restored historic cottages and bungalows, and architect-led modern infill, on the neighborhood's small, walkable lots. It is where most detached-home buyers land here. Below are the active listings in that range inside the Clarksville boundary.",
    ],
    faqs: [
      {
        q: "What do homes from $1M to $2M look like in Clarksville?",
        a: "This is the core of Clarksville's single-family market (78703): restored Craftsman bungalows and historic cottages, and newer modern infill homes, on small historic lots in a walkable, downtown-adjacent setting. It sits around and above the neighborhood's single-family median, which has recently run in the low-to-mid $1 millions.",
      },
    ],
  },
];

export const getHomeFilter = (slug: string): HomeFilter | undefined =>
  HOME_FILTERS.find((f) => f.slug === slug);
