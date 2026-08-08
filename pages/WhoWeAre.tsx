// src/pages/About.tsx

import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      {/* --- Section 1: Immersive Hero Image --- */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center bg-paper overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="assets/who-we-are.png"
            alt="Who We Are"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </motion.div>
      </section>

      {/* --- Section 2: The Mission --- */}
      <section className="bg-paper py-20 md:py-28 text-center">
        <motion.div
          className="container mx-auto px-6 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-ink leading-relaxed">
            We are a creative enterprise, with roots in Singapore and India, reimagining how stories are told, read, and remembered for a our visual age.
          </p>
          <p className="mt-8 text-lg md:text-xl text-ink/70 leading-relaxed">
            Founded by veteran professionals with over three decades of experience, we bring deep creative expertise to a singular cultural mission: <span className="text-ink font-semibold">to restore reading, in the age of distraction, to the centre of human imagination</span>.
          </p>
        </motion.div>
      </section>

      {/* --- Section 3: The Approach (Pillars) --- */}
      <section className="py-20 md:py-24 bg-panel-muted border-y-2 border-panel-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Pillar 1 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-ink mb-3">Reimagining Literature</h3>
              <p className="text-ink/80">
                Our groundbreaking Qomix Classics imprint transforms global literature, knowledge, and ideas into compelling visual narratives.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-ink mb-3">In Countless Toungues</h3>
              <p className="text-ink/80">
                Every volume we create gets translated into dozens of languages, to create a new grammar of communication worldwide.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-ink mb-3">Setting New Benchmarks</h3>
              <p className="text-ink/80">
                With collaborators across US, Europe and Asia, we aim to set new standards in visual-textual storytelling for a global audience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 4: The Impact --- */}
      <section className="bg-paper py-20 md:py-28">
        <motion.div
          className="container mx-auto px-6 text-center max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-tight">
            We are shifting the cultural paradigm with every book.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ink/70">
            From graphic histories that reframe science and philosophy to thematic anthologies on contemporary culture, our work is at the forefront of a new narrative movement.
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default About;