document.addEventListener("DOMContentLoaded", function () {
  const footer = `
    <footer style="background-color: #101820; color: white; padding: 2rem 1rem; text-align: center; font-size: 0.9rem; margin-top: 2rem;">
      <div style="margin-bottom: 1rem;">
        <a href="/pages/site/about.html" style="color: white; text-decoration: none; margin: 0 1rem;">درباره ما</a>
        <a href="/pages/site/contact.html" style="color: white; text-decoration: none; margin: 0 1rem;">تماس با ما</a>
        <a href="/pages/site/roadmap.html" style="color: white; text-decoration: none; margin: 0 1rem;">نقشه راه</a>
      </div>
      <div style="opacity: 0.6;">© 2025 LYNX Project — All rights reserved</div>
    </footer>
  `;
  document.getElementById("footer").innerHTML = footer;
});
