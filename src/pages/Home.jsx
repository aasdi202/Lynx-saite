import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/useAuth'; // Import the new custom hook
import Navbar from '../components/Navbar';
import HeroSection from '../sections/home/HeroSection';
import FeaturesSection from '../sections/home/FeaturesSection';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user } = useAuth(); // Access current user status from the auth hook
  const navigate = useNavigate();

  const handleStartClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      alert('برای ادامه ابتدا وارد شوید.');
    }
  };

  return (
    <Fragment>
      {/* Meta Data for SEO */}
      <Helmet>
        <title>LYNX | ارتباط غیرمتمرکز آینده</title>
        <meta name="description" content="پروژه LYNX: ارتباط امن و غیرمتمرکز برای دنیای دیجیتال امروز" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        {/* You can add other sections here */}
      </main>
      <Footer />

      {/* "شروع کنید" Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleStartClick}
          disabled={!user}
          className={`px-8 py-3 text-lg font-medium rounded-lg transition ${
            user ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          شروع کنید
        </button>
      </div>
    </Fragment>
  );
}
