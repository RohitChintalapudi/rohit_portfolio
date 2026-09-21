import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

const SPRING_MOUSE = {
  stiffness: 300,
  damping: 20,
  mass: 0.4,
};

export function TiltCard({
  children,
  max = 14,
  glare = true,
  className = '',
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [canHover, setCanHover] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(hover: hover)');
      setCanHover(mq.matches);
      const handler = (e) => setCanHover(e.matches);
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
  }, []);

  const enabled = !reduce && canHover;
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const srx = useSpring(rx, SPRING_MOUSE);
  const sry = useSpring(ry, SPRING_MOUSE);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || !enabled) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * max);
    rx.set((0.5 - py) * max);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const onEnter = () => {
    setIsHovered(true);
  };

  const onLeave = () => {
    setIsHovered(false);
    rx.set(0);
    ry.set(0);
  };

  const transform = useMotionTemplate`perspective(1000px) rotateX(${srx}deg) rotateY(${sry}deg)`;
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, 0.35), rgba(249, 115, 22, 0.2) 35%, transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className={cn(
        'relative overflow-hidden rounded-2xl will-change-transform transition-shadow duration-300',
        className
      )}
    >
      {children}
      {glare && enabled && (
        <motion.div
          aria-hidden
          style={{
            background: glareBg,
            opacity: isHovered ? 0.8 : 0,
          }}
          className="pointer-events-none absolute inset-0 z-30 mix-blend-overlay transition-opacity duration-300"
        />
      )}
    </motion.div>
  );
}

export default TiltCard;
