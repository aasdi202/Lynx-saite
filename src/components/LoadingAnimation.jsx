import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingAnimation.css'; // فایل استایل اختصاصی

const LoadingAnimation = ({ fullScreen = false }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`loading-container ${fullScreen ? 'full-screen' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.p
          className="loading-text"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Loading LYNX{dots}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;