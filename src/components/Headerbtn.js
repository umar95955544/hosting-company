import React, { useRef } from 'react';
import Styles from './Headerbtn.module.scss';


function Headerbtn({ label, onClick,color,border,boxShadow,padding,borderRadius,backgroundColor,marginLeft }) {
  const buttonRef = useRef(null);

  const style = {
    'backgroundColor':backgroundColor,
    'color':color,
    'border':border,
    'boxShadow':boxShadow,
    'padding':padding,
    'borderRadius':borderRadius,
    'marginLeft':marginLeft
  }
  const hoverStyle={
    backgroundColor: backgroundColor === '#B00000' ? 'white' : '#B00000',
    color: color === 'white' ? 'black' : 'white',
    border: border === '1px solid #B00000' ? '1px solid #000000' : '#B00000',
    boxShadow: boxShadow === '0px 0px 64px 0px #B000004D' ? 'none' : '0px 0px 64px 0px #B000004D',
  }
  const handleMouseEnter = () => {
    buttonRef.current.style.backgroundColor = hoverStyle.backgroundColor;
    buttonRef.current.style.color = hoverStyle.color;
    buttonRef.current.style.border = hoverStyle.border;
    buttonRef.current.style.boxShadow = hoverStyle.boxShadow;
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.backgroundColor = style.backgroundColor;
    buttonRef.current.style.color = style.color;
    buttonRef.current.style.border = style.border;
    buttonRef.current.style.boxShadow = style.boxShadow;
  };

  return (
    <button className={Styles.headerbtnprop} ref={buttonRef} style={style} type="button" onClick={onClick} 
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
}

export default Headerbtn;
