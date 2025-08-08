import React from 'react';
import './NavigationIcons.css';

const NavigationIcons: React.FC = () => {
  return (
    <div className="navigation-icons">
      <button className="nav-button" disabled title="Back">
        <span className="icon">←</span>
      </button>
      <button className="nav-button" disabled title="Forward">
        <span className="icon">→</span>
      </button>
      <button className="nav-button" title="Reload">
        <span className="icon">⟳</span>
      </button>
    </div>
  );
};

export default NavigationIcons;
