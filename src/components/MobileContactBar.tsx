import { AGENT } from "@/lib/site";

/**
 * Fixed call/text bar pinned to the bottom on small screens only. Unobtrusive,
 * not a modal. Most property searches happen on phones, so one-tap call and
 * text are always within reach.
 */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-paper/95 backdrop-blur lg:hidden">
      <a
        href={AGENT.phoneHref}
        className="flex items-center justify-center gap-2 border-r border-line py-3.5 text-sm font-semibold text-heritage"
      >
        Call Luke
      </a>
      <a
        href={AGENT.smsHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-brass-deep"
      >
        Text {AGENT.phone}
      </a>
    </div>
  );
}
