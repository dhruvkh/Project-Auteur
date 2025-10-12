// src/pages/Contact.tsx

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('general'); // 'general' or 'portfolio'
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    designation: '',
    email: '',
    mobile: '',
    country: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePortfolioRequest = () => {
    setInquiryType('portfolio');
    setFormData(prevState => ({
      ...prevState,
      message: 'Hello, I would like to formally request access to the Auteur portfolio. Thank you.',
    }));
  };

  const handleGeneralInquiry = () => {
    setInquiryType('general');
    // Clear message only if it's the portfolio default
    if (formData.message === 'Hello, I would like to formally request access to the Auteur portfolio. Thank you.') {
      setFormData(prevState => ({ ...prevState, message: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  // --- The refined "Thank You" screen ---
  if (submitted) {
    return (
      <PageWrapper>
        <div className="min-h-[calc(100vh-88px)] flex items-center justify-center bg-paper p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-paper border border-panel-dark/50 p-10 md:p-12 rounded-lg shadow-xl max-w-lg text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', duration: 0.6 }}
              className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h1 className="text-4xl font-serif mb-3 text-ink">Thank You!</h1>
            <p className="text-ink/70 text-lg leading-relaxed">
              We've received your message and will be in touch within 2 business days.
            </p>
            <div className="mt-8">
              <Button onClick={() => setSubmitted(false)} variant="secondary" className="!border-ink/50 hover:!border-ink">
                Send Another Message
              </Button>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    );
  }

  // --- The new two-column contact page design ---
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-88px)] w-full bg-panel-muted overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center h-full py-16 md:py-20">
          
          {/* Left Column: The Invitation */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-ink tracking-tight">Partnerships, Ideas, Collaborations</h1>
            <p className="mt-4 text-xl md:text-2xl text-ink/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We are listening
            </p>
            <p className="mt-10 text-lg text-ink/80">
              Reach out to us to start a conversation<br/>
              <a href="mailto:Contact@auteurglobal.com" className="text-ink hover:text-primary transition-colors">
                Contact@auteurglobal.com
              </a>
            </p>
            <div className="mt-8 pt-8 border-t border-panel-dark">
              <h3 className="text-sm font-semibold tracking-widest text-ink/60 uppercase mb-4">
                Our Presence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-semibold text-ink">Auteur Pte Ltd</p>
                  <p className="text-ink/70">Singapore</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-ink">Optiquesutra Pvt Ltd</p>
                  <p className="text-ink/70">Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-paper p-8 md:p-10 rounded-lg border border-panel-dark/50 shadow-xl space-y-6">
              
              {/* Personal & Contact Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink/80 mb-1">Full Name <span className="text-primary">*</span></label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} className="w-full bg-paper border border-panel-dark/40 focus:border-primary p-3 focus:outline-none transition-colors rounded-md text-ink placeholder:text-ink/40" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink/80 mb-1">Email Address <span className="text-primary">*</span></label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} className="w-full bg-paper border border-panel-dark/40 focus:border-primary p-3 focus:outline-none transition-colors rounded-md text-ink placeholder:text-ink/40" />
                </div>
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-ink/80 mb-1">Designation <span className="text-primary">*</span></label>
                  <input type="text" id="designation" name="designation" placeholder="Creative Director" required value={formData.designation} onChange={handleChange} className="w-full bg-paper border border-panel-dark/40 focus:border-primary p-3 focus:outline-none transition-colors rounded-md text-ink placeholder:text-ink/40" />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-ink/80 mb-1">Mobile Number <span className="text-primary">*</span></label>
                  <input type="tel" id="mobile" name="mobile" placeholder="+1 (555) 123-4567" required value={formData.mobile} onChange={handleChange} className="w-full bg-paper border border-panel-dark/40 focus:border-primary p-3 focus:outline-none transition-colors rounded-md text-ink placeholder:text-ink/40" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-ink/80 mb-1">Organization</label>
                  <input type="text" id="organization" name="organization" placeholder="Acme Corp" value={formData.organization} onChange={handleChange} className="w-full bg-paper border border-panel-dark/40 focus:border-primary p-3 focus:outline-none transition-colors rounded-md text-ink placeholder:text-ink/40" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-ink/80 mb-1">Country</label>
                  <input type="text" id="country" name="country" placeholder="United States" value={formData.country} onChange={handleChange} className="w-full bg-paper border border-panel-dark/40 focus:border-primary p-3 focus:outline-none transition-colors rounded-md text-ink placeholder:text-ink/40" />
                </div>
              </div>

              {/* Smart Inquiry Toggle */}
              <div className="pt-4">
                <label className="block text-sm font-medium text-ink/80 mb-2">What is your primary interest?</label>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={handleGeneralInquiry} className={`px-4 py-2 text-sm rounded-full transition-colors ${inquiryType === 'general' ? 'bg-ink text-paper' : 'bg-panel-muted text-ink/80 hover:bg-panel-dark'}`}>
                    General Inquiry
                  </button>
                  <button type="button" onClick={handlePortfolioRequest} className={`px-4 py-2 text-sm rounded-full transition-colors ${inquiryType === 'portfolio' ? 'bg-ink text-paper' : 'bg-panel-muted text-ink/80 hover:bg-panel-dark'}`}>
                    Request for Portfolio
                  </button>
                </div>
              </div>

              {/* Message Box */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink/80 mb-1">Your Message <span className="text-primary">*</span></label>
                <textarea id="message" name="message" placeholder="Share your vision, goals, and how we can help..." required rows={5} value={formData.message} onChange={handleChange} className="w-full bg-paper border border-panel-dark/40 focus:border-primary p-3 focus:outline-none transition-colors rounded-md text-ink placeholder:text-ink/40 resize-y"></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-left pt-4">
                <Button type="submit" variant="primary" className="text-base px-10 py-3 shadow-lg hover:shadow-xl transition-all">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;