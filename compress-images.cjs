const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = './src/assets';
const extensions = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];

async function compressImages() {
  const files = fs.readdirSync(assetsDir);
  const images = files.filter(f => extensions.includes(path.extname(f)));

  console.log(`Found ${images.length} images to compress...\n`);

  for (const file of images) {
    const filePath = path.join(assetsDir, file);
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(assetsDir, baseName + '.webp');
    const before = fs.statSync(filePath).size;

    try {
      await sharp(filePath)
        .webp({ quality: 78 })
        .toFile(outputPath);

      const after = fs.statSync(outputPath).size;
      const saving = (((before - after) / before) * 100).toFixed(0);
      console.log(`✅ ${file} → ${baseName}.webp (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${saving}%)`);
    } catch (err) {
      console.log(`❌ ${file}: ${err.message}`);
    }
  }

  console.log('\nDone! Now update imports from .png/.jpg to .webp');
}

compressImages();