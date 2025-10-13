// Qomix.tsx - Qomix Classics book gallery page
// REDESIGNED with an Immersive 3D Coverflow Carousel

import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { QOMIX_CLASSICS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // A popular icon library, or use your own

const Qomix: React.FC = () => {
  // State to track the currently centered book
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % QOMIX_CLASSICS.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + QOMIX_CLASSICS.length) % QOMIX_CLASSICS.length);
    }
  };

  return (
    <PageWrapper>
      {/* === HERO SECTION === */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/assets/qomix/banner-qomix-logo.jpg')" }}
        ></div>
      </section>

      {/* === INTRODUCTORY SECTION === */}
      <section className="bg-paper pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="container mx-auto px-6 text-xl md:text-2xl leading-relaxed text-ink/80 max-w-3xl">
            “QOMIX Classics is building the Library of the Future — reimagining the world’s greatest literature as visually stunning, collectible graphic narratives.”
          </p>
        </motion.div>
      </section>

      {/* === NEW: IMMERSIVE COVERFLOW CAROUSEL === */}
      <section className="py-20 bg-paper overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 text-ink">Our Titles</h2>
          <p className="text-ink/70 text-lg text-center max-w-2xl mx-auto mb-16">Qomix Classics aims to trigger a global literary renaissance. At its core is the conviction that the classics of world literature — spanning the Western canon, African storytelling traditions, Asian epics, Middle Eastern poetry, Indigenous wisdom, and beyond — are the treasures of human civilisation. These are the works that have shaped cultures and minds across centuries; these are the works that constitute an education in being human itself; yet in today’s age of disengagement with text, they risk fading from relevance.</p>
          <p className="text-ink/70 text-lg text-center max-w-2xl mx-auto mb-16">Qomix Classics responds to this crisis with the Library of Universal Classics, Comicised (LUCC) — the world’s first comprehensive project to re-present iconic literature as sophisticated, faithful, and visually stunning comic-graphic narratives.</p>
          
          {/* UPDATED: Reduced height of the main container */}
          <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center">
            {/* Carousel container with 3D perspective */}
            <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
              {QOMIX_CLASSICS.map((book, index) => {
                const isActive = index === activeIndex;
                const distance = index - activeIndex;

                return (
                  <motion.div
                    key={book.id}
                    // UPDATED: Reduced width of the cards
                    className="group absolute w-[30vh] md:w-[38vh] h-full cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      top: '50%',
                      left: '50%',
                      x: '-50%',
                      y: '-50%',
                    }}
                    initial={false}
                    animate={{
                      x: `${(distance * 35) - 50}%`, // Adjusted spread for new size
                      scale: isActive ? 1 : 0.7,
                      rotateY: distance * -35,
                      zIndex: QOMIX_CLASSICS.length - Math.abs(distance),
                      opacity: Math.abs(distance) > 2 ? 0 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Book cover with fallback */}
                    <div className={`relative w-full h-full border-4 ${isActive ? 'border-primary' : 'border-panel-dark'} transition-colors duration-500`}>
                      <img 
                        src={book.imageUrl}
                        alt={book.title}
                        className="w-full h-full object-cover"
                        onError={e => {
                          const target = e.currentTarget;
                          if (target.src !== '/assets/qomix/placeholder-book-cover.jpg') {
                            target.src = '/assets/qomix/placeholder-book-cover.jpg';
                          }
                        }}
                      />
                      {/* The Reveal overlay */}
                      <div 
                        className={`absolute inset-0 top-1/2 p-4 md:p-6 flex flex-col justify-end
                                   bg-gradient-to-t from-black/90 to-transparent
                                   transform transition-all duration-500 ease-in-out
                                   ${isActive && 'group-hover:opacity-100 group-hover:translate-y-0'}
                                   ${!isActive ? 'opacity-0 translate-y-full' : 'opacity-0 translate-y-4'}`
                                 }
                      >
                        <h3 className="text-xl md:text-2xl font-bold text-paper mb-2">{book.title}</h3>
                        <p className="text-paper/80 text-xs md:text-sm leading-relaxed">{book.snippet}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button onClick={() => navigate('prev')} className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-50 bg-paper/50 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-paper transition-colors">
              <ChevronLeft className="text-ink" size={24} />
            </button>
            <button onClick={() => navigate('next')} className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-50 bg-paper/50 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-paper transition-colors">
              <ChevronRight className="text-ink" size={24} />
            </button>
          </div>

          {/* Animated Author Text below carousel */}
          <div className="mt-12 text-center h-12">
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeIndex}
                className="text-ink/80 text-xl font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {QOMIX_CLASSICS[activeIndex].author}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Qomix;