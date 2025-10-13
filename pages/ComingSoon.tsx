import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

interface ComingSoonProps {
  pageName: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ pageName }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Email submitted for notification: ${email}`);
      setSubmitted(true);
    }
  };

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <h1 className="text-6xl font-bold mb-4">{pageName}</h1>
        <p className="text-body-neutral text-2xl mb-8">Coming Soon</p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <label htmlFor="coming-soon-email" className="sr-only">Email address</label>
            <input 
              id="coming-soon-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to be notified" 
              required
              className="flex-grow w-full bg-paper border-2 border-panel-dark focus:border-primary p-3 focus:outline-none transition-colors"
            />
            <Button type="submit" variant="primary" aria-label="Notify me when this page is live">Notify Me</Button>
          </form>
        ) : (
          <p className="text-secondary text-lg">Thank you! We'll let you know when this page is live.</p>
        )}
      </div>
    </PageWrapper>
  );
};

export default ComingSoon;