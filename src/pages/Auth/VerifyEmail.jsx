// src/pages/Auth/VerifyEmail.jsx
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmailPage() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.emailVerified) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const resendVerification = async () => {
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      alert('ایمیل تأیید مجدد ارسال شد.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">لطفاً ایمیل خود را تأیید کنید</h2>
        <p className="mb-4">ما یک لینک تأیید به ایمیل شما ارسال کرده‌ایم. پس از تأیید، می‌توانید وارد داشبورد شوید.</p>
        <button onClick={resendVerification} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ارسال مجدد ایمیل تأیید
        </button>
      </div>
    </div>
  );
}
