import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { AIProvider } from '@/core/ai-context';
import i18n from '@/i18n';
import App from './App';
import '@/styles/globals.css';
import '@/styles/tailwind.css';

if (import.meta.env.PROD) {
  const noop = () => {};
  ['debug', 'log'].forEach(method => {
    if (console[method]) {
      console[method] = noop;
    }
  });
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <AIProvider>
          <App />
        </AIProvider>
      </I18nextProvider>
    </StrictMode>
  );
} else {
  console.error('🟥 عنصر root پیدا نشد!');
}
