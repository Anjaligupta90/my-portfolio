import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="wrapper" className='rounded shadow'>
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
