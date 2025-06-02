// src/pages/Auth/ResendVerification.jsx
import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '@/firebase';
import { sendEmailVerification } from 'firebase/auth';

export default function ResendVerificationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resendVerification = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user.emailVerified) {
        alert('ایمیل شما قبلاً تأیید شده است.');
      } else {
        await sendEmailVerification(user);
        alert('ایمیل تأیید مجدد ارسال شد.');
      }
    } catch (error) {
      alert('خطا: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-yellow-50">
      <form onSubmit={resendVerification} className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">ارسال مجدد ایمیل تأیید</h2>
        <input type="email" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700">ارسال مجدد</button>
      </form>
    </div>
  );
}
