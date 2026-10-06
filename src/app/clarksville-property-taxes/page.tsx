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

export const metadata: Metadata = pageMeta({
  title: "Clarksville Property Taxes & Homestead Exemption | Austin 78703",
  description:
    "How property taxes work for a home in Clarksville, Austin (78703): the taxing entities behind your bill, the homestead exemption and 10% appraisal cap, key Travis County deadlines, and how to protest. General guidance, verify current figures with TCAD.",
  path: "/clarksville-property-taxes",
  type: "article",
});

// All figures are hedged and sourced. Rates and exemption amounts are set
// annually and by statute, so the page explains the mechanism and points to the
// authorities (TCAD, Travis County Tax Office, Texas Comptroller) rather than
// presenting any number as fixed. A disclaimer appears on the page.
const entities = [
  { name: "Austin ISD", note: "The school district, typically the largest single line on a Clarksville bill." },
  { name: "City of Austin", note: "Municipal services for the 78703 core." },
  { name: "Travis County", note: "County government and roads." },
  { name: "Central Health", note: "The Travis County healthcare district." },
  { name: "Austin Community College", note: "The ACC district levy." },
];

const exemptions = [
  {
    h: "General residence homestead",
    p: "Your primary residence qualifies for a homestead exemption that removes part of the home's value from taxation. In 2023 Texas raised the school-district homestead exemption to $100,000. Confirm the current amount with TCAD.",
  },
  {
    h: "The 10% appraisal cap",
    p: "Once a home is your homestead, its taxable value cannot rise more than 10% per year, excluding the value of new improvements. In a neighborhood that appreciates like Clarksville, this cap is the quiet workhorse of the bill.",
  },
  {
    h: "Local city and county exemptions",
    p: "The City of Austin and Travis County each grant their own homestead exemptions on top of the school exemption, so the relief stacks across entities.",
  },
  {
    h: "Over-65 and disabled",
    p: "Homeowners who are 65 or older or who have a qualifying disability receive additional exemptions and a school-tax ceiling that limits future school-tax increases.",
  },
];

const dates = [
  { d: "January 1", h: "Valuation date", p: "Your home's taxable value is assessed as of this date each year." },
  { d: "Spring", h: "Notice of appraised value", p: "TCAD mails your appraised value, usually in April or May." },
  { d: "May 15", h: "Protest deadline", p: "Protests are generally due by May 15, or 30 days after your notice, whichever is later." },
  { d: "January 31", h: "Taxes due", p: "Tax bills arrive in the fall and are due by January 31 of the following year." },
];

const FAQS = [
  {
    q: "How much are property taxes in Clarksville, Austin?",
    a: "A Clarksville home in 78703 is taxed by several entities together, including Austin ISD, the City of Austin, Travis County, Central Health, and Austin Community College. In recent years the combined rate has run in roughly the low 2 percent range of a home's taxable value, but rates are set every year, so confirm the current figure and your specific parcel with the Travis Central Appraisal District (TCAD).",
  },
  {
    q: "What is the homestead exemption in Travis County?",
    a: "The residence homestead exemption lowers the taxable value of your primary home. Texas increased the school-district homestead exemption to $100,000 in 2023, and the City of Austin and Travis County add their own homestead exemptions. Just as important, a homestead caps annual taxable-value increases at 10 percent, excluding new improvements. Apply through TCAD and verify current amounts there.",
  },
  {
    q: "Does Texas have a state income tax?",
    a: "No. Texas has no personal state income tax and leans more on property tax instead. That tradeoff, no tax on earnings against a higher property tax rate, is central to the math for anyone relocating to Austin, especially from a high-income-tax state like California.",
  },
  {
    q: "When is the property tax protest deadline in Travis County?",
    a: "Protests are generally due by May 15, or 30 days after the date on your notice of appraised value, whichever is later. You file the protest with TCAD. Many homeowners protest annually, and a local agent's recent comparable sales can support your case.",
  },
  {
    q: "How does the 10 percent homestead cap work in Austin?",
    a: "Once your home is your homestead, the appraisal district cannot increase its taxable (assessed) value by more than 10 percent in a single year, not counting the value of new improvements you make. In an appreciating neighborhood like Clarksville, the cap can hold your taxable value well below market value over time.",
  },
];

