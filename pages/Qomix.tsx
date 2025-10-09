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
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-panel-muted text-ink text-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/assets/qomix/banner_qomix-logo.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-5"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-display tracking-wider mb-6 text-white drop-shadow-lg">Qomix</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-balance drop-shadow-md">
            Classic and contemporary literature, reimagined as stunning graphic novels. We preserve the narrative power of the original work while bringing it to life with world-class illustration.
          </p>
        </div>
      </section>

      {/* Book Gallery */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-display text-center mb-4 text-ink">The Collection</h2>
          <p className="text-body-neutral text-lg text-center max-w-2xl mx-auto mb-16">Explore timeless stories told through a new, visually arresting medium.</p>
          
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
                <div className="overflow-hidden mb-4 border-4 border-panel-dark group-hover:border-primary transition-colors duration-300">
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="w-full h-auto aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-display text-ink group-hover:text-primary transition-colors">{book.title}</h3>
                <p className="text-body-neutral">{book.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Qomix;
