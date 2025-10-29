/*
  Image optimization script
  - Generates 1x and 2x WebP variants for profile.png
  - Keeps output in src/assets for Vite to bundle
*/

import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function optimizeProfile() {
  const assetsDir = path.resolve(__dirname, "../src/assets");
  const inputPng = path.join(assetsDir, "profile.png");

  if (!fs.existsSync(inputPng)) {
    console.error("Missing src/assets/profile.png; nothing to optimize.");
    process.exit(1);
  }

  await ensureDir(assetsDir);

  // Target rendered box is 260x320; create 1x and 2x WebP
  const sizes = [
    { suffix: "260", width: 260, height: 320 },
    { suffix: "520", width: 520, height: 640 },
  ];

  for (const s of sizes) {
    const outWebp = path.join(assetsDir, `profile-${s.suffix}.webp`);
    await sharp(inputPng)
      .resize({ width: s.width, height: s.height, fit: "cover" })
      .webp({ quality: 82 })
      .toFile(outWebp);
    console.log("Wrote", outWebp);
  }

  // Also write an optimized PNG fallback at 2x size
  const outPng = path.join(assetsDir, "profile-optimized.png");
  await sharp(inputPng)
    .resize({ width: 520, height: 640, fit: "cover" })
    .png({ quality: 82, compressionLevel: 9, palette: true })
    .toFile(outPng);
  console.log("Wrote", outPng);
}

optimizeProfile().catch((err) => {
  console.error(err);
  process.exit(1);
});
