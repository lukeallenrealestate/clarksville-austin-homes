import Link from "next/link";
import { AGENT, NAV, SOCIALS, TREC, NEIGHBORHOOD } from "@/lib/site";
import { Container, RuleOrnament } from "./ui";

/**
 * Site footer. Carries the full TREC-required identification site-wide: the
 * sponsoring brokerage name (legible, not minimized), Luke's license number,
 * and links to the Information About Brokerage Services (IABS) form and the
 * Consumer Protection Notice. Also states the independent-resource positioning
 * and the Clarksville boundary this site uses.
 */
const groups: { title: string; group: NonNullable<(typeof NAV)[number]["group"]> }[] = [
  { title: "Listings", group: "listings" },
  { title: "Neighborhood", group: "neighborhood" },
  { title: "Work With Luke", group: "transact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-heritage text-cream-soft">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="font-display text-2xl text-paper">Clarksville Austin Homes</p>
            <p className="font-label mt-1 text-brass">Historic Old West Austin &middot; 78703</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-soft/85">
              An independent buyer and seller guide to Clarksville, the historic neighborhood in
              Austin, Texas. Curated by a licensed local REALTOR, with live MLS listings and original
              neighborhood reporting. Not affiliated with any developer, HOA, or the City of Austin.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a href={AGENT.phoneHref} className="link-underline text-paper">
                {AGENT.phone}
              </a>
              <a href={`mailto:${AGENT.email}`} className="link-underline text-paper">
                {AGENT.email}
              </a>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-soft/80 transition-colors hover:text-brass"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((g) => (
              <div key={g.group}>
                <p className="font-label text-brass">{g.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {NAV.filter((n) => n.group === g.group).map((n) => (
                    <li key={n.href}>
                      <Link
                        href={n.href}
                        className="text-sm text-cream-soft/85 transition-colors hover:text-paper"
                      >
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <RuleOrnament className="text-brass/50" />
        </div>

        {/* TREC compliance block. Broker name legible; license + required notices. */}
        <div className="mt-10 grid gap-6 text-xs leading-relaxed text-cream-soft/75 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-sm text-paper">
              {AGENT.name}, {AGENT.title}, TREC License #{AGENT.trecLicense}
            </p>
            <p className="mt-1 text-sm text-paper">
              Brokerage: {AGENT.brokerage}
            </p>
            <p className="mt-3 max-w-2xl">
              {NEIGHBORHOOD.boundaryStatement} Listing counts vary by where Clarksville&rsquo;s edges
              are drawn; figures on this site reflect that boundary and are dated where shown. All
              information is deemed reliable but not guaranteed and should be independently verified.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={TREC.iabsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-paper"
            >
              Information About Brokerage Services (IABS)
            </a>
            <a
              href={TREC.consumerProtectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-paper"
            >
              TREC Consumer Protection Notice
            </a>
            <Link href="/contact" className="link-underline text-paper">
              Contact &amp; privacy
            </Link>
          </div>
        </div>

        <p className="mt-10 text-xs text-cream-soft/55">
          &copy; {new Date().getFullYear()} {AGENT.brokerage}. Equal Housing Opportunity. Site by
          Austin Marketing + Development Group.
        </p>
      </Container>
    </footer>
  );
}
