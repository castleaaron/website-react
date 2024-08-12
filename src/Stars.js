import React, { useEffect } from 'react';
import './App.css';

const Stars = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.stars');
    const starCount = 100; // Adjust the number of stars for density

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
      starContainer.appendChild(star);
    }
  }, []);

  return <div className="stars"></div>;
};

export default Stars;