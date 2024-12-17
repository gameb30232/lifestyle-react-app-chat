import React from 'react';
import { Coffee, Utensils, Music, Plane } from 'lucide-react';

interface PreferenceItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const PreferenceItem: React.FC<PreferenceItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const PreferencesSection = () => {
  const [activePreferences, setActivePreferences] = React.useState<string[]>([
    'Cafes',
    'Restaurants'
  ]);

  const togglePreference = (preference: string) => {
    setActivePreferences(prev =>
      prev.includes(preference)
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    );
  };

  const preferences = [
    { icon: <Coffee size={16} />, label: 'Cafes' },
    { icon: <Utensils size={16} />, label: 'Restaurants' },
    { icon: <Music size={16} />, label: 'Live Music' },
    { icon: <Plane size={16} />, label: 'Travel' }
  ];

  return (
    <div className="mt-8 px-4">
      <h2 className="text-lg font-semibold mb-4">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {preferences.map(pref => (
          <PreferenceItem
            key={pref.label}
            icon={pref.icon}
            label={pref.label}
            isActive={activePreferences.includes(pref.label)}
            onClick={() => togglePreference(pref.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default PreferencesSection;