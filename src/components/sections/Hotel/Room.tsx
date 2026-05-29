import { motion } from 'framer-motion';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRooms } from '../../../hooks/useRooms';
import BookingModal from './BookingModal';

export interface RoomType {
  id: string;
  title: string;
  category: 'Apartment' | 'Deluxe' | 'Standard' | 'Non A/C';
  description: string;
  price: number;
  size: string;
  capacity: string;
  amenities: string[];
  images: {
    main: string;
    gallery: string[];
  };
  availableRooms: number;
}

interface CartItem {
  id: string;
  quantity: number;
}

const Rooms: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { data: roomData, isLoading, error } = useRooms();

  const handleBookStay = (room: RoomType) => {
    setCart([{ id: room.id, quantity: 1 }]);
    setShowBookingModal(true);
  };

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          role="status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-12 border-t-2 border-accent-500 rounded-full animate-spin mb-4" />
          <p className="text-text-secondary font-serif italic">Loading Sanctuary...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="text-center max-w-md">
            <h2 className="text-3xl font-serif mb-4 text-text-primary">Unable to Load Content</h2>
            <p className="mb-8 text-text-secondary italic">{(error as Error).message || 'Please try again later.'}</p>
            <button onClick={() => window.location.reload()} className="btn-mithila">Refresh Page</button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24"
    >
      <div className="text-center mb-24 sm:mb-32">
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30"
        >
            The Collection
        </motion.div>
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl font-serif text-text-primary mb-8"
        >
            Suites & Sanctuaries
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-text-secondary italic text-lg sm:text-xl"
        >
            Discover meticulously designed spaces where traditional Mithila artistry meets absolute serenity.
        </motion.p>
      </div>

      {/* Room Listing */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16 sm:space-y-24"
      >
        {roomData?.map((room) => (
          <motion.div
            key={room.id}
            variants={item}
            className="group relative max-w-5xl mx-auto"
          >
            <div className="flex flex-col">
              {/* 1. Compact Header */}
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-baseline gap-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-text-primary tracking-tight">
                  {room.title}
                </h2>
                <div className="text-[9px] font-bold text-accent-400 uppercase tracking-[0.3em] border-b border-accent-300/20 pb-1">
                  {room.category}
                </div>
              </div>

              {/* 2. Unified Middle Row (Metadata) */}
              <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[9px] font-bold text-text-secondary uppercase tracking-[0.2em] opacity-70">
                <span>{room.size}</span>
                <span className="w-0.5 h-0.5 bg-accent-300 rounded-full" />
                <span>{room.capacity}</span>
                <span className="w-0.5 h-0.5 bg-accent-300 rounded-full" />
                <span className="text-accent-500">{room.availableRooms} Total</span>
              </div>

              {/* 3. Bottom Section - Compact Split */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left Column - Compact Image */}
                <div className="lg:w-1/2 w-full relative">
                  <div className="relative aspect-[4/3] overflow-hidden shadow-lg rounded-sm bg-primary-100">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="h-full w-full look-around-swiper"
                    >
                      <SwiperSlide>
                        <img
                          src={room.images.main}
                          alt={room.title}
                          className="w-full h-full object-cover transition-transform duration-[2s] group-active:scale-105"
                        />
                      </SwiperSlide>
                      {room.images.gallery.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={img}
                            alt={`${room.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* Right Column - Refined Details */}
                <div className="lg:w-1/2 flex flex-col pt-2">
                  <p className="text-text-secondary text-base leading-relaxed font-light tracking-wide italic mb-8 border-l border-accent-300/20 pl-4">
                    {room.description}
                  </p>

                  {/* Compact Amenities */}
                  <div className="mb-8 grid grid-cols-2 gap-y-3">
                      {room.amenities.slice(0, 4).map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2 text-[10px] text-text-secondary uppercase tracking-[0.1em] font-medium">
                          <div className="w-1 h-1 border border-accent-300 rotate-45" />
                          {amenity}
                        </div>
                      ))}
                  </div>

                  {/* Compact Pricing & CTA */}
                  <div className="mt-auto flex items-center justify-between gap-6 pt-6 border-t border-accent-300/10">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-accent-400 mb-1">Nightly</p>
                      <p className="text-2xl font-serif text-text-primary leading-none">
                        NPR {room.price.toLocaleString()}
                      </p>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: 'var(--color-accent-500)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBookStay(room)}
                      className={`btn-mithila w-full !bg-text-primary transition-all duration-500 ${room.availableRooms <= 0
                        ? 'opacity-20 cursor-not-allowed grayscale'
                        : ''
                        }`}
                      disabled={room.availableRooms <= 0}
                    >
                      {room.availableRooms <= 0 ? 'Closed' : 'Book Stay'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {showBookingModal && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => {
            setShowBookingModal(false)
            setCart([]);
          }}
          selectedRooms={cart}
          roomsData={roomData}
        />
      )}
    </motion.div>
  );
};

export default Rooms;
