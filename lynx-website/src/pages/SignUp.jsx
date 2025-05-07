import React, { useState } from 'react';
import { auth } from '../firebase'; // در صورت استفاده
import wallets from '../data/wallets'; // شامل اطلاعات ۵ کیف پول مهم

const Signup = () => {
  const [nickname, setNickname] = useState('');
  const [walletsData, setWalletsData] = useState(wallets);
  const [authMethod, setAuthMethod] = useState('password');
  const [language, setLanguage] = useState('en');

  const handleAddWallet = () => {
    setWalletsData([...walletsData, { name: '', logo: '', address: '' }]);
  };

  const handleWalletChange = (index, address) => {
    const newWallets = [...walletsData];
    newWallets[index].address = address;
    setWalletsData(newWallets);
  };

  const handleRegister = () => {
    // TODO: ذخیره اطلاعات به Firebase و ارسال به داشبورد
    console.log({ nickname, walletsData, authMethod, language });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white p-6">
      <div className="max-w-lg mx-auto bg-black bg-opacity-40 p-8 rounded-2xl shadow-xl space-y-6">
        <div className="text-right">
          <select
            className="bg-gray-800 text-white rounded px-2 py-1"
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
            <option value="ar">العربية</option>
            <option value="zh">中文</option>
            <option value="tr">Türkçe</option>
            <option value="ru">Русский</option>
          </select>
        </div>
        <h2 className="text-2xl font-bold text-center">Register to LYNX</h2>
        <input
          type="text"
          placeholder="Nickname"
          className="w-full p-2 rounded bg-gray-800"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        <div className="space-y-2">
          {walletsData.map((wallet, index) => (
            <div key={index} className="flex items-center space-x-2">
              {wallet.logo && (
                <img src={wallet.logo} alt={wallet.name} className="w-6 h-6" />
              )}
              <input
                type="text"
                placeholder={`${wallet.name || 'Wallet'} Address`}
                className="flex-1 p-2 rounded bg-gray-800"
                value={wallet.address}
                onChange={e => handleWalletChange(index, e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleAddWallet} className="text-sm text-blue-300">
            + Add another wallet
          </button>
        </div>
        <div className="space-y-1">
          <label className="block text-sm">Authentication Method:</label>
          <select
            className="w-full p-2 bg-gray-800 rounded"
            value={authMethod}
            onChange={e => setAuthMethod(e.target.value)}
          >
            <option value="password">Password</option>
            <option value="fingerprint">Fingerprint</option>
          </select>
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded text-white font-bold"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
