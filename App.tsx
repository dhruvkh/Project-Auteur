import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import Qomix from './pages/Qomix';
import Qanvas from './pages/Qanvas';
import Ideographic from './pages/Ideographic';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/qomix" element={<Qomix />} />
        <Route path="/qanvas" element={<Qanvas />} />
        <Route path="/ideographic" element={<Ideographic />} />
        <Route path="/contact" element={<Contact />} />

        {/* Footer links */}
        <Route path="/vision" element={<ComingSoon pageName="Vision" />} />
        <Route path="/team" element={<ComingSoon pageName="Team" />} />
        <Route path="/advisors" element={<ComingSoon pageName="Advisors" />} />
        
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