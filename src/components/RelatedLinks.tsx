import Link from "next/link";
import { Container, SectionHeading } from "./ui";

export type RelatedLink = { href: string; title: string; blurb: string };

/**
 * Cross-links every spoke page into related guides and listings, building the
 * internal-link graph that gives the hub-and-spoke its topical authority.
 */
export function RelatedLinks({
  links,
  title = "Keep exploring Clarksville",
  eyebrow = "Related",
}: {
  links: RelatedLink[];
  title?: string;
  eyebrow?: string;
}) {
  if (!links.length) return null;
  return (
    <section className="border-t border-line bg-paper py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex flex-col bg-paper p-6 transition-colors hover:bg-cream"
            >
              <span className="font-display text-xl text-ink transition-colors group-hover:text-brass-deep">
                {l.title}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-ink-soft">{l.blurb}</span>
              <span className="font-label mt-4 text-[0.6rem] text-brass-deep">Read more &rarr;</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
