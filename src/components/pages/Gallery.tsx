import { useState } from 'react';
import HotelGallery from '../sections/Hotel/HotelGallery';
import RestaurantGallery from '../sections/Resturant/ResturantGallery';
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'hotel' | 'restaurant'>('hotel');

  return (
    <SEOWrapper 
      title="Gallery" 
      description="View photos of our premium rooms, fine dining restaurant, and beautiful Mithila art at Janakpur Inn."
      canonicalUrl="/gallery"
    >
      <AnimationWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        <AnimationWrapper
          key={activeTab}
        >
          {activeTab === 'hotel' ? <HotelGallery /> : <RestaurantGallery />}
        </AnimationWrapper>
      </AnimationWrapper>
    </SEOWrapper>
  );
};

export default Gallery;