"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { ListingPhoto } from "@/lib/listings";

/**
 * Listing photo gallery with a full-screen lightbox. The grid shows a magazine
 * collage (one hero + thumbnails); clicking any photo, or the "View all" button,
 * opens a lightbox to browse every image with arrow keys, on-screen controls,
 * swipe on touch, and a thumbnail strip. Reuses next/image so each frame is
 * optimized and never causes layout shift.
 */
export function ListingGallery({
  photos,
  title,
}: {
  photos: ListingPhoto[];
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const count = photos.length;

  const show = useCallback(
    (i: number) => {
      setIndex(((i % count) + count) % count);
      setOpen(true);
    },
    [count],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Keyboard navigation + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev]);

  if (!count) {
    return (
      <div className="flex aspect-[16/7] items-center justify-center rounded-[3px] border border-line bg-gradient-to-br from-cream to-sand">
        <span className="font-display text-3xl text-brass/60">Photography on request</span>
      </div>
    );
  }

  // Touch swipe for the lightbox.
  let touchX = 0;
  const onTouchStart = (e: React.TouchEvent) => (touchX = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 50) prev();
    else if (dx < -50) next();
  };

  return (
    <>
      {/* Collage grid */}
      <div className="grid gap-2 sm:grid-cols-4 sm:grid-rows-2">
        <button
          type="button"
          onClick={() => show(0)}
          className="group relative aspect-[4/3] overflow-hidden rounded-[3px] sm:col-span-2 sm:row-span-2 sm:aspect-auto"
          aria-label={`Open photo 1 of ${count}`}
        >
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </button>
        {photos.slice(1, 5).map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => show(i + 1)}
            className="group relative hidden aspect-[4/3] overflow-hidden rounded-[3px] sm:block"
            aria-label={`Open photo ${i + 2} of ${count}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="25vw"
              className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* "View all" overlay on the last visible tile when there are more. */}
            {i === 3 && count > 5 ? (
              <span className="absolute inset-0 flex items-center justify-center bg-ink/55 font-display text-xl text-paper">
                View all {count}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => show(0)}
        className="btn btn-outline mt-3 w-full sm:w-auto"
      >
        View all {count} photos
      </button>

      {/* Lightbox */}
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-ink/96 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo gallery`}
        >
          <div className="flex items-center justify-between px-5 py-4 text-paper">
            <span className="font-num text-sm text-cream-soft">
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-label rounded-[2px] border border-paper/30 px-3 py-1.5 text-[0.62rem] text-paper transition-colors hover:border-brass hover:text-brass"
            >
              Close
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-2 sm:px-16"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 bg-ink/40 text-2xl text-paper transition-colors hover:border-brass hover:text-brass sm:left-4"
            >
              &#8249;
            </button>

            <div className="relative h-full w-full max-w-5xl">
              <Image
                key={photos[index].src}
                src={photos[index].src}
                alt={photos[index].alt}
                fill
                sizes="100vw"
                className="img-grade object-contain"
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 bg-ink/40 text-2xl text-paper transition-colors hover:border-brass hover:text-brass sm:right-4"
            >
              &#8250;
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 overflow-x-auto px-4 py-4">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-[2px] border-2 transition-colors ${
                  i === index ? "border-brass" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={p.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
