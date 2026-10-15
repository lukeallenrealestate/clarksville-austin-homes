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
  title: "Buying a Historic Home in Clarksville | A Buyer's Due-Diligence Guide",
  description:
    "How to buy an older or historic home in Clarksville, Austin (78703) with eyes open: foundations on Central Texas soils, aging systems, inspections, insurance, historic-status checks, and building the right team. General guidance, not engineering or legal advice.",
  path: "/buying-a-historic-home-in-clarksville",
  type: "article",
});

const checklist = [
  {
    n: "01",
    h: "Foundation and Central Texas soils",
    p: "The expansive clay soils under Austin swell and shrink with the seasons, and older homes have ridden decades of that movement. Some settling is normal and cosmetic; some signals real structural work. On an older Clarksville home, a structural engineer's opinion, not just a general inspection, is money well spent before you remove the option period.",
  },
  {
    n: "02",
    h: "The systems behind the walls",
    p: "Wiring, plumbing, and HVAC are where the age of a home shows up in your budget. Expect to evaluate the electrical panel and any original wiring, the supply and sewer lines, and whether heating and cooling were added gracefully or jammed in. None of this is a dealbreaker; all of it should be known before you own it.",
  },
  {
    n: "03",
    h: "Roof, windows, and the envelope",
    p: "Original windows are part of the character and often worth preserving, but the roof, flashing, and weatherproofing are what keep a century-old home dry. Understand their condition and remaining life, and what a sympathetic repair or replacement would actually cost.",
  },
  {
    n: "04",
    h: "Additions and permits",
    p: "Many older homes have grown over the years. Unpermitted additions or garage conversions can complicate insurance, financing, and resale. Ask for permit history and confirm that what exists was built and recorded properly.",
  },
  {
    n: "05",
    h: "Trees, drainage, and grading",
    p: "Clarksville's mature live oaks are an asset and a responsibility. Protected trees affect what you can build and where, and how water moves across the lot affects the foundation you just inspected. Look down and around, not just at the house.",
  },
  {
    n: "06",
    h: "Era materials",
    p: "Homes from certain decades can contain lead paint or asbestos-era materials. They are manageable and common, but they belong in your inspection scope and your renovation plan rather than as a surprise mid-project.",
  },
  {
    n: "07",
    h: "Insurance and replacement cost",
    p: "Insuring an older home takes more care: replacement cost for custom or historic features, the age of the roof and systems, and any wiring or plumbing an insurer will flag. Get a real quote during your option period, not after closing.",
  },
];

const FAQS = [
  {
    q: "Are older homes in Clarksville a good buy?",
    a: "They can be excellent. Single-family homes on small historic lots are the scarcest asset in Clarksville and carry durable land value. The key is buying with eyes open: an older home needs a more thorough inspection (ideally including a structural engineer), a clear read on its systems and roof, a careful insurance quote, and a check of its historic designation status before you commit.",
  },
  {
    q: "Do homes in Clarksville have foundation problems?",
    a: "Central Texas expansive clay soils cause foundation movement across the region, and older homes have experienced decades of it. Some movement is cosmetic and some is structural, so on an older Clarksville home it is worth having a licensed structural engineer evaluate the foundation, not only a general home inspector, before your option period ends.",
  },
  {
    q: "Can I remodel or add on to a historic home in Clarksville?",
    a: "Often yes, but it depends on the specific address. A home with an individual City of Austin local historic landmark designation requires Historic Landmark Commission review for exterior changes and demolition, while a home with only National Register district status faces fewer binding restrictions. Interior work is typically less restricted. Verify the exact designation and any overlays with the City before planning a renovation.",
  },
  {
    q: "Is Clarksville a historic district with building restrictions?",
    a: "Clarksville was listed on the National Register of Historic Places in 1976 and sits within the Old West Austin Historic District. National Register status is largely honorific. Binding restrictions apply to individual properties that carry a City of Austin local historic landmark designation, so the rules turn on the specific address. Always run a designation check.",
  },
  {
    q: "What should I inspect when buying an old home in Austin?",
    a: "Beyond a standard inspection, prioritize the foundation (ideally a structural engineer given the clay soils), electrical and plumbing, the roof and envelope, permit history for any additions, tree and drainage conditions, possible lead or asbestos-era materials, and a real insurance quote. The goal is to know the home completely before your option period ends.",
  },
];

