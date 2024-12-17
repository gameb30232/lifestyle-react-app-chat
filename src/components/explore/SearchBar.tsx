import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search places, events, or services..."
        className="w-full pl-12 pr-4 py-3 bg-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;