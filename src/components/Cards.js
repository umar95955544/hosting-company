// Card.js

import React from 'react';

const Cards = (
    { 
        imageUrl, 
        heading, 
        paragraph 
    }) => {
  return (
    <div className="card border-0">
      <img src={imageUrl} alt="Card Top" className="card-image" height={75}/>
      <h5 className="card-heading pt-4 pb-2">{heading}</h5>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  );
};

export default Cards;
