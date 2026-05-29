import React from 'react';
import { motion } from 'framer-motion';
import { useAbout } from '../../../hooks/useAbout';

const AboutUs: React.FC = () => {
  const { data: aboutData, isLoading, error } = useAbout();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
        <motion.div
          role="status"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hotel-card"
        >
          <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin fill-accent-500 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <p className="mt-4 text-text-secondary font-medium">Loading...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 p-4">
        <motion.div className="hotel-card text-center max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-red-500/80">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-text-primary">Unable to Load Content</h2>
            <p className="mb-6 text-text-secondary">{(error as Error).message || 'Please try again later.'}</p>
            <button onClick={() => window.location.reload()} className="btn-mithila px-12">Try Again</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-16 sm:mb-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30"
        >
            The Heritage
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-500 mb-8 tracking-tight mithila-section-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {aboutData?.title}
        </motion.h1>
        <p className="text-lg sm:text-xl font-serif italic text-text-secondary max-w-2xl mx-auto">
          {aboutData?.subtitle}
        </p>
      </motion.div>

      {/* Sections */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full mx-auto space-y-16 sm:space-y-28"
      >
        {aboutData?.sections.map((section, index) => (
          <motion.div
            key={section.title}
            variants={item}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 sm:gap-16`}
          >
            <div className="w-full md:w-1/2">
              <div className="mithila-card !p-0 overflow-hidden shadow-xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-accent-500 mb-6 relative inline-block"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {section.title}
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-300 opacity-20" />
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg text-text-secondary leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:mr-1 first-letter:text-accent-500"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {section.content}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="mt-24 sm:mt-32 md:mt-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent-500 mb-6 mithila-section-title"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Artisans of Hospitality
          </motion.h2>
          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet the passionate individuals who carry the spirit of Mithila into every detail of your stay.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {aboutData?.team.map((member) => (
            <motion.div
              key={member.name}
              className="mithila-card group !p-3 shadow-md active:shadow-2xl transition-all duration-500"
              variants={item}
              whileTap={{ y: -5 }}
            >
              <div className="overflow-hidden rounded-sm mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
              <div className="px-2 pb-4 text-center">
                <h3 className="text-lg font-serif font-bold text-accent-500 mb-1">{member.name}</h3>
                <p className="text-accent-400 font-bold text-[10px] uppercase tracking-widest mb-3 border-b border-accent-300/10 pb-2">{member.position}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer/Closing */}
      <motion.div
        className="mt-24 sm:mt-32 md:mt-40 text-center relative py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mithila-divider !w-32 mx-auto mb-12" />
        <motion.h3
          className="text-2xl sm:text-3xl font-serif font-bold text-accent-500 mb-6 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Home in Janakpur Awaits
        </motion.h3>
        <motion.p
          className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Step into a sanctuary where every corner tells a story. At Janakpur Inn, we don't just offer a room; we offer an invitation to become part of the vibrant tapestry of Mithila.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;