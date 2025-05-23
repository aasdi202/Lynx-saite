import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ورود به حساب کاربری</h2>
        <form>
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
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
