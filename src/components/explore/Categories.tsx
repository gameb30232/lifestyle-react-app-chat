import React from 'react';
import { Calendar, Utensils, Heart, Music, Coffee, Hotel } from 'lucide-react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    icon: Calendar,
    title: 'Events',
    description: 'Discover local events and cultural activities'
  },
  {
    icon: Utensils,
    title: 'Restaurants',
    description: 'Find the best dining spots near you'
  },
  {
    icon: Heart,
    title: 'Wellness',
    description: 'Explore wellness centers and retreats'
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Live music, shows, and performances'
  },
  {
    icon: Coffee,
    title: 'Cafés',
    description: 'Cozy spots for coffee and quick bites'
  },
  {
    icon: Hotel,
    title: 'Hotels',
    description: 'Top-rated places to stay'
  }
];

const Categories = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;