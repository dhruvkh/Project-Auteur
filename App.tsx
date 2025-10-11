import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import Qomix from './pages/Qomix';
import Qanvas from './pages/Qanvas';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import Team from './pages/Team';
import Advisors from './pages/Advisors';
import WhoWeAre from './pages/WhoWeAre';
import ComingSoon from './pages/ComingSoon';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/qomix" element={<Qomix />} />
        <Route path="/qanvas" element={<Qanvas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Team />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />

        {/* Header navigation links */}
        <Route path="/coming-soon" element={<ComingSoon pageName="Coming Soon" />} />
        <Route path="/team" element={<ComingSoon pageName="Team" />} />
        <Route path="/advisors" element={<ComingSoon pageName="Advisors" />} />
        
        {/* Footer links */}
        <Route path="/WhoWeAre" element={<ComingSoon pageName="Who We Are" />} />
        
        {/* Fallback for any other route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CustomCursor />
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