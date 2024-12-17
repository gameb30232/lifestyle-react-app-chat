import React from 'react';
import DestinationCard from './DestinationCard';

const popularDestinations = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    name: 'The Local Kitchen',
    rating: '4.8',
    distance: '0.5 mi'
  },
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
    name: 'Zen Wellness Center',
    rating: '4.9',
    distance: '1.2 mi'
  },
  {
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    name: 'City Art Gallery',
    rating: '4.7',
    distance: '0.8 mi'
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    name: 'Riverside Café',
    rating: '4.6',
    distance: '0.3 mi'
  }
];

const PopularDestinations = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Popular Destinations</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {popularDestinations.map((destination) => (
          <DestinationCard key={destination.name} {...destination} />
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;