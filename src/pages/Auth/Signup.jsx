import React from 'react';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ثبت‌نام در پروژه LYNX</h2>
        <form>
          <div className="mb-4">
            <label className="block text-right text-gray-700">نام:</label>
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-right text-gray-700">ایمیل:</label>
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-right text-gray-700">رمز عبور:</label>
            <input
              type="password"
              placeholder="رمز عبور را وارد کنید"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            ثبت‌نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
