import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS, type PhotoMeta } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "The Story of Clarksville | A Freedmen's Town Timeline (1871 to Today)",
  description:
    "The story of Clarksville, Austin in a visual timeline: from Charles Clark's 1871 land purchase to the National Register in 1976 and the coveted neighborhood it is today.",
  path: "/story-of-clarksville",
  type: "article",
});

type Event = {
  year: string;
  title: string;
  body: string;
  photo?: PhotoMeta;
};

const timeline: Event[] = [
  {
    year: "1871",
    title: "A freedman buys two acres",
    body: "Charles Clark, born enslaved in Mississippi about 1820, buys two acres a half mile west of Austin's city limits and builds his home at 1618 West 10th Street. He subdivides the land and sells parcels to other freedmen. A neighborhood is born.",
    photo: PHOTOS.streetscape,
  },
  {
    year: "1871",
    title: "A church at the center",
    body: "Sweet Home Missionary Baptist Church is founded, with Rev. Jacob Fontaine as its first minister. For over 150 years it will remain the spiritual and social cornerstone of the community.",
    photo: PHOTOS.church,
  },
  {
    year: "c. 1875 to 1887",
    title: "The Haskell House rises",
    body: "The Hezikiah Haskell House is built on Waterston Avenue, a simple hall-and-parlor home. It survives to this day as a City of Austin Local Historic Landmark and one of the clearest links to the founding generation.",
    photo: PHOTOS.haskellHouse,
  },
  {
    year: "1917",
    title: "The Clarksville School opens",
    body: "The Clarksville Colored School begins educating the neighborhood's children. It will serve the community until 1965; today the site is Mary Baylor Clarksville Park.",
  },
  {
    year: "1935",
    title: "A new sanctuary",
    body: "Sweet Home Missionary Baptist Church completes the sanctuary at 1725 West 11th Street that still holds service today, anchoring the neighborhood through a changing century.",
  },
  {
    year: "1971",
    title: "MoPac cuts through",
    body: "Construction of MoPac (Loop 1) severs the western edge of the community. Families are relocated, and the number of homes in Clarksville falls from 162 in 1970 to fewer than 100 by 1976. The neighborhood's survival is suddenly in question.",
  },
  {
    year: "1976",
    title: "A stand, and a place on the register",
    body: "Residents defeat a planned thoroughfare that would have cut through the neighborhood, and the Clarksville Community Development Corporation forms to preserve its character. That same year, Clarksville is listed on the National Register of Historic Places, recognized as one of the oldest freedmen's towns west of the Mississippi.",
    photo: PHOTOS.bungalow,
  },
  {
    year: "Today",
    title: "A protected, living neighborhood",
    body: "The story continues on restored cottage porches and along the West Lynn corridor. Clarksville is now one of Austin's most coveted addresses, walkable, historic, and fiercely loved, and its history is the reason it feels the way it does.",
    photo: PHOTOS.westLynn,
  },
];

export default function StoryOfClarksville() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: "story-of-clarksville",
          title: "The Story of Clarksville: A Freedmen's Town Timeline",
          description: "The story of Clarksville, Austin in a visual timeline, 1871 to today.",
          date: "2026-08-19",
          updated: "2026-08-19",
          image: PHOTOS.church.src,
        })}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-ink">
        <Image src={PHOTOS.streetscape.src} alt={PHOTOS.streetscape.alt} fill priority sizes="100vw" className="img-grade object-cover object-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">1871 to Today</p>
            <h1 className="font-display mt-5 text-[3rem] font-medium leading-[0.98] text-paper sm:text-[4.6rem]">
              The story of Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              One of the oldest freedmen&rsquo;s towns west of the Mississippi, told in the moments
              that made it. A timeline from a single act of ownership to a protected, living
              neighborhood.
            </p>
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="bg-paper py-24">
        <Container size="narrow">
          <div className="relative">
            <div
              aria-hidden
              className="absolute bottom-4 left-[9px] top-3 w-px bg-gradient-to-b from-brass/60 via-line to-transparent"
            />
            {timeline.map((e, i) => (
              <Reveal key={`${e.year}-${i}`} className="relative pb-16 pl-12 last:pb-0 sm:pl-16">
                <span
                  aria-hidden
                  className="absolute left-0 top-2 h-[19px] w-[19px] rotate-45 border border-brass bg-paper"
                />
                <p className="font-display font-num text-4xl leading-none text-brass-deep sm:text-5xl">
                  {e.year}
                </p>
                <h2 className="font-display mt-3 text-2xl leading-tight text-ink sm:text-[1.9rem]">
                  {e.title}
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{e.body}</p>
                {e.photo ? (
                  <div className="relative mt-6 aspect-[16/9] max-w-xl overflow-hidden rounded-[3px] border border-line">
                    <Image src={e.photo.src} alt={e.photo.alt} fill sizes="(max-width:768px) 100vw, 640px" className="img-grade object-cover" />
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SOURCE / CONTINUE */}
      <section className="border-y border-line bg-heritage py-16 text-paper">
        <Container size="narrow" className="text-center">
          <Eyebrow tone="dark">The story continues</Eyebrow>
          <blockquote className="font-display mt-6 text-[1.7rem] italic leading-[1.35] text-paper sm:text-[2.1rem]">
            &ldquo;One of the oldest freedmen&rsquo;s towns west of the Mississippi.&rdquo;
          </blockquote>
          <p className="font-label mt-4 text-brass">Texas State Historical Association, Handbook of Texas</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/clarksville-history" className="btn btn-brass">
              The full history
            </Link>
            <Link href="/clarksville-landmarks" className="btn btn-ghost-light">
              The landmarks today
            </Link>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Live inside the story"
        body="Owning in Clarksville means becoming part of a 150-year story. Reach out to Luke to find and buy a home in one of Austin's most historic neighborhoods."
        intent="buy"
      />
    </>
  );
}
