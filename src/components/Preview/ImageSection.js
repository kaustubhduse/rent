import React, { useState } from 'react';
import './ImageSection.css';

const ImageSection = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div className='all-images'>
      <button className='prev-button' onClick={goToPrevious}>
        &lt;
      </button>
      <div className='image-container'>
        {children[currentIndex]}
      </div>
      <button className='next-button' onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSection;
