import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

const GoogleReviewsWidget: React.FC = () => {
  useEffect(() => {
    // Load the Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    script.dataset.useServiceCore = '';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      div[class*="elfsight-app"] a[href*="elfsight.com/google-reviews-widget"],
      .elfsight-app-380a1820-3d13-4702-a7a6-74c970ab176a a[href*="elfsight.com"] {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        width: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        const watermarks = document.querySelectorAll(
          'a[href*="elfsight.com/google-reviews-widget"]'
        );
        watermarks.forEach((element) => {
          (element as HTMLElement).style.visibility = 'hidden';
          (element as HTMLElement).style.height = '0';
          (element as HTMLElement).style.width = '0';
          (element as HTMLElement).style.padding = '0';
          (element as HTMLElement).style.margin = '0';
          (element as HTMLElement).style.opacity = '0';
          (element as HTMLElement).style.pointerEvents = 'none';
        });
      });
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
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
        {/* Heading */}
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

        <div className="flex justify-center">
          <div
            className="min-h-[500px] w-full"
            dangerouslySetInnerHTML={{
              __html: `
                <div class="elfsight-app-380a1820-3d13-4702-a7a6-74c970ab176a" data-elfsight-app-lazy></div>
              `
            }}
          />
        </div>

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

export default GoogleReviewsWidget;