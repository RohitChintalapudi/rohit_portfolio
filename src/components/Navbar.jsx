import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);

  const leftLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const rightLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  // ScrollSpy: Automatically glide active pill as user scrolls
  useEffect(() => {
    const sectionIds = ['#home', '#skills', '#projects', '#experience', '#contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.querySelector(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveLink(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center">
      {/* Dynamic Island Navbar Container */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full px-6 py-2.5 flex items-center justify-between shadow-2xl border border-white/15"
      >
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-[var(--color-brand-orange)] transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 flex-1 justify-start">
          {leftLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-bold tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-[var(--color-brand-orange)] rounded-full box-glow shadow-md shadow-orange-500/40"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0 flex justify-center items-center mx-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-extrabold tracking-tight text-white flex items-center gap-0.5 group"
          >
            <span>Rohit</span>
            <span className="text-[var(--color-brand-orange)] group-hover:scale-125 transition-transform duration-300">.</span>
          </a>
        </div>

        {/* Right Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 flex-1 justify-end">
          {rightLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-bold tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-[var(--color-brand-orange)] rounded-full box-glow shadow-md shadow-orange-500/40"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-3xl p-4 flex flex-col gap-2 border border-white/15 shadow-2xl z-40"
          >
            {allLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-6 py-3 rounded-2xl text-center text-base font-bold transition-all ${
                    isActive 
                      ? 'bg-[var(--color-brand-orange)] text-white box-glow' 
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
