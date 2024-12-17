import React from 'react';
import { Camera } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="relative mb-6">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 rounded-full text-white hover:bg-blue-700">
              <Camera size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;