import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useCreateBooking, type BookingPayload } from '../../../hooks/useBooking';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRooms: { id: string; quantity: number }[];
  roomsData: RoomType[];
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string; // Now stores full international number (e.g. "+9779841234567")
  checkIn: string;
  checkOut: string;
  specialRequests: string;
  paymentMethod: 'cash' | 'credit_card' | 'debit_card' | 'upi';
};

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  specialRequests: '',
  paymentMethod: 'cash' as 'cash',
};

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRooms,
  roomsData
}) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const { mutate: createBooking, isPending } = useCreateBooking();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Reset form when modal is opened/closed
  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormData);
      setFormErrors({});
      setSubmitSuccess(false);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handlePhoneChange = (value: string = '') => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));

    if (formErrors.phone) {
      setFormErrors(prev => ({
        ...prev,
        phone: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    } else if (formData.firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
      isValid = false;
    } else if (!/^[a-zA-Z\s\-']+$/.test(formData.firstName)) {
      errors.firstName = 'First name contains invalid characters';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    } else if (formData.lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
      isValid = false;
    } else if (!/^[a-zA-Z\s\-']+$/.test(formData.lastName)) {
      errors.lastName = 'Last name contains invalid characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation (now handled by react-phone-number-input)
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
      isValid = false;
    }

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!formData.checkIn) {
      errors.checkIn = 'Check-in date is required';
      isValid = false;
    } else {
      const checkInDate = new Date(formData.checkIn);
      checkInDate.setHours(0, 0, 0, 0);

      if (checkInDate < today) {
        errors.checkIn = 'Check-in date cannot be in the past';
        isValid = false;
      }
    }

    if (!formData.checkOut) {
      errors.checkOut = 'Check-out date is required';
      isValid = false;
    } else if (formData.checkIn) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      checkInDate.setHours(0, 0, 0, 0);
      checkOutDate.setHours(0, 0, 0, 0);

      if (checkOutDate <= checkInDate) {
        errors.checkOut = 'Check-out date must be after check-in date';
        isValid = false;
      } else if (checkOutDate < today) {
        errors.checkOut = 'Check-out date cannot be in the past';
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const bookingData: BookingPayload = {
      ...formData,
      rooms: selectedRooms,
      total: calculateTotal()
    };

    createBooking(bookingData, {
      onSuccess: (data) => {
        setSubmitSuccess(true);
        console.log(`Booking created successfully! Reference: ${data.bookingReference}`);
      },
      onError: (error) => {
        console.error('Booking failed:', error.message);
      }
    });
  };

  const calculateTotal = (): number => {
    return selectedRooms.reduce((total, item) => {
      const room = roomsData.find(r => r.id === item.id);
      return total + (room ? room.price * item.quantity : 0);
    }, 0);
  };

  const getRoomDetails = (id: string): RoomType | undefined => {
    return roomsData.find(room => room.id === id);
  };

  if (!isOpen) return null;

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
        className="hotel-card max-w-4xl w-full max-h-[95vh] overflow-y-auto bg-white rounded-b-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-text-primary">
              Complete Your Booking
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {submitSuccess ? (
            <SuccessView onClose={onClose} />
          ) : (
            <>
              <RoomSummary
                selectedRooms={selectedRooms}
                roomsData={roomsData}
                calculateTotal={calculateTotal}
                getRoomDetails={getRoomDetails}
              />

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <FormInput
                    label="First Name *"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={formErrors.firstName}
                    required
                    maxLength={50}
                  />
                  <FormInput
                    label="Last Name *"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={formErrors.lastName}
                    required
                    maxLength={50}
                  />
                  <FormInput
                    label="Email *"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={formErrors.email}
                    required
                    maxLength={100}
                  />

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Phone Number *
                    </label>
                    <div className={`react-phone-input-wrapper ${formErrors.phone ? 'error' : ''}`}>
                      <PhoneInput
                        international
                        defaultCountry="NP"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter phone number"
                        className={`w-full !px-4 !py-2 bg-primary-50 border ${formErrors.phone ? '!border-red-300' : '!border-gray-200/50'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400`}
                      />
                    </div>
                    {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                  </div>

                  <FormInput
                    label="Check-in Date *"
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    error={formErrors.checkIn}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <FormInput
                    label="Check-out Date *"
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    error={formErrors.checkOut}
                    required
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Rest of the form remains the same */}
                <div className="mb-8">
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-text-secondary mb-2">
                    Payment Method *
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-primary-50 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400"
                  >
                    <option value="cash">Cash on Arrival</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                    <option value="upi">Bank Transfer</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-text-secondary mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-2 bg-primary-50 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400"
                    placeholder="Any special requests or notes (max 500 characters)"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isPending}
                    className="px-6 py-2 border border-gray-200/50 rounded-lg text-text-primary hover:bg-primary-100/50 focus:outline-none focus:ring-2 focus:ring-accent-400/30 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn-primary px-8 py-3 disabled:opacity-70"
                  >
                    {isPending ? 'Processing...' : 'Confirm Booking'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Extracted Success View Component
const SuccessView = ({ onClose }: { onClose: () => void }) => (
  <div className="text-center py-8">
    <div className="text-accent-500 text-5xl mb-6">✓</div>
    <h3 className="text-xl font-serif font-semibold mb-3 text-text-primary">
      Booking Received!
    </h3>
    <p className="text-text-secondary mb-8">
      Thank you for the booking! We will be contacting you shortly regarding the confirmation.
    </p>
    <button
      onClick={onClose}
      className="btn-primary px-8 py-3"
    >
      Close
    </button>
  </div>
);

// Extracted Room Summary Component
const RoomSummary = ({
  selectedRooms,
  calculateTotal,
  getRoomDetails
}: {
  selectedRooms: { id: string; quantity: number }[];
  roomsData: RoomType[];
  calculateTotal: () => number;
  getRoomDetails: (id: string) => RoomType | undefined;
}) => (
  <div className="mb-8">
    <h3 className="text-lg font-serif font-medium mb-4 text-text-primary">
      Selected Rooms
    </h3>
    <div className="space-y-3">
      {selectedRooms.map(item => {
        const room = getRoomDetails(item.id);
        if (!room) return null;
        return (
          <div key={item.id} className="flex justify-between py-3 border-b border-gray-200/50">
            <div>
              <p className="font-medium text-text-primary">{room.title}</p>
              <p className="text-sm text-text-secondary">
                {item.quantity} x NPR {room.price.toLocaleString()}
              </p>
            </div>
            <p className="font-medium text-text-primary">
              NPR {(room.price * item.quantity).toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
    <div className="flex justify-between mt-6 pt-3 border-t border-gray-200/50 font-serif font-semibold text-lg">
      <span className="text-text-primary">Total:</span>
      <span className="text-accent-500">NPR {calculateTotal().toLocaleString()}</span>
    </div>
  </div>
);

// Reusable Form Input Component
const FormInput = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  error,
  required,
  min,
  maxLength,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  min?: string;
  maxLength?: number;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      min={min}
      maxLength={maxLength}
      className={`w-full px-4 py-2 bg-primary-50 border ${error ? 'border-red-300' : 'border-gray-200/50'
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:border-accent-400`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default BookingModal;