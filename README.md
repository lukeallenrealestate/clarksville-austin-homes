# Clarksville Austin Homes

A single-neighborhood luxury authority site for **Clarksville**, the historic
neighborhood in **Austin, Texas (78703)**. Server-rendered MLS listings,
exhaustive original hyperlocal content, and a bespoke Warm Historic Luxury
design, built for buyer and seller lead generation and full TREC compliance.

Domain: **clarksvilleaustinhomes.com** · Agent: **Luke Allen**, Licensed Texas
REALTOR (TREC #788149), Austin Marketing + Development Group.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind v4 (server mode, ISR)
- Fonts: Cormorant Garamond (display) + Hanken Grotesk (body)
- Listings: MLS Grid (Unlock MLS / ACTRIS), synced to native HTML on this domain
- Email leads via Gmail SMTP; GA4 + Meta Pixel analytics
- Deploy target: Vercel

## Develop

```bash
npm install
cp .env.example .env.local   # fill in values (all optional for sample data)
npm run dev                  # http://localhost:3000
```

With no `MLS_GRID_TOKEN`, the site serves clearly labeled **sample** listings and
shows a "preview" banner. Real listings appear once the feed is synced.

## Listings sync (the No. 1 technical requirement)

Listings render as native, indexable HTML on this domain (not a client-only
widget), which is what makes them visible to Google and AI engines.

```bash
npm run sync:listings   # pages MLS Grid, writes src/data/clarksville-listings.json + photos
```

- Filters active residential listings in ZIP 78703 to a **Clarksville geo
  polygon** (tune `CLARKSVILLE_BOX` in `scripts/sync-listings.mjs` to your exact
  boundary).
- Downloads each listing's photos to `public/listings/<ListingId>/` (MLS media
  URLs expire, and the terms require storing media).
- The GitHub Action `.github/workflows/sync-listings.yml` runs it daily and
  commits changes, which redeploys Vercel. Add `MLS_GRID_TOKEN` as a repo secret.

## Architecture

- `src/lib/site.ts` is the single source of truth (identity, nav, TREC, facts).
- `src/lib/content/*` holds the structured original content (history, dining,
  schools, condos, market, comparisons, FAQs), each dated and sourced.
- `src/lib/schema.ts` builds the JSON-LD (RealEstateAgent, Place, RealEstateListing,
  FAQPage, Article, BreadcrumbList).
- Hub-and-spoke routing with clean keyword URLs (e.g. `/clarksville-condos-for-sale`).

See `docs/DEPLOY.md` to ship and `docs/SEO-NOTES.md` for the pre-launch checklist
and facts to verify before publishing.

## Project rules

- **No em dashes** anywhere in code or copy.
- **TREC compliance**: never imply this is an official developer/HOA/city site;
  keep the broker name legible and listings current; IABS + Consumer Protection
  Notice are linked site-wide.
- Always write "Clarksville, Austin" or "Clarksville 78703," never bare
  "Clarksville" (which defaults to Tennessee).
