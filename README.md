# DESCF Static HTML + Decap CMS Starter

Static HTML website starter for DESCF with:
- GitHub repository workflow
- Netlify deployment
- Decap CMS admin panel
- JSON content files editable from `/admin`

## Stack
- HTML, CSS, vanilla JavaScript
- Decap CMS
- Netlify
- GitHub

## Project structure

```text
.
├── index.html
├── about/index.html
├── current-work/index.html
├── strategic-priorities/index.html
├── resources/index.html
├── partner-with-us/index.html
├── admin/
├── assets/
├── content/
└── netlify.toml
```

## Local development

Serve the project with any static web server.

```bash
python -m http.server 8000
```

Open:
- http://localhost:8000
- http://localhost:8000/admin

For local CMS editing with Decap proxy server:

```bash
npx decap-server
```

## Netlify setup

1. Push this project to a GitHub repository.
2. Import the repository into Netlify.
3. Publish directory: `.`
4. Build command: leave empty.
5. Enable Identity and Git Gateway in Netlify.
6. Invite admin users.
7. Open `/admin` and log in.

## Content files

- `content/settings/site.json`
- `content/pages/home.json`
- `content/pages/about.json`
- `content/pages/strategic-priorities.json`
- `content/pages/partner-with-us.json`
- `content/lists/current-work.json`
- `content/lists/resources.json`

## Notes

- The site loads content from JSON files with `fetch`, so do not test with `file://`.
- `site_url` in `admin/config.yml` should be updated to your real production domain.
- Replace placeholder copy and images with your real DESCF content.
