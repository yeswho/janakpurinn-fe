import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import type { HallData } from './hallData';
import EventInquiryForm from './EventInquiryForm';

interface Props {
  hall: HallData;
}

export default function HallTemplate({ hall }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header & Carousel */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-text-primary">{hall.name}</h1>
            <p className="text-lg text-text-secondary mt-2">Capacity: {hall.capacity}</p>
          </div>
          <span className="inline-block bg-accent-50 text-accent-700 px-4 py-2 rounded-full font-medium text-sm border border-accent-200 w-fit">
            {hall.priceRange}
          </span>
        </div>

        <div className="h-64 sm:h-96 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg relative group">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full h-full"
          >
            {hall.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`${hall.name} view ${idx + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-primary mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{hall.overview}</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-text-primary mb-4">Ideal For</h2>
            <div className="flex flex-wrap gap-3">
              {hall.eventTypes.map((type, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  {type}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-primary-50 border border-primary-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-2">🍽️ Catering Services</h3>
            <p className="text-gray-700">{hall.cateringNote}</p>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-serif font-semibold text-text-primary mb-4">Amenities</h2>
            <ul className="space-y-3">
              {hall.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{amenity}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-serif font-semibold text-text-primary mb-4">Seating Styles</h2>
            <ul className="space-y-3">
              {hall.seatingArrangements.map((style, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  {style}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-3xl mx-auto">
        <EventInquiryForm hallName={hall.name} />
      </div>
    </div>
  );
}
