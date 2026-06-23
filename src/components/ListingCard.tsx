import Image from "next/image";
import Link from "next/link";
import { type Listing, usd, CATEGORY_LABEL } from "@/lib/listings";
import { Pill } from "./ui";

/**
 * Editorial listing card: large warm-graded photograph, address, price, and the
 * core specs in tabular figures. One neighborhood/category tag. Links to the
 * server-rendered detail page. When a listing has no downloaded photo (sample
 * data), a textured fallback panel stands in so the layout never breaks.
 */
export function ListingCard({ listing, priority = false }: { listing: Listing; priority?: boolean }) {
  const photo = listing.photos?.[0];
  const tag = listing.building
    ? listing.building
    : CATEGORY_LABEL[listing.categories[0] ?? "single-family"];

  return (
    <Link
      href={`/clarksville-homes-for-sale/${listing.slug}`}
      className="group flex flex-col overflow-hidden rounded-[3px] border border-line bg-paper transition-colors hover:border-brass/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-cream to-sand">
            <span className="font-display text-2xl text-brass/60">Clarksville</span>
          </div>
        )}
        <div className="absolute left-3 top-3 flex gap-1.5">
          <Pill tone="brass">{tag}</Pill>
          {listing.status === "pending" ? <Pill>Pending</Pill> : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="font-display font-num text-2xl text-ink">{usd(listing.price)}</div>
        <div className="mt-1 text-sm text-ink-soft">
          {listing.address}
          {listing.unit ? `, ${listing.unit}` : ""}
        </div>
        <div className="font-num mt-4 flex items-center gap-3 border-t border-line pt-3 text-sm text-muted">
          <span>
            <span className="text-ink">{listing.beds}</span> bd
          </span>
          <span aria-hidden className="text-line">
            &middot;
          </span>
          <span>
            <span className="text-ink">{listing.baths}</span> ba
          </span>
          <span aria-hidden className="text-line">
            &middot;
          </span>
          <span>
            <span className="text-ink">{listing.sqft.toLocaleString()}</span> sf
          </span>
          {listing.yearBuilt ? (
            <>
              <span aria-hidden className="ml-auto text-line">
                {listing.yearBuilt}
              </span>
            </>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
