import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import PreferencesSection from './PreferencesSection';
import ActivitySection from './ActivitySection';

const ProfileSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ProfileHeader />
      <ProfileInfo />
      <PreferencesSection />
      <ActivitySection />
    </div>
  );
};

export default ProfileSection;