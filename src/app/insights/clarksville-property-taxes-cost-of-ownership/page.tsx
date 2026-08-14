import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/ArticleShell";
import { InlineCta } from "@/components/ContactCta";
import { getInsight } from "@/lib/content/insights";
import { LINKS } from "@/lib/content/related";

const post = getInsight("insights/clarksville-property-taxes-cost-of-ownership")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Property Taxes and Cost of Ownership",
  description: post.description,
  path: `/${post.slug}`,
  type: "article",
});

export default function Page() {
  return (
    <ArticleShell
      guide={post}
      eyebrow="Clarksville Insights"
      parent={{ name: "Insights", path: "/insights" }}
      lead="The purchase price is only part of the picture. Here is what it actually costs to own a home in Clarksville, so there are no surprises after you close."
      faqs={post.faqs}
      related={[LINKS.market, LINKS.valuation, LINKS.buying, LINKS.condos]}
      ctaHeading="Want the full cost picture on a specific home?"
    >
      <p>
        Texas has no state income tax, and it makes up much of the difference through property taxes.
        For Clarksville buyers, that means the line item that matters most after your mortgage is the
        tax bill, and on a neighborhood where homes routinely trade above a million dollars, it is not
        a rounding error. Here is how to think about the real cost of ownership.
      </p>

      <h2>Property taxes</h2>
      <p>
        Clarksville sits in Travis County, where combined tax rates from the county, city, school
        district, and other entities typically land in the low-2-percent range of a home&rsquo;s
        assessed value. The exact rate shifts year to year. On a home assessed around $1.5 million,
        that can translate to roughly $30,000 or more per year before exemptions. Your assessed value
        is set by the{" "}
        <Link href="/clarksville-market-report">Travis Central Appraisal District</Link> (TCAD), not
        your purchase price, and you have the right to protest it.
      </p>

      <h2>Homestead exemption</h2>
      <p>
        If the home is your primary residence, a homestead exemption reduces the taxable value and
        caps how fast your assessed value can rise each year. It is one of the first things to file
        after closing, and it meaningfully lowers the annual bill. Confirm the current exemption
        amounts with TCAD.
      </p>

      <h2>HOA and condo dues</h2>
      <p>
        Single-family homes in Clarksville generally carry no HOA. Condominiums do, and the dues vary
        widely by building, from modest fees at established communities to full-service dues at luxury
        buildings that cover concierge, amenities, insurance, and reserves. Always confirm the exact
        dues and what they include before you offer. See the{" "}
        <Link href="/clarksville-condos">condo buildings guide</Link> for building-by-building context.
      </p>

      <InlineCta href="/what-is-my-clarksville-home-worth" label="Get a valuation">
        Buying or selling? Start with a real number.
      </InlineCta>

      <h2>Insurance and upkeep</h2>
      <p>
        Budget for homeowners insurance and, on Clarksville&rsquo;s many historic homes, specialized
        maintenance, older systems, foundations, and roofs cost more to keep right, and a landmark
        designation can add requirements. These are not reasons to avoid a historic home; they are
        reasons to buy one with eyes open and the right{" "}
        <Link href="/clarksville-realtor">local guidance</Link>.
      </p>

      <p className="text-sm text-muted">
        This article is general information, not tax or financial advice. Verify all rates,
        exemptions, and assessments with TCAD and qualified professionals for your specific property.
      </p>
    </ArticleShell>
  );
}
