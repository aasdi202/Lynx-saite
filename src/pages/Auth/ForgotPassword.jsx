// src/pages/Auth/ForgotPassword.jsx
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('لینک بازیابی رمز عبور به ایمیل شما ارسال شد.');
    } catch (error) {
      alert('خطا: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form onSubmit={handleReset} className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">فراموشی رمز عبور</h2>
        <input type="email" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">ارسال لینک بازیابی</button>
      </form>
    </div>
  );
}
