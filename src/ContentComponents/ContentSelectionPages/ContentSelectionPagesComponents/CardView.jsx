import React from 'react';
import '../ContentSelectionPages.css';

const CardView = ({ title, link, tags }) => {
  return (
    <div className="card-view-s">
      <a href={link} className="card-link-s">
      <table>
        <tbody>
          {title}
        </tbody>
        <tbody>
          <div className="tags">
            {tags.map((tag, index) => (<span key={index} className="tag">{tag}</span>))}
          </div>
        </tbody>
      </table>
      </a>
    </div>
  );
};

export default CardView;