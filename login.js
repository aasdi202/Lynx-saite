// login.js - LYNX Login Page Script

// ------------------------------ // Global Variables // ------------------------------ const maxWallets = 20; let currentWallets = 1;

const walletIcons = { MetaMask: "wallets-icon/metamask.png", TrustWallet: "wallets-icon/trustwallet.png", Coinbase: "wallets-icon/coinbase.png", Rainbow: "wallets-icon/rainbow.png", Zerion: "wallets-icon/zerion.png", SafePal: "wallets-icon/safepal.png", TokenPocket: "wallets-icon/tokenpocket.png", MathWallet: "wallets-icon/mathwallet.png", BitKeep: "wallets-icon/bitkeep.png", Onto: "wallets-icon/onto.png" // Add more if needed... };

// ------------------------------ // Language Handling // ------------------------------ function applyTranslations(lang) { const t = translations[lang]; document.querySelector("#loginTitle").textContent = t.login_title; document.querySelector("#nicknameLabel").textContent = t.nickname_label; document.querySelector("#passwordLabel").textContent = t.password_label; document.querySelector("#addWalletButton").textContent = t.add_wallet; document.querySelector("#registerButton").textContent = t.register; document.querySelector("#loginButton").textContent = t.login; document.querySelector("#helpButton").textContent = t.help; document.querySelector("#supportButton").textContent = t.support; }

// ------------------------------ // Wallet Add Function // ------------------------------ function addWalletInput() { if (currentWallets >= maxWallets) return; currentWallets++;

const container = document.getElementById("walletsContainer"); const div = document.createElement("div"); div.className = "flex items-center space-x-2 my-2";

const select = document.createElement("select"); select.className = "walletType"; for (let wallet in walletIcons) { const option = document.createElement("option"); option.value = wallet; option.textContent = wallet; select.appendChild(option); }

const input = document.createElement("input"); input.placeholder = "Wallet Address"; input.className = "walletAddress"; input.type = "text";

const img = document.createElement("img"); img.className = "w-6 h-6"; img.src = walletIcons[select.value];

select.addEventListener("change", () => { img.src = walletIcons[select.value]; });

div.appendChild(img); div.appendChild(select); div.appendChild(input);

container.appendChild(div); }

// ------------------------------ // Save Registration Info // ------------------------------ async function registerUser() { const nickname = document.getElementById("nickname").value; const password = document.getElementById("password").value; const walletInputs = document.querySelectorAll(".walletAddress"); const walletTypes = document.querySelectorAll(".walletType");

let wallets = []; for (let i = 0; i < walletInputs.length; i++) { wallets.push({ type: walletTypes[i].value, address: walletInputs[i].value }); }

const data = JSON.stringify({ nickname, password, wallets }); const encrypted = await encryptData(data); localStorage.setItem("lynx_user", encrypted); alert("Registration complete!"); }

// ------------------------------ // Encrypt Data (Web Crypto API) // ------------------------------ async function encryptData(data) { const enc = new TextEncoder(); const encoded = enc.encode(data); const key = await crypto.subtle.generateKey( { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"] ); const iv = crypto.getRandomValues(new Uint8Array(12)); const ciphertext = await crypto.subtle.encrypt( { name: "AES-GCM", iv }, key, encoded ); return btoa(String.fromCharCode(...iv) + String.fromCharCode(...new Uint8Array(ciphertext))); }

// ------------------------------ // Load Translations on Startup // ------------------------------ window.addEventListener("DOMContentLoaded", () => { const userLang = navigator.language.slice(0, 2); const supported = ["en", "fa", "zh", "ru", "tr", "ar"]; const lang = supported.includes(userLang) ? userLang : "en"; applyTranslations(lang);

document.getElementById("addWalletButton").addEventListener("click", addWalletInput); document.getElementById("registerButton").addEventListener("click", registerUser); });

