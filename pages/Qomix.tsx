import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { QOMIX_CLASSICS } from '../constants';
import { motion } from 'framer-motion';

const Qomix: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <PageWrapper>
      {/* === HERO SECTION (UPDATED) === */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* UPDATED: Changed to bg-cover for a full-bleed effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/assets/qomix/banner-qomix-logo.jpg')" }}
        ></div>
      </section>

      {/* === NEW INTRODUCTORY SECTION === */}
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

      {/* === BOOK GALLERY (UPDATED) === */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 text-ink">Our Titles</h2>
          <p className="text-ink/70 text-lg text-center max-w-2xl mx-auto mb-16">Explore timeless stories told through a new, visually arresting medium.</p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {QOMIX_CLASSICS.map((book) => (
              <motion.div 
                key={book.id} 
                className="group flex flex-col text-left"
                variants={itemVariants}
                data-cursor-hover="true"
              >
                {/* UPDATED: This container now has `relative` positioning for the overlay */}
                <div className="relative overflow-hidden mb-4 border-4 border-panel-dark group-hover:border-primary transition-colors duration-300">
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    // UPDATED: Added blur and brightness filters on hover
                    className="w-full h-auto aspect-[3/4] object-cover transform group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50 transition-all duration-300" 
                  />
                  {/* === NEW: Snippet Overlay === */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-paper text-sm leading-snug">{book.snippet}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ink group-hover:text-primary transition-colors">{book.title}</h3>
                <p className="text-ink/60">{book.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Qomix;