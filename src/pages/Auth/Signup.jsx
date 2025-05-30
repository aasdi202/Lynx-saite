import React, { useState } from 'react';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert('ثبت‌نام ناموفق: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ثبت‌نام در LYNX</h2>
        <form onSubmit={signup}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ایمیل" className="w-full p-2 mb-4 border rounded" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="رمز عبور" className="w-full p-2 mb-6 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">ثبت‌نام</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
