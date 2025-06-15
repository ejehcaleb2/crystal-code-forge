
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="glass p-3 rounded-full glow-hover transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-crystal-blue group-hover:text-electric-cyan transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-neon-purple group-hover:text-crystal-blue transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;
