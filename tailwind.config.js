/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // اسکن تمام فایل‌های JS/JSX در src
    "./public/index.html" // اسکن فایل HTML اصلی
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // فونت پیش‌فرض انگلیسی
        fa: ['Vazir', 'sans-serif'], // فونت فارسی
        ar: ['Tajawal', 'sans-serif'] // فونت عربی
      },
      colors: {
        primary: {
          500: '#6e8efb', // آبی اصلی
          600: '#5a7cfa' // آبی تیره
        },
        secondary: {
          500: '#a777e3', // بنفش اصلی
          600: '#9566d8' // بنفش تیره
        }
      },
      backgroundImage: {
        'gradient-lynx': 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)'
      }
    },
  },
  plugins: [],
}