// Card.js

import React from 'react';

const Footersec = (
    { 
        heading, 
        txt1, 
        txt2,
        txt3,
        txt4,
    }) => {
  return (
    <div>
        <h5 className='fw-bold'>{heading}</h5>
        <p className='pt-2'>{txt1}</p>
        <p className='pt-2'>{txt2}</p>
        <p className='pt-2'>{txt3}</p>
        <p className='pt-2'>{txt4}</p>
    </div>
  );
};

export default Footersec;
