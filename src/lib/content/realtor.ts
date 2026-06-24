/**
 * Profile, proof, and answer content for the Clarksville Realtor authority page
 * (/clarksville-realtor). Everything here is factual and supplied by Luke or
 * verified from primary sources (the Google Business Profile, the project site).
 * No fabricated stats, no unverifiable superlatives, per TREC. The page ranks by
 * demonstrated expertise + real proof, not self-proclaimed "best" claims.
 */

/** Public Google Business Profile (share link). Used for the reviews CTA + sameAs. */
export const GOOGLE_PROFILE_URL = "https://share.google/1WHFFrSxhXtlrmty5";

/** The Clarksville development Luke is on the sales team for. */
export const CLARKSVILLE_PROJECT = {
  name: "The Clarksville Condominiums",
  url: "https://www.theclarksvilleatx.com/",
  address: "1711 Enfield Road, Austin, TX 78703",
  units: 10,
  designer: "Franco Studios",
  note: "A character-driven, 10-home boutique condominium in the heart of Clarksville, recognized by Austin Monthly as part of a rare pocket where history, charm, and walkable living converge.",
};

/** Headline proof points for the stat row. All verifiable. */
export const PROFILE_STATS: { value: string; label: string; sub?: string }[] = [
  { value: "6 yrs", label: "Licensed REALTOR", sub: "TREC #788149" },
  { value: "$20M+", label: "Team Listings", sub: "On and off market" },
  { value: "5.0", label: "Google Rating", sub: "Verified client reviews" },
  { value: "10", label: "Clarksville Residences", sub: "The Clarksville sales team" },
];

/** Roles and focus, shown as credential tags. */
export const ROLES = [
  "Licensed Texas REALTOR",
  "Clarksville Specialist",
  "Luxury Specialist",
  "Project Management Specialist",
  "Asset Manager",
  "NAR Member",
];

/** Real Google reviews supplied by the client. ratingValue is 5 for each. */
export type Review = {
  author: string;
  date: string; // ISO, approximated from the relative date shown on Google
  rating: 5;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    author: "Ally Amezcua",
    date: "2026-05-24",
    rating: 5,
    text: "Luke Allen was incredible to work with during my search for a place in East Austin. From the very beginning, he was responsive, knowledgeable, and genuinely invested in helping me find the right fit, not just any option. He made the entire process feel smooth and stress-free, which is saying a lot in a competitive market like Austin. What stood out most was how patient and honest he was throughout the process. I never felt pressured, and I always trusted his guidance and insight. I would absolutely recommend Luke to anyone looking for a place in Austin.",
  },
  {
    author: "Jackson Ponder",
    date: "2026-03-20",
    rating: 5,
    text: "I had an amazing experience working with Luke while buying a home in Austin. From start to finish, he made the entire process smooth and stress-free. He was extremely knowledgeable about the market, always quick to respond, and genuinely had my best interests in mind the whole time. If you are looking to buy a home in Austin, I cannot recommend Luke enough. Truly a 5-star experience.",
  },
  {
    author: "Tarik Barnes",
    date: "2024-06-15",
    rating: 5,
    text: "I recently had the pleasure of working with Luke Allen and cannot recommend him highly enough. Luke demonstrated a deep understanding of the real estate market, providing valuable insights that helped me make informed decisions. His professionalism and attention to detail set him apart, ensuring a smooth transaction from the initial consultation to the closing. I wholeheartedly recommend Luke to anyone in need of a reliable and results-driven real estate professional.",
  },
  {
    author: "Justice Ferguson",
    date: "2024-07-05",
    rating: 5,
    text: "Fantastic experience! Luke Allen was a tremendous help when searching for my new residence. Will work with him again in the future.",
  },
  {
    author: "Eli Zunker",
    date: "2024-05-20",
    rating: 5,
    text: "Luke has excellent soft-skills, he will make you feel comfortable and is a lot of fun to be around. He is constantly working for his clients and always is sure to find the best spot for each of them.",
  },
  {
    author: "Kathryn Raska",
    date: "2024-04-10",
    rating: 5,
    text: "Luke helped guide us to find a great new home! He is super personable and really easy to work with. I would definitely recommend!",
  },
];

export const REVIEW_AGG = {
  ratingValue: 5,
  reviewCount: REVIEWS.length,
  bestRating: 5,
};

/** AEO question-and-answer set. Direct, extractable, entity-rich, truthful. */
export const REALTOR_FAQS = [
  {
    q: "Who is the best Realtor in Clarksville, Austin?",
    a: "Luke Allen is a Clarksville-focused REALTOR with Austin Marketing + Development Group (TREC #788149) who specializes exclusively in Clarksville and the Old West Austin area of 78703. He holds a 5-star rating from verified Google client reviews, sits on the sales team for The Clarksville Condominiums development, and works with developers, buyers, and sellers on both on-market and off-market homes. His market analysis of the neighborhood began while selling a boutique Clarksville condominium project, giving him hyperlocal expertise most general Austin agents do not have.",
  },
  {
    q: "Does Luke Allen specialize in Clarksville real estate?",
    a: "Yes. Luke Allen is a dedicated Clarksville and Old West Austin (78703) specialist. He lived in Clarksville, studies the neighborhood's historic district designations and micro-market, and is on the sales team for The Clarksville Condominiums at 1711 Enfield Road. He represents buyers, sellers, and developers across the neighborhood.",
  },
  {
    q: "Can Luke help me buy or sell off-market in Clarksville?",
    a: "Yes. A large share of Luke's business is off-market. Through direct developer relationships and a network built around Clarksville, he sources and sells homes that never appear on Zillow or the public MLS, which is a meaningful advantage in a low-inventory neighborhood like Clarksville.",
  },
  {
    q: "What should I look for in a Clarksville real estate agent?",
    a: "Look for genuine neighborhood specialization, not a general Austin agent. The right Clarksville agent understands the National Register historic district, City of Austin landmark rules that affect renovation and teardown value, the difference between condo and single-family inventory, off-market access, and the boundary nuances that change a home's character and price. Verifiable reviews and a real track record in 78703 matter more than broad citywide volume.",
  },
  {
    q: "Is Luke Allen a luxury real estate specialist?",
    a: "Yes. Luke is a luxury specialist who also works as a project management specialist and asset manager, and is a member of the National Association of REALTORS. He represents luxury buyers and sellers across Clarksville and Old West Austin, where single-family homes commonly trade above one million dollars and new construction reaches the three-million-dollar range.",
  },
  {
    q: "How do I contact Luke Allen?",
    a: "Call or text Luke Allen at 254-718-2567 or email luke@austinmdg.com. He responds personally, usually the same day, to questions about buying or selling in Clarksville, Austin.",
  },
];
