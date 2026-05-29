import React from 'react';
import { motion } from 'framer-motion';
import {
  WifiIcon,
  TvIcon,
} from '@heroicons/react/24/outline';
import { FaParking, FaPlaneArrival, FaCoffee, FaSnowflake, FaLuggageCart, FaHamburger, FaClock, FaCat, FaBell, FaBriefcaseMedical, FaDumbbell, FaPlug } from 'react-icons/fa';

interface Amenity {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const amenities: Amenity[] = [
  {
    id: 1,
    name: 'Free WiFi',
    icon: <WifiIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'High-speed internet throughout the property'
  },
  {
    id: 2,
    name: 'Restaurant',
    icon: <FaHamburger className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Multi-cuisine dining experience'
  },
  {
    id: 3,
    name: 'Free Parking',
    icon: <FaParking className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Secure parking for all guests'
  },
  {
    id: 4,
    name: 'TV',
    icon: <TvIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'TV rooms for entertainment'
  },
  {
    id: 5,
    name: 'Airport Shuttle',
    icon: <FaPlaneArrival className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Paid shuttle service'
  },
  {
    id: 6,
    name: 'Tea/Coffee Maker',
    icon: <FaCoffee className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'In-room beverage facilities'
  },
  {
    id: 7,
    name: 'Air Conditioning',
    icon: <FaSnowflake className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Climate-controlled rooms'
  },
  {
    id: 8,
    name: 'Luggage Storage',
    icon: <FaLuggageCart className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Secure storage available'
  },
  {
    id: 9,
    name: '24/7 Reception',
    icon: <FaClock className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Always available to assist you'
  },
  {
    id: 10,
    name: 'Pet Friendly',
    icon: <FaCat className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Pets are welcome with prior notice'
  },
  {
    id: 11,
    name: 'Room Service',
    icon: <FaBell className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'In-room dining available 24/7'
  },
  {
    id: 12,
    name: 'On Call Doctor',
    icon: <FaBriefcaseMedical className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Medical assistance available on request'
  },
  {
    id: 13,
    name: '3rd-Party Gym Option',
    icon: <FaDumbbell className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'Access to premium nearby fitness & gym facilities'
  },
  {
    id: 14,
    name: 'EV AC Charging Port',
    icon: <FaPlug className="h-8 w-8 sm:h-10 sm:w-10" />,
    description: 'AC power charging port available for electric vehicles'
  }
];

const Amenities: React.FC = () => {
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
      {/* Artisanal Background Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none -translate-y-1/2 translate-x-1/2">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-accent-500">
           <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20 sm:mb-28"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30"
          >
              World-Class Service
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-500 mb-8 tracking-tight mithila-section-title"
          >
            Our Amenities
          </motion.h1>
          <p className="text-lg sm:text-xl font-serif italic text-text-secondary max-w-2xl mx-auto">
            Experience the perfect blend of tradition and modern comfort.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={item}
              className="flex"
            >
              <div className="mithila-card !p-8 w-full h-full flex flex-col items-center text-center transition-all duration-500 active:rotate-1 active:shadow-2xl">
                <motion.div 
                  className="bg-accent-500/5 p-5 rounded-full mb-6 transition-all duration-500 mithila-border active:bg-accent-500 active:text-white"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {amenity.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-serif font-bold text-accent-500 mb-3 active:scale-105 transition-transform">
                  {amenity.name}
                </h3>
                <div className="w-8 h-0.5 bg-accent-300 opacity-20 mb-4 transition-all duration-500" />
                <p className="text-sm text-text-secondary leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer/Closing */}
        <motion.div
          className="mt-20 sm:mt-28 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mithila-divider !w-24 mx-auto mb-10" />
          <motion.h3
            className="text-2xl sm:text-3xl font-serif font-bold text-accent-500 mb-4 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Comfort, Our Priority
          </motion.h3>
          <motion.p
            className="text-lg text-text-secondary max-w-3xl mx-auto italic"
          >
            Every detail is curated to ensure your stay is as enriching as it is comfortable.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Amenities;