import React from 'react';
import '../ContentSelectionPages.css';

const CardView = ({ title, link }) => {
  return (
    <div className="card-view-s">
      <a href={link} className="card-link-s">{title}</a>
    </div>
  );
};

export default CardView;