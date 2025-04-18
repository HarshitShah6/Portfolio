import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
import heroDesktop from '../assets/hero_img_chk.png';
import heroMobile from '../assets/clean.png';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(heroDesktop);

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(window.innerWidth < 768 ? heroMobile : heroDesktop);
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <section id="home" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="hero-content">
        {/* Text Section */}
        <motion.div
          className="text-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="harshit">
            <h3>Hello Am</h3>
            <h3>Harshit Shah</h3>
          </div>
          <h1>Software Designer</h1>
          <a href="/Harshit_Shah_Resume.pdf" download className="resume-btn">
            <span className="white-text">Get </span>My Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://www.instagram.com/harshitshah159/?hl=en" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/harshit-shah-630bb7358/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/harshitshah159/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
