import React from "react";
import Styles from "./Blackquotecards.module.scss"

const Blackquotecards = (
    { 
        imageUrl, 
        paragraph,
        txt1,
        txt2, 
        margin,
        boxShadow
    }) => {
        const style = {
            margin: margin,
            boxShadow: boxShadow
          };  
  return (
    
    <div className={`card-transparent  text-lg-start text-center p-4 ${Styles.mainCard}`} style={style}>
    <img src={imageUrl} alt="Card image cap" className="img-fluid card-img-top w-auto" />
    <div className="card-body ">
      <p>{paragraph}</p>
      <div className="pt-2 d-flex flex-column">
        <span className="fw-bold">{txt1}</span>
        <span>{txt2}</span>
      </div>
    </div>
  </div>

  );
};

export default Blackquotecards;