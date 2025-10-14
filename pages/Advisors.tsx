// src/pages/Advisors.tsx (UPDATED)

import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import AdvisorCard from '../components/AdvisorCard'; // <-- IMPORT the new component

// --- Data for the Advisory Board (can stay here or move to a constants file) ---
const ADVISORS = [
  // ... your ADVISORS array remains the same
  {
    name: 'Mohit Gupta',
    bio: 'Engineered two of the largest IPOs in Indian e-commerce, Zomato and Makemytrip. Led food delivery for Zomato; P&L and Ops for Makemytrip.',
    imageUrl: '/assets/advisors/mohit-gupta.jpg',
  },
  {
    name: 'Navdeep Suri',
    bio: 'Former Indian ambassador/high commissioner to UAE, Australia, Egypt, Johannesburg and more; distinguished fellow at Observer Research Foundation.',
    imageUrl: '/assets/advisors/navdeep-suri.jpg',
  },
  {
    name: 'Stewart Beck',
    bio: 'Former President & CEO, Asia Pacific Foundation; former Canadian High Commissioner to India, Nepal & Bhutan.',
    imageUrl: '/assets/advisors/stewart-beck.jpg',
  },
  {
    name: 'Shivaji Dasgupta',
    bio: 'Exec VP and Chief Data + AI Officer at UniCredit SpA, Italy; previously Deutsche Bank and McKinsey; leads a 1500 strong tech team.',
    imageUrl: '/assets/advisors/shivaji-dasgupta.jpg',
  },
  {
    name: 'Nancy Silberkleit',
    bio: 'Co-CEO of Archie Comics Publications since 2009. Founder of Rise Above Social issues Foundation addressing bullying, discrimination and environmental concerns through comics.',
    imageUrl: '/assets/advisors/nancy-silberkleit.jpg',
  },
  {
    name: 'David Gensler',
    bio: 'Co-CEO of Gensler, the world’s largest design firm with 46 offices in 16 countries serving over 2,500 clients, for 10 years. Now Board Director of Next Space, Inc; advisor to Rocket Space, Inc.',
    imageUrl: '/assets/advisors/david-gensler.jpg',
  },
  {
    name: 'Arif Lalani',
    bio: 'Former Canadian Ambassador to Jordan, UAE, and Iraq. Former diplomatic head of the Aga Khan, representing the interests of the Imamat and the Aga Khan Development Network globally.',
    imageUrl: '/assets/advisors/arif-lalani.jpg',
  },
];

const Advisors: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  
  // itemVariants is no longer needed here as it's moved to AdvisorCard

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="text-center py-16 md:py-20 bg-panel-muted border-b-2 border-panel-dark">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h1 className="text-5xl md:text-6xl font-bold text-ink">The Global Stalwarts Steering the Auteur Vision</h1>
          <p className="mt-4 text-lg text-ink/70 max-w-3xl mx-auto">
            A distinguished council of global leaders, industry pioneers, and creative visionaries guiding the mission of Auteur.
          </p>
        </motion.div>
      </section>

      {/* Advisors Grid */}
      <section className="py-20 md:py-24 bg-paper">
        <motion.div
          className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* --- CLEANED UP MAPPING LOGIC --- */}
          {ADVISORS.map((advisor) => (
            <AdvisorCard key={advisor.name} advisor={advisor} />
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Advisors;