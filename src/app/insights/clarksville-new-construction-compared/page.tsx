import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/ArticleShell";
import { InlineCta } from "@/components/ContactCta";
import { getInsight } from "@/lib/content/insights";
import { LINKS } from "@/lib/content/related";

const post = getInsight("insights/clarksville-new-construction-compared")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville New Construction Compared | Belvedere, Westline & More",
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
      lead="Clarksville rarely builds, so when it does, it matters. Here is how the neighborhood's boutique new-construction condominiums compare for a buyer."
      faqs={post.faqs}
      related={[LINKS.condos, LINKS.offMarket, LINKS.realtor, LINKS.market]}
      ctaHeading="Comparing Clarksville buildings?"
    >
      <p>
        New construction in Clarksville arrives in ones and tens, never hundreds. The historic
        district is small and largely protected, so the handful of boutique buildings that do get
        built are among the most sought-after product in central Austin. Four are worth knowing, and
        they suit very different buyers.
      </p>

      <h2>The Belvedere: full-service luxury on the trail</h2>
      <p>
        At 300 Pressler, on the eastern edge of Clarksville,{" "}
        <Link href="/clarksville-condos/the-belvedere">The Belvedere</Link> is the full-service
        option: concierge, secured garage parking, a fitness center, and direct access to the Ann and
        Roy Butler Hike-and-Bike Trail. It suits a buyer who wants amenities and a lock-and-leave
        lifestyle steps from the lake and the West Sixth scene.
      </p>

      <h2>Westline: space and privacy, lock-and-leave</h2>
      <p>
        <Link href="/clarksville-condos/westline">Westline</Link>, at 1406 West 9th, is a small
        managed community of single-family and townhouse-style residences with private two-car
        garages, roughly 1,990 to 3,511 square feet. It suits a buyer who wants the space and privacy
        of a house without the upkeep, at the top of the market.
      </p>

      <h2>The Clarksville: character, and the most accessible entry</h2>
      <p>
        <Link href="/clarksville-condos/the-clarksville">The Clarksville</Link>, at 1711 Enfield, is
        different again: ten character-driven, editorial homes in a reimagined mid-century building,
        sold entirely off-market from the high $300s. It is the most accessible way into new-ish
        Clarksville product, and one of the only ways to own in 78703 at that price. There are no
        public floor plans; you see it in person or not at all.
      </p>

      <InlineCta href="/clarksville-condos/the-clarksville" label="See The Clarksville">
        The most accessible entry, off-market from the high $300s.
      </InlineCta>

      <h2>How to choose</h2>
      <ul>
        <li>
          <strong>Want amenities and the trail?</strong> The Belvedere.
        </li>
        <li>
          <strong>Want house-like space, lock-and-leave?</strong> Westline.
        </li>
        <li>
          <strong>Want character at the most accessible price?</strong> The Clarksville.
        </li>
        <li>
          <strong>Want an oversized floor plan, resale?</strong> Look at The Colorfield on Baylor.
        </li>
      </ul>
      <p>
        Availability, pricing, and timelines shift with each sales cycle, and the best of it is often
        off-market. A{" "}
        <Link href="/clarksville-realtor">Clarksville specialist</Link> who tracks every building is
        the fastest way to see the right one before it is gone. Start with the full{" "}
        <Link href="/clarksville-condos">condo buildings guide</Link>.
      </p>
    </ArticleShell>
  );
}
