export const detectLanguageByIP = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // تبدیل کد کشور به زبان پیش‌فرض آن کشور
    const countryToLang = {
      IR: 'fa', // ایران
      CN: 'zh', // چین
      ES: 'es', // اسپانیا
      FR: 'fr', // فرانسه
      SA: 'ar', // عربستان
      // ... سایر کشورها
    };
    
    return countryToLang[data.country] || 'en';
  } catch (error) {
    console.error('IP detection failed:', error);
    return 'en';
  }
};

export const getDirection = (lang) => {
  return ['ar', 'fa', 'he'].includes(lang) ? 'rtl' : 'ltr';
};