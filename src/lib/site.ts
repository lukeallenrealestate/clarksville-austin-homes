/**
 * Single source of truth for the Clarksville Austin Homes resource site.
 *
 * Every verified neighborhood fact, the agent/compliance identity, the nav
 * structure, and external links live here so pages stay consistent and the
 * TREC-required disclosures appear site-wide. Do not invent specs. Anything
 * uncertain is marked TODO for Luke to confirm before publishing.
 *
 * Disambiguation rule: this site is about Clarksville in Austin, Texas (ZIP
 * 78703). Bare "Clarksville" defaults to Clarksville, Tennessee, so copy,
 * titles, and schema always pin "Clarksville, Austin" or "Clarksville 78703."
 */

// Production domain. Override per-environment with NEXT_PUBLIC_SITE_URL.
// Keep www-vs-non-www consistent here, on the host, and in canonicals.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clarksvilleaustinhomes.com"
).replace(/\/$/, "");

export const SITE_NAME = "Clarksville Austin Homes";

// Independent-specialist positioning. Never uses "official."
export const SITE_TAGLINE =
  "A buyer and seller guide to Clarksville, the historic neighborhood in Austin, Texas (78703), with live MLS listings and original local expertise.";

/* ---------------------------------------------------------------------------
 * Agent and brokerage identity (TREC compliance). Use exactly as written.
 * ------------------------------------------------------------------------- */
export const AGENT = {
  name: "Luke Allen",
  title: "Licensed Texas REALTOR",
  trecLicense: "788149",
  email: "luke@austinmdg.com",
  phone: "254-718-2567",
  phoneHref: "tel:+12547182567",
  smsHref: "sms:+12547182567",
  brokerage: "Austin Marketing + Development Group",
  brokerageShort: "Austin MDG",
  // Buyer-facing full IDX home search (existing site). Opens in a new tab.
  idxSearchUrl: "https://austintxhomes.co/search",
  // Public profiles Google should associate with this agent (entity linking).
  sameAs: [
    "https://austintxhomes.co",
    "https://www.facebook.com/LukeAllen10000/",
    "https://www.instagram.com/lukeallenrealty/",
    "https://www.youtube.com/channel/UCVwDTcZHOySZEikL5T9AjbQ",
    "https://x.com/lukeallentx",
  ] as string[],
} as const;

/* ---------------------------------------------------------------------------
 * TREC required links (footer, site-wide).
 * IABS = Information About Brokerage Services. CPN = Consumer Protection Notice.
 * ------------------------------------------------------------------------- */
export const TREC = {
  // TODO(luke): replace with the URL to YOUR completed/branded IABS PDF if you
  // host one. The TREC form page below is an acceptable interim link.
  iabsUrl: "https://www.trec.texas.gov/forms/information-about-brokerage-services",
  consumerProtectionUrl: "https://www.trec.texas.gov/forms/consumer-protection-notice",
} as const;

/* ---------------------------------------------------------------------------
 * Verified neighborhood facts. Treat uncertain numbers as TODO, never guess.
 * Sourced from the TSHA Handbook of Texas, the National Register nomination,
 * the City of Austin, and Austin ISD. See src/lib/content for detail and
 * citations rendered on the page.
 * ------------------------------------------------------------------------- */
export const NEIGHBORHOOD = {
  name: "Clarksville",
  cityState: "Austin, Texas",
  fullName: "Clarksville, Austin",
  zip: "78703",
  county: "Travis County",
  councilDistrict: "District 9",
  founded: 1871,
  founder: "Charles Clark",
  nationalRegisterYear: 1976,
  // Approximate centroid of Clarksville proper (W 10th and West Lynn area).
  // TODO(luke): fine-tune before publishing if you want a precise pin.
  geo: { lat: 30.2789, lng: -97.7607 },
  // The boundary this site uses, stated plainly because definitions vary.
  boundaryStatement:
    "This site defines Clarksville as the National Register historic district and the blocks around it, bounded roughly by MoPac (Loop 1) on the west, West Lynn Street on the east, and the West 10th to Waterston blocks north and south, within the broader Old West Austin area framed by Enfield Road, North Lamar, Lady Bird Lake, and MoPac.",
  neighbors: ["Old Enfield", "Tarrytown", "Pemberton Heights", "Bryker Woods", "Downtown Austin"],
  schools: {
    district: "Austin ISD",
    elementary: "Mathews Elementary",
    middle: "O. Henry Middle School",
    high: "Austin High School",
  },
} as const;

