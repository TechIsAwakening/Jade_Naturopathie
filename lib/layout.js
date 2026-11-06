const { cfg, abs, esc, txt, icons, paw, insta, fb } = require('./helpers');
const { texts: t, colors: c, seo } = cfg;

// Rempli par build.js : liens affichés dans le pied de page
const nav = { services: [], animals: [], articles: [] };

const socials = (cls = '') => `<div class="socials${cls}">
          <a href="${esc(t.footer.instagram)}" rel="noopener me" target="_blank" aria-label="Instagram">${insta}</a>
          <a href="${esc(t.footer.facebook)}" rel="noopener me" target="_blank" aria-label="Facebook">${fb}</a>
        </div>`;

const logo = (cls, eager = false) => `<img class="${cls}" src="/assets/img/logo-96.png" srcset="/assets/img/logo-96.png 1x, /assets/img/logo-192.png 2x" width="96" height="96" alt="Logo ${esc(t.brandName)} – naturopathe animalière à Toulouse"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}>`;

const linkList = items => items.map(i => `<li><a href="${esc(i.href)}">${esc(i.label)}</a></li>`).join('');

function renderPage({ path, title, description, main, schema = [], noindex = false, current = '', ogType = 'website', ogImage = '/assets/img/og.jpg', headExtra = '' }) {
  const isHome = path === '/';
  const r = t.testimonials.rating;
  const href = h => (h.startsWith('#') && !isHome ? '/' + h : h);
  const ld = schema.length ? `\n  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schema })}</script>` : '';

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
  <meta name="theme-color" content="${c.bg}">
  <link rel="canonical" href="${abs(path)}">

  <meta property="og:type" content="${ogType}">
  <meta property="og:locale" content="fr_FR">
  <meta property="og:site_name" content="${esc(seo.siteName)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${abs(path)}">
  <meta property="og:image" content="${abs(ogImage)}">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="icon" href="/assets/img/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="/assets/img/logo-192.png">
  <link rel="preload" href="/assets/fonts/nunito-normal-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/cormorant-garamond-normal-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/css/bundle.css">${headExtra}${ld}
</head>
<body>
  <a class="skip" href="#contenu">${esc(t.skipLink)}</a>

  <header class="site-header">
    <div class="container header-top">
      <a href="/" class="brand" aria-label="${esc(t.brandName)} – ${esc(t.hero.role)}">${logo('brand-logo', true)}</a>
    </div>
    <div class="container nav-row">
      <a href="${isHome ? '#avis' : '/#avis'}" class="header-rating" aria-label="Note moyenne ${r.value} sur ${r.best}, ${r.count} avis ${esc(r.label)}">
        <span class="stars" aria-hidden="true">★★★★★</span>
        <span>${r.value}/${r.best} (${r.count} avis)</span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="menu">${esc(t.menuButton)}</button>
      <nav aria-label="Navigation principale" id="menu" class="nav">
        <ul>
${t.nav.map(n => `          <li><a href="${esc(href(n.href))}"${n.href === current ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`).join('\n')}
        </ul>
      </nav>
      ${socials()}
    </div>
  </header>

  <main id="contenu">
${main}
  </main>

  <footer class="site-footer">
    <div class="container">
      <figure class="quote">
        <blockquote>${txt(t.footer.quote)}</blockquote>
        <figcaption>${esc(t.footer.quoteAuthor)}</figcaption>
      </figure>
      <div class="footer-links">
        <nav aria-labelledby="f-services"><h2 id="f-services">${esc(t.footer.servicesTitle)}</h2><ul>${linkList(nav.services)}</ul></nav>
        <nav aria-labelledby="f-animals"><h2 id="f-animals">${esc(t.footer.animalsTitle)}</h2><ul>${linkList(nav.animals)}</ul></nav>
        <nav aria-labelledby="f-blog"><h2 id="f-blog">${esc(t.footer.blogTitle)}</h2><ul>${linkList(nav.articles)}</ul></nav>
      </div>
      <div class="footer-grid">
        <div class="brand brand-footer">${logo('brand-logo')}</div>
        <div>
          <h2>${esc(t.footer.contactTitle)}</h2>
          <address>
            <a href="mailto:${esc(t.footer.email)}">${esc(t.footer.email)}</a><br>
            <a href="tel:${esc(t.footer.phoneLink)}">${esc(t.footer.phone)}</a>
          </address>
        </div>
        <div>
          <h2>${esc(t.footer.termsTitle)}</h2>
          <ul>
${t.footer.terms.map(l => `            <li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('\n')}
          </ul>
        </div>
        <div>
          <h2>${esc(t.footer.followTitle)}</h2>
          ${socials(' round')}
        </div>
      </div>
      <p class="copy">${esc(t.footer.copyright)}</p>
    </div>
  </footer>

  <script src="/js/main.js" defer></script>
</body>
</html>
`;
}

const breadcrumb = items => {
  const html = items.map((it, i) => i === items.length - 1
    ? `<li aria-current="page">${esc(it.label)}</li>`
    : `<li><a href="${esc(it.href)}">${esc(it.label)}</a></li>`).join('');
  const schema = {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.label, item: abs(it.href || it.path) }))
  };
  return { html: `<nav class="breadcrumb container" aria-label="Fil d'Ariane"><ol>${html}</ol></nav>`, schema };
};

module.exports = { renderPage, breadcrumb, nav, socials };
