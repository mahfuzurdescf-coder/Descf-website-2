# DESCF Static HTML + Decap CMS Starter

Customized first version for DESCF based on the current public site structure.

## Included pages
- Home
- About
- Current Work
- Strategic Priorities
- Evidence & Resources
- Partner With Us

## Included editable content files
- `content/settings/site.json`
- `content/pages/home.json`
- `content/pages/about.json`
- `content/pages/strategic-priorities.json`
- `content/pages/partner-with-us.json`
- `content/lists/current-work.json`
- `content/lists/resources.json`

## What is already customized
- Main navigation
- Homepage hero copy
- DESCF footprint stats
- About page structure
- Current Work items
- Strategic Priorities copy
- Evidence & Resources items
- Partner page copy

## What still needs manual replacement
- Real DESCF images
- Contact email and social links
- Governance / reports / donate subpages
- Domain verification and Netlify CMS login setup

## Local development
```bash
python -m http.server 8000
```

Open:
- `http://localhost:8000`
- `http://localhost:8000/admin`

For local CMS editing:
```bash
npx decap-server
```
