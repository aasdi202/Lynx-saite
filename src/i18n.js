import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/locales/en.json';
import fa from './i18n/locales/fa.json';
import ar from './i18n/locales/ar.json';
import tr from './i18n/locales/tr.json';
import ru from './i18n/locales/ru.json';
import zh from './i18n/locales/zh.json';
import de from './i18n/locales/de.json';
import es from './i18n/locales/es.json';
import hi from './i18n/locales/hi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
      ar: { translation: ar },
      tr: { translation: tr },
      ru: { translation: ru },
      zh: { translation: zh },
      de: { translation: de },
      es: { translation: es },
      hi: { translation: hi }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
