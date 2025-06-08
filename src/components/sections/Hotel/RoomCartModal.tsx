import React, { useState } from 'react';
import { motion } from 'framer-motion';


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

interface RoomCartModalProps {
  room: RoomType;
  onClose: () => void;
  onAddToCart: (room: RoomType, quantity: number) => void;
  cartItems: { id: string; quantity: number }[];
}

const RoomCartModal: React.FC<RoomCartModalProps> = ({ 
  room, 
  onClose, 
  onAddToCart,
  cartItems 
}) => {
  const currentCartItem = cartItems.find(item => item.id === room.id);
  const [quantity, setQuantity] = useState(currentCartItem?.quantity || 1);

  const handleAddToCart = () => {
    onAddToCart(room, quantity);
    onClose();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl max-w-md w-full shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-serif font-semibold text-text-primary">
              {currentCartItem ? 'Update' : 'Add'} {room.title}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-300 hover:text-accent-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Price per night:</span>
              <span className="font-medium text-accent-500">NPR {room.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Available:</span>
              <span>{room.availableRooms} rooms</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Quantity
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-3 border border-gray-200/70 rounded-lg bg-white/50 focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400 outline-none transition-all"
            >
              {[...Array(Math.min(room.availableRooms, 10)).keys()].map(num => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-primary-100/30 p-4 rounded-lg mb-6 border border-gray-200/30">
            <div className="flex justify-between font-serif font-semibold text-lg">
              <span className="text-text-primary">Total:</span>
              <span className="text-accent-500">NPR {(room.price * quantity).toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300/50 rounded-lg text-sm font-medium text-text-secondary hover:bg-gray-100/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="px-6 py-2 bg-gradient-to-b from-accent-400 to-accent-500 text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              {currentCartItem ? 'Update Selection' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RoomCartModal;