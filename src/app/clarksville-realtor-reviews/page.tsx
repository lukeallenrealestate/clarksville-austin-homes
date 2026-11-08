import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow, Stat } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { realtorProfileSchema, faqSchema } from "@/lib/schema";
import { REVIEWS, REVIEW_AGG, PROFILE_STATS, GOOGLE_PROFILE_URL } from "@/lib/content/realtor";
import { fmtDate } from "@/lib/content/guides";
import { AGENT } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Luke Allen Reviews | Clarksville Realtor (TREC #788149)",
  description:
    "Client reviews for Luke Allen, a Clarksville, Austin REALTOR: a 5.0 rating from verified Google reviews. Read what buyers and sellers say about working with him.",
  path: "/clarksville-realtor-reviews",
  type: "article",
});

function Stars() {
  return (
    <span aria-hidden className="text-brass">
      {"★★★★★"}
    </span>
  );
}

const FAQS = [
  {
    q: "What is Luke Allen's rating as a realtor?",
    a: `Luke Allen holds a ${REVIEW_AGG.ratingValue}.0 star rating from ${REVIEW_AGG.reviewCount} verified Google reviews. He is a licensed Texas REALTOR (TREC #${AGENT.trecLicense}) with Austin Marketing + Development Group who specializes in Clarksville and the Old West Austin area of 78703.`,
  },
  {
    q: "Is Luke Allen a good realtor for buying or selling in Clarksville?",
    a: "Clients consistently describe Luke as responsive, knowledgeable, honest, and genuinely invested in finding the right fit rather than any option. Beyond the reviews, he specializes in Clarksville specifically, sits on the sales team for The Clarksville Condominiums, and works both on-market and off-market homes, the kind of hyperlocal focus a general Austin agent does not have.",
  },
  {
    q: "Where can I read Luke Allen's reviews?",
    a: "Luke's verified client reviews are on his Google Business Profile. The reviews on this page are drawn from there. You can read them all, and leave your own, on Google.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={[realtorProfileSchema(), faqSchema(FAQS)]} />

      {/* HERO */}
      <section className="bg-ink pb-16 pt-36 text-paper">
        <Container>
          <div className="max-w-3xl">
            <p className="font-label text-brass">What clients say</p>
            <h1 className="font-display mt-4 text-[2.6rem] font-medium leading-[1.03] text-paper sm:text-[3.9rem]">
              Reviews for Luke Allen
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="font-display text-3xl text-brass">{REVIEW_AGG.ratingValue}.0</span>
              <Stars />
              <span className="text-sm text-cream-soft">
                {REVIEW_AGG.reviewCount} verified Google reviews
              </span>
            </div>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-soft">
              Choosing an agent comes down to trust. Here is what buyers and sellers say about working
              with a Clarksville specialist, in their own words.
            </p>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brass mt-7"
            >
              Read and leave reviews on Google
            </a>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-b border-line bg-cream py-12">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {PROFILE_STATS.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} sub={s.sub} />
            ))}
          </div>
        </Container>
      </section>

      {/* REVIEWS */}
      <section className="bg-paper py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((r) => (
              <Reveal key={r.author} className="flex flex-col rounded-[4px] border border-line bg-cream p-7">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="font-label text-[0.56rem] text-muted">{fmtDate(r.date)}</span>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{r.text}</p>
                <p className="font-display mt-5 text-lg text-ink">{r.author}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-xs leading-relaxed text-muted">
            Reviews are real, verified Google reviews supplied from Luke Allen&rsquo;s Google Business
            Profile. Individual results vary.
          </p>
        </Container>
      </section>

      <ContactCta
        heading="Work with a realtor people trust"
        body="Whether you are buying or selling in Clarksville, Luke brings the same responsive, honest, hyperlocal approach these clients describe. Start a conversation, no pressure."
        intent="general"
        cta="Talk with Luke"
      />

      {/* FAQ */}
      <section className="border-t border-line bg-cream py-16">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            About Luke Allen, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
