import React, { useState, useEffect} from 'react';
import './SmallCard.css';

const SmallCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    props.onClick(props.children);
  };



 
  return (
    <button 
      className={`small-card ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}

export default SmallCard;
