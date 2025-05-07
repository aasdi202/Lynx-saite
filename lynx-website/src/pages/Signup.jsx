// مسیر: src/pages/SignUp.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <img src="/assets/lynx-logo.png" alt="Lynx Logo" className="logo" />

        <h2 className="title">ثبت‌نام در LYNX</h2>

        <form className="signup-form">
          <input type="text" placeholder="نام کاربری" required />
          <input type="email" placeholder="ایمیل" required />
          <input type="password" placeholder="رمز عبور" required />
          <button type="submit">ثبت‌نام</button>
        </form>

        <p className="login-link">
          حساب کاربری دارید؟{" "}
          <Link to="/login">وارد شوید</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
