// ChatBot.jsx

import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ChatBot = () => {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'سلام! من چت‌بات لاینکس هستم. چطور می‌تونم کمکت کنم؟' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const saveMessageToDB = async (role, content) => {
    try {
      await addDoc(collection(db, 'chat'), {
        role,
        content,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('❌ خطا در ذخیره پیام:', error);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    await saveMessageToDB('user', input);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: updatedMessages,
        }),
      });

      const data = await res.json();
      const botReply = data.choices?.[0]?.message?.content || 'خطا در پاسخ!';
      const updated = [...updatedMessages, { role: 'assistant', content: botReply }];
      setMessages(updated);

      await saveMessageToDB('assistant', botReply);
    } catch (err) {
      const errorMsg = 'خطا در اتصال به چت‌بات.';
      setMessages([...updatedMessages, { role: 'assistant', content: errorMsg }]);
      await saveMessageToDB('assistant', errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm z-50">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-3 max-h-80 overflow-y-auto text-sm space-y-2">
          {messages.map((msg, i) => (
            <div key={i} className={msg.role === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-700'}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex border-t border-gray-200">
          <input
            className="w-full px-3 py-2 text-sm outline-none"
            type="text"
            placeholder="پیامت رو بنویس..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            disabled={loading}
          />
          <button
            className="bg-indigo-600 text-white px-4 text-sm"
            onClick={sendMessage}
            disabled={loading}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
