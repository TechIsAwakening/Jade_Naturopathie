// Génère les versions optimisées (WebP + JPEG redimensionnés) des photos du site.
// Usage : npm run images   (à relancer quand une photo source change)
// Sources : assets/fond-ecran.jpg (héros) et assets/jade.jpg (À propos)
// Sorties : assets/img/*.webp, assets/img/*.jpg, assets/img/og.jpg
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const out = path.join(root, 'assets', 'img');
fs.mkdirSync(out, { recursive: true });

const jobs = [
  { src: 'assets/fond-ecran.jpg', name: 'hero', widths: [640, 960, 1280, 1920], webpQ: 72, jpgQ: 74 },
  { src: 'assets/jade.jpg', name: 'jade', widths: [400, 640, 800], webpQ: 78, jpgQ: 78 }
];

(async () => {
  for (const j of jobs) {
    const input = path.join(root, j.src);
    const meta = await sharp(input).metadata();
    for (const w of j.widths) {
      const width = Math.min(w, meta.width);
      const base = sharp(input).rotate().resize({ width, withoutEnlargement: true });
      await base.clone().webp({ quality: j.webpQ }).toFile(path.join(out, `${j.name}-${w}.webp`));
      await base.clone().jpeg({ quality: j.jpgQ, mozjpeg: true }).toFile(path.join(out, `${j.name}-${w}.jpg`));
    }
    console.log(`${j.name} : ${j.widths.join(', ')} px`);
  }
  // Logo : marges rognées, puis versions carrées (header, schema.org, favicon)
  const trimmed = await sharp(path.join(root, 'assets/logo.png')).trim({ threshold: 10 }).toBuffer();
  const clear = { r: 0, g: 0, b: 0, alpha: 0 };
  for (const s of [96, 192, 512]) {
    await sharp(trimmed).resize(s, s, { fit: 'contain', background: clear })
      .png({ compressionLevel: 9, palette: true }).toFile(path.join(out, `logo-${s}.png`));
  }
  await sharp(trimmed).resize(32, 32, { fit: 'contain', background: clear }).png().toFile(path.join(out, 'favicon-32.png'));
  console.log('logo : 96, 192, 512 px + favicon-32');

  // Image de partage (réseaux sociaux) 1200x630
  await sharp(path.join(root, 'assets/fond-ecran.jpg')).resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(out, 'og.jpg'));
  console.log('og.jpg : 1200x630');
})();
