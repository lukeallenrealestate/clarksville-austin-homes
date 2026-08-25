import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { NEIGHBORHOOD } from "@/lib/site";
import { DINING } from "@/lib/content/dining";
import { SCHOOLS } from "@/lib/content/schools";
import { CONDOS } from "@/lib/content/condos";

export const metadata: Metadata = pageMeta({
  title: "Clarksville Map | Explore the Neighborhood in 78703, Austin",
  description:
    "An interactive map and guide to Clarksville, Austin (78703): its boundaries, historic landmarks, West Lynn dining, parks and trails, schools, and condo buildings.",
  path: "/clarksville-map",
});

const gmaps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${q}, Austin, TX 78703`)}`;

type Entry = { name: string; meta?: string; note: string; href: string; external?: boolean };

const landmarks: Entry[] = [
  { name: "Charles Clark's House", meta: "1618 West 10th Street", note: "Where Clarksville began in 1871.", href: gmaps("1618 West 10th Street"), external: true },
  { name: "Sweet Home Missionary Baptist Church", meta: "1725 West 11th Street", note: "The community's cornerstone since 1871.", href: gmaps("1725 West 11th Street"), external: true },
  { name: "The Hezikiah Haskell House", meta: "1703 Waterston Avenue", note: "A City of Austin historic landmark.", href: gmaps("1703 Waterston Avenue"), external: true },
  { name: "Mary Baylor Clarksville Park", meta: "West 10th Street", note: "On the site of the historic Clarksville School.", href: gmaps("Mary Baylor Clarksville Park"), external: true },
  { name: "Wally Workman Gallery", meta: "West Sixth Street", note: "Contemporary art in a historic Clarksville home.", href: gmaps("Wally Workman Gallery"), external: true },
];

const parks: Entry[] = [
  { name: "Ann and Roy Butler Hike-and-Bike Trail", meta: "Lady Bird Lake", note: "The riverfront trail, minutes away on foot.", href: gmaps("Ann and Roy Butler Hike and Bike Trail"), external: true },
  { name: "Pease Park", meta: "Kingsbury Street", note: "Austin's oldest city park, home to Eeyore's Birthday.", href: gmaps("Pease Park"), external: true },
  { name: "West Austin Neighborhood Park", meta: "West 10th Street", note: "Pool, courts, and fields, the neighborhood's backyard.", href: gmaps("West Austin Neighborhood Park"), external: true },
];

const shops: Entry[] = [
  { name: "Fresh Plus Grocery", meta: "West Lynn Street", note: "The walkable neighborhood grocer.", href: gmaps("Fresh Plus Grocery West Lynn"), external: true },
];

function Directory({ title, eyebrow, entries }: { title: string; eyebrow: string; entries: Entry[] }) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">{title}</h2>
      <div className="mt-7 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {entries.map((e) => (
          <a
            key={e.name}
            href={e.href}
            target={e.external ? "_blank" : undefined}
            rel={e.external ? "noopener noreferrer" : undefined}
            className="group flex gap-4 border-t border-line pt-4 transition-colors hover:border-brass/50"
          >
            <span aria-hidden className="mt-2 h-[6px] w-[6px] shrink-0 rotate-45 bg-brass" />
            <span>
              <span className="font-display text-lg text-ink transition-colors group-hover:text-brass-deep">
                {e.name}
              </span>
              {e.meta ? <span className="font-label ml-2 text-[0.55rem] text-brass-deep">{e.meta}</span> : null}
              <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{e.note}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

const FAQS = [
  {
    q: "Where is Clarksville in Austin?",
    a: "Clarksville sits just west of downtown Austin, within ZIP 78703. This site defines it as the National Register historic district and the blocks around it, bounded roughly by MoPac (Loop 1) on the west, West Lynn Street on the east, and the West 10th to Waterston blocks north and south, within the broader Old West Austin area.",
  },
  {
    q: "What are the boundaries of Clarksville, Austin?",
    a: "Clarksville's core is a roughly ten-block area bounded by MoPac to the west and West Lynn Street to the east, with north and south edges around Waterston, West 12th, and West 10th. A broader, commonly used definition runs from Enfield Road to Lady Bird Lake and North Lamar to MoPac.",
  },
  {
    q: "What is there to do in Clarksville?",
    a: "Clarksville offers the West Lynn dining corridor (Jeffrey's, Josephine House, Cipollina, Clark's Oyster Bar), Pease Park and the Lady Bird Lake trail, the Wally Workman art gallery, and historic landmarks like Sweet Home Missionary Baptist Church and the Haskell House, all within a walkable ten-block area.",
  },
];

export default function ClarksvilleMap() {
  const dining: Entry[] = DINING.map((d) => ({
    name: d.name,
    meta: d.address ?? d.kind,
    note: d.note,
    href: gmaps(d.address ? `${d.name} ${d.address}` : `${d.name} Clarksville`),
    external: true,
  }));
  const schools: Entry[] = SCHOOLS.map((s) => ({
    name: s.name,
    meta: s.address ?? s.level,
    note: s.level + (s.grades ? `, grades ${s.grades}` : ""),
    href: gmaps(s.address ?? s.name),
    external: true,
  }));
  const buildings: Entry[] = CONDOS.map((c) => ({
    name: c.name,
    meta: c.address,
    note: c.summary.split(".")[0] + ".",
    href: `/clarksville-condos/${c.slug}`,
  }));

  return (
    <>
      <PageHero
        eyebrow="Explore the Neighborhood"
        title="The Clarksville map"
        lead="Where everything is, and why the neighborhood works. Boundaries, historic landmarks, the West Lynn corridor, parks, schools, and every condo building, on one page."
        photo={PHOTOS.streetscape}
        crumbs={[{ name: "Clarksville Map", path: "/clarksville-map" }]}
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="prose-clark max-w-3xl">
            <p>{NEIGHBORHOOD.boundaryStatement}</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[3px] border border-line">
            <iframe
              title="Map of Clarksville, Austin, Texas 78703"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full sm:h-[520px]"
              src="https://maps.google.com/maps?q=Clarksville%2C%20Austin%2C%20TX%2078703&z=15&output=embed"
            />
          </div>
          <p className="font-label mt-3 text-[0.55rem] text-muted">
            Tap any place below to open it in Google Maps for directions.
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-16 sm:py-20">
        <Container className="space-y-16">
          <Directory title="Historic landmarks" eyebrow="The story on the ground" entries={landmarks} />
          <Directory title="Dining, coffee, and shops" eyebrow="The West Lynn corridor" entries={[...dining, ...shops]} />
          <Directory title="Parks and trails" eyebrow="Green space" entries={parks} />
          <Directory title="Schools" eyebrow="Austin ISD feeder" entries={schools} />
          <Directory title="Condo buildings" eyebrow="Where to own" entries={buildings} />
        </Container>
      </section>

      <FaqSection faqs={FAQS} eyebrow="About the map" title="Clarksville location and boundaries" />

      <ContactCta
        heading="Get to know it in person"
        body="A map only says so much. Reach out to Luke for a walk through Clarksville, the blocks, the buildings, and the life between them."
        intent="general"
      />
    </>
  );
}
