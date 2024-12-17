import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const QuickReply = ({ text, onClick }) => (
  <button 
    onClick={onClick}
    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
  >
    {text}
  </button>
);

const ChatInterface = () => {
  const [message, setMessage] = useState('');

  const quickReplies = [
    'Find restaurants',
    'Explore Events',
    'Wellness centers',
    'Popular spots'
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <Sparkles className="text-blue-600" size={24} />
            </div>
            <h2 className="text-xl font-semibold">Hi there! 👋</h2>
          </div>
          <p className="text-gray-600 mb-4">
            I'm your lifestyle assistant. How can I help you today?
          </p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <QuickReply key={reply} text={reply} onClick={() => setMessage(reply)} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;