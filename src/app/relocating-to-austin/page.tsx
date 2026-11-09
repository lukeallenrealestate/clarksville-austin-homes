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
  title: "Relocating to Austin | A Neighborhood-First Guide (78703)",
  description:
    "Relocating to Austin? A neighborhood-first guide to the move: taxes, where to live, buying before you arrive, and why transplants who want walkable life choose Clarksville.",
  path: "/relocating-to-austin",
  type: "article",
});

const origins = [
  {
    h: "From California",
    p: "No state income tax, far more home for the money, and a neighborhood that keeps you walking instead of driving.",
    href: "/moving-to-austin-from-california",
    cta: "The California move",
  },
  {
    h: "From New York",
    p: "Lose the state and city income tax, keep walkable, neighborhood-style living on the West Lynn corridor.",
    href: "/moving-to-austin-from-new-york",
    cta: "The New York move",
  },
  {
    h: "For a medical career",
    p: "Physicians relocating to practice in Austin choose Clarksville for its short commute to the hospitals and the home it affords.",
    href: "/austin-neighborhoods-for-doctors",
    cta: "For physicians",
  },
];

const knowBefore = [
  {
    h: "The tax math is the headline",
    p: "Texas has no state income tax. It trades that for a higher property tax rate, so the honest comparison is no tax on earnings against more tax on what you own. For most relocating high earners the overall burden drops.",
    href: "/clarksville-property-taxes",
    label: "How property taxes work",
  },
  {
    h: "You can buy before you arrive",
    p: "A planning call, video tours and off-market first looks, one focused in-person trip, and a remote closing with a mobile notary. Many transplants buy before they have fully moved.",
    href: "/buying-a-historic-home-in-clarksville",
    label: "A buyer's due-diligence guide",
  },
  {
    h: "The neighborhood decides your happiness",
    p: "The single biggest predictor of whether you will love Austin is choosing the right neighborhood. If you want walkable, central, characterful life, that points to Clarksville and Old West Austin.",
    href: "/best-central-austin-neighborhoods",
    label: "Compare central Austin neighborhoods",
  },
  {
    h: "Do your own due diligence",
    p: "Check schools, commute, and safety for the specific blocks you are considering, and visit at different times of day before you commit from afar.",
    href: "/is-clarksville-austin-safe",
    label: "Is Clarksville safe?",
  },
];

const FAQS = [
  {
    q: "What should I know before relocating to Austin?",
    a: "The three things that matter most: taxes (Texas has no state income tax but higher property tax), the job and lifestyle fit, and above all the neighborhood you choose, which is the biggest predictor of whether you will be happy. Decide what you are optimizing for (walkability, schools, space, or budget) before you pick an address, and you can often buy before you fully move.",
  },
  {
    q: "Where should I live if I am moving to Austin?",
    a: "It depends on what you value. If you want a walkable, historic, central neighborhood two miles from downtown, Clarksville and the Old West Austin area (78703) are a strong fit. For top-rated schools and larger lots, West Lake Hills and the Eanes district. For a friendlier entry price, Hyde Park and Rosedale. Compare the central Austin neighborhoods to find yours.",
  },
  {
    q: "Does moving to Austin actually save on taxes?",
    a: "For many high earners relocating from a high-income-tax state like California or New York, yes. Texas levies no personal state income tax (and no city income tax), though it relies more on property tax. The net effect usually favors the mover, but you should run your own numbers against your income and the specific home.",
  },
  {
    q: "Can I buy a home in Austin before I move?",
    a: "Yes. A local agent can run video tours and surface off-market homes, compress your search into one focused in-person trip, and handle a remote closing with a mobile notary. Many relocating buyers purchase before they have fully relocated, which is often the smoother path in a low-inventory neighborhood.",
  },
];

export default function RelocatingToAustinPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "relocating-to-austin",
            title: "Relocating to Austin: A Neighborhood-First Guide",
            description: "A neighborhood-first guide to relocating to Austin.",
            date: "2026-11-05",
            updated: "2026-11-05",
            image: PHOTOS.canopy.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-ink">
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
            <p className="font-label text-brass">The move, done right</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Relocating to Austin
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Everyone talks about the taxes and the tech jobs. The thing that actually decides whether
              you love it is the neighborhood you choose. This is a neighborhood-first guide to the move.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Austin has been one of the country's top relocation destinations for years, and the
              reasons are real: no state income tax, a deep technology economy, warm weather, and more
              home for the money than the coasts. But the people who are happiest a year after the move
              almost always did one thing right. They chose their neighborhood with care, instead of
              defaulting to a subdivision far from everything.
            </p>
            <p>
              This guide is organized the way the decision actually works: where you are coming from,
              what to know before you go, and how to land in a neighborhood you will love.
            </p>
          </div>
        </Container>
      </section>

      {/* BY ORIGIN */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>By where you are coming from</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              The move, from your starting point
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-3">
            {origins.map((o) => (
              <Link key={o.h} href={o.href} className="group flex flex-col bg-paper p-7 transition-colors hover:bg-cream">
                <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-brass-deep">{o.h}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{o.p}</p>
                <span className="font-label mt-5 text-[0.56rem] text-brass-deep">{o.cta} &rarr;</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Coming from somewhere else, Seattle, Chicago, the Bay Area? The same principles apply. Tell
            Luke where you are moving from and he will tailor the read.
          </p>
        </Container>
      </section>

      {/* KNOW BEFORE */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What to know before you go</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Four things that shape the move
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {knowBefore.map((k) => (
              <Reveal key={k.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{k.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{k.p}</p>
                <Link href={k.href} className="font-label mt-3 inline-block text-[0.56rem] text-brass-deep underline">
                  {k.label} &rarr;
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHERE TO LAND */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container size="narrow">
          <Eyebrow tone="dark">Where to land</Eyebrow>
          <h2 className="font-display mt-4 text-[2.1rem] leading-tight sm:text-[2.7rem]">
            The neighborhood that keeps city life
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-cream-soft">
            <p>
              If your version of a good life includes walking to coffee and dinner, mature trees, and a
              real neighborhood two miles from downtown, the Austin answer keeps coming back to
              Clarksville and the Old West Austin area. It is historic, walkable, central, and scarce,
              the opposite of the far-flung subdivision most relocation searches steer you toward.
            </p>
            <p>
              It is the neighborhood I specialize in, and the reason this guide exists.{" "}
              <Link href="/why-clarksville" className="font-semibold text-brass underline">
                Why Clarksville
              </Link>{" "}
              makes the full case, and{" "}
              <Link href="/best-central-austin-neighborhoods" className="font-semibold text-brass underline">
                the central Austin neighborhood guide
              </Link>{" "}
              compares it honestly to every alternative.
            </p>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Planning a move to Austin?"
        body="Tell Luke where you are coming from, your timeline, and what you want your life here to feel like. He will give you a straight, neighborhood-first read, and can help you buy before you even arrive."
        intent="buy"
        cta="Start your relocation"
      />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Relocating to Austin, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
