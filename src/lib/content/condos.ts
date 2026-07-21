/**
 * Clarksville condominium and new-construction buildings. Facts are drawn from
 * developer announcements and public sources; anything that conflicts between
 * sources is flagged with `verifyNote` so it is checked before publishing
 * (per the brief, the Belvedere residence count in particular differs by source).
 *
 * Never present a number as settled when sources disagree. The page renders the
 * verify note as a visible "confirm before offer" caveat.
 */
export type CondoImage = { src: string; width: number; height: number; alt: string };

export type CondoBuilding = {
  slug: string;
  name: string;
  status: "selling" | "complete" | "established";
  developer?: string;
  design?: string;
  address: string;
  summary: string;
  details: string[];
  priceNote?: string;
  verifyNote?: string;
  featured: boolean;
  /** Optional hero + gallery photography and a required credit line when used. */
  heroImage?: CondoImage;
  gallery?: CondoImage[];
  imageCredit?: string;
};

export const CONDOS: CondoBuilding[] = [
  {
    slug: "the-clarksville",
    name: "The Clarksville Condominiums",
    status: "selling",
    address: "1711 Enfield Road",
    summary:
      "A character-driven, 10-home boutique condominium at the Clarksville and Old Enfield edge, a reimagined mid-century building conceived as a counterbalance to Austin's trend toward uniform, hyper-modern design. Austin Monthly recognized Clarksville as a rare pocket where history, charm, and walkable living converge.",
    details: [
      "10 boutique condominium residences in a reimagined mid-century building",
      "At 1711 Enfield Road, at the Clarksville and Old Enfield edge",
      "Character-driven design for artists, romantics, and creatives",
      "Sold largely off-market; Luke Allen is on the sales team",
    ],
    priceNote:
      "Pricing and availability are handled directly. Contact Luke Allen for current details and a private tour.",
    featured: true,
    heroImage: {
      src: "/images/the-clarksville/the-clarksville-4.jpg",
      width: 2500,
      height: 1666,
      alt: "Exterior of The Clarksville Condominiums, a reimagined dark-brick mid-century building at 1711 Enfield Road, Austin",
    },
    gallery: [
      {
        src: "/images/the-clarksville/the-clarksville-2.jpg",
        width: 2500,
        height: 1635,
        alt: "Interior at The Clarksville with a marble fireplace, herringbone wood floors, and a black leather sofa",
      },
      {
        src: "/images/the-clarksville/the-clarksville-1.jpg",
        width: 2500,
        height: 1657,
        alt: "A spiral staircase and chandelier reflected in a gilt mirror inside a residence at The Clarksville",
      },
      {
        src: "/images/the-clarksville/the-clarksville-3.jpg",
        width: 1193,
        height: 1800,
        alt: "Editorial interior detail from The Clarksville Condominiums in Clarksville, Austin",
      },
    ],
    imageCredit:
      "Photography courtesy of The Clarksville (theclarksvilleatx.com), shown here to represent the development Luke Allen is on the sales team for.",
  },
  {
    slug: "the-belvedere",
    name: "The Belvedere",
    status: "selling",
    developer: "Pearlstone Partners",
    design: "KTGY Architects, interiors by Kim Lewis Design",
    address: "300 Pressler Street (West Third and Pressler)",
    summary:
      "A boutique luxury condominium at the eastern edge of Clarksville, steps from the Butler Hike-and-Bike Trail and the West Sixth scene. The Belvedere pairs full-service amenities with a walkable, trail-connected address.",
    details: [
      "Concierge service, secured garage parking, and a fitness center",
      "Direct access to the Ann and Roy Butler Hike-and-Bike Trail along Lady Bird Lake",
      "Designed by KTGY Architects with interiors by Kim Lewis Design",
      "Developed by Pearlstone Partners at West Third and Pressler",
    ],
    priceNote:
      "The original announcement quoted residences from the upper $700,000s to over $2 million. Confirm the current price sheet directly, as offerings change through the sales cycle.",
    verifyNote:
      "Sources differ on the residence count (247 in the original six-story announcement versus 158 on the current official materials) and on the final story count. Verify the exact figures with the developer before relying on them.",
    featured: true,
  },
  {
    slug: "westline",
    name: "Westline",
    status: "selling",
    developer: "Cumby Group",
    address: "1406 West 9th Street",
    summary:
      "Sixteen lock-and-leave residences in a managed condominium association, anchored around two restored homes and a historic church. Westline is single-family living without single-family upkeep, in the heart of Clarksville.",
    details: [
      "16 residences, single-family and townhouse-style, in a managed (lock-and-leave) condominium association",
      "Roughly 1,990 to 3,511 square feet, two to four bedrooms",
      "Private two-car garages",
      "Anchored around two residential homes and a historic church on the site",
    ],
    priceNote:
      "Pricing has run from roughly $1.9 million to $3.4 million. Completion timing has moved across 2025 and 2026, so treat Westline as still selling and completing, and confirm delivery dates.",
    featured: true,
  },
  {
    slug: "the-colorfield",
    name: "The Colorfield",
    status: "complete",
    developer: "Cumby Group",
    address: "Clarksville",
    summary:
      "A small collection of ten oversized residences from Cumby Group, with three- and four-bedroom floor plans. Construction is complete, so availability is resale-driven.",
    details: [
      "10 residences with three- and four-bedroom oversized floor plans",
      "Construction complete; future availability comes through resale",
      "Developed by Cumby Group",
    ],
    featured: false,
  },
  {
    slug: "de-saligny",
    name: "de Saligny",
    status: "established",
    design: "Howard Barnstone",
    address: "One block from Lamar and 12th",
    summary:
      "An architecturally significant condominium of roughly twenty residences designed by Howard Barnstone, a block from Lamar and 12th on the eastern side of the neighborhood.",
    details: [
      "Approximately 20 residences",
      "Designed by noted architect Howard Barnstone",
      "Located one block from Lamar and 12th",
    ],
    featured: false,
  },
  {
    slug: "escorial-and-woodlawn-place",
    name: "Escorial and Woodlawn Place",
    status: "established",
    address: "Clarksville",
    summary:
      "Established condominium communities that serve as entry points into Clarksville ownership, often at the more accessible end of the neighborhood's price range.",
    details: [
      "Established mid-century and garden-style condominium communities",
      "Among the more accessible ways to own in Clarksville",
      "Good candidates for buyers prioritizing location over new construction",
    ],
    featured: false,
  },
];

export function getCondo(slug: string): CondoBuilding | undefined {
  return CONDOS.find((c) => c.slug === slug);
}
