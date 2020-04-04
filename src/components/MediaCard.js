import React from 'react';
import '../stylesheets/Mediacard.css';

function MediaCard(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src="https://via.placeholder.com/75" title="titulo" alt="text" />
      </div>
      <div className="titles-container">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
      </div>
      <p className="paragraph">{props.text}</p>
    </div>
  );
}

export default MediaCard;
