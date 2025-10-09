import React from 'react';
import PageWrapper from '../components/PageWrapper';

const Qanvas: React.FC = () => {
  return (
    <PageWrapper>
      {/* Manifesto Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-panel-muted text-ink text-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/80 to-paper"></div>

        <div className="relative z-10 max-w-4xl animate-reveal-staggered">
          <h1 className="text-6xl md:text-7xl font-display tracking-wider mb-6">Qanvas</h1>
          <p className="text-lg md:text-xl text-body-neutral max-w-3xl mx-auto text-balance">
            A radical reinvention of news and information for the visual age. Qanvas is the world's first graphic news and information syndication platform, combining original, high-quality art with profound narrative heft.
          </p>
        </div>
      </section>

      {/* Ticker */}
      <div className="w-full bg-primary py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-ticker inline-block">
          <span className="text-secondary font-display text-2xl mx-8">GLOBAL LANGUAGES</span>
          <span className="text-secondary/70 font-display text-2xl mx-8">ROSTER OF DISCIPLINE MASTERS</span>
          <span className="text-secondary font-display text-2xl mx-8">EDITORS & WRITERS</span>
          <span className="text-secondary/70 font-display text-2xl mx-8">ILLUSTRATORS</span>
           <span className="text-secondary font-display text-2xl mx-8">GLOBAL LANGUAGES</span>
          <span className="text-secondary/70 font-display text-2xl mx-8">ROSTER OF DISCIPLINE MASTERS</span>
          <span className="text-secondary font-display text-2xl mx-8">EDITORS & WRITERS</span>
          <span className="text-secondary/70 font-display text-2xl mx-8">ILLUSTRATORS</span>
        </div>
      </div>
      
      {/* Disrupting Media Section */}
      <section className="py-20 bg-paper">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-display text-center mb-12 text-ink">Disrupting Media</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-panel-dark">
              <img src="https://storage.googleapis.com/a-photos-public/qanvas-1.jpg" alt="News Story 1" className="w-full h-56 object-cover mb-4" />
              <h3 className="text-2xl font-display text-ink mb-2">Complex Geopolitics, Clarified</h3>
              <p className="text-body-neutral">Visual narratives that break down intricate global events for broader understanding.</p>
            </div>
            <div className="p-6 border-2 border-panel-dark">
              <img src="https://storage.googleapis.com/a-photos-public/qanvas-2.jpg" alt="News Story 2" className="w-full h-56 object-cover mb-4" />
              <h3 className="text-2xl font-display text-ink mb-2">Scientific Breakthroughs, Visualized</h3>
              <p className="text-body-neutral">Making cutting-edge science and technology accessible and engaging through art.</p>
            </div>
            <div className="p-6 border-2 border-panel-dark">
              <img src="https://storage.googleapis.com/a-photos-public/qanvas-3.jpg" alt="News Story 3" className="w-full h-56 object-cover mb-4" />
              <h3 className="text-2xl font-display text-ink mb-2">Cultural Movements, Captured</h3>
              <p className="text-body-neutral">Documenting the zeitgeist with compelling graphic stories from around the world.</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Qanvas;