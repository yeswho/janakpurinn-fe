import { useQuery } from '@tanstack/react-query';
import config from '../config';

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

const fetchRooms = async (): Promise<RoomType[]> => {
  const response = await fetch(`${config.apiBaseUrl}/rooms`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useRooms = () => {
  return useQuery<RoomType[], Error>({
    queryKey: ['rooms'],
    queryFn: fetchRooms,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};