// language_selector.js import languages from './languages';

const createLanguageItem = (lang) => { const item = document.createElement('div'); item.className = 'language-item'; item.style.background = lang.bgColor;

const flag = document.createElement('img'); flag.src = lang.flag; flag.alt = ${lang.name} Flag; flag.className = 'language-flag';

const name = document.createElement('span'); name.textContent = lang.name; name.className = 'language-name';

item.appendChild(flag); item.appendChild(name);

item.addEventListener('click', () => { console.log(Language selected: ${lang.code}); // TODO: Add language switching logic });

return item; };

const loadLanguages = () => { const container = document.getElementById('language-selector'); container.innerHTML = '';

const mainLanguages = languages.filter((lang) => lang.main); mainLanguages.forEach((lang) => { const item = createLanguageItem(lang); container.appendChild(item); });

const moreBtn = document.createElement('button'); moreBtn.textContent = 'زبان‌های بیشتر'; moreBtn.className = 'language-more-button';

moreBtn.addEventListener('click', () => { const moreLanguages = languages.filter((lang) => !lang.main); moreLanguages.forEach((lang) => { const item = createLanguageItem(lang); container.appendChild(item); }); moreBtn.remove(); });

container.appendChild(moreBtn); };

export default loadLanguages;

