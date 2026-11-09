import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Moving to Austin from New York | Clarksville & 78703",
  description:
    "Moving to Austin from New York and want to keep walkable neighborhood life? Clarksville (78703) offers it, no state or city income tax, more home, and a real main street.",
  path: "/moving-to-austin-from-new-york",
  type: "article",
});

// Honest, qualitative. The one hard tax claim (Texas has no state income tax,
// New York City adds a local income tax on top of the state's) is well
// established; no fabricated figures.
const ledger = [
  {
    topic: "Income tax",
    ny: "State income tax, plus a city income tax inside NYC, one of the heaviest total burdens in the country.",
    tx: "None. Texas has no personal state income tax, and no city income tax either.",
  },
  {
    topic: "What your money buys",
    ny: "A few hundred square feet, at a premium, often without outdoor space.",
    tx: "A house with a porch and a yard, or a walkable condo, for less.",
  },
  {
    topic: "Walkability",
    ny: "The thing you would miss most if you moved to the wrong place.",
    tx: "Clarksville keeps it: walk to coffee, dinner, a grocery, and the park.",
  },
  {
    topic: "The seasons",
    ny: "Four months of grey and salt-stained boots.",
    tx: "A long warm season, a green winter, and the trail open year round.",
  },
  {
    topic: "The commute",
    ny: "The subway crush, or gridlock on the bridges.",
    tx: "Minutes to downtown from Clarksville, most of it under live oaks.",
  },
];

const whyClarksville = [
  {
    h: "You do not have to give up walking",
    p: "Most of Austin asks you to trade the sidewalk for a car. Clarksville does not. It is one of the most walkable neighborhoods in west Austin, built around the West Lynn corridor, which is the single thing transplanting New Yorkers are most afraid to lose.",
  },
  {
    h: "A real main street",
    p: "West Lynn is Clarksville's version of a neighborhood avenue: coffee, a grocer, galleries, and some of Austin's best restaurants, all on foot. It is the texture of city life without the city's grind.",
  },
  {
    h: "Character, not a subdivision",
    p: "Clarksville is a founded-in-1871 historic district of cottages and restored homes, not beige repetition. If you loved the soul of a prewar block, this is the Austin neighborhood that answers it.",
  },
  {
    h: "Central, and close to downtown",
    p: "You did not leave one city to commute 40 minutes in another. Clarksville sits two miles from downtown, so work, the airport, and Lady Bird Lake stay close.",
  },
  {
    h: "The tax math is real",
    p: "Leaving New York's state and city income taxes behind is often the single biggest change to a high earner's finances. Texas trades that for higher property tax, but with no tax on income, most come out well ahead.",
  },
  {
    h: "Value that holds",
    p: "Historic protection and genuine scarcity keep Clarksville resilient, which matters when you are moving equity across the country into a new home.",
  },
];

const FAQS = [
  {
    q: "Why are New Yorkers moving to Austin?",
    a: "New Yorkers move to Austin for a dramatically lower tax burden (Texas has no state or city income tax), far more home and often outdoor space for the money, a strong technology job market, warmer weather, and a central, walkable lifestyle in the right neighborhood. Many who want to keep walkable, neighborhood-style living settle in close-in areas like Clarksville in 78703.",
  },
  {
    q: "What is the best Austin neighborhood for people moving from New York?",
    a: "For transplants who want to keep walking to coffee, dinner, and a grocery rather than driving everywhere, Clarksville and the broader Old West Austin area (78703) are the strongest fit. Clarksville is a historic neighborhood two miles from downtown, built around the walkable West Lynn corridor, with character homes and mature trees.",
  },
  {
    q: "Does Texas have a state or city income tax?",
    a: "No. Texas has no personal state income tax, and no local city income tax, which is a sharp contrast with New York, where residents pay state income tax and, inside New York City, an additional city income tax. Texas relies more on property tax instead, so the honest comparison is no income tax against a higher property tax rate. For most high earners leaving New York, the overall burden still drops substantially.",
  },
  {
    q: "Is Clarksville walkable like a New York neighborhood?",
    a: "By Austin standards, yes, it is among the most walkable neighborhoods in the city. From a Clarksville home you can walk to the West Lynn dining corridor, a neighborhood grocery, galleries, and Pease Park, and reach downtown and Lady Bird Lake in minutes. It will not feel like Manhattan density, but it keeps genuine, daily walkable life.",
  },
  {
    q: "Can I buy a home in Clarksville remotely from New York?",
    a: "Yes. The process is built for it: a planning call, video tours and off-market first looks, one focused in-person trip to see the real contenders, and a remote closing handled with a mobile notary. Many relocating buyers purchase before they have fully moved.",
  },
];

