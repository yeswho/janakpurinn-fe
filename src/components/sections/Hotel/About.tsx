import React from 'react';
import { motion } from 'framer-motion';
import { useAbout } from '../../../hooks/useAbout';

const AboutUs: React.FC = () => {

  const { data: aboutData, isLoading, error } = useAbout();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageHover = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" }
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
        <motion.div
          className="hotel-card text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-red-500/80">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-text-primary">Unable to Load Content</h2>
            <p className="mb-6 text-text-secondary">{(error as Error).message || 'Please try again later.'}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-text-primary mb-8 tracking-tight leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {aboutData?.title}
        </motion.h1>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-xl md:text-2xl font-serif font-medium text-text-primary">
              {aboutData?.subtitle}
            </h1>
            <div className="w-24 h-1 bg-accent-400 mx-auto mt-6"></div>
          </div>

        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-28"
      >
        {aboutData?.sections.map((section, index) => (
          <motion.div
            key={section.title}
            variants={item}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
          >
            <div className="md:w-1/2">
              <motion.div
                whileHover="hover"
                className="hotel-card p-0 overflow-hidden"
              >
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-80 md:h-96 object-cover"
                  variants={{
                    hover: imageHover
                  }}
                />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.h2
                className="text-2xl font-serif font-semibold text-text-primary mb-6"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {section.title}
              </motion.h2>
              <motion.p
                className="text-md text-text-secondary leading-relaxed"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {section.content}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-serif font-semibold text-text-primary mb-4"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-text-secondary max-w-2xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the passionate individuals who make Janakpur Inn's vision a reality.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {aboutData?.team.map((member) => (
            <motion.div
              key={member.name}
              className="hotel-card group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="overflow-hidden rounded-t-lg mb-6"
                whileHover="hover"
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  variants={{
                    hover: imageHover
                  }}
                />
              </motion.div>
              <h3 className="text-xl font-serif font-semibold text-text-primary">
                {member.name}
              </h3>
              <p className="text-accent-500 font-medium mb-3">
                {member.position}
              </p>
              <p className="text-text-secondary">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Closing Section */}
      <motion.div
        className="mt-28 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="divider" />
        <motion.h3
          className="text-2xl font-serif font-medium text-text-primary mb-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We await you
        </motion.h3>
        <motion.p
          className="text-text-secondary max-w-3xl mx-auto"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Janakpur Inn Hotel awaits you to offer its warm and friendly hospitality. If your choice is comfort and service at a reasonable price, come and let us show you our care for your simple and most extravagant desires.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;