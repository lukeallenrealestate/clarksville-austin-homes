import Image from "next/image";
import type { PhotoMeta } from "@/lib/photos";

/**
 * Optimized photo (next/image): automatic AVIF/WebP, lazy loading below the
 * fold, explicit dimensions so there is no layout shift, and the consistent
 * warm grade. Pass priority on the LCP/hero image only.
 */
export function Photo({
  photo,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  grade = true,
}: {
  photo: PhotoMeta;
  priority?: boolean;
  sizes?: string;
  className?: string;
  grade?: boolean;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      priority={priority}
      sizes={sizes}
      className={`h-auto w-full object-cover ${grade ? "img-grade " : ""}${className}`}
    />
  );
}
