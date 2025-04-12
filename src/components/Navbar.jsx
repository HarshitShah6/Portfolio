import React from 'react';
import '../styles/navbar.css';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 350) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  return (
    <nav id="navbar" className="navbar">
      <div className="nav-logo">
        <span style={{ color: "white" }}>Harshit</span> Shah
      </div>
      <ul className="nav-links">
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
          >
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
          >
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
