document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <header style="background-color: #101820; padding: 1rem 2rem; color: white; display: flex; justify-content: space-between; align-items: center;">
      <div style="font-size: 1.5rem; font-weight: bold;">
        <a href="/pages/site/index.html" style="text-decoration: none; color: white;">LYNX</a>
      </div>
      <nav style="display: flex; gap: 1.5rem;">
        <a href="/pages/site/about.html" style="color: white; text-decoration: none;">درباره ما</a>
        <a href="/pages/site/contact.html" style="color: white; text-decoration: none;">تماس با ما</a>
        <a href="/pages/site/roadmap.html" style="color: white; text-decoration: none;">نقشه راه</a>
      </nav>
      <div style="position: relative;">
        <select id="languageSelect" style="padding: 0.4rem; border-radius: 0.5rem;">
          <option value="en">English</option>
          <option value="fa">فارسی</option>
          <option value="zh">中文</option>
          <option value="ru">Русский</option>
          <option value="tr">Türkçe</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </header>
  `;
  document.getElementById("header").innerHTML = header;
});
