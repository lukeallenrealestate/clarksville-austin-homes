import Image from "next/image";
import type { ReactNode } from "react";
import type { PhotoMeta } from "@/lib/photos";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container, Eyebrow } from "./ui";
import type { Crumb } from "@/lib/schema";

/**
 * Editorial hero band for spoke pages: a warm-graded photograph under a heritage
 * scrim, with breadcrumbs, eyebrow, an H1, and an optional lead. Asymmetric, not
 * a centered stack. Use one photo per page; pass `priority` so it is the LCP.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  photo,
  crumbs,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  photo: PhotoMeta;
  crumbs: Crumb[];
  /** Optional small dated/source line under the lead (for market pages). */
  meta?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="img-grade object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      <div className="relative pb-14 pt-28 sm:pb-20 sm:pt-36">
        <Breadcrumbs items={crumbs} tone="dark" />
        <Container className="mt-8">
          <div className="max-w-3xl hero-rise">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h1 className="font-display mt-4 text-[2.5rem] font-medium leading-[1.04] tracking-tight text-paper sm:text-[3.4rem]">
              {title}
            </h1>
            {lead ? (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-soft">{lead}</p>
            ) : null}
            {meta ? <div className="mt-5">{meta}</div> : null}
          </div>
        </Container>
      </div>
    </section>
  );
}
