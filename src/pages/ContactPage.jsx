import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">{t('contact')}</h2>
      <p className="mt-2">Reach us at lynx.project2025@gmail.com</p>
    </div>
  );
};

export default ContactPage;
