import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../App';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const leftLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
  ];

  const rightLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center">
      {/* Dynamic Island Container */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl bg-[#1e1e1e] dark:bg-[#111111] rounded-full px-6 py-3 flex items-center justify-between shadow-2xl border border-white/10"
      >
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-[var(--color-brand-orange)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 flex-1 justify-start">
          {leftLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeLink === link.href 
                  ? 'bg-[var(--color-brand-orange)] text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <a href="#home" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            Rohit<span className="text-[var(--color-brand-orange)]">.</span>
          </a>
        </div>

        {/* Right Links & Toggles (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 flex-1 justify-end">
          {rightLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeLink === link.href 
                  ? 'bg-[var(--color-brand-orange)] text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="ml-2 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile Theme Toggle (Only shows when menu is closed to balance header) */}
        <button 
          onClick={toggleTheme} 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </motion.div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-24 left-4 right-4 bg-[#1e1e1e] dark:bg-[#111111] rounded-3xl p-4 flex flex-col gap-2 border border-white/10 shadow-2xl z-40"
        >
          {allLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => {
                setActiveLink(link.href);
                setIsOpen(false);
              }}
              className={`px-6 py-3 rounded-2xl text-center text-base font-medium transition-all ${
                activeLink === link.href 
                  ? 'bg-[var(--color-brand-orange)] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-3 rounded-2xl text-center bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
