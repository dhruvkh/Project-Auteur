// src/pages/Home.tsx
import React from 'react'; // Removed useRef
import { Link } from 'react-router-dom';
import {
  motion,
  Variants,
  useReducedMotion,
  // Removed useScroll and useTransform
} from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

// -------------------- Helpers --------------------
const WordReveal = ({ text }: { text: string }) => {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.02 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { type: 'spring', damping: 18, stiffness: 140 },
    },
    hidden: {
      opacity: 0,
      y: 18,
      transition: reduce
        ? { duration: 0 }
        : { type: 'spring', damping: 18, stiffness: 140 },
    },
  };

  return (
    <motion.h1
      className="font-bold tracking-tight text-4xl sm:text-5xl lg:text-[clamp(2.5rem,4.5vw,3.5rem)] text-ink"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[2px] -mb-[2px]">
            <motion.span variants={child} className="inline-block">{word}</motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </motion.h1>
  );
};

// Your five covers in /public
const CLASSIC_TITLES = [
  { src: '/assets/qomix/gatsby-cover.jpg', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { src: '/assets/qomix/christmas-carol-cover.jpg', title: 'A Christmas Carol', author: 'Charles Dickens' },
  { src: '/assets/qomix/chekhov-stories-cover.jpg', title: 'The Great Stories', author: 'Anton Chekhov' },
  { src: '/assets/qomix/metamorphis-cover.jpg', title: 'Metamorphosis', author: 'Franz Kafka' },
  { src: '/assets/qomix/oldman-cover.jpg', title: 'The Old Man and the Sea', author: 'Ernest Hemingway' },
];

const Home: React.FC = () => {
  const reduce = useReducedMotion();

  // NOTE: Parallax hooks (useRef, useScroll, useTransform) have been removed.

  return (
    <PageWrapper>
      {/* ===================== HERO (Dynamic Art Panel) ===================== */}
      <section className="bg-paper overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Image as a "Dynamic Art Panel" */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={reduce ? undefined : { opacity: 0, y: 40, scale: 0.98 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="rounded-2xl border-[2.5px] border-ink/90 shadow-ink-panel overflow-hidden">
                {/* KEY FIX: aspect-square ensures the container is a square, preventing cropping */}
                <div className="relative w-full aspect-square">
                  <img
                    src="/assets/homepage.jpg"
                    alt="Library of the Future"
                    className="absolute inset-0 h-full w-full object-cover bg-transparent"
                  />
                  <div className="halftone pointer-events-none absolute inset-0 rounded-2xl opacity-[0.06]" />
                </div>
              </div>
            </motion.div>

            {/* Right: Text Content (Final Version with Added Line) */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {/* Kicker for the company name */}
                <motion.span
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="block text-sm font-semibold tracking-widest text-ink/60 uppercase"
                >
                  Auteur Pte Ltd
                </motion.span>

                {/* Main Headline with controlled line breaks */}
                <h1 className="mt-4 font-bold tracking-tight text-4xl sm:text-5xl lg:text-[clamp(2.8rem,5vw,3rem)] text-ink">
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    A COMIC R-EVOLUTION
                  </motion.div>
                  
                </h1>
              </motion.div>
              
              {/* Body paragraph with improved spacing */}
              <motion.p
                className="mt-8 text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-ink/80 max-w-prose mx-auto lg:mx-0"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                A groundbreaking intervention to make serious and complex storytelling accessible and engaging to new generations. Auteur is pioneering the deployment of the comic-graphic form to tell the stories that matter.
              </motion.p>

              {/* === THIS IS THE NEWLY ADDED PARAGRAPH === */}
              <motion.p
                className="mt-4 text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-ink/80 max-w-prose mx-auto lg:mx-0"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }} // Delay adjusted
              >
                From the giants of world literature to original commissioned narratives; from graphic histories, knowledge series, and thematic anthologies that reframe science, philosophy, and contemporary culture through the comic medium, we are confronting the crisis of reading in our time through our two imprints, Qomix Classics and Qanvas.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 1.0 }} // Delay adjusted
              >
                <Link to="/qomix">
                  <Button variant="primary" className="px-7 py-[.8rem]">
                    Qomix Classics
                  </Button>
                </Link>
                <Link to="/qanvas">
                  <Button variant="secondary" className="px-7 py-[.8rem] !border-ink/50 hover:!border-ink">
                    Qanvas
                  </Button>
                </Link>
              </motion.div>

              {/* Final, restyled tagline */}
              <motion.p
                className="mt-12 text-sm font-semibold tracking-widest text-ink/60 uppercase"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }} // Delay adjusted
              >
                One Vision &bull; Two Worlds &bull; Infinite Imagination
              </motion.p>

            </div>

          </div>
        </div>
      </section>

      {/* ===================== QUOTE (Editorial Spread Design) ===================== */}
      <section className="bg-paper py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Giant Decorative Quote Mark */}
            <div className="hidden lg:flex lg:col-span-4 items-center justify-center">
              <span 
                aria-hidden="true" 
                className="text-[20rem] font-serif text-ink/10 leading-none select-none"
              >
                “
              </span>
            </div>

            {/* Column 2: The Quote and Attribution */}
            <div className="lg:col-span-8">
              <blockquote>
                <p className="text-3xl md:text-4xl font-serif text-ink/90 leading-relaxed text-balance">
                  The graphic novel has the potential to be an incredible gateway into the world's greatest literature.{' '}
                  <span className="font-bold text-ink">Qomix Classics holds the key.</span>
                </p>
                <footer>
                  <p className="mt-8 text-xl text-ink/80">
                    <span className="font-semibold text-ink">&mdash; Marcus du Sautoy</span>
                    <br />
                    <span className="text-base">
                      Professor for the Public Understanding of Science, University of Oxford, UK
                    </span>
                  </p>
                </footer>
              </blockquote>
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* (The rest of your page: Divisions, Final CTA, etc. remains unchanged) */}
      
      {/* ===================== DIVISIONS ===================== */}
      <section className="py-18 md:py-20 bg-gradient-to-br from-panel-muted via-panel-muted/80 to-panel-muted border-t-2 border-panel-dark/20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-ink"
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Our Imprints
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-center max-w-4xl mx-auto">
            <DivisionCard
              title="Qomix Classics"
              body="Qomix Classics is committed to creating the definitive graphic editions of the world’s great books."
              link="/qomix"
              cta="Explore Qomix"
            />
            <DivisionCard
              title="Qanvas"
              body="Deploying the comic form, Qanvas seeks to explore and interpret crucial events and ideas impacting the world."
              link="/qanvas"
              cta="Discover Qanvas"
            />
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-22 md:py-24 bg-gradient-to-r from-ink via-ink/95 to-ink">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-paper mb-6 max-w-3xl mx-auto"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Partner with a new kind of creative syndicate.
          </motion.h2>
          <motion.p
            className="text-lg text-paper/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether you&apos;re adapting a classic, reporting on world events, or building a
            category-defining brand, our visual storytelling expertise will bring your vision to life.
          </motion.p>
          <Link to="/contact">
            <Button
              variant="secondary"
              className="text-lg px-12 py-4 !bg-paper !text-ink !border-paper hover:!bg-paper/90 hover:!border-paper/90 shadow-xl"
            >
              Let&apos;s Create Together
            </Button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

// Small card for divisions
function DivisionCard({
  title, body, link, cta,
}: { title: string; body: string; link: string; cta: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex flex-col items-center p-8 bg-paper/80 backdrop-blur-sm rounded-2xl border-2 border-transparent hover:border-ink/20 hover:bg-paper transition-all duration-300 shadow-ink-soft hover:shadow-ink-panel"
      initial={reduce ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45 }}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-ink mb-2">{title}</h3>
      <p className="text-body-neutral mb-4 text-balance flex-grow">{body}</p>
      <Link to={link} className="mt-auto">
        <Button variant="secondary" className="!border-ink/50 hover:!border-ink">
          {cta}
        </Button>
      </Link>
    </motion.div>
  );
}

export default Home;