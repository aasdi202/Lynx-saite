import { createContext, useContext, useMemo, useState } from 'react';

export const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSuggestions = async (input) => {
    setIsLoading(true);
    try {
      // پیاده‌سازی واقعی API
      const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });
      
      const data = await response.json();
      setSuggestions(data);
      return data;
    } catch (error) {
      console.error("AI Suggestion Error:", error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo(() => ({
    getSuggestions,
    suggestions,
    isLoading
  }), [suggestions, isLoading]);

  return (
    <AIContext.Provider value={value}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within AIProvider');
  }
  return context;
};