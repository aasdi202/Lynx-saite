document.getElementById("show-register").addEventListener("click", showRegisterForm);

function showRegisterForm() {
  const wallets = [
    { name: "MetaMask", icon: "wallets/metamask.svg" },
    { name: "Trust Wallet", icon: "wallets/trustwallet.svg" },
    { name: "Coinbase", icon: "wallets/coinbase.svg" },
    { name: "Binance", icon: "wallets/binance.svg" },
    { name: "Phantom", icon: "wallets/phantom.svg" },
    { name: "WalletConnect", icon: "wallets/walletconnect.svg" },
    { name: "OKX", icon: "wallets/okx.svg" },
    { name: "SafePal", icon: "wallets/safepal.svg" },
    { name: "TokenPocket", icon: "wallets/tokenpocket.svg" },
    { name: "Zerion", icon: "wallets/zerion.svg" },
    { name: "MathWallet", icon: "wallets/mathwallet.svg" },
    { name: "BitKeep", icon: "wallets/bitkeep.svg" },
    { name: "ONTO", icon: "wallets/onto.svg" },
    { name: "OneKey", icon: "wallets/onekey.svg" },
    { name: "ImToken", icon: "wallets/imtoken.svg" },
    { name: "Rainbow", icon: "wallets/rainbow.svg" },
    { name: "AlphaWallet", icon: "wallets/alphawallet.svg" },
    { name: "Enkrypt", icon: "wallets/enkrypt.svg" },
    { name: "Keplr", icon: "wallets/keplr.svg" },
    { name: "XDEFI", icon: "wallets/xdefi.svg" }
  ];

  const formHTML = `
    <form id="register-form" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold" data-i18n="nickname">Nickname</label>
        <input type="text" id="nickname" required class="w-full px-4 py-2 rounded bg-white bg-opacity-10 border border-white placeholder-white text-white" placeholder="e.g. مشدی">
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
        ${wallets.map((w, i) => `
          <div class="flex items-center space-x-2">
            <img src="${w.icon}" alt="${w.name}" class="w-8 h-8">
            <span class="font-semibold text-white">${w.name}</span>
          </div>
          <input type="text" name="wallet-${i}" class="w-full px-3 py-1 rounded bg-white bg-opacity-10 border border-white text-white placeholder-white" placeholder="Wallet Address">
        `).join("")}
      </div>
      <div>
        <label class="block mb-1 font-semibold" data-i18n="customPassword">Custom Password</label>
        <input type="password" id="custom-password" required class="w-full px-4 py-2 rounded bg-white bg-opacity-10 border border-white text-white placeholder-white" placeholder="********">
      </div>
      <button type="submit" class="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded font-bold" data-i18n="submit">Register</button>
    </form>
    <div id="register-success" class="hidden mt-4 text-green-300 text-lg font-bold text-center">
      <span data-i18n="registrationSuccess">Registration successful!</span><br/>
      <span data-i18n="thankYou">Thank you for joining LYNX.</span>
    </div>
  `;

  document.getElementById("form-container").innerHTML = formHTML;

  document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("custom-password").value;

    const walletAddresses = {};
    wallets.forEach((w, i) => {
      const input = document.querySelector(`input[name="wallet-${i}"]`);
      if (input.value.trim()) {
        walletAddresses[w.name] = input.value.trim();
      }
    });

    const data = {
      nickname,
      password,
      wallets: walletAddresses
    };

    // ذخیره در localStorage با رمزگذاری
    const encrypted = btoa(JSON.stringify(data)); // به زودی با Web Crypto جایگزین میشه
    localStorage.setItem("lynx_user", encrypted);

    // پیام موفقیت
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("register-success").classList.remove("hidden");
  });
}
