import { motion } from 'framer-motion';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRooms } from '../../../hooks/useRooms';
import RoomCartModal from './RoomCartModal';
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
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { data: roomData, isLoading, error } = useRooms();

  const addToCart = (room: RoomType, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === room.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === room.id ? { ...item, quantity } : item
        );
      } else {
        return [...prevCart, { id: room.id, quantity }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getRoomById = (id: string) => roomData?.find(room => room.id === id);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const room = getRoomById(item.id);
      return total + (room ? room.price * item.quantity : 0);
    }, 0);
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
        <motion.div
          role="status"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hotel-card"
        >
          <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin fill-accent-500 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <p className="mt-4 text-text-secondary font-medium">Loading...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 p-4">
        <motion.div
          className="hotel-card text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-red-500/80">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-text-primary">Unable to Load Content</h2>
            <p className="mb-6 text-text-secondary">{(error as Error).message || 'Please try again later.'}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!roomData || roomData.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-6 max-w-md">
          <h2 className="text-xl font-semibold mb-2">No Rooms Available</h2>
          <p className="text-gray-600">There are currently no rooms available for booking.</p>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      {roomData.length > 0 && (
        <div className="fixed bottom-4 right-4 z-40">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCart(true)}
            className="btn-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center"
          >
            <span className="mr-2">Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
            <span>NPR {calculateTotal().toLocaleString()}</span>
          </motion.button>
        </div>
      )}

      {selectedRoom && (
        <RoomCartModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onAddToCart={addToCart}
          cartItems={cart}
        />
      )}

      {showCart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowCart(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Your Selected Rooms</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Your cart is empty</p>
              ) : (
                <>
                  <div className="divide-y divide-gray-200">
                    {cart.map(item => {
                      const room = getRoomById(item.id);
                      if (!room) return null;
                      return (
                        <div key={item.id} className="py-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{room.title}</h3>
                            <p className="text-sm text-gray-600">
                              {item.quantity} x NPR {room.price.toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-4 font-medium">
                              NPR {(room.price * item.quantity).toLocaleString()}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>NPR {calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => {
                        setShowCart(false);
                        setShowBookingModal(true);
                      }}
                      className="w-full btn-primary hover:bg-blue-700 text-white py-2 rounded-md"
                    >
                      Proceed to Booking
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Room Listing */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-1 gap-6"
      >
        {roomData.map((room) => (
          <motion.div
            key={room.id}
            variants={item}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-[420px] overflow-hidden">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="h-full w-full"
                  >
                    <SwiperSlide>
                      <img
                        src={room.images.main}
                        alt={room.title}
                        className="w-full h-full object-cover"
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

              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-serif font-semibold text-gray-800">
                    {room.title}
                  </h2>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {room.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {room.size} • {room.capacity} • {room.availableRooms} available
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  {room.description}
                </p>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-800 mb-2">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span key={amenity} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-gray-600 text-sm">Starting from</p>
                    <p className="text-accent-500 font-serif font-semibold text-xl">
                      NPR {room.price.toLocaleString()}
                      <span className="text-text-secondary text-sm font-sans"> /night</span>
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedRoom(room)}
                    className={`btn-primary text-white text-sm px-4 py-2 rounded ${room.availableRooms <= 0
                      ? 'cursor-not-allowed'
                      : 'hover:bg-blue-700'
                      }`}
                    disabled={room.availableRooms <= 0}
                  >
                    {room.availableRooms <= 0 ? 'Sold Out' : 'Select Room'}
                  </motion.button>
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