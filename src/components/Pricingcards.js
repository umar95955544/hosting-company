// PricingCard.js
import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import Styles from './Pricingcards.module.scss'

const Pricingcards = (
    { 
        heading, 
        paragraph, 
        price, 
        month,
        buttonLabel,
        features
 
    }) => {
  return (
    <div className="card p-3 m-5" style={{borderRadius: '15px'}}>
      <h4 className="card-heading fw-bold">{heading}</h4>
      <p className="card-paragraph">{paragraph}</p>
      <h2>{price}</h2>
      <p>{month}</p>
      <button className={Styles.btnCard}>{buttonLabel}</button>
      <ul className="list-unstyled pt-4 features-list">
          {features.map((features, index) => (
            <li key={index} style={{ paddingTop: '0.8rem'}}>
              <BsCheckLg style={{ marginRight: '0.8rem'}}/>{features}
            </li>
          ))}
        </ul>
      </div>
    
  );
};

export default Pricingcards;