export default function MovingFromNewYorkPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "moving-to-austin-from-new-york",
            title: "Moving to Austin from New York | Clarksville & 78703",
            description:
              "A New Yorker's guide to relocating to Austin and landing in walkable Clarksville (78703).",
            date: "2026-11-05",
            updated: "2026-11-05",
            image: PHOTOS.westLynn.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden bg-ink">
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
            <p className="font-label text-brass">Relocating from New York</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Keep the sidewalk. Lose the tax bill.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              The fear in leaving New York is giving up walkable neighborhood life for a car and a
              cul-de-sac. Clarksville, in the heart of 78703, is the Austin neighborhood that lets you
              keep the first and drop the second.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Plenty of New Yorkers move to Austin for the math: no state or city income tax, far more
              home for the money, and a tech economy that rivals the coasts. The ones who are happiest
              a year later all did the same thing, they refused to give up walkable, neighborhood
              living, and they chose their address accordingly.
            </p>
            <p>
              Clarksville is where that choice usually lands. Founded in 1871 and listed on the
              National Register of Historic Places, it sits two miles west of downtown: a
              tree-canopied district of cottages and restored homes built around the West Lynn
              corridor, where coffee, dinner, a grocer, and a gallery are all on foot.
            </p>
          </div>
        </Container>
      </section>

      {/* THE TRADE (ledger) */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="dark">The trade you are making</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.9rem]">
              What you leave, what you keep
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[4px] border border-white/10">
            <div className="hidden grid-cols-[1fr_1fr] border-b border-white/10 bg-heritage-soft sm:grid">
              <div className="font-label px-6 py-3 text-[0.56rem] text-cream-soft/60">In New York</div>
              <div className="font-label border-l border-white/10 px-6 py-3 text-[0.56rem] text-brass">
                In Clarksville, 78703
              </div>
            </div>
            {ledger.map((row) => (
              <Reveal
                key={row.topic}
                className="grid gap-px border-b border-white/10 last:border-b-0 bg-white/5 sm:grid-cols-2"
              >
                <div className="bg-heritage p-6">
                  <p className="font-label text-[0.56rem] text-cream-soft/50">{row.topic}</p>
                  <p className="mt-2 leading-relaxed text-cream-soft/85">{row.ny}</p>
                </div>
                <div className="bg-heritage-soft p-6 sm:border-l sm:border-white/10">
                  <p className="font-label text-[0.56rem] text-brass">{row.topic}</p>
                  <p className="mt-2 leading-relaxed text-paper">{row.tx}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-mist">
            An honest note on taxes: Texas trades income tax for a higher property tax rate. With no
            tax on what you earn, most high earners leaving New York still come out well ahead, but run
            your own numbers. The{" "}
            <Link href="/clarksville-property-taxes" className="underline hover:text-brass">
              Clarksville property taxes
            </Link>{" "}
            guide has the detail.
          </p>
        </Container>
      </section>

      {/* WHY CLARKSVILLE */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why Clarksville, specifically</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              The neighborhood that keeps city life
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {whyClarksville.map((r) => (
              <Reveal key={r.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{r.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{r.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CAPTURE */}
      <section className="bg-heritage py-20 text-paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="dark">Planning your move from New York?</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.9rem]">
              Start with someone who knows the blocks
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
              Tell Luke where you are coming from, your timeline, and the life you want in Austin. He
              will send a straight read on Clarksville and 78703, including walkable homes you will not
              find on Zillow, and map the move from first call to keys.
            </p>
            <p className="mt-6 font-label text-[0.55rem] text-cream-soft/70">
              Luke Allen &middot; TREC #788149 &middot; Austin Marketing + Development Group
            </p>
          </div>
          <div className="rounded-[4px] border border-white/10 bg-paper p-6 sm:p-8">
            <LeadForm defaultIntent="buy" cta="Request a relocation consult" />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Moving from New York, answered
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
            Also useful:{" "}
            <Link href="/moving-to-austin-from-california" className="font-semibold text-brass-deep underline">
              moving from California
            </Link>
            ,{" "}
            <Link href="/is-clarksville-austin-safe" className="font-semibold text-brass-deep underline">
              is Clarksville safe
            </Link>
            , or{" "}
            <Link href="/why-clarksville" className="font-semibold text-brass-deep underline">
              why Clarksville
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
