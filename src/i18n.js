import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          welcome: "Welcome to LYNX",
          login: "Login",
          signup: "Sign Up"
        }
      },
      fa: {
        translation: {
          welcome: "به LYNX خوش آمدید",
          login: "ورود",
          signup: "ثبت‌نام"
        }
      }
    }
  });

export default i18n;