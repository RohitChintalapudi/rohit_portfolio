import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, Sparkles } from 'lucide-react';

const AchievementModal = ({ isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const titles = [
    {
      icon: "🌟",
      text: "Excellent Performer of the Internship Cohort",
    },
    {
      icon: "🥇",
      text: "Best Performer of the Entire Internship Program",
    },
    {
      icon: "⭐",
      text: "Excellent Intern of the Season",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Clean & Minimal Square Card */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] aspect-square p-6 sm:p-7 rounded-3xl bg-[#0a0a0f]/95 border border-amber-500/35 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.25)] flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Trophy Icon + Close */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Trophy className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    <Sparkles className="w-3 h-3" />
                    <span>Achievement</span>
                  </div>
                  <h4 className="text-xs font-semibold text-white/70">CCC Digital India</h4>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Title */}
            <div className="relative my-auto py-1 text-center">
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                Awarded as <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">Best Intern of the Season</span>
              </h3>
            </div>

            {/* Clean & Minimal 3 Titles List */}
            <div className="relative space-y-2">
              {titles.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5 hover:border-amber-500/30 transition-colors"
                >
                  <span className="text-base select-none shrink-0">{item.icon}</span>
                  <span className="text-xs font-medium text-white/90 leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Minimal Footer */}
            <div className="relative pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
              <span>Summer 2026 Cohort</span>
              <span className="text-amber-400 font-mono text-[10px]">#1 Performer</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AchievementModal;
