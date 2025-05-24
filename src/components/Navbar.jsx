import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-indigo-600">LYNX</div>
      <nav className="space-x-4">
        <Link to="/login" className="text-indigo-600 hover:underline">{t('login')}</Link>
        <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">{t('signup')}</Link>
      </nav>
    </header>
  );
}
