
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ejehcaleb2',
      icon: '🐱',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '🐦',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:ejehcalebthefirst@gmail.com',
      icon: '📧',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-crystal-blue glow-text mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crystal-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-glow-white/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-strong p-8 rounded-2xl glow-border">
            <h3 className="text-2xl font-orbitron font-bold text-crystal-blue mb-6">
              Send a Message
            </h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-semibold">✅ Message sent successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-glow-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-crystal-blue/30 focus:border-crystal-blue focus:outline-none text-glow-white placeholder-glow-white/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-glow-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-crystal-blue/30 focus:border-crystal-blue focus:outline-none text-glow-white placeholder-glow-white/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-glow-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-lg border border-crystal-blue/30 focus:border-crystal-blue focus:outline-none text-glow-white placeholder-glow-white/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-crystal-blue/50 text-deep-black cursor-not-allowed' 
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-deep-black/30 border-t-deep-black rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  '🚀 Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-orbitron font-bold text-crystal-blue mb-4">
                Direct Contact
              </h3>
              <div className="space-y-3">
                <a 
                  href="mailto:ejehcalebthefirst@gmail.com"
                  className="flex items-center gap-3 text-glow-white hover:text-crystal-blue transition-colors duration-300"
                >
                  <span className="text-2xl">📧</span>
                  <span>ejehcalebthefirst@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-glow-white">
                  <span className="text-2xl">📍</span>
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-glow-white">
                  <span className="text-2xl">🎓</span>
                  <span>University of Lagos</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-orbitron font-bold text-crystal-blue mb-4">
                Connect Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 glass rounded-lg hover:glow-border transition-all duration-300 text-glow-white ${social.color} group`}
                  >
                    <span className="text-xl group-hover:animate-bounce">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="glass p-6 rounded-xl border border-neon-purple/30">
              <h3 className="text-lg font-orbitron font-bold text-neon-purple mb-2">
                💡 Fun Fact
              </h3>
              <p className="text-glow-white/80 text-sm">
                I'm passionate about using technology to solve African problems, 
                especially in housing, finance, and youth empowerment. Let's build 
                something that matters!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
