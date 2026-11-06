// Génère tout le site (pages HTML, CSS, sitemap, robots) à partir de
// site.config.js (textes/couleurs de l'accueil) et content.config.js (pages détaillées).
// Usage : node build.js   (ou npm run build)
const fs = require('fs');
const path = require('path');
const { siteUrl, abs, esc, txt, rich, icons, picture, frDate, cfg } = require('./lib/helpers');
const { renderPage, breadcrumb, nav } = require('./lib/layout');
const content = require('./content.config.js');

const { texts: t, colors: c, seo } = cfg;
const root = __dirname;
const today = new Date().toISOString().slice(0, 10);
const warnings = [];
const warn = m => warnings.push(m);

const pages = new Map(); // chemin -> { html, indexable, lastmod, file }
const addPage = (p, html, opts = {}) => pages.set(p, { html, indexable: !opts.noindex, lastmod: opts.lastmod || today, file: opts.file });

// ───────────── Données dérivées ─────────────
const serviceItem = slug => t.services.items.find(i => i.page === slug);
const articles = [...content.articles].sort((a, b) => b.date.localeCompare(a.date));
const lookup = new Map();
content.servicePages.forEach(p => lookup.set(p.slug, { href: `/${p.slug}/`, title: p.navLabel, text: p.lead, icon: p.icon }));
content.animalPages.forEach(p => lookup.set(p.slug, { href: `/${p.slug}/`, title: p.navLabel, text: p.lead, icon: p.icon }));
articles.forEach(a => lookup.set(a.slug, { href: `/blog/${a.slug}/`, title: a.title, text: a.excerpt, icon: 'book' }));

nav.services.push(...content.servicePages.map(p => ({ label: p.navLabel, href: `/${p.slug}/` })));
nav.animals.push(...content.animalPages.map(p => ({ label: p.navLabel, href: `/${p.slug}/` })));
nav.articles.push(...articles.slice(0, 5).map(a => ({ label: a.title, href: `/blog/${a.slug}/` })));

