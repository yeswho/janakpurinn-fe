import { useQuery } from '@tanstack/react-query';
import config from '../config';

export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuSubsection {
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  subsections: MenuSubsection[];
}

const fetchMenu = async (): Promise<MenuSection[]> => {
  const response = await fetch(`${config.apiBaseUrl}/menu`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useMenu = () => {
  return useQuery<MenuSection[], Error>({
    queryKey: ['menu'],
    queryFn: fetchMenu,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};