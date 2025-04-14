import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
import heroDesktop from '../assets/hero_img_chk.png';
import heroMobile from '../assets/clean.png'; // Make sure this exists

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(heroDesktop);

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(window.innerWidth < 768 ? heroMobile : heroDesktop);
    };

    updateBackground(); // Initial check
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
        <div className="text-section">
          <div className="harshit">
            <h3>Hello Am </h3>
            <h3>Harshit Shah</h3>
          </div>
          <h1>Software Designer</h1>
          <a href="/Resume.pdf" download className="resume-btn">
            <span className="white-text">Get </span>My Resume
          </a>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/harshitshah159/?hl=en" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/harshit-shah-630bb7358/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/harshitshah159/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
