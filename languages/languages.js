document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: { greeting: "Hello" },
    fa: { greeting: "سلام" },
    zh: { greeting: "你好" },
    ru: { greeting: "Привет" },
    tr: { greeting: "Merhaba" },
    ar: { greeting: "مرحبا" },
    es: { greeting: "Hola" },
    fr: { greeting: "Bonjour" },
    de: { greeting: "Hallo" },
  };

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fa", name: "فارسی", flag: "🇮🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  let currentLang = localStorage.getItem("selectedLang") || "en";

  // ساخت دکمه زبان
  const container = document.createElement("div");
  container.className = "fixed top-4 left-4 z-50";

  const button = document.createElement("button");
  button.className =
    "bg-white text-black shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 border hover:bg-gray-100";
  container.appendChild(button);

  const dropdown = document.createElement("ul");
  dropdown.className =
    "hidden mt-2 bg-white text-black border rounded-xl shadow-xl overflow-hidden w-48";

  container.appendChild(dropdown);
  document.body.appendChild(container);

  function renderButton() {
    const current = languages.find((l) => l.code === currentLang);
    button.innerHTML = `<span>${current.flag}</span><span data-i18n="greeting">${current.name}</span>`;
  }

  function renderDropdown() {
    dropdown.innerHTML = "";

    languages.forEach((lang) => {
      const item = document.createElement("li");
      item.className =
        "cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center gap-2";
      item.innerHTML = `<span>${lang.flag}</span><span>${lang.name}</span>`;
      item.onclick = () => {
        localStorage.setItem("selectedLang", lang.code);
        currentLang = lang.code;
        renderButton();
        dropdown.classList.add("hidden");
        updateTexts(currentLang);
      };
      dropdown.appendChild(item);
    });

    const more = document.createElement("li");
    more.className =
      "px-4 py-2 text-gray-500 border-t bg-gray-50 cursor-pointer hover:bg-gray-100";
    more.innerText = "زبان‌های بیشتر...";
    more.onclick = () => {
      alert("امکان افزودن زبان‌های بیشتر به‌زودی فعال می‌شود.");
    };
    dropdown.appendChild(more);
  }

  button.onclick = () => {
    dropdown.classList.toggle("hidden");
  };

  function updateTexts(lang) {
    const t = translations[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    document.documentElement.setAttribute("lang", lang);
    document.body.dir = lang === "fa" || lang === "ar" ? "rtl" : "ltr";
  }

  renderButton();
  renderDropdown();
  updateTexts(currentLang);
});
