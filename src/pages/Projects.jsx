import React, { useEffect, useRef, useState } from 'react';
import WeExistImage from '../assets/images/WeExist.png';
import TurtleRacer from '../assets/images/trtule.jpg';
import Stock from '../assets/images/stock.jpg';

const ProjectCard = ({ title, text, image, link }) => {
  return (
    <div
      className="card"
      style={{
        width: '18rem',
        margin: '1rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s, opacity 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.opacity = '1';
      }}
    >
      <img src={image} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-body">
        <a
          href={link}
          className="card-link text-blue-500 font-bold no-underline transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0056b3';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#007BFF';
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const ProjectCardList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when the element is in the viewport
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current); // Start observing the heading element
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current); // Clean up the observer when the component is unmounted
      }
    };
  }, []);

  const cardData = [
    {
      title: 'WeExist - Founder and Developer',
      text: 'A social initiative aimed at building a Food Donation Network and Community Fund to support underprivileged communities. The project focuses on addressing immediate needs and providing long-term assistance, with the goal of fostering positive change. Currently under active development.',
      image: WeExistImage,
      link: 'https://github.com/FARINATTAR/WeExist.git',
    },
    {
      title: 'Turtle The Road Racer',
      text: 'A Python-based game created with Turtle graphics, where players guide a turtle across a busy road while avoiding cars. Features include increasing difficulty levels, score tracking, and collision detection for an engaging and interactive gameplay experience.',
      image: TurtleRacer,
      link: 'https://github.com/yourusername/TurtleRoadRacer',
    },
    {
      title: 'Stock Trading News Alert Notification',
      text: 'An automated stock alert system developed using Python to monitor significant changes in Tesla Inc. (TSLA) stock prices. Integrated News API and Twilio API to deliver real-time SMS notifications with news headlines and summaries, enhancing market awareness and user engagement.',
      image: Stock,
      link: 'https://github.com/FARINATTAR/Stock-Project.git',
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <div
        ref={headingRef}
        id='projects'
        className={`${
          isVisible ? 'slide-in' : ''
        }`}
        style={{
          color: '#F6AD55',
          fontSize: '2.5rem',
          fontWeight: '600',
          marginBottom: '20px',
          textAlign: 'center',

        }}
      >
        My Projects
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {cardData.map((card, index) => (
          <ProjectCard
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;
