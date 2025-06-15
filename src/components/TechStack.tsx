
import React, { useState } from 'react';

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const technologies = [
    { name: 'JavaScript', category: 'Frontend', icon: '⚡', color: 'text-yellow-400' },
    { name: 'Node.js', category: 'Backend', icon: '🟢', color: 'text-green-400' },
    { name: 'Express.js', category: 'Backend', icon: '🚀', color: 'text-crystal-blue' },
    { name: 'MongoDB', category: 'Backend', icon: '🍃', color: 'text-green-500' },
    { name: 'PostgreSQL', category: 'Backend', icon: '🐘', color: 'text-blue-400' },
    { name: 'React.js', category: 'Frontend', icon: '⚛️', color: 'text-cyan-400' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨', color: 'text-teal-400' },
    { name: 'HTML5', category: 'Frontend', icon: '📄', color: 'text-orange-400' },
    { name: 'CSS3', category: 'Frontend', icon: '🎭', color: 'text-blue-500' },
    { name: 'Git', category: 'Tools', icon: '📦', color: 'text-red-400' },
    { name: 'GitHub', category: 'Tools', icon: '🐱', color: 'text-gray-400' },
    { name: 'Vercel', category: 'Tools', icon: '▲', color: 'text-white' },
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredTechs = activeFilter === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section id="tech" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-crystal-blue glow-text mb-4">
            Tech Toolkit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crystal-blue to-neon-purple mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-crystal-blue text-deep-black font-semibold'
                    : 'glass text-glow-white hover:glow-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTechs.map((tech, index) => (
            <div
              key={tech.name}
              className="glass p-6 rounded-xl text-center hover:glow-border transition-all duration-300 group cursor-pointer transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl mb-3 group-hover:animate-bounce ${tech.color}`}>
                {tech.icon}
              </div>
              <h3 className="text-glow-white font-semibold mb-1 group-hover:text-crystal-blue transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-glow-white/60 uppercase tracking-wider">
                {tech.category}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-crystal-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 glass-strong p-8 rounded-2xl">
          <h3 className="text-2xl font-orbitron font-bold text-center text-crystal-blue mb-6">
            Expertise Overview
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl text-neon-purple mb-2">🎨</div>
              <h4 className="text-crystal-blue font-semibold mb-2">Frontend</h4>
              <p className="text-glow-white/80 text-sm">
                Modern React applications with responsive design and smooth animations
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-crystal-blue mb-2">⚙️</div>
              <h4 className="text-crystal-blue font-semibold mb-2">Backend</h4>
              <p className="text-glow-white/80 text-sm">
                Robust APIs and database architecture with Node.js and Express
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-electric-cyan mb-2">🔧</div>
              <h4 className="text-crystal-blue font-semibold mb-2">DevOps</h4>
              <p className="text-glow-white/80 text-sm">
                Version control, deployment automation, and project management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
