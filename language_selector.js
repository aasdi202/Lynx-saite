document.addEventListener("DOMContentLoaded", function () {
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

  const container = document.getElementById("languageSelector");
  container.classList.add("grid", "grid-cols-2", "md:grid-cols-3", "gap-4");

  languages.forEach((lang) => {
    const button = document.createElement("button");
    button.className =
      "flex items-center space-x-2 bg-white shadow p-3 rounded hover:bg-blue-100 transition";
    button.innerHTML = `<span class="text-2xl">${lang.flag}</span><span>${lang.name}</span>`;
    button.onclick = () => {
      alert(`Language selected: ${lang.name}`);
      // Here you can store language selection in localStorage or handle logic
    };
    container.appendChild(button);
  });

  // Extra "More Languages" option
  const more = document.createElement("button");
  more.className =
    "col-span-full text-center text-sm text-blue-600 hover:underline mt-2";
  more.innerText = "More languages...";
  more.onclick = () => alert("Dynamic language loading coming soon!");
  container.appendChild(more);
});
