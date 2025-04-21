const defaultLang = 'en';
let currentLang = localStorage.getItem('lang') || defaultLang;

async function loadLanguage(lang) {
  try {
    const response = await fetch(`languages/${lang}.json`);
    const translations = await response.json();
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[key]) {
        el.innerText = translations[key];
      }
    });
    currentLang = lang;
    localStorage.setItem('lang', lang);
  } catch (error) {
    console.error(`Error loading language file for ${lang}:`, error);
  }
}

function switchLanguage(lang) {
  loadLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLang);
});
