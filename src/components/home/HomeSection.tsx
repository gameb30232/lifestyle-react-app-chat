import React from 'react';
import RecommendedChats from './RecommendedChats';
import CommunityActivity from './CommunityActivity';
import RecommendedActivities from './RecommendedActivities';

const HomeSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 pb-20">
      <RecommendedChats />
      <RecommendedActivities />
      <CommunityActivity />
    </div>
  );
};

export default HomeSection;