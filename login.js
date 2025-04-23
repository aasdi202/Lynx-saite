document.addEventListener("DOMContentLoaded", () => {
  renderLoginForm(); // اولین چیزی که نشون می‌ده فرم ورود باشه
});

function renderLoginForm() {
  document.body.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-6 text-white font-sans">
      <h1 class="text-4xl font-bold mb-6 text-emerald-400">ورود به داشبورد LYNX</h1>

      <form id="loginForm" class="w-full max-w-md space-y-4 bg-white/10 p-6 rounded-xl">
        <input id="loginPassword" type="password" placeholder="رمز عبور" class="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70" required />
        <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition">ورود</button>
      </form>

      <div id="loginSuccessMsg" class="hidden mt-6 text-lg text-green-400 font-bold animate-pulse">
        خوش آمدی <span id="userNickname" class="font-extrabold text-yellow-300"></span>! در حال ورود به داشبورد هستی...
      </div>

      <div id="storedWallets" class="mt-6 space-y-2 w-full max-w-md"></div>

      <hr class="my-8 border-white/20 w-full max-w-lg" />

      <h2 class="text-3xl font-bold mb-4 text-blue-400">ثبت‌نام کاربر جدید</h2>
      <form id="signupForm" class="w-full max-w-xl space-y-4 bg-white/10 p-6 rounded-xl">
        <input id="nickname" type="text" placeholder="نام مستعار" class="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70" required />
        <input id="password" type="password" placeholder="رمز عبور" class="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70" required />
        <div id="walletsContainer" class="space-y-2"></div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition">ثبت‌نام</button>
      </form>
    </div>
  `;

  initWalletInputs();
}

const wallets = [
  "MetaMask", "TrustWallet", "Coinbase", "SafePal", "TokenPocket", "MathWallet",
  "BitKeep", "ONTO", "Zerion", "Rainbow", "Argent", "Exodus", "Brave", "Guarda",
  "Enjin", "imToken", "Torus", "Frame", "XDEFI", "Opera"
];

const walletInputs = [];

function initWalletInputs() {
  const walletsContainer = document.getElementById("walletsContainer");
  wallets.forEach(name => {
    const row = document.createElement("div");
    row.className = "flex items-center space-x-3 bg-white/5 p-2 rounded-xl";

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
    input.className = "flex-1 px-3 py-1 rounded bg-white/10 text-white border border-white/20";

    row.appendChild(img);
    row.appendChild(label);
    row.appendChild(input);
    walletsContainer?.appendChild(row);

    walletInputs.push({ name, input });
  });

  bindFormEvents();
}

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

function bindFormEvents() {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

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

    alert("ثبت‌نام با موفقیت انجام شد! اکنون می‌توانید وارد شوید.");
    signupForm.reset();
  });

  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const encrypted = JSON.parse(localStorage.getItem("lynxUser") || "{}");
    const password = document.getElementById("loginPassword").value;

    try {
      const decrypted = await decryptData(encrypted.encrypted, encrypted.key, encrypted.iv);
      if (password === decrypted.password) {
        const storedWallets = document.getElementById("storedWallets");
        storedWallets.innerHTML = "";
        decrypted.wallets.forEach(w => {
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

        document.getElementById("userNickname").textContent = decrypted.nickname;
        document.getElementById("loginSuccessMsg").classList.remove("hidden");

        setTimeout(() => {
          window.location.href = "/dashboard.html";
        }, 2000);
      } else {
        alert("رمز اشتباه است!");
      }
    } catch {
      alert("اطلاعات یافت نشد یا خراب شده‌اند!");
    }
  });
}
