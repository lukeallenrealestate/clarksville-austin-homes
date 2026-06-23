/**
 * FAQ sets per page, written as direct, extractable answers with explicit entity
 * language ("Clarksville, Austin, Texas, 78703") for answer engines (AEO/GEO).
 * Each set is attached to the page that actually answers it so FAQPage schema
 * matches the visible content.
 */
import type { Faq } from "@/lib/schema";

export const HOME_FAQS: Faq[] = [
  {
    q: "Where is Clarksville in Austin?",
    a: "Clarksville is a historic neighborhood in Austin, Texas, in ZIP code 78703, just west of downtown and northeast of MoPac (Loop 1). It sits within the Old West Austin Historic District, between Old Enfield, Tarrytown, and downtown. It should not be confused with Clarksville, Tennessee.",
  },
  {
    q: "How much do homes cost in Clarksville, Austin?",
    a: "Clarksville single-family homes generally run from about $1.1 million to $1.6 million, depending on which boundary and time frame you measure, with luxury new builds such as Westline reaching roughly $3.4 million. Condos offer lower entry points. See the dated, sourced figures on the Clarksville market report.",
  },
  {
    q: "Is Clarksville a historic district?",
    a: "Yes. The Clarksville Historic District was added to the National Register of Historic Places in 1976, and the area lies within the Old West Austin Historic District. National Register status is largely honorific; individual City of Austin local historic landmark designations, which some specific addresses carry, are what trigger Historic Landmark Commission review of exterior changes and demolition.",
  },
  {
    q: "Why choose a Clarksville specialist instead of a portal?",
    a: "Clarksville is a small, low-inventory, high-intent market where local knowledge decides outcomes: which blocks fit your life, whether a specific address carries landmark restrictions, and when a listing is coming before it hits the portals. Luke Allen, a licensed Texas REALTOR with Austin Marketing + Development Group, works this neighborhood directly.",
  },
];

export const HISTORY_FAQS: Faq[] = [
  {
    q: "Who founded Clarksville, Austin?",
    a: "Clarksville was founded in 1871 by Charles Clark, a freedman born into slavery in Mississippi around 1820. On August 11, 1871, Clark bought two acres about a half mile west of Austin's then city limits from Confederate general and former Austin mayor Nathan G. Shelley for $100, and built his house at 1618 West 10th Street. He then subdivided and sold parcels to other freedmen.",
  },
  {
    q: "Is Clarksville one of the oldest freedmen's towns?",
    a: "Yes. The Texas State Historical Association's Handbook of Texas describes Clarksville as one of the oldest freedmen's towns west of the Mississippi, and one of four such settlements in Austin alongside Wheatville, Masontown, and Kincheonville.",
  },
  {
    q: "How did MoPac affect Clarksville?",
    a: "MoPac (Loop 1) construction around 1971 cut through the community. Per the Handbook of Texas, twenty-six families were relocated and twenty-three more left on their own, and the number of homes fell from 162 in 1970 to fewer than 100 by 1976. Residents defeated a separate thoroughfare plan in 1976, and the Clarksville Community Development Corporation formed to preserve affordability and character.",
  },
];

export const ARCHITECTURE_FAQS: Faq[] = [
  {
    q: "What architectural styles are in Clarksville?",
    a: "Clarksville's housing stock mixes original and restored Victorian-era cottages, Craftsman bungalows, hall-and-parlor historic homes, mid-century garden-style condos, and luxury modern infill and new builds. Lots are generally small, which shapes both renovation and new construction.",
  },
  {
    q: "Can you tear down or remodel a home in Clarksville?",
    a: "It depends on the specific address. Homes with an individual City of Austin local historic landmark designation require Historic Landmark Commission review for exterior changes and demolition. Homes that only fall within the National Register district, without an individual local landmark designation, face fewer such restrictions. Always run a designation check on a specific address before planning a renovation or making an offer.",
  },
  {
    q: "What is the Haskell House?",
    a: "The Haskell House, built around 1875 to 1887 at 1703 and 1705 Waterston Avenue, is a surviving hall-and-parlor home and a City of Austin Local Historic Landmark, one of the neighborhood's most significant early structures.",
  },
];

