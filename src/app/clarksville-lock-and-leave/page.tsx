import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { CONDOS } from "@/lib/content/condos";

export const metadata: Metadata = pageMeta({
  title: "Lock-and-Leave Living in Clarksville | Second Homes in 78703",
  description:
    "Lock-and-leave homes and second residences in Clarksville, Austin (78703): boutique condominiums, full-service and low-maintenance, walkable and secure, minutes from downtown.",
  path: "/clarksville-lock-and-leave",
  type: "article",
});

const forWhom = [
  { h: "Downsizers", p: "Trading the big house and yard for walkability, culture, and a home that takes care of itself." },
  { h: "Second-home buyers", p: "A refined Austin base near downtown, the lake, and the West Lynn scene, ready whenever you are." },
  { h: "Frequent travelers", p: "Professionals who want to turn a key and go, knowing the home is secure and simple." },
  { h: "Pied-a-terre owners", p: "A small, elegant footprint in one of Austin's most walkable and storied neighborhoods." },
];

const FAQS = [
  {
    q: "What are lock-and-leave homes in Austin?",
    a: "Lock-and-leave homes are low-maintenance residences, usually condominiums or managed communities, that you can secure and leave for travel without worrying about a yard, exterior upkeep, or security. In Clarksville, boutique condominiums like The Belvedere and Westline offer this lifestyle in a walkable, historic setting minutes from downtown.",
  },
  {
    q: "Is Clarksville a good place for a second home in Austin?",
    a: "Yes. Clarksville pairs walkability, security, and low-maintenance condo options with proximity to downtown, Lady Bird Lake, and the West Lynn dining corridor, ideal for a second home you can use easily and leave confidently. Its scarcity and durable values also make it a sound place to own.",
  },
  {
    q: "What are the best low-maintenance neighborhoods in Austin?",
    a: "For walkable, low-maintenance living near downtown, Clarksville and the surrounding Old West Austin area stand out: you get boutique condominiums and lock-and-leave residences within a historic, tree-lined neighborhood, rather than an isolated tower. Contact Luke Allen for the buildings and off-market options that fit.",
  },
];

export default function LockAndLeave() {
  const fits = CONDOS.filter((c) => ["the-belvedere", "westline", "the-clarksville", "escorial-and-woodlawn-place"].includes(c.slug));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "clarksville-lock-and-leave",
            title: "Lock-and-Leave Living in Clarksville | Second Homes in 78703",
            description: "Lock-and-leave homes and second residences in Clarksville, Austin.",
            date: "2026-08-20",
            updated: "2026-08-20",
            image: PHOTOS.newBuild.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-ink">
        <Image src={PHOTOS.newBuild.src} alt={PHOTOS.newBuild.alt} fill priority sizes="100vw" className="img-grade object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">Second homes &amp; low-maintenance living</p>
            <h1 className="font-display mt-5 text-[2.9rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Lock it, and leave it.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              The freedom of a boutique condominium, the soul of a historic neighborhood. Clarksville
              is where you own a beautiful, walkable home in Austin, and never think about the yard.
            </p>
          </div>
        </Container>
      </section>

      {/* THE CASE */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              There is a certain kind of buyer who has done the big house. What they want now is
              simpler and, in its way, richer: a home they can secure and leave, in a place worth
              walking. Clarksville answers that better than almost anywhere in Austin.
            </p>
            <p>
              You get the low-maintenance ease of a boutique condominium, some with full concierge
              service, others lock-and-leave by design, inside a historic, tree-lined neighborhood
              minutes from downtown, Lady Bird Lake, and the West Lynn dining corridor. Not an
              isolated tower. A real neighborhood, without the upkeep.
            </p>
          </div>
        </Container>
      </section>

      {/* FOR WHOM */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Built for the way you live now</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.7rem]">
              Who chooses lock-and-leave in Clarksville
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {forWhom.map((w) => (
              <Reveal key={w.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{w.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{w.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* THE RIGHT BUILDINGS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Eyebrow>Where to own</Eyebrow>
              <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.7rem]">
                The buildings made for this
              </h2>
            </div>
            <Link href="/clarksville-condos" className="btn btn-outline">
              All condo buildings
            </Link>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {fits.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/clarksville-condos/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-line bg-cream transition-colors hover:border-brass/50"
                >
                  {c.heroImage ? (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={c.heroImage.src} alt={c.heroImage.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between">
                      <Pill tone="brass">{c.status === "selling" ? "Now Selling" : "Established"}</Pill>
                      {c.exclusive ? <span className="font-label text-[0.55rem] text-brass-deep">Off-market</span> : null}
                    </div>
                    <h3 className="font-display mt-4 text-2xl text-ink transition-colors group-hover:text-brass-deep">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted">{c.address}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{c.summary.split(".")[0]}.</p>
                    <span className="font-label mt-5 text-[0.58rem] text-brass-deep">Explore {c.name} &rarr;</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY NOT A TOWER */}
      <section className="bg-heritage py-20 text-paper">
        <Container size="narrow" className="text-center">
          <Eyebrow tone="dark">Why here, not a high-rise</Eyebrow>
          <h2 className="font-display mt-4 text-[2rem] leading-tight sm:text-[2.6rem]">
            A neighborhood, not just a building
          </h2>
          <p className="mt-5 leading-relaxed text-cream-soft">
            A downtown tower gives you a view and a valet. Clarksville gives you a front door onto a
            real, walkable neighborhood, dinner down the block, the trail around the corner, and 150
            years of character, with the same lock-and-leave ease. For many buyers, that is the whole
            difference.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/clarksville-vs-downtown-austin" className="btn btn-brass">
              Clarksville vs downtown
            </Link>
            <Link href="/off-market-clarksville-homes" className="btn btn-ghost-light">
              Off-market options
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Lock-and-leave living, answered
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

      <ContactCta
        heading="Find your lock-and-leave in Clarksville"
        body="Tell Luke how you want to live, and he will match you to the right building, and the off-market residences you will not find on Zillow."
        intent="buy"
      />
    </>
  );
}
