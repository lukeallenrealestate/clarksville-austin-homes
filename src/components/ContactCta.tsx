import Link from "next/link";
import Image from "next/image";
import { AGENT } from "@/lib/site";
import { PHOTOS } from "@/lib/photos";
import { LeadForm } from "./LeadForm";
import { Container, Eyebrow } from "./ui";
import type { LeadIntent } from "@/lib/analytics";

/**
 * Soft, value-first conversion band used at the foot of most pages. Pairs the
 * agent's identity (E-E-A-T + TREC visibility) with a non-aggressive lead form.
 * One clear action: start a conversation with Luke.
 */
export function ContactCta({
  heading = "Talk with a Clarksville specialist",
  body = "Whether you are years from a move or ready this season, Luke Allen answers Clarksville questions personally: which blocks fit your life, what a specific home is really worth, and when the right listing is coming.",
  intent = "general",
  showAddress = false,
  cta = "Send Message",
}: {
  heading?: string;
  body?: string;
  intent?: LeadIntent;
  showAddress?: boolean;
  cta?: string;
}) {
  return (
    <section className="bg-heritage py-20 text-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow tone="dark">Work with Luke</Eyebrow>
            <h2 className="font-display mt-4 text-[2.1rem] font-medium leading-[1.1] sm:text-[2.6rem]">
              {heading}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream-soft">{body}</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-brass/40">
                <Image
                  src={PHOTOS.luke.src}
                  alt={PHOTOS.luke.alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-xl text-paper">{AGENT.name}</p>
                <p className="text-sm text-cream-soft">
                  {AGENT.title}, TREC #{AGENT.trecLicense}
                </p>
                <p className="text-sm text-cream-soft/80">{AGENT.brokerage}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={AGENT.phoneHref} className="btn btn-brass">
                Call {AGENT.phone}
              </a>
              <a href={AGENT.smsHref} className="btn btn-ghost-light">
                Text Luke
              </a>
            </div>
          </div>

          <div className="rounded-[3px] border border-white/10 bg-paper p-6 sm:p-8">
            <LeadForm defaultIntent={intent} showAddress={showAddress} cta={cta} />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Inline text CTA used inside articles, linking to the contact page. */
export function InlineCta({
  children = "Have a Clarksville question?",
  href = "/contact",
  label = "Ask Luke",
}: {
  children?: React.ReactNode;
  href?: string;
  label?: string;
}) {
  return (
    <div className="my-8 flex flex-col gap-3 rounded-[3px] border-l-2 border-brass bg-cream px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-display text-xl text-ink">{children}</p>
      <Link href={href} className="btn btn-heritage whitespace-nowrap">
        {label}
      </Link>
    </div>
  );
}
