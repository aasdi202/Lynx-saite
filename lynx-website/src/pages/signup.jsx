import React from "react";
import "../styles/signup.css"; // فایل CSS اصلاح‌شده

const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">ثبت‌نام در LYNX</h2>
      <form className="signup-form">
        <input type="text" placeholder="نام کاربری" required />
        <input type="email" placeholder="ایمیل" required />
        <input type="password" placeholder="رمز عبور" required />
        <button type="submit">ثبت‌نام</button>
      </form>
    </div>
  );
};

export default Signup;
