import Image from "next/image";
import Link from "next/link";
import { type Listing, usd, CATEGORY_LABEL } from "@/lib/listings";
import { JsonLd } from "./JsonLd";
import { listingSchema } from "@/lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container, Pill, RuleOrnament } from "./ui";
import { ContactCta } from "./ContactCta";
import { SampleNotice } from "./SampleNotice";
import { AGENT } from "@/lib/site";

/**
 * Server-rendered listing detail: full gallery, specs, description, map, and
 * RealEstateListing JSON-LD, so the listing ships as native indexable HTML. IDX
 * attribution (listing brokerage) is shown wherever live MLS data provides it.
 */
function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line py-3">
      <dt className="font-label text-[0.6rem] text-muted">{label}</dt>
      <dd className="font-num mt-1 text-lg text-ink">{value}</dd>
    </div>
  );
}

export function ListingDetail({ listing, others }: { listing: Listing; others: Listing[] }) {
  const photos = listing.photos ?? [];
  const title = `${listing.address}${listing.unit ? `, ${listing.unit}` : ""}`;
  const mapQuery = encodeURIComponent(`${title}, Austin, TX ${listing.geo ? "" : "78703"}`.trim());

  return (
    <article className="pt-24">
      <JsonLd data={listingSchema(listing)} />
      <Breadcrumbs
        items={[
          { name: "Homes for Sale", path: "/clarksville-homes-for-sale" },
          { name: title, path: `/clarksville-homes-for-sale/${listing.slug}` },
        ]}
      />

      <Container className="mt-6">
        <SampleNotice className="mb-6" />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {listing.building ? <Pill tone="brass">{listing.building}</Pill> : null}
              {listing.categories.map((c) => (
                <Pill key={c}>{CATEGORY_LABEL[c]}</Pill>
              ))}
              {listing.status === "pending" ? <Pill>Pending</Pill> : null}
            </div>
            <h1 className="font-display text-[2.4rem] font-medium leading-tight text-ink">
              {title}
            </h1>
            <p className="mt-1 text-muted">Clarksville, Austin, Texas 78703</p>
          </div>
          <div className="font-display font-num text-[2.6rem] leading-none text-brass-deep">
            {usd(listing.price)}
          </div>
        </div>
      </Container>

      {/* Gallery */}
      <Container className="mt-8">
        {photos.length ? (
          <div className="grid gap-2 sm:grid-cols-4 sm:grid-rows-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] sm:col-span-2 sm:row-span-2 sm:aspect-auto">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="img-grade object-cover"
              />
            </div>
            {photos.slice(1, 5).map((p) => (
              <div key={p.src} className="relative hidden aspect-[4/3] overflow-hidden rounded-[3px] sm:block">
                <Image src={p.src} alt={p.alt} fill sizes="25vw" className="img-grade object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex aspect-[16/7] items-center justify-center rounded-[3px] border border-line bg-gradient-to-br from-cream to-sand">
            <span className="font-display text-3xl text-brass/60">Photography on request</span>
          </div>
        )}
      </Container>

      {/* Body */}
      <Container className="mt-12 grid gap-12 pb-8 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <dl className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
            <Spec label="Bedrooms" value={String(listing.beds)} />
            <Spec label="Bathrooms" value={String(listing.baths)} />
            <Spec label="Living Area" value={`${listing.sqft.toLocaleString()} sf`} />
            <Spec
              label="Price / Sq Ft"
              value={listing.sqft ? usd(Math.round(listing.price / listing.sqft)) : "n/a"}
            />
            {listing.yearBuilt ? <Spec label="Year Built" value={String(listing.yearBuilt)} /> : null}
            {listing.lotSizeAcres ? (
              <Spec label="Lot" value={`${listing.lotSizeAcres} ac`} />
            ) : null}
            <Spec label="Type" value={CATEGORY_LABEL[listing.categories[0] ?? "single-family"]} />
            {listing.hoaFee ? (
              <Spec label="HOA" value={`${usd(listing.hoaFee)} / ${listing.hoaFrequency ?? "mo"}`} />
            ) : null}
          </dl>

          {listing.description ? (
            <div className="mt-10">
              <RuleOrnament />
              <p className="mt-8 whitespace-pre-line leading-relaxed text-ink-soft">
                {listing.description}
              </p>
            </div>
          ) : null}

          {/* Map */}
          <div className="mt-10">
            <h2 className="font-display text-2xl text-ink">On the map</h2>
            <div className="mt-4 overflow-hidden rounded-[3px] border border-line">
              <iframe
                title={`Map of ${title}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              />
            </div>
          </div>

          {/* IDX attribution */}
          {listing.listOffice ? (
            <p className="mt-6 text-xs text-muted">
              Listed by {listing.listOffice}
              {listing.listAgent ? ` (${listing.listAgent})` : ""}. Listing information provided
              courtesy of Unlock MLS / ACTRIS via MLS Grid. Information deemed reliable but not
              guaranteed.
            </p>
          ) : (
            <p className="mt-6 text-xs text-muted">
              Information deemed reliable but not guaranteed; verify all details independently.
            </p>
          )}
        </div>

        {/* Sticky inquiry rail */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[3px] border border-line bg-cream p-6">
            <p className="font-display text-2xl text-ink">Tour this home</p>
            <p className="mt-2 text-sm text-ink-soft">
              Ask Luke for a private showing, the full photo set, disclosures, or a designation check
              before you offer.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a href={AGENT.phoneHref} className="btn btn-heritage w-full">
                Call {AGENT.phone}
              </a>
              <a href={AGENT.smsHref} className="btn btn-outline w-full">
                Text Luke
              </a>
              <Link href="/contact" className="btn btn-brass w-full">
                Request a showing
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted">
              {AGENT.name}, TREC #{AGENT.trecLicense}, {AGENT.brokerage}
            </p>
          </div>
        </aside>
      </Container>

      {others.length ? (
        <section className="border-t border-line bg-cream py-16">
          <Container>
            <h2 className="font-display text-2xl text-ink">More Clarksville homes</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.id}
                  href={`/clarksville-homes-for-sale/${o.slug}`}
                  className="group rounded-[3px] border border-line bg-paper p-5 transition-colors hover:border-brass/50"
                >
                  <div className="font-display font-num text-xl text-ink">{usd(o.price)}</div>
                  <div className="mt-1 text-sm text-ink-soft">{o.address}</div>
                  <div className="font-num mt-3 text-sm text-muted">
                    {o.beds} bd &middot; {o.baths} ba &middot; {o.sqft.toLocaleString()} sf
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <ContactCta
        heading={`Interested in ${listing.address}?`}
        body="Send Luke a note and he will follow up the same day with availability, a private showing, and honest guidance on value and the offer."
        intent="buy"
        cta="Request details"
      />
    </article>
  );
}
