import React, { forwardRef, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1];
const SPRING_PRESS = { type: 'spring', stiffness: 400, damping: 25 };

export const HoldActionButton = forwardRef(function HoldActionButton(
  {
    children,
    type = 'horizontal',
    holdingLabel = 'Keep holding...',
    completeLabel = 'Downloaded! ✓',
    holdDuration = 2000,
    onHoldComplete,
    fillClassName = 'bg-[var(--color-brand-orange)]',
    labelClassName = '',
    className = '',
    disabled = false,
    ...rest
  },
  ref
) {
  const reduce = useReducedMotion();
  const completedRef = useRef(false);
  const [holding, setHolding] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startHold = () => {
    if (disabled || holding) return;
    completedRef.current = false;
    setCompleted(false);
    setHolding(true);
  };

  const cancelHold = () => {
    setHolding(false);
    setCompleted(false);
  };

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;
    startHold();
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerUp = (event) => {
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore
    }
    cancelHold();
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType !== 'touch') cancelHold();
  };

  const handlePointerMove = (event) => {
    if (!holding) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (outside) cancelHold();
  };

  const handleKeyDown = (event) => {
    if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) {
      event.preventDefault();
      startHold();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      cancelHold();
    }
  };

  const handleFillComplete = () => {
    if (!holding || completedRef.current) return;
    completedRef.current = true;
    setCompleted(true);
    onHoldComplete?.();
    setTimeout(() => {
      setHolding(false);
      setCompleted(false);
      completedRef.current = false;
    }, 2500);
  };

  const active = holding || completed;
  const activeTransform =
    type === 'horizontal' ? 'translateX(0%)' : 'translateY(0%)';
  const idleTransform =
    type === 'horizontal' ? 'translateX(-100%)' : 'translateY(115%)';

  return (
    <motion.button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-label={typeof children === 'string' ? children : 'Hold action button'}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={cancelHold}
      onPointerLeave={handlePointerLeave}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onContextMenu={(event) => event.preventDefault()}
      whileTap={reduce || disabled ? undefined : { scale: 0.97 }}
      transition={SPRING_PRESS}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full glass border border-[var(--border-color)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] select-none touch-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)] disabled:pointer-events-none disabled:opacity-50 transition-colors ${className}`}
      {...rest}
    >
      {/* Liquid Fill Layer with clip-path */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
      >
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={
            reduce
              ? { opacity: active ? 1 : 0, transform: 'none' }
              : {
                  opacity: 1,
                  transform: active ? activeTransform : idleTransform,
                }
          }
          transition={
            active
              ? { duration: holdDuration / 1000, ease: 'linear' }
              : { duration: reduce ? 0.15 : 0.24, ease: EASE_OUT }
          }
          onAnimationComplete={handleFillComplete}
          className={`absolute inset-0 ${fillClassName} will-change-[opacity,transform]`}
        >
          {!reduce && (
            type === 'horizontal' ? (
              <motion.svg
                viewBox="0 0 24 240"
                preserveAspectRatio="none"
                aria-hidden="true"
                animate={{
                  transform: active ? 'translateY(-50%)' : 'translateY(0%)',
                }}
                transition={{
                  duration: 1.1,
                  ease: 'linear',
                  repeat: active ? Infinity : 0,
                }}
                className="absolute -right-5 top-0 h-[200%] w-6 text-[var(--color-brand-orange)] opacity-90"
              >
                <path
                  d="M0 0h12C2 20 2 40 12 60s10 40 0 60-10 40 0 60 10 40 0 60H0Z"
                  fill="currentColor"
                />
              </motion.svg>
            ) : (
              <motion.svg
                viewBox="0 0 240 24"
                preserveAspectRatio="none"
                aria-hidden="true"
                animate={{
                  transform: active ? 'translateX(-50%)' : 'translateX(0%)',
                }}
                transition={{
                  duration: 1.1,
                  ease: 'linear',
                  repeat: active ? Infinity : 0,
                }}
                className="absolute -top-5 left-0 h-6 w-[200%] text-[var(--color-brand-orange)] opacity-90"
              >
                <path
                  d="M0 12C20 2 40 2 60 12s40 10 60 0 40-10 60 0 40 10 60 0v12H0Z"
                  fill="currentColor"
                />
              </motion.svg>
            )
          )}
        </motion.span>
      </span>

      {/* Button Label Container */}
      <span
        className={`relative z-10 grid place-items-center text-sm font-medium transition-colors ${
          active ? 'text-white' : 'text-[var(--text-primary)]'
        } ${labelClassName}`}
      >
        <motion.span
          animate={{ opacity: active ? 0 : 1 }}
          transition={{ duration: reduce ? 0 : 0.12, ease: EASE_OUT }}
          className="col-start-1 row-start-1 flex flex-col items-center justify-center whitespace-nowrap"
        >
          {children}
        </motion.span>
        <motion.span
          aria-hidden={!holding || completed}
          animate={{ opacity: holding && !completed ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 0.12, ease: EASE_OUT }}
          className="col-start-1 row-start-1 flex flex-col items-center justify-center whitespace-nowrap text-white font-bold"
        >
          {holdingLabel}
        </motion.span>
        <motion.span
          aria-hidden={!completed}
          animate={{ opacity: completed ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 0.12, ease: EASE_OUT }}
          className="col-start-1 row-start-1 flex flex-col items-center justify-center whitespace-nowrap text-white font-bold"
        >
          {completeLabel}
        </motion.span>
      </span>
    </motion.button>
  );
});

export default HoldActionButton;
