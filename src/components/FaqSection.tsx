import { JsonLd } from "./JsonLd";
import { faqSchema, type Faq } from "@/lib/schema";
import { Container, SectionHeading } from "./ui";

/**
 * Visible Q&A block plus FAQPage JSON-LD. Answers are written as direct,
 * extractable statements (good for AI Overviews / answer engines). Attach this
 * only to the page that actually answers each question so the schema matches.
 */
export function FaqSection({
  faqs,
  title = "Clarksville questions, answered",
  eyebrow = "Good to know",
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-t border-line bg-cream py-20">
      <Container>
        <JsonLd data={faqSchema(faqs)} />
        <SectionHeading eyebrow={eyebrow} title={title} />
        <dl className="mt-12 grid gap-x-14 gap-y-9 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-display text-xl text-ink">{f.q}</dt>
              <dd className="mt-2.5 leading-relaxed text-ink-soft">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
