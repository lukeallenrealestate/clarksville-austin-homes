import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { HOME_FILTERS } from "@/lib/content/home-filters";

export const metadata: Metadata = pageMeta({
  title: "Browse Clarksville Homes by Bedroom & Feature | 78703",
  description:
    "Browse Clarksville, Austin (78703) homes for sale by bedroom count and feature: 2, 3, 4, and 5+ bedroom homes, pools, guest houses, single-story, renovated, and more.",
  path: "/clarksville-homes",
});

const isBedroom = (f: (typeof HOME_FILTERS)[number]) => f.slug.includes("bedroom");
const isPrice = (f: (typeof HOME_FILTERS)[number]) => f.slug.startsWith("under-") || f.slug.includes("m-to-");
const bedroomFilters = HOME_FILTERS.filter(isBedroom);
const priceFilters = HOME_FILTERS.filter(isPrice);
const featureFilters = HOME_FILTERS.filter((f) => !isBedroom(f) && !isPrice(f));

function Grid({ items }: { items: typeof HOME_FILTERS }) {
  return (
    <div className="mt-8 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <Link
          key={f.slug}
          href={`/clarksville-homes/${f.slug}`}
          className="group flex flex-col bg-paper p-6 transition-colors hover:bg-cream"
        >
          <span className="font-display text-xl text-ink transition-colors group-hover:text-brass-deep">
            {f.navLabel}
          </span>
          <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{f.lead}</span>
          <span className="font-label mt-4 text-[0.56rem] text-brass-deep">View listings &rarr;</span>
        </Link>
      ))}
    </div>
  );
}

export default function ClarksvilleHomesHub() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[64vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.streetscape.src}
          alt={PHOTOS.streetscape.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-16 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">Find it faster</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.1rem]">
              Browse Clarksville homes
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Jump straight to what you are looking for in Clarksville, Austin (78703), by bedroom
              count or by feature. Every list is live from the MLS.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container>
          <Eyebrow>By bedrooms</Eyebrow>
          <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
            Shop by size
          </h2>
          <Grid items={bedroomFilters} />
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <Container>
          <Eyebrow>By price</Eyebrow>
          <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
            Shop by budget
          </h2>
          <Grid items={priceFilters} />
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16">
        <Container>
          <Eyebrow>By feature and type</Eyebrow>
          <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
            Shop by what matters to you
          </h2>
          <Grid items={featureFilters} />
          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Looking for something more specific? See{" "}
            <Link href="/clarksville-homes-for-sale" className="font-semibold text-brass-deep underline">
              all homes for sale
            </Link>
            ,{" "}
            <Link href="/clarksville-condos-for-sale" className="font-semibold text-brass-deep underline">
              condos
            </Link>
            , or{" "}
            <Link href="/clarksville-homes-under-1-million" className="font-semibold text-brass-deep underline">
              homes under $1M
            </Link>
            , or just tell Luke what you want and he will set up a saved search.
          </p>
        </Container>
      </section>

      <ContactCta intent="buy" heading="Not seeing exactly what you want?" />
    </>
  );
}
