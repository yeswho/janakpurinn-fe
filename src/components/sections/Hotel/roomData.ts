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

export const roomData: RoomType[] = [
  {
    id: 'apt-001',
    title: 'Heritage Apartment',
    category: 'Apartment',
    description: 'Spacious apartment with separate living area, kitchenette, and balcony offering views of Ramanand Chowk. Blends traditional Janakpur motifs with modern comforts.',
    price: 12000,
    size: '650 sq.ft',
    capacity: '3 Adults',
    amenities: ['King bed', 'Kitchenette', 'Balcony', 'Smart TV', 'Free WiFi', 'Daily housekeeping'],
    images: {
      main: '/images/rooms/apartment.jpg',
      gallery: [
        '/images/rooms/apartment-1.jpg',
        '/images/rooms/apartment-2.jpg',
        '/images/rooms/apartment-3.jpg'
      ]
    },
    availableRooms: 4
  },
  {
    id: 'dlx-001',
    title: 'Deluxe Sanctuary',
    category: 'Deluxe',
    description: 'Elegant room with premium furnishings, luxurious bathroom with rain shower, and workspace. Features handcrafted wooden furniture from local artisans.',
    price: 8500,
    size: '400 sq.ft',
    capacity: '2 Adults',
    amenities: ['Queen bed', 'Work desk', 'Rain shower', 'Smart TV', 'Free WiFi', 'Mini fridge'],
    images: {
      main: '/images/rooms/deluxe.jpg',
      gallery: [
        '/images/rooms/deluxe-1.jpg',
        '/images/rooms/deluxe-2.jpg'
      ]
    },
    availableRooms: 6
  },
  {
    id: 'std-001',
    title: 'Comfort Standard',
    category: 'Standard',
    description: 'Cozy room with all essential amenities. Thoughtfully designed with local textiles and comfortable bedding for a restful stay.',
    price: 6500,
    size: '300 sq.ft',
    capacity: '2 Adults',
    amenities: ['Queen bed', 'Smart TV', 'Free WiFi', 'Work desk', 'Daily housekeeping'],
    images: {
      main: '/images/rooms/standard.jpg',
      gallery: [
        '/images/rooms/standard-1.jpg',
        '/images/rooms/standard-2.jpg'
      ]
    },
    availableRooms: 8
  },
  {
    id: 'nac-001',
    title: 'Classic Room',
    category: 'Non A/C',
    description: 'Budget-friendly option with ceiling fan and natural ventilation. Perfect for pilgrims and travelers who prefer traditional cooling methods.',
    price: 4500,
    size: '250 sq.ft',
    capacity: '2 Adults',
    amenities: ['Twin beds', 'Ceiling fan', 'Free WiFi', 'Daily housekeeping'],
    images: {
      main: '/images/rooms/non-ac.jpg',
      gallery: [
        '/images/rooms/non-ac-1.jpg'
      ]
    },
    availableRooms: 5
  }
];