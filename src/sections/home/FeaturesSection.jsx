import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('why_choose_lynx')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">{t('feature_secure')}</h3>
            <p>{t('feature_secure_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">{t('feature_decentralized')}</h3>
            <p>{t('feature_decentralized_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">{t('feature_scalable')}</h3>
            <p>{t('feature_scalable_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
