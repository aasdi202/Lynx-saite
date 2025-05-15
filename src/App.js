import React, { useState } from 'react';
import { checkWalletInstalled, connectWallet } from './blockchain/wallet';
import './App.css';

const App = () => {
  const [walletData, setWalletData] = useState(null);

  const handleConnect = async () => {
    try {
      const data = await connectWallet();
      setWalletData(data);
    } catch (error) {
      alert("خطا در اتصال: " + error.message);
    }
  };

  return (
    <div className="app">
      {walletData ? (
        <div className="wallet-info">
          <h2>✅ کیف پول متصل شد!</h2>
          <p>{walletData.shortAddress}</p>
        </div>
      ) : (
        <>
          <h1>به LYNX خوش آمدید</h1>
          <button onClick={handleConnect}>
            {checkWalletInstalled() ? "اتصال کیف پول" : "نصب متامسک"}
          </button>
        </>
      )}
    </div>
  );
};

export default App;

function TestMemory() {
  console.log("✅ پروژه LYNX در حافظه ثبت شد!");
}