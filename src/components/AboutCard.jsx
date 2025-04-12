import React from 'react';
import "../styles/AboutSection.css"
const AboutCard = ({ title, items }) => {
  return (
    <div className="about-card">
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="about-item">
          {item.year && <p className="year">{item.year}</p>}
          <h3>{item.heading}</h3>
          {item.subtext && <p className="subtext">{item.subtext}</p>}
          {item.grades && <p className="subtext">{item.grades}</p>}
        </div>
      ))}
    </div>
  );
};

export default AboutCard;
