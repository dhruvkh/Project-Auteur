import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Use a data attribute for more explicit control over the hover effect
      if (target.closest('[data-cursor-hover]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      border: '2px solid #6b6866', // body-neutral
      backgroundColor: 'transparent',
      x: position.x - 16,
      y: position.y - 16,
    },
    hover: {
      height: 48,
      width: 48,
      border: '2px solid #FECF0A', // New primary yellow
      backgroundColor: 'rgba(254, 207, 10, 0.2)', // New primary yellow with alpha
      x: position.x - 24,
      y: position.y - 24,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;