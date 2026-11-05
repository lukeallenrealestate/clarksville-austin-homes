import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Is Clarksville, Austin Safe? | Neighborhood Livability (78703)",
  description:
    "Is Clarksville, Austin (78703) safe? An honest look at livability in this historic central neighborhood, what residents value, and how to check the data for yourself.",
  path: "/is-clarksville-austin-safe",
  type: "article",
});

const feelsSafe = [
  {
    h: "A real neighborhood, not a thoroughfare",
    p: "Clarksville is a small, residential historic district of owner-occupied homes, not a cut-through. Low turnover and long-tenured neighbors mean people know their streets and each other, the classic eyes-on-the-street effect.",
  },
  {
    h: "Walkable and active",
    p: "Because daily life happens on foot, West Lynn dining, Fresh Plus, Pease Park, the trail, the sidewalks stay busy and lived-in through the day and evening, which tends to make a place feel safer than a car-only pocket.",
  },
  {
    h: "An organized community",
    p: "The neighborhood has an active community association and a strong preservation ethic. Engaged neighbors who show up for their blocks are one of the better informal safety signals a buyer can look for.",
  },
  {
    h: "Central, but residential",
    p: "Clarksville sits minutes from downtown yet stays quiet and tree-lined. You get central-city convenience with a settled, residential feel rather than nightlife-district intensity.",
  },
];

const FAQS = [
  {
    q: "Is Clarksville a safe neighborhood in Austin?",
    a: "Clarksville is a quiet, established, owner-occupied historic neighborhood just west of downtown Austin (78703) that residents generally describe as safe, walkable, and tight-knit. As with any close-in urban neighborhood, normal city awareness applies. The honest way to judge any specific block is to review current, official crime data and to visit at different times of day before you buy.",
  },
  {
    q: "Is Clarksville, Austin a good place to live?",
    a: "Many buyers consider it one of central Austin's most desirable places to live: it is walkable to the West Lynn dining corridor and a neighborhood grocery, minutes from downtown and Lady Bird Lake, shaded by a mature tree canopy, and anchored by a 150-year history and an active community association. Its small size and historic protection keep it quiet and residential.",
  },
  {
    q: "How can I check crime data for Clarksville?",
    a: "Use primary sources rather than marketing claims. The Austin Police Department publishes a public crime map and incident data for any Austin address, and the City of Austin open-data portal hosts the underlying datasets. Review recent activity for the specific blocks you are considering, and ask a local agent what they know about a given street.",
  },
  {
    q: "Is it safe to walk in Clarksville at night?",
    a: "Clarksville is one of the more walkable neighborhoods in west Austin, and the West Lynn corridor and surrounding streets stay active in the evening. As anywhere in a central city, use ordinary awareness. The best way to get a feel is to walk the specific blocks you are considering in the evening before making a decision.",
  },
];

export default function IsClarksvilleSafePage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "is-clarksville-austin-safe",
            title: "Is Clarksville, Austin Safe? A Livability Guide",
            description:
              "An honest look at safety and livability in Clarksville, Austin (78703).",
            date: "2026-11-05",
            updated: "2026-11-05",
            image: PHOTOS.canopy.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.canopy.src}
          alt={PHOTOS.canopy.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">Neighborhood livability</p>
            <h1 className="font-display mt-5 text-[2.8rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Is Clarksville, Austin safe?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              An honest answer, without the marketing spin: what makes this historic neighborhood feel
              the way it does, and how to check the facts for yourself before you buy.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO / THE HONEST ANSWER */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Clarksville is a quiet, established historic neighborhood just west of downtown Austin,
              in 78703. It is small, residential, and overwhelmingly owner-occupied, and residents
              generally describe it as safe, walkable, and neighborly. As with any neighborhood this
              close to a city core, ordinary urban awareness applies, and the responsible answer for
              any specific street is the same: look at current, official data and walk the blocks
              yourself.
            </p>
            <p>
              What follows is not a safety rating, no honest agent can promise one, but a clear look at
              the things that shape how a place feels day to day, and exactly where to verify the
              numbers.
            </p>
          </div>
        </Container>
      </section>

      {/* WHAT SHAPES THE FEEL */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What shapes the feel</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Why Clarksville feels settled
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {feelsSafe.map((f) => (
              <Reveal key={f.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{f.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{f.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CHECK IT YOURSELF */}
      <section className="bg-heritage py-20 text-paper">
        <Container size="narrow">
          <Eyebrow tone="dark">Do your own homework</Eyebrow>
          <h2 className="font-display mt-4 text-[2.1rem] leading-tight sm:text-[2.6rem]">
            How to check the data for yourself
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-cream-soft">
            <p>
              Trust primary sources over any claim on a real estate site, including this one. The{" "}
              <a
                href="https://communitycrimemap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brass underline"
              >
                public crime map
              </a>{" "}
              and the{" "}
              <a
                href="https://data.austintexas.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brass underline"
              >
                City of Austin open-data portal
              </a>{" "}
              let you review recent, address-level incident data from the Austin Police Department.
              Pull the specific blocks you are weighing.
            </p>
            <p>
              Then do the thing no dataset can replace: walk those blocks, in the morning and again
              after dark. Notice the lighting, the foot traffic, how lived-in the street feels. That
              hour tells you more than any single number.
            </p>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Want a straight read on a specific block?"
        body="Luke works Clarksville street by street. Tell him the homes or blocks you are considering, and he will give you an honest, local read, and point you to the data to confirm it."
        intent="buy"
        cta="Ask Luke about a specific street"
      />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Clarksville safety and livability, answered
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
            Keep reading:{" "}
            <Link href="/living-in-clarksville" className="font-semibold text-brass-deep underline">
              living in Clarksville
            </Link>
            ,{" "}
            <Link href="/a-day-in-clarksville" className="font-semibold text-brass-deep underline">
              a day in the neighborhood
            </Link>
            , or the{" "}
            <Link href="/neighborhood" className="font-semibold text-brass-deep underline">
              full neighborhood guide
            </Link>
            .
          </p>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            This page is general information and does not assess the safety of any specific property.
            Crime and safety conditions change; rely on current data from the Austin Police Department
            and your own visits when evaluating a home.
          </p>
        </Container>
      </section>
    </>
  );
}
