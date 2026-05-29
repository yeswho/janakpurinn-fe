import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, CalendarDays, Utensils, Volume2, ArrowRight } from 'lucide-react';

const EventsBrief: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } }
  };

  const spaces = [
    {
      id: 'videha',
      title: 'Videha Grand Hall',
      subtitle: 'Spiritual Gatherings & Grand Celebrations',
      capacity: '120+ Guests',
      description: 'Janakpur’s premier venue designed for holy yatris, spiritual conferences, and wedding banquets. Equipped with a unique dedicated Pure Vegetarian Kitchen (Rasoi) for self-cooking and yatra-customized chanting audio setups.',
      highlights: [
        { icon: <Utensils className="w-4 h-4 text-accent-500" />, text: 'Veg Self-Cooking Kitchen' },
        { icon: <Volume2 className="w-4 h-4 text-accent-500" />, text: 'Bhajan/Kirtan Audio System' }
      ],
      image: '/GrandHall1.jpeg',
      link: '/halls/videha',
      badge: 'Spiritual & Grand'
    },
    {
      id: 'vaidehi',
      title: 'Vaidehi Boardroom',
      subtitle: 'Corporate Meetings & Focused Workshops',
      capacity: '20-25 Guests',
      description: 'An intimate, sophisticated space tailored for business strategy sessions, professional seminars, and key interviews. Melding modern conference amenities with quiet, cultural heritage.',
      highlights: [
        { icon: <Users className="w-4 h-4 text-accent-500" />, text: 'Executive U-Shape Setup' },
        { icon: <Award className="w-4 h-4 text-accent-500" />, text: 'Premium Projector & Wi-Fi' }
      ],
      image: '/SeminarHall1.jpeg',
      link: '/halls/vaidehi',
      badge: 'Executive & Private'
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
      {/* Decorative Background Motif */}
      <div className="absolute top-10 left-0 w-80 h-80 opacity-5 pointer-events-none -translate-x-1/3">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-500 fill-none">
          {[...Array(5)].map((_, i) => (
            <circle key={i} cx="50" cy="50" r={40 - i * 8} strokeWidth="0.5" />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16 sm:mb-24" variants={item}>
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30">
            Gatherings & Celebrations
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-accent-500 mb-6 tracking-tight">
            Meetings & Sacred Events
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-text-secondary max-w-2xl mx-auto">
            From modern executive boardrooms to spacious venues featuring dedicated vegetarian kitchens for holy yatris.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {spaces.map((space) => (
            <motion.div
              key={space.id}
              variants={item}
              className="group mithila-card flex flex-col justify-between overflow-hidden !p-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-accent-300/10 active:scale-[0.99]"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-primary-100">
                <div className="absolute inset-0 bg-accent-950/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={space.image}
                  alt={`${space.title} Venue`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-accent-500 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 mithila-border shadow-md">
                    {space.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-text-primary px-3 py-1.5 rounded-sm shadow-md border border-accent-300/20">
                  <Users className="w-3.5 h-3.5 text-accent-500" />
                  <span className="text-[10px] font-bold tracking-wider uppercase">{space.capacity}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-400">
                    {space.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-primary tracking-tight mb-4 group-hover:text-accent-500 transition-colors duration-300">
                  {space.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-light tracking-wide text-sm sm:text-base italic mb-6 border-l-2 border-accent-300/30 pl-4">
                  {space.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4 mb-8 mt-auto pt-4 border-t border-accent-300/10">
                  {space.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 bg-accent-500/5 px-3 py-2 rounded-sm border border-accent-300/10">
                      {h.icon}
                      <span className="text-[10px] font-bold tracking-wider uppercase text-text-secondary">
                        {h.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href={space.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-text-primary hover:text-accent-500 transition-colors duration-300 group/btn"
                  >
                    <span>View Venue Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Inquiries CTA */}
        <motion.div className="mt-16 sm:mt-24 text-center" variants={item}>
          <div className="mithila-divider !w-32 mx-auto mb-10" />
          <p className="text-sm text-text-secondary italic mb-6">
            Looking to host a bespoke event, seminar, or spiritual conference?
          </p>
          <a
            href="/contact"
            className="btn-mithila inline-flex items-center gap-2 group !px-12"
          >
            <CalendarDays className="w-4 h-4" />
            <span>Consult Event Curator</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventsBrief;
