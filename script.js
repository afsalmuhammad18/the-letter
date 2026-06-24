const latestArticle = {
  title: "Bahaya Mengambil Keputusan Saat Butterfly Era",
  url: "https://www.afsalmuhammad.web.id/2026/06/bahaya-mengambil-keputusan-saat-butterfly-era.html",
<<<<<<< HEAD
  date: "2026-06-18",
=======
>>>>>>> 10f85389dc4477962f7863c8b21c14f1e3e20170
};

const olderArticles = [
  {
    title:
<<<<<<< HEAD
      "Tak Ada yang Bisa Kita Andalkan Selain Diri Sendiri, Berpikir dan Bangkit",
    url: "https://www.afsalmuhammad.web.id/2026/01/tak-ada-yang-bisa-diandalkan-selain-diri-sendiri.html",
    date: "2026-01-15",
=======
      "Tak Ada yang Bisa Kita Andalkan Selain Diri Sendiri, Berpikir dan Bangkit ",
    url: "https://www.afsalmuhammad.web.id/2026/01/tak-ada-yang-bisa-diandalkan-selain-diri-sendiri.html",
>>>>>>> 10f85389dc4477962f7863c8b21c14f1e3e20170
  },
];

const siteDomain = "afsalmuhammad.web.id";
const olderArticlePreviewLimit = 3;
let showAllOlderArticles = false;

function hasRealUrl(url) {
  return typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
}

function applyLink(anchor, article) {
  if (!hasRealUrl(article.url)) {
    anchor.href = "#";
    anchor.classList.add("is-disabled");
    anchor.setAttribute("aria-disabled", "true");
    anchor.addEventListener("click", (event) => event.preventDefault());
    return;
  }

  anchor.href = article.url;
  anchor.target = "_blank";
  anchor.rel = "noopener";
}

function createDomainText() {
  const domain = document.createElement("p");
  domain.className = "article-domain";
  domain.textContent = siteDomain;
  return domain;
}

function renderLatestArticle() {
  const mount = document.querySelector("#latestArticle");
<<<<<<< HEAD
  const article = document.createElement("article");

=======
>>>>>>> 10f85389dc4477962f7863c8b21c14f1e3e20170
  const anchor = document.createElement("a");
  anchor.className = "latest-card";
  anchor.setAttribute("aria-label", `Buka ${latestArticle.title}`);
  applyLink(anchor, latestArticle);

  const inner = document.createElement("div");
  inner.className = "latest-inner";

  const badge = document.createElement("span");
  badge.className = "article-badge";
  badge.textContent = "Terbaru";

  const title = document.createElement("h3");
  title.textContent = latestArticle.title;

<<<<<<< HEAD
  const footer = document.createElement("footer");
  footer.className = "article-meta";
  footer.append(createDomainText());
  if (latestArticle.date) {
    const time = document.createElement("time");
    time.setAttribute("datetime", latestArticle.date);
    time.textContent = new Date(latestArticle.date).toLocaleDateString("id-ID", {
      year: "numeric", month: "long", day: "numeric",
    });
    footer.append(time);
  }

  inner.append(badge, title, footer);
  anchor.append(inner);
  article.append(anchor);
  mount.append(article);
=======
  inner.append(badge, title, createDomainText());
  anchor.append(inner);
  mount.append(anchor);
>>>>>>> 10f85389dc4477962f7863c8b21c14f1e3e20170
}

function renderOlderArticles() {
  const mount = document.querySelector("#olderArticles");
  const actions = document.querySelector("#archiveActions");
  const section = document.querySelector(".archive-section");

  if (olderArticles.length === 0) {
    section.hidden = true;
    return;
  }

  mount.innerHTML = "";
  actions.innerHTML = "";

  const visibleArticles = showAllOlderArticles
    ? olderArticles
    : olderArticles.slice(0, olderArticlePreviewLimit);

  visibleArticles.forEach((article, index) => {
<<<<<<< HEAD
    const wrapper = document.createElement("article");

=======
>>>>>>> 10f85389dc4477962f7863c8b21c14f1e3e20170
    const anchor = document.createElement("a");
    anchor.className = "archive-card";
    anchor.setAttribute("aria-label", `Buka ${article.title}`);
    applyLink(anchor, article);

    const number = document.createElement("span");
    number.className = "archive-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = article.title;
<<<<<<< HEAD

    const meta = document.createElement("footer");
    meta.className = "article-meta";
    meta.append(createDomainText());
    if (article.date) {
      const time = document.createElement("time");
      time.setAttribute("datetime", article.date);
      time.textContent = new Date(article.date).toLocaleDateString("id-ID", {
        year: "numeric", month: "long", day: "numeric",
      });
      meta.append(time);
    }

    content.append(title, meta);
    anchor.append(number, content);
    wrapper.append(anchor);
    mount.append(wrapper);
=======
    content.append(title, createDomainText());

    anchor.append(number, content);
    mount.append(anchor);
>>>>>>> 10f85389dc4477962f7863c8b21c14f1e3e20170
  });

  if (olderArticles.length <= olderArticlePreviewLimit) {
    return;
  }

  const hiddenCount = olderArticles.length - olderArticlePreviewLimit;
  const button = document.createElement("button");
  button.className = "view-more-button";
  button.type = "button";
  button.setAttribute("aria-controls", "olderArticles");
  button.setAttribute("aria-expanded", String(showAllOlderArticles));
  button.textContent = showAllOlderArticles
    ? "Tampilkan lebih sedikit"
    : `Lihat ${hiddenCount} artikel lainnya`;

  button.addEventListener("click", () => {
    showAllOlderArticles = !showAllOlderArticles;
    renderOlderArticles();
  });

  actions.append(button);
}

renderLatestArticle();
renderOlderArticles();