export default function PropertyTaxPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "clarksville-property-taxes",
            title: "Clarksville Property Taxes & Homestead Exemption | Austin 78703",
            description:
              "How property taxes and the homestead exemption work for a home in Clarksville, Austin (78703).",
            date: "2026-10-06",
            updated: "2026-10-06",
            image: PHOTOS.bungalow.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.bungalow.src}
          alt={PHOTOS.bungalow.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">Owning in 78703</p>
            <h1 className="font-display mt-5 text-[2.8rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              Property taxes in Clarksville, explained
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              What actually sits behind a Clarksville tax bill, how the homestead exemption and the
              10% cap protect you, and the dates that matter. Plain English, with the authorities to
              verify every number.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Texas makes a trade that surprises people moving in: there is no state income tax, and
              the state leans on property tax instead. For a buyer coming from California or another
              high-income-tax state, that tradeoff usually works in your favor, but it means the
              property tax line deserves real attention before you buy in Clarksville.
            </p>
            <p>
              The good news is that the system is more navigable than it looks. Your bill comes from a
              handful of named entities, the homestead exemption and a 10% appraisal cap do a lot of
              quiet work in your favor, and the deadlines are predictable once you know them.
            </p>
          </div>
        </Container>
      </section>

      {/* HOW THE BILL IS BUILT */}
      <section className="border-y border-line bg-cream py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>How your bill is built</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              Several entities, one bill
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              A Clarksville tax bill is the sum of rates set by each of these taxing entities. No
              single one sets your total.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[3px] border border-line bg-line">
            <div className="grid gap-px">
              {entities.map((e) => (
                <Reveal key={e.name} className="flex items-baseline gap-6 bg-paper p-6">
                  <span aria-hidden className="mt-2 h-[6px] w-[6px] shrink-0 rotate-45 bg-brass" />
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-display text-xl text-ink">{e.name}</span>
                    <span className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">{e.note}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Added together, the combined rate in the Clarksville area has recently run in roughly the
            low 2 percent range of a home's taxable value. Rates are reset every year, so treat that
            as a planning figure and confirm your parcel with{" "}
            <a href="https://traviscad.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-brass-deep underline">
              TCAD
            </a>
            .
          </p>
        </Container>
      </section>

      {/* HOMESTEAD / EXEMPTIONS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Where the savings live</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
              The homestead exemption and the cap
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              If the home is your primary residence, these are the levers that meaningfully lower what
              you pay. File once, benefit every year.
            </p>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {exemptions.map((x) => (
              <Reveal key={x.h} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{x.h}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-soft">{x.p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* KEY DATES */}
      <section className="border-y border-line bg-heritage py-20 text-paper">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="dark">The calendar</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.8rem]">
              Dates that matter
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dates.map((d) => (
              <Reveal key={d.d} className="rounded-[3px] border border-white/10 bg-heritage-soft p-6">
                <div className="font-display font-num text-xl text-brass">{d.d}</div>
                <h3 className="font-display mt-2 text-lg text-paper">{d.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-soft">{d.p}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist">
            Thinking the appraisal looks high? You can protest. A protest is generally due by May 15,
            and recent comparable sales make the case. This is one place a local agent earns the fee:
            ask Luke for Clarksville comps before you file.
          </p>
        </Container>
      </section>

      {/* THE CALIFORNIA TIE-IN */}
      <section className="bg-cream py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <h2 className="font-display text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
              The tradeoff that decides the math
            </h2>
            <p>
              For buyers relocating from a high-income-tax state, the honest comparison is simple:
              Texas charges you nothing on what you earn and more on what you own. For high earners,
              the absence of a state income tax frequently outweighs the higher property tax, but the
              only number that matters is yours.
            </p>
            <p>
              If you are weighing the move, the{" "}
              <Link href="/moving-to-austin-from-california" className="font-semibold text-brass-deep underline">
                moving to Austin from California
              </Link>{" "}
              guide puts this tradeoff in the full context of the relocation, and the{" "}
              <Link href="/what-is-my-clarksville-home-worth" className="font-semibold text-brass-deep underline">
                home valuation
              </Link>{" "}
              page is where owners start when a sale is on the horizon.
            </p>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Run the real numbers on a Clarksville home"
        body="Before you buy or sell in 78703, get a straight read on the tax picture for a specific home, from the current combined rate to the homestead and cap. Luke Allen walks you through it, no pressure."
        intent="value"
        showAddress
        cta="Ask Luke about a specific home"
      />

      {/* FAQ */}
      <section className="bg-paper py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Clarksville property taxes, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 rounded-[3px] border border-line bg-cream p-6">
            <p className="font-label text-[0.56rem] text-brass-deep">Verify and learn more</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              This page is general information, not tax or legal advice. Rates, exemptions, and
              deadlines change, so confirm the specifics for your property with the authorities:{" "}
              <a href="https://traviscad.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-brass-deep underline">
                Travis Central Appraisal District
              </a>
              ,{" "}
              <a href="https://tax.traviscountytx.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-brass-deep underline">
                Travis County Tax Office
              </a>
              , and the{" "}
              <a href="https://comptroller.texas.gov/taxes/property-tax/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brass-deep underline">
                Texas Comptroller
              </a>
              . Figures on this page reflect general conditions as of 2026.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
