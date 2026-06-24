import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/ArticleShell";
import { InlineCta } from "@/components/ContactCta";
import { getInsight } from "@/lib/content/insights";
import { LINKS } from "@/lib/content/related";

const post = getInsight("insights/is-clarksville-a-good-investment")!;

export const metadata: Metadata = pageMeta({
  title: "Is Clarksville, Austin a Good Investment in 2026?",
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
      lead="The investment case for Clarksville rests on three words: scarcity, protection, and demand. Here is the honest version, with the numbers and the risks."
      faqs={post.faqs}
      related={[LINKS.market, LINKS.condos, LINKS.architecture, LINKS.realtor]}
      ctaHeading="Thinking about a Clarksville purchase?"
    >
      <p>
        Clarksville is one of the rare Austin neighborhoods where the investment thesis is structural
        rather than speculative. It is not a bet on a corridor that might gentrify. It is one of the
        oldest <Link href="/clarksville-history">freedmen&rsquo;s towns</Link> west of the
        Mississippi, a National Register district since 1976, roughly ten walkable blocks west of
        downtown where almost nothing about the supply can change. That scarcity, paired with durable
        demand, is the whole argument.
      </p>

      <h2>The scarcity is built in, not cyclical</h2>
      <p>
        Most neighborhoods can add supply when prices rise. Clarksville largely cannot. The core
        historic district is small, the lots are small, and{" "}
        <Link href="/clarksville-architecture">historic landmark rules</Link> constrain what can be
        demolished or rebuilt on protected addresses. New construction does happen, the boutique
        condominiums at The Belvedere, Westline, and The Clarksville are proof, but it arrives in
        ones and tens, not hundreds. The result is a market that runs persistently low on inventory,
        which puts a durable floor under values.
      </p>

      <h2>Demand has anchors that do not move</h2>
      <p>
        Scarcity only matters if people keep wanting in, and Clarksville&rsquo;s demand drivers are
        unusually permanent. The <Link href="/clarksville-restaurants">West Lynn dining corridor</Link>{" "}
        (Jeffrey&rsquo;s, Josephine House, Cipollina, Clark&rsquo;s Oyster Bar) is a destination in
        its own right. The neighborhood is genuinely walkable, minutes from downtown and Lady Bird
        Lake, shaded by a mature tree canopy, and zoned to top-ranked{" "}
        <Link href="/clarksville-schools">Mathews Elementary</Link>. None of those anchors is going
        anywhere, which is exactly what long-term value wants.
      </p>

      <h2>What the numbers say (and why to date them)</h2>
      <p>
        Per a Keenan Group at Compass MLS polygon snapshot dated June 23, 2026, Clarksville
        single-family homes carried a median sold price of about $1.6M on 31 trailing-12-month sales,
        roughly $761 per square foot, about 87 days on market, and only 2.7 months of supply at an 89
        percent sale-to-list ratio. A broader CurbScout read from March 2026, which mixes condos and
        single-family homes, put the median nearer $1.1M, with Clarksville listings running about 63
        percent condo and 37 percent single-family. Broader 78703 home value runs around $1.5M, and
        the luxury ceiling keeps climbing, Westline residences have been priced to roughly $3.4M.
      </p>
      <p>
        A caution that matters: because so few homes sell in any given month, single-month medians
        swing wildly and are unreliable. Lean on trailing-12-month figures, and verify everything live
        before you buy. The dated, sourced numbers live on the{" "}
        <Link href="/clarksville-market-report">Clarksville market report</Link>.
      </p>

      <h2>The risks to weigh first</h2>
      <ul>
        <li>
          <strong>Small-sample volatility.</strong> Thin transaction volume makes month-to-month
          price reads noisy. This is a hold, not a flip.
        </li>
        <li>
          <strong>Landmark constraints.</strong> On a protected address, you may not be able to
          renovate, expand, or redevelop the way a value-add investor would want. Run a designation
          check before you assume upside.
        </li>
        <li>
          <strong>Premium entry and carrying costs.</strong> Entry prices are high, and condos carry
          HOA dues. The thesis is durable value and lifestyle, not cash-flow yield.
        </li>
        <li>
          <strong>Condo versus single-family.</strong> Land-backed single-family homes are the
          scarcest asset; condos offer a lower entry and lock-and-leave ease. They behave differently.
        </li>
      </ul>

      <InlineCta href="/buying-in-clarksville" label="How buying works here">
        Want the off-market angle on Clarksville?
      </InlineCta>

      <h2>Who Clarksville suits as an investment</h2>
      <p>
        Clarksville rewards the patient buyer who wants a scarce, protected, lifestyle-rich asset that
        holds value through cycles, not a quick-turn play. If that is you, the move is to pair the
        scarcity thesis with disciplined pricing and, often, off-market access. A{" "}
        <Link href="/clarksville-realtor">Clarksville specialist</Link> who values homes on real
        closed-sale data and sees deals before they hit the portals is the difference between buying
        the thesis and overpaying for it.
      </p>
    </ArticleShell>
  );
}
