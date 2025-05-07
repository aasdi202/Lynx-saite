import { auth } from '../firebase';
import React, { useState, useEffect } from 'react';

const walletOptions = [
  { name: 'MetaMask', logo: '/logos/metamask.png' },
  { name: 'Trust Wallet', logo: '/logos/trustwallet.png' },
  { name: 'SafePal', logo: '/logos/safepal.png' },
  { name: 'Coinbase Wallet', logo: '/logos/coinbase.png' },
  { name: 'TokenPocket', logo: '/logos/tokenpocket.png' },
];

const SignUp = () => {
  const [language, setLanguage] = useState('en');
  const [nickname, setNickname] = useState('');
  const [wallets, setWallets] = useState([]);
  const [authMethod, setAuthMethod] = useState('password');

  // تشخیص زبان سیستم (هوشمند)
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('fa')) setLanguage('fa');
  }, []);

  const handleWalletChange = (index, address) => {
    const updated = [...wallets];
    updated[index] = { ...walletOptions[index], address };
    setWallets(updated);
  };

  const handleRegister = () => {
    const userData = {
      nickname,
      language,
      wallets,
      authMethod,
    };
    localStorage.setItem('lynxUser', JSON.stringify(userData));
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {language === 'fa' ? 'ثبت‌نام در لاینکس' : 'Register in LYNX'}
        </h1>

        <label className="block mb-2">{language === 'fa' ? 'نام مستعار' : 'Nickname'}</label>
        <input
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <label className="block mb-2">{language === 'fa' ? 'انتخاب کیف پول' : 'Choose Wallets'}</label>
        {walletOptions.map((wallet, i) => (
          <div key={i} className="flex items-center mb-2 space-x-2">
            <img src={wallet.logo} alt={wallet.name} className="w-6 h-6" />
            <span>{wallet.name}</span>
            <input
              className="flex-1 p-1 rounded bg-gray-700 border border-gray-600"
              placeholder={language === 'fa' ? 'آدرس کیف پول' : 'Wallet Address'}
              type="text"
              onChange={(e) => handleWalletChange(i, e.target.value)}
            />
          </div>
        ))}

        <label className="block mt-4 mb-2">{language === 'fa' ? 'نحوه ورود' : 'Login Method'}</label>
        <select
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600"
          value={authMethod}
          onChange={(e) => setAuthMethod(e.target.value)}
        >
          <option value="password">{language === 'fa' ? 'رمز عبور' : 'Password'}</option>
          <option value="fingerprint">{language === 'fa' ? 'اثر انگشت' : 'Fingerprint'}</option>
        </select>

        <button
          onClick={handleRegister}
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded font-semibold"
        >
          {language === 'fa' ? 'ثبت‌نام' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
