import type { Metadata } from "next";
import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, SectionHeading, Stat } from "@/components/ui";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS } from "@/lib/photos";
import { AGENT, TREC } from "@/lib/site";
import { LINKS } from "@/lib/content/related";

export const metadata: Metadata = pageMeta({
  title: "About Luke Allen | Clarksville Austin REALTOR (TREC #788149)",
  description:
    "Luke Allen is a licensed Texas REALTOR with Austin Marketing + Development Group specializing in Clarksville and Old West Austin (78703), with original neighborhood expertise.",
  path: "/about",
});

const expertise = [
  "Single-neighborhood focus on Clarksville and the Old West Austin Historic District",
  "Hands-on knowledge of local historic landmark designations and what they mean for renovation",
  "Building-by-building familiarity with new construction: The Belvedere, Westline, and more",
  "Hyperlocal valuations built on trailing-12-month MLS data, not automated estimates",
  "Off-market relationships in a low-inventory, high-intent market",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Your Clarksville Specialist"
        title="Meet Luke Allen"
        lead="A licensed Texas REALTOR who works Clarksville as a specialty, not a side note. The expertise on this site is his: the blocks, the buildings, the history, and the numbers."
        photo={PHOTOS.streetscape}
        crumbs={[{ name: "About Luke", path: "/about" }]}
      />

      <section className="bg-paper py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1.6fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[3px] border border-line">
              <Image
                src={PHOTOS.luke.src}
                alt={PHOTOS.luke.alt}
                width={PHOTOS.luke.width}
                height={PHOTOS.luke.height}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-5 rounded-[3px] border border-line bg-cream p-6">
              <p className="font-display text-2xl text-ink">{AGENT.name}</p>
              <p className="text-sm text-ink-soft">{AGENT.title}</p>
              <dl className="font-num mt-4 space-y-1.5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">TREC License</dt>
                  <dd className="text-ink">#{AGENT.trecLicense}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Brokerage</dt>
                  <dd className="text-right text-ink">{AGENT.brokerage}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-col gap-2">
                <a href={AGENT.phoneHref} className="btn btn-heritage w-full">
                  Call {AGENT.phone}
                </a>
                <a href={`mailto:${AGENT.email}`} className="btn btn-outline w-full">
                  Email Luke
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="prose-clark">
              <p>
                I am Luke Allen, a licensed Texas REALTOR with Austin Marketing + Development Group,
                and Clarksville is the neighborhood I know best. This site exists because the big
                portals treat a place this specific as just another set of listings. Clarksville is
                not. It is a 150-year-old freedmen&rsquo;s town with its own history, its own rules,
                and its own logic, and buying or selling well here depends on knowing all three.
              </p>
              <p>
                My approach is simple: do the homework the algorithms cannot. That means walking the
                blocks, tracking every condo building&rsquo;s real status, pulling designation
                records before an offer, and pricing from trailing-12-month MLS data rather than a
                national estimate that swings on a single sale. The guides on this site are written
                from that work, not scraped from somewhere else.
              </p>
              <p>
                Whether you are years from a move or ready this season, I am glad to be a resource
                first and an agent second. Ask me anything about Clarksville, and I will give you a
                straight, local answer.
              </p>
            </div>

            <div className="mt-10">
              <Eyebrow>What I bring</Eyebrow>
              <ul className="mt-5 grid gap-2.5">
                {expertise.map((e) => (
                  <li key={e} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-2 h-[5px] w-[5px] shrink-0 rotate-45 bg-brass" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              <Stat value="78703" label="The focus" />
              <Stat value="1871" label="History I know" />
              <Stat value="Local" label="Every valuation" />
            </div>

            <p className="mt-8 text-xs leading-relaxed text-muted">
              {AGENT.name}, {AGENT.title}, TREC License #{AGENT.trecLicense}, sponsored by{" "}
              {AGENT.brokerage}. Required disclosures:{" "}
              <a href={TREC.iabsUrl} target="_blank" rel="noopener noreferrer" className="text-brass-deep underline">
                Information About Brokerage Services
              </a>{" "}
              and the{" "}
              <a
                href={TREC.consumerProtectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass-deep underline"
              >
                TREC Consumer Protection Notice
              </a>
              . This is an independent resource and is not the official site of any developer, HOA, or
              the City of Austin.
            </p>
          </div>
        </Container>
      </section>

      <RelatedLinks links={[LINKS.realtor, LINKS.neighborhood, LINKS.buying, LINKS.selling]} />
      <ContactCta heading="Let's talk about Clarksville" />
    </>
  );
}
