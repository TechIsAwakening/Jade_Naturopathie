const cfg = require('../site.config.js');

const siteUrl = cfg.siteUrl.replace(/\/+$/, '');
const abs = p => siteUrl + p;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Espaces insécables avant la ponctuation haute et dans les guillemets français
const nb = s => s.replace(/ ([?!:»;€])/g, '&nbsp;$1').replace(/« /g, '«&nbsp;');
// Texte simple échappé + typographie
const txt = s => nb(esc(s));
// Texte enrichi : [lien](/url/) et **gras**
const rich = s => nb(esc(s))
  .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

const svg = (body, size = 20) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
const icons = {
  plant: svg('<path d="M12 21v-8"/><path d="M12 13c0-3 2-5 5-5 0 3-2 5-5 5z"/><path d="M12 15c0-2.5-1.8-4-4.5-4 0 2.5 1.8 4 4.5 4z"/><path d="M8 21h8"/>'),
  heart: svg('<path d="M12 20s-7-4.2-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.8-7 10-7 10z"/><path d="M7 12h3l1.5-2.5L13 14l1-2h3"/>'),
  brain: svg('<circle cx="12" cy="12" r="9"/><path d="M12 5v14M9 8c-2 0-3 1.5-3 3s1 2 1 3-1 2 1 3M15 8c2 0 3 1.5 3 3s-1 2-1 3 1 2-1 3"/>'),
  leaf: svg('<path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14z"/><path d="M5 19 13 11"/>'),
  hand: svg('<path d="M8 13V6.5a1.2 1.2 0 0 1 2.4 0V11M10.4 10V4.5a1.2 1.2 0 0 1 2.4 0V10M12.8 10V5.5a1.2 1.2 0 0 1 2.4 0V11M15.2 11V8a1.2 1.2 0 0 1 2.4 0v6c0 4-2.5 6-5.6 6-2.5 0-4-1.2-5.2-3.2L4.5 13.5a1.3 1.3 0 0 1 2.1-1.5L8 13.5"/>'),
  flower: svg('<circle cx="12" cy="12" r="2"/><circle cx="12" cy="6" r="2.5"/><circle cx="17.7" cy="10.1" r="2.5"/><circle cx="15.5" cy="16.9" r="2.5"/><circle cx="8.5" cy="16.9" r="2.5"/><circle cx="6.3" cy="10.1" r="2.5"/>'),
  dog: svg('<path d="M4 9c0-2 1-4 3-4l2 2h6l2-2c2 0 3 2 3 4v3c0 4-3 7-8 7s-8-3-8-7z"/><circle cx="9" cy="11.500" r=".7" fill="currentColor"/><circle cx="15" cy="11.500" r=".7" fill="currentColor"/><path d="M10.500 15h3l-1.500 1.500z"/>'),
  cat: svg('<path d="M5 4l3.500 3h7L19 4v9c0 4-3 7-7 7s-7-3-7-7z"/><circle cx="9.500" cy="12" r=".7" fill="currentColor"/><circle cx="14.500" cy="12" r=".7" fill="currentColor"/><path d="M11 15h2l-1 1z"/>'),
  horse: svg('<path d="M6 20c0-5 1-8 4-10l-1-4 3 1 2-2 2 3c2 1 3 3 3 6v6"/><circle cx="14.500" cy="9" r=".6" fill="currentColor"/>'),
  book: svg('<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v13"/>')
};
const paw = svg('<path d="M9 18c-2 0-3-1.2-3-2.6 0-1.8 2.2-4.4 3.8-4.4 1 0 1.2.6 2.2.6s1.2-.6 2.2-.6c1.6 0 3.8 2.6 3.8 4.4 0 1.4-1 2.6-3 2.6-1.2 0-1.8-.6-3-.6S10.2 18 9 18z"/><circle cx="6.5" cy="8" r="1.2"/><circle cx="10" cy="5.5" r="1.2"/><circle cx="14.5" cy="5.5" r="1.2"/><circle cx="18" cy="8" r="1.2"/>', 22);
const insta = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>';
const fb = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14 8h2.5V4.5H14c-2.2 0-3.5 1.5-3.5 3.5v2H8v3.5h2.5V21H14v-7.5h2.5l.5-3.5h-3V8.5c0-.3.2-.5.5-.5z"/></svg>';

// <picture> WebP + JPEG avec srcset. name = préfixe dans assets/img (ex. "hero")
const picture = ({ name, widths, sizes, alt, width, height, cls = '', eager = false }) => {
  const set = ext => widths.map(w => `/assets/img/${name}-${w}.${ext} ${w}w`).join(', ');
  const biggest = widths[widths.length - 1];
  return `<picture>
        <source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
        <img${cls ? ` class="${cls}"` : ''} src="/assets/img/${name}-${biggest}.jpg" srcset="${set('jpg')}" sizes="${sizes}" alt="${esc(alt)}" width="${width}" height="${height}"${eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"'}>
      </picture>`;
};

const frDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

module.exports = { cfg, siteUrl, abs, esc, nb, txt, rich, icons, paw, insta, fb, picture, frDate };
