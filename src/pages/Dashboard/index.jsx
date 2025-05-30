import React, { useState, useEffect } from 'react';
import ChatBot from '@/components/ChatBot';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          {'داشبورد پروژه LYNX'}
        </h1>
        <p className="text-gray-700 leading-relaxed">
          {'به داشبورد خوش آمدید! از این بخش می‌توانید وضعیت کیف پول خود را ببینید و به امکانات Web3 دسترسی داشته باشید.'}
        </p>

        {/* نمایش نام و عکس پروفایل کاربر */}
        {user && (
          <div className="mt-6 flex items-center">
            <img src={user.photoURL || '/default-avatar.png'} alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
            <h3 className="text-xl font-semibold">{user.displayName || user.email}</h3>
          </div>
        )}

        {/* بخش‌های آینده: */}
        {/* <WalletInfo /> */}
        {/* <TokenTransfer /> */}
        {/* <DIDSection /> */}
        {/* <LiveStats /> */}
      </div>

      {/* چت‌بات هوشمند همیشه فعال */}
      <ChatBot />
    </div>
  );
};

export default DashboardPage;
