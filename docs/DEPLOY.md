# Deploy to GitHub + Vercel

## 1. Push to GitHub

```bash
# from the project root
git add -A
git commit -m "feat: Clarksville Austin Homes site"

# create the repo (with the GitHub CLI) and push
gh repo create clarksville-austin-homes --private --source=. --remote=origin --push
# or create it in the GitHub UI, then:
# git remote add origin git@github.com:<you>/clarksville-austin-homes.git
# git push -u origin main
```

## 2. Import into Vercel

1. vercel.com → Add New → Project → import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected). No build settings to change.
3. Add Environment Variables (Project → Settings → Environment Variables):

   | Key | Value | Notes |
   |-----|-------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://www.clarksvilleaustinhomes.com` | no trailing slash |
   | `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX` | when you have GA4 |
   | `GMAIL_USER` | `luke@austinmdg.com` | lead email sender |
   | `GMAIL_APP_PASSWORD` | (16-char app password) | see src/lib/mailer.ts |
   | `LEAD_TO` | `luke@austinmdg.com` | optional |
   | `LEAD_WEBHOOK_URL` | (optional CRM/Zapier) | optional |

   `MLS_GRID_TOKEN` does **not** go in Vercel. It is a **GitHub Actions secret**
   used by the daily sync (Settings → Secrets and variables → Actions).

4. Deploy.

## 3. Domain

- Add `clarksvilleaustinhomes.com` and `www.clarksvilleaustinhomes.com` in
  Vercel → Settings → Domains. Set the canonical to `www` (matches
  `NEXT_PUBLIC_SITE_URL`).
- At the registrar, point DNS per Vercel's instructions (A record for the apex
  to Vercel's IP, CNAME for `www`).

## 4. Listings sync

- Add `MLS_GRID_TOKEN` as a GitHub Actions secret.
- The workflow runs daily and on manual dispatch; the first run replaces the
  sample data with live Clarksville listings and commits photos, which triggers
  a redeploy.
- Run it once manually from the Actions tab to go live immediately.

## 5. Post-deploy checks

- View-source a listing detail page: the price, beds/baths/sqft, and
  `RealEstateListing` JSON-LD must be in the raw HTML.
- Validate `/` and a listing in Google's Rich Results Test.
- Submit `https://www.clarksvilleaustinhomes.com/sitemap.xml` in Search Console.
- Confirm `/robots.txt` and `/llms.txt` resolve.
