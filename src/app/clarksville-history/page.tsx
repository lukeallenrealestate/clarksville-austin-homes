import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/ArticleShell";
import { InlineCta } from "@/components/ContactCta";
import { getGuide } from "@/lib/content/guides";
import { HISTORY_FAQS } from "@/lib/content/faqs";
import { LINKS } from "@/lib/content/related";

const guide = getGuide("clarksville-history")!;

export const metadata: Metadata = pageMeta({
  title: "History of Clarksville, Austin | A Freedmen's Town Since 1871",
  description: guide.description,
  path: `/${guide.slug}`,
  type: "article",
});

export default function HistoryPage() {
  return (
    <ArticleShell
      guide={guide}
      lead="Clarksville is not a marketing name. It is a freedmen's town founded in 1871, one of the oldest west of the Mississippi, and its survival is the reason the neighborhood feels the way it does today."
      faqs={HISTORY_FAQS}
      related={[LINKS.architecture, LINKS.neighborhood, LINKS.homesForSale]}
      ctaHeading="Buy or sell where the history lives"
    >
      <p>
        The neighborhood begins with one man and one purchase. Charles Griffin, later known as
        Charles Clark, was, per the Texas State Historical Association&rsquo;s Handbook of Texas,
        &ldquo;born a slave in Mississippi about 1820.&rdquo; On August 11, 1871, Clark bought two
        acres about a half mile west of Austin&rsquo;s city limits from Confederate general and
        former Austin mayor Nathan G. Shelley for the sum of $100, and built his house at 1618 West
        10th Street. The land had been part of Governor Elisha M. Pease&rsquo;s Woodlawn plantation.
        Clark then subdivided his holding and sold parcels to other freedmen.
      </p>

      <blockquote>
        One of the oldest freedmen&rsquo;s towns west of the Mississippi, one of four such
        settlements in Austin, along with Wheatville, Masontown, and Kincheonville.
        <cite>Texas State Historical Association, Handbook of Texas</cite>
      </blockquote>

      <h2>A community built around faith and school</h2>
      <p>
        Sweet Home Missionary Baptist Church was the spiritual and social cornerstone of Clarksville.
        The congregation traces its origins to 1871, with Rev. Jacob Fontaine as its first minister,
        and the current building at 1725 West 11th Street dates to 1935. Elias Mayes, a Black state
        legislator, lived in Clarksville from the 1870s and bought land from Clark in 1884. The
        Clarksville Colored School operated from 1917 to 1965 on the site of today&rsquo;s Mary Baylor
        Clarksville Park, tying the neighborhood&rsquo;s green space directly to its history.
      </p>

      <h2>The houses that survived</h2>
      <p>
        Among the most significant surviving structures is the Haskell House, built around 1875 to
        1887 at 1703 and 1705 Waterston Avenue. It is a hall-and-parlor home and a City of Austin
        Local Historic Landmark, one of the clearest links to the neighborhood&rsquo;s founding
        generation. These early homes, modest in scale and set on small lots, established the grain of
        the streetscape that newer construction still has to respect.
      </p>

      <InlineCta>Want to know if a specific home is a designated landmark?</InlineCta>

      <h2>MoPac, and the fight to survive</h2>
      <p>
        Clarksville&rsquo;s modern story is one of pressure and preservation. The construction of
        MoPac (Loop 1) around 1971 cut through the community. Per the Handbook of Texas,
        twenty-six families were relocated and twenty-three more left of their own accord, and the
        number of homes in Clarksville fell from 162 in 1970 to fewer than 100 by 1976. Residents then
        defeated a separate plan to run a thoroughfare from I-35 to MoPac in 1976. Out of that fight
        came the Clarksville Community Development Corporation, formed to preserve affordability and
        the neighborhood&rsquo;s character.
      </p>

      <h2>National recognition</h2>
      <p>
        In 1976, the Clarksville Historic District was added to the National Register of Historic
        Places, and the area sits within the broader Old West Austin Historic District. It is
        important to understand what that does and does not do: National Register status is largely
        honorific. The protections that actually govern what an owner can change are the City of
        Austin local historic landmark designations that some individual addresses carry. That
        distinction is central to any renovation or teardown decision, and it is covered in the
        Clarksville architecture guide.
      </p>

      <p>
        The throughline is this: Clarksville exists today because the people who lived here refused to
        let it disappear. That history is not a plaque. It is the reason the lots are small, the
        canopy is old, the streets are walkable, and demand has stayed durable. When you buy here, you
        are buying into a place that was fought for.
      </p>
    </ArticleShell>
  );
}
