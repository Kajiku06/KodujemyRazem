import React from 'react';
import '../ContentSelectionPages.css';

import CardView from './CardView';

const CardViewsPanel = ({ pages }) => {
  return (
    <div className="card-views-panel-s">
      {pages.map((page, index) => (
        <CardView
          key={index}
          title={page.title}
          link={page.link}
          tags={page.tags} 
        />
      ))}
    </div>
  );
};

export default CardViewsPanel;
  