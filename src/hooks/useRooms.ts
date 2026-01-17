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

const hardcodedRooms: RoomType[] = [
  {
    id: 'apt-001',
    title: 'Double bed Apartment with A/C',
    category: 'Apartment',
    description: 'Spacious apartment with a luxurious room with double bed, flat screen tv, sofa, tea table, attached washroom, wooden cabinets, kitchen and kitchenwares with views of Ramanand Chowk.',
    price: 4500,
    size: '650 sq.ft',
    capacity: '2 Adults',
    amenities: ['Double bed', 'Kitchenette', 'Smart TV', 'Free WiFi', 'Room service', 'Air conditioning', 'Daily housekeeping', 'Silent neighborhood', '24 hr running water'],
    images: {
      main: '/images/rooms/apartment.jpg',
      gallery: ['https://i.ibb.co/5NP0MD1/Double-Bed-Apt.jpg', 'https://i.ibb.co/MDq7GsHH/Double-Bed-Apt4.jpg', 'https://i.ibb.co/rRZr9G4Z/Double-Bed-Apt3-2.jpg'],
    },
    availableRooms: 4,
  },
  {
    id: 'apt-002',
    title: '1 Double bed + Single bed Apartment with A/C',
    category: 'Apartment',
    description: 'Elegant room with premium furnishings, luxurious bathroom with shower. Features a double bed, flat screen tv, single bed, tea table, attached washroom, wooden cabinets, kitchen and kitchenwares.',
    price: 4500,
    size: '400 sq.ft',
    capacity: '3 Adults',
    amenities: ['Double bed', 'Single bed', '24 hr running water', 'Smart TV', 'Free WiFi', 'Mini fridge', 'Silent neighborhood', 'Kitchenette'],
    images: {
      main: '/images/rooms/deluxe.jpg',
      gallery: ['/images/rooms/deluxe-1.jpg', '/images/rooms/deluxe-2.jpg'],
    },
    availableRooms: 6,
  },
  {
    id: 'dlx-001',
    title: '1 Double bed Deluxe room with A/C',
    category: 'Deluxe',
    description: 'Cozy room with all essential amenities with a double bed, flat screen tv, attached washroom, wooden closet, balcony and Dressing table.',
    price: 3500,
    size: '300 sq.ft',
    capacity: '2 Adults',
    amenities: ['Double bed', 'Smart TV', 'Free WiFi', '24 hr running water', 'Daily housekeeping', 'Balcony', 'Air conditioning', 'Room service'],
    images: {
      main: '/images/rooms/standard.jpg',
      gallery: ['/images/rooms/standard-1.jpg', '/images/rooms/standard-2.jpg'],
    },
    availableRooms: 8,
  },
  {
    id: 'std-001',
    title: '1 Double bed Standard room with A/C',
    category: 'Standard',
    description: 'Standard option with a double bed, flat screen tv, attached washroom, furniture closet,washroom and Dressing table',
    price: 3000,
    size: '250 sq.ft',
    capacity: '2 Adults',
    amenities: ['Double beds', 'Air conditioning', 'Free WiFi', 'Daily housekeeping', 'Room service', 'Silent neighborhood', '24 hr running water'],
    images: {
      main: '/images/rooms/non-ac.jpg',
      gallery: ['/images/rooms/non-ac-1.jpg'],
    },
    availableRooms: 5,
  },
  {
    id: 'nac-001',
    title: '1 single bed room NON-A/C',
    category: 'Non A/C',
    description: 'A comfortable room with a single bed, flat screen tv, furniture closet (NON ATTACHED WASHROOM)',
    price: 1200,
    size: '250 sq.ft',
    capacity: '1 Adult',
    amenities: ['Single beds', 'Ceiling fan', 'Free WiFi', 'Daily housekeeping', 'Room service', 'Silent neighborhood', '24 hr running water'],
    images: {
      main: '/images/rooms/non-ac.jpg',
      gallery: ['/images/rooms/non-ac-1.jpg'],
    },
    availableRooms: 5,
  },
  {
    id: 'nac-002',
    title: '2 single bed room NON-A/C',
    category: 'Non A/C',
    description: 'A comfortable room with a single bed, flat screen tv, furniture closet (NON ATTACHED WASHROOM)',
    price: 2000,
    size: '250 sq.ft',
    capacity: '2 Adults',
    amenities: ['2 Single beds', 'Ceiling fan', 'Free WiFi', 'Daily housekeeping', 'Room service', 'Silent neighborhood', '24 hr running water'],
    images: {
      main: '/images/rooms/non-ac.jpg',
      gallery: ['/images/rooms/non-ac-1.jpg'],
    },
    availableRooms: 5,
  },
  {
    id: 'std-002',
    title: '4 single bed room with A/C',
    category: 'Standard',
    description: 'A comfortable room with a single bed, flat screen tv, furniture closet (NON ATTACHED WASHROOM)',
    price: 3000,
    size: '250 sq.ft',
    capacity: '4 Adults',
    amenities: ['4 Single beds', 'Ceiling fan', 'Free WiFi', 'Daily housekeeping', 'Room service', 'Silent neighborhood', '24 hr running water'],
    images: {
      main: '/images/rooms/non-ac.jpg',
      gallery: ['/images/rooms/non-ac-1.jpg'],
    },
    availableRooms: 5,
  },
];

export const useRooms = () => {
  return { data: hardcodedRooms, isLoading: false, isError: false, error: null };
};