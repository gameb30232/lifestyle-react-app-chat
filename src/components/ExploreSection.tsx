import React from 'react';
import SearchBar from './explore/SearchBar';
import Categories from './explore/Categories';
import PopularDestinations from './explore/PopularDestinations';

const ExploreSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 pb-16">
      <SearchBar />
      <Categories />
      <PopularDestinations />
    </div>
  );
};

export default ExploreSection;