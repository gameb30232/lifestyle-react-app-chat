import React from 'react';
import { User, Heart, Star, MessageSquare } from 'lucide-react';

interface ActivityCardProps {
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  time: string;
  image?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ user, action, target, time, image }) => (
  <div className="bg-white rounded-lg p-4 flex gap-4">
    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium">{user.name}</span>
        <span className="text-gray-600 text-sm">{action}</span>
        <span className="font-medium">{target}</span>
      </div>
      {image && (
        <img src={image} alt={target} className="w-full h-32 object-cover rounded-lg mb-2" />
      )}
      <span className="text-gray-500 text-sm">{time}</span>
    </div>
  </div>
);

const CommunityActivity = () => {
  const activities = [
    {
      user: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      action: "reviewed",
      target: "The Local Kitchen",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      user: {
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
      },
      action: "is attending",
      target: "Jazz Night at Blue Note",
      time: "3 hours ago"
    }
  ];

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Community Activity</h2>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default CommunityActivity;