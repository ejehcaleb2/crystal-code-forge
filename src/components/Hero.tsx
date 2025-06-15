
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const fullText = "I build thoughtful digital solutions with backend precision and frontend flair.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowButtons(true), 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in-up">
        {/* Animated Avatar */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 mx-auto mb-6 relative animate-float">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-crystal-blue to-neon-purple p-1 animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-deep-black flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-crystal-blue/20 to-neon-purple/20 flex items-center justify-center font-orbitron font-bold text-2xl text-crystal-blue">
                  CE
                </div>
              </div>
            </div>
            {/* Floating ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-crystal-blue/30 animate-ping"></div>
          </div>
        </div>

        {/* Main Heading - Reduced glow */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 animate-slide-in">
          <span className="text-glow-white">Hi, I'm </span>
          <span className="text-crystal-blue">Caleb Ejeh</span>
        </h1>

        {/* Typed Subtitle */}
        <div className="h-20 md:h-16 mb-8">
          <p className="text-lg md:text-2xl text-glow-white/80 font-inter max-w-3xl mx-auto leading-relaxed">
            {typedText}
            <span className="animate-ping text-crystal-blue">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${
          showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary group relative overflow-hidden px-8 py-4 text-lg font-semibold"
          >
            <span className="relative z-10 flex items-center">
              🚀 View Projects
            </span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="glass glow-hover px-8 py-4 text-lg font-semibold text-crystal-blue border-crystal-blue/50 rounded-lg transition-all duration-300 hover:border-crystal-blue"
          >
            📫 Contact Me
          </button>
        </div>

        {/* Easter Egg Toggle */}
        <div className="mt-12">
          <button className="text-sm text-glow-white/50 hover:text-crystal-blue transition-colors duration-300 font-mono">
            &gt; Activate Developer Mode
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-crystal-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-crystal-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
