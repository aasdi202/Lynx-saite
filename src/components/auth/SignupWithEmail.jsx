import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const SignupWithEmail = ({ wallet }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) return alert(error.message);

    if (data.user && wallet) {
      await supabase.from('user_profiles').insert({
        id: data.user.id,
        wallet_address: wallet
      });
    }

    alert("ثبت‌نام موفق بود. لطفاً ایمیل خود را تایید کنید.");
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4 mt-4">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ایمیل" className="w-full border rounded p-2" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="رمز عبور" className="w-full border rounded p-2" required />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">ثبت‌نام</button>
    </form>
  );
};

export default SignupWithEmail;
