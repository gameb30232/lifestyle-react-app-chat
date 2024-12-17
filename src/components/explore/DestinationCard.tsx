import React from 'react';
import { Star, MapPin, Heart } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  name: string;
  rating: string;
  distance: string;
}

const DestinationCard = ({ image, name, rating, distance }: DestinationCardProps) => (
  <div className="min-w-[280px] bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
        <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
      </button>
    </div>
    <div className="p-4">
      <h4 className="font-semibold mb-2">{name}</h4>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Star size={16} className="text-yellow-400" />
          <span>{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{distance}</span>
        </div>
      </div>
    </div>
  </div>
);

export default DestinationCard;