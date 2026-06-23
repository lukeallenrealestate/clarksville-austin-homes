/**
 * The West Lynn dining corridor and Clarksville amenities. Used by the dining
 * guide and the neighborhood hub. Facts are well-documented; confirm current
 * operating status before relying on any single entry, as the restaurant scene
 * changes (Nau's Enfield Drug, for example, closed in 2023).
 */
export type Place = {
  name: string;
  kind: string;
  address?: string;
  note: string;
};

export const DINING: Place[] = [
  {
    name: "Jeffrey's",
    kind: "Fine dining",
    address: "1204 West Lynn Street",
    note: "The neighborhood's special-occasion steakhouse, part of McGuire Moorman Lambert Hospitality and a fixture of the West Lynn corridor for decades.",
  },
  {
    name: "Josephine House",
    kind: "All-day cafe",
    address: "1601 Waterston Avenue",
    note: "Jeffrey's sister restaurant in a blue cottage, with a porch and a menu that runs from morning coffee to evening wine.",
  },
  {
    name: "Cipollina",
    kind: "Italian, neighborhood",
    address: "1213 West Lynn Street",
    note: "A casual West Lynn standby for wood-oven pizza, pasta, salads, and a glass of wine, equally good for lunch or a weeknight table.",
  },
  {
    name: "Clark's Oyster Bar",
    kind: "Seafood",
    address: "West Sixth Street",
    note: "A polished raw bar that opened in 2012 and helped define the modern West Sixth scene, a short walk from Clarksville proper.",
  },
  {
    name: "Cafe Medici",
    kind: "Coffee",
    note: "A local roaster and morning gathering spot on the corridor, the kind of walkable coffee that defines daily life here.",
  },
  {
    name: "Fresh Plus Grocery",
    kind: "Neighborhood grocer",
    note: "The small, walkable grocery that lets Clarksville function as a true neighborhood rather than a commuter pocket.",
  },
  {
    name: "Wally Workman Gallery",
    kind: "Art gallery",
    note: "A long-running contemporary art gallery housed in a historic Clarksville home, part of the neighborhood's creative character.",
  },
];

/** Closed but historically important, named for context (do not present as open). */
export const FORMER: Place[] = [
  {
    name: "Nau's Enfield Drug",
    kind: "Former soda fountain (closed 2023)",
    note: "A 1951 institution with a classic soda fountain that anchored the corner for generations before closing in 2023. Named here for history, not as a current spot.",
  },
];

export type Amenity = { name: string; note: string };

export const AMENITIES: Amenity[] = [
  {
    name: "Lady Bird Lake and the Butler Hike-and-Bike Trail",
    note: "The Ann and Roy Butler Hike-and-Bike Trail along the Colorado River is within easy reach for a morning run or ride.",
  },
  {
    name: "Pease Park",
    note: "Austin's oldest city park edges the neighborhood and hosts the annual Eeyore's Birthday celebration, a beloved local tradition.",
  },
  {
    name: "West Austin Neighborhood Park",
    note: "Pool, courts, and playing fields that serve as Clarksville's everyday backyard.",
  },
  {
    name: "Mary Baylor Clarksville Park",
    note: "A neighborhood park on the site of the historic Clarksville Colored School, tying green space to the area's history.",
  },
  {
    name: "Downtown and West Sixth",
    note: "Roughly a five-minute walk to West Sixth Street restaurants and a quick trip to downtown, without giving up a residential, tree-lined setting.",
  },
];
