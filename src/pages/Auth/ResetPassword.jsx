// src/pages/Auth/ResetPassword.jsx
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err) {
      alert('خطا: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">بازیابی رمز عبور</h2>
        {sent ? (
          <p className="text-green-600">ایمیل بازیابی ارسال شد!</p>
        ) : (
          <form onSubmit={handleReset}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border mb-4 rounded" placeholder="ایمیل خود را وارد کنید" required />
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">ارسال لینک بازیابی</button>
          </form>
        )}
      </div>
    </div>
  );
}