export const CONDO_FAQS: Faq[] = [
  {
    q: "What new condos are being built in Clarksville?",
    a: "Active new-construction condominiums in and around Clarksville include The Belvedere by Pearlstone Partners at 300 Pressler Street and Westline by Cumby Group at 1406 West 9th Street. The Colorfield is complete, and de Saligny, Escorial, and Woodlawn Place are established communities. Confirm current availability and pricing, which change through each sales cycle.",
  },
  {
    q: "How much do Clarksville condos cost?",
    a: "Condos span a wide range. The Belvedere was originally announced from the upper $700,000s to over $2 million, while Westline residences have been priced from roughly $1.9 million to $3.4 million. Established communities like Escorial and Woodlawn Place offer lower entry points. Verify the current price sheet before relying on any figure.",
  },
];

export const SCHOOL_FAQS: Faq[] = [
  {
    q: "What schools serve Clarksville, Austin?",
    a: "Clarksville is served by Austin ISD: Mathews Elementary at 906 West Lynn Street, O. Henry Middle School at 2610 West 10th Street, and Austin High School at 1715 West Cesar Chavez Street. Private options, including St. Stephen's Episcopal, also draw families. Confirm the assignment for a specific address with Austin ISD, since zones can change.",
  },
  {
    q: "How good is Mathews Elementary?",
    a: "Mathews Elementary ranks highly. Public School Review (2026) places it #435 of 8,096 Texas schools, in the top 10 percent, and reports 80 to 84 percent reading proficiency against a 51 percent state average. SchoolDigger ranks it better than 87.9 percent of Texas elementary schools, and it carries a Niche grade A and a 10 of 10 GreatSchools rating.",
  },
];

export const MARKET_FAQS: Faq[] = [
  {
    q: "What is the median home price in Clarksville, Austin?",
    a: "Estimates range from about $1.1 million (all property types, CurbScout, March 2026) to $1.6 million (single-family, Keenan Group at Compass MLS polygon, June 23, 2026). The gap is mostly because Clarksville listings skew toward condos, which pull a blended median down. For single-family values, the trailing-12-month figure near $1.6 million is the more reliable read.",
  },
  {
    q: "Why do Clarksville price estimates vary so much?",
    a: "Clarksville is small, so only a handful of homes may close in a given month, and condos and single-family homes are often mixed into one median. That makes single-month figures from sites like Redfin and Orchard swing wildly. The most credible reads use trailing-12-month, MLS-based numbers, dated and sourced.",
  },
  {
    q: "Is Clarksville a good investment?",
    a: "The investment thesis rests on scarcity: a small footprint, historic protections that limit new supply, durable walkable demand anchored by the West Lynn dining scene, and proximity to downtown. Low inventory and high intent have historically supported values, though all real estate carries risk and past performance does not guarantee future results.",
  },
];

export const SELLER_FAQS: Faq[] = [
  {
    q: "What is my Clarksville home worth?",
    a: "Value in Clarksville depends on the specific block, lot size, condition, any historic landmark designation, and current inventory, which is why automated estimates miss badly here. Luke Allen prepares a hyperlocal comparative market analysis using trailing-12-month MLS data for the neighborhood. Request a Clarksville home valuation to get a real number for your address.",
  },
  {
    q: "How fast do homes sell in Clarksville?",
    a: "Days on market run roughly 74 to 87 days on recent trailing-12-month figures, with a sale-to-list ratio near 89 percent, though well-prepared and well-priced homes in prime blocks can move faster. Pricing and presentation matter more here than in higher-volume neighborhoods.",
  },
];
