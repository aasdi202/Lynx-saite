document.addEventListener("DOMContentLoaded", function () {
  const languageList = [
    { code: "en", name: "English", flag: "us" },
    { code: "fa", name: "فارسی", flag: "ir" },
    { code: "zh", name: "中文", flag: "cn" },
    { code: "ru", name: "Русский", flag: "ru" },
    { code: "tr", name: "Türkçe", flag: "tr" },
    { code: "ar", name: "العربية", flag: "sa" },
    { code: "es", name: "Español", flag: "es" },
    { code: "fr", name: "Français", flag: "fr" },
    { code: "de", name: "Deutsch", flag: "de" }
  ];

  const languageMenu = document.getElementById("language-menu");

  languageList.forEach(lang => {
    const btn = document.createElement("button");
    btn.className = "language-btn";
    btn.innerHTML = `
      <img src="flags/${lang.flag}.svg" alt="${lang.name}" class="flag-icon">
      <span>${lang.name}</span>
    `;
    btn.onclick = () => switchLanguage(lang.code);
    languageMenu.appendChild(btn);
  });

  // دکمه زبان‌های بیشتر
  const moreBtn = document.createElement("button");
  moreBtn.className = "language-btn more-langs";
  moreBtn.innerText = "زبان‌های بیشتر...";
  moreBtn.onclick = () => alert("در نسخه‌های آینده در دسترس خواهد بود.");
  languageMenu.appendChild(moreBtn);
});
