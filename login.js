// login.js برای صفحه لاگین LYNX

// DOM Elements const registerForm = document.getElementById('register-form'); const loginForm = document.getElementById('login-form'); const walletListContainer = document.getElementById('wallet-list'); const loginWalletList = document.getElementById('login-wallet-list'); const languageSelect = document.getElementById('language-select');

// بارگذاری زبان‌ها import { translations, currentLanguage, setLanguage } from './language.js'; function updateTexts() { document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); el.textContent = translations[currentLanguage][key] || key; }); } updateTexts();

languageSelect.addEventListener('change', (e) => { setLanguage(e.target.value); updateTexts(); });

// لیست کیف‌پول‌ها const wallets = [ 'MetaMask', 'TrustWallet', 'Coinbase', 'Binance', 'OKX', 'SafePal', 'TokenPocket', 'MathWallet', 'Zerion', 'Argent', '1inch', 'Rainbow', 'Brave', 'Ledger', 'Trezor', 'Phantom', 'Keplr', 'XDEFI', 'Nabox', 'ONTO' ];

function renderWallets() { walletListContainer.innerHTML = ''; loginWalletList.innerHTML = ''; wallets.forEach(name => { const id = name.toLowerCase(); const iconPath = ./wallets-icons/${id}.png;

// برای ثبت‌نام
const div = document.createElement('div');
div.className = 'flex items-center gap-2 mb-2';
div.innerHTML = `
  <img src="${iconPath}" alt="${name}" class="w-6 h-6"/>
  <span class="font-semibold">${name}</span>
  <input type="text" placeholder="Wallet Address" class="ml-auto input input-bordered w-full max-w-xs" data-wallet-name="${name}"/>
`;
walletListContainer.appendChild(div);

// برای ورود
const loginItem = document.createElement('option');
loginItem.value = name;
loginItem.textContent = name;
loginWalletList.appendChild(loginItem);

}); } renderWallets();

// رمزگذاری با Web Crypto API async function encryptData(data, password) { const enc = new TextEncoder(); const keyMaterial = await window.crypto.subtle.importKey( 'raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveKey'] ); const key = await window.crypto.subtle.deriveKey( { name: 'PBKDF2', salt: enc.encode('lynx-salt'), iterations: 100000, hash: 'SHA-256' }, keyMaterial, { name: 'AES-GCM', length: 256 }, true, ['encrypt'] ); const iv = window.crypto.getRandomValues(new Uint8Array(12)); const encrypted = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(data))); return { data: Array.from(new Uint8Array(encrypted)), iv: Array.from(iv) }; }

async function decryptData(encrypted, password) { const enc = new TextEncoder(); const dec = new TextDecoder(); const keyMaterial = await window.crypto.subtle.importKey( 'raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveKey'] ); const key = await window.crypto.subtle.deriveKey( { name: 'PBKDF2', salt: enc.encode('lynx-salt'), iterations: 100000, hash: 'SHA-256' }, keyMaterial, { name: 'AES-GCM', length: 256 }, true, ['decrypt'] ); const decrypted = await window.crypto.subtle.decrypt( { name: 'AES-GCM', iv: new Uint8Array(encrypted.iv) }, key, new Uint8Array(encrypted.data) ); return JSON.parse(dec.decode(decrypted)); }

// ثبت‌نام کاربر registerForm.addEventListener('submit', async (e) => { e.preventDefault(); const nickname = registerForm.nickname.value; const password = registerForm.password.value; const walletsData = {}; document.querySelectorAll('[data-wallet-name]').forEach(input => { walletsData[input.dataset.walletName] = input.value.trim(); }); const encrypted = await encryptData({ nickname, walletsData }, password); localStorage.setItem('lynx_user', JSON.stringify(encrypted)); alert(${translations[currentLanguage]['registration_success']} ${nickname}); });

// ورود loginForm.addEventListener('submit', async (e) => { e.preventDefault(); const selectedWallet = loginForm.wallet.value; const password = loginForm.password.value; const encrypted = JSON.parse(localStorage.getItem('lynx_user')); try { const data = await decryptData(encrypted, password); if (data.walletsData[selectedWallet]) { alert(${translations[currentLanguage]['welcome_back']} ${data.nickname}); window.location.href = './dashboard.html'; } else { alert(translations[currentLanguage]['wallet_not_found']); } } catch (e) { alert(translations[currentLanguage]['invalid_password']); } });

