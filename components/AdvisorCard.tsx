// src/components/AdvisorCard.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define a type for the advisor prop for better TypeScript support
interface Advisor {
  name: string;
  bio: string;
  imageUrl: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AdvisorCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => {
  // State is now correctly used at the top level of this component
  const [imgSrc, setImgSrc] = useState(advisor.imageUrl);

  return (
    <motion.div
      key={advisor.name}
      variants={itemVariants}
      className="bg-paper p-6 md:p-8 border border-transparent hover:border-panel-dark hover:shadow-lg transition-all duration-300 rounded-lg"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src={imgSrc}
            alt={advisor.name}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-md"
            onError={() => {
              if (imgSrc !== '/assets/advisors/placeholder.jpg') {
                setImgSrc('/assets/advisors/placeholder.jpg');
              }
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-serif text-ink">{advisor.name}</h3>
          <p className="mt-2 text-base text-ink/80 leading-relaxed">{advisor.bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AdvisorCard;