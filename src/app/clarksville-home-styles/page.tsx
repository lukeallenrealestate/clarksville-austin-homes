import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { ContactCta } from "@/components/ContactCta";
import { PHOTOS, type PhotoMeta } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "The Homes of Clarksville | A Field Guide to the Styles",
  description:
    "A visual field guide to Clarksville's home styles: Victorian-era cottages, Craftsman bungalows, hall-and-parlor houses, mid-century condos, and modern infill in historic Austin.",
  path: "/clarksville-home-styles",
  type: "article",
});

const midCentury: PhotoMeta = {
  src: "/images/the-clarksville/the-clarksville-4.jpg",
  width: 2500,
  height: 1666,
  alt: "A reimagined mid-century brick building in Clarksville, Austin",
};

type Style = {
  name: string;
  era: string;
  blurb: string;
  hallmarks: string[];
  buyerNote: string;
  photo: PhotoMeta;
};

const styles: Style[] = [
  {
    name: "Victorian-Era Cottage",
    era: "1870s to 1900s",
    blurb: "The oldest layer of Clarksville: modest, dignified cottages built by the freedmen who founded the neighborhood and the generations that followed.",
    hallmarks: ["Steep gabled roofs", "Decorative trim and porches", "Tall, narrow windows", "Small, human-scaled footprints"],
    buyerNote: "The most historically significant homes. Many are candidates for, or already carry, landmark protections that shape what can change.",
    photo: PHOTOS.bungalow,
  },
  {
    name: "Craftsman Bungalow",
    era: "1900s to 1930s",
    blurb: "Clarksville's signature. Low, wide, and grounded, with the deep front porch that defines the neighborhood's streetscape and its sociable spirit.",
    hallmarks: ["Deep front porches on tapered columns", "Low-pitched roofs with wide eaves", "Exposed rafter tails", "Original longleaf pine floors"],
    buyerNote: "The most sought-after historic home in Clarksville. Restored examples command a premium; original ones are increasingly rare.",
    photo: PHOTOS.porch,
  },
  {
    name: "Hall-and-Parlor House",
    era: "c. 1875 to 1890",
    blurb: "A simple, early vernacular form, two rooms wide, that ties directly to the founding generation. The Haskell House on Waterston is the definitive local example.",
    hallmarks: ["Two-room-wide plan", "Symmetrical, unadorned facade", "Steep roof, central chimney", "Small lot, close to the street"],
    buyerNote: "Rare and historically precious. Surviving examples are among the most protected homes in the district.",
    photo: PHOTOS.haskellHouse,
  },
  {
    name: "Mid-Century Garden Condo",
    era: "1950s to 1970s",
    blurb: "Low-slung brick buildings from Austin's post-war growth, many now beautifully reimagined into boutique condominiums, an accessible way into the neighborhood.",
    hallmarks: ["Brick construction, often painted", "Two-story, garden-style layouts", "Exterior stairs and shared courts", "Clean, unfussy lines"],
    buyerNote: "The most attainable entry to Clarksville ownership, especially reimagined buildings like The Clarksville on Enfield.",
    photo: midCentury,
  },
  {
    name: "Modern Infill",
    era: "2000s to today",
    blurb: "Contemporary architecture inserted, carefully, behind a historic streetscape. White oak, glass, and clean geometry that answer to the neighborhood's older grain.",
    hallmarks: ["Warm modern materials and glass", "Discreet siting on small lots", "Luxury finishes, lock-and-leave options", "Designed to complement, not overpower"],
    buyerNote: "The top of the market. Scarcity and design drive value; new construction arrives in ones and tens, not hundreds.",
    photo: PHOTOS.newBuild,
  },
];

