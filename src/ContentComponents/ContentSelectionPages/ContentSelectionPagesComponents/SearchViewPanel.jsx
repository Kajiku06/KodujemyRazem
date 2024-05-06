import React from 'react';
import '../ContentSelectionPages.css'

import SearchPanel from './SearchPanel';
import CardViewsPanel from './CardViewsPanel';

const SearchViewPanel = ({ onSearch, onSort, pages }) => {
  return (
    <div className="search-view-panel">
      <SearchPanel onSearch={onSearch} onSort={onSort} />
      <CardViewsPanel pages={pages} />
    </div>
  );
};

export default SearchViewPanel;