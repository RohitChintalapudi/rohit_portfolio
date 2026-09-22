import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SPRING_CURSOR = { stiffness: 450, damping: 28, mass: 0.2 };
const SPRING_RING = { stiffness: 200, damping: 20, mass: 0.4 };

const CustomCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const cursorX = useSpring(rawX, SPRING_CURSOR);
  const cursorY = useSpring(rawY, SPRING_CURSOR);

  const ringX = useSpring(rawX, SPRING_RING);
  const ringY = useSpring(rawY, SPRING_RING);

  useEffect(() => {
    const updateMousePosition = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, rawX, rawY]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <div className={`pointer-events-none transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Inner Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-[var(--color-brand-orange)] rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Glowing Ring Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[var(--color-brand-orange)]/60 rounded-full pointer-events-none z-[99]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 1.4 : 1,
          opacity: isClicking ? 0.2 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;

