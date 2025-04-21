// components/LanguageSelector.js

import React, { useState } from 'react'; import { ScrollArea } from '@/components/ui/scroll-area'; import { Button } from '@/components/ui/button'; import { Globe } from 'lucide-react';

const languages = [ { code: 'en', name: 'English', flag: 'https://flagcdn.com/us.svg' }, { code: 'fa', name: 'فارسی', flag: 'https://flagcdn.com/ir.svg' }, { code: 'zh', name: '中文', flag: 'https://flagcdn.com/cn.svg' }, { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/ru.svg' }, { code: 'tr', name: 'Türkçe', flag: 'https://flagcdn.com/tr.svg' }, { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/sa.svg' }, { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/fr.svg' }, { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/de.svg' }, { code: 'es', name: 'Español', flag: 'https://flagcdn.com/es.svg' } ];

const LanguageSelector = () => { const [showMore, setShowMore] = useState(false);

const handleLanguageChange = (langCode) => { console.log('Language changed to:', langCode); // logic for changing language };

return ( <div className="p-4"> <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><Globe size={20} /> Languages</h3> <ScrollArea className="h-64 pr-2"> {languages.map((lang) => ( <Button key={lang.code} onClick={() => handleLanguageChange(lang.code)} variant="outline" className="w-full flex items-center justify-start gap-3 mb-2 text-left bg-white hover:bg-gray-100" > <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-full border" /> <span>{lang.name}</span> </Button> ))} <Button variant="ghost" className="text-sm text-blue-600 underline mt-2" onClick={() => setShowMore(!showMore)} > {showMore ? 'Hide More Languages' : 'More Languages'} </Button> {showMore && ( <div className="mt-2 text-gray-600 italic"> Feature coming soon: Download any language dynamically </div> )} </ScrollArea> </div> ); };

export default LanguageSelector;

