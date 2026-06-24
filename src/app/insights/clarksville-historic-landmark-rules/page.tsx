import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { ArticleShell } from "@/components/ArticleShell";
import { InlineCta } from "@/components/ContactCta";
import { getInsight } from "@/lib/content/insights";
import { LINKS } from "@/lib/content/related";

const post = getInsight("insights/clarksville-historic-landmark-rules")!;

export const metadata: Metadata = pageMeta({
  title: "Clarksville Historic Landmark Rules: A Buyer's Guide",
  description: post.description,
  path: `/${post.slug}`,
  type: "article",
});

export default function Page() {
  return (
    <ArticleShell
      guide={post}
      eyebrow="Clarksville Insights"
      parent={{ name: "Insights", path: "/insights" }}
      lead="The single most expensive mistake a Clarksville buyer can make is assuming a home can be changed before confirming its designation. Here is what the rules actually mean."
      faqs={post.faqs}
      related={[LINKS.architecture, LINKS.history, LINKS.buying]}
      ctaHeading="Run a designation check before you offer"
    >
      <p>
        In most of Austin, &ldquo;historic&rdquo; is a selling point and little more. In Clarksville,
        it can be a binding constraint that determines whether you can renovate, add on, or rebuild,
        and therefore what a property is actually worth to you. The catch is that the rules turn on
        the specific address, not the neighborhood. Two homes on the same block can carry very
        different obligations.
      </p>

      <h2>Two kinds of &ldquo;historic,&rdquo; very different consequences</h2>
      <p>
        The distinction every buyer needs to understand is between the National Register district and
        an individual City of Austin local historic landmark.
      </p>
      <ul>
        <li>
          <strong>National Register district (largely honorific).</strong> The Clarksville district
          was listed on the National Register of Historic Places in 1976. That listing is an honor and
          a recognition; on its own it does not generally stop an owner from altering or demolishing a
          private home.
        </li>
        <li>
          <strong>City of Austin local historic landmark (binding).</strong> A home with an individual
          local landmark designation is a different matter. Exterior changes and demolition generally
          require review by the City of Austin Historic Landmark Commission and a certificate of
          appropriateness. This is the designation that can prevent a teardown or limit a renovation.
        </li>
      </ul>
      <p>
        The surviving <Link href="/clarksville-architecture">historic homes</Link> of Clarksville,
        like the Haskell House on Waterston Avenue, are landmark-protected for a reason. But many
        ordinary homes in the district are not individually designated. You cannot tell which is which
        by looking.
      </p>

      <h2>Why it changes the math</h2>
      <p>
        Teardown and redevelopment economics in Clarksville hinge almost entirely on this question. If
        you are buying with plans to scrape the lot and build new, or to add a second story, a local
        landmark designation can stop those plans cold, which changes the value of the dirt. If you
        are buying to preserve and restore, the protections may be exactly what you want. Either way,
        the designation is not a detail. It is the deal.
      </p>

      <InlineCta href="/clarksville-realtor" label="Ask a specialist">
        Not sure what a specific address allows?
      </InlineCta>

      <h2>What a renovation actually involves</h2>
      <p>
        On a locally designated home, exterior alterations generally require Historic Landmark
        Commission review, while interior work is typically far less restricted. Beyond individual
        landmark status, parts of the area also sit within the Old West Austin Historic District and
        may carry neighborhood conservation or zoning overlays that shape what can be built. Because
        these layers stack and vary block by block, the only reliable answer comes from the City for
        your exact parcel.
      </p>

      <h2>The one step every buyer should take</h2>
      <p>
        Before you write an offer on any Clarksville home, run a designation check: confirm with the
        City of Austin whether the specific address carries an individual local historic landmark
        designation, what district and overlay rules apply, and what review any planned change would
        trigger. Do this during your option period at the latest, and ideally before you fall in love
        with a renovation that the property may never allow.
      </p>
      <p>
        This is one of the clearest places where a{" "}
        <Link href="/clarksville-realtor">Clarksville specialist</Link> earns their keep. Knowing
        which homes are protected, which are not, and what that means for your plans is exactly the
        kind of hyperlocal expertise that a general Austin agent, or a national portal, simply will
        not have. When you are ready, start with the{" "}
        <Link href="/buying-in-clarksville">buying guide</Link>.
      </p>

      <p className="text-sm text-muted">
        This article is general information, not legal advice. Verify all designations, overlays, and
        permitting requirements with the City of Austin and qualified professionals for your specific
        property.
      </p>
    </ArticleShell>
  );
}
