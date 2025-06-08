import { useQuery, useMutation } from '@tanstack/react-query';
import config from '../config';

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
  const roomIds = bookingData.rooms.map(room => room.id).join(',');
  const roomsResponse = await fetch(`${config.apiBaseUrl}/rooms?ids=${roomIds}`);
  
  if (!roomsResponse.ok) {
    throw new Error('Failed to fetch room prices');
  }

  const rooms = await roomsResponse.json();
  const calculatedTotal = bookingData.rooms.reduce((sum, room) => {
    const roomInfo = rooms.find((r: any) => r.id === room.id);
    return sum + (roomInfo?.price || 0) * room.quantity;
  }, 0);

  const bookingResponse = await fetch(`${config.apiBaseUrl}/booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...bookingData,
      total: calculatedTotal
    }),
  });

  if (!bookingResponse.ok) {
    const errorData = await bookingResponse.json();
    throw new Error(errorData.error || 'Booking creation failed');
  }

  return bookingResponse.json();
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