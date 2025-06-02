import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const SignupWithEmail = ({ wallet }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user && wallet) {
      const { error: insertError } = await supabase
        .from('user_profiles')
        .insert({ id: data.user.id, wallet_address: wallet });

      if (insertError) {
        setError('ثبت کیف پول با خطا مواجه شد.');
        setLoading(false);
        return;
      }
    }

    setMessage('ثبت‌نام با موفقیت انجام شد. لطفاً ایمیل خود را تایید کنید.');
    setEmail('');
    setPassword('');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md max-w-md w-full">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="ایمیل"
        className="w-full border border-gray-300 p-2 mb-3 rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="رمز عبور"
        className="w-full border border-gray-300 p-2 mb-3 rounded"
        required
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      {message && <p className="text-green-600 text-sm mb-3">{message}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
      >
        {loading ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
      </button>
    </form>
  );
};

export default SignupWithEmail;
