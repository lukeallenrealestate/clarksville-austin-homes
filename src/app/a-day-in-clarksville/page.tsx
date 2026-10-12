import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PHOTOS, type PhotoMeta } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "A Day in Clarksville: Life in Austin's Historic Village | 78703",
  description:
    "An hour-by-hour walk through an ordinary, beautiful day in Clarksville, Austin (78703): morning coffee on West Lynn, the Butler Trail, Pease Park, and dinner at Jeffrey's. What it actually feels like to live here.",
  path: "/a-day-in-clarksville",
  type: "article",
});

type Chapter = {
  time: string;
  title: string;
  body: string;
  photo: PhotoMeta;
};

const chapters: Chapter[] = [
  {
    time: "7:00 AM",
    title: "The quiet hour",
    body: "The day starts before the city does. A few blocks south, the Ann and Roy Butler Hike-and-Bike Trail runs along Lady Bird Lake, close enough for a run or a ride while the water is still glass. You are back before most of Austin has found its keys.",
    photo: PHOTOS.canopy,
  },
  {
    time: "8:30 AM",
    title: "Coffee, on foot",
    body: "No car. You walk to Cafe Medici on the corridor for the first cup, or settle onto the porch at Josephine House, the blue cottage on Waterston, where the menu runs from morning coffee to evening wine. This is the part the listing photos never capture: the walkability that makes Clarksville a village and not a commute.",
    photo: PHOTOS.porch,
  },
  {
    time: "11:00 AM",
    title: "A neighborhood that still works like one",
    body: "A short errand to Fresh Plus, the small grocery that lets Clarksville function on foot, then a slow loop past the history that gives the place its weight: Sweet Home Missionary Baptist Church on West 11th, anchoring the community since 1871, and the Haskell House on Waterston, a City of Austin landmark. A stop at the Wally Workman Gallery, contemporary art in a historic home, if a piece catches the light.",
    photo: PHOTOS.church,
  },
  {
    time: "1:00 PM",
    title: "Lunch on West Lynn",
    body: "The corridor at midday: a wood-oven pizza and a glass of wine at Cipollina, the kind of easy, excellent lunch that would be a destination in another city and is simply down the street here. The tab is a decision, not an occasion.",
    photo: PHOTOS.westLynn,
  },
  {
    time: "4:00 PM",
    title: "Afternoon under the oaks",
    body: "Pease Park, Austin's oldest, edges the neighborhood and comes alive every spring for Eeyore's Birthday. The West Austin Neighborhood Park is the everyday backyard: pool, courts, fields. The afternoon is spent under a canopy of live oaks that took a century to grow and cannot be bought new.",
    photo: PHOTOS.park,
  },
  {
    time: "6:30 PM",
    title: "Golden hour",
    body: "The light turns and the streets soften. From a porch you can see the downtown skyline, five minutes away and somehow a world removed. Clarksville's trick is exactly this: the center of Austin at arm's length, and a quiet, tree-lined street to come home to.",
    photo: PHOTOS.streetscape,
  },
  {
    time: "8:00 PM",
    title: "Dinner, by mood",
    body: "A special night means Jeffrey's, the West Lynn steakhouse that has defined the occasion for decades. A lighter mood means oysters at Clark's, a short walk toward West Sixth. Or you simply return to the Josephine House porch for a last glass of wine, three blocks from your own front door.",
    photo: PHOTOS.hero,
  },
];

const FAQS = [
  {
    q: "What is it like to live in Clarksville, Austin?",
    a: "Clarksville lives like a walkable village inside the city. From a home in 78703 you can walk to coffee, groceries, galleries, and some of Austin's best restaurants on West Lynn, reach Lady Bird Lake and Pease Park in minutes, and still see downtown from the porch. It pairs a historic, tree-canopied residential setting founded in 1871 with genuine central-Austin convenience.",
  },
  {
    q: "What is there to do in Clarksville?",
    a: "Walk or run the Butler Hike-and-Bike Trail along Lady Bird Lake, spend an afternoon at Pease Park (home of the annual Eeyore's Birthday celebration) or the West Austin Neighborhood Park, browse the Wally Workman Gallery, grab coffee at Cafe Medici or Josephine House, and dine on the West Lynn corridor at spots like Jeffrey's, Cipollina, and nearby Clark's Oyster Bar.",
  },
  {
    q: "Is Clarksville a walkable neighborhood?",
    a: "Yes. Walkability is central to Clarksville's appeal. Daily life (coffee, a small grocery at Fresh Plus, dining on West Lynn, parks, and galleries) is reachable on foot, and downtown and West Sixth Street are roughly a five-minute trip, which is rare for a historic, residential Austin neighborhood.",
  },
  {
    q: "Where do you eat in Clarksville, Austin?",
    a: "The West Lynn corridor is the heart of it: Jeffrey's for a special-occasion steakhouse, Cipollina for wood-oven pizza and pasta, and Josephine House for everything from morning coffee to evening wine. Clark's Oyster Bar toward West Sixth is a short walk away.",
  },
];

