import SignupWithEmail from '@/components/Auth/SignupWithEmail';
import ConnectWallet from '@/components/Auth/ConnectWallet';
import { useState } from 'react';

const Signup = () => {
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      <h2 className="text-2xl font-bold mb-4">ثبت‌نام در LYNX</h2>
      <ConnectWallet onAddress={setWalletAddress} />
      <SignupWithEmail wallet={walletAddress} />
    </div>
  );
};

export default Signup;
