import React, { useState } from 'react';
import { auth, googleProvider } from '@/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginEmail = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert('ورود ناموفق: ' + err.message);
    }
  };

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      alert('خطای گوگل: ' + err.message);
    }
  };

  const loginMetaMask = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask نصب نشده");
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      alert("وارد شدید: " + await signer.getAddress());
      navigate('/dashboard');
    } catch (err) {
      alert("خطا در اتصال متامسک: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ورود به LYNX</h2>
        <form onSubmit={loginEmail}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ایمیل" className="w-full p-2 mb-4 border rounded" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="رمز عبور" className="w-full p-2 mb-6 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">ورود</button>
        </form>

        <div className="mt-4 text-center">
          <button onClick={loginGoogle} className="w-full bg-red-500 text-white py-2 rounded mb-2">ورود با گوگل</button>
          <button onClick={loginMetaMask} className="w-full bg-yellow-500 text-white py-2 rounded">ورود با MetaMask</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
