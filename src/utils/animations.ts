import type { Variants } from 'framer-motion';

export const transitionSmooth = {
  type: 'spring',
  duration: 0.8,
  bounce: 0.2,
  ease: [0.25, 0.1, 0.25, 1.0],
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  },
  exit: { opacity: 0 }
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { ...transitionSmooth }
  },
  exit: { opacity: 0, y: -20 }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { ...transitionSmooth }
  }
};

export const mithilaReveal: Variants = {
  initial: { clipPath: 'inset(100% 0 0 0)' },
  animate: { 
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
  }
};
