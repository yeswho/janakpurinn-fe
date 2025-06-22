import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    // Load the script only once
    if (!document.querySelector('script[src*="reviewsonmywebsite"]')) {
      const script = document.createElement('script');
      script.src = 'https://reviewsonmywebsite.com/js/v2/embed.js?id=ed4438e9e91ed835b3e5bd228423f3c6';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Clean up the script if component unmounts
      const script = document.querySelector('script[src*="reviewsonmywebsite"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-text-primary mb-4 sm:mb-6 tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Guest Reviews
          </motion.h1>
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl font-serif font-medium text-text-primary">
              Experiences at Janakpur Inn
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent-400 mx-auto mt-3 sm:mt-6"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-0 overflow-hidden"
        >
          <div 
            data-romw-token="6F5rMeqxRuDG3IUlptDPVb6fvwCtq0Vk1sZyFMIRTs9TmgXDcy"
            className="min-h-[300px] w-full"
          />
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="divider mx-auto w-16 sm:w-24 h-1 bg-accent-400 mb-6 sm:mb-8"></div>
          <motion.h3
            className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-text-primary mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Share Your Experience
          </motion.h3>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-text-secondary max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We value your feedback. Share your experience at Janakpur Inn and help others discover our hospitality.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GoogleReviews;