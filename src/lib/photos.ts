/**
 * Curated photography manifest, with real dimensions and descriptive alt text
 * (image SEO + zero layout shift). Files live in /public/images.
 *
 * The starter set is genuinely topical Creative Commons / public-domain imagery
 * of Clarksville and Old West Austin (Wikimedia Commons), warm-graded for the
 * Historic Luxury direction. Replace any file with Luke's own original
 * photography by dropping a new file in /public/images and updating the entry
 * here (keep width/height accurate so Cumulative Layout Shift stays at zero).
 *
 * Attribution for CC-BY images is listed in /public/images/CREDITS.md and shown
 * on the credits/photo line where required.
 */
export type PhotoMeta = { src: string; width: number; height: number; alt: string };

export const PHOTOS = {
  hero: {
    src: "/images/clarksville-canopy.jpg",
    width: 1600,
    height: 1067,
    alt: "Live oak canopy over a residential street in Clarksville, Austin, in golden afternoon light",
  },
  canopy: {
    src: "/images/clarksville-canopy.jpg",
    width: 1600,
    height: 1067,
    alt: "Tree-canopied residential street in Clarksville, Old West Austin",
  },
  bungalow: {
    src: "/images/clarksville-bungalow.jpg",
    width: 1600,
    height: 1067,
    alt: "A historic Craftsman bungalow with a deep front porch in the Clarksville historic district, Austin",
  },
  church: {
    src: "/images/sweet-home-church.jpg",
    width: 1600,
    height: 1067,
    alt: "Sweet Home Missionary Baptist Church, the historic spiritual cornerstone of Clarksville, Austin",
  },
  haskellHouse: {
    src: "/images/haskell-house.jpg",
    width: 1600,
    height: 1067,
    alt: "The Haskell House, a surviving hall-and-parlor home and City of Austin historic landmark in Clarksville",
  },
  streetscape: {
    src: "/images/clarksville-streetscape.jpg",
    width: 1600,
    height: 1067,
    alt: "A Clarksville streetscape of restored cottages and mature trees in Old West Austin",
  },
  westLynn: {
    src: "/images/west-lynn-dining.jpg",
    width: 1600,
    height: 1067,
    alt: "The walkable West Lynn dining corridor at the heart of Clarksville, Austin",
  },
  porch: {
    src: "/images/historic-porch.jpg",
    width: 1600,
    height: 1067,
    alt: "Architectural detail of a historic Clarksville porch with board-and-batten siding and brass hardware",
  },
  newBuild: {
    src: "/images/clarksville-new-build.jpg",
    width: 1600,
    height: 1067,
    alt: "Luxury modern infill architecture set behind the historic streetscape of Clarksville, Austin",
  },
  park: {
    src: "/images/pease-park.jpg",
    width: 1600,
    height: 1067,
    alt: "Green space and trail near Clarksville along the edge of Old West Austin",
  },
  luke: {
    src: "/images/luke-allen.jpg",
    width: 1200,
    height: 1500,
    alt: "Luke Allen, licensed Texas REALTOR and Clarksville Austin neighborhood specialist",
  },
} as const;

/** Editorial gallery set for the neighborhood and home pages. */
export const GALLERY: PhotoMeta[] = [
  PHOTOS.bungalow,
  PHOTOS.streetscape,
  PHOTOS.church,
  PHOTOS.westLynn,
  PHOTOS.porch,
  PHOTOS.haskellHouse,
];
