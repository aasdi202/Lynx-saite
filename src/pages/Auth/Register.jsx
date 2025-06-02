// src/pages/Auth/Register.jsx
import { useState } from 'react';
import { auth, db } from '@/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // تنظیم نام نمایشی کاربر
      await updateProfile(userCred.user, { displayName: name });

      // ارسال ایمیل تأیید
      await sendEmailVerification(userCred.user);

      // ذخیره اطلاعات در Firestore
      const userDoc = doc(db, 'users', userCred.user.uid);
      await setDoc(userDoc, {
        uid: userCred.user.uid,
        name,
        email,
        createdAt: new Date().toISOString(),
        verified: false,
      });

      setSuccess(true);
      setEmail('');
      setPassword('');
      setName('');

      // هدایت به صفحه ورود
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow rounded w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">ثبت‌نام در LYNX</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="نام کامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-6"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            ثبت‌نام
          </button>
        </form>
        {success && <p className="mt-4 text-green-600 text-sm text-center">ثبت‌نام موفق بود! لطفاً ایمیل خود را تأیید کنید.</p>}
        {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}
      </div>
    </div>
  );
}