const areaServed = seo.areaServed.map(n => ({ '@type': 'AdministrativeArea', name: n }));
const business = {
  '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
  '@id': abs('/#business'),
  name: seo.siteName,
  description: seo.businessDescription,
  url: abs('/'),
  image: abs('/assets/img/og.jpg'),
  logo: abs('/assets/img/logo-512.png'),
  email: t.footer.email,
  telephone: t.footer.phoneLink,
  priceRange: seo.priceRange,
  aggregateRating: { '@type': 'AggregateRating', ratingValue: t.testimonials.rating.value, bestRating: t.testimonials.rating.best, reviewCount: t.testimonials.rating.count },
  address: { '@type': 'PostalAddress', addressLocality: seo.city, addressRegion: seo.region, addressCountry: 'FR' },
  areaServed,
  founder: { '@id': abs('/#jade') },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: t.services.title,
    itemListElement: t.services.items.map(s => ({
      '@type': 'Offer', price: s.price, priceCurrency: 'EUR', url: abs(`/${s.page}/`),
      itemOffered: { '@type': 'Service', name: s.schemaName || s.title }
    }))
  }
};
const person = {
  '@type': 'Person', '@id': abs('/#jade'), name: t.hero.name, jobTitle: 'Naturopathe et kinésiologue animalière',
  image: abs('/assets/img/jade-800.jpg'), url: abs('/#a-propos'), worksFor: { '@id': abs('/#business') }
};
const providerRef = { '@type': 'LocalBusiness', '@id': abs('/#business'), name: seo.siteName, url: abs('/') };
const faqSchema = list => ({ '@type': 'FAQPage', mainEntity: list.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') } })) });

// ───────────── Briques HTML ─────────────
const cut = s => {
  const first = s.match(/^.+?[.!?](?=\s|$)/);
  if (first && first[0].length <= 150) return first[0];
  return s.length > 140 ? s.slice(0, 137).replace(/\s+\S*$/, '') + '…' : s;
};

const ctaBand = () => `    <section class="cta-band" aria-labelledby="cta-titre">
      <div class="container narrow">
        <h2 id="cta-titre">${esc(t.pages.ctaTitle)}</h2>
        <p>${txt(t.pages.ctaText)}</p>
        <a class="btn" href="/#contact">${esc(t.pages.ctaButton)}</a>
      </div>
    </section>`;

const faqHtml = (list, title, sub) => `<section class="faq" aria-labelledby="faq-titre">
      <h2 id="faq-titre" class="section-title">${esc(title)}</h2>${sub ? `\n      <p class="section-sub">${txt(sub)}</p>` : ''}
${list.map(f => `      <details><summary>${txt(f.q)}</summary><p>${rich(f.a)}</p></details>`).join('\n')}
    </section>`;

const sectionHtml = s => `<section class="prose-block">
        <h2>${txt(s.h2)}</h2>
${(s.text || []).map(p => `        <p>${rich(p)}</p>`).join('\n')}${s.list ? `\n        <ul>${s.list.map(i => `<li>${rich(i)}</li>`).join('')}</ul>` : ''}${s.quote ? `\n        <figure class="pquote"><blockquote>${txt('« ' + s.quote.text + ' »')}</blockquote><figcaption>${esc(s.quote.author)} · ${esc(s.quote.source)} · <a href="/#avis">${esc(t.pages.reviewsLink)}</a></figcaption></figure>` : ''}
      </section>`;

const cards = slugs => `<ul class="cards">${slugs.map(s => {
  const r = lookup.get(s);
  if (!r) { warn(`Lien « related » inconnu : ${s}`); return ''; }
  return `<li><a class="card" href="${r.href}"><span class="icon">${icons[r.icon] || ''}</span><h3>${txt(r.title)}</h3><p>${txt(cut(r.text))}</p></a></li>`;
}).join('')}</ul>`;

const relatedHtml = slugs => `<section class="related" aria-labelledby="rel-titre">
      <h2 id="rel-titre" class="section-title">${esc(t.pages.relatedTitle)}</h2>
      ${cards(slugs)}
    </section>`;

const pageHero = (h1, lead, extra = '') => `<header class="page-hero">
      <div class="container narrow">
        <h1>${txt(h1)}</h1>
        <p class="lead">${rich(lead)}</p>${extra}
      </div>
    </header>`;

const priceBox = item => item ? `\n        <aside class="price-box" aria-label="${esc(t.pages.priceTitle)}"><p class="price">${esc(item.price)}&nbsp;€${item.duration ? `<small>${esc(item.duration)}</small>` : ''}</p><a class="btn" href="/#contact">${esc(t.pages.ctaButton)}</a></aside>` : '';

const crumbs = items => breadcrumb(items);
const homeCrumb = { label: t.pages.breadcrumbHome, href: '/' };

// ───────────── Accueil ─────────────
function buildHome() {
  const r = t.testimonials.rating;
  const heroWidths = [640, 960, 1280, 1920];
  const main = `    <section id="accueil" class="hero" aria-labelledby="titre-principal">
      <video class="hero-video" autoplay muted loop playsinline preload="metadata">
        <source src="/assets/img/hero.mp4" type="video/mp4">
      </video>
      <div class="hero-fade" aria-hidden="true"></div>
      <div class="container hero-content">
        <h1 id="titre-principal">
          <span class="hero-name">${esc(t.hero.name)}</span>
          <span class="hero-role">${esc(t.hero.role)}</span>
        </h1>
        <a class="btn" href="#contact">${esc(t.hero.cta)}</a>
      </div>
    </section>

    <section class="intro" aria-labelledby="intro-titre">
      <h2 id="intro-titre" class="intro-title">${t.intro.title.map(esc).join('<br>')}</h2>
      <p class="intro-text">${rich(t.intro.text)}</p>
    </section>

    <section class="container narrow" aria-labelledby="naturo-titre">
      <div class="card-green">
        <h2 id="naturo-titre">${txt(t.naturopathy.title)}</h2>
${t.naturopathy.paragraphs.map(p => `        <p>${txt(p)}</p>`).join('\n')}
      </div>

      <h2 class="h-left">${esc(t.domains.title)}</h2>
      <ul class="domains">
${t.domains.items.map(d => `        <li>${d.href ? `<a href="${esc(d.href)}">` : ''}<span class="icon">${icons[d.icon] || ''}</span><span>${esc(d.label)}</span>${d.href ? '</a>' : ''}</li>`).join('\n')}
      </ul>
    </section>

    <section id="accompagnements" class="container services" aria-labelledby="services-titre">
      <h2 id="services-titre" class="section-title">${esc(t.services.title)}</h2>
      <p class="section-sub">${txt(t.services.subtitle)}</p>
      <div class="grid-2">
${t.services.items.map(s => `        <article class="service">
          <div class="service-head">
            <span class="icon">${icons[s.icon] || ''}</span>
            <p class="price">${esc(s.price)}&nbsp;€${s.duration ? `<small>${esc(s.duration)}</small>` : ''}</p>
          </div>
          <h3><a href="/${s.page}/">${esc(s.title)}</a></h3>
          <p>${txt(s.description)}</p>
          <a class="more" href="/${s.page}/">${esc(t.services.moreLabel)}<span class="sr-only"> : ${esc(s.title)}</span> →</a>
        </article>`).join('\n')}
      </div>
      <p class="center"><a class="btn-outline" href="${t.services.detailHref}">${esc(t.services.detailButton)}</a></p>
    </section>

    <section id="animaux" class="container animals" aria-labelledby="animaux-titre">
      <h2 id="animaux-titre" class="section-title">${esc(t.animals.title)}</h2>
      <p class="section-sub">${txt(t.animals.subtitle)}</p>
      <ul class="cards">
${t.animals.items.map(a => `        <li><a class="card" href="/${a.page}/"><span class="icon">${icons[a.icon] || ''}</span><h3>${esc(a.title)}</h3><p>${txt(a.description)}</p><span class="more">${esc(t.animals.moreLabel)} →</span></a></li>`).join('\n')}
      </ul>
    </section>

    <section id="a-propos" class="container about" aria-labelledby="apropos-titre">
      <h2 id="apropos-titre" class="section-title">${esc(t.about.title)}</h2>
      <div class="about-grid">
        ${picture({ name: 'jade', widths: [400, 640, 800], sizes: '(min-width:860px) 400px, 92vw', alt: t.about.imageAlt, width: 800, height: 1067, cls: 'about-img' })}
        <div>
          <p class="about-lead">${txt(t.about.lead)}</p>
${t.about.paragraphs.map(p => `          <p>${txt(p)}</p>`).join('\n')}
          <p><a class="btn-outline" href="#contact">${esc(t.about.button)}</a></p>
        </div>
      </div>
    </section>

    <section id="avis" class="testimonials" aria-labelledby="avis-titre">
      <div class="container">
        <h2 id="avis-titre" class="section-title">${esc(t.testimonials.title)}</h2>
        <p class="section-sub">${esc(t.testimonials.subtitle)}</p>
        <p class="rating"><span class="stars" aria-hidden="true">★★★★★</span> <strong>${r.value}/${r.best}</strong> · ${r.count} avis ${esc(r.label)} — <a href="${esc(t.testimonials.googleUrl)}" target="_blank" rel="noopener">${esc(r.linkLabel)}</a></p>
        <div class="carousel" aria-roledescription="carrousel">
          <button class="car-btn" type="button" data-dir="-1" aria-label="${esc(t.testimonials.prev)}">‹</button>
          <div class="slides" aria-live="polite">
${t.testimonials.items.map((s, i) => `            <figure class="slide"${i === 0 ? '' : ' hidden'}>
              <div class="stars" role="img" aria-label="${esc(t.testimonials.starsLabel)}">★★★★★</div>
              <blockquote${s.quote.length > 220 ? ' class="long"' : ''}>${txt('« ' + s.quote + ' »')}</blockquote>
              <figcaption>${esc(s.author)}${s.date ? ` · <span>${esc(s.date)}</span>` : ''}</figcaption>
            </figure>`).join('\n')}
          </div>
          <button class="car-btn" type="button" data-dir="1" aria-label="${esc(t.testimonials.next)}">›</button>
        </div>
        <div class="dots" aria-hidden="true"></div>
      </div>
    </section>

    <div class="container narrow home-faq" id="faq">
      ${faqHtml(seo.faq, t.faq.title, t.faq.subtitle)}
    </div>

    <section id="blog-recent" class="container blog-teaser" aria-labelledby="blog-teaser-titre">
      <h2 id="blog-teaser-titre" class="section-title">${esc(t.blogTeaser.title)}</h2>
      <p class="section-sub">${txt(t.blogTeaser.subtitle)}</p>
      ${cards(articles.slice(0, 3).map(a => a.slug))}
      <p class="center"><a class="btn-outline" href="/blog/">${esc(t.blogTeaser.allPosts)}</a></p>
    </section>

    <section id="contact" class="container contact" aria-labelledby="contact-titre">
      <h2 id="contact-titre" class="section-title thin">${esc(t.contact.title)}</h2>
      <p class="section-sub">${txt(t.contact.subtitle)}</p>
      <form id="contact-form" class="form" novalidate data-service="${esc(t.contact.emailjs.serviceId)}" data-template="${esc(t.contact.emailjs.templateId)}" data-key="${esc(t.contact.emailjs.publicKey)}" data-sending="${esc(t.contact.sending)}" data-error="${esc(t.contact.error)}" data-invalid="${esc(t.contact.invalid)}" data-success="${esc(t.contact.success)}">
        <div class="row">
          <div class="field"><label for="nom">${esc(t.contact.labels.name)}</label><input id="nom" name="nom" type="text" autocomplete="name" required></div>
          <div class="field"><label for="email">${esc(t.contact.labels.email)}</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        </div>
        <div class="field">
          <label for="animal">${esc(t.contact.labels.animal)}</label>
          <select id="animal" name="animal">
${t.contact.animals.map(a => `            <option>${esc(a)}</option>`).join('\n')}
          </select>
        </div>
        <div class="field"><label for="message">${esc(t.contact.labels.message)}</label><textarea id="message" name="message" rows="5" required></textarea></div>
        <button class="btn btn-block" type="submit">${esc(t.contact.submit)}</button>
        <p id="form-status" role="status"></p>
      </form>
    </section>`;

  const headExtra = `\n  <link rel="preload" href="/assets/img/hero.mp4" as="video" type="video/mp4" fetchpriority="high">`;
  addPage('/', renderPage({
    path: '/', title: seo.title, description: seo.description, main, current: '#accueil', headExtra,
    schema: [business, person, { '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: seo.siteName, inLanguage: 'fr-FR', publisher: { '@id': abs('/#business') } }, faqSchema(seo.faq)]
  }));
}

// ───────────── Pages prestation / animal ─────────────
function buildDetailPage(p, kind) {
  const url = `/${p.slug}/`;
  const item = kind === 'service' ? serviceItem(p.slug) : null;
  if (kind === 'service' && !item && !p.noPrice) warn(`Prestation sans tarif dans texts.services.items : ${p.slug}`);
  const bc = crumbs([homeCrumb, { label: t.pages.servicesTitle, href: '/accompagnements/' }, { label: p.navLabel, href: url }]);
  const main = `${bc.html}
    <article>
      ${pageHero(p.h1, p.lead, priceBox(item))}
      <div class="container narrow prose">
        ${p.sections.map(sectionHtml).join('\n        ')}
        <p class="disclaimer">${txt(t.pages.disclaimer)}</p>
      </div>
    </article>
    <div class="container narrow">
      ${faqHtml(p.faq, t.pages.faqTitle)}
      ${relatedHtml(p.related)}
    </div>
${ctaBand()}`;
  const service = {
    '@type': 'Service', '@id': abs(url + '#service'), name: item ? item.schemaName : p.serviceType || p.h1,
    serviceType: p.serviceType || (item ? item.schemaName : p.h1), description: p.description, url: abs(url),
    provider: providerRef, areaServed,
    ...(item ? { offers: { '@type': 'Offer', price: item.price, priceCurrency: 'EUR' } } : {})
  };
  addPage(url, renderPage({ path: url, title: p.title, description: p.description, main, schema: [service, bc.schema, faqSchema(p.faq)] }));
  seoCheck(url, p.title, p.description);
}

// ───────────── Hub accompagnements ─────────────
function buildHub() {
  const a = t.accompagnements, url = '/accompagnements/';
  const title = a.title;
  const bc = crumbs([homeCrumb, { label: t.pages.servicesTitle, href: url }]);
  const main = `${bc.html}
    <article>
      ${pageHero(a.h1, a.lead)}
      <div class="container prose-wide">
        <h2 class="section-title">${esc(t.pages.servicesTitle)}</h2>
        <ul class="cards">${content.servicePages.map(p => {
          const it = serviceItem(p.slug);
          return `<li><a class="card" href="/${p.slug}/"><span class="icon">${icons[p.icon] || ''}</span><h3>${txt(p.navLabel)}</h3>${it ? `<p class="price">${esc(it.price)}&nbsp;€${it.duration ? `<small>${esc(it.duration)}</small>` : ''}</p>` : ''}<p>${txt(cut(p.lead))}</p><span class="more">${esc(t.services.moreLabel)} →</span></a></li>`;
        }).join('')}</ul>
        <h2 class="section-title">${esc(t.pages.animalsTitle)}</h2>
        ${cards(content.animalPages.map(p => p.slug))}
      </div>
    </article>
${ctaBand()}`;
  addPage(url, renderPage({
    path: url, title, description: a.metaDescription, main,
    schema: [bc.schema, { '@type': 'CollectionPage', name: a.h1, url: abs(url), isPartOf: { '@id': abs('/#website') } }]
  }));
  seoCheck(url, title, a.metaDescription);
}

// ───────────── Blog ─────────────
function buildBlog() {
  const b = t.blog, url = '/blog/';
  const bc = crumbs([homeCrumb, { label: 'Blog', href: url }]);
  const main = `${bc.html}
    <section>
      ${pageHero(b.h1, b.lead)}
      <div class="container prose-wide">
        <ul class="cards">${articles.map(a => `<li><a class="card" href="/blog/${a.slug}/"><h2 class="card-title">${txt(a.title)}</h2><p class="meta"><time datetime="${a.date}">${frDate(a.date)}</time> · ${a.minutes} ${esc(b.readingTime)}</p><p>${txt(a.excerpt)}</p><span class="more">${esc(b.readMore)} →</span></a></li>`).join('')}</ul>
      </div>
    </section>
${ctaBand()}`;
  addPage(url, renderPage({
    path: url, title: b.title, description: b.metaDescription, main,
    schema: [bc.schema, { '@type': 'Blog', name: b.h1, url: abs(url), inLanguage: 'fr-FR', publisher: { '@id': abs('/#business') } }]
  }));
  seoCheck(url, b.title, b.metaDescription);

  articles.forEach(a => {
    const u = `/blog/${a.slug}/`;
    const bca = crumbs([homeCrumb, { label: 'Blog', href: url }, { label: a.title, href: u }]);
    const others = articles.filter(x => x.slug !== a.slug).slice(0, 3).map(x => x.slug);
    const body = `${bca.html}
    <article class="post">
      ${pageHero(a.h1, a.lead, `\n        <p class="meta">${esc(b.publishedOn)} <time datetime="${a.date}">${frDate(a.date)}</time> · ${a.minutes} ${esc(b.readingTime)} · ${esc(t.hero.name)}</p>`)}
      <div class="container narrow prose">
        ${a.sections.map(sectionHtml).join('\n        ')}
        <p class="disclaimer">${txt(t.pages.disclaimer)}</p>
        <aside class="author-box"><h2>${esc(b.authorTitle)}</h2><p>${txt(b.authorText)}</p><p><a href="/#a-propos">${esc(b.authorLink)}</a></p></aside>
      </div>
    </article>
    <div class="container narrow">
      ${relatedHtml(a.related)}
      <section class="related"><h2 class="section-title">${esc(b.moreArticles)}</h2>${cards(others)}</section>
    </div>
${ctaBand()}`;
    addPage(u, renderPage({
      path: u, title: a.title, description: a.description, main: body, ogType: 'article',
      schema: [{
        '@type': 'BlogPosting', '@id': abs(u + '#post'), headline: a.h1, description: a.description, inLanguage: 'fr-FR',
        datePublished: a.date, dateModified: a.updated || a.date, mainEntityOfPage: abs(u), image: abs('/assets/img/og.jpg'),
        author: { '@id': abs('/#jade') }, publisher: { '@id': abs('/#business') }
      }, person, bca.schema]
    }), { lastmod: a.updated || a.date });
    seoCheck(u, a.title, a.description);
  });
}

// ───────────── Pages légales ─────────────
function buildLegal() {
  const L = content.legal, brand = L.publisher;
  const doc = [
    { slug: 'mentions-legales', title: 'Mentions légales | Jade Burgunder', h1: 'Mentions légales', sections: [
      { h2: 'Éditeur du site', text: [`${brand}, naturopathe et kinésiologue animalière.`, `Statut : ${L.status}`, `SIRET : ${L.siret}`, `Adresse : ${L.address}`, `Email : ${t.footer.email} · Téléphone : ${t.footer.phone}`, L.vat] },
      { h2: 'Directrice de la publication', text: [brand] },
      { h2: 'Hébergement', text: [L.hostName, L.hostAddress] },
      { h2: 'Propriété intellectuelle', text: ["Les textes, photographies et éléments graphiques de ce site sont la propriété de l'éditeur, sauf mention contraire. Toute reproduction sans autorisation est interdite."] },
      { h2: 'Avertissement', text: [t.pages.disclaimer + ' Les informations de ce site sont données à titre indicatif et ne constituent pas un avis médical ou vétérinaire.'] },
      { h2: 'Médiation de la consommation', text: [L.mediator] }
    ] },
    { slug: 'conditions-generales', title: 'Conditions générales | Jade Burgunder', h1: 'Conditions générales', sections: [
      { h2: 'Prestations', text: ["Les prestations proposées (bilan naturopathique, suivi, kinésiologie, réflexologie cranio-sacrée) sont décrites sur ce site avec leur tarif en euros. Elles ne constituent pas un acte médical ou vétérinaire et ne remplacent jamais le suivi de votre vétérinaire."] },
      { h2: 'Rendez-vous', text: ['Les rendez-vous se prennent par le formulaire de contact, par email ou par téléphone.'] },
      { h2: 'Tarifs et paiement', text: [`Les tarifs sont indiqués sur chaque page de prestation. ${L.vat}`, `Moyens de paiement : ${L.payment}`] },
      { h2: 'Annulation', text: [L.cancellation] },
      { h2: 'Responsabilité', text: ["Le client reste responsable de la santé de son animal et s'engage à consulter un vétérinaire en cas de symptôme inquiétant. Les conseils délivrés sont personnalisés et ne garantissent aucun résultat."] },
      { h2: 'Médiation de la consommation', text: [L.mediator] }
    ] },
    { slug: 'politique-de-confidentialite', title: 'Politique de confidentialité | Jade Burgunder', h1: 'Politique de confidentialité', sections: [
      { h2: 'Données collectées', text: ["Le formulaire de contact collecte votre nom, votre adresse email, le type d'animal et votre message, uniquement pour répondre à votre demande."] },
      { h2: "Service d'envoi", text: [`Le message est transmis par le service EmailJS à l'adresse ${t.footer.email}. Il n'est ni vendu ni utilisé à d'autres fins.`] },
      { h2: 'Durée de conservation', text: ["Les échanges sont conservés le temps nécessaire au traitement de votre demande, puis supprimés ou archivés dans la limite des obligations légales."] },
      { h2: 'Cookies et traceurs', text: ["Ce site n'utilise aucun cookie publicitaire ni outil de mesure d'audience. Les polices sont hébergées sur le site."] },
      { h2: 'Vos droits', text: [`Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à ${t.footer.email}. Vous pouvez aussi saisir la CNIL (cnil.fr).`] }
    ] }
  ];
  doc.forEach(d => {
    const u = `/${d.slug}/`;
    const bc = crumbs([homeCrumb, { label: d.h1, href: u }]);
    const main = `${bc.html}
    <article>
      ${pageHero(d.h1, `Dernière mise à jour : ${frDate(L.updated)}`)}
      <div class="container narrow prose legal">
        ${d.sections.map(s => `<section class="prose-block"><h2>${txt(s.h2)}</h2>${s.text.map(p => `<p>${txt(p)}</p>`).join('')}</section>`).join('\n        ')}
      </div>
    </article>`;
    addPage(u, renderPage({ path: u, title: d.title, description: `${d.h1} du site de ${brand}, naturopathe animalière à Toulouse.`, main, noindex: true }), { noindex: true });
  });
}

function build404() {
  const n = t.notFound;
  const main = `    <section class="page-hero not-found"><div class="container narrow"><h1>${esc(n.h1)}</h1><p class="lead">${txt(n.text)}</p><a class="btn" href="/">${esc(n.button)}</a></div></section>`;
  addPage('/404.html', renderPage({ path: '/404.html', title: n.title, description: n.text, main, noindex: true }), { noindex: true, file: '404.html' });
}

// ───────────── Contrôles SEO ─────────────
function seoCheck(p, title, desc) {
  if (!title || title.length > 60) warn(`${p} : title de ${title ? title.length : 0} caractères (max 60)`);
  if (!desc || desc.length > 160 || desc.length < 70) warn(`${p} : description de ${desc ? desc.length : 0} caractères (visé 70–160)`);
}

// ───────────── Exécution ─────────────
buildHome();
content.servicePages.forEach(p => buildDetailPage(p, 'service'));
content.animalPages.forEach(p => buildDetailPage(p, 'animal'));
buildHub();
buildBlog();
buildLegal();
build404();
seoCheck('/', seo.title, seo.description);

// Doublons de title / description
const seenTitle = new Map(), seenDesc = new Map();
for (const [p, pg] of pages) {
  if (!pg.indexable) continue;
  const ti = (pg.html.match(/<title>(.*?)<\/title>/) || [])[1];
  const de = (pg.html.match(/<meta name="description" content="(.*?)">/) || [])[1];
  if (seenTitle.has(ti)) warn(`Title dupliqué : ${p} et ${seenTitle.get(ti)}`); else seenTitle.set(ti, p);
  if (seenDesc.has(de)) warn(`Description dupliquée : ${p} et ${seenDesc.get(de)}`); else seenDesc.set(de, p);
}

// Vérification des liens internes
const homeIds = new Set([...pages.get('/').html.matchAll(/ id="([^"]+)"/g)].map(m => m[1]));
for (const [p, pg] of pages) {
  for (const m of pg.html.matchAll(/href="(\/[^"#]*)(#[^"]*)?"/g)) {
    const target = m[1];
    const ok = pages.has(target) || target === '/css/bundle.css' || fs.existsSync(path.join(root, target.split('/').join(path.sep)));
    if (!ok) warn(`Lien cassé dans ${p} : ${target}`);
    if (target === '/' && m[2] && !homeIds.has(m[2].slice(1))) warn(`Ancre introuvable sur l'accueil (depuis ${p}) : ${m[2]}`);
  }
}

const todo = [...pages.values()].reduce((n, pg) => n + (pg.html.match(/\[À compléter/g) || []).length, 0);
if (todo) warn(`${todo} champ(s) « [À compléter… » dans les pages légales (voir content.config.js > legal)`);

// Écriture + nettoyage des pages obsolètes
const manifestFile = path.join(root, '.build-manifest.json');
const previous = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : [];
const written = [];
const write = (rel, data) => {
  const f = path.join(root, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, data);
  written.push(rel.replace(/\\/g, '/'));
};

for (const [p, pg] of pages) write(pg.file || (p === '/' ? 'index.html' : p.slice(1) + 'index.html'), pg.html);

// CSS : polices + couleurs + feuille de style minifiée
const kebab = s => s.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
const minify = css => css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{};:,>])\s*/g, '$1').replace(/;}/g, '}').trim();
const fontsPath = path.join(root, 'css', 'fonts.css');
const fonts = fs.existsSync(fontsPath) ? minify(fs.readFileSync(fontsPath, 'utf8')) : '';
const vars = `:root{${Object.entries(c).map(([k, v]) => `--${kebab(k)}:${v}`).join(';')}}`;
write('css/bundle.css', fonts + vars + minify(fs.readFileSync(path.join(root, 'css', 'style.css'), 'utf8')));

// Sitemap et robots.txt
const urls = [...pages.entries()].filter(([, pg]) => pg.indexable);
const prio = p => (p === '/' ? '1.0' : p === '/accompagnements/' || /toulouse\/$/.test(p) ? '0.8' : '0.6');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([p, pg]) => `  <url><loc>${abs(p)}</loc><lastmod>${pg.lastmod}</lastmod><priority>${prio(p)}</priority></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);

for (const old of previous) {
  if (!written.includes(old)) {
    const f = path.join(root, old);
    if (fs.existsSync(f)) { fs.unlinkSync(f); try { fs.rmdirSync(path.dirname(f)); } catch (e) { /* dossier non vide */ } }
  }
}
fs.writeFileSync(manifestFile, JSON.stringify(written, null, 1));

console.log(`Build OK : ${pages.size} pages (${urls.length} indexables), css/bundle.css, sitemap.xml, robots.txt`);
if (warnings.length) { console.log(`\n${warnings.length} avertissement(s) :`); warnings.forEach(w => console.log(' - ' + w)); }
else console.log('Aucun avertissement.');
