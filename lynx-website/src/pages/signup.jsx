import React from "react";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create your account</h2>
        <form className="signup-form">
          <div className="input-group">
            <label>Full name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Phone number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="input-group">
            <label>Wallet address</label>
            <input type="text" placeholder="Paste your wallet address" />
          </div>
          <div className="input-group">
            <label>Create password</label>
            <input type="password" placeholder="Create your password" />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="login-link">
          Already have an account? <a href="#">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
