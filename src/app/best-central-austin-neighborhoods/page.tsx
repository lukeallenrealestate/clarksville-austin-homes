import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/photos";
import { COMPARISONS_DATA } from "@/lib/content/comparisons";

export const metadata: Metadata = pageMeta({
  title: "Best Central Austin Neighborhoods | A Local Guide (78703)",
  description:
    "A local guide to the best central Austin neighborhoods, Clarksville, Tarrytown, Old Enfield, Hyde Park, Zilker, and more, and how to tell which one fits you.",
  path: "/best-central-austin-neighborhoods",
  type: "article",
});

// Built from the vetted comparison data so every characterization is consistent
// with the dedicated comparison pages, no new or unsupported claims.
const neighborhoods = Object.values(COMPARISONS_DATA).map((c) => ({
  name: c.other,
  summary: c.otherFor,
  compareHref: `/${c.slug}`,
  siteHref: c.otherUrl,
}));

const FAQS = [
  {
    q: "What are the best neighborhoods in central Austin?",
    a: "Central Austin's most sought-after neighborhoods include Clarksville, Old Enfield, Tarrytown, Pemberton Heights, and Bryker Woods in the 78703 area west of downtown, along with Hyde Park near the university, Zilker and Travis Heights south of the river, Rosedale to the north, and West Lake Hills across the lake. The right one depends on what you value: walkability, schools, lot size, price, or historic character.",
  },
  {
    q: "What is the best walkable neighborhood in central Austin?",
    a: "Clarksville is among the most walkable neighborhoods in west Austin. Built around the West Lynn dining corridor and two miles from downtown, it lets residents walk to coffee, dinner, a grocery, galleries, and Pease Park. Hyde Park and Travis Heights are other strong walkable options, each with its own local main street.",
  },
  {
    q: "Which central Austin neighborhood has the best historic character?",
    a: "Clarksville, founded in 1871 as a freedmen's town and listed on the National Register of Historic Places, and neighboring Old Enfield, with its grand early-20th-century estates, are the standouts for historic character in central Austin. Hyde Park, Austin's first planned suburb, is another for streetcar-era Victorian and Craftsman homes.",
  },
  {
    q: "Where do wealthy families live in central Austin?",
    a: "Affluent central Austin buyers cluster in Old West Austin (Clarksville, Old Enfield, Tarrytown, and Pemberton Heights, all 78703) for historic estates and walkability, and in West Lake Hills across the lake for larger lots, hill-country privacy, and the top-rated Eanes schools. Each offers a different version of living well.",
  },
];

export default function BestNeighborhoodsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "best-central-austin-neighborhoods",
            title: "The Best Central Austin Neighborhoods: A Local Guide",
            description: "A local guide to the best central Austin neighborhoods and who each one suits.",
            date: "2026-11-05",
            updated: "2026-11-05",
            image: PHOTOS.canopy.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.canopy.src}
          alt={PHOTOS.canopy.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">A local guide</p>
            <h1 className="font-display mt-5 text-[2.7rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              The best neighborhoods in central Austin
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              An honest, even-handed map of where to live in the heart of Austin, from a specialist who
              works these blocks. No single neighborhood is best for everyone. Here is how to find yours.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Ask ten Austinites for the best central neighborhood and you will get ten answers,
              because they are answering different questions. The honest version depends on what you
              are optimizing for: walkability, schools, lot size, price, or the particular feeling of
              a street. This guide lays out the contenders and what each one is genuinely best at.
            </p>
            <p>
              Full disclosure on where I stand: I specialize in Clarksville, so I will tell you plainly
              why it tops my list, and then give every other neighborhood its honest due, with a
              side-by-side if you want to go deeper.
            </p>
          </div>
        </Container>
      </section>

      {/* FEATURED: CLARKSVILLE */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow tone="dark">The one I know best</Eyebrow>
              <h2 className="font-display mt-4 text-[2.3rem] leading-tight sm:text-[3rem]">
                Clarksville, 78703
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-cream-soft">
                A freedmen's town founded in 1871, two miles west of downtown: walkable, tree-canopied,
                and built around the West Lynn corridor. It is the rare central neighborhood that pairs
                genuine historic character with the ability to walk to dinner, a grocery, and a park,
                and still see the skyline from the porch. Small, protected, and scarce, which is why it
                holds its value.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/why-clarksville" className="btn btn-brass">
                  Why Clarksville
                </Link>
                <Link href="/clarksville-homes-for-sale" className="btn btn-ghost-light">
                  See homes for sale
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-white/10">
              <Image
                src={PHOTOS.westLynn.src}
                alt={PHOTOS.westLynn.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="img-grade object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* THE OTHER CONTENDERS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The other contenders</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Every neighborhood its honest due
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              Each of these is excellent for the right buyer. Tap through for a full side-by-side with
              Clarksville on price, walkability, schools, and character.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-2">
            {neighborhoods.map((n) => (
              <Reveal key={n.name} className="flex flex-col bg-paper p-7">
                <h3 className="font-display text-2xl text-ink">{n.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{n.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Link href={n.compareHref} className="font-label text-[0.58rem] text-brass-deep underline">
                    Clarksville vs {n.name} &rarr;
                  </Link>
                  {n.siteHref ? (
                    <a
                      href={n.siteHref}
                      className="font-label text-[0.58rem] text-muted underline hover:text-brass-deep"
                    >
                      {n.name} site
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="border-y border-line bg-cream py-20">
        <Container size="narrow">
          <Eyebrow>How to actually choose</Eyebrow>
          <h2 className="font-display mt-4 text-[2.1rem] leading-tight text-ink sm:text-[2.6rem]">
            Match the neighborhood to the question
          </h2>
          <div className="prose-clark mt-6 max-w-none">
            <p>
              If you want to <strong>walk everywhere</strong>, start with Clarksville, Hyde Park, or
              Travis Heights. If <strong>top-rated schools</strong> lead your list, West Lake Hills
              (Eanes) and the central Austin ISD neighborhoods deserve a hard look. If you want{" "}
              <strong>land and privacy</strong>, Tarrytown, Pemberton Heights, and West Lake Hills open
              up. For <strong>historic character</strong>, it is Clarksville, Old Enfield, and Hyde
              Park. And for the <strong>lowest entry price</strong>, Hyde Park and Rosedale tend to be
              friendlier than the 78703 core.
            </p>
            <p>
              The honest truth is that the right answer is usually a single afternoon spent walking two
              or three of these with someone who knows the blocks. That is a walk I am glad to take
              with you.
            </p>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Narrowing down central Austin?"
        body="Tell Luke what matters most, walkability, schools, space, budget, and he will tell you honestly which central Austin neighborhoods fit, and help you buy in the right one."
        intent="buy"
        cta="Get an honest neighborhood read"
      />

      {/* FAQ */}
      <section className="bg-paper py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Central Austin neighborhoods, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            Go deeper:{" "}
            <Link href="/clarksville-vs-austin-neighborhoods" className="font-semibold text-brass-deep underline">
              all Clarksville neighborhood comparisons
            </Link>
            , or{" "}
            <Link href="/neighborhood" className="font-semibold text-brass-deep underline">
              the Clarksville neighborhood guide
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
