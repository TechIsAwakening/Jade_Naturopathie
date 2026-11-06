// Télécharge les polices Google Fonts (sous-ensemble latin) pour les héberger en local :
// plus rapide, aucune requête vers Google (RGPD) et meilleur score de performance.
// Usage : npm run fonts   (à lancer une seule fois)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dir = path.join(root, 'assets', 'fonts');
fs.mkdirSync(dir, { recursive: true });

const url = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Nunito:wght@400;500;600&display=swap';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

(async () => {
  const css = await (await fetch(url, { headers: { 'User-Agent': UA } })).text();
  const blocks = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[^}]+\})/g)].filter(m => m[1] === 'latin');
  let out = '/* Généré par scripts/fetch-fonts.js */\n';
  const cache = new Map();
  for (const [, , face] of blocks) {
    const family = face.match(/font-family:\s*'([^']+)'/)[1];
    const style = face.match(/font-style:\s*(\w+)/)[1];
    const weight = face.match(/font-weight:\s*(\d+)/)[1];
    const src = face.match(/url\(([^)]+)\)/)[1];
    const range = face.match(/unicode-range:\s*([^;]+);/)[1];
    const file = `${family.toLowerCase().replace(/\s+/g, '-')}-${style}-${weight}.woff2`;
    if (!cache.has(src)) {
      fs.writeFileSync(path.join(dir, file), Buffer.from(await (await fetch(src)).arrayBuffer()));
      cache.set(src, file);
    }
    out += `@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url(/assets/fonts/${cache.get(src)}) format('woff2');unicode-range:${range}}\n`;
  }
  fs.writeFileSync(path.join(root, 'css', 'fonts.css'), out);
  console.log(`${blocks.length} déclarations, ${cache.size} fichiers dans assets/fonts`);
})();
