import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Pill, Stat, Eyebrow } from "@/components/ui";
import { ContactCta } from "@/components/ContactCta";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ListingGallery } from "@/components/ListingGallery";
import { CONDOS, getCondo } from "@/lib/content/condos";
import { PHOTOS } from "@/lib/photos";
import { LINKS } from "@/lib/content/related";
import { usd } from "@/lib/listings";
import { AGENT } from "@/lib/site";

export const revalidate = 3600;

export async function generateStaticParams() {
  return CONDOS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCondo(slug);
  if (!c) return {};
  return pageMeta({
    title: `${c.name} | Clarksville Austin Condos (78703)`,
    description: `${c.summary} A buyer's briefing on ${c.name} in Clarksville, Austin.`.slice(0, 155),
    path: `/clarksville-condos/${slug}`,
    type: "article",
  });
}

export default async function CondoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCondo(slug);
  if (!c) notFound();

  const statusLabel =
    c.status === "selling" ? "Now Selling" : c.status === "complete" ? "Complete" : "Established";
  const remaining =
    c.unitsTotal != null && c.unitsSold != null ? c.unitsTotal - c.unitsSold : undefined;
  const priceFrom = c.unitTypes?.length ? Math.min(...c.unitTypes.map((u) => u.price)) : undefined;

  return (
    <>
      <PageHero
        eyebrow={c.exclusive ? "Exclusive Clarksville Release" : "Clarksville Condo Building"}
        title={c.name}
        lead={c.summary}
        photo={c.heroImage ?? PHOTOS.newBuild}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: "Condo Buildings", path: "/clarksville-condos" },
          { name: c.name, path: `/clarksville-condos/${c.slug}` },
        ]}
      />

      {/* Exclusive availability band */}
      {c.exclusive ? (
        <section className="border-b border-line bg-cream py-10">
          <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              {c.logo ? (
                <Image
                  src={c.logo.src}
                  alt={c.logo.alt}
                  width={c.logo.width}
                  height={c.logo.height}
                  className="h-20 w-auto shrink-0"
                />
              ) : null}
              <div>
                <Eyebrow>Exclusive, off-market</Eyebrow>
                <p className="font-display mt-2 text-2xl leading-tight text-ink sm:text-[1.7rem]">
                  Sold privately. Not on the MLS or Zillow.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Pill tone="brass">Private showings only</Pill>
                  <Pill>No public floor plans</Pill>
                  <Pill>No virtual tours</Pill>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 gap-8 sm:gap-10">
              {c.unitsTotal != null ? <Stat value={c.unitsTotal} label="Residences" /> : null}
              {c.unitsSold != null ? <Stat value={c.unitsSold} label="Sold" /> : null}
              {remaining != null ? (
                <Stat value={remaining} label="Remaining" sub={priceFrom ? `from ${usd(priceFrom)}` : undefined} />
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-paper py-16">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1.2fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="brass">{statusLabel}</Pill>
              {c.developer ? <Pill>{c.developer}</Pill> : null}
            </div>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              <div className="flex justify-between gap-6 py-3">
                <dt className="font-label text-[0.58rem] text-muted">Address</dt>
                <dd className="text-right text-sm text-ink">{c.address}</dd>
              </div>
              {c.developer ? (
                <div className="flex justify-between gap-6 py-3">
                  <dt className="font-label text-[0.58rem] text-muted">Developer</dt>
                  <dd className="text-right text-sm text-ink">{c.developer}</dd>
                </div>
              ) : null}
              {c.design ? (
                <div className="flex justify-between gap-6 py-3">
                  <dt className="font-label text-[0.58rem] text-muted">Design</dt>
                  <dd className="text-right text-sm text-ink">{c.design}</dd>
                </div>
              ) : null}
            </dl>

            <h2 className="font-display mt-10 text-2xl text-ink">What to know</h2>
            <ul className="mt-4 grid gap-2.5">
              {c.details.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-[5px] w-[5px] shrink-0 rotate-45 bg-brass" />
                  {d}
                </li>
              ))}
            </ul>

            {/* Residences & pricing */}
            {c.unitTypes?.length ? (
              <div className="mt-12">
                <h2 className="font-display text-2xl text-ink">Residences and pricing</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {c.unitTypes.map((u) => (
                    <div key={u.name} className="rounded-[3px] border border-line bg-cream p-5">
                      <div className="font-display font-num text-2xl text-ink">{usd(u.price)}</div>
                      <div className="font-label mt-1.5 text-[0.6rem] text-brass-deep">{u.name}</div>
                      <div className="font-num mt-2 text-sm text-muted">
                        {u.sqft.toLocaleString()} sq ft
                      </div>
                    </div>
                  ))}
                </div>
                {c.parkingNote ? (
                  <p className="mt-5 flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-2 h-[5px] w-[5px] shrink-0 rotate-45 bg-brass" />
                    {c.parkingNote}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            {c.priceNote ? (
              <div className="rounded-[3px] border border-line bg-cream p-6">
                <span className="font-label text-[0.55rem] text-muted">Pricing and availability</span>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.priceNote}</p>
              </div>
            ) : null}
            {c.verifyNote ? (
              <div className="rounded-[3px] border-l-2 border-brick bg-brass-soft p-6">
                <span className="font-label text-[0.55rem] text-brick">Verify before you rely on it</span>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.verifyNote}</p>
              </div>
            ) : null}
            <div className="rounded-[3px] border border-brass/40 bg-heritage p-6 text-paper">
              <p className="font-display text-xl">
                {c.exclusive ? `See ${c.name} in person` : `Considering ${c.name}?`}
              </p>
              <p className="mt-2 text-sm text-cream-soft">
                {c.exclusive
                  ? "These homes are shown by private appointment only. Reach out and Luke will set up a walk-through."
                  : "Luke tracks availability, pricing, and timelines across every Clarksville building."}
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a href={AGENT.phoneHref} className="btn btn-brass w-full">
                  Call {AGENT.phone}
                </a>
                <Link href="/contact" className="btn btn-ghost-light w-full">
                  {c.exclusive ? "Request a private showing" : `Ask about ${c.name}`}
                </Link>
              </div>
              <p className="mt-4 text-xs text-cream-soft/70">
                {AGENT.name}, TREC #{AGENT.trecLicense}, {AGENT.brokerage}
              </p>
            </div>
          </aside>
        </Container>
      </section>

      {/* The "you have to see it" pitch */}
      {c.exclusiveNote ? (
        <section className="border-y border-line bg-heritage py-16 text-paper">
          <Container className="max-w-3xl">
            <Eyebrow tone="dark">Why there are no floor plans</Eyebrow>
            <p className="font-display mt-4 text-[1.7rem] leading-snug sm:text-[2.1rem]">
              {c.exclusiveNote}
            </p>
            <Link href="/contact" className="btn btn-brass mt-8">
              Arrange your private walk-through
            </Link>
          </Container>
        </section>
      ) : null}

      {/* Gallery with lightbox */}
      {c.gallery?.length ? (
        <section className="bg-cream py-16">
          <Container>
            <h2 className="font-display text-2xl text-ink">Inside {c.name}</h2>
            <div className="mt-8">
              <ListingGallery photos={c.gallery} title={c.name} />
            </div>
            {c.imageCredit ? <p className="mt-6 text-xs text-muted">{c.imageCredit}</p> : null}
          </Container>
        </section>
      ) : null}

      <RelatedLinks
        links={[
          { href: "/clarksville-condos-for-sale", title: "Condos for sale", blurb: "Active condo listings across the neighborhood." },
          LINKS.condos,
          LINKS.market,
        ]}
        title="More on Clarksville condos"
      />
      <ContactCta
        intent="buy"
        heading={c.exclusive ? `Come see ${c.name}` : `Tour ${c.name}`}
        body={
          c.exclusive
            ? `${c.name} is sold exclusively and off-market, and the remaining homes go to buyers who see them in person. Send Luke a note to arrange a private showing before they are gone.`
            : undefined
        }
        cta={c.exclusive ? "Request a private showing" : undefined}
      />
    </>
  );
}
