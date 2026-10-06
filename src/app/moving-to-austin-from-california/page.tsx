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
  title: "Moving to Austin from California | Clarksville & 78703",
  description:
    "A Californian's guide to relocating to Austin and landing in Clarksville (78703): no state income tax, what your equity buys, buying a home remotely, and why transplants choose this historic neighborhood.",
  path: "/moving-to-austin-from-california",
  type: "article",
});

// Honest, qualitative trade. No fabricated figures: the only hard claim is the
// well-established one that Texas levies no personal state income tax.
const ledger = [
  {
    topic: "State income tax",
    ca: "Among the highest top rates in the country on everything you earn.",
    tx: "None. Texas has no personal state income tax, full stop.",
  },
  {
    topic: "What your equity buys",
    ca: "A modest footprint on a tight lot, often at a coastal premium.",
    tx: "A restored historic home or architect-built infill, with room to breathe.",
  },
  {
    topic: "The commute",
    ca: "Hours a week surrendered to the 405 or the 101.",
    tx: "Minutes to downtown from Clarksville, most of it under live oaks.",
  },
  {
    topic: "Space and nature",
    ca: "You pay dearly for a yard and a shade tree.",
    tx: "A mature oak canopy and a real front porch come standard here.",
  },
  {
    topic: "The pace",
    ca: "Always on, always crowded, always a reservation away.",
    tx: "A walkable village ten minutes from a global tech capital.",
  },
];

const whyClarksville = [
  {
    h: "Not the suburbs you will be shown",
    p: "Most relocation searches funnel Californians into far-out master-planned subdivisions. Clarksville is the opposite: a founded-in-1871 neighborhood two miles from downtown, with history, trees, and walkability you cannot build new.",
  },
  {
    h: "Central, not a 45-minute drive",
    p: "You did not leave California traffic to find it again in Austin. Clarksville sits just west of downtown, so work, the airport, dining, and Lady Bird Lake stay close.",
  },
  {
    h: "The lifestyle you actually moved for",
    p: "Coffee and dinner on West Lynn, trails at Pease Park, a quiet porch under the canopy. The walkable, unhurried life that is hard to find at a California price.",
  },
  {
    h: "Homes with character",
    p: "Restored 1900s cottages, hill-country modern infill, and boutique condominiums, not beige repetition. Architecture with a point of view, which Californians moving here tend to want.",
  },
  {
    h: "Schools and family footing",
    p: "Clarksville feeds top-rated Mathews Elementary and a strong Austin ISD path, with respected private options like St. Stephen's nearby.",
  },
  {
    h: "Value that holds",
    p: "Historic protection and genuine scarcity keep Clarksville resilient. For equity you are moving across state lines, that durability matters.",
  },
];

const priceLadder = [
  {
    href: "/clarksville-condos-for-sale",
    tier: "From the high $300s",
    t: "Boutique condominiums",
    b: "Lock-and-leave ownership in 78703 at a price that still surprises Californians. A foothold in the neighborhood.",
  },
  {
    href: "/clarksville-homes-for-sale",
    tier: "The middle market",
    t: "Historic homes and cottages",
    b: "Restored bungalows and character homes on canopied streets, the heart of what Clarksville is.",
  },
  {
    href: "/clarksville-luxury-homes",
    tier: "Luxury and estates",
    t: "Architect-led and estate homes",
    b: "Where a California coastal budget goes remarkably far, into real square footage, design, and land.",
  },
];

const steps = [
  {
    n: "01",
    h: "A call before the flight",
    p: "We talk timeline, budget, must-haves, and how Clarksville fits against the rest of 78703. You arrive knowing the map, not guessing at it.",
  },
  {
    n: "02",
    h: "Video tours and off-market first looks",
    p: "I walk homes for you on video, including quiet off-market opportunities that never reach Zillow, so distance is not a disadvantage.",
  },
  {
    n: "03",
    h: "One focused trip",
    p: "We compress your in-person visit into a tight, high-signal tour of the real contenders, so a single trip is enough to decide with confidence.",
  },
  {
    n: "04",
    h: "A remote-ready close",
    p: "Texas closings are routinely handled remotely with a mobile notary. You can buy your Clarksville home without living here yet.",
  },
];

const FAQS = [
  {
    q: "Why are so many Californians moving to Austin?",
    a: "Californians move to Austin for a lower overall tax burden (Texas has no state income tax), more home for the money, a strong job market led by technology, and a central, walkable lifestyle. Many who want history and walkability rather than far-out subdivisions settle in close-in neighborhoods like Clarksville in 78703.",
  },
  {
    q: "What is the best Austin neighborhood for people moving from California?",
    a: "For transplants who want to stay central, walkable, and surrounded by character rather than new-build sameness, Clarksville and the broader Old West Austin area (78703) are a natural fit. Clarksville is a historic neighborhood founded in 1871, minutes from downtown, with a mature tree canopy, the West Lynn dining corridor, and strong schools.",
  },
  {
    q: "Does Texas have a state income tax?",
    a: "No. Texas levies no personal state income tax. Texas does rely more on property tax than California does, so the honest comparison is no tax on your earnings against a higher property tax rate. For most high-earning households relocating from California, the overall burden still comes out lower, but you should run your own numbers.",
  },
  {
    q: "How does the cost of a Clarksville home compare to California?",
    a: "It depends on where in California you are leaving, but relocating buyers consistently find their equity goes further in Clarksville. Ownership in 78703 starts in the high $300s for a boutique condominium and rises to multimillion-dollar estates, with restored historic homes and architect-led infill in between.",
  },
  {
    q: "Can I buy a home in Clarksville remotely from California?",
    a: "Yes. The process is built for it: a planning call, video tours and off-market first looks, one focused in-person trip to see the real contenders, and a remote closing handled with a mobile notary. Many relocating buyers purchase before they have fully moved.",
  },
];

