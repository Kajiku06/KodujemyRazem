import React, { useState } from 'react';
import '../ContentSelectionPages.css';
import './CardViewsPanel'

const SearchPanel = ({ onSearch, defaultSearchValue }) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearchValue || '');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-panel">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchPanel;