import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, X, Award, Star } from 'lucide-react';

const AchievementPopover = ({ align = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  const toggle = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  const titles = [
    {
      icon: "🌟",
      title: "Excellent Performer of the Internship Cohort",
      desc: "Recognized for high-impact technical performance and rapid execution."
    },
    {
      icon: "🥇",
      title: "Best Performer of the Entire Internship Program",
      desc: "Awarded highest honor across the complete internship program cohort."
    },
    {
      icon: "⭐",
      title: "Excellent Intern of the Season",
      desc: "Celebrated as the standout seasonal intern for AI engineering excellence."
    }
  ];

  return (
    <div
      ref={popoverRef}
      className="relative inline-flex items-center align-middle"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive Trophy Trigger Button */}
      <button
        type="button"
        onClick={toggle}
        aria-label="View Internship Honors & Trophy"
        className="group/trophy relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/10 border border-amber-500/50 hover:border-amber-400 text-amber-300 text-xs font-medium cursor-pointer shadow-[0_0_12px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.55)] transition-all duration-300 active:scale-95"
      >
        <span className="relative flex items-center justify-center">
          <Trophy className="w-3.5 h-3.5 text-amber-400 transition-transform duration-300 group-hover/trophy:scale-125 group-hover/trophy:rotate-6" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping opacity-75" />
        </span>
        <span className="font-semibold text-[11px] bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent">
          Best Intern Trophy
        </span>
      </button>

      {/* Motion Liquid Popover Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className={`absolute z-50 top-full mt-2.5 ${
              align === 'right'
                ? 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 md:right-0 md:left-auto md:translate-x-0'
                : 'left-0 sm:left-1/2 sm:-translate-x-1/2 md:left-0 md:translate-x-0'
            } w-[290px] sm:w-[330px] text-left p-4 rounded-2xl bg-[#09090d]/95 backdrop-blur-2xl border border-amber-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.22)]`}
            style={{ pointerEvents: 'auto' }}
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-36 h-12 bg-amber-500/25 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-2 pb-3 mb-3 border-b border-white/10 relative">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 shrink-0">
                  <Trophy className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Special Recognition</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">
                    Awarded as Best Intern of the Season
                  </h4>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Awarded Titles List */}
            <div className="space-y-2 relative">
              <div className="text-[10px] font-bold text-[var(--color-brand-orange)] uppercase tracking-wider">
                Titles Awarded
              </div>

              {titles.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/5 hover:border-amber-500/25 transition-all group/item"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0 select-none">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-amber-200 group-hover/item:text-amber-100 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[10.5px] text-white/60 leading-snug mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
              <span>CCC Digital India Pvt. Ltd.</span>
              <span className="text-amber-400 font-semibold">Summer 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementPopover;
