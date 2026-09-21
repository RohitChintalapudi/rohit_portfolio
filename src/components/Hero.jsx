import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Mascot } from 'page-mascot';
import AnimatedSection from './AnimatedSection';
import resumePdf from '../assets/Rohit_Resume_Updated.pdf';

const roles = ['Full Stack Developer', 'Full Stack Dev', 'AI Engineer', 'Problem Solver'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mascotSize, setMascotSize] = useState(480);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setMascotSize(340);
      } else if (window.innerWidth < 768) {
        setMascotSize(410);
      } else if (window.innerWidth < 1200) {
        setMascotSize(480);
      } else {
        setMascotSize(540);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-orange)] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <AnimatedSection delay={0.1} direction="right" effect="blur">
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} direction="right" effect="blur">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[var(--text-primary)]">
              Hi, I'm <span className="text-[var(--color-brand-orange)] text-glow">Rohit</span><br/>
              <span className="text-[var(--color-brand-orange)]">
                {text}
                <span className="inline-block w-0.5 h-[0.9em] bg-[var(--color-brand-orange)] align-middle ml-1 animate-pulse"></span>
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="right" effect="blur">
            <p className="text-[var(--text-secondary)] text-base md:text-lg mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              I build scalable full-stack and AI-powered applications using React, Node.js, PostgreSQL, and LLM technologies. I specialize in RESTful APIs, real-time systems, and RAG pipelines. Strong foundation in Data Structures and Algorithms.
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
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">500+</h3>
              <p className="text-[var(--text-secondary)] text-sm">Competitive Problems</p>
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
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">9.65</h3>
              <p className="text-[var(--text-secondary)] text-sm">CGPA @ SRM AP</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Mascot / Interactive Visual Content */}
        <AnimatedSection delay={0.3} direction="left" effect="fade" className="relative flex justify-center items-center mt-6 md:mt-0">
          <div className="relative flex items-center justify-center z-20">
            {/* Mascot Component */}
            <div className="relative z-10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Mascot
                directions="/mascots/cap-directions.webp"
                reactions="/mascots/cap-reactions.webp"
                size={mascotSize}
                label="Cap the Mascot"
              />
            </div>

            {/* Interactive Badge Below Mascot */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 md:-bottom-6 left-1/2 -translate-x-1/2 glass px-4 py-1.5 rounded-full flex items-center gap-2 border border-[var(--border-color)] box-glow text-xs font-medium text-[var(--text-secondary)] pointer-events-none whitespace-nowrap z-30"
            >
              <Sparkles size={14} className="text-[var(--color-brand-orange)]" />
              <span>Click to interact</span>
            </motion.div>
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default Hero;
