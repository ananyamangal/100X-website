
import React, { useState, useEffect } from 'react';
import './productslideshow.css';
import image1 from '../images/imageee.png';
import image2 from '../images/imageeee.png';
import image3 from '../images/imagee.png';

const images = [image1, image2, image3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="slideshow">
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <div className="slide">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slide-image" />
      </div>
      <button className="arrow right" onClick={nextSlide}>❯</button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
