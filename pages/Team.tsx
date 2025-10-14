// src/pages/Team.tsx

import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

// --- Data for the Team Members ---

const FOUNDERS = [
  {
    name: 'Tarun Tejpal',
    role: 'India',
    bio: 'Serial disruptor of the editorial, publishing and intellectual landscape. Founder, Indiaink, Tehelka, THINK. Groundbreaking journalist and editor; award-winning novelist.',
    imageUrl: '/assets/team/tarun-tejpal.jpg', // Add your image here
  },
  {
    name: 'Payal Puri',
    role: 'India',
    bio: 'Writer and journalist, former editor of Cosmopolitan and founding editorial director of PopXO; 20+ years experience in lifestyle media and thought leadership; live events moderator. Co-founder, THINK and Algebra the Arts & Ideas Club.',
    imageUrl: '/assets/team/payal-puri.jpg', // Add your image here
  },
  {
    name: 'Neena Tejpal',
    role: 'India',
    bio: 'Formidable operational powerhouse; former COO of Tehelka; founder and Director of THINK; experienced leader of teams and projects. Founder of Algebra, the Arts & Ideas Club.',
    imageUrl: '/assets/team/neena-tejpal.jpg', // Add your image here
  },
  {
    name: 'Anila Ahuja',
    role: 'Leads Business Development',
    bio: 'Leads Business Development and fund-raising for Qomix. Founding team at Sanctum Wealth Pvt Ltd, managing USD 6 Bn in assets. 25+ years in wealth management.',
    imageUrl: '/assets/team/anila-ahuja.jpg', // Add your image here
  },
];

const LEADERSHIP = [
  {
    name: 'Alessio Rosatelli',
    role: 'Italy',
    bio: 'Alessio has multi-year frontier experience in data and AI. At Qomix, he is building proprietary tech for comicising books at scale.',
    imageUrl: '/assets/team/alessio-rosatelli.jpg', // Add your image here
  },
  {
    name: 'Andrea Rufini',
    role: 'France',
    bio: 'Information and robotics engineer with focus on AI and data science. Building next generation platforms to leverage artificial intelligence for consumer businesses.',
    imageUrl: '/assets/team/andrea-rufini.jpg', // Add your image here
  },
  
];


const Team: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="text-center py-16 md:py-20 bg-panel-muted border-b-2 border-panel-dark">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h1 className="text-5xl md:text-6xl font-bold text-ink">The Team Behind Auteur</h1>
          <p className="mt-4 text-lg text-ink/70 max-w-2xl mx-auto">
            A collective of award-winning creators, journalists, and innovators dedicated to reinventing the narrative form.
          </p>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="container mx-auto px-6 space-y-20">
          {FOUNDERS.map((member, index) => {
            const [imgSrc, setImgSrc] = useState(member.imageUrl);
            return (
              <motion.div
                key={member.name}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={imgSrc}
                    alt={member.name}
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
                    onError={() => {
                      if (imgSrc !== '/assets/team/placeholder.jpg') setImgSrc('/assets/team/placeholder.jpg');
                    }}
                  />
                </div>
                {/* Text Content */}
                <div className={`flex-1 text-center lg:text-left ${index % 2 !== 0 ? 'lg:text-right' : ''}`}>
                  <p className="text-sm font-semibold tracking-widest text-ink/60 uppercase">{member.role}</p>
                  <h2 className="mt-2 text-4xl md:text-5xl font-serif text-ink">{member.name}</h2>
                  <p className={`mt-4 text-lg text-ink/80 leading-relaxed ${index % 2 !== 0 ? 'max-w-xl mx-auto lg:mx-0 lg:ml-auto' : 'max-w-xl mx-auto lg:mx-0'}`}>{member.bio}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tech & Business Leadership Section */}
      <section className="py-20 md:py-24 bg-panel-muted border-t-2 border-panel-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-ink">Technology & Business Leadership</h2>
          </motion.div>

          <motion.div
            className="flex justify-center gap-8 mt-12 flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {LEADERSHIP.map((member) => {
              const [imgSrc, setImgSrc] = useState(member.imageUrl);
              return (
                <motion.div
                  key={member.name}
                  className="bg-paper p-8 rounded-lg border border-panel-dark text-center flex flex-col items-center w-80 max-w-sm"
                  variants={itemVariants}
                >
                  <img
                    src={imgSrc}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover shadow-md mb-6"
                    onError={() => {
                      if (imgSrc !== '/assets/team/placeholder.jpg') setImgSrc('/assets/team/placeholder.jpg');
                    }}
                  />
                  <div className="flex-grow text-center">
                    <p className="text-xs font-semibold tracking-widest text-ink/60 uppercase">{member.role}</p>
                    <h3 className="mt-1 text-2xl font-serif text-ink">{member.name}</h3>
                    <p className="mt-3 text-base text-ink/80 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Team;