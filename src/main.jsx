import './styles/globals.css';
import './styles/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AIProvider } from '@/core/ai-context';
import { I18nProvider } from '@/i18n'; // فرضی - مسیر را اصلاح کنید
import App from './App';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider>
      <AIProvider>
        <App />
      </AIProvider>
    </I18nProvider>
  </React.StrictMode>
);