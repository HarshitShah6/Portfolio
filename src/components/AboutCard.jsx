import React from 'react';
import { motion } from 'framer-motion';
import "../styles/AboutSection.css";

const AboutCard = ({ title, items }) => {
  return (
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      whileHover={{
        scale: 1.02,
    opacity: 0.9,
    translateY: -5,

            }}
    >
      <h2>{title}</h2>

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="about-item"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          
        >
          {item.year && <p className="year">{item.year}</p>}
          <h3>{item.heading}</h3>
          {item.subtext && <p className="subtext">{item.subtext}</p>}
          {item.grades && <p className="subtext">{item.grades}</p>}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutCard;
