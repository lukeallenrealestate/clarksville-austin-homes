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
  title: "Best Austin Neighborhoods for Doctors | Clarksville & 78703",
  description:
    "Where do doctors live in Austin? Clarksville (78703) puts physicians minutes from Dell Seton at UT and the central medical district, with luxury homes, walkability, and top schools.",
  path: "/austin-neighborhoods-for-doctors",
  type: "article",
});

const hospitals = [
  {
    name: "Dell Seton Medical Center at UT",
    loc: "1500 Red River Street, downtown",
    time: "Under 10 min",
    note: "The Dell Medical School teaching hospital and Level I trauma center.",
  },
  {
    name: "Ascension Seton Medical Center Austin",
    loc: "West 38th Street, central medical district",
    time: "~10 min",
    note: "Full-service hospital with a Level I comprehensive stroke center.",
  },
  {
    name: "St. David's Medical Center",
    loc: "East 32nd Street, central Austin",
    time: "~12 min",
    note: "A major central Austin hospital campus.",
  },
  {
    name: "Dell Children's Medical Center",
    loc: "Mueller",
    time: "~15 to 20 min",
    note: "The region's pediatric hospital and Level I pediatric trauma center.",
  },
];

const reasons = [
  { h: "The commute that gives you your life back", p: "When you are on call or facing a 6 a.m. rounds start, minutes matter. Clarksville sits between downtown's Dell Seton and the 38th Street medical district, a short, predictable drive to either." },
  { h: "Lock-and-leave for the on-call life", p: "Boutique condominiums like The Belvedere and Westline let you secure the home and go, no yard, no fuss, ideal for demanding schedules and frequent travel." },
  { h: "A home that matches the move", p: "Restored historic estates and architect-led modern infill, at a level that reflects a physician's income and taste, without moving to the suburbs to get it." },
  { h: "Somewhere to decompress", p: "A tree-canopied, walkable neighborhood where you can walk to dinner and leave the hospital behind. The West Lynn corridor, Lady Bird Lake, and Pease Park are all at the door." },
  { h: "Top schools for the family", p: "Clarksville feeds top-ranked Mathews Elementary and a strong Austin ISD pattern, with St. Stephen's and other private options nearby." },
  { h: "Value that holds", p: "Scarcity and historic protection keep Clarksville values resilient, a sound place to put equity while a demanding career keeps you busy." },
];

const FAQS = [
  {
    q: "Where do doctors live in Austin?",
    a: "Many Austin physicians choose the historic central neighborhoods close to the hospitals, especially Clarksville, Old Enfield, Bryker Woods, and Pemberton Heights in 78703. These offer short, predictable commutes to Dell Seton at UT downtown and the West 38th Street medical district, along with luxury homes and walkability.",
  },
  {
    q: "What are the best Austin neighborhoods for physicians relocating to Austin?",
    a: "For proximity to the major hospitals plus the housing and lifestyle physicians want, Clarksville and the surrounding Old West Austin area stand out. Clarksville is minutes from Dell Seton at UT and the central medical district, walkable, historic, and full of luxury and lock-and-leave options. Bryker Woods, adjacent to the 38th Street medical district, is another strong choice.",
  },
  {
    q: "How close is Clarksville to Austin's hospitals?",
    a: "Clarksville sits just west of downtown and is roughly a ten-minute drive to Dell Seton Medical Center at UT (1500 Red River Street) and to Ascension Seton Medical Center Austin on West 38th Street, with St. David's and Dell Children's a bit farther. Drive times vary with traffic.",
  },
  {
    q: "Is Clarksville a good neighborhood for a doctor who is on call?",
    a: "Yes. Its short, predictable proximity to downtown and the medical district, plus lock-and-leave condominium options, make Clarksville well suited to the on-call and demanding schedules physicians keep, while still offering a real neighborhood to come home to.",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "austin-neighborhoods-for-doctors",
            title: "Best Austin Neighborhoods for Doctors | Clarksville & 78703",
            description: "Where do doctors live in Austin? Clarksville puts physicians minutes from the hospitals.",
            date: "2026-08-26",
            updated: "2026-08-26",
            image: PHOTOS.streetscape.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[84vh] items-end overflow-hidden bg-ink">
        <Image src={PHOTOS.streetscape.src} alt={PHOTOS.streetscape.alt} fill priority sizes="100vw" className="img-grade object-cover object-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">For physicians relocating to Austin</p>
            <h1 className="font-display mt-5 text-[2.8rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Where Austin&rsquo;s doctors choose to live
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              A short commute to the hospital, a home worthy of the move, and a life outside of
              medicine. Clarksville is one of the few Austin neighborhoods that delivers all three.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              When you are moving your career, and your family, to a new city, the map matters more
              than the brochure. You need to be close to the hospital, in a home that reflects years
              of training, in a neighborhood you actually want to come home to. In Austin, that
              intersection keeps pointing to the same place.
            </p>
            <p>
              Clarksville sits just west of downtown, between the Dell Seton teaching hospital at UT
              and the West 38th Street medical district, walkable, historic, and quietly luxurious.
              It is why so many of Austin&rsquo;s physicians and their families settle here.
            </p>
          </div>
        </Container>
      </section>

      {/* COMMUTE CARDS */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="dark">Minutes from the medical</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.8rem]">
              Your commute, from Clarksville
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {hospitals.map((h) => (
              <Reveal key={h.name} className="flex items-start gap-6 rounded-[3px] border border-white/10 bg-heritage-soft p-6">
                <div className="shrink-0 text-right">
                  <div className="font-display font-num text-[1.7rem] leading-none text-brass">{h.time}</div>
                  <div className="font-label mt-1.5 text-[0.5rem] text-cream-soft/70">drive</div>
                </div>
                <div className="border-l border-white/15 pl-6">
                  <h3 className="font-display text-xl text-paper">{h.name}</h3>
                  <p className="font-label mt-1 text-[0.55rem] text-brass">{h.loc}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream-soft">{h.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-mist">
            Approximate drive times; actual times vary with traffic and time of day.
          </p>
        </Container>
      </section>

      {/* WHY CLARKSVILLE FOR DOCTORS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why physicians choose it</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              The neighborhood fits the life
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reasons.map((r) => (
              <Reveal key={r.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{r.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{r.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* THE RIGHT HOMES */}
      <section className="border-t border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The right home for the life</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.7rem]">
              Match the home to the schedule
            </h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/clarksville-luxury-homes", t: "Luxury homes", b: "Estates and architect-led infill worthy of the move." },
              { href: "/clarksville-lock-and-leave", t: "Lock-and-leave", b: "Low-maintenance condos for the on-call life." },
              { href: "/clarksville-condos-for-sale", t: "Condos for sale", b: "Boutique, walkable, secure." },
              { href: "/clarksville-homes-for-sale", t: "Family homes", b: "Historic homes near top schools." },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="group flex flex-col bg-paper p-6 transition-colors hover:bg-cream">
                <span className="font-display text-xl text-ink transition-colors group-hover:text-brass-deep">{c.t}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{c.b}</span>
                <span className="font-label mt-4 text-[0.56rem] text-brass-deep">View &rarr;</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* RELOCATION CAPTURE */}
      <section className="bg-heritage py-20 text-paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="dark">Relocating to practice in Austin?</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.9rem]">
              Let Luke do the finding
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
              Your time is scarce and the good homes here sell fast, often off-market. Tell Luke your
              hospital, timeline, and what you want in a home, and he will bring you the right ones,
              including homes you will not find on Zillow.
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
            Doctors relocating to Austin, answered
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
