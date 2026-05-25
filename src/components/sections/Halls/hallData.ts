// src/components/sections/Halls/hallData.ts

export interface HallData {
  id: string;
  name: string;
  capacity: string;
  overview: string;
  images: string[];
  eventTypes: string[];
  amenities: string[];
  seatingArrangements: string[];
  priceRange: string;
  cateringNote: string;
}

export const halls: Record<string, HallData> = {
  vaidehi: {
    id: "vaidehi",
    name: "Vaidehi Boardroom",
    capacity: "20-25 Guests",
    overview: "An intimate, elegantly designed seminar hall perfect for focused corporate meetings, strategy sessions, and small workshops. Named in honor of the local heritage, it provides a quiet and productive atmosphere.",
    images: ["/SeminarHall1.jpeg", "/SeminarHall2.jpeg"],
    eventTypes: ["Corporate Meetings", "Board Meetings", "Small Workshops", "Interviews"],
    amenities: ["High-speed Wi-Fi", "Projector & Screen", "Air Conditioning", "Whiteboard & Markers"],
    seatingArrangements: ["U-Shape", "Boardroom", "Classroom"],
    priceRange: "Contact us for custom packages",
    cateringNote: "In-house catering available for tea/coffee breaks and working lunches from our restaurant."
  },
  videha: {
    id: "videha",
    name: "Videha Grand Hall",
    capacity: "120+ Guests",
    overview: "Our largest event space, the Videha Grand Hall is a majestic venue designed for grand celebrations. Whether it's a wedding reception or a large corporate conference, this hall offers the space and grandeur needed for unforgettable events.",
    images: ["/GrandHall1.jpeg", "/GrandHall2.jpeg"],
    eventTypes: ["Wedding Receptions", "Large Banquets", "Corporate Conferences", "Gala Dinners"],
    amenities: ["High-speed Wi-Fi", "Premium Audio System", "Stage Setup", "Air Conditioning"],
    seatingArrangements: ["Banquet", "Theater", "Reception"],
    priceRange: "Contact us for custom packages",
    cateringNote: "Full banquet catering available, featuring authentic Mithila cuisine and international favorites."
  }
};
