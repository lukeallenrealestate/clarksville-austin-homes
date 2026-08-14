import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Pill } from "@/components/ui";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { PHOTOS } from "@/lib/photos";
import { COMPARISONS } from "@/lib/content/guides";
import { getComparison } from "@/lib/content/comparisons";
import { LINKS } from "@/lib/content/related";

export const metadata: Metadata = pageMeta({
  title: "Clarksville vs Other Austin Neighborhoods | Compare",
  description:
    "How Clarksville compares to Tarrytown, Old Enfield, Pemberton Heights, Bryker Woods, Zilker, Hyde Park, Travis Heights, and downtown Austin. Honest, side-by-side comparisons for buyers.",
  path: "/clarksville-vs-austin-neighborhoods",
});

const FAQS = [
  {
    q: "How does Clarksville compare to other Austin neighborhoods?",
    a: "Clarksville is one of the most walkable historic neighborhoods in central Austin, minutes from downtown, with a National Register district, the West Lynn dining corridor, and a mix of cottages, bungalows, condos, and modern infill. Compared to leafier or larger-lot neighborhoods like Tarrytown or Pemberton Heights, it trades lot size for walkability and downtown proximity. Compared to Hyde Park or Travis Heights, it is more downtown-adjacent and typically higher priced.",
  },
  {
    q: "Which Austin neighborhood is most similar to Clarksville?",
    a: "Old Enfield is the closest in character and location, sharing the Old West Austin Historic District, though Old Enfield leans toward grander estates. Hyde Park is the closest in historic bungalow feel, though it sits north near the university rather than west of downtown.",
  },
  {
    q: "Is Clarksville more expensive than nearby Austin neighborhoods?",
    a: "Clarksville sits well above the citywide median and commands a premium for its walkability and downtown proximity. It is often pricier than Hyde Park or Bryker Woods, comparable to Old Enfield and Pemberton Heights for estate homes, and varies against Tarrytown, where larger lots can exceed Clarksville pricing.",
  },
];

export default function ComparisonsHub() {
  return (
    <>
      <PageHero
        eyebrow="Neighborhood Comparisons"
        title="Clarksville vs other Austin neighborhoods"
        lead="Weighing Clarksville against another central Austin neighborhood? These honest, side-by-side comparisons cover location, housing, schools, walkability, price, and who each one suits."
        photo={PHOTOS.canopy}
        crumbs={[{ name: "Neighborhood Comparisons", path: "/clarksville-vs-austin-neighborhoods" }]}
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {COMPARISONS.map((g, i) => {
              const data = getComparison(g.slug);
              return (
                <Reveal key={g.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/${g.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-line bg-paper transition-colors hover:border-brass/50"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-cream">
                      <Image
                        src={g.hero.src}
                        alt={g.hero.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute left-3 top-3">
                        <Pill tone="brass">vs {data?.other ?? ""}</Pill>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-xl leading-tight text-ink transition-colors group-hover:text-brass-deep">
                        Clarksville vs {data?.other ?? g.navLabel}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                        {g.description}
                      </p>
                      <span className="font-label mt-4 text-[0.58rem] text-brass-deep">Compare &rarr;</span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <FaqSection faqs={FAQS} eyebrow="Comparison FAQ" title="Clarksville versus the rest of Austin" />

      <RelatedLinks
        title="Explore Clarksville"
        links={[LINKS.oldWestAustin, LINKS.homesForSale, LINKS.neighborhood, LINKS.realtor, LINKS.market, LINKS.buying]}
      />

      <ContactCta
        heading="Not sure which neighborhood fits?"
        body="Luke Allen knows Clarksville and the neighborhoods around it block by block. Tell him what matters to you and he will help you land in the right one."
        intent="buy"
      />
    </>
  );
}
