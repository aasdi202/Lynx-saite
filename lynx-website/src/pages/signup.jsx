import React, { useState } from 'react';
import './styles/signup.css';

const initialWallets = [
  { name: 'MetaMask', logo: 'https://cryptologos.cc/logos/metamask-icon-logo.png', address: '' },
  { name: 'Trust Wallet', logo: 'https://cryptologos.cc/logos/trust-wallet-trust-logo.png', address: '' },
  { name: 'Coinbase', logo: 'https://cryptologos.cc/logos/coinbase-coinbase-logo.png', address: '' },
  { name: 'Binance', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png', address: '' },
  { name: 'Ledger', logo: 'https://cryptologos.cc/logos/ledger-ledger-logo.png', address: '' },
];

export default function Signup() {
  const [alias, setAlias] = useState('');
  const [wallets, setWallets] = useState(initialWallets);
  const [loginMethod, setLoginMethod] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const addWallet = () => {
    setWallets([...wallets, { name: '', logo: '', address: '' }]);
  };

  const updateWalletAddress = (index, address) => {
    const newWallets = [...wallets];
    newWallets[index].address = address;
    setWallets(newWallets);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted!');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up LYNX</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Alias (نام مستعار)"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />

        <div className="wallet-section">
          {wallets.map((wallet, index) => (
            <div key={index} className="wallet-item">
              <img src={wallet.logo} alt={wallet.name} className="wallet-logo" />
              <input
                type="text"
                placeholder={`Address for ${wallet.name || 'Wallet'}`}
                value={wallet.address}
                onChange={(e) => updateWalletAddress(index, e.target.value)}
              />
            </div>
          ))}
          <button type="button" className="add-wallet" onClick={addWallet}>
            + Add another wallet
          </button>
        </div>

        <div className="login-method">
          <label>
            <input
              type="radio"
              name="login"
              value="password"
              onChange={() => setLoginMethod('password')}
            />
            Password
          </label>
          <label>
            <input
              type="radio"
              name="login"
              value="fingerprint"
              onChange={() => setLoginMethod('fingerprint')}
            />
            Fingerprint
          </label>
        </div>

        {loginMethod === 'password' && (
          <div className="password-fields">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}
