import React from 'react';
import { Home, Compass, MessageCircle, User } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center">
          <NavItem
            icon={<Home size={24} />}
            label="Home"
            active={activeTab === 'home'}
            onClick={() => onTabChange('home')}
          />
          <NavItem
            icon={<Compass size={24} />}
            label="Explore"
            active={activeTab === 'explore'}
            onClick={() => onTabChange('explore')}
          />
          <NavItem
            icon={<MessageCircle size={24} />}
            label="Chat"
            active={activeTab === 'chat'}
            onClick={() => onTabChange('chat')}
          />
          <NavItem
            icon={<User size={24} />}
            label="Profile"
            active={activeTab === 'profile'}
            onClick={() => onTabChange('profile')}
          />
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center p-2 ${
        active ? 'text-blue-600' : 'text-gray-600'
      } transition-colors duration-200 hover:text-blue-500`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

export default Navigation;