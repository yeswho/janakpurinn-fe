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
    icon: <WifiIcon className="h-8 w-8" />,
    description: 'High-speed internet throughout the property'
  },
  {
    id: 2,
    name: 'Restaurant',
    icon: <FaHamburger className="h-8 w-8" />,
    description: 'Multi-cuisine dining experience'
  },
  {
    id: 3,
    name: 'Free Parking',
    icon: <FaParking className="h-8 w-8" />,
    description: 'Secure parking for all guests'
  },
  {
    id: 4,
    name: 'TV',
    icon: <TvIcon className="h-8 w-8" />,
    description: 'Tv rooms for entertainment'
  },
  {
    id: 5,
    name: 'Airport Shuttle',
    icon: <FaPlaneArrival className="h-8 w-8" />,
    description: 'Paid shuttle service'
  },
  {
    id: 6,
    name: 'Tea/Coffee Maker',
    icon: <FaCoffee className="h-8 w-8" />,
    description: 'In-room beverage facilities'
  },
  {
    id: 7,
    name: 'Air Conditioning',
    icon: <FaSnowflake className="h-8 w-8" />,
    description: 'Climate-controlled rooms'
  },
  {
    id: 8,
    name: 'Luggage Storage',
    icon: <FaLuggageCart className="h-8 w-8" />,
    description: 'Secure storage available'
  },
    {
        id: 9,
        name: '24/7 Reception',
        icon: <FaClock className="h-8 w-8" />,
        description: 'Always available to assist you'
    },
    {
        id: 10,
        name: 'Pet Friendly',
        icon: <FaCat className="h-8 w-8" />,
        description: 'Pets are welcome with prior notice'
    },
        {
        id: 11,
        name: 'Room Service',
        icon: <FaBell className="h-8 w-8" />,
        description: 'In-room dining available 24/7'
    },
    {
        id: 12,
        name: 'On Call Doctor',
        icon: <FaBriefcaseMedical className="h-8 w-8" />,
        description: 'Medical assistance available on request'
    }
];

const Amenities: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-primary-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
            Our Amenities
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Experience comfort and convenience with our exceptional facilities designed for your relaxation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: amenity.id * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center"
            >
              <div className="hotel-card p-6 w-full h-full flex flex-col items-center text-center group">
                <div className="bg-accent-400/10 p-4 rounded-full mb-4 group-hover:bg-accent-400/20 transition-colors">
                  <div className="text-accent-500">
                    {amenity.icon}
                  </div>
                </div>
                <h3 className="font-serif font-medium text-text-primary mb-1">
                  {amenity.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;