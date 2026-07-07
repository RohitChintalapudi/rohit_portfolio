import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold tracking-tighter mb-4 md:mb-0 text-[var(--text-primary)]">
          Rohit<span className="text-[var(--color-brand-orange)] text-glow">.</span>
        </div>
        
        <p className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Rohit Chintalapudi. All rights reserved.
        </p>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--color-brand-orange)] transition-colors">Privacy Policy</a>
          <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--color-brand-orange)] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
