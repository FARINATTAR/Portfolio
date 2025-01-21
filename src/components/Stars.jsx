import React, { useEffect, useRef } from "react";
import '../assets/styles/Stars.css';

const ShootingStars = () => {
  const starContainerRef = useRef(null);

  useEffect(() => {
    // Generate static stars
    const createStaticStars = () => {
      const starCount = 150; // Adjust for density
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("static-star");
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = 2 + Math.random() * 3 + "s"; // Twinkling duration
        starContainerRef.current.appendChild(star);
      }
    };

    // Generate shooting stars
    const createShootingStar = () => {
      const star = document.createElement("div");
      star.classList.add("shooting-star");
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.animationDuration = 1 + Math.random() * 2 + "s";
      starContainerRef.current.appendChild(star);

      // Remove the star after its animation
      setTimeout(() => {
        star.remove();
      }, 3000);
    };

    createStaticStars();

    // Create a shooting star every 500ms
    const interval = setInterval(createShootingStar, 500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div ref={starContainerRef} className="star-container"></div>;
};

export default ShootingStars;
