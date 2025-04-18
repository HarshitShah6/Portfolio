import React from 'react';
import '../styles/SkillsSection.css';
import {
  FaReact, FaNodeJs, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaJava
} from 'react-icons/fa';
import {
  SiMongodb, SiFirebase, SiExpress, SiPostman
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-scroll">
      {skills.map((skill, index) => (
  <motion.div
    className="skill-badge"
    key={index}
   
    viewport={{ once: true }}
    whileHover={{
      scale: 1.08,
      rotate: 1.5,
      boxShadow: "0px 6px 30px rgba(245, 199, 41, 0.5)",
    }}
  >
    <div className="icon">{skill.icon}</div>
    <p>{skill.name}</p>
  </motion.div>
))}

      </div>
    </section>
  );
};

export default SkillsSection;
