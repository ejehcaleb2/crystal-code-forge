
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
        <ParticleBackground />
        
        <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
