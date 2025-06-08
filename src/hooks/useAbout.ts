import { useQuery } from '@tanstack/react-query';
import config from '../config';

export interface AboutSection {
  title: string;
  content: string;
  image: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  sections: AboutSection[];
  team: TeamMember[];
}

const fetchAbout = async (): Promise<AboutData> => {
  const response = await fetch(`${config.apiBaseUrl}/about`);
  if (!response.ok) {
    throw new Error('Failed to fetch About page data');
  }
  return response.json();
};

export const useAbout = () => {
  return useQuery<AboutData, Error>({
    queryKey: ['about'],
    queryFn: fetchAbout,
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
};
