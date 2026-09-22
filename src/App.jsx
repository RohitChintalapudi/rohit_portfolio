import React, { useState, useEffect, createContext, lazy, Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';

// Code-splitting below-the-fold sections for instantaneous First Paint (sub-100ms)
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export const ThemeContext = createContext();

const SectionDivider = () => (
  <div className="w-full flex justify-center py-0 opacity-70 relative z-20">
    <div className="w-4/5 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent box-glow"></div>
  </div>
);

const SectionFallback = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center opacity-20">
    <div className="w-6 h-6 border-2 border-[var(--color-brand-orange)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const theme = 'dark';

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {};

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 1.0,
        smoothWheel: true,
        wheelMultiplier: 1.15,
        touchMultiplier: 1.5,
      }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <CustomCursor />
        <div className="min-h-screen selection:bg-[var(--color-brand-orange)] selection:text-white transition-colors duration-500">
          <Navbar />
          
          <main>
            {/* Critical First Viewport - Rendered Immediately */}
            <Hero />
            
            {/* Asynchronously hydrated below-the-fold sections */}
            <Suspense fallback={<SectionFallback />}>
              <SectionDivider />
              <Skills />
              <SectionDivider />
              <Projects />
              <SectionDivider />
              <Experience />
              <SectionDivider />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      </ThemeContext.Provider>
    </ReactLenis>
  );
}

export default App;
