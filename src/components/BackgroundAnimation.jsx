import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none">
      {/* Subtle grid pattern with center fade-out */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-mask opacity-85"></div>
      
      {/* Floating Orange / Purple Gradient Blobs */}
      <div className="absolute top-[5%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[var(--color-brand-orange)]/8 dark:bg-[var(--color-brand-orange)]/6 blur-[80px] md:blur-[150px] animate-blob-1"></div>
      
      <div className="absolute top-[35%] right-[-10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-purple-600/5 dark:bg-purple-600/4 blur-[80px] md:blur-[160px] animate-blob-2"></div>
      
      <div className="absolute bottom-[5%] left-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-[var(--color-brand-orange)]/6 dark:bg-[var(--color-brand-orange)]/4 blur-[80px] md:blur-[130px] animate-blob-3"></div>

      {/* Ambient lighting line detail */}
      <div className="absolute top-[25%] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--color-brand-orange)]/15 to-transparent blur-[1px]"></div>
    </div>
  );
};

export default BackgroundAnimation;
