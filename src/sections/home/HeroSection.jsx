import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/LanguageSelector';
import Logo from '../../components/Logo';

export default function HeroSection() {
  const { t } = useTranslation(); // این خط باید بالا باشه

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        {/* لوگو */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <Logo className="h-24 w-auto" />
        </motion.div>

        {/* عنوان */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-white mb-8"
        >
          {t('welcome_message')}
        </motion.h1>

        {/* عکس مفهومی */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12 w-full max-w-2xl"
        >
          <img
            src="/assets/images/hero-image.png"
            alt={t('decentralized_communication')}
            className="w-full rounded-xl shadow-2xl border-4 border-white/20"
          />
        </motion.div>

        {/* دکمه شروع */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <button className="bg-white text-indigo-600 hover:bg-indigo-100 font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            {t('signup_now')}
          </button>
        </motion.div>

        {/* انتخاب زبان */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="w-full max-w-xs"
        >
          <LanguageSelector />
        </motion.div>
      </div>
    </motion.div>
  );
}
