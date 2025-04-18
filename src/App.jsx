import React from 'react';
import { motion } from 'framer-motion'; // ✅ Add this
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
