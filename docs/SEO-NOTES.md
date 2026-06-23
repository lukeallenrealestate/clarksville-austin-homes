# Pre-launch checklist and facts to verify

The brief is explicit: verify market figures and a few specific facts live
before publishing, because sources conflict for a market this small. None of
these block the build; they are editorial confirmations.

## Verify before publishing

- [ ] **Market figures** in `src/lib/content/market.ts`. Re-check the Keenan
      Group at Compass and CurbScout snapshots against live MLS at launch and
      update the dates. Keep trailing-12-month figures front and center; treat
      single-month Redfin/Orchard numbers as unreliable.
- [ ] **The Belvedere residence count** in `src/lib/content/condos.ts`. Sources
      differ (247 in the original announcement vs 158 on current materials) and
      the story count. The `verifyNote` already flags this on the page; confirm
      with the developer and tighten the copy.
- [ ] **Westline** pricing/timing and **de Saligny / Escorial / Woodlawn Place**
      details. Confirm current status; completion has slipped across 2025-2026.
- [ ] **Clarksville boundary**. `CLARKSVILLE_BOX` in `scripts/sync-listings.mjs`
      and the boundary statement in `src/lib/site.ts` must agree. Adjust the box
      so listing counts match the boundary you advertise.
- [ ] **School rankings** in `src/lib/content/schools.ts`. Refresh the cited
      sources/years; confirm attendance zones with Austin ISD.

## TREC compliance (already wired, confirm at launch)

- [ ] Broker name (**Austin Marketing + Development Group**) is legible
      site-wide (footer + about + contact + listing rails). Confirm it is at
      least half the size of the largest contact info/logo on any page you add.
- [ ] License **#788149** shown with the agent identity site-wide.
- [ ] IABS and Consumer Protection Notice linked in the footer and on
      about/contact. Replace `TREC.iabsUrl` in `site.ts` with your branded IABS
      PDF if you host one.
- [ ] Listings stay current. The MLS sync only returns active records and prunes
      stale photos, so a synced site self-cleans. Do not leave sample data live.
- [ ] Have the sponsoring broker review advertising.

## Technical SEO (shipped)

- Server-rendered listings (view-source shows the data + `RealEstateListing`
  JSON-LD). This was the No. 1 issue in the prior audit; confirm on the live
  domain.
- Schema: RealEstateAgent + Person + Organization, Place (Clarksville),
  RealEstateListing, FAQPage, Article, BreadcrumbList, WebSite. Validate in the
  Rich Results Test and Schema Markup Validator.
- `robots.txt` explicitly allows Googlebot, Bingbot, GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended.
- `llms.txt` at the root points AI engines at the highest-value pages.
- Disambiguation: every title/H1/schema pins "Clarksville, Austin" / "78703."
- Clean keyword URLs, XML sitemap including listing pages, `last updated` dates
  on guides and the market report.

## Content moat (Phase 2, shipped baseline)

Guides live: history, architecture, dining, schools, condo buildings (+ per
building), market report, three comparison pages, neighborhood hub. Each has
FAQPage schema, dated/sourced facts, internal links, and a hero image. Deepen
with original photography and first-person notes as you work the neighborhood.

## Still to add (owner)

- [ ] Real agent headshot at `public/images/luke-allen.jpg` (current file is a
      placeholder).
- [ ] GA4 Measurement ID.
- [ ] Original Clarksville photography to replace the curated CC starter set
      (see `public/images/CREDITS.md` for current attributions).
- [ ] Google Business Profile optimized as an Old West Austin / Clarksville
      specialist; keep NAP consistent with the footer.
