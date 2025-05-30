import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const tokenAddress = '0x7E83Ab94668518f83Ec05aB65Cfa5425574Fb451';
const tokenABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function transfer(address to, uint256 value) returns (bool)'
];

const WalletConnect = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('لطفاً MetaMask را نصب کنید.');
        return;
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      alert('خطا در اتصال به کیف پول.');
    }
  };

  const addTokenToMetaMask = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: 'LYNX',
            decimals: 18,
            image: 'https://lynx-id.netlify.app/icons/lynx-token.png',
          },
        },
      });
    } catch (error) {
      console.error(error);
      alert('خطا در اضافه کردن توکن.');
    }
  };

  const fetchBalance = async () => {
    if (account && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, tokenABI, provider);
      const rawBalance = await contract.balanceOf(account);
      const decimals = await contract.decimals();
      const formatted = ethers.utils.formatUnits(rawBalance, decimals);
      setBalance(formatted);
    }
  };

  const sendTokens = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, tokenABI, signer);
      const decimals = await contract.decimals();
      const amountInUnits = ethers.utils.parseUnits(amount, decimals);
      const tx = await contract.transfer(recipient, amountInUnits);
      await tx.wait();
      alert('توکن با موفقیت ارسال شد!');
      fetchBalance(); // Refresh balance after sending
    } catch (error) {
      console.error(error);
      alert('خطا در ارسال توکن.');
    }
  };

  useEffect(() => {
    if (account) fetchBalance();
  }, [account]);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">اتصال به کیف پول</h2>

      {!account ? (
        <button
          onClick={connectWallet}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          اتصال به متامسک
        </button>
      ) : (
        <div className="space-y-4">
          <div className="text-gray-800 font-medium break-words">
            آدرس کیف پول: <span className="text-sm">{account}</span>
          </div>

          {balance !== null && (
            <div className="text-green-700">
              موجودی توکن LYNX شما: <strong>{balance}</strong>
            </div>
          )}

          <button
            onClick={addTokenToMetaMask}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            افزودن توکن LYNX به متامسک
          </button>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-700 mb-2">ارسال توکن LYNX</h3>
            <input
              type="text"
              placeholder="آدرس گیرنده"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="border w-full p-2 rounded mb-2"
            />
            <input
              type="number"
              placeholder="مقدار"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border w-full p-2 rounded mb-2"
            />
            <button
              onClick={sendTokens}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
            >
              ارسال توکن
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
