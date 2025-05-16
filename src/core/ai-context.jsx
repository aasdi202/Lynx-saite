import { createContext, useContext, useMemo, useState } from 'react';

const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (input) => {
    try {
      // پیاده‌سازی واقعی دریافت پیشنهادات از API
      const mockSuggestions = [
        {
          title: "پیشنهاد نمونه",
          description: "توضیحات پیشنهاد",
          icon: "💡",
          action: {
            label: "اجرا",
            handler: () => console.log("پیشنهاد اجرا شد")
          }
        }
      ];
      setSuggestions(mockSuggestions);
      return mockSuggestions;
    } catch (error) {
      console.error("خطا در دریافت پیشنهادات:", error);
      return [];
    }
  };

  const value = useMemo(() => ({
    getSuggestions,
    suggestions
  }), [suggestions]);

  return (
    <AIContext.Provider value={value}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};