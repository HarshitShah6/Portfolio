import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
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
    <Navbar/>
      <HeroSection/>
      <About/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