const FAQS = [
  {
    q: "What styles of homes are in Clarksville, Austin?",
    a: "Clarksville's housing stock spans Victorian-era cottages and Craftsman bungalows from the late 1800s and early 1900s, rare hall-and-parlor houses tied to the neighborhood's founding, mid-century garden-style condominiums, and contemporary modern infill. This mix, on small historic lots, gives the neighborhood its distinctive character.",
  },
  {
    q: "What is the most common home style in Clarksville?",
    a: "The Craftsman bungalow is Clarksville's signature style, low and wide with a deep front porch. Alongside it you will find Victorian-era cottages, and increasingly, restored mid-century condos and luxury modern infill.",
  },
  {
    q: "Do Clarksville home styles affect value and renovation?",
    a: "Yes. Historic styles can carry landmark protections that limit exterior changes and demolition, which affects both value and what you can build. Always run a designation check on a specific address before you plan a renovation or buy for redevelopment.",
  },
];

export default function HomeStyles() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "clarksville-home-styles",
            title: "The Homes of Clarksville: A Field Guide to the Styles",
            description: "A visual field guide to Clarksville's home styles.",
            date: "2026-08-19",
            updated: "2026-08-19",
            image: PHOTOS.porch.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-ink">
        <Image src={PHOTOS.porch.src} alt={PHOTOS.porch.alt} fill priority sizes="100vw" className="img-grade object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <Container className="relative z-10 pb-16 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">A Field Guide</p>
            <h1 className="font-display mt-5 text-[2.9rem] font-medium leading-[1.02] text-paper sm:text-[4.3rem]">
              The homes of Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Clarksville&rsquo;s streets read like a timeline of Austin building. Learn to read them:
              five styles, what to look for, and what each means when you buy.
            </p>
          </div>
        </Container>
      </section>

      {/* SPECIMEN CARDS */}
      <section className="bg-paper py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            {styles.map((s, i) => {
              // First specimen spans full width as a feature; the rest form a catalogue.
              const feature = i === 0;
              return (
                <Reveal
                  key={s.name}
                  className={`group flex flex-col overflow-hidden rounded-[3px] border border-line bg-cream ${
                    feature ? "lg:col-span-12 lg:flex-row" : "lg:col-span-6"
                  }`}
                >
                  <div className={`relative ${feature ? "aspect-[16/10] lg:aspect-auto lg:w-1/2" : "aspect-[3/2]"}`}>
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt}
                      fill
                      sizes={feature ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 100vw, 50vw"}
                      className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="font-num absolute left-4 top-4 font-display text-3xl text-paper/85 mix-blend-screen">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className={`flex flex-col p-7 sm:p-9 ${feature ? "lg:w-1/2 lg:justify-center" : ""}`}>
                    <h2 className="font-display text-2xl leading-tight text-ink sm:text-[1.9rem]">{s.name}</h2>
                    <div className="mt-2.5">
                      <Pill tone="brass">{s.era}</Pill>
                    </div>
                    <p className="mt-4 leading-relaxed text-ink-soft">{s.blurb}</p>
                    <div className="mt-5">
                      <p className="font-label text-[0.58rem] text-brass-deep">Hallmarks</p>
                      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {s.hallmarks.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                            <span aria-hidden className="mt-1.5 h-[5px] w-[5px] shrink-0 rotate-45 bg-brass" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-ink">
                      <span className="font-label mr-2 text-[0.55rem] text-brass-deep">For buyers</span>
                      {s.buyerNote}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* DESIGNATION NOTE */}
      <section className="border-y border-line bg-heritage py-16 text-paper">
        <Container size="narrow" className="text-center">
          <Eyebrow tone="dark">Before you renovate</Eyebrow>
          <h2 className="font-display mt-4 text-[2rem] leading-tight sm:text-[2.6rem]">
            Style is beautiful. Designation is binding.
          </h2>
          <p className="mt-5 leading-relaxed text-cream-soft">
            A home&rsquo;s style tells you its history; its designation tells you what you can change.
            Before you buy a Clarksville home to renovate or rebuild, confirm whether it carries a City
            of Austin local historic landmark designation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/insights/clarksville-historic-landmark-rules" className="btn btn-brass">
              Landmark rules for buyers
            </Link>
            <Link href="/clarksville-homes-for-sale" className="btn btn-ghost-light">
              See homes for sale
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Clarksville home styles, answered
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ContactCta
        heading="Found your style?"
        body="Whether you love a restored bungalow or a modern infill, Luke will help you find and buy the right one, often before it reaches the public market."
        intent="buy"
      />
    </>
  );
}
