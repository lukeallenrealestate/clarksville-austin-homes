import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Explicitly welcome the major search and AI crawlers (the brief calls for
 * crawlable, AI-citable content). A blanket allow already covers them, but
 * naming the AI agents documents intent and avoids ambiguity. Only /api is
 * disallowed.
 */
const AI_AGENTS = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/", disallow: "/api/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
