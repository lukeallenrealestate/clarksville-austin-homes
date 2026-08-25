import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Why Clarksville? | The Case for Austin's Historic Heart",
  description:
    "Why Clarksville, Austin: a scarce, protected, walkable historic neighborhood minutes from downtown, with soul, durable value, and a way of living the rest of the city cannot replicate.",
  path: "/why-clarksville",
  type: "article",
});

const stats = [
  { v: "1871", l: "Founded, a freedmen's town" },
  { v: "~10", l: "Blocks in the historic core" },
  { v: "2.7", l: "Months of supply" },
  { v: "89%", l: "Sale-to-list ratio" },
];

export default function WhyClarksville() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: "why-clarksville",
          title: "Why Clarksville? The Case for Austin's Historic Heart",
          description: "Why Clarksville, Austin: scarce, protected, walkable, and full of soul.",
          date: "2026-08-20",
          updated: "2026-08-20",
          image: PHOTOS.canopy.src,
        })}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-ink">
        <Image src={PHOTOS.canopy.src} alt={PHOTOS.canopy.alt} fill priority sizes="100vw" className="img-grade object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
        <Container className="relative z-10 text-center">
          <div className="hero-rise mx-auto max-w-4xl">
            <p className="font-label text-brass">The case for the neighborhood</p>
            <h1 className="font-display mt-6 text-[3.2rem] font-medium leading-[0.98] text-paper sm:text-[5.5rem]">
              Why Clarksville
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream-soft sm:text-xl">
              Austin has many good neighborhoods. Clarksville is a rarer thing: a place you cannot
              replicate, protected, walkable, and full of soul, minutes from downtown and a world
              apart from it.
            </p>
          </div>
        </Container>
      </section>

      {/* MANIFESTO STATEMENT */}
      <section className="bg-paper py-28">
        <Container size="narrow" className="text-center">
          <span className="rule-ornament mx-auto max-w-xs text-brass">
            <span />
          </span>
          <p className="font-display mt-10 text-[2rem] leading-[1.25] text-ink sm:text-[2.7rem]">
            Anyone can build a house. No one can build a neighborhood that is 150 years old, ten
            blocks wide, and impossible to make more of. That is the whole case, and everything else
            follows from it.
          </p>
        </Container>
      </section>

      {/* CASE 1 - SCARCITY (heritage band, type-forward) */}
      <section className="bg-heritage py-24 text-paper">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="font-display font-num text-7xl text-brass sm:text-8xl">01</p>
            <p className="font-label mt-4 text-brass">Scarcity</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[2.4rem] leading-[1.05] sm:text-[3.2rem]">
              You cannot make more of it.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              The historic core is roughly ten blocks, the lots are small, and a National Register
              district has been protecting it since 1976. Most neighborhoods add supply when prices
              rise. Clarksville largely cannot. Everything desirable about it, the value, the calm,
              the character, rests on that single, permanent fact.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CASE 2 - WALKABILITY (full-bleed image with overlay) */}
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink">
        <Image src={PHOTOS.westLynn.src} alt={PHOTOS.westLynn.alt} fill sizes="100vw" className="img-grade object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <Container className="relative z-10 pb-20">
          <Reveal className="max-w-2xl">
            <p className="font-display font-num text-6xl text-brass sm:text-7xl">02</p>
            <p className="font-label mt-3 text-brass">Walkability</p>
            <h2 className="font-display mt-4 text-[2.4rem] leading-[1.05] text-paper sm:text-[3.2rem]">
              Leave the car at home.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Coffee, groceries, and world-class dinner on foot. The West Lynn corridor at the end of
              the block, West Sixth five minutes away, the lake trail within reach. This kind of
              genuine walkability is rare anywhere in Austin, and it is everyday life in Clarksville.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CASE 3 - SOUL (cream band) */}
      <section className="bg-cream py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="font-display font-num text-7xl text-brass-deep sm:text-8xl">03</p>
            <p className="font-label mt-4 text-brass-deep">Soul</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[2.4rem] leading-[1.05] text-ink sm:text-[3.2rem]">
              A neighborhood with a story.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Clarksville is not a marketing name on a new subdivision. It was founded in 1871 by a
              freedman, Charles Clark, and grew into one of the oldest freedmen&rsquo;s towns west of
              the Mississippi. You feel that history on every porch and corner. Read{" "}
              <Link href="/story-of-clarksville" className="text-brass-deep underline underline-offset-2">
                the full story
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* BY THE NUMBERS */}
      <section className="bg-ink py-20 text-paper">
        <Container>
          <Reveal>
            <p className="font-label text-center text-brass">By the numbers</p>
            <div className="mt-12 grid grid-cols-2 gap-y-12 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-display font-num text-[3rem] leading-none text-paper sm:text-[3.6rem]">
                    {s.v}
                  </div>
                  <div className="mx-auto mt-3 max-w-[9rem] text-sm text-cream-soft">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xs text-mist">
              Single-family market figures per the Keenan Group at Compass MLS polygon snapshot, June
              2026. Verify current data before relying on it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CASE 4 - VALUE (paper band) */}
      <section className="bg-paper py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="font-display font-num text-7xl text-brass-deep sm:text-8xl">04</p>
            <p className="font-label mt-4 text-brass-deep">Value</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[2.4rem] leading-[1.05] text-ink sm:text-[3.2rem]">
              Value that holds its ground.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Scarcity, historic protection, and durable demand are a powerful combination. Clarksville
              consistently trades well above the Austin median and has shown more resilience than the
              broader market. It is a place to live, and a place that tends to hold value while you do.
              See the dated figures on the{" "}
              <Link href="/clarksville-market-report" className="text-brass-deep underline underline-offset-2">
                market report
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CASE 5 - THE LIFE (full-bleed close) */}
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-ink text-center">
        <Image src={PHOTOS.streetscape.src} alt={PHOTOS.streetscape.alt} fill sizes="100vw" className="img-grade object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" />
        <Container size="narrow" className="relative z-10">
          <Reveal>
            <p className="font-display font-num text-6xl text-brass sm:text-7xl">05</p>
            <h2 className="font-display mt-4 text-[2.6rem] leading-[1.05] text-paper sm:text-[3.4rem]">
              And then there is the life between the houses.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              The canopy at golden hour. The neighbor on the porch. Dinner that is a walk, not a drive.
              The things you cannot put in a listing, and the real reason people never leave.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/living-in-clarksville" className="btn btn-brass">
                A day in Clarksville
              </Link>
              <Link href="/clarksville-homes-for-sale" className="btn btn-ghost-light">
                See homes for sale
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactCta
        heading="Make the case for yourself"
        body="The only way to really understand Clarksville is to stand in it. Reach out to Luke for a walk through the neighborhood and an honest conversation about calling it home."
        intent="general"
      />
    </>
  );
}
