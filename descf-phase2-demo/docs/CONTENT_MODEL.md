# DESCF Phase 2 Content Model

This project uses Sanity as the CMS. The schema is intentionally practical, not enterprise-bloated.

## Document Types

- `siteSettings`: global site identity, contact, footer, default SEO
- `programme`: programme pages and related content
- `post`: newsroom posts, field notes, explainers, updates
- `author`: post authors and contributors
- `category`: newsroom/resource/programme categories
- `tag`: flexible tagging
- `resource`: reports, briefs, publications, media kits, learning notes
- `event`: seminars, talks, workshops, field events
- `teamMember`: leadership, advisors, team, volunteers

## Editorial Status

Sanity already has draft and published documents. This project also includes `workflowStatus` on posts:

- `draft`
- `review`
- `published`

Only posts with `workflowStatus == "published"` are displayed in public listing queries.

## Bilingual Readiness

Phase 2 does not implement full Bengali/English routing. That is intentional. Posts include a `language` field:

- `en`
- `bn`
- `bilingual`

Full `/en` and `/bn` route architecture should be a later phase after the English-first structure is stable.

## Content Discipline

Do not add fake partners, donors, reports, rescue numbers, or field achievements. Use placeholder content only for technical testing and delete it before launch.
