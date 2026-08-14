import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/ArticleShell";
import { InlineCta } from "@/components/ContactCta";
import { getInsight } from "@/lib/content/insights";
import { LINKS } from "@/lib/content/related";

const post = getInsight("insights/selling-clarksville-home-off-market")!;

export const metadata: Metadata = pageMeta({
  title: "How to Sell a Clarksville Home Off-Market",
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
      lead="Not every seller wants a sign in the yard and a weekend of open houses. In a neighborhood as scarce and in-demand as Clarksville, a quiet sale can work beautifully."
      faqs={post.faqs}
      related={[LINKS.selling, LINKS.offMarket, LINKS.realtor, LINKS.market]}
      ctaHeading="Considering a quiet sale?"
    >
      <p>
        In most of the country, selling off-market means leaving money on the table. Clarksville is
        one of the places where it does not have to. Demand here consistently outruns supply, so a
        seller with the right agent can reach serious, qualified buyers privately, without ever
        posting the home on the MLS or Zillow.
      </p>

      <h2>Why sellers choose off-market in Clarksville</h2>
      <ul>
        <li>
          <strong>Privacy.</strong> No public photos, no address on the portals, no strangers walking
          through on a Sunday.
        </li>
        <li>
          <strong>Control.</strong> You choose who sees the home and when, and you test price without
          accumulating days on market.
        </li>
        <li>
          <strong>Convenience.</strong> A handful of qualified showings instead of a full public
          marketing cycle.
        </li>
        <li>
          <strong>Demand.</strong> In a scarce neighborhood, the buyers are already waiting. The
          right one often does not need a public listing to find your home.
        </li>
      </ul>

      <h2>How an off-market sale actually works</h2>
      <p>
        It starts with a real{" "}
        <Link href="/what-is-my-clarksville-home-worth">valuation on actual Clarksville comps</Link>,
        so you know your number. From there, Luke Allen quietly introduces the home to a network of
        qualified buyers and buyer&rsquo;s agents who are looking specifically in Clarksville and Old
        West Austin. When the right buyer appears, you negotiate privately and close, on your terms.
      </p>

      <InlineCta href="/what-is-my-clarksville-home-worth" label="Get my home value">
        Start with what your home is worth.
      </InlineCta>

      <h2>Is off-market right for you?</h2>
      <p>
        Not always. A public listing maximizes exposure and can spark competing offers, which is
        sometimes the better path to top dollar. An off-market sale trades some of that reach for
        privacy, control, and convenience. In Clarksville, where demand is deep, the gap is often
        smaller than sellers expect, which is exactly why it is worth a conversation rather than a
        default.
      </p>
      <p>
        The honest answer depends on your home, your timing, and your goals. Read the full{" "}
        <Link href="/sell-your-clarksville-home">guide to selling in Clarksville</Link>, explore how{" "}
        <Link href="/off-market-clarksville-homes">off-market works for buyers</Link>, and reach out
        to talk it through with a specialist who does both.
      </p>
    </ArticleShell>
  );
}
