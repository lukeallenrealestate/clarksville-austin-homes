/**
 * Thin analytics helpers shared by the lead form and page tracker. Both GA4 and
 * the Meta Pixel are loaded in <Analytics>; these functions push events only if
 * the respective global is present, so nothing breaks before IDs are set.
 */
export type LeadIntent = "buy" | "sell" | "value" | "general";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a lead conversion to GA4 and the Meta Pixel after a successful submit. */
export function trackLead(intent: LeadIntent = "general") {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", { intent });
  window.fbq?.("track", "Lead", { content_category: intent });
}

/** Record a SPA page view (GA4 + Pixel) on client-side route changes. */
export function trackPageView(url: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "page_view", { page_location: url });
  window.fbq?.("track", "PageView");
}
