import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    country: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageWrapper>
        <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-display mb-2">Thank you!</h1>
          <p className="text-body-neutral">We’ve received your message and will get back to you within 2 business days.</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-display mb-4 text-ink">Contact Us</h1>
          <p className="text-body-neutral text-lg mb-8">Let's create something extraordinary together. Reach out to Neena & Payal to start the conversation.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} className="w-full bg-paper border-2 border-panel-dark focus:border-primary p-3 focus:outline-none transition-colors" />
            <input type="text" name="organization" placeholder="Organization" onChange={handleChange} className="w-full bg-paper border-2 border-panel-dark focus:border-primary p-3 focus:outline-none transition-colors" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full bg-paper border-2 border-panel-dark focus:border-primary p-3 focus:outline-none transition-colors" />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} className="w-full bg-paper border-2 border-panel-dark focus:border-primary p-3 focus:outline-none transition-colors" />
          </div>
          <div>
            <textarea name="message" placeholder="Message" required rows={5} onChange={handleChange} className="w-full bg-paper border-2 border-panel-dark focus:border-primary p-3 focus:outline-none transition-colors"></textarea>
          </div>
          <div className="text-center">
            <Button type="submit" variant="primary" className="w-full md:w-auto">Send Message</Button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Contact;