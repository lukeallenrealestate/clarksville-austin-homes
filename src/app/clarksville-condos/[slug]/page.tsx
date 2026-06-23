import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Pill } from "@/components/ui";
import { ContactCta } from "@/components/ContactCta";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CONDOS, getCondo } from "@/lib/content/condos";
import { PHOTOS } from "@/lib/photos";
import { LINKS } from "@/lib/content/related";

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
    description: `${c.summary} A buyer's briefing on ${c.name} in Clarksville, Austin, with details to verify before you offer.`,
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

  return (
    <>
      <PageHero
        eyebrow="Clarksville Condo Building"
        title={c.name}
        lead={c.summary}
        photo={PHOTOS.newBuild}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: "Condo Buildings", path: "/clarksville-condos" },
          { name: c.name, path: `/clarksville-condos/${c.slug}` },
        ]}
      />

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
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            {c.priceNote ? (
              <div className="rounded-[3px] border border-line bg-cream p-6">
                <span className="font-label text-[0.55rem] text-muted">Pricing</span>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.priceNote}</p>
              </div>
            ) : null}
            {c.verifyNote ? (
              <div className="rounded-[3px] border-l-2 border-brick bg-brass-soft p-6">
                <span className="font-label text-[0.55rem] text-brick">Verify before you rely on it</span>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.verifyNote}</p>
              </div>
            ) : null}
            <div className="rounded-[3px] border border-line bg-cream p-6">
              <p className="font-display text-xl text-ink">Considering {c.name}?</p>
              <p className="mt-2 text-sm text-ink-soft">
                Luke tracks availability, pricing, and timelines across every Clarksville building.
              </p>
              <Link href="/contact" className="btn btn-heritage mt-4 w-full">
                Ask about {c.name}
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { href: "/clarksville-condos-for-sale", title: "Condos for sale", blurb: "Active condo listings across the neighborhood." },
          LINKS.condos,
          LINKS.market,
        ]}
        title="More on Clarksville condos"
      />
      <ContactCta intent="buy" heading={`Tour ${c.name}`} />
    </>
  );
}
