import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { PHOTOS } from "@/lib/photos";
import { AGENT, TREC, NEIGHBORHOOD } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact Luke Allen | Clarksville Austin Real Estate (78703)",
  description:
    "Talk with Luke Allen, a Clarksville and Old West Austin specialist. Call or text 254-718-2567, email luke@austinmdg.com, or send a message about buying or selling in 78703.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Luke Allen"
        lead="The fastest way to a straight answer about Clarksville. Call, text, or send a note, and Luke follows up personally, usually the same day."
        photo={PHOTOS.haskellHouse}
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="bg-paper py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1.6fr] lg:items-start">
          <div>
            <Eyebrow>Direct line</Eyebrow>
            <div className="mt-5 space-y-4">
              <a
                href={AGENT.phoneHref}
                className="block rounded-[3px] border border-line bg-cream p-5 transition-colors hover:border-brass/50"
              >
                <span className="font-label text-[0.55rem] text-muted">Call or text</span>
                <p className="font-display text-2xl text-ink">{AGENT.phone}</p>
              </a>
              <a
                href={`mailto:${AGENT.email}`}
                className="block rounded-[3px] border border-line bg-cream p-5 transition-colors hover:border-brass/50"
              >
                <span className="font-label text-[0.55rem] text-muted">Email</span>
                <p className="font-display text-2xl text-ink">{AGENT.email}</p>
              </a>
            </div>

            <div className="mt-6 rounded-[3px] border border-line bg-cream p-5 text-sm leading-relaxed text-ink-soft">
              <p className="text-ink">{AGENT.name}, {AGENT.title}</p>
              <p>TREC License #{AGENT.trecLicense}</p>
              <p>{AGENT.brokerage}</p>
              <p className="mt-2 text-muted">
                Serving Clarksville and Old West Austin, {NEIGHBORHOOD.cityState} {NEIGHBORHOOD.zip}.
              </p>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted">
              Required disclosures:{" "}
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
              . Independent resource, not affiliated with any developer, HOA, or the City of Austin.
            </p>
          </div>

          <div className="rounded-[3px] border border-line bg-cream p-7 sm:p-8">
            <h2 className="font-display text-2xl text-ink">Send a message</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Tell Luke what you are after. Buying, selling, a valuation, or just a Clarksville
              question, there is no wrong reason to reach out.
            </p>
            <div className="mt-6">
              <LeadForm defaultIntent="general" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
