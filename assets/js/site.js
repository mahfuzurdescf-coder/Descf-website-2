const SITE_SETTINGS_PATH = "/content/settings/site.json";

async function fetchJson(path) {
  const response = await fetch(path, { headers: { Accept: "application/json" } });
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }
  return response.json();
}

function renderMarkdown(markdown) {
  if (!markdown) {
    return "";
  }
  if (window.marked?.parse) {
    return window.marked.parse(markdown);
  }
  return markdown
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function currentPath() {
  const path = window.location.pathname.replace(/index\.html$/, "");
  return path.endsWith("/") ? path : `${path}/`;
}

function navIsActive(href) {
  const pagePath = currentPath();
  const normalizedHref = href.endsWith("/") ? href : `${href}/`;
  return pagePath === normalizedHref;
}

function createNavLinks(links = []) {
  return links.map((link) => {
    const current = navIsActive(link.url) ? ' aria-current="page"' : "";
    return `<a href="${link.url}"${current}>${escapeHtml(link.label)}</a>`;
  }).join("");
}

function createFooterLinks(links = []) {
  return links.map((link) => (
    `<a href="${link.url}">${escapeHtml(link.label)}</a>`
  )).join("");
}

function createSocialLinks(links = []) {
  return links.map((link) => (
    `<a href="${link.url}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
  )).join("");
}

function injectSiteChrome(site) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const year = new Date().getFullYear();

  if (header) {
    header.innerHTML = `
      <div class="container site-header__inner">
        <nav class="nav" aria-label="Primary navigation">
          <a class="brand" href="/">
            <span class="brand__title">${escapeHtml(site.site_name || "DESCF")}</span>
            <span class="brand__tagline">${escapeHtml(site.tagline || "")}</span>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">
            Menu
          </button>
          <div class="nav-links" id="nav-links">
            ${createNavLinks(site.navigation)}
          </div>
        </nav>
      </div>
    `;

    const menuButton = header.querySelector(".menu-toggle");
    const navLinks = header.querySelector(".nav-links");

    menuButton?.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      navLinks?.classList.toggle("is-open");
    });
  }

  if (footer) {
    footer.innerHTML = `
      <div class="container site-footer__inner">
        <div class="site-footer__grid">
          <section>
            <h3>${escapeHtml(site.site_name || "DESCF")}</h3>
            <p class="muted">${escapeHtml(site.footer_blurb || "")}</p>
          </section>
          <section>
            <h3>Explore</h3>
            <div class="footer-links">
              ${createFooterLinks(site.navigation)}
            </div>
          </section>
          <section>
            <h3>Connect</h3>
            <div class="footer-meta">
              <span>${escapeHtml(site.contact_email || "")}</span>
              ${createSocialLinks(site.social_links)}
            </div>
          </section>
        </div>
        <div class="footer-bottom">
          <span>© ${year} ${escapeHtml(site.site_name || "DESCF")}</span>
          <span>${escapeHtml(site.footer_note || "Built with GitHub + Netlify + Decap CMS")}</span>
        </div>
      </div>
    `;
  }

  document.title = site.default_meta_title || document.title;
}

async function bootstrapSiteChrome() {
  try {
    const site = await fetchJson(SITE_SETTINGS_PATH);
    injectSiteChrome(site);
    return site;
  } catch (error) {
    console.error(error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  bootstrapSiteChrome();
});
