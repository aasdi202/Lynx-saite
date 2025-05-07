import React from 'react';
import '../styles/signup.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <h1>LYNX ثبت نام</h1>
      
      <div className="input-group">
        <label htmlFor="nickname">Choose your nickname</label>
        <input 
          type="text" 
          id="nickname" 
          placeholder="نام کاربری خود را وارد کنید"
        />
      </div>
      
      <div className="wallet-options">
        <button className="wallet-btn">
          <span>MetaMask</span>
        </button>
        <button className="wallet-btn">
          <span>Trust Wallet</span>
        </button>
        <button className="wallet-btn">
          <span>SafePal</span>
        </button>
        <button className="wallet-btn">
          <span>Coinbase Wallet</span>
        </button>
        <button className="wallet-btn">
          <span>TokenPocket</span>
        </button>
        
        <button className="add-wallet">
          + Add another wallet
        </button>
      </div>
      
      <div className="auth-methods">
        <button className="auth-btn">Password</button>
        <button className="auth-btn">Fingerprint</button>
      </div>
      
      <button className="submit-btn">ثبت نام</button>
    </div>
  );
};

export default SignupPage;
