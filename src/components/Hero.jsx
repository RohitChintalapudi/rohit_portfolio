import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Rohit_Resume_Updated.pdf';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-orange)] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <AnimatedSection delay={0.1} direction="right" effect="blur">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] text-sm font-semibold tracking-wider mb-4 border border-[var(--color-brand-orange)]/20">
              Welcome to my Portfolio
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} direction="right" effect="blur">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[var(--text-primary)]">
              Hi, I'm <span className="text-[var(--color-brand-orange)] text-glow">Rohit</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
                Full Stack Developer
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="right" effect="blur">
            <p className="text-[var(--text-secondary)] text-base md:text-lg mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
              I build scalable MERN stack applications with a strong foundation in Data Structures and Algorithms. I specialize in crafting responsive user interfaces and robust RESTful APIs.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="right" effect="scale">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-white font-medium transition-all transform hover:-translate-y-1 active:scale-95"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer"
                download="Rohit_Chintalapudi_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] text-[var(--text-primary)] font-medium transition-all active:scale-95"
              >
                Download CV <Download size={18} />
              </a>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.5} direction="up" effect="fade" className="mt-12 flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-8 border-t border-[var(--border-color)] pt-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">300+</h3>
              <p className="text-[var(--text-secondary)] text-sm">LeetCode Problems</p>
            </div>
            <div className="w-px h-12 bg-[var(--border-color)] hidden md:block"></div>
            <div>
              <div className="flex justify-center md:justify-start gap-1 mb-1">
                {[1,2,3].map(star => <span key={star} className="text-[var(--color-brand-orange)] text-lg">★</span>)}
              </div>
              <p className="text-[var(--text-secondary)] text-sm">CodeChef Coder</p>
            </div>
            <div className="w-px h-12 bg-[var(--border-color)] hidden md:block"></div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">9.63</h3>
              <p className="text-[var(--text-secondary)] text-sm">CGPA @ SRM AP</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Image/Visual Content */}
        <AnimatedSection delay={0.3} direction="left" effect="rotate" className="relative block mt-10 md:mt-0">
          <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-[500px] mx-auto z-20">
             {/* Decorative Background for Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-orange)]/30 to-transparent rounded-[40px] rotate-6 scale-105 box-glow"></div>
            
            {/* The Image Container */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-[var(--border-color)] glass p-2">
              <div className="w-full h-full bg-[var(--bg-primary)] rounded-[32px] flex items-center justify-center overflow-hidden relative">
                {/* Placeholder Image - User should replace this */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={profileImg} 
                  alt="Rohit Chintalapudi" 
                  className="w-full h-full object-cover object-top transition-all duration-700 transform hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-auto bottom-0 md:bottom-auto right-0 md:right-auto md:top-10 md:-left-10 translate-y-1/2 md:translate-y-0 translate-x-4 md:translate-x-0 glass px-4 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-4 border border-[var(--border-color)] box-glow scale-90 md:scale-100 z-30"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-brand-orange)]/20 flex items-center justify-center text-[var(--color-brand-orange)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--text-primary)] font-bold text-sm md:text-base">MERN</p>
                <p className="text-[var(--text-secondary)] text-[10px] md:text-xs">Stack Developer</p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default Hero;
