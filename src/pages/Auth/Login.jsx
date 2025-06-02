import LoginWithEmail from '@/components/Auth/LoginWithEmail';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-bold text-center mb-6">ورود به LYNX</h2>
        <LoginWithEmail />
      </div>
    </div>
  );
};

export default Login;
