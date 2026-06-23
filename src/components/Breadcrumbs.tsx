import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { Container, type Tone } from "./ui";

/**
 * Visible breadcrumb trail plus BreadcrumbList JSON-LD. Always starts at Home.
 * Tone-aware so it reads cleanly over a dark photographic hero.
 */
export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: Tone }) {
  const crumbs: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  const dark = tone === "dark";
  return (
    <Container className="pt-2">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb">
        <ol
          className={`font-label flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.62rem] ${
            dark ? "text-paper/60" : "text-muted"
          }`}
        >
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className={dark ? "text-paper" : "text-ink"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.path}
                      className={`transition-colors ${dark ? "hover:text-brass" : "hover:text-brass-deep"}`}
                    >
                      {c.name}
                    </Link>
                    <span aria-hidden="true" className={dark ? "text-paper/30" : "text-line"}>
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
}
