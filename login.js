// login.js

const walletsContainer = document.getElementById("walletsContainer");
const storedWallets = document.getElementById("storedWallets");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginSuccessMsg = document.getElementById("loginSuccessMsg");
const userNicknameSpan = document.getElementById("userNickname");

// کیف‌پول‌ها
const wallets = [
  "MetaMask", "TrustWallet", "Coinbase", "SafePal", "TokenPocket", "MathWallet",
  "BitKeep", "ONTO", "Zerion", "Rainbow", "Argent", "Exodus", "Brave", "Guarda",
  "Enjin", "imToken", "Torus", "Frame", "XDEFI", "Opera"
];

// رمزنگاری اطلاعات با Web Crypto API
async function encryptData(data) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(JSON.stringify(data)));
  const keyData = await crypto.subtle.exportKey("raw", key);
  return {
    encrypted: Array.from(new Uint8Array(encrypted)),
    key: Array.from(new Uint8Array(keyData)),
    iv: Array.from(iv)
  };
}

async function decryptData(encrypted, keyData, iv) {
  const key = await crypto.subtle.importKey("raw", new Uint8Array(keyData), "AES-GCM", false, ["decrypt"]);
  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv: new Uint8Array(iv) }, key, new Uint8Array(encrypted));
  return JSON.parse(new TextDecoder().decode(decrypted));
}

// ساخت ردیف کیف‌پول
function createWalletRow(name) {
  const row = document.createElement("div");
  row.className = "flex items-center space-x-3 bg-white/10 p-2 rounded-xl";

  const img = document.createElement("img");
  img.src = `wallets-icons/${name}.png`;
  img.alt = name;
  img.className = "w-8 h-8 rounded";

  const label = document.createElement("label");
  label.textContent = name;
  label.className = "text-white font-semibold w-28";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "آدرس کیف‌پول";
  input.className = "flex-1 px-3 py-1 rounded bg-white/20 text-white border border-white/30";

  row.appendChild(img);
  row.appendChild(label);
  row.appendChild(input);
  walletsContainer?.appendChild(row);

  return { name, input };
}

// ساخت فرم ثبت‌نام
const walletInputs = [];
wallets.forEach(wallet => {
  walletInputs.push(createWalletRow(wallet));
});

// ذخیره ثبت‌نام
signupForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nickname = document.getElementById("nickname").value;
  const password = document.getElementById("password").value;

  const walletData = walletInputs.map(({ name, input }) => ({
    wallet: name,
    address: input.value.trim()
  })).filter(w => w.address);

  const data = { nickname, password, wallets: walletData };
  const encryptedData = await encryptData(data);
  localStorage.setItem("lynxUser", JSON.stringify(encryptedData));

  alert("ثبت‌نام با موفقیت انجام شد!");
  signupForm.reset();
});

// پر کردن کیف‌پول‌ها هنگام ورود
function loadWalletsForLogin(data) {
  storedWallets.innerHTML = "";
  data.wallets.forEach(w => {
    const row = document.createElement("div");
    row.className = "flex items-center space-x-2 bg-white/10 p-2 rounded-xl";

    const img = document.createElement("img");
    img.src = `wallets-icons/${w.wallet}.png`;
    img.alt = w.wallet;
    img.className = "w-6 h-6 rounded";

    const label = document.createElement("span");
    label.textContent = w.wallet;
    label.className = "text-white font-medium w-24";

    row.appendChild(img);
    row.appendChild(label);
    storedWallets.appendChild(row);
  });
}

// ورود
loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const encrypted = JSON.parse(localStorage.getItem("lynxUser") || "{}");
  const password = document.getElementById("loginPassword").value;

  try {
    const decrypted = await decryptData(encrypted.encrypted, encrypted.key, encrypted.iv);
    if (password === decrypted.password) {
      loadWalletsForLogin(decrypted);
      userNicknameSpan.textContent = decrypted.nickname;
      loginSuccessMsg.classList.remove("hidden");
      setTimeout(() => {
        window.location.href = "/dashboard.html";
      }, 2000);
    } else {
      alert("رمز اشتباه است!");
    }
  } catch {
    alert("اطلاعاتی یافت نشد یا خراب شده‌اند!");
  }
});
