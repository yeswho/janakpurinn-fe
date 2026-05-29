import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Route, ExternalLink } from 'lucide-react';
import bhumijaImage from '../../../assets/images/bhumijaHolidays.png';

const SisterCompany: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const features = [
    {
      icon: <Compass className="w-5 h-5 text-accent-400" />,
      title: 'Bespoke Itineraries',
      description: 'Customized cultural and spiritual journeys tailored precisely to your pace and interests.'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-accent-400" />,
      title: 'Expert Cultural Guides',
      description: 'Guided by local scholars, historians, and storytellers who bring Nepal’s deep heritage to life.'
    },
    {
      icon: <Route className="w-5 h-5 text-accent-400" />,
      title: 'Seamless Travel Integration',
      description: 'Effortless coordination of transfers, private tours, and experiences directly from Janakpur Inn.'
    }
  ];

  return (
    <motion.section
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            variants={item}
          >
            <div className="mithila-card !p-0 overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-accent-500/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img
                src={bhumijaImage}
                alt="Bhumija Holidays Heritage Tour in Nepal"
                className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-accent-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 mithila-border shadow-lg">
                  SISTER COMPANY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2 px-2"
            variants={item}
          >
            <div className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30">
              Introducing Our Partner
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent-500 mb-4 tracking-tight">
              Bhumija Holidays
            </h2>
            <p className="text-lg font-serif italic text-text-secondary mb-8">
              Where Culture Meets Journey
            </p>

            <p className="text-text-primary leading-relaxed mb-10 text-base sm:text-lg">
              Embark on an immersive exploration of Mithila’s timeless wonders with our esteemed sister company, <strong>Bhumija Holidays</strong>. 
              While Janakpur Inn serves as your elegant home, Bhumija Holidays designs the custom tours and spiritual pilgrimages that connect you deeper with the heritage of the region—focusing on the sacred temples and rich culture of Janakpurdham.
            </p>

            {/* Features/Highlights List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 p-2 bg-accent-300/10 rounded-sm border border-accent-300/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-accent-500 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.bhumijaholidays.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mithila inline-flex items-center gap-2 group !px-10"
              >
                Explore Bhumija Holidays
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default SisterCompany;
