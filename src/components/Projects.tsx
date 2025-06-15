
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'HomeEase',
      category: 'Housing',
      description: 'Housing affordability platform connecting Nigerians with quality, affordable housing solutions.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Crypto Dashboard',
      category: 'Finance',
      description: 'Real-time cryptocurrency tracker with interactive charts, portfolio management, and market analysis.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'Chart.js', 'REST API', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Swift Delivery App',
      category: 'Delivery',
      description: 'Multi-role delivery platform for vendors, riders, and customers with real-time tracking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stack: ['React Native', 'Node.js', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'FinTech Landing Page',
      category: 'Finance',
      description: 'Modern, responsive landing page for digital finance platform with smooth animations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'Tailwind', 'Framer Motion', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = ['All', 'Housing', 'Finance', 'Delivery'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-crystal-blue glow-text mb-4">
            Featured Projects
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-strong rounded-2xl overflow-hidden hover:glow-border transition-all duration-500 transform hover:scale-[1.02] group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-crystal-blue text-deep-black px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Featured
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-crystal-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-orbitron font-bold text-crystal-blue group-hover:glow-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-neon-purple font-medium px-3 py-1 glass rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-glow-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-crystal-blue/20 text-crystal-blue rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 btn-primary text-center py-3 text-sm font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 glass glow-hover text-center py-3 text-sm font-semibold text-crystal-blue border-crystal-blue/50 rounded-lg transition-all duration-300 hover:border-crystal-blue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📦 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-glow-white/70 mb-6">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/ejehcaleb2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass glow-hover px-8 py-4 text-lg font-semibold text-crystal-blue border-crystal-blue/50 rounded-lg transition-all duration-300 hover:border-crystal-blue"
          >
            🐱 View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