export default function BuyingHistoricHomePage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "buying-a-historic-home-in-clarksville",
            title: "Buying a Historic Home in Clarksville | A Buyer's Due-Diligence Guide",
            description:
              "How to buy an older or historic home in Clarksville, Austin (78703) with eyes open.",
            date: "2026-10-15",
            updated: "2026-10-15",
            image: PHOTOS.bungalow.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.bungalow.src}
          alt={PHOTOS.bungalow.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">For the buyer who wants the real thing</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Buying a historic home in Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              A hundred-year-old cottage is the reason many buyers want Clarksville in the first place.
              It is also a different kind of purchase. Here is how to buy one with your eyes open, and
              love it for decades.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              The homes that give Clarksville its soul were built long before the people buying them
              now were born. That is the appeal: craftsmanship, proportion, and a place in a story that
              started in 1871. It is also why buying here rewards a little more diligence than a
              five-year-old house in the suburbs.
            </p>
            <p>
              None of what follows should scare you off. A well-kept historic home can be a wonderful,
              resilient asset. The point is simply to know exactly what you are buying before the option
              period ends, so the only surprises after closing are good ones.
            </p>
          </div>
        </Container>
      </section>

      {/* DUE-DILIGENCE CHECKLIST */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The due-diligence checklist</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Seven things to know before you remove the option period
            </h2>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {checklist.map((c) => (
              <Reveal key={c.n} className="grid gap-5 py-8 sm:grid-cols-[4rem_1fr] sm:gap-10">
                <div className="font-display font-num text-4xl leading-none text-brass/60 sm:text-5xl">
                  {c.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink">{c.h}</h3>
                  <p className="mt-2.5 max-w-2xl leading-relaxed text-ink-soft">{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* HISTORIC STATUS */}
      <section className="bg-heritage py-20 text-paper">
        <Container size="narrow">
          <Eyebrow tone="dark">Check this on every address</Eyebrow>
          <h2 className="font-display mt-4 text-[2.1rem] leading-tight sm:text-[2.6rem]">
            Historic status is not one thing
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-cream-soft">
            <p>
              Clarksville sits in a National Register district, which is largely honorific. That is
              very different from an individual City of Austin local historic landmark designation,
              which carries binding review of exterior changes and demolition. Whether you can add on,
              or even what you can change out front, can turn entirely on the specific address.
            </p>
            <p>
              Never assume. Run a designation check and confirm any overlays with the City before you
              make an offer that depends on renovating or expanding. The{" "}
              <Link href="/insights/clarksville-historic-landmark-rules" className="font-semibold text-brass underline">
                Clarksville historic landmark rules
              </Link>{" "}
              guide walks through exactly how, and the{" "}
              <Link href="/clarksville-architecture" className="font-semibold text-brass underline">
                architecture
              </Link>{" "}
              page covers what makes these homes worth protecting.
            </p>
          </div>
        </Container>
      </section>

      {/* THE RIGHT TEAM */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <h2 className="font-display text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
              Buy with the right team
            </h2>
            <p>
              The difference between a historic home that delights you and one that drains you is
              usually the people around the purchase: an inspector and a structural engineer who know
              old Austin homes, a contractor who has actually restored them, an insurer who will cover
              one fairly, and an agent who has walked buyers through this before and knows which homes
              are coming available, including those that never reach the public listings.
            </p>
            <p>
              That is the role Luke plays here. Start with{" "}
              <Link href="/clarksville-homes-for-sale" className="font-semibold text-brass-deep underline">
                homes for sale
              </Link>
              , the{" "}
              <Link href="/clarksville-bungalows-for-sale" className="font-semibold text-brass-deep underline">
                bungalows
              </Link>{" "}
              that define the neighborhood, or the{" "}
              <Link href="/off-market-clarksville-homes" className="font-semibold text-brass-deep underline">
                off-market homes
              </Link>{" "}
              you will not find on Zillow.
            </p>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Thinking about a historic Clarksville home?"
        body="Tell Luke what you are looking for. He will help you find the right historic home, bring in the inspectors and engineers who know old Austin houses, and make sure you buy it with the full picture in hand."
        intent="buy"
        cta="Talk through a historic home with Luke"
      />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Buying an older Clarksville home, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs leading-relaxed text-muted">
            This page is general guidance, not engineering, legal, or insurance advice. Conditions and
            historic designations vary by property; rely on licensed inspectors, a structural engineer,
            your insurer, and the City of Austin for the facts on any specific home.
          </p>
        </Container>
      </section>
    </>
  );
}
