import React from 'react';
// FIX: Import Variants and Transition from framer-motion to explicitly type animation configurations.
import { motion, Transition, Variants } from 'framer-motion';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

// FIX: Explicitly type pageVariants with Variants to prevent type errors.
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

// FIX: Explicitly type pageTransition with Transition to prevent type errors.
const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;