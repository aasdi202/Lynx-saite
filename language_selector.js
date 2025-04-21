document.addEventListener("DOMContentLoaded", function () { const languages = [ { code: "en", name: "English", flag: "🇬🇧" }, { code: "fa", name: "فارسی", flag: "🇺🇨" }, { code: "zh", name: "中文", flag: "🇨🇳" }, { code: "ru", name: "Русский", flag: "🇷🇺" }, { code: "tr", name: "Türkçe", flag: "🇹🇷" }, { code: "ar", name: "العربية", flag: "🇦🇪" }, { code: "es", name: "Español", flag: "🇪🇸" }, { code: "fr", name: "Français", flag: "🇫🇷" }, { code: "de", name: "Deutsch", flag: "🇩🇪" }, ];

const button = document.createElement("button"); button.className = "fixed bottom-4 left-4 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 border hover:bg-gray-100 z-50"; button.innerHTML = <span>${languages[0].flag}</span><span>${languages[0].name}</span>;

const dropdown = document.createElement("ul"); dropdown.className = "hidden absolute bottom-14 left-4 mb-2 bg-white border rounded-xl shadow-xl overflow-hidden z-50";

languages.forEach((lang) => { const item = document.createElement("li"); item.className = "cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center gap-2"; item.innerHTML = <span>${lang.flag}</span><span>${lang.name}</span>; item.onclick = () => { button.innerHTML = <span>${lang.flag}</span><span>${lang.name}</span>; dropdown.classList.add("hidden"); alert(Language selected: ${lang.name}); // store or apply language logic here }; dropdown.appendChild(item); });

const more = document.createElement("li"); more.className = "px-4 py-2 text-gray-500 border-t bg-gray-50 cursor-pointer hover:bg-gray-100"; more.innerText = "زبان‌های بیشتر..."; more.onclick = () => alert("Dynamic language loading coming soon!"); dropdown.appendChild(more);

button.onclick = () => { dropdown.classList.toggle("hidden"); };

document.body.appendChild(button); document.body.appendChild(dropdown); });

