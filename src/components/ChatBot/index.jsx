import { useState } from 'react';
import { PaperPlaneIcon, BotIcon } from 'lucide-react';
import './styles.css';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'سلام! چطور می‌تونم کمکتون کنم؟' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: `شما گفتید: "${input}"` }; // جایگزین با هوش مصنوعی بعداً
    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  return (
    <>
      <button className="chat-toggle" onClick={toggleChat}>
        <BotIcon size={24} />
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="پیامت رو بنویس..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}><PaperPlaneIcon size={18} /></button>
          </div>
        </div>
      )}
    </>
  );
}
