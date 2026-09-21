import React, { useState, useEffect, createContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export const ThemeContext = createContext();

function App() {
  const theme = 'dark';

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {};

  const SectionDivider = () => (
    <div className="w-full flex justify-center py-0 opacity-70 relative z-20">
      <div className="w-4/5 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent box-glow"></div>
    </div>
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CustomCursor />
      <div className="min-h-screen selection:bg-[var(--color-brand-orange)] selection:text-white transition-colors duration-500">
        <Navbar />
        
        <main>
          <Hero />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
