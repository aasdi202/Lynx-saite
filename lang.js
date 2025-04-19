if (!localStorage.getItem("lynx-lang")) {
  localStorage.setItem("lynx-lang", "fa");
}

const content = {
  fa: {
    testLine: "سلام از طرف لاینکس!",
  },
  en: {
    testLine: "Hello from LYNX!",
  }
};

const lang = localStorage.getItem("lynx-lang") || "en";

function translatePage() {
  const t = content[lang];
  if (!t) return;

  const el = document.getElementById("test-line");
  if (el && t.testLine) el.innerText = t.testLine;
}
