// src/core/ai-engine.js
import { useAI } from './ai-context';

// اضافه کردن تابع initAI
export const initAI = (config) => {
  // پیاده‌سازی مقداردهی اولیه AI
  return {
    // متدهای مورد نیاز
    analyze: (input) => { /* ... */ },
    generate: (prompt) => { /* ... */ }
  };
};

// هوک useAI (اگر نیاز است)
export const useAIEngine = () => {
  const aiContext = useAI();
  
  return {
    init: initAI,
    // سایر متدها
    ...aiContext
  };
};