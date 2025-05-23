// src/providers/I18nProvider.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import i18n from '@/i18n';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(i18n.language || 'en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== lang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <I18nContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
