// login.js - LYNX Login Page Script

// ----------- CONFIG ------------ const WALLETS = [ "metamask", "trustwallet", "coinbase", "binance", "okx", "kraken", "bitpay", "phantom", "xdefi", "keplr", "mathwallet", "safe", "rainbow", "argent", "frame", "zerion", "brave", "walletconnect", "onekey", "onto" ];

const walletsContainer = document.getElementById("wallets-container"); const language = getSelectedLanguage(); // Function from language.js

// --------- UI BUILDER ---------- function buildWalletFields() { walletsContainer.innerHTML = ""; WALLETS.forEach(wallet => { const wrapper = document.createElement("div"); wrapper.className = "flex items-center mb-2";

const icon = document.createElement("img");
icon.src = `wallets-icons/${wallet}.png`;
icon.alt = wallet;
icon.className = "w-6 h-6 mr-2";

const label = document.createElement("span");
label.textContent = wallet.charAt(0).toUpperCase() + wallet.slice(1);
label.className = "text-white font-medium w-32";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "0x...";
input.className = "flex-1 rounded p-2 text-sm bg-white/10 backdrop-blur text-white";
input.name = `wallet-${wallet}`;

wrapper.appendChild(icon);
wrapper.appendChild(label);
wrapper.appendChild(input);
walletsContainer.appendChild(wrapper);

}); }

// -------- STORAGE & SECURITY -------- async function encryptData(data, password) { const enc = new TextEncoder(); const key = await crypto.subtle.importKey("raw", enc.encode(password.padEnd(32, "0")), { name: "AES-GCM" }, false, ["encrypt"]); const iv = crypto.getRandomValues(new Uint8Array(12)); const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(JSON.stringify(data))); return { data: Array.from(new Uint8Array(encrypted)), iv: Array.from(iv) }; }

async function saveUserData() { const nickname = document.getElementById("nickname").value; const password = document.getElementById("register-password").value; if (!nickname || !password) return alert("لطفاً نام مستعار و رمز را وارد کنید");

const wallets = {}; WALLETS.forEach(wallet => { const value = document.querySelector(input[name='wallet-${wallet}']).value; if (value) wallets[wallet] = value; });

const data = { nickname, wallets }; const encrypted = await encryptData(data, password); localStorage.setItem("lynxUser", JSON.stringify(encrypted));

document.getElementById("register-success").classList.remove("hidden"); document.getElementById("register-success").textContent = ثبت‌نام با موفقیت انجام شد. از همراهی شما با پروژه LYNX سپاسگزاریم، ${nickname}!; setTimeout(() => document.getElementById("register-success").classList.add("hidden"), 7000); }

// -------- LOGIN -------- async function decryptData(encData, password) { try { const { data, iv } = encData; const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password.padEnd(32, "0")), { name: "AES-GCM" }, false, ["decrypt"]); const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv: new Uint8Array(iv) }, key, new Uint8Array(data)); return JSON.parse(new TextDecoder().decode(decrypted)); } catch (e) { return null; } }

async function loginUser() { const password = document.getElementById("login-password").value; const enc = JSON.parse(localStorage.getItem("lynxUser")); const user = await decryptData(enc, password); if (!user) return alert("رمز نادرست است یا اطلاعات موجود نیست");

document.getElementById("welcome-message").textContent = خوش آمدید ${user.nickname}; setTimeout(() => window.location.href = "dashboard.html", 2000); }

// -------- INIT -------- document.addEventListener("DOMContentLoaded", () => { buildWalletFields(); document.getElementById("register-btn").addEventListener("click", saveUserData); document.getElementById("login-btn").addEventListener("click", loginUser); });

