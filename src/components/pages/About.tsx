import { useState } from 'react';
import AboutUs from '../sections/Hotel/About';
import HotelGallery from '../sections/Hotel/HotelGallery';
import RestaurantGallery from '../sections/Resturant/ResturantGallery';
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';
import { siteConfig } from '../../config/seo';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Janakpur Inn",
  "description": "Learn about the history of hospitality at Janakpur Inn in Ramanand Chowk, Janakpur. Meet our dedicated team of hospitality artisans led by Satyendra Sah.",
  "url": `${siteConfig.baseUrl}/about`,
  "mainEntity": {
    "@type": "Hotel",
    "name": "Janakpur Inn",
    "employee": [
      {
        "@type": "Person",
        "name": "Satyendra Sah",
        "jobTitle": "Hotel Owner"
      },
      {
        "@type": "Person",
        "name": "Dhiraj Kumar Sah",
        "jobTitle": "General Manager"
      },
      {
        "@type": "Person",
        "name": "Manish Sah",
        "jobTitle": "Head of Housekeeping"
      },
      {
        "@type": "Person",
        "name": "Arjun Kumar Thakur",
        "jobTitle": "House Keeping in Charge"
      },
      {
        "@type": "Person",
        "name": "Ajay Thapa",
        "jobTitle": "Head Chef"
      }
    ]
  }
};

export default function About() {
  const [activeTab, setActiveTab] = useState<'hotel' | 'restaurant'>('hotel');

  return (
    <SEOWrapper 
      title="About Us & Gallery" 
      description="Learn more about Janakpur Inn, our history of hospitality, and view photos of our premium rooms, dining, and beautiful Mithila art."
      canonicalUrl="/about"
      schema={aboutSchema}
    >
      <AnimationWrapper>
        <AboutUs />
        
        {/* Gallery Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-accent-300/20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30">
              Visual Tour
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent-500 mb-6 mithila-section-title">
              Our Gallery
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto italic">
              Explore our premium rooms, authentic dining facilities, and beautiful Mithila heritage.
            </p>
          </div>

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

          <AnimationWrapper key={activeTab}>
            {activeTab === 'hotel' ? <HotelGallery /> : <RestaurantGallery />}
          </AnimationWrapper>
        </div>
      </AnimationWrapper>
    </SEOWrapper>
  );
}