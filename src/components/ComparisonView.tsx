import { JsonLd } from "./JsonLd";
import { articleSchema } from "@/lib/schema";
import { PageHero } from "./PageHero";
import { Container, SectionHeading } from "./ui";
import { RelatedLinks } from "./RelatedLinks";
import { ContactCta } from "./ContactCta";
import { getComparison } from "@/lib/content/comparisons";
import { getGuide, fmtDate } from "@/lib/content/guides";
import { LINKS } from "@/lib/content/related";
import { AGENT } from "@/lib/site";

/**
 * Shared, even-handed neighborhood comparison page. Wins the "X vs Y" long tail
 * the portals treat shallowly, with a real row-by-row table and a clear verdict.
 */
export function ComparisonView({ slug }: { slug: string }) {
  const guide = getGuide(slug)!;
  const data = getComparison(slug)!;

  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: guide.slug,
          title: guide.title,
          description: guide.description,
          date: guide.published,
          updated: guide.updated,
          image: guide.hero.src,
        })}
      />
      <PageHero
        eyebrow="Neighborhood Comparison"
        title={`Clarksville vs ${data.other}`}
        lead={data.intro}
        photo={guide.hero}
        crumbs={[
          { name: "Neighborhood", path: "/neighborhood" },
          { name: `vs ${data.other}`, path: `/${guide.slug}` },
        ]}
        meta={
          <span className="font-label text-[0.6rem] text-brass">
            Updated {fmtDate(guide.updated)} by {AGENT.name}
          </span>
        }
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="overflow-hidden rounded-[3px] border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-heritage text-paper">
                  <th className="font-label p-4 text-[0.58rem]"> </th>
                  <th className="font-label p-4 text-[0.62rem]">Clarksville</th>
                  <th className="font-label p-4 text-[0.62rem]">{data.other}</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r, i) => (
                  <tr key={r.dimension} className={i % 2 ? "bg-cream" : "bg-paper"}>
                    <th scope="row" className="font-label p-4 align-top text-[0.58rem] text-brass-deep">
                      {r.dimension}
                    </th>
                    <td className="p-4 align-top text-ink-soft">{r.clarksville}</td>
                    <td className="p-4 align-top text-ink-soft">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <Container>
          <SectionHeading eyebrow="The verdict" title="Which one is right for you?" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[3px] border-l-2 border-brass bg-paper p-7">
              <h3 className="font-display text-2xl text-ink">Choose Clarksville if</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{data.clarksvilleFor}</p>
            </div>
            <div className="rounded-[3px] border-l-2 border-canopy bg-paper p-7">
              <h3 className="font-display text-2xl text-ink">Choose {data.other} if</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{data.otherFor}</p>
              {data.otherUrl ? (
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Leaning that way?{" "}
                  <a
                    href={data.otherUrl}
                    className="font-semibold text-brass-deep underline underline-offset-2"
                  >
                    Explore {data.other} in depth on our dedicated {data.other} site
                  </a>
                  , with live listings, a neighborhood guide, and market data.
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Both are excellent. The honest answer usually comes down to a single afternoon walking
            each one with someone who knows the blocks. That is a walk Luke is glad to take with you.
          </p>
        </Container>
      </section>

      <RelatedLinks links={[LINKS.neighborhood, LINKS.homesForSale, LINKS.market]} />
      <ContactCta heading={`Touring Clarksville and ${data.other}?`} />
    </>
  );
}