/** Common spelling/intent variants, used for schema alternateName + AEO. */
export const NEIGHBORHOOD_VARIANTS = [
  "Clarksville Austin",
  "Clarksville 78703",
  "Clarksville historic district",
  "Old West Austin",
];

/** Social profiles shown in the footer (also declared in AGENT.sameAs). */
export const SOCIALS: { label: string; href: string }[] = [
  { label: "Facebook", href: "https://www.facebook.com/LukeAllen10000/" },
  { label: "Instagram", href: "https://www.instagram.com/lukeallenrealty/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCVwDTcZHOySZEikL5T9AjbQ" },
  { label: "X", href: "https://x.com/lukeallentx" },
];

/* ---------------------------------------------------------------------------
 * Navigation / hub-and-spoke map. Drives the header, footer, and sitemap.
 * `inNav` controls header visibility; every entry is still crawlable + in the
 * sitemap. `group` powers the footer columns. `fresh` flags data pages that
 * refresh often (higher sitemap change frequency, lastmod tied to MLS sync).
 * ------------------------------------------------------------------------- */
export type NavItem = {
  href: string;
  label: string;
  short?: string;
  group: "listings" | "neighborhood" | "transact";
  inNav: boolean;
  fresh?: boolean;
};

export const NAV: NavItem[] = [
  { href: "/clarksville-homes-for-sale", label: "Homes for Sale", short: "For Sale", group: "listings", inNav: true, fresh: true },
  { href: "/clarksville-condos-for-sale", label: "Condos for Sale", short: "Condos", group: "listings", inNav: false, fresh: true },
  { href: "/clarksville-luxury-homes", label: "Luxury Homes", group: "listings", inNav: false, fresh: true },
  { href: "/clarksville-new-construction", label: "New Construction", group: "listings", inNav: false, fresh: true },
  { href: "/clarksville-market-report", label: "Market Report", short: "Market", group: "listings", inNav: true, fresh: true },
  { href: "/neighborhood", label: "Neighborhood Guide", short: "Neighborhood", group: "neighborhood", inNav: true },
  { href: "/clarksville-history", label: "History", group: "neighborhood", inNav: false },
  { href: "/clarksville-restaurants", label: "Dining", group: "neighborhood", inNav: false },
  { href: "/clarksville-schools", label: "Schools", group: "neighborhood", inNav: false },
  { href: "/clarksville-architecture", label: "Architecture", group: "neighborhood", inNav: false },
  { href: "/clarksville-condos", label: "Condo Buildings", group: "neighborhood", inNav: false },
  { href: "/insights", label: "Insights", group: "neighborhood", inNav: false },
  { href: "/buying-in-clarksville", label: "Buying", group: "transact", inNav: false },
  { href: "/sell-your-clarksville-home", label: "Sell / Home Value", short: "Sell", group: "transact", inNav: true },
  { href: "/clarksville-realtor", label: "Clarksville Realtor", short: "Realtor", group: "transact", inNav: true },
  { href: "/about", label: "About Luke", group: "transact", inNav: false },
  { href: "/contact", label: "Contact", group: "transact", inNav: true },
];

export const headerNav = NAV.filter((n) => n.inNav);

/* ---------------------------------------------------------------------------
 * Analytics IDs.
 * ------------------------------------------------------------------------- */
export const ANALYTICS = {
  // TODO(luke): paste your GA4 Measurement ID (format: G-XXXXXXXXXX).
  ga4: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  // AMDG Master Pixel (shared across Luke's sites).
  metaPixel: "2215492562520453",
} as const;
