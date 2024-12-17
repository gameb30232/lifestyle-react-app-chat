import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/home/HomeSection';
import ChatInterface from './components/ChatInterface';
import ExploreSection from './components/ExploreSection';
import ProfileSection from './components/profile/ProfileSection';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-16">
        {activeTab === 'home' && <HomeSection />}
        {activeTab === 'explore' && <ExploreSection />}
        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'profile' && <ProfileSection />}
      </main>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}

export default App;