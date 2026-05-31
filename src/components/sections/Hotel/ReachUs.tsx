import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const FindUs: React.FC = () => {
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

    return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative Background Motif */}
      <div className="absolute top-1/2 right-0 w-96 h-96 opacity-5 pointer-events-none -translate-y-1/2 translate-x-1/3">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-500 fill-none">
           {[...Array(6)].map((_, i) => (
             <rect key={i} x={10+i*5} y={10+i*5} width={80-i*10} height={80-i*10} strokeWidth="0.5" transform={`rotate(${i*15} 50 50)`} />
           ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30"
          >
              Our Location
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-500 mb-8 tracking-tight mithila-section-title"
          >
            Find Your Way
          </motion.h1>
          <p className="text-lg sm:text-xl font-serif italic text-text-secondary max-w-2xl mx-auto">
            Journey to the heart of Ramanand Chowk, where Mithila's soul resides.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16"
        >
          {/* Map */}
          <motion.div
            variants={item}
            className="mithila-card group !p-2 overflow-hidden shadow-2xl active:rotate-1 transition-all duration-500"
          >
            <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.22171847403!2d85.91668091131955!3d26.737299867509265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4169194bb6bd%3A0xc733976a1e32e236!2sHotel%20JanakpurInn!5e0!3m2!1sen!2snp!4v1748835156128!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm transition-all duration-700 min-h-[250px] sm:min-h-[450px]"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10" />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={item}
            className="flex flex-col justify-center"
          >
            <div className="mithila-card p-8 sm:p-12 h-full flex flex-col justify-center bg-white/50 backdrop-blur-sm active:shadow-2xl transition-all">
              <h2 className="text-3xl font-serif font-bold text-accent-500 mb-10 relative inline-block">
                Artisan Contact
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent-300 opacity-20" />
              </h2>

              <div className="space-y-10">
                {/* Address */}
                <motion.div className="flex items-start active:bg-accent-500/5 p-2 rounded-lg transition-colors hover:bg-accent-500/5">
                  <div className="flex-shrink-0 bg-accent-500/5 p-4 rounded-full text-accent-500 mithila-border">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400 mb-2">Sanctuary Address</h3>
                    <p className="text-lg font-serif text-text-primary leading-relaxed">
                      Ramanand Chowk, Janakpur Dham - 08, Nepal
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div className="flex items-start active:bg-accent-500/5 p-2 rounded-lg transition-colors hover:bg-accent-500/5">
                  <div className="flex-shrink-0 bg-accent-500/5 p-4 rounded-full text-accent-500 mithila-border">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400 mb-2">Voice of Hospitality</h3>
                    <div className="text-lg font-serif text-text-primary leading-relaxed">
                      <a href="tel:+97741591317" className="hover:text-accent-500 transition-colors">+977 41-591317</a><br />
                      <a href="tel:+9779765263291" className="hover:text-accent-500 transition-colors">+977 9765263291</a><br />
                      <a href="tel:+9779810685891" className="hover:text-accent-500 transition-colors">+977 9810685891</a><br />
                      <a href="tel:+9779840149464" className="hover:text-accent-500 transition-colors">+977 9840149464</a>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div className="flex items-start active:bg-accent-500/5 p-2 rounded-lg transition-colors hover:bg-accent-500/5">
                  <div className="flex-shrink-0 bg-accent-500/5 p-4 rounded-full text-accent-500 mithila-border">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400 mb-2">Digital Parchment</h3>
                    <p className="text-lg font-serif text-text-primary break-all">
                      <a href="mailto:janakpurinnhna2079@gmail.com" className="hover:text-accent-500 transition-colors">janakpurinnhna2079@gmail.com</a>
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 p-6 bg-accent-500/5 border border-accent-300/10 rounded-sm">
                <p className="text-sm italic text-text-secondary leading-relaxed">
                  "Whether by wing, wheel, or foot, your arrival is the most celebrated stroke in our daily tapestry."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer/Closing */}
        <motion.div
          className="mt-20 sm:mt-28 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mithila-divider !w-32 mx-auto mb-12" />
          <motion.h3
            className="text-2xl sm:text-3xl font-serif font-bold text-accent-500 mb-6 italic"
          >
            The Gates of Janakpur Are Open
          </motion.h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto italic">
            Experience the hospitality that has defined this sacred land for centuries. We await your presence.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FindUs;