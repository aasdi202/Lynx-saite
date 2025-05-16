import { Suspense, useEffect, useState } from 'react';
import { useTranslation } from '@/i18n';
import { useWallet } from '@/blockchain/wallet';
import { initAI } from '@/core/ai-engine';
import { useTheme } from '@/styles/theme';
import LoadingAnimation from '@/components/LoadingAnimation';
import AISuggestions from '@/components/AISuggestions';
import VoiceInterface from './components/VoiceInterface.jsx';
import SmartMenu from '@/components/SmartMenu.jsx';

function App() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { isWalletInstalled, walletData, connectWallet } = useWallet();
  const [isInitializing, setIsInitializing] = useState(true);

  // مقداردهی اولیه سرویس‌ها
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await Promise.all([
          initAI(),
          i18n.changeLanguage('fa'),
          setTheme('dark')
        ]);
      } catch (error) {
        console.error('Initialization error:', error);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeApp();
  }, [i18n, setTheme]);

  if (isInitializing) {
    return <LoadingAnimation fullScreen />;
  }

  return (
    <Suspense fallback={<LoadingAnimation />}>
      <div className={`app-container ${theme}-theme`}>
        {/* سیستم اتصال کیف پول با مدیریت خطا */}
        <button 
          onClick={connectWallet}
          disabled={!isWalletInstalled}
          className="wallet-connector"
        >
          {walletData?.shortAddress || t('connect_wallet')}
        </button>

        {/* محتوای اصلی */}
        <main>
          <h1 className="gradient-text">{t('welcome')}</h1>
          
          <AISuggestions />
          <VoiceInterface />
        </main>

        <SmartMenu />
      </div>
    </Suspense>
  );
}

export default App;