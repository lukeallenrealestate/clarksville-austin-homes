import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Container, Eyebrow, SectionHeading, Stat, RuleOrnament, Pill } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { ListingCard } from "@/components/ListingCard";
import { SampleNotice } from "@/components/SampleNotice";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { AGENT, NEIGHBORHOOD } from "@/lib/site";
import { getActiveListings, getMarketSnapshot, usdShort } from "@/lib/listings";
import { CONDOS } from "@/lib/content/condos";
import { DINING } from "@/lib/content/dining";
import { HOME_FAQS } from "@/lib/content/faqs";

export const revalidate = 3600;

const searchLinks = [
  { href: "/clarksville-homes-for-sale", label: "All Homes" },
  { href: "/clarksville-condos-for-sale", label: "Condos" },
  { href: "/clarksville-luxury-homes", label: "Luxury" },
  { href: "/clarksville-new-construction", label: "New Construction" },
];

export default async function HomePage() {
  const listings = (await getActiveListings()).slice(0, 3);
  const snap = await getMarketSnapshot();
  const featuredCondos = CONDOS.filter((c) => c.featured);

  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* HERO */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-transparent to-transparent" />

        <Container className="relative z-10 pb-20 pt-36 sm:pb-28">
          <div className="hero-rise max-w-3xl">
            <Eyebrow tone="dark">Historic Old West Austin &middot; 78703</Eyebrow>
            <h1 className="font-display mt-5 text-[3rem] font-medium leading-[0.98] tracking-tight text-paper sm:text-[4.5rem]">
              Clarksville, the oldest
              <br />
              walk-to-everything
              <br />
              <span className="text-brass">neighborhood in Austin.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              A freedmen&rsquo;s town founded in 1871, now one of the most coveted addresses in the
              city: live oak canopy, historic cottages, and the West Lynn dining corridor, minutes
              from downtown. Browse live Clarksville listings and original neighborhood expertise.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-2.5">
              {searchLinks.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`rounded-[2px] px-4 py-2.5 text-sm font-semibold transition-colors ${
                    i === 0
                      ? "bg-brass text-white hover:bg-brass-deep"
                      : "border border-paper/40 text-paper hover:border-brass hover:text-brass"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-cream-soft/80">
              Prefer the full map?{" "}
              <a
                href={AGENT.idxSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-paper"
              >
                Search every Austin listing
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* TRUST / POSITIONING STRIP */}
      <section className="border-b border-line bg-cream">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.5fr_2fr] lg:items-center">
          <div>
            <Eyebrow>Why Clarksville</Eyebrow>
            <p className="mt-4 font-display text-2xl leading-snug text-ink sm:text-[1.7rem]">
              A small, low-inventory, high-intent market where local knowledge, not a portal, decides
              the outcome.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Guided by {AGENT.name}, {AGENT.title} ({AGENT.brokerage}), with original reporting on
              the blocks, buildings, and history that the big sites overlook.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Stat value="1871" label="Founded" />
            <Stat value="1976" label="On the Register" />
            <Stat value="78703" label="ZIP code" />
            <Stat value="5 min" label="Walk to W. 6th" />
          </div>
        </Container>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="For Sale Now"
              title="Featured Clarksville homes"
              lead="Live listings inside the Clarksville boundary, rendered as real pages you and the search engines can read, not a hidden widget."
            />
            <Link href="/clarksville-homes-for-sale" className="btn btn-outline">
              View all homes
            </Link>
          </div>
          <SampleNotice className="mt-8" />
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l, i) => (
              <Reveal key={l.id} delay={i * 90}>
                <ListingCard listing={l} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* NEIGHBORHOOD EDITORIAL SPLIT */}
      <section className="border-y border-line bg-cream py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[3px] border border-line">
              <Photo photo={PHOTOS.streetscape} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden w-44 overflow-hidden rounded-[3px] border-4 border-cream sm:block">
              <Photo photo={PHOTOS.porch} sizes="180px" />
            </div>
          </Reveal>
          <div>
            <Eyebrow>The Neighborhood</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] font-medium leading-[1.1] text-ink sm:text-[2.7rem]">
              Founded by a freedman in 1871, protected ever since.
            </h2>
            <div className="mt-5 space-y-4 text-ink-soft">
              <p>
                Charles Clark, born into slavery in Mississippi, bought two acres west of Austin in
                1871 and sold parcels to other freedmen. The result is one of the oldest freedmen&rsquo;s
                towns west of the Mississippi, a National Register historic district since 1976.
              </p>
              <p>
                Today that history shows up as character: cottages and bungalows on small, walkable
                lots, mature canopy, and quiet streets a few minutes from the West Lynn restaurants
                and downtown. Scarcity and historic protection are exactly why values here hold.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/clarksville-history" className="btn btn-heritage">
                Read the history
              </Link>
              <Link href="/neighborhood" className="btn btn-outline">
                Neighborhood guide
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* MARKET SNAPSHOT (dark heritage) */}
      <section className="bg-heritage py-20 text-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:items-center">
            <div>
              <Eyebrow tone="dark">Market, Dated and Sourced</Eyebrow>
              <h2 className="font-display mt-4 text-[2.2rem] font-medium leading-[1.1] sm:text-[2.7rem]">
                What Clarksville is really worth.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
                Sources conflict for a market this small, so we lead with trailing-12-month MLS
                figures and name the date on every number. Single-family medians run roughly $1.1M to
                $1.6M, with luxury new builds to $3.4M and up.
              </p>
              <Link href="/clarksville-market-report" className="btn btn-brass mt-7">
                Read the full market report
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              <Stat tone="dark" value="$1.6M" label="Median, single-family" sub="Trailing 12 mo." />
              <Stat tone="dark" value="$761" label="Per square foot" sub="Avg." />
              <Stat tone="dark" value="~87" label="Days on market" />
              <Stat tone="dark" value="89%" label="Sale to list" />
              <Stat tone="dark" value="2.7" label="Months supply" />
              <Stat
                tone="dark"
                value={snap.isSample ? "Live" : String(snap.activeCount)}
                label="Active now"
                sub={snap.isSample ? "On sync" : "On this boundary"}
              />
            </div>
          </div>
          <p className="mt-10 text-xs text-cream-soft/60">
            Single-family figures: Keenan Group at Compass MLS polygon snapshot, June 23, 2026.
            Figures vary by boundary and time frame; verify before relying on any single number.
          </p>
        </Container>
      </section>

      {/* CONDO BUILDINGS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="New Construction & Condos"
              title="The buildings worth knowing"
              lead="Lock-and-leave luxury and boutique new construction, building by building, with the details that change before each sales cycle."
            />
            <Link href="/clarksville-condos" className="btn btn-outline">
              All condo buildings
            </Link>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {featuredCondos.map((c, i) => (
              <Reveal key={c.slug} delay={i * 90}>
                <Link
                  href={`/clarksville-condos/${c.slug}`}
                  className="group flex h-full flex-col rounded-[3px] border border-line bg-cream p-7 transition-colors hover:border-brass/50"
                >
                  <div className="flex items-center justify-between">
                    <Pill tone="brass">{c.status === "selling" ? "Now Selling" : "Established"}</Pill>
                    {c.developer ? <span className="text-xs text-muted">{c.developer}</span> : null}
                  </div>
                  <h3 className="font-display mt-4 text-3xl text-ink transition-colors group-hover:text-brass-deep">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{c.address}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
                  <span className="font-label mt-5 text-[0.6rem] text-brass-deep">
                    Explore {c.name} &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* DINING / LIFESTYLE */}
      <section className="border-t border-line bg-cream py-20">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1.5fr] lg:items-center">
          <div>
            <Eyebrow>Life on West Lynn</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] font-medium leading-[1.1] text-ink sm:text-[2.7rem]">
              Dinner is a walk, not a drive.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              The West Lynn corridor is the reason Clarksville feels like a village inside the city.
              A few of the names that anchor it:
            </p>
            <ul className="mt-7 divide-y divide-line border-y border-line">
              {DINING.slice(0, 5).map((d) => (
                <li key={d.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-display text-xl text-ink">{d.name}</span>
                  <span className="font-label text-[0.58rem] text-brass-deep">{d.kind}</span>
                </li>
              ))}
            </ul>
            <Link href="/clarksville-restaurants" className="btn btn-heritage mt-7">
              The full dining guide
            </Link>
          </div>
          <Reveal className="overflow-hidden rounded-[3px] border border-line">
            <Photo photo={PHOTOS.westLynn} sizes="(max-width: 1024px) 100vw, 40vw" />
          </Reveal>
        </Container>
      </section>

      <Container className="py-14">
        <RuleOrnament />
      </Container>

      <FaqSection
        faqs={HOME_FAQS}
        title="Clarksville, Austin: the basics"
        eyebrow="Frequently asked"
      />

      <ContactCta />
    </>
  );
}
