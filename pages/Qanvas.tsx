import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

// --- Data structure for your Qanvas titles ---
const QANVAS_TITLES = [
  {
    title: 'Chasing Putin',
    description: 'A riveting journey through wartime russia',
    author: 'By Nicolas Wild',
    imageUrl: 'assets/qanvas/chasing-putin.jpg',
    isComingSoon: false,
  },
  {
    title: 'More Than Zero',
    description: 'The Graphic History of Mathematics',
    author: 'By Marcus du Sautoy with Solé Otero',
    imageUrl: 'https://images.unsplash.com/photo-1635070045099-5551fa18b3f2?auto=format&fit=crop&w=800&q=80', // Stock image
    isComingSoon: true,
  },
  {
    title: 'The Story of Skin',
    description: 'Description not available',
    author: 'By Sharad Paul with Rodrigo Luján',
    imageUrl: 'https://images.unsplash.com/photo-1587560699334-cc426240169f?auto=format&fit=crop&w=800&q=80', // Stock image
    isComingSoon: true,
  },
];

const Qanvas: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('assets/qanvas/qanvas-hero.png')" }}
      />

      {/* Ticker */}
      <div className="w-full bg-primary py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-ticker inline-block">
          <span className="text-secondary font-bold text-2xl mx-8">GLOBAL LANGUAGES</span>
          <span className="text-secondary/70 font-bold text-2xl mx-8">ROSTER OF DISCIPLINE MASTERS</span>
          <span className="text-secondary font-bold text-2xl mx-8">EDITORS & WRITERS</span>
          <span className="text-secondary/70 font-bold text-2xl mx-8">ILLUSTRATORS</span>
          <span className="text-secondary font-bold text-2xl mx-8">GLOBAL LANGUAGES</span>
          <span className="text-secondary/70 font-bold text-2xl mx-8">ROSTER OF DISCIPLINE MASTERS</span>
          <span className="text-secondary font-bold text-2xl mx-8">EDITORS & WRITERS</span>
          <span className="text-secondary/70 font-bold text-2xl mx-8">ILLUSTRATORS</span>
        </div>
      </div>
      
      {/* Qanvas Description Section */}
      <section className="bg-paper py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="container mx-auto px-6 text-xl md:text-2xl leading-relaxed text-ink/80 max-w-3xl">
            <span className='font-bold text-ink'>QANVAS:</span> A groundbreaking graphic nonfiction imprint that brings vital stories to life — where art meets intellect and truth finds form.
          </p>
        </motion.div>
      </section>

      {/* Featured Titles Section */}
      <section className="py-12 bg-paper">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text-ink">Featured Titles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {QANVAS_TITLES.map((book) => (
              <div key={book.title} className="group flex flex-col text-left">
                {/* UPDATED: Added a subtle background color to the image container */}
                <div className="relative overflow-hidden mb-4 border-4 border-panel-dark group-hover:border-primary transition-colors duration-300 bg-panel-muted">
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    // UPDATED: Changed object-cover to object-contain to make the full image visible
                    className="w-full h-80 object-contain transform group-hover:scale-105 transition-transform duration-300" 
                  />
                  {/* Conditional "Coming Soon" Overlay */}
                  {book.isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/70 backdrop-blur-sm">
                      <span className="text-paper font-bold text-xl tracking-widest uppercase">Coming Soon</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-ink group-hover:text-primary transition-colors">{book.title}</h3>
                <p className="text-ink/80 text-lg mt-1">{book.description}</p>
                <p className="text-ink/60 italic mt-2">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Qanvas;