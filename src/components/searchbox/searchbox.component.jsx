import React from 'react';

import './searchbox.styles.css';

export const Searchbox = props => {
  const { handleChange, placeholder } = props;
  return (
    <div className="Searchbox__wrapper">
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
        />
    </div>
  );
}