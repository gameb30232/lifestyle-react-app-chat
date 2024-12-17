import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ProfileInfo = () => {
  return (
    <div className="mt-16 px-4">
      <h1 className="text-2xl font-bold text-center mb-2">John Doe</h1>
      <p className="text-gray-600 text-center mb-6">Travel Enthusiast</p>
      
      <div className="space-y-4 max-w-md mx-auto">
        <div className="flex items-center gap-3 text-gray-600">
          <Mail size={20} />
          <span>john.doe@example.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <Phone size={20} />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <MapPin size={20} />
          <span>San Francisco, CA</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;