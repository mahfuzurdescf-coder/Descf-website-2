# DESCF Phase 1 Demo

This is a lean Phase 1 starter for the DESCF website rebuild.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static placeholder data
- Sanity-ready route and structure placeholders

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
- `/studio` placeholder

## Not included yet

- Sanity CMS connection
- GROQ queries
- Real Sanity Studio
- Working contact form
- Donation payment gateway
- Real DESCF reports, partners, donors, or achievements
- Full bilingual routing

That is intentional. Do not overload Phase 1.

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

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial DESCF Phase 1 demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Deploy to Vercel

1. Import the GitHub repo in Vercel.
2. Framework preset should be Next.js.
3. Build command: `npm run build`.
4. Output directory: leave default.
5. Add environment variables later when Sanity is connected.

## Phase 2 plan

Next phase should add:

- Sanity project setup
- `next-sanity`
- Sanity Studio at `/studio`
- schemas for site settings, programme, post, author, category, tag, and resource
- GROQ queries
- CMS-driven programme, newsroom, and resource pages
- SEO and Open Graph fields from CMS

## Brutal reminder

Do not publish this version as the final public site. It is a technical foundation for testing GitHub, Vercel, routing, layout, responsiveness, and the future CMS structure.
