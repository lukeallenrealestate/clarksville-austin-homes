import { LISTINGS_ARE_SAMPLE } from "@/lib/listings";

/**
 * Honest banner shown only while the site is serving labeled sample listings
 * (no MLS Grid sync yet). Prevents any misleading impression that placeholder
 * homes are live inventory. Disappears automatically once real data is synced.
 */
export function SampleNotice({ className = "" }: { className?: string }) {
  if (!LISTINGS_ARE_SAMPLE) return null;
  return (
    <div
      className={`rounded-[2px] border border-brass/40 bg-brass-soft px-4 py-3 text-sm text-ink-soft ${className}`}
    >
      <span className="font-label mr-2 text-brass-deep">Preview</span>
      These are clearly labeled sample homes for layout review. Live Clarksville MLS listings appear
      here once the feed is connected. For current availability, contact Luke directly.
    </div>
  );
}
