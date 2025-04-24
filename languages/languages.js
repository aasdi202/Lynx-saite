const translations = {
  en: {
    welcome: "Welcome to LYNX",
    subtitle: "LYNX is a decentralized communication ecosystem designed to provide private, secure, and unrestricted interactions between users across the globe.",
    connect: "Connect to Network",
  },
  fa: {
    welcome: "به LYNX خوش آمدید",
    subtitle: "لینکس یک اکوسیستم ارتباطی غیرمتمرکز است که برای ایجاد تعاملات خصوصی، امن و بدون محدودیت بین کاربران سراسر جهان طراحی شده است.",
    connect: "اتصال به شبکه",
  },
  zh: {
    welcome: "欢迎来到 LYNX",
    subtitle: "LYNX 是一个去中心化的通信生态系统，旨在为全球用户提供私密、安全且无限制的互动方式。",
    connect: "连接到网络",
  },
  ru: {
    welcome: "Добро пожаловать в LYNX",
    subtitle: "LYNX — это децентрализованная экосистема общения, обеспечивающая приватное, безопасное и свободное взаимодействие между пользователями по всему миру.",
    connect: "Подключиться к сети",
  },
  tr: {
    welcome: "LYNX'e Hoş Geldiniz",
    subtitle: "LYNX, dünya genelindeki kullanıcılar arasında özel, güvenli ve sınırsız etkileşim sağlayan merkeziyetsiz bir iletişim ekosistemidir.",
    connect: "Ağa Bağlan",
  },
  ar: {
    welcome: "مرحباً بك في LYNX",
    subtitle: "لينكس هو نظام بيئي للتواصل اللامركزي يوفّر تفاعلات خاصة وآمنة وبدون قيود بين المستخدمين حول العالم.",
    connect: "الاتصال بالشبكة",
  },
  fr: {
    welcome: "Bienvenue sur LYNX",
    subtitle: "LYNX est un écosystème de communication décentralisé conçu pour offrir des interactions privées, sécurisées et sans restriction entre les utilisateurs du monde entier.",
    connect: "Se connecter au réseau",
  },
  de: {
    welcome: "Willkommen bei LYNX",
    subtitle: "LYNX ist ein dezentrales Kommunikationsökosystem, das private, sichere und uneingeschränkte Interaktionen zwischen Nutzern weltweit ermöglicht.",
    connect: "Mit dem Netzwerk verbinden",
  },
  es: {
    welcome: "Bienvenido a LYNX",
    subtitle: "LYNX es un ecosistema de comunicación descentralizado diseñado para ofrecer interacciones privadas, seguras y sin restricciones entre usuarios de todo el mundo.",
    connect: "Conectar a la red",
  }
};

function changeLang(lang) {
  const elements = document.querySelectorAll(".txt");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  localStorage.setItem("lynx_lang", lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lynx_lang") || "en";
  document.getElementById("lang-select").value = savedLang;
  changeLang(savedLang);
});
