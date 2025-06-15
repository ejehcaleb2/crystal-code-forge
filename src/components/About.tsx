
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-crystal-blue mb-4">
            About Caleb
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crystal-blue to-neon-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="glass-strong p-8 rounded-2xl glow-hover animate-float">
              <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-crystal-blue/20 to-neon-purple/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-crystal-blue/10 to-neon-purple/10 animate-pulse"></div>
                <div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-crystal-blue/30 to-neon-purple/30 flex items-center justify-center font-orbitron font-bold text-4xl text-crystal-blue z-10">
                  CALEB
                </div>
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl glow-border">
              <p className="text-lg leading-relaxed text-glow-white/90">
                I'm <span className="text-crystal-blue font-semibold">Caleb Ejeh</span>, a self-taught developer 
                currently studying Economics at the University of Lagos. I founded{' '}
                <span className="text-neon-purple font-semibold">HomeEase</span> to fight housing inequality and{' '}
                <span className="text-electric-cyan font-semibold">Statech</span> to empower African youth in tech.
              </p>
            </div>

            <div className="glass p-6 rounded-xl glow-border">
              <p className="text-lg leading-relaxed text-glow-white/90">
                I use code to solve real-world problems with <span className="text-crystal-blue font-semibold">clarity</span> and{' '}
                <span className="text-neon-purple font-semibold">compassion</span>. My approach combines backend precision 
                with frontend innovation to create meaningful digital solutions.
              </p>
            </div>

            {/* Key Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: '🎯', title: 'Mission-driven', desc: 'Purpose-focused development' },
                { icon: '⚡', title: 'Full-stack', desc: 'Backend-leaning expertise' },
                { icon: '🌍', title: 'Impact-focused', desc: 'Real-world solutions' }
              ].map((trait, index) => (
                <div key={index} className="glass p-4 rounded-lg text-center hover:glow-border transition-all duration-300 group">
                  <div className="text-2xl mb-2 group-hover:animate-bounce">{trait.icon}</div>
                  <h4 className="text-crystal-blue font-semibold mb-1">{trait.title}</h4>
                  <p className="text-sm text-glow-white/70">{trait.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
