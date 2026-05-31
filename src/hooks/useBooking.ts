import { useQuery, useMutation } from '@tanstack/react-query';
import config from '../config';
import { hardcodedRooms } from './useRooms';

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

const fetchBookings = async (): Promise<BookingType[]> => {
  const response = await fetch(`${config.apiBaseUrl}/booking`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const createBooking = async (bookingData: BookingPayload): Promise<{ 
  success: boolean; 
  bookingReference: string;
  bookingId: number;
}> => {
  const checkInDate = new Date(bookingData.checkIn);
  const checkOutDate = new Date(bookingData.checkOut);
  checkInDate.setHours(0, 0, 0, 0);
  checkOutDate.setHours(0, 0, 0, 0);
  const diffTime = checkOutDate.getTime() - checkInDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const nights = diffDays > 0 ? diffDays : 1;

  const calculatedTotal = bookingData.rooms.reduce((sum, room) => {
    const roomInfo = hardcodedRooms.find((r) => r.id === room.id);
    return sum + (roomInfo?.price || 0) * room.quantity * nights;
  }, 0);

  const roomsFormatted = bookingData.rooms
    .map(room => {
      const roomInfo = hardcodedRooms.find(r => r.id === room.id);
      return `${room.quantity}x ${roomInfo?.title || 'Unknown Room'} (NPR ${roomInfo?.price || 0}/night)`;
    })
    .join('\n');

  const bookingReference = `JPI-${Date.now().toString().slice(-6)}`;

  const bookingResponse = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'booking',
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      name: `${bookingData.firstName} ${bookingData.lastName}`,
      email: bookingData.email,
      phone: bookingData.phone,
      bookingReference,
      nights,
      roomsFormatted,
      checkIn: bookingData.checkIn,
      checkOut: bookingData.checkOut,
      paymentMethod: bookingData.paymentMethod,
      specialRequests: bookingData.specialRequests,
      total: calculatedTotal
    }),
  });

  if (!bookingResponse.ok) {
    let errorMsg = 'Booking creation failed. Please try again.';
    try {
      const errorData = await bookingResponse.json();
      errorMsg = errorData.error || errorMsg;
    } catch (e) {
      if (bookingResponse.status === 404) {
        errorMsg = 'API endpoint not found (404). If running locally, please start your server using "vercel dev" instead of "npm run dev".';
      }
    }
    throw new Error(errorMsg);
  }

  return {
    success: true,
    bookingReference,
    bookingId: Date.now()
  };
};

export const useBookings = () => {
  return useQuery<BookingType[], Error>({
    queryKey: ['bookings'],
    queryFn: fetchBookings,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

export const useCreateBooking = () => {
  return useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
        console.log('Booking created successfully:', data);
    },
  });
};