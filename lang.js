const content = {
  en: {
    aboutTitle: "About LYNX",
    aboutText1: "LYNX is not just a token — it's the foundation of a global decentralized communication network that redefines the way we connect, interact, and build digital trust.",
    aboutText2: "At the heart of LYNX is Decentralized Identity (DID), a breakthrough technology that allows individuals to control their own identities without relying on central authorities.",
    aboutText3: "LYNX is designed to support future applications such as decentralized social networks, peer-to-peer chat platforms, and integrated DeFi tools — all powered by blockchain and owned by the community.",
    aboutText4: "Together, we are building the future of interaction. One block, one connection, one voice at a time."
  },
  fa: {
    aboutTitle: "درباره لاینکس",
    aboutText1: "لاینکس فقط یک توکن نیست — بلکه پایه‌گذار یک شبکه ارتباطی غیرمتمرکز جهانی است که نحوه ارتباط، تعامل و اعتماد دیجیتال را بازتعریف می‌کند.",
    aboutText2: "در قلب لاینکس، فناوری هویت دیجیتال غیرمتمرکز (DID) قرار دارد که به افراد امکان می‌دهد بدون وابستگی به نهادهای مرکزی، مالک هویت خود باشند.",
    aboutText3: "لاینکس برای پشتیبانی از اپلیکیشن‌های آینده مانند شبکه‌های اجتماعی غیرمتمرکز، پلتفرم‌های چت همتا به همتا و ابزارهای DeFi طراحی شده است.",
    aboutText4: "ما در حال ساخت آینده ارتباطات هستیم — بلوک به بلوک، اتصال به اتصال، صدا به صدا."
  },
  zh: {
    aboutTitle: "关于 LYNX",
    aboutText1: "LYNX 不仅仅是一个代币——它是一个全球去中心化通信网络的基础，重新定义了我们如何连接、互动和建立数字信任。",
    aboutText2: "LYNX 的核心是去中心化身份 (DID)，这是一项突破性技术，使个人可以在无需依赖中心机构的情况下控制自己的身份。",
    aboutText3: "LYNX 旨在支持未来的应用，如去中心化社交网络、点对点聊天平台和 DeFi 工具，所有这些都由区块链驱动并由社区拥有。",
    aboutText4: "我们正在共同构建未来的交互方式——一块区块、一条连接、一种声音。"
  },
  ru: {
    aboutTitle: "О LYNX",
    aboutText1: "LYNX — это не просто токен, это основа глобальной децентрализованной сети связи, которая переопределяет способы взаимодействия, общения и цифрового доверия.",
    aboutText2: "В основе LYNX лежит Децентрализованная Идентичность (DID), инновационная технология, позволяющая пользователям контролировать свою идентичность без участия централизованных органов.",
    aboutText3: "LYNX предназначен для поддержки будущих приложений, таких как децентрализованные социальные сети, P2P-чаты и интегрированные DeFi-инструменты — все это работает на блокчейне и управляется сообществом.",
    aboutText4: "Вместе мы строим будущее общения — блок за блоком, соединение за соединением, голос за голосом."
  },
  tr: {
    aboutTitle: "LYNX Hakkında",
    aboutText1: "LYNX sadece bir token değil — küresel, merkeziyetsiz bir iletişim ağı inşa etmenin temelidir.",
    aboutText2: "LYNX’in merkezinde Merkeziyetsiz Kimlik (DID) teknolojisi yer alır ve bireylerin kimliklerini merkezi otoritelere ihtiyaç duymadan kontrol etmelerini sağlar.",
    aboutText3: "LYNX, topluluk tarafından sahiplenilen blockchain destekli merkeziyetsiz sosyal ağlar, P2P sohbet platformları ve entegre DeFi araçları gibi gelecekteki uygulamaları desteklemek için tasarlanmıştır.",
    aboutText4: "Geleceğin etkileşim dünyasını birlikte inşa ediyoruz — bir blok, bir bağlantı, bir sesle."
  },
  ar: {
    aboutTitle: "حول LYNX",
    aboutText1: "LYNX ليس مجرد رمز — بل هو أساس شبكة اتصال لامركزية عالمية تعيد تعريف طريقة تواصلنا وتفاعلنا وبناء الثقة الرقمية.",
    aboutText2: "في قلب LYNX يوجد هوية رقمية لامركزية (DID)، وهي تقنية رائدة تتيح للمستخدمين التحكم الكامل في هويتهم دون الاعتماد على سلطات مركزية.",
    aboutText3: "تم تصميم LYNX لدعم تطبيقات مستقبلية مثل الشبكات الاجتماعية اللامركزية، منصات الدردشة من نظير إلى نظير، وأدوات DeFi المتكاملة — كلها تعمل على البلوكشين ويمتلكها المجتمع.",
    aboutText4: "معاً، نبني مستقبل التفاعل — كتلة تلو الأخرى، اتصال بعد اتصال، صوت بعد صوت."
  }
};

const lang = localStorage.getItem("lynx-lang") || "en";

function translatePage() {
  const t = content[lang];
  if (!t) return;

  const ids = [
    "about-title", "about-text1", "about-text2", "about-text3", "about-text4"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id]) el.innerText = t[id];
  });
}
