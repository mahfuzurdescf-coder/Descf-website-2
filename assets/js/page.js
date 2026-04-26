document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("page-content");
  if (!root) {
    return;
  }

  const slug = root.dataset.page;
  const path = `/content/pages/${slug}.json`;

  try {
    const page = await fetchJson(path);
    renderGenericPage(root, page);
  } catch (error) {
    console.error(error);
    root.innerHTML = '<p class="empty-state">This page could not be loaded.</p>';
  }
});

function renderGenericPage(root, page) {
  document.title = page.meta_title || page.title || document.title;

  root.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">${escapeHtml(page.eyebrow || "DESCF")}</span>
        <h1>${escapeHtml(page.title || "")}</h1>
        <p class="lead">${escapeHtml(page.intro || "")}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${page.image ? `<img src="${page.image}" alt="${escapeHtml(page.image_alt || page.title || "")}">` : ""}
      </div>
    </section>
    <section class="section">
      <div class="container">
        <article class="rich-content">${renderMarkdown(page.body || "")}</article>
      </div>
    </section>
  `;
}
