# This is NOT the Next.js you know

This is Next.js 16 (App Router). APIs and conventions may differ from older
training data: route `params` are async (a Promise you must await), metadata is
file-based, and Tailwind v4 is configured in CSS (`@theme` in globals.css), not
a JS config. Mirror the patterns already in `src/` rather than introducing old
ones. Read `node_modules/next/dist/...` docs before changing build conventions.

## Hard project rules

- NO em dashes anywhere in code or copy. Use commas. The MLS sync normalizes
  them automatically; keep authored copy clean too.
- TREC compliance is mandatory. Never call this the official neighborhood,
  developer, HOA, or city site. Luke Allen's TREC license (#788149) and the
  brokerage (Austin Marketing + Development Group) must appear site-wide. The
  broker name must be legible. Keep listings current; remove sold/expired ones.
- Always disambiguate: "Clarksville, Austin" or "Clarksville 78703," never bare
  "Clarksville" (which defaults to Clarksville, Tennessee).
- Single source of truth for identity, nav, and facts is `src/lib/site.ts`.
- All market figures must be dated and sourced on the page. Verify before
  publishing; sources conflict for Clarksville due to small samples.
