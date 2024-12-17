import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface ChatPreviewProps {
  title: string;
  preview: string;
  unread?: boolean;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({ title, preview, unread }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
    <div className={`p-3 rounded-full ${unread ? 'bg-blue-100' : 'bg-gray-100'}`}>
      <MessageCircle size={20} className={unread ? 'text-blue-600' : 'text-gray-600'} />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-medium text-gray-900 truncate">{title}</h3>
      <p className="text-sm text-gray-600 truncate">{preview}</p>
    </div>
    {unread && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
  </div>
);

const RecommendedChats = () => {
  const chats = [
    {
      title: "Local Food Guide",
      preview: "Discover the best restaurants in your area",
      unread: true
    },
    {
      title: "Weekend Events",
      preview: "Check out these upcoming events",
      unread: false
    }
  ];

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Continue Chatting</h2>
        <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700">
          View all <ArrowRight size={16} />
        </button>
      </div>
      <div className="space-y-3">
        {chats.map((chat) => (
          <ChatPreview key={chat.title} {...chat} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedChats;