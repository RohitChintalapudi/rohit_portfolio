import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = "", delay = 0, direction = 'up', effect = 'fade' }) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 }
  };

  const effects = {
    fade: {
      initial: { opacity: 0, ...directions[direction] },
      whileInView: { opacity: 1, x: 0, y: 0 }
    },
    blur: {
      initial: { opacity: 0, filter: 'blur(20px)', ...directions[direction] },
      whileInView: { opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8, ...directions[direction] },
      whileInView: { opacity: 1, scale: 1, x: 0, y: 0 }
    },
    rotate: {
      initial: { opacity: 0, rotateX: 45, y: 50 },
      whileInView: { opacity: 1, rotateX: 0, y: 0 }
    }
  };

  const selectedEffect = effects[effect] || effects.fade;

  return (
    <motion.div
      initial={selectedEffect.initial}
      whileInView={selectedEffect.whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
