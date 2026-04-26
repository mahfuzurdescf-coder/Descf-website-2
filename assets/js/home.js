document.addEventListener("DOMContentLoaded", async () => {
  const heroRoot = document.getElementById("home-hero");
  const workRoot = document.getElementById("featured-work");
  const resourcesRoot = document.getElementById("featured-resources");

  try {
    const [home, work, resources] = await Promise.all([
      fetchJson("/content/pages/home.json"),
      fetchJson("/content/lists/current-work.json"),
      fetchJson("/content/lists/resources.json"),
    ]);

    renderHomeHero(heroRoot, home);
    renderFeaturedWork(workRoot, work.items || []);
    renderFeaturedResources(resourcesRoot, resources.items || []);
  } catch (error) {
    console.error(error);
    if (heroRoot) {
      heroRoot.innerHTML = '<p class="empty-state">Content could not be loaded. Check your JSON files and hosting setup.</p>';
    }
  }
});

function renderHomeHero(root, home) {
  if (!root) {
    return;
  }

  const stats = (home.stats || []).slice(0, 3).map((item) => `
    <article class="stat">
      <div class="stat__value">${escapeHtml(item.value || "")}</div>
      <div>${escapeHtml(item.label || "")}</div>
    </article>
  `).join("");

  root.innerHTML = `
    <div class="container hero__grid">
      <div>
        <span class="eyebrow">${escapeHtml(home.eyebrow || "Environmental stewardship")}</span>
        <h1>${escapeHtml(home.hero_title || "Delta Stewardship and Community Futures")}</h1>
        <p class="lead">${escapeHtml(home.hero_intro || "")}</p>
        <div class="button-row">
          <a class="button button--primary" href="${home.primary_cta_url || "/current-work/"}">${escapeHtml(home.primary_cta_label || "Explore our work")}</a>
          <a class="button button--secondary" href="${home.secondary_cta_url || "/partner-with-us/"}">${escapeHtml(home.secondary_cta_label || "Partner with us")}</a>
        </div>
        <div class="stats">${stats}</div>
      </div>
      <aside class="hero-card">
        <img class="card__image" src="${home.hero_image || "/assets/images/placeholder-hero.svg"}" alt="${escapeHtml(home.hero_image_alt || home.hero_title || "Home hero image")}">
      </aside>
    </div>
  `;
}

function renderFeaturedWork(root, items) {
  if (!root) {
    return;
  }

  const featured = items.filter((item) => item.featured).slice(0, 3);
  if (!featured.length) {
    root.innerHTML = '<p class="empty-state">No featured current work items yet.</p>';
    return;
  }

  root.innerHTML = featured.map(createWorkCard).join("");
}

function renderFeaturedResources(root, items) {
  if (!root) {
    return;
  }

  const sorted = [...items]
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 3);

  if (!sorted.length) {
    root.innerHTML = '<p class="empty-state">No resources published yet.</p>';
    return;
  }

  root.innerHTML = sorted.map(createResourceCard).join("");
}

function createWorkCard(item) {
  return `
    <article class="card">
      <img class="card__image" src="${item.image || "/assets/images/placeholder-card.svg"}" alt="${escapeHtml(item.title || "Programme image")}">
      <div class="card__body">
        <div class="card__meta">
          ${item.priority_area ? `<span class="chip">${escapeHtml(item.priority_area)}</span>` : ""}
        </div>
        <h3>${escapeHtml(item.title || "")}</h3>
        <p class="muted">${escapeHtml(item.summary || "")}</p>
      </div>
    </article>
  `;
}

function createResourceCard(item) {
  const href = item.external_url || item.file || "/resources/";
  const type = item.type || "Resource";

  return `
    <article class="card">
      <img class="card__image" src="${item.image || "/assets/images/placeholder-card.svg"}" alt="${escapeHtml(item.title || "Resource image")}">
      <div class="card__body">
        <div class="card__meta">
          <span class="chip">${escapeHtml(type)}</span>
          ${item.date ? `<span class="chip">${escapeHtml(item.date)}</span>` : ""}
        </div>
        <h3>${escapeHtml(item.title || "")}</h3>
        <p class="muted">${escapeHtml(item.summary || "")}</p>
        <a href="${href}" ${item.external_url ? 'target="_blank" rel="noreferrer"' : ""}>Open resource</a>
      </div>
    </article>
  `;
}
