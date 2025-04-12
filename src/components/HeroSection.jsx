// src/components/HeroSection.jsx
import React from 'react';
import '../styles/hero.css';
import heroBg from '../assets/hero_img_chk.png';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-content">
      <img src={heroBg} alt="Background Shape" className="hero-bg" />

        <div className="text-section">
          <div className='harshit'><h3>Hello Am </h3><h3>Harshit Shah</h3></div>
          <h1>Software Designer</h1>
          <a href="/Resume.pdf" download className="resume-btn"><span style={{color:"white"}}>Get  </span>My Resume</a>
        </div>

        {/* <div className="image-section">
          <img src={profileImg} alt="Harshit Shah" className="profile-image" />
          
        </div> */}
        <div className="social-icons">
            <a href="https://www.instagram.com/harshitshah159/?hl=en" target="_blank" rel="noreferrer"><FaFacebook/></a>
            <a href="https://x.com/?lang=en"><FaTwitter/></a>
            <a href="https://www.linkedin.com/in/harshit-shah-630bb7358/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://www.instagram.com/harshitshah159/?hl=en" target="_blank" rel="noreferrer"><FaInstagram/></a>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
