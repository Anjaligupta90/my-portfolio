import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
