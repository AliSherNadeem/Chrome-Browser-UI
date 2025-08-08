import React, { useState } from 'react';
import './NavigationBar.css';

interface NavigationBarProps {
  url: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ url }) => {
  const [addressValue, setAddressValue] = useState(url);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="navigation-bar">
      <div className="nav-controls">
        <button className="nav-button" disabled title="Back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 2L4 8l6 6V2z"/>
          </svg>
        </button>
        <button className="nav-button" disabled title="Forward">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 2l6 6-6 6V2z"/>
          </svg>
        </button>
        <button className="nav-button" title="Reload">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 1 6-6v2a4 4 0 0 0-4 4H2z"/>
          </svg>
        </button>
      </div>

      <div className={`address-bar-container ${isFocused ? 'focused' : ''}`}>
        <div className="address-bar">
          <input
            type="text"
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search Google or type a URL"
            className="address-input"
          />
        </div>
      </div>

      <div className="toolbar-icons">
        <button className="toolbar-button" title="Bookmark this tab">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z"/>
          </svg>
        </button>
        <div className="extension-icons">
          <button className="extension-button" title="AdBlock">
            <div className="extension-icon red">AB</div>
          </button>
          <button className="extension-button" title="Extension">
            <div className="extension-icon blue">🛡️</div>
          </button>
        </div>
        <button className="toolbar-button" title="Customize and control Google Chrome">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="3" r="1"/>
            <circle cx="8" cy="8" r="1"/>
            <circle cx="8" cy="13" r="1"/>
          </svg>
        </button>
        <button className="profile-button" title="Profile">
          <div className="profile-avatar">👤</div>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
