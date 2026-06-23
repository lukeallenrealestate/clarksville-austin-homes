import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

/**
 * Per-page metadata helper. Enforces the on-page SEO contract: a unique
 * intent-matched title, a description, a self-referencing canonical, and
 * OpenGraph / Twitter card data. OG/Twitter images are supplied site-wide by
 * the file-based opengraph-image convention, so pages only need text here.
 *
 * Keep titles under ~60 characters and descriptions under ~155. Always pin
 * "Clarksville, Austin" or "Clarksville 78703" so the page never reads as
 * Clarksville, Tennessee to a crawler or AI engine.
 */
export type PageMetaInput = {
  title: string;
  description: string;
  /** Route path beginning with "/" (e.g. "/clarksville-history"). */
  path: string;
  type?: "website" | "article";
};

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path;
  const absoluteUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
