// login.js

// لیست کیف پول‌ها (۲۰ مورد) با آیکون‌ها و نام‌ها
const wallets = [
  { name: "MetaMask", icon: "wallets-icons/metamask.png" },
  { name: "Trust Wallet", icon: "wallets-icons/trustwallet.png" },
  { name: "Coinbase", icon: "wallets-icons/coinbase.png" },
  { name: "Binance", icon: "wallets-icons/binance.png" },
  { name: "WalletConnect", icon: "wallets-icons/walletconnect.png" },
  { name: "Rainbow", icon: "wallets-icons/rainbow.png" },
  { name: "TokenPocket", icon: "wallets-icons/tokenpocket.png" },
  { name: "MathWallet", icon: "wallets-icons/mathwallet.png" },
  { name: "SafePal", icon: "wallets-icons/safepal.png" },
  { name: "BitKeep", icon: "wallets-icons/bitkeep.png" },
  { name: "Zerion", icon: "wallets-icons/zerion.png" },
  { name: "Exodus", icon: "wallets-icons/exodus.png" },
  { name: "Ledger", icon: "wallets-icons/ledger.png" },
  { name: "Trezor", icon: "wallets-icons/trezor.png" },
  { name: "Enjin", icon: "wallets-icons/enjin.png" },
  { name: "Argent", icon: "wallets-icons/argent.png" },
  { name: "Opera", icon: "wallets-icons/opera.png" },
  { name: "Guarda", icon: "wallets-icons/guarda.png" },
  { name: "BitPay", icon: "wallets-icons/bitpay.png" },
  { name: "Huobi Wallet", icon: "wallets-icons/huobi.png" },
];

// تابع ساخت لیست کیف‌پول‌ها در فرم ثبت‌نام
function renderWalletInputs() {
  const container = document.getElementById("walletsContainer");
  container.innerHTML = "";

  wallets.forEach((wallet, index) => {
    const walletDiv = document.createElement("div");
    walletDiv.className = "flex items-center space-x-2 mb-3";

    walletDiv.innerHTML = `
      <img src="${wallet.icon}" alt="${wallet.name}" class="w-6 h-6">
      <label class="w-40 text-sm">${wallet.name}</label>
      <input type="text" id="wallet-${index}" placeholder="Wallet address..." class="flex-1 p-1 px-2 border rounded" />
    `;

    container.appendChild(walletDiv);
  });
}

// ذخیره اطلاعات رمزگذاری‌شده در localStorage
async function saveUserData() {
  const nickname = document.getElementById("nickname").value;
  const password = document.getElementById("signupPassword").value;
  const encoder = new TextEncoder();

  const data = {
    nickname,
    password,
    wallets: {},
  };

  wallets.forEach((wallet, index) => {
    const address = document.getElementById(`wallet-${index}`).value.trim();
    if (address) {
      data.wallets[wallet.name] = address;
    }
  });

  const encoded = encoder.encode(JSON.stringify(data));
  const key = await window.crypto.subtle.digest("SHA-256", encoder.encode(password));
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  const cryptoKey = await window.crypto.subtle.importKey(
    "raw", key, { name: "AES-GCM" }, false, ["encrypt"]
  );

  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv }, cryptoKey, encoded
  );

  localStorage.setItem("lynx_user", JSON.stringify({
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(encrypted))
  }));

  document.getElementById("successMessage").innerText = `ثبت‌نام موفق بود، خوش‌اومدی ${nickname} عزیز!`;
}

// آماده‌سازی
document.addEventListener("DOMContentLoaded", () => {
  renderWalletInputs();
  document.getElementById("signupBtn").addEventListener("click", saveUserData);
});
