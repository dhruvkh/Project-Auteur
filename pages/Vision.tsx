// src/pages/Vision.tsx

import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-88px)] grid grid-cols-1 lg:grid-cols-2">
        
        {/* --- Left Column: The Cinematic Image --- */}
        <div className="relative h-[50vh] lg:h-full overflow-hidden bg-ink">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/assets/vision-page.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ scale: 1.15, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 15, ease: [0.4, 0, 0.2, 1] }} // Long duration for a slow, subtle zoom
          />
        </div>

        {/* --- Right Column: The Vision Statement --- */}
        <div className="flex items-center justify-center p-8 md:p-16 bg-paper">
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <h1 className="text-sm font-semibold tracking-widest text-ink/60 uppercase">
              Our Vision
            </h1>
            
            {/* Decorative line */}
            <hr className="w-16 mt-4 mb-6 border-t-2 border-primary" />
            
            <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
              Auteur is reinventing and reimagining the comic-graphic form for serious storytelling and knowledge-dissemination across global cultures and languages, for our overwhelmingly visual age.
            </p>
          </motion.div>
        </div>

      </section>
    </PageWrapper>
  );
};

export default Vision;