export default function DayInClarksvillePage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            slug: "a-day-in-clarksville",
            title: "A Day in Clarksville: Life in Austin's Historic Village",
            description:
              "An hour-by-hour walk through an ordinary, beautiful day in Clarksville, Austin (78703).",
            date: "2026-10-12",
            updated: "2026-10-12",
            image: PHOTOS.hero.src,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[90vh] items-end overflow-hidden bg-ink">
        <Image
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          fill
          priority
          sizes="100vw"
          className="img-grade object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <Container className="relative z-10 pb-24 pt-40">
          <div className="hero-rise max-w-3xl">
            <p className="font-label text-brass">An ordinary, beautiful day</p>
            <h1 className="font-display mt-5 text-[2.9rem] font-medium leading-[1.0] text-paper sm:text-[4.6rem]">
              A day in Clarksville
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              Floor plans and price per square foot tell you what a home is. They cannot tell you what
              a Tuesday feels like here. So walk one with us, hour by hour, through the oldest village
              in Austin.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              People do not fall in love with a neighborhood on a spec sheet. They fall for the rhythm
              of it: where the coffee is, how far the trees go, whether you can walk to dinner. In
              Clarksville, that rhythm is the whole point, and it is best understood not as a list of
              features but as a single, unhurried day.
            </p>
          </div>
        </Container>
      </section>

      {/* THE TIMELINE */}
      <section className="bg-cream py-8 sm:py-12">
        <Container>
          <div className="relative">
            {/* vertical rail */}
            <div
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-1/2 sm:-translate-x-1/2"
            />
            <div className="space-y-16 sm:space-y-24">
              {chapters.map((c, i) => {
                const imageFirst = i % 2 === 1;
                return (
                  <Reveal key={c.time} className="relative">
                    {/* node */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-2 h-[15px] w-[15px] rotate-45 border border-brass bg-cream sm:left-1/2 sm:-translate-x-1/2"
                    />
                    <div className="grid gap-6 pl-10 sm:grid-cols-2 sm:gap-12 sm:pl-0">
                      {/* text */}
                      <div
                        className={`flex flex-col justify-center ${
                          imageFirst ? "sm:order-2 sm:pl-6" : "sm:order-1 sm:pr-6 sm:text-right"
                        }`}
                      >
                        <span className="font-label font-num text-[0.6rem] tracking-[0.2em] text-brass-deep">
                          {c.time}
                        </span>
                        <h2 className="font-display mt-2 text-[1.9rem] leading-tight text-ink sm:text-[2.3rem]">
                          {c.title}
                        </h2>
                        <p
                          className={`mt-4 leading-relaxed text-ink-soft ${
                            imageFirst ? "" : "sm:ml-auto"
                          } max-w-md`}
                        >
                          {c.body}
                        </p>
                      </div>
                      {/* image */}
                      <div className={imageFirst ? "sm:order-1" : "sm:order-2"}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] border border-line">
                          <Image
                            src={c.photo.src}
                            alt={c.photo.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 45vw"
                            className="img-grade object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* REFLECTION */}
      <section className="bg-paper py-20">
        <Container size="narrow">
          <div className="prose-clark max-w-none">
            <p>
              Nothing about that day is extravagant. That is exactly the point. The luxury of
              Clarksville is not a feature you add, it is a life you step into: the trees, the walk,
              the history under your feet, the city a few minutes away when you want it. It is also, by
              design, scarce. The neighborhood is small and protected, and the homes that come
              available are the only way in.
            </p>
            <p>
              If that day sounds like yours, the next step is a home. See what is{" "}
              <Link href="/clarksville-homes-for-sale" className="font-semibold text-brass-deep underline">
                for sale in Clarksville
              </Link>
              , read{" "}
              <Link href="/why-clarksville" className="font-semibold text-brass-deep underline">
                why people choose it
              </Link>
              , or get to know the{" "}
              <Link href="/neighborhood" className="font-semibold text-brass-deep underline">
                neighborhood
              </Link>{" "}
              block by block.
            </p>
          </div>
        </Container>
      </section>

      <ContactCta
        heading="Imagine this is your neighborhood"
        body="If a day like this sounds like the life you are after, Luke Allen can help you find the Clarksville home that fits it, including homes that never reach the public listings. Start a conversation, no pressure."
        intent="buy"
        cta="Talk with Luke about Clarksville"
      />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <Container>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
            Life in Clarksville, answered
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
    </>
  );
}
