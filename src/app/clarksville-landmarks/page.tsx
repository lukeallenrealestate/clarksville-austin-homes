import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS, type PhotoMeta } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "Historic Landmarks of Clarksville, Austin | A Visual Guide",
  description:
    "The historic landmarks of Clarksville, Austin: Charles Clark's 1871 home, Sweet Home Missionary Baptist Church, the Haskell House, and the sites that tell the story of a freedmen's town.",
  path: "/clarksville-landmarks",
  type: "article",
});

type Landmark = {
  n: string;
  name: string;
  meta: string;
  body: string;
  photo?: PhotoMeta;
};

const landmarks: Landmark[] = [
  {
    n: "I",
    name: "Charles Clark's House",
    meta: "1618 West 10th Street  ·  1871",
    body: "The neighborhood begins here. In 1871 Charles Clark, born enslaved in Mississippi about 1820, bought two acres from a former Confederate general and built his home at 1618 West 10th Street, then subdivided and sold parcels to other freedmen. Every block of Clarksville traces back to this single act.",
  },
  {
    n: "II",
    name: "Sweet Home Missionary Baptist Church",
    meta: "1725 West 11th Street  ·  Congregation 1871, building 1935",
    body: "The spiritual and social cornerstone of Clarksville. The congregation traces to 1871 with Rev. Jacob Fontaine as its first minister; the current sanctuary dates to 1935. For over 150 years it has anchored the community that Charles Clark founded.",
    photo: PHOTOS.church,
  },
  {
    n: "III",
    name: "The Hezikiah Haskell House",
    meta: "1703 to 1705 Waterston Avenue  ·  c. 1875 to 1887  ·  City of Austin Landmark",
    body: "One of the clearest links to the founding generation: a surviving hall-and-parlor home and a designated City of Austin Local Historic Landmark. Modest in scale and set on a small lot, it established the grain of the streetscape that newer construction still has to respect.",
    photo: PHOTOS.haskellHouse,
  },
  {
    n: "IV",
    name: "Mary Baylor Clarksville Park",
    meta: "Clarksville  ·  Site of the Clarksville School, 1917 to 1965",
    body: "Green space with a history. The park sits on the site of the Clarksville Colored School, which educated the neighborhood's children from 1917 until 1965. Today it ties the community's daily life directly to its past.",
    photo: PHOTOS.park,
  },
  {
    n: "V",
    name: "The Old West Austin Historic District",
    meta: "Clarksville and its neighbors  ·  National Register, 1976",
    body: "In 1976 Clarksville was listed on the National Register of Historic Places, recognized as one of the oldest freedmen's towns west of the Mississippi. The surrounding streets of restored cottages and bungalows carry that protection and that story forward.",
    photo: PHOTOS.streetscape,
  },
];

const FAQS = [
  {
    q: "What are the historic landmarks in Clarksville, Austin?",
    a: "Key Clarksville landmarks include the site of Charles Clark's 1871 home at 1618 West 10th Street, Sweet Home Missionary Baptist Church at 1725 West 11th Street, and the Hezikiah Haskell House on Waterston Avenue, a designated City of Austin Local Historic Landmark. The neighborhood is part of the Old West Austin Historic District, listed on the National Register of Historic Places in 1976.",
  },
  {
    q: "Is Clarksville on the National Register of Historic Places?",
    a: "Yes. Clarksville was added to the National Register of Historic Places in 1976 and sits within the Old West Austin Historic District. National Register status is largely honorific; individual City of Austin local historic landmark designations, like the Haskell House, carry binding review of exterior changes.",
  },
  {
    q: "Who founded Clarksville?",
    a: "Clarksville was founded in 1871 by Charles Clark, a freedman born enslaved in Mississippi around 1820. He bought two acres west of Austin's city limits, built his home, and sold parcels to other freedmen, creating one of the oldest freedmen's towns west of the Mississippi.",
  },
];

export default function Landmarks() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "clarksville-landmarks",
            title: "Historic Landmarks of Clarksville, Austin",
            description: "The historic landmarks of Clarksville, Austin.",
            date: "2026-08-19",
            updated: "2026-08-19",
            image: PHOTOS.church.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.church.src}
          alt={PHOTOS.church.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <Container className="relative z-10 pb-20 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">A Register of Places</p>
            <h1 className="font-display mt-5 text-[2.9rem] font-medium leading-[1.02] text-paper sm:text-[4.4rem]">
              The historic landmarks of Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Five places that hold the story of one of the oldest freedmen&rsquo;s towns west of the
              Mississippi, and the reason the neighborhood feels the way it does today.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-cream py-20">
        <Container size="narrow">
          <p className="prose-clark text-lg leading-relaxed text-ink-soft">
            Clarksville is not a marketing name. It is a community founded by freed people in 1871,
            and its landmarks are not monuments behind velvet rope, they are a church still holding
            service, a park where children play, homes people still live in. Walk the neighborhood and
            you walk its history. Here is where to look.
          </p>
        </Container>
      </section>

      {/* THE REGISTER */}
      <section className="bg-paper">
        <Container className="divide-y divide-line">
          {landmarks.map((l) => (
            <Reveal key={l.n} className="grid gap-8 py-16 lg:grid-cols-[5rem_1fr] lg:gap-12">
              <div className="lg:pt-2">
                <span className="font-display text-5xl leading-none text-brass/70 sm:text-6xl">
                  {l.n}
                </span>
              </div>
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center">
                  <h2 className="font-display text-[2rem] leading-[1.1] text-ink sm:text-[2.5rem]">
                    {l.name}
                  </h2>
                  <p className="font-label mt-3 text-[0.62rem] text-brass-deep">{l.meta}</p>
                  <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{l.body}</p>
                </div>
                {l.photo ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] border border-line">
                    <Image
                      src={l.photo.src}
                      alt={l.photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="img-grade object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center rounded-[3px] border border-dashed border-line bg-cream p-10">
                    <span className="rule-ornament w-full max-w-[10rem] text-brass/60">
                      <span />
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* WALK IT */}
      <section className="bg-heritage py-20 text-paper">
        <Container size="narrow" className="text-center">
          <p className="font-label text-brass">See them on foot</p>
          <h2 className="font-display mt-4 text-[2.2rem] leading-tight sm:text-[2.8rem]">
            All within a ten-block walk
          </h2>
          <p className="mt-5 leading-relaxed text-cream-soft">
            The landmarks of Clarksville sit within an easy stroll of one another, and of the West
            Lynn dining corridor. It is one of the few neighborhoods in Austin where you can walk
            through 150 years of history and be home in time for dinner.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/clarksville-map" className="btn btn-brass">
              See the map
            </Link>
            <Link href="/clarksville-history" className="btn btn-ghost-light">
              Read the full history
            </Link>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Own a piece of the story"
        body="Clarksville homes are scarce and the historic ones scarcer still. Reach out to Luke to find and buy a home in one of Austin's most storied neighborhoods."
        intent="buy"
      />
    </>
  );
}
