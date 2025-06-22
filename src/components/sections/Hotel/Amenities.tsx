import React from 'react';
import { motion } from 'framer-motion';
import {
  WifiIcon,
  TvIcon,
} from '@heroicons/react/24/outline';
import { FaParking, FaPlaneArrival, FaCoffee, FaSnowflake, FaLuggageCart, FaHamburger, FaClock, FaCat, FaBell, FaBriefcaseMedical } from 'react-icons/fa';

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
            Our Amenities
          </motion.h1>
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl font-serif font-medium text-text-primary">
              Experience Comfort & Convenience
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent-400 mx-auto mt-3 sm:mt-6"></div>
          </div>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={item}
              className="flex"
            >
              <div className="hotel-card p-5 sm:p-6 w-full h-full flex flex-col items-center text-center group hover:shadow-lg transition-all">
                <motion.div 
                  className="bg-accent-400/10 p-4 rounded-full mb-4 group-hover:bg-accent-400/20 transition-colors"
                  whileHover="hover"
                >
                  <motion.div 
                    className="text-accent-500"

                  >
                    {amenity.icon}
                  </motion.div>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-text-primary mb-2 sm:mb-3">
                  {amenity.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer/Closing */}
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
            Your Comfort, Our Priority
          </motion.h3>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-text-secondary max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            At Janakpur Inn, we're committed to providing all the amenities you need for a comfortable and memorable stay. 
            If you need anything during your visit, our staff is always ready to assist you.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Amenities;