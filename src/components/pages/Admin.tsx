import { useState } from 'react';
import { useBookings, useCreateBooking } from '../../hooks/useBooking';

export interface BookingType {
  id: number;
  bookingReference: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  specialRequests?: string;
  paymentMethod: 'cash' | 'credit_card' | 'debit_card' | 'upi';
  total: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  rooms: {
    id: string;
    quantity: number;
  }[];
}

export interface BookingPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  specialRequests?: string;
  paymentMethod: 'cash' | 'credit_card' | 'debit_card' | 'upi';
  rooms: {
    id: string;
    quantity: number;
  }[];
  total: number;
}


export default function Admin() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Hotel Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
       
        
        <div className="hotel-card">
          <h2 className="text-2xl font-serif font-semibold mb-6">Current Bookings</h2>
          <BookingsList />
        </div>

         <div className="hotel-card">
          <h2 className="text-2xl font-serif font-semibold mb-6">Create New Booking</h2>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

function BookingsList() {
  const { data: bookings, isLoading, error } = useBookings();

  if (isLoading) return (
    <div className="flex justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-400"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">Error loading bookings: {error.message}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Detailed Booking Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
        {bookings?.map((booking) => (
          <div key={booking.id} className="bg-white shadow overflow-hidden rounded-lg border border-gray-200/50">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200/50">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Booking #{booking.bookingReference}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Created on {new Date(booking.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900">Guest Information</h4>
                <div className="mt-2 text-sm text-gray-700">
                  <p>{booking.firstName} {booking.lastName}</p>
                  <p>{booking.email}</p>
                  <p>{booking.phone}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900">Stay Details</h4>
                <div className="mt-2 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">Check-in:</span> {new Date(booking.checkIn).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-medium">Check-out:</span> {new Date(booking.checkOut).toLocaleDateString()}
                  </p>
                  {booking.specialRequests && (
                    <p>
                      <span className="font-medium">Special Requests:</span> {booking.specialRequests}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900">Rooms</h4>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  {booking.rooms.map((room, index) => (
                    <li key={index}>
                      {room.id} (Qty: {room.quantity})
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200/50">
                <div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'}`}>
                    {booking.status}
                  </span>
                </div>
                <div className="text-lg font-medium text-gray-900">
                  NPR{booking.total.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingForm() {
  const { mutate: createBooking, isPending } = useCreateBooking();
  const [formData, setFormData] = useState<BookingPayload>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    paymentMethod: 'credit_card',
    rooms: [{ id: '', quantity: 1 }],
    total: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoomChange = (index: number, field: string, value: string | number) => {
    const updatedRooms = [...formData.rooms];
    updatedRooms[index] = { ...updatedRooms[index], [field]: value };
    setFormData(prev => ({ ...prev, rooms: updatedRooms }));
  };

  const addRoom = () => {
    setFormData(prev => ({ 
      ...prev, 
      rooms: [...prev.rooms, { id: '', quantity: 1 }] 
    }));
  };

  const removeRoom = (index: number) => {
    if (formData.rooms.length > 1) {
      const updatedRooms = formData.rooms.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, rooms: updatedRooms }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createBooking(formData, {
      onSuccess: (data) => {
        alert(`Booking created successfully! Reference: ${data.bookingReference}`);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          paymentMethod: 'credit_card',
          rooms: [{ id: '', quantity: 1 }],
          total: 0
        });
      },
      onError: (error) => {
        alert(`Booking failed: ${error.message}`);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          />
        </div>

        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
            Check-In Date
          </label>
          <input
            type="date"
            name="checkIn"
            id="checkIn"
            required
            value={formData.checkIn}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          />
        </div>

        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
            Check-Out Date
          </label>
          <input
            type="date"
            name="checkOut"
            id="checkOut"
            required
            value={formData.checkOut}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          />
        </div>

        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            required
            value={formData.paymentMethod}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
          >
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cash">Cash</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Rooms</h3>
          <button
            type="button"
            onClick={addRoom}
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-accent-700 bg-accent-100 hover:bg-accent-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
          >
            Add Room
          </button>
        </div>

        {formData.rooms.map((room, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor={`roomId-${index}`} className="block text-sm font-medium text-gray-700">
                Room Type
              </label>
              <select
                id={`roomId-${index}`}
                value={room.id}
                onChange={(e) => handleRoomChange(index, 'id', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
                required
              >
                <option value="">Select a room</option>
                <option value="apt-001">Apartment 001</option>
                <option value="apt-002">Apartment 002</option>
                <option value="dlx-001">Deluxe 001</option>
                <option value="std-001">Standard 001</option>
              </select>
            </div>

            <div>
              <label htmlFor={`quantity-${index}`} className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                id={`quantity-${index}`}
                min="1"
                value={room.quantity}
                onChange={(e) => handleRoomChange(index, 'quantity', parseInt(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-500 focus:border-accent-500"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeRoom(index)}
                disabled={formData.rooms.length <= 1}
                className={`inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md ${formData.rooms.length <= 1 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-red-700 bg-red-100 hover:bg-red-200'}`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Creating...' : 'Create Booking'}
        </button>
      </div>
    </form>
  );
}