import { useState, useEffect } from 'react';
import { useAI } from '@/core/ai-context';
import './AISuggestions.css';

const AISuggestions = () => {
  const { getSuggestions } = useAI();
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setIsLoading(true);
        const data = await getSuggestions();
        setSuggestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [getSuggestions]);

  if (isLoading) return <div className="ai-loading">Analyzing patterns...</div>;
  if (error) return <div className="ai-error">Error: {error}</div>;

  return (
    <div className="ai-suggestions-container">
      <h3>AI Suggestions</h3>
      <div className="suggestions-grid">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion-card">
            <div className="suggestion-icon">
              {suggestion.icon || '💡'}
            </div>
            <div className="suggestion-content">
              <h4>{suggestion.title}</h4>
              <p>{suggestion.description}</p>
              {suggestion.action && (
                <button 
                  onClick={suggestion.action.handler}
                  className="suggestion-button"
                >
                  {suggestion.action.label}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;