import React from 'react';
import logo from '@/public/images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* لوگو سمت راست */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="LYNX Logo" className="h-10" />
        <h1 className="text-2xl font-bold text-indigo-600">LYNX</h1>
      </div>

      {/* نام کاربر و عکس پروفایل */}
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium hidden sm:block">
            {user.displayName || 'کاربر'}
          </span>
          <img
            src={user.photoURL || '/default-avatar.png'}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition"
          >
            خروج
          </button>
        </div>
      ) : (
        <div>
          <a
            href="/login"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-3 rounded"
          >
            ورود / ثبت‌نام
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
