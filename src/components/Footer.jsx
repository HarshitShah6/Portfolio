import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="jessica-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo"><span style={{color:"white"}}>Harshit</span> Shah</h2>
          <p className="footer-tagline">Crafting ideas into clean, modern code.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Let’s Collaborate</h4>
          <p>Feel free to contact if you want to collaborate or just have a good conversation!</p>
          <p className="footer-email">📩 contact@yourwebsite.com</p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/HarshitShah6" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/harshit-shah-630bb7358" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:contact@yourwebsite.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
