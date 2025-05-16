import { Suspense, useEffect } from 'react'
import { useTranslation } from './i18n'
import Web3Connector from '@/blockchain/wallet'
import { initAI } from '@/core/ai-engine' // هوش مصنوعی پروژه
import { useTheme } from '@/styles/theme' // سیستم تم پویا

function App() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  // مقداردهی اولیه سرویس‌ها
  useEffect(() => {
    initAI() // راه‌اندازی هوش مصنوعی
    i18n.changeLanguage('fa') // زبان پیش‌فرض
    setTheme('dark') // تم پیش‌فرض
  }, [])

  return (
    <Suspense fallback={
      <div className="loading-animation">
        {/* انیمیشن لودینگ با Rive یا Lottie */}
      </div>
    }>
      <div className={`app-container ${theme}-theme`}>
        {/* سیستم اتصال کیف پول */}
        <Web3Connector />

        {/* رابط کاربری اصلی */}
        <main>
          <h1 className="gradient-text">{t('welcome')}</h1>
          
          {/* کامپوننت‌های هوشمند */}
          <AISuggestions />
          <VoiceInterface />
        </main>

        {/* منوی هوشمند */}
        <SmartMenu />
      </div>
    </Suspense>
  )
}

export default App