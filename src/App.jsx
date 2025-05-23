import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAI } from '@/core/ai-context';
import HomePage from '@/pages/Home';
import LoginPage from '@/pages/Auth/Login';
import SignupPage from '@/pages/Auth/Signup';
import DashboardPage from '@/pages/Dashboard/index.jsx';
import Layout from '@/components/Layout';
import { getDirection } from '@/utils/languageUtils';

function App() {
  const { i18n } = useTranslation();
  const { isLoading } = useAI();

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
          <Route path="/dashboard/*" element={<DashboardPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;