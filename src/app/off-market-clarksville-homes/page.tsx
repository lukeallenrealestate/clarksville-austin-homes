import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading, Pill } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";
import { AGENT } from "@/lib/site";
import { LINKS } from "@/lib/content/related";
import { CONDOS } from "@/lib/content/condos";
import { usdShort } from "@/lib/listings";

export const metadata: Metadata = pageMeta({
  title: "Off-Market Clarksville Homes | Before They Hit Zillow",
  description:
    "Access off-market and coming-soon homes in Clarksville and Old West Austin (78703). In a neighborhood this scarce, the best homes sell before they are ever listed publicly.",
  path: "/off-market-clarksville-homes",
});

const FAQS = [
  {
    q: "How do I find off-market homes in Clarksville, Austin?",
    a: "The most reliable way is to work with an agent who is embedded in the neighborhood and has direct developer and owner relationships. Many Clarksville homes trade privately, before or instead of a public MLS or Zillow listing. Luke Allen sources these off-market opportunities and represents off-market projects directly, including The Clarksville Condominiums.",
  },
  {
    q: "What is a pocket listing or off-market home?",
    a: "An off-market or pocket listing is a home for sale that is not advertised on the public MLS or portals like Zillow. Sellers choose privacy, speed, or a quiet sale. In a low-inventory neighborhood like Clarksville, a meaningful share of transactions happen this way, which is why buyers who only watch the portals miss the best homes.",
  },
  {
    q: "Can Luke Allen get me into off-market Clarksville homes?",
    a: "Yes. A large share of Luke's business is off-market. Tell him what you are looking for in Clarksville or Old West Austin, and he will bring you homes and new developments that never reach the public market, and represent you when the right one appears.",
  },
];

export default function OffMarketPage() {
  const clark = CONDOS.find((c) => c.slug === "the-clarksville");
  const clarkFrom = clark?.unitTypes?.length
    ? Math.min(...clark.unitTypes.map((u) => u.price))
    : undefined;

  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: "off-market-clarksville-homes",
          title: "Off-Market Clarksville Homes",
          description:
            "Access off-market and coming-soon homes in Clarksville and Old West Austin (78703).",
          date: "2026-07-21",
          updated: "2026-07-21",
          image: PHOTOS.streetscape.src,
        })}
      />
      <PageHero
        eyebrow="Off-Market & Coming Soon"
        title="Off-market Clarksville homes"
        lead="In a neighborhood this scarce, the best homes are sold before they ever reach Zillow. Get on the inside track to Clarksville and Old West Austin homes the portals never show you."
        photo={PHOTOS.streetscape}
        crumbs={[{ name: "Off-Market Homes", path: "/off-market-clarksville-homes" }]}
      />

      {/* Value + lead capture */}
      <section className="bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="prose-clark max-w-none">
            <p>
              Clarksville runs on low inventory and high intent. When only a handful of homes sell in
              a year, the ones that matter often change hands quietly, through direct relationships,
              before a sign ever goes in the yard. If you are only watching{" "}
              <Link href="/clarksville-homes-for-sale">the public listings</Link>, you are seeing what
              is left, not what is best.
            </p>
            <h2>Why off-market matters here</h2>
            <p>
              A large share of Luke Allen&rsquo;s business is off-market. Through developer
              relationships and a network built specifically around this neighborhood, he sources
              homes and new residences that are never posted on the MLS or Zillow, and he represents
              off-market projects directly, including{" "}
              <Link href="/clarksville-condos/the-clarksville">The Clarksville Condominiums</Link>,
              sold entirely off-market{clarkFrom ? ` from ${usdShort(clarkFrom)}` : ""}.
            </p>
            <p>
              Tell Luke what you are looking for. When something fits, whether it is a restored
              bungalow, a boutique condo, or a quiet estate sale, you will hear about it first.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[3px] border border-brass/40 bg-cream p-6 sm:p-8">
              <Eyebrow>Get on the inside track</Eyebrow>
              <p className="font-display mt-3 text-2xl leading-tight text-ink">
                Tell Luke what you want in Clarksville
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Share your criteria and be first in line for off-market and coming-soon homes in 78703.
              </p>
              <div className="mt-5">
                <LeadForm defaultIntent="buy" cta="Get early access" />
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* Live off-market example */}
      {clark?.heroImage ? (
        <section className="border-t border-line bg-cream py-16">
          <Container>
            <SectionHeading eyebrow="A live example" title="On the market with Luke, off the market to everyone else" />
            <Reveal className="mt-8 grid items-stretch gap-0 overflow-hidden rounded-[3px] border border-line lg:grid-cols-2">
              <div className="relative min-h-[260px] lg:min-h-[380px]">
                <Image src={clark.heroImage.src} alt={clark.heroImage.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="img-grade object-cover" />
              </div>
              <div className="flex flex-col justify-center gap-4 bg-paper p-8 sm:p-10">
                <div className="flex gap-1.5">
                  <Pill tone="brass">Off-market</Pill>
                  <Pill>Not on Zillow</Pill>
                </div>
                <h3 className="font-display text-3xl text-ink">The Clarksville Condominiums</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Ten boutique homes at 1711 Enfield, seven already sold, entirely off-market. No
                  public floor plans, no virtual tours, shown by private appointment only. Exactly the
                  kind of opportunity you only reach through the right agent.
                </p>
                <Link href="/clarksville-condos/the-clarksville" className="btn btn-heritage self-start">
                  See the listing
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <FaqSection faqs={FAQS} eyebrow="Off-market FAQ" title="How off-market homes work in Clarksville" />

      <RelatedLinks
        title="Keep exploring"
        links={[LINKS.buyWithLuke, LINKS.homesForSale, LINKS.realtor, LINKS.condos, LINKS.market, LINKS.oldWestAustin]}
      />

      <section className="bg-heritage py-14 text-paper">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Eyebrow tone="dark">Ready when you are</Eyebrow>
          <h2 className="font-display max-w-2xl text-[2rem] leading-tight sm:text-[2.5rem]">
            The best Clarksville homes never make it to the portals
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={AGENT.phoneHref} className="btn btn-brass">
              Call {AGENT.phone}
            </a>
            <a href={AGENT.smsHref} className="btn btn-ghost-light">
              Text Luke
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
