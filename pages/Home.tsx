import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// FIX: Import Variants and useMotionValue to fix type errors.
import { motion, useScroll, useTransform, Variants, useMotionValue } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';
import { QOMIX_CLASSICS } from '../constants';

const WordReveal = ({ text }: { text: string }) => {
  const words = text.split(' ');
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  // FIX: Explicitly type animation variants with Variants to prevent type errors.
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className="text-6xl md:text-8xl font-display tracking-wider mb-6 text-ink"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-2 -mb-2">
          <motion.span className="inline-block" variants={child}>
            {word}
          </motion.span>
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </motion.h1>
  );
};

const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // FIX: Use useMotionValue instead of useState for compatibility with useTransform.
  const mouseX = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
    }
  };
  const parallaxX1 = useTransform(mouseX, [0, heroRef.current?.clientWidth || 0], ['-5%', '5%']);
  const parallaxX2 = useTransform(mouseX, [0, heroRef.current?.clientWidth || 0], ['-3%', '3%']);
  const parallaxX3 = useTransform(mouseX, [0, heroRef.current?.clientWidth || 0], ['-1%', '1%']);

  return (
    <PageWrapper>
      {/* Hero Section: The Living Comic Panel */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-paper"
      >
        {/* Background Image Gallery - Elegant Framing */}
        <div className="absolute inset-0 z-0">
          {/* Subtle background books positioned as elegant frame elements */}
          <motion.div 
            style={{ y: y3, x: parallaxX3 }} 
            className="absolute top-[10%] left-[5%] z-0"
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={{ opacity: 0.7, x: 0, rotate: -8 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <img 
              src={QOMIX_CLASSICS[0].imageUrl} 
              alt="Gatsby Art" 
              className="w-24 md:w-32 h-auto object-cover shadow-xl"
            />
          </motion.div>

          <motion.div 
            style={{ y: y1, x: parallaxX1 }} 
            className="absolute top-[15%] right-[5%] z-0"
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{ opacity: 0.8, x: 0, rotate: 12 }}
            transition={{ duration: 2, delay: 0.7 }}
          >
            <img 
              src={QOMIX_CLASSICS[6].imageUrl} 
              alt="Old Man Art" 
              className="w-28 md:w-36 h-auto object-cover shadow-xl"
            />
          </motion.div>

          <motion.div 
            style={{ y: y2, x: parallaxX2 }} 
            className="absolute bottom-[15%] left-[8%] z-0"
            initial={{ opacity: 0, x: -100, rotate: 5 }}
            animate={{ opacity: 0.75, x: 0, rotate: 6 }}
            transition={{ duration: 2, delay: 0.9 }}
          >
            <img 
              src={QOMIX_CLASSICS[2].imageUrl} 
              alt="Metamorphosis Art" 
              className="w-20 md:w-28 h-auto object-cover shadow-xl"
            />
          </motion.div>

          <motion.div 
            style={{ y: y3, x: parallaxX3 }} 
            className="absolute bottom-[10%] right-[8%] z-0"
            initial={{ opacity: 0, x: 100, rotate: -5 }}
            animate={{ opacity: 0.7, x: 0, rotate: -6 }}
            transition={{ duration: 2, delay: 1.1 }}
          >
            <img 
              src={QOMIX_CLASSICS[4].imageUrl} 
              alt="Room Art" 
              className="w-26 md:w-32 h-auto object-cover shadow-xl"
            />
          </motion.div>
        </div>

        {/* Main Content - Clean and Prominent */}
        <motion.div 
          style={{ opacity }} 
          className="relative z-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="mb-8">
            <WordReveal text="Stories that Shape Worlds" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-ink/70 max-w-3xl mx-auto mb-12 text-balance leading-relaxed"
          >
            Auteur Global is a creative syndicate that leverages the power of visual storytelling to build iconic brands and captivate global audiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/qomix">
              <Button variant="primary" className="px-8 py-3 text-lg">Explore Qomix</Button>
            </Link>
            <Link to="/qanvas">
              <Button variant="secondary" className="px-8 py-3 text-lg !border-ink/30 hover:!border-ink">Discover Qanvas</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 bg-gradient-to-br from-panel-muted via-panel-muted/80 to-panel-muted relative z-20 border-t-2 border-panel-dark/20">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-ink/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-ink/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-ink/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-ink/20 rounded-lg rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-5xl font-display text-center mb-16 text-ink"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Our Divisions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {/* Qomix */}
            <motion.div
              className="flex flex-col items-center p-8 bg-paper/80 backdrop-blur-sm rounded-2xl border-2 border-transparent hover:border-ink/20 hover:bg-paper transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-4xl font-display text-ink mb-2">Qomix</h3>
              <p className="text-body-neutral mb-4 text-balance flex-grow">The graphic novel imprint for classic and contemporary literature.</p>
              <Link to="/qomix" className="mt-auto">
                <Button variant="secondary" className="!border-ink/50 hover:!border-ink">Explore Qomix</Button>
              </Link>
            </motion.div>
            {/* Qanvas */}
            <motion.div
              className="flex flex-col items-center p-8 bg-paper/80 backdrop-blur-sm rounded-2xl border-2 border-transparent hover:border-ink/20 hover:bg-paper transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl font-display text-ink mb-2">Qanvas</h3>
              <p className="text-body-neutral mb-4 text-balance flex-grow">The world's first graphic news and information syndication platform.</p>
              <Link to="/qanvas" className="mt-auto">
                <Button variant="secondary" className="!border-ink/50 hover:!border-ink">Discover Qanvas</Button>
              </Link>
            </motion.div>
            {/* Ideographic */}
            <motion.div
              className="flex flex-col items-center p-8 bg-paper/80 backdrop-blur-sm rounded-2xl border-2 border-transparent hover:border-ink/20 hover:bg-paper transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-4xl font-display text-ink mb-2">Ideographic</h3>
              <p className="text-body-neutral mb-4 text-balance flex-grow">A story design studio for category-defining brands.</p>
              <Link to="/ideographic" className="mt-auto">
                <Button variant="secondary" className="!border-ink/50 hover:!border-ink">Learn More</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-ink via-ink/95 to-ink relative overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(254,207,10,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(254,207,10,0.08)_0%,transparent_50%)]"></div>
          {/* Animated geometric elements */}
          <motion.div 
            className="absolute top-10 right-20 w-32 h-32 border border-paper/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-16 left-16 w-24 h-24 border border-paper/20 rounded-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-paper mb-6 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Partner with a new kind of creative syndicate.
          </motion.h2>
          <motion.p 
            className="text-lg text-paper/80 max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're adapting a classic, reporting on world events, or building a category-defining brand, our visual storytelling expertise will bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button variant="secondary" className="text-lg px-12 py-4 !bg-paper !text-ink !border-paper hover:!bg-paper/90 hover:!border-paper/90 shadow-xl">Let's Create Together</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
