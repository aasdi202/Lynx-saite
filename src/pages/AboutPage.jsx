import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">{t('about')}</h2>
      <p className="mt-2">LYNX is a decentralized communication platform.</p>
    </div>
  );
};

export default AboutPage;
