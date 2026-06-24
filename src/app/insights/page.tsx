import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Pill } from "@/components/ui";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { INSIGHTS } from "@/lib/content/insights";
import { fmtDate } from "@/lib/content/guides";

export const metadata: Metadata = pageMeta({
  title: "Clarksville Insights | Investing, Moving, and Buying in 78703",
  description:
    "Original guides to buying, selling, investing, and living in Clarksville, Austin, written by a local specialist. Market analysis, relocation, and historic landmark rules.",
  path: "/insights",
});

export default function InsightsHub() {
  return (
    <>
      <PageHero
        eyebrow="Clarksville Insights"
        title="Notes from a Clarksville specialist"
        lead="Original, in-depth guides to investing, moving, and buying in Clarksville, Austin. The kind of hyperlocal analysis you will not find on a national portal."
        photo={PHOTOS.porch}
        crumbs={[{ name: "Insights", path: "/insights" }]}
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((post, i) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[3px] border border-line bg-paper transition-colors hover:border-brass/50"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-cream">
                  <Image
                    src={post.hero.src}
                    alt={post.hero.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-3 top-3">
                    <Pill tone="brass">{post.category}</Pill>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-brass-deep">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {post.description}
                  </p>
                  <p className="font-label mt-5 flex items-center gap-3 text-[0.58rem] text-muted">
                    <span>{fmtDate(post.published)}</span>
                    <span aria-hidden className="text-line">
                      /
                    </span>
                    <span>{post.readMins} min read</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
