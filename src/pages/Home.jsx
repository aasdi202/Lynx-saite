import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/home/HeroSection';
import FeaturesSection from '../sections/home/FeaturesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Fragment>
      {/* متا دیتا برای سئو */}
      <Helmet>
        <title>LYNX | ارتباط غیرمتمرکز آینده</title>
        <meta name="description" content="پروژه LYNX: ارتباط امن و غیرمتمرکز برای دنیای دیجیتال امروز" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        {/* می‌تونی بقیه سکشن‌ها هم اینجا اضافه کنی */}
      </main>
      <Footer />
    </Fragment>
  );
}
