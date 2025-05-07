import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white text-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">به لاینکس خوش آمدید</h1>
      <p className="text-lg mb-8">شروع تجربه‌ای جدید با هویت غیرمتمرکز</p>
      <button
        onClick={() => navigate('/signup')}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
      >
        شروع ثبت‌نام
      </button>
    </div>
  );
};

export default Home;
