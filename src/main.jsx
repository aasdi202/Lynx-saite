// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { AIProvider } from '@/core/ai-context';
import { I18nProvider } from '@/providers/I18nProvider'; // مسیر اصلاح‌شده
import i18n from '@/i18n';
import App from './App';
import '@/styles/globals.css';
import '@/styles/tailwind.css';

// حذف لاگ‌های کنسول در حالت Production
if (import.meta.env.PROD) {
  const noop = () => {};
  ['debug', 'log', 'warn', 'error', 'info'].forEach(method => {
    if (console[method]) {
      console[method] = noop;
    }
  });
}

// رندر اپلیکیشن
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <I18nProvider>
          <AIProvider>
            <App />
          </AIProvider>
        </I18nProvider>
      </I18nextProvider>
    </StrictMode>
  );
} else {
  console.error('🟥 عنصر root پیدا نشد!');
}
