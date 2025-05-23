// src/i18n/index.jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('@/i18n/locales/en.json'),
  },
  fa: {
    translation: require('@/i18n/locales/fa.json'),
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
