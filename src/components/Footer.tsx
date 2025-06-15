
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-black/50 border-t border-crystal-blue/20 py-12 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="font-orbitron font-bold text-2xl text-crystal-blue glow-text">
            CALEB.DEV
          </div>

          {/* Copyright */}
          <p className="text-glow-white/70">
            Copyright © 2025 Caleb Ejeh. All rights reserved.
          </p>

          {/* Built with */}
          <p className="text-glow-white/50 text-sm">
            Built with ❤️ using React, Tailwind CSS, and deployed on Vercel
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="mx-auto flex items-center justify-center w-12 h-12 glass glow-hover rounded-full text-crystal-blue transition-all duration-300 hover:animate-bounce"
            aria-label="Back to top"
          >
            <span className="text-2xl">↑</span>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-crystal-blue to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
