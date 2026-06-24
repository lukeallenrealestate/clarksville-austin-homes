import type { MetadataRoute } from "next";
import { SITE_URL, NAV } from "@/lib/site";
import { ALL_GUIDES } from "@/lib/content/guides";
import { INSIGHTS } from "@/lib/content/insights";
import { CONDOS } from "@/lib/content/condos";
import { getActiveListings, DATA_AS_OF } from "@/lib/listings";

/**
 * Build-time sitemap covering the home hub, every spoke in the nav, each guide
 * and comparison, every condo building, and every individual listing detail
 * page. Data pages and listings change often, so they get a higher change
 * frequency and a lastmod tied to the latest MLS sync.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const dataDate = DATA_AS_OF ? new Date(DATA_AS_OF) : now;
  const listings = await getActiveListings();

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...NAV.map((n) => ({
      url: `${SITE_URL}${n.href}`,
      lastModified: n.fresh ? dataDate : now,
      changeFrequency: (n.fresh ? "daily" : "monthly") as "daily" | "monthly",
      priority: n.fresh ? 0.9 : 0.7,
    })),
    ...ALL_GUIDES.map((g) => ({
      url: `${SITE_URL}/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...INSIGHTS.map((i) => ({
      url: `${SITE_URL}/${i.slug}`,
      lastModified: new Date(i.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CONDOS.map((c) => ({
      url: `${SITE_URL}/clarksville-condos/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...listings.map((l) => ({
      url: `${SITE_URL}/clarksville-homes-for-sale/${l.slug}`,
      lastModified: dataDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
