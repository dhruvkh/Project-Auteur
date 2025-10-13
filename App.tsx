// App.tsx - Main application entry point
// Handles routing, page transitions, and global layout

import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Qomix from './pages/Qomix';
import Qanvas from './pages/Qanvas';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import Team from './pages/Team';
import Advisors from './pages/Advisors';
import WhoWeAre from './pages/WhoWeAre';
import ComingSoon from './pages/ComingSoon';

// AnimatedRoutes handles route transitions with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        {/* Main public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/qomix" element={<Qomix />} />
        <Route path="/qanvas" element={<Qanvas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Team />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />

        {/* Placeholder/coming soon routes */}
        <Route path="/coming-soon" element={<ComingSoon pageName="Coming Soon" />} />
        <Route path="/team" element={<ComingSoon pageName="Team" />} />
        <Route path="/advisors" element={<ComingSoon pageName="Advisors" />} />
        <Route path="/WhoWeAre" element={<ComingSoon pageName="Who We Are" />} />

        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

// App component wraps the site in Router, Header, Footer, and page transitions
const App: React.FC = () => {
  // Removed CustomCursor to disable custom cursor globally
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-paper text-ink selection:bg-primary/30">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;