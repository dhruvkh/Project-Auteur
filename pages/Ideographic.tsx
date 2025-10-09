import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { IDEOGRAPHIC_SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Ideographic: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-panel-muted text-ink text-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/80 to-paper"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-display tracking-wider mb-6">Ideographic</h1>
          <p className="text-lg md:text-xl text-body-neutral max-w-3xl mx-auto text-balance">
            A story design studio for category-defining brands. We partner with visionaries to translate complex ideas into compelling narratives that shape markets and inspire action.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-display text-center mb-4 text-ink">What We Do</h2>
          <p className="text-body-neutral text-lg text-center max-w-2xl mx-auto mb-16">From core messaging to viral content, we build narrative ecosystems that drive growth and create lasting brand equity.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {IDEOGRAPHIC_SERVICES.map((service, index) => (
              <div key={index} className="p-8 border-2 border-panel-dark hover:border-primary transition-colors duration-300">
                <h3 className="text-3xl font-display text-ink mb-4">{service.title}</h3>
                <p className="text-body-neutral">{service.description}</p>
              </div>
            ))}
             {/* Call to action card */}
            <div className="md:col-span-2 lg:col-span-1 p-8 bg-primary/10 border-2 border-primary flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-display text-ink mb-4">Ready to tell your story?</h3>
              <Link to="/contact">
                <Button variant='primary'>Let's Talk</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* Process Section */}
      <section className="py-20 bg-panel-muted">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-display mb-12 text-ink">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-display text-primary mb-2">01</div>
                    <h3 className="text-2xl font-display text-ink mb-2">Discovery</h3>
                    <p className="text-body-neutral">Deep dive into your vision, market, and audience to unearth your core narrative.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-display text-primary mb-2">02</div>
                    <h3 className="text-2xl font-display text-ink mb-2">Design</h3>
                    <p className="text-body-neutral">Craft the visual and verbal language that brings your story to life with clarity and impact.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-display text-primary mb-2">03</div>
                    <h3 className="text-2xl font-display text-ink mb-2">Dispatch</h3>
                    <p className="text-body-neutral">Deploy your narrative across strategic channels for maximum reach and resonance.</p>
                </div>
            </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Ideographic;