export default function MovingFromCaliforniaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "moving-to-austin-from-california",
            title: "Moving to Austin from California | Clarksville & 78703",
            description:
              "A Californian's guide to relocating to Austin and landing in Clarksville (78703).",
            date: "2026-10-05",
            updated: "2026-10-05",
            image: PHOTOS.canopy.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden bg-ink">
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
            <p className="font-label text-brass">Relocating from California</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              You did not leave California for a subdivision
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              If you are trading the coast for Austin, trade up to a real neighborhood. Clarksville,
              in the heart of 78703, is history, trees, and walkability two miles from downtown, at a
              price that still makes Californians look twice.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              The move from California to Austin is one of the most well-worn paths in the country,
              and most of it ends in a new-build subdivision twenty-five miles from anything. That is
              not the trade most people picture when they leave the coast. They picture more life, not
              more driving.
            </p>
            <p>
              Clarksville is the version of Austin that rewards the move. Founded in 1871 and listed on
              the National Register of Historic Places, it sits just west of downtown: a tree-canopied,
              walkable neighborhood of restored cottages and architect-led homes, with the West Lynn
              dining corridor at one edge and Lady Bird Lake at the other. It is where Californians who
              did their homework tend to land.
            </p>
          </div>
        </Container>
      </section>

      {/* THE TRADE (signature ledger) */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="dark">The trade you are actually making</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.9rem]">
              What you leave, what you gain
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[4px] border border-white/10">
            <div className="hidden grid-cols-[1fr_1fr] border-b border-white/10 bg-heritage-soft sm:grid">
              <div className="font-label px-6 py-3 text-[0.56rem] text-cream-soft/60">In California</div>
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
                  <p className="mt-2 leading-relaxed text-cream-soft/85">{row.ca}</p>
                </div>
                <div className="bg-heritage-soft p-6 sm:border-l sm:border-white/10">
                  <p className="font-label text-[0.56rem] text-brass">{row.topic}</p>
                  <p className="mt-2 leading-relaxed text-paper">{row.tx}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-mist">
            An honest note on taxes: Texas trades income tax for a higher property tax rate than
            California. With no tax on what you earn, plus a homestead exemption on your primary
            residence, most high-earning households relocating from California still come out ahead,
            but you should run your own numbers before you move. See the full breakdown in the{" "}
            <Link href="/clarksville-property-taxes" className="underline hover:text-brass">
              Clarksville property taxes
            </Link>{" "}
            guide.
          </p>
        </Container>
      </section>

      {/* WHY CLARKSVILLE SPECIFICALLY */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why Clarksville, specifically</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Central Austin, not the far edge of it
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

      {/* WHAT YOUR EQUITY BUYS */}
      <section className="relative isolate overflow-hidden border-y border-line bg-ink py-20 text-paper">
        <Image
          src={PHOTOS.newBuild.src}
          alt={PHOTOS.newBuild.alt}
          fill
          sizes="100vw"
          className="img-grade object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Eyebrow tone="dark">What your California equity buys</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.8rem]">
              The same money, a different life
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-cream-soft">
              Ownership in Clarksville spans a real range, from a boutique condominium to an estate.
              Here is where your equity can land.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {priceLadder.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col rounded-[4px] border border-white/10 bg-paper/5 p-6 transition-colors hover:border-brass/50 hover:bg-paper/10"
              >
                <span className="font-label text-[0.56rem] text-brass">{p.tier}</span>
                <span className="font-display mt-2 text-2xl text-paper">{p.t}</span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-cream-soft">{p.b}</span>
                <span className="font-label mt-5 text-[0.56rem] text-brass">View homes &rarr;</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs text-mist">
            Prices move with the market. See the current picture in the{" "}
            <Link href="/clarksville-market-report" className="underline hover:text-brass">
              Clarksville market report
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* BUYING FROM 1,500 MILES AWAY */}
      <section className="bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Buying from 1,500 miles away</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Distance is not a disadvantage
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              You should not have to fly in blind or make an offer sight unseen. The process is built
              so a Californian can buy the right Clarksville home with one well-planned trip.
            </p>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="bg-paper p-7">
                <div className="font-display font-num text-3xl text-brass/70">{s.n}</div>
                <h3 className="font-display mt-3 text-xl text-ink">{s.h}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.p}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Many of the best homes here sell quietly.{" "}
            <Link href="/off-market-clarksville-homes" className="font-semibold text-brass-deep underline">
              Off-market Clarksville homes
            </Link>{" "}
            are a real advantage when you are buying from out of state.
          </p>
        </Container>
      </section>

      {/* RELOCATION CAPTURE */}
      <section className="bg-heritage py-20 text-paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="dark">Planning your move from California?</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.9rem]">
              Start with someone who lives it
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
              Tell Luke where you are coming from, your timeline, and what you want your life in Austin
              to feel like. He will send a straight read on Clarksville and 78703, including homes you
              will not find on Zillow, and map out the move from first call to keys.
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
      <section className="bg-paper py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Moving from California, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 text-sm leading-relaxed text-ink-soft">
            Keep reading:{" "}
            <Link href="/why-clarksville" className="font-semibold text-brass-deep underline">
              why Clarksville
            </Link>
            ,{" "}
            <Link href="/neighborhood" className="font-semibold text-brass-deep underline">
              the neighborhood guide
            </Link>
            ,{" "}
            <Link href="/clarksville-schools" className="font-semibold text-brass-deep underline">
              schools
            </Link>
            , or, if you are a physician,{" "}
            <Link href="/austin-neighborhoods-for-doctors" className="font-semibold text-brass-deep underline">
              Clarksville for doctors
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
