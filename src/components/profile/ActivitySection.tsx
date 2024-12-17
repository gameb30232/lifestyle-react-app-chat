import React from 'react';
import { Clock } from 'lucide-react';

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  image: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, time, image }) => (
  <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
    <img src={image} alt={title} className="w-16 h-16 rounded-lg object-cover" />
    <div className="flex-1">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex items-center text-xs text-gray-500">
        <Clock size={14} className="mr-1" />
        {time}
      </div>
    </div>
  </div>
);

const ActivitySection = () => {
  const activities = [
    {
      title: "The Local Kitchen",
      description: "Left a review - ★★★★★",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      title: "City Art Gallery",
      description: "Saved to favorites",
      time: "Yesterday",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
    }
  ];

  return (
    <div className="mt-8 px-4">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;