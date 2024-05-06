import React, { useState, useEffect } from 'react';
import '../ContentSelectionPages.css'

import CardView from './CardView';

const CardViewsPanel = ({ pages }) => {
    return (
      <div className="card-views-panel-s">
        {pages.map((page, index) => (
          <CardView key={index} title={page.title} link={page.link} />
        ))}
      </div>
    );
  };
  
  export default CardViewsPanel;
  