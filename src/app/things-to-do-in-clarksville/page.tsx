import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PHOTOS, type PhotoMeta } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Things to Do in Clarksville, Austin | Parks & Dining (78703)",
  description:
    "The best things to do in Clarksville, Austin (78703): Pease Park and the Butler Trail, West Lynn dining, the Wally Workman Gallery, and a walkable historic district.",
  path: "/things-to-do-in-clarksville",
  type: "article",
});

type Spot = { name: string; note: string };
type Category = { eyebrow: string; title: string; blurb: string; photo: PhotoMeta; spots: Spot[] };

const categories: Category[] = [
  {
    eyebrow: "Parks and the outdoors",
    title: "Green space at the doorstep",
    blurb:
      "Clarksville is wrapped in some of central Austin's best outdoor space, most of it reachable on foot.",
    photo: PHOTOS.park,
    spots: [
      { name: "Pease Park", note: "Austin's oldest city park edges the neighborhood and hosts the beloved annual Eeyore's Birthday celebration." },
      { name: "The Butler Hike-and-Bike Trail", note: "The Ann and Roy Butler Trail along Lady Bird Lake is a short walk south, perfect for a morning run or ride." },
      { name: "West Austin Neighborhood Park", note: "Clarksville's everyday backyard: a pool, courts, and playing fields in the heart of the area." },
      { name: "Mary Baylor Clarksville Park", note: "A neighborhood park on the site of the historic Clarksville School, tying green space to the area's story." },
    ],
  },
  {
    eyebrow: "Eat and drink",
    title: "The West Lynn corridor",
    blurb:
      "The dining strip at the heart of Clarksville punches far above a neighborhood its size, and most of it is walkable.",
    photo: PHOTOS.westLynn,
    spots: [
      { name: "Jeffrey's", note: "The special-occasion steakhouse that has defined the corridor for decades." },
      { name: "Josephine House", note: "Jeffrey's sister spot in a blue cottage, from morning coffee to evening wine." },
      { name: "Cipollina", note: "A casual West Lynn standby for wood-oven pizza, pasta, and a glass of wine." },
      { name: "Cafe Medici", note: "A local roaster and morning gathering spot on the corridor." },
      { name: "Clark's Oyster Bar", note: "A polished raw bar a short walk toward West Sixth Street." },
      { name: "Fresh Plus", note: "The small neighborhood grocery that lets Clarksville function on foot." },
    ],
  },
  {
    eyebrow: "Arts and history",
    title: "Culture and 150 years of story",
    blurb:
      "You can spend an afternoon walking through the neighborhood's art and its history without leaving the district.",
    photo: PHOTOS.church,
    spots: [
      { name: "Wally Workman Gallery", note: "A long-running contemporary art gallery housed in a historic Clarksville home." },
      { name: "Sweet Home Missionary Baptist Church", note: "The spiritual cornerstone of the community since 1871, on West 11th Street." },
      { name: "The Haskell House", note: "A surviving hall-and-parlor home and designated City of Austin historic landmark on Waterston Avenue." },
      { name: "The historic district on foot", note: "The restored cottages and bungalows are the attraction; walk the blocks and read the streetscape." },
    ],
  },
];

const FAQS = [
  {
    q: "What are the best things to do in Clarksville, Austin?",
    a: "In Clarksville (78703) you can walk or run the Butler Hike-and-Bike Trail along Lady Bird Lake, spend an afternoon at Pease Park or the West Austin Neighborhood Park, browse the Wally Workman Gallery, dine along the West Lynn corridor at spots like Jeffrey's, Cipollina, and Josephine House, and walk a 150-year-old historic district on foot.",
  },
  {
    q: "What parks are in or near Clarksville, Austin?",
    a: "Clarksville is bordered by Pease Park (Austin's oldest, home of the annual Eeyore's Birthday celebration), the Ann and Roy Butler Hike-and-Bike Trail along Lady Bird Lake, the West Austin Neighborhood Park (with a pool, courts, and fields), and Mary Baylor Clarksville Park on the site of the historic Clarksville School.",
  },
  {
    q: "Is Clarksville a good neighborhood for families and the outdoors?",
    a: "Yes. Between Pease Park, the lake trail, and the West Austin Neighborhood Park and its pool, Clarksville puts an unusual amount of green space and recreation within walking distance, alongside a walkable grocery and dining, which is part of why families value the neighborhood.",
  },
  {
    q: "What is the West Lynn dining corridor in Clarksville?",
    a: "West Lynn Street is Clarksville's walkable dining and coffee strip, anchored by Jeffrey's (steakhouse), Josephine House, Cipollina (wood-oven pizza), and Cafe Medici, with Clark's Oyster Bar a short walk toward West Sixth and Fresh Plus grocery for daily needs.",
  },
];

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "things-to-do-in-clarksville",
            title: "Things to Do in Clarksville, Austin",
            description: "The best things to do in Clarksville, Austin (78703).",
            date: "2026-11-05",
            updated: "2026-11-05",
            image: PHOTOS.westLynn.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.westLynn.src}
          alt={PHOTOS.westLynn.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">The neighborhood guide</p>
            <h1 className="font-display mt-5 text-[2.8rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Things to do in Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Parks, dining, art, and history, most of it within a walkable few blocks. A local guide
              to what makes an afternoon in Austin&rsquo;s oldest village worth it.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              For a neighborhood of its size, Clarksville offers a remarkable amount to do, and almost
              all of it is reachable on foot. You can start the morning on the lake trail, spend the
              afternoon in a park, browse a gallery, and end with dinner on West Lynn, without moving
              your car. Here is the local guide, by category.
            </p>
          </div>
        </Container>
      </section>

      {/* CATEGORIES */}
      {categories.map((cat, i) => (
        <section key={cat.title} className={i % 2 ? "bg-cream py-20" : "bg-paper py-20"}>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <Eyebrow>{cat.eyebrow}</Eyebrow>
                <h2 className="font-display mt-4 text-[2.1rem] leading-tight text-ink sm:text-[2.7rem]">
                  {cat.title}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-ink-soft">{cat.blurb}</p>
                <dl className="mt-8 space-y-5">
                  {cat.spots.map((s) => (
                    <Reveal key={s.name} className="border-t border-line pt-4">
                      <dt className="font-display text-xl text-ink">{s.name}</dt>
                      <dd className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">{s.note}</dd>
                    </Reveal>
                  ))}
                </dl>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] border border-line">
                  <Image
                    src={cat.photo.src}
                    alt={cat.photo.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="img-grade object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <ContactCta
        heading="Want to live where all of this is a walk away?"
        body="This is daily life in Clarksville, not a vacation. If you want a home in the middle of it, Luke Allen can help you find one, including homes that never reach the portals."
        intent="buy"
        cta="Talk with Luke about Clarksville"
      />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Things to do in Clarksville, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            Keep exploring:{" "}
            <Link href="/a-day-in-clarksville" className="font-semibold text-brass-deep underline">
              a day in Clarksville
            </Link>
            ,{" "}
            <Link href="/clarksville-restaurants" className="font-semibold text-brass-deep underline">
              dining on West Lynn
            </Link>
            , or the{" "}
            <Link href="/neighborhood" className="font-semibold text-brass-deep underline">
              full neighborhood guide
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
