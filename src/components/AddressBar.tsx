import React, { useState } from 'react';
import './AddressBar.css';

interface AddressBarProps {
  url: string;
}

const AddressBar: React.FC<AddressBarProps> = ({ url }) => {
  const [inputValue, setInputValue] = useState(url);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`address-bar ${isFocused ? 'focused' : ''}`}>
      <div className="address-bar-inner">
        <span className="lock-icon">🔒</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search Google or type a URL"
          className="address-input"
        />
      </div>
    </div>
  );
};

export default AddressBar;
