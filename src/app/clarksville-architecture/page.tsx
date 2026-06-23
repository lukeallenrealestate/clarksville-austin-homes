import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/ArticleShell";
import { InlineCta } from "@/components/ContactCta";
import { getGuide } from "@/lib/content/guides";
import { ARCHITECTURE_FAQS } from "@/lib/content/faqs";
import { LINKS } from "@/lib/content/related";

const guide = getGuide("clarksville-architecture")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Architecture & Historic Landmark Rules | Austin 78703",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function ArchitecturePage() {
  return (
    <ArticleShell
      guide={guide}
      lead="Clarksville's housing stock reads like a timeline: freedmen's-era cottages, Craftsman bungalows, mid-century condos, and discreet modern infill. Knowing the styles, and the rules that govern them, is the difference between a smart purchase and a costly surprise."
      faqs={ARCHITECTURE_FAQS}
      related={[LINKS.history, LINKS.condos, LINKS.homesForSale]}
      ctaHeading="Run a designation check before you offer"
      ctaBody="Whether a Clarksville home carries an individual City of Austin landmark designation changes everything about renovation and value. Luke pulls that before you write an offer."
    >
      <p>
        Walk a single Clarksville block and you can read a century and a half of Austin in the
        facades. The neighborhood was never master-planned, so its architecture accumulated rather
        than arrived, which is exactly why it feels authentic. For buyers, the styles are not just
        aesthetic preferences; they signal age, construction quality, lot constraints, and how much
        latitude you will have to change a home.
      </p>

      <h2>Victorian-era cottages and hall-and-parlor homes</h2>
      <p>
        The oldest surviving homes are modest, human-scaled cottages, including hall-and-parlor
        houses like the Haskell House at 1703 and 1705 Waterston Avenue, built around 1875 to 1887.
        These are the structures most likely to carry historic significance and the most sensitive to
        alteration. They reward restoration over reinvention.
      </p>

      <h2>Craftsman bungalows</h2>
      <p>
        The bungalow is the signature Clarksville home: a low-slung Craftsman with a deep front
        porch, exposed rafter tails, tapered porch columns, and original longleaf pine or oak floors.
        They sit close to the street on small lots, which is part of their charm and part of their
        renovation challenge. Restored bungalows are among the most sought-after homes in the
        neighborhood.
      </p>

      <h2>Mid-century garden condos</h2>
      <p>
        Tucked between the houses are mid-century, garden-style condominium communities such as
        Escorial and Woodlawn Place. They are often the most accessible way to own in Clarksville and
        a smart entry point for buyers who value the location above all else.
      </p>

      <h2>Luxury modern infill and new construction</h2>
      <p>
        The newest layer is architect-led modern infill: white-oak interiors, steel windows, and
        clean massing set carefully behind the historic streetscape, plus boutique new-construction
        condominiums like The Belvedere and Westline. Good infill here is quiet. It respects the
        scale of its neighbors rather than shouting over them.
      </p>

      <InlineCta href="/clarksville-condos" label="See the buildings">
        Curious about the new condo buildings?
      </InlineCta>

      <h2>The rule that matters most: local landmark vs National Register</h2>
      <p>
        This is the single most important thing a Clarksville buyer can understand. The whole
        neighborhood is a National Register historic district, listed in 1976, but that status is
        largely honorific and does not, by itself, restrict what you do to a house.
      </p>
      <p>
        What does restrict you is an individual <strong>City of Austin local historic landmark</strong>{" "}
        designation. Homes that carry one require Historic Landmark Commission review for exterior
        changes and demolition. Teardown and redevelopment economics, and the feasibility of a major
        remodel, hinge entirely on whether a specific address is locally designated. Two homes on the
        same block can have very different rights.
      </p>
      <p>
        The practical takeaway: never assume. Run a designation check on the exact address before you
        plan a renovation or write an offer. It is a quick step that can save a buyer from a
        seven-figure misunderstanding, and it is part of the diligence a single-neighborhood
        specialist handles as a matter of course.
      </p>
    </ArticleShell>
  );
}
