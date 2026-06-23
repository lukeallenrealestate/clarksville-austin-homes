/**
 * Side-by-side comparison content for Clarksville versus neighboring Old West
 * Austin areas. Each comparison renders a short intro, a row-by-row table, and a
 * "who it suits" verdict. Written to be genuinely useful and even-handed, which
 * is what wins the comparison long tail the portals treat shallowly.
 */
export type CompareRow = { dimension: string; clarksville: string; other: string };

export type Comparison = {
  slug: string;
  other: string; // the other neighborhood
  intro: string;
  rows: CompareRow[];
  clarksvilleFor: string;
  otherFor: string;
};

export const COMPARISONS_DATA: Record<string, Comparison> = {
  "clarksville-vs-tarrytown": {
    slug: "clarksville-vs-tarrytown",
    other: "Tarrytown",
    intro:
      "Clarksville and Tarrytown sit on opposite sides of MoPac (Loop 1) in 78703, and buyers often weigh them against each other. Clarksville is the smaller, denser, more walkable historic district closer to downtown; Tarrytown is the larger, leafier, more suburban-feeling area to the west with bigger lots.",
    rows: [
      { dimension: "Location", clarksville: "East of MoPac, minutes from downtown and West Sixth", other: "West of MoPac, toward Lake Austin" },
      { dimension: "Feel", clarksville: "Walkable, historic, urban-village", other: "Leafier, more residential and spread out" },
      { dimension: "Lots", clarksville: "Generally small historic lots", other: "Larger lots, more room" },
      { dimension: "Housing", clarksville: "Cottages, bungalows, condos, modern infill", other: "Traditional homes, estates, mid-century" },
      { dimension: "Walkability", clarksville: "Among the most walkable in west Austin (West Lynn corridor)", other: "More car-oriented day to day" },
      { dimension: "Schools", clarksville: "Mathews, O. Henry, Austin High", other: "Casis Elementary, O. Henry, Austin High" },
      { dimension: "Price", clarksville: "Roughly $1.1M to $1.6M median, luxury to $3.4M+", other: "Broad range, large lots can exceed Clarksville" },
    ],
    clarksvilleFor:
      "Clarksville suits buyers who want to walk to dinner and downtown, value historic character and a tight neighborhood fabric, and accept smaller lots for that location.",
    otherFor:
      "Tarrytown suits buyers who want more land, a quieter and greener setting, and proximity to Lake Austin, and who do not mind driving for daily errands.",
  },
  "clarksville-vs-old-enfield": {
    slug: "clarksville-vs-old-enfield",
    other: "Old Enfield",
    intro:
      "Old Enfield sits just north of Clarksville on the east side of MoPac, and the two share the Old West Austin Historic District. Old Enfield is known for grand early-20th-century estates along Enfield Road and Pease Park; Clarksville is the walkable, cottage-scaled freedmen's town to its south.",
    rows: [
      { dimension: "Character", clarksville: "Historic freedmen's town, cottage and bungalow scale", other: "Grand estates and historic mansions" },
      { dimension: "Lots", clarksville: "Smaller historic lots", other: "Larger estate lots" },
      { dimension: "Price ceiling", clarksville: "Strong, with luxury infill and new condos", other: "Among the highest in central Austin for estates" },
      { dimension: "Walkability", clarksville: "West Lynn dining and grocery on foot", other: "Walkable to Pease Park, quieter streets" },
      { dimension: "New construction", clarksville: "Active: Belvedere, Westline, infill", other: "Limited; preservation-focused" },
      { dimension: "Schools", clarksville: "Mathews, O. Henry, Austin High", other: "Similar central Austin ISD feeders" },
    ],
    clarksvilleFor:
      "Clarksville suits buyers who want walkable daily life, a range of price points including condos, and the option of new construction inside a historic setting.",
    otherFor:
      "Old Enfield suits buyers seeking a larger estate home, more land, and a quieter, grander historic streetscape, often at a higher entry point.",
  },
  "clarksville-vs-pemberton-heights": {
    slug: "clarksville-vs-pemberton-heights",
    other: "Pemberton Heights",
    intro:
      "Pemberton Heights lies northwest of Clarksville, a planned 1920s enclave of stately homes on curving, canopied streets. Clarksville is older, more walkable, and more architecturally mixed; Pemberton is more uniform, more estate-oriented, and prized for its calm.",
    rows: [
      { dimension: "Origin", clarksville: "Founded 1871, historic freedmen's town", other: "Planned 1920s residential enclave" },
      { dimension: "Streetscape", clarksville: "Grid blocks, walkable corridor", other: "Curving, heavily canopied streets" },
      { dimension: "Housing", clarksville: "Cottages, bungalows, condos, modern infill", other: "Tudor, Colonial, and traditional estates" },
      { dimension: "Lots", clarksville: "Generally smaller", other: "Larger, established lots" },
      { dimension: "Walkability", clarksville: "Dining and grocery on foot", other: "Primarily residential, drive to dine" },
      { dimension: "Buyer", clarksville: "Walkable urbanism and character", other: "Estate calm and architectural pedigree" },
    ],
    clarksvilleFor:
      "Clarksville suits buyers who prioritize walkability, historic texture, and a mix of home types and price points close to downtown.",
    otherFor:
      "Pemberton Heights suits buyers who want a larger traditional home on a quiet, canopied street and value a more uniform, estate-scaled neighborhood.",
  },
};

export function getComparison(slug: string): Comparison | undefined {
  return COMPARISONS_DATA[slug];
}
