import React, { useState } from 'react';
import WindowControls from './components/WindowControls';
import TabBar from './components/TabBar';
import NavigationBar from './components/NavigationBar';
import GoogleHomepage from './components/GoogleHomepage';
import './App.css';

interface Tab {
  id: string;
  title: string;
  url: string;
  favicon?: string;
}

function App() {
  const [activeTabId, setActiveTabId] = useState('tab1');
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 'tab1',
      title: 'New Tab',
      url: 'chrome://newtab/',
      favicon: '🌐'
    },
    {
      id: 'tab2',
      title: 'New Tab',
      url: 'chrome://newtab/',
      favicon: '🌐'
    }
  ]);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const handleCloseTab = (tabId: string) => {
    if (tabs.length > 1) {
      const newTabs = tabs.filter(tab => tab.id !== tabId);
      setTabs(newTabs);
      if (activeTabId === tabId) {
        setActiveTabId(newTabs[0].id);
      }
    }
  };

  const handleNewTab = () => {
    const newTab = {
      id: `tab${Date.now()}`,
      title: 'New Tab',
      url: 'chrome://newtab/',
      favicon: '🌐'
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.id);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="chrome-browser">
      <div className="title-bar">
        <TabBar 
          tabs={tabs}
          activeTabId={activeTabId}
          onTabClick={handleTabClick}
          onCloseTab={handleCloseTab}
          onNewTab={handleNewTab}
        />
        <WindowControls />
      </div>
      
      <NavigationBar url={activeTab?.url || 'chrome://newtab/'} />
      
      <div className="content-area">
        <GoogleHomepage />
      </div>
    </div>
  );
}

export default App;
