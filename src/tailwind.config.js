/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        fa: ['Vazir', 'sans-serif'],
        ar: ['Tajawal', 'sans-serif']
      },
      colors: {
        primary: {
          500: '#6e8efb',
          600: '#5a7cfa',
        },
        secondary: {
          500: '#a777e3',
          600: '#9566d8',
        }
      },
      backgroundImage: {
        'gradient-lynx': 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}