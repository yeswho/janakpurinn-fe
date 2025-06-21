import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import config from '../config';

export interface Booking {
  id: string;
  booking_reference: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  check_in: string;
  check_out: string;
  special_requests?: string;
  payment_method: string;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  created_at: string;
  rooms: {
    id: string;
    quantity: number;
    price?: number;
    title?: string;
    category?: string;
  }[];
}

interface PaginatedBookings {
  data: Booking[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

const fetchBookings = async (page: number, limit: number, status?: string): Promise<PaginatedBookings> => {
  const token = localStorage.getItem('authToken');
  const url = new URL(`${config.apiBaseUrl}/admin/bookings`);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  if (status) url.searchParams.append('status', status);

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!response.ok) throw new Error('Failed to fetch bookings');
  return response.json();
};

const fetchBooking = async (id: string): Promise<Booking> => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${config.apiBaseUrl}/admin/bookings/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!response.ok) throw new Error('Failed to fetch booking');
  return response.json();
};

const updateBookingStatus = async ({ id, status }: { id: string; status: string }): Promise<void> => {
  const token = localStorage.getItem('authToken');
  const response = await fetch(`${config.apiBaseUrl}/admin/bookings/${id}/status`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
  
  if (!response.ok) throw new Error('Failed to update booking status');
};

export const useAdminBookings = (page: number, limit: number, status?: string) => {
  return useQuery<PaginatedBookings, Error>({
    queryKey: ['admin', 'bookings', { page, limit, status }],
    queryFn: () => fetchBookings(page, limit, status),
  });
};

export const useAdminBooking = (id: string) => {
  return useQuery<Booking, Error>({
    queryKey: ['admin', 'booking', id],
    queryFn: () => fetchBooking(id),
    enabled: !!id,
  });
};

export const useUpdateBookingStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation<void, Error, { id: string; status: string }>({
    mutationFn: updateBookingStatus,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'bookings'] });
      queryClient.invalidateQueries({ queryKey: ['admin', 'booking', variables.id] });
    },
  });
};