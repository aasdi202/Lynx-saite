import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { detectLanguageByIP } from '../utils/languageUtils';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // ابتدا بررسی می‌کنیم آیا کاربر قبلاً زبانی انتخاب کرده
        const savedLang = localStorage.getItem('lynx-lang');
        if (savedLang) return;

        // اگر نه، زبان مرورگر را بررسی می‌کنیم
        const browserLang = navigator.language.split('-')[0];
        const supportedLangs = ['en', 'fa', 'zh', 'es', 'fr', 'ar'];
        
        if (supportedLangs.includes(browserLang)) {
          await i18n.changeLanguage(browserLang);
        } else {
          // اگر زبان مرورگر پشتیبانی نمی‌شود، از IP استفاده می‌کنیم
          const ipLang = await detectLanguageByIP();
          if (supportedLangs.includes(ipLang)) {
            await i18n.changeLanguage(ipLang);
          }
        }
      } catch (error) {
        console.error('Language detection error:', error);
      } finally {
        setLoading(false);
      }
    };

    detectLanguage();
  }, [i18n]);

  const handleLanguageChange = async (e) => {
    const newLang = e.target.value;
    await i18n.changeLanguage(newLang);
    localStorage.setItem('lynx-lang', newLang);
    document.cookie = `i18next=${newLang};path=/;max-age=31536000`;
  };

  if (loading) return null;

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="w-full bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
      <option value="zh">中文</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="ar">العربية</option>
    </select>
  );
}