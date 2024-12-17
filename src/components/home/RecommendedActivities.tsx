import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  date: string;
  image: string;
  attendees: number;
  category: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, date, image, attendees, category }) => (
  <div className="min-w-[280px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <img src={image} alt={title} className="w-full h-32 object-cover" />
    <div className="p-4">
      <span className="text-sm text-blue-600 font-medium">{category}</span>
      <h3 className="font-medium mt-1 mb-2">{title}</h3>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <span>{attendees} attending</span>
      </div>
    </div>
  </div>
);

const RecommendedActivities = () => {
  const activities = [
    {
      title: "Wine Tasting Evening",
      date: "Tomorrow, 7 PM",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
      attendees: 45,
      category: "Food & Drink"
    },
    {
      title: "Modern Art Exhibition",
      date: "This weekend",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      attendees: 120,
      category: "Arts & Culture"
    },
    {
      title: "Yoga in the Park",
      date: "Saturday, 9 AM",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      attendees: 28,
      category: "Wellness"
    }
  ];

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recommended for You</h2>
        <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700">
          View all <ArrowRight size={16} />
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedActivities;