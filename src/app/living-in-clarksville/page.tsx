import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS, type PhotoMeta } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Living in Clarksville, Austin | A Day in the Neighborhood",
  description:
    "What it feels like to live in Clarksville, Austin (78703): tree-canopied mornings, a walkable West Lynn, the trail, and dinner steps from your door. A day in the life.",
  path: "/living-in-clarksville",
  type: "article",
});

type Chapter = {
  time: string;
  kicker: string;
  title: string;
  body: string;
  photo: PhotoMeta;
};

const chapters: Chapter[] = [
  {
    time: "7:00",
    kicker: "Morning",
    title: "The neighborhood wakes slowly",
    body: "First light filters through a century of live oaks and pecans, and the streets are quiet except for a runner and the clink of a leash. You walk to coffee at Cafe Medici, nod to a neighbor on a deep front porch, and feel, three minutes from downtown, like you are somewhere much farther away.",
    photo: PHOTOS.canopy,
  },
  {
    time: "12:30",
    kicker: "Midday",
    title: "Home, in the middle of the city",
    body: "Errands here are a stroll, not a commute. Fresh Plus for a few things, the dry cleaner, a paperback from the shelf at a friend's. Clarksville was built at a human scale on small historic lots, and it still lives that way. The car stays in the driveway more days than not.",
    photo: PHOTOS.bungalow,
  },
  {
    time: "17:00",
    kicker: "Golden hour",
    title: "Green hours by the water",
    body: "Late afternoon pulls everyone outside. It is a short walk to the Ann and Roy Butler Hike-and-Bike Trail along Lady Bird Lake, or a wander into Pease Park under the canopy. The light goes amber, the heat softens, and the whole neighborhood seems to exhale.",
    photo: PHOTOS.park,
  },
  {
    time: "19:30",
    kicker: "Evening",
    title: "Dinner is a walk away",
    body: "This is the quiet luxury of Clarksville: world-class dinner without a valet. Jeffrey's for a special night, Josephine House on the porch, Cipollina for a weeknight table. You walk home along West Lynn with the windows glowing, and you are already there.",
    photo: PHOTOS.westLynn,
  },
];

const luxuries = [
  { n: "01", label: "Walkable", note: "Coffee, groceries, and dinner on foot; downtown in five minutes." },
  { n: "02", label: "Canopy", note: "Mature live oaks and pecans shading historic, human-scaled streets." },
  { n: "03", label: "Historic", note: "A National Register district since 1976, protected and enduring." },
  { n: "04", label: "Connected", note: "A real neighborhood fabric: porches, familiar faces, quiet blocks." },
];

export default function LivingInClarksville() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: "living-in-clarksville",
          title: "Living in Clarksville, Austin",
          description: "What it feels like to live in Clarksville, Austin (78703).",
          date: "2026-08-19",
          updated: "2026-08-19",
          image: PHOTOS.canopy.src,
        })}
      />

      {/* CINEMATIC HERO */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.canopy.src}
          alt={PHOTOS.canopy.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">Living in 78703</p>
            <h1 className="font-display mt-5 text-[3.2rem] font-medium leading-[0.98] text-paper sm:text-[5rem]">
              A day in Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Some neighborhoods you drive through. Clarksville you live in, on foot, under the trees,
              minutes from downtown and a world away from it. Here is how a day unfolds.
            </p>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <span className="font-label text-[0.55rem] text-paper/60">Scroll</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-24">
        <Container size="narrow" className="text-center">
          <span className="rule-ornament mx-auto max-w-xs text-brass">
            <span />
          </span>
          <p className="font-display mt-10 text-[1.8rem] leading-snug text-ink sm:text-[2.3rem]">
            The best measure of a neighborhood is not its listings. It is the shape of an ordinary
            Tuesday.
          </p>
        </Container>
      </section>

      {/* CHAPTERS */}
      {chapters.map((c, i) => {
        const imageFirst = i % 2 === 0;
        return (
          <section key={c.time} className={i % 2 === 0 ? "bg-cream" : "bg-paper"}>
            <div className="grid lg:grid-cols-2">
              <div
                className={`relative min-h-[62vh] lg:min-h-[86vh] ${imageFirst ? "" : "lg:order-2"}`}
              >
                <Image
                  src={c.photo.src}
                  alt={c.photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="img-grade object-cover"
                />
                <span className="absolute left-6 top-6 font-display font-num text-6xl text-paper/85 mix-blend-screen sm:text-7xl">
                  {c.time}
                </span>
              </div>
              <div className={`flex items-center ${imageFirst ? "" : "lg:order-1"}`}>
                <Reveal className="px-6 py-16 sm:px-14 lg:px-20 lg:py-24">
                  <p className="font-label text-brass-deep">{c.kicker}</p>
                  <h2 className="font-display mt-4 text-[2.2rem] leading-[1.08] text-ink sm:text-[2.9rem]">
                    {c.title}
                  </h2>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{c.body}</p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* QUIET LUXURIES */}
      <section className="bg-heritage py-24 text-paper">
        <Container>
          <div className="max-w-2xl">
            <p className="font-label text-brass">Why it stays with you</p>
            <h2 className="font-display mt-4 text-[2.3rem] leading-tight sm:text-[3rem]">
              The quiet luxuries of Clarksville
            </h2>
          </div>
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {luxuries.map((l) => (
              <Reveal key={l.n} className="flex gap-6 border-t border-white/15 pt-6">
                <span className="font-display font-num text-3xl text-brass">{l.n}</span>
                <div>
                  <h3 className="font-display text-2xl text-paper">{l.label}</h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-cream-soft">{l.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-paper py-28">
        <Container size="narrow" className="text-center">
          <blockquote className="font-display text-[2rem] italic leading-[1.3] text-heritage sm:text-[2.7rem]">
            &ldquo;You can leave the car at home, walk to dinner, and still be five minutes from
            downtown. That is Clarksville, and there is nowhere else in Austin quite like it.&rdquo;
          </blockquote>
          <p className="font-label mt-8 text-brass-deep">Luke Allen, Clarksville specialist</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/clarksville-homes-for-sale" className="btn btn-heritage">
              See Clarksville homes
            </Link>
            <Link href="/neighborhood" className="btn btn-outline">
              The full neighborhood guide
            </Link>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Come see it for yourself"
        body="The best way to understand Clarksville is to walk it. Reach out and Luke will show you the blocks, the buildings, and the life between them."
        intent="general"
      />
    </>
  );
}
