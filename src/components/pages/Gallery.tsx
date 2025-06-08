import { motion } from 'framer-motion'
import { useState } from 'react';
import HotelGallery from '../sections/Hotel/HotelGallery';
import RestaurantGallery from '../sections/Resturant/ResturantGallery';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'hotel' | 'restaurant'>('hotel');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-primary-100/30 rounded-lg p-1 border border-gray-200/50">
          <button
            onClick={() => setActiveTab('hotel')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'hotel'
                ? 'bg-white shadow-sm text-accent-500'
                : 'text-text-secondary hover:text-accent-400'
            }`}
          >
            Hotel Facilities
          </button>
          <button
            onClick={() => setActiveTab('restaurant')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'restaurant'
                ? 'bg-white shadow-sm text-accent-500'
                : 'text-text-secondary hover:text-accent-400'
            }`}
          >
            Restaurant
          </button>
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'hotel' ? <HotelGallery /> : <RestaurantGallery />}
      </motion.div>
    </motion.div>
  );
};

export default Gallery;