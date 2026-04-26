# DESCF Phase 2 Demo

This is the Phase 2 technical starter for the DESCF website rebuild.

It adds Sanity CMS structure on top of the Phase 1 Next.js front-end.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity CMS
- GROQ queries
- `next-sanity`
- Portable Text rendering
- SEO helper structure
- GitHub + Vercel ready

## Included routes

- `/`
- `/about`
- `/about/mission-vision-values`
- `/about/leadership-governance`
- `/work`
- `/programmes`
- `/programmes/[slug]`
- `/strategic-priorities`
- `/resources`
- `/resources/[slug]`
- `/reports-publications`
- `/media`
- `/events`
- `/events/[slug]`
- `/newsroom`
- `/newsroom/[slug]`
- `/partner-with-us`
- `/donate`
- `/contact`
- `/studio`

## Sanity document types

- Site Settings
- Programmes
- Posts
- Authors
- Categories
- Tags
- Resources
- Events
- Team Members

## Important reality check

This is still not the final public website. It is a CMS-enabled demo foundation.

Do not publish the placeholder content as real DESCF content.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Type check

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

## Sanity setup

Create a Sanity project, then copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_real_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Restart the dev server after changing environment variables.

Then open:

```txt
http://localhost:3000/studio
```

## Optional placeholder seed content

After Sanity is connected, you may import the technical placeholder content:

```bash
npx sanity dataset import sanity/seed/initial-content.ndjson production --replace
```

This is only for CMS testing. Delete or replace placeholder documents before public launch.

## Push to GitHub

```bash
git init
git add .
git commit -m "Add DESCF Phase 2 Sanity CMS demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Deploy to Vercel

1. Import the GitHub repo in Vercel.
2. Framework preset: Next.js.
3. Add the Sanity environment variables in Vercel Project Settings.
4. Deploy.

## What Phase 2 deliberately does not include

- payment gateway
- authentication
- member dashboard
- advanced search
- full bilingual routing
- preview mode
- complex animations
- fake impact counters

## Next recommended phase

Phase 3 should add:

- Sanity image rendering
- site settings-driven header/footer/contact
- sitemap and robots
- category archive pages
- stronger resource filtering
- editorial content-entry guide
