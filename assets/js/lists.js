document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("list-content");
  if (!root) {
    return;
  }

  const slug = root.dataset.list;
  const path = `/content/lists/${slug}.json`;

  try {
    const payload = await fetchJson(path);
    renderListPage(root, slug, payload);
  } catch (error) {
    console.error(error);
    root.innerHTML = '<p class="empty-state">This list could not be loaded.</p>';
  }
});

function renderListPage(root, slug, payload) {
  document.title = payload.meta_title || payload.title || document.title;

  const itemsMarkup = (payload.items || []).map((item) => {
    const actionHref = item.external_url || item.file || "#";
    const meta = [];

    if (slug === "current-work" && item.priority_area) {
      meta.push(`<span class="chip">${escapeHtml(item.priority_area)}</span>`);
    }

    if (slug === "resources" && item.type) {
      meta.push(`<span class="chip">${escapeHtml(item.type)}</span>`);
    }

    if (item.date) {
      meta.push(`<span class="chip">${escapeHtml(item.date)}</span>`);
    }

    return `
      <article class="card">
        <img class="card__image" src="${item.image || "/assets/images/placeholder-card.svg"}" alt="${escapeHtml(item.title || "")}">
        <div class="card__body">
          <div class="card__meta">${meta.join("")}</div>
          <h3>${escapeHtml(item.title || "")}</h3>
          <p class="muted">${escapeHtml(item.summary || "")}</p>
          ${item.body ? `<div class="muted">${renderMarkdown(item.body)}</div>` : ""}
          ${
            slug === "resources" && actionHref !== "#"
              ? `<p><a href="${actionHref}" ${item.external_url ? 'target="_blank" rel="noreferrer"' : ""}>Open resource</a></p>`
              : ""
          }
        </div>
      </article>
    `;
  }).join("");

  root.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">${escapeHtml(payload.eyebrow || "DESCF")}</span>
        <h1>${escapeHtml(payload.title || "")}</h1>
        <p class="lead">${escapeHtml(payload.intro || "")}</p>
      </div>
    </section>
    <section class="section">
      <div class="container grid grid--3">
        ${itemsMarkup || '<p class="empty-state">No items yet.</p>'}
      </div>
    </section>
  `;
}
