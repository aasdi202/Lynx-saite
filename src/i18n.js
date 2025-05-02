import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // لود ترجمه از public/locales/
  .use(LanguageDetector) // تشخیص زبان کاربر
  .use(initReactI18next) // اتصال به ری‌اکت
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'fa', 'ar', 'tr', 'ru', 'zh', 'de', 'es', 'hi'],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // مسیر فایل ترجمه
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
