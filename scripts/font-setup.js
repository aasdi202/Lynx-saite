const fs = require('fs');
const path = require('path');

// ایجاد پوشه fonts در صورت عدم وجود
const fontsDir = path.join(__dirname, '..', 'public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
  console.log('Created public/fonts directory');
}

// لیست فایل‌های فونت Tajawal برای کپی (با مسیر جدید)
const tajawalFonts = [
  { 
    src: path.join('tajawal', 'files', 'tajawal-latin-400-normal.woff2'),
    dest: 'Tajawal-Regular.woff2'
  },
  { 
    src: path.join('tajawal', 'files', 'tajawal-latin-500-normal.woff2'),
    dest: 'Tajawal-Medium.woff2'
  },
  { 
    src: path.join('tajawal', 'files', 'tajawal-latin-700-normal.woff2'),
    dest: 'Tajawal-Bold.woff2'
  },
  { 
    src: path.join('tajawal', 'files', 'tajawal-latin-800-normal.woff2'),
    dest: 'Tajawal-ExtraBold.woff2'
  }
];

// کپی فایل‌های Tajawal از @fontsource/tajawal
tajawalFonts.forEach(({src, dest}) => {
  const sourcePath = path.join(__dirname, '..', 'node_modules', '@fontsource', src);
  const destPath = path.join(fontsDir, dest);

  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${path.basename(src)} as ${dest}`);
    } else {
      console.warn(`Tajawal font file not found: ${sourcePath}`);
      console.warn('Please make sure @fontsource/tajawal is installed');
    }
  } catch (err) {
    console.error(`Error copying Tajawal font (${dest}):`, err.message);
  }
});

// کپی فونت Vazir (اختیاری)
const vazirFonts = [
  'Vazir.woff2',
  'Vazir.woff',
  'Vazir-Bold.woff2'
];

vazirFonts.forEach(fontFile => {
  const sourcePath = path.join(__dirname, '..', 'node_modules', 'vazir-font', 'dist', fontFile);
  const destPath = path.join(fontsDir, fontFile);

  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${fontFile} to public/fonts`);
    } else {
      console.warn(`Vazir font file not found: ${sourcePath}`);
    }
  } catch (err) {
    console.error(`Error copying Vazir font (${fontFile}):`, err.message);
  }
});

console.log('Font setup completed');