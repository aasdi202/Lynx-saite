import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAI } from '@/core/ai-context';
import { useAuth } from '@/context/auth-context'; // اضافه کردن AuthContext
import HomePage from '@/pages/Home';
import LoginPage from '@/pages/Auth/Login';
import SignupPage from '@/pages/Auth/Signup';
import RegisterPage from '@/pages/Auth/Register';
import ForgotPasswordPage from '@/pages/Auth/ForgotPassword';
import ResendVerificationPage from '@/pages/Auth/ResendVerification';
import VerifyEmailPage from '@/pages/Auth/VerifyEmail';
import DashboardPage from '@/pages/Dashboard/index.jsx';
import Layout from '@/components/Layout';
import PrivateRoute from '@/components/PrivateRoute';
import { getDirection } from '@/utils/languageUtils';

function App() {
  const { i18n } = useTranslation();
  const { isLoading } = useAI();
  const { user } = useAuth(); // گرفتن اطلاعات کاربر از context

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = getDirection(i18n.language);
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Layout loading={isLoading}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/resend-verification" element={<ResendVerificationPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
