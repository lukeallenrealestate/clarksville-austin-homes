"use client";

import { useMemo, useState } from "react";
import { ListingCard } from "./ListingCard";
import type { Listing, Category } from "@/lib/listings";
import { CATEGORY_LABEL } from "@/lib/listings";

/**
 * Client-side filter + sort over a server-supplied listing array. The initial
 * render (all listings) is server-rendered to HTML by the App Router, so the
 * data is fully crawlable; the filter only re-orders what is already present.
 */
type Sort = "price-desc" | "price-asc" | "newest" | "sqft-desc";

const SORTS: { value: Sort; label: string }[] = [
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "newest", label: "Newest" },
  { value: "sqft-desc", label: "Largest" },
];

const FILTERS: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "single-family", label: CATEGORY_LABEL["single-family"] },
  { value: "condo", label: CATEGORY_LABEL["condo"] },
  { value: "luxury", label: CATEGORY_LABEL["luxury"] },
  { value: "new-construction", label: CATEGORY_LABEL["new-construction"] },
  { value: "bungalow", label: CATEGORY_LABEL["bungalow"] },
];

export function ListingsBrowser({
  listings,
  lockedCategory,
}: {
  listings: Listing[];
  /** When set, the type filter is fixed (used on category pages). */
  lockedCategory?: Category;
}) {
  const [filter, setFilter] = useState<Category | "all">(lockedCategory ?? "all");
  const [sort, setSort] = useState<Sort>("price-desc");

  const shown = useMemo(() => {
    let out = listings;
    if (filter !== "all") out = out.filter((l) => l.categories.includes(filter));
    const by: Record<Sort, (a: Listing, b: Listing) => number> = {
      "price-desc": (a, b) => b.price - a.price,
      "price-asc": (a, b) => a.price - b.price,
      newest: (a, b) => (b.listDate ?? "").localeCompare(a.listDate ?? ""),
      "sqft-desc": (a, b) => b.sqft - a.sqft,
    };
    return [...out].sort(by[sort]);
  }, [listings, filter, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-line py-4">
        {!lockedCategory ? (
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`font-label rounded-[2px] border px-3 py-1.5 text-[0.6rem] transition-colors ${
                  filter === f.value
                    ? "border-heritage bg-heritage text-paper"
                    : "border-line bg-paper text-ink-soft hover:border-brass/50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="font-num text-sm text-muted">
            {shown.length} {shown.length === 1 ? "home" : "homes"}
          </p>
        )}

        <label className="flex items-center gap-2 text-sm text-muted">
          <span className="font-label text-[0.58rem]">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-[2px] border border-line bg-paper px-2.5 py-1.5 text-sm text-ink focus:border-brass focus:outline-none"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {shown.length ? (
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((l, i) => (
            <ListingCard key={l.id} listing={l} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[3px] border border-line bg-cream p-10 text-center">
          <p className="font-display text-2xl text-ink">No matching homes are active right now.</p>
          <p className="mt-2 text-sm text-ink-soft">
            Clarksville inventory is thin by nature. Ask Luke to set up a saved search so you hear
            first when the right home lists.
          </p>
        </div>
      )}
    </div>
  );
}
