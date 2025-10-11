// src/pages/Vision.tsx

import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <PageWrapper>
      {/* A container that fills the screen height, minus the header */}
      <section className="min-h-[calc(100vh-88px)] flex items-center justify-center bg-paper p-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Kicker Heading */}
          <motion.h1
            className="text-sm font-semibold tracking-widest text-ink/60 uppercase"
            variants={itemVariants}
          >
            Our Vision
          </motion.h1>

          {/* Animated Central Graphic */}
          <motion.div
            className="relative w-48 h-48 md:w-56 md:h-56 my-12 flex items-center justify-center"
            variants={itemVariants}
          >
            {/* Central sphere with inner shadow for depth */}
            <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-panel-dark rounded-full shadow-inner"></div>

            {/* Orbiting Ring 1 */}
            <motion.div
              className="absolute w-full h-full border-2 border-ink/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            />
            {/* Orbiting Ring 2 */}
            <motion.div
              className="absolute w-[70%] h-[70%] border border-ink/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            />
             {/* Orbiting Ring 3 - Highlight Ring */}
            <motion.div
              className="absolute w-[45%] h-[45%] border-t-2 border-b-2 border-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            />
          </motion.div>

          {/* The Vision Statement */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-ink leading-relaxed"
            variants={itemVariants}
          >
            Auteur intends to reinvent and reimagine the comic-graphic form for serious storytelling and knowledge-dissemination, across global cultures and languages, for an overwhelming visual age.
          </motion.p>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Vision;