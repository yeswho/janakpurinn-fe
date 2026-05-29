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
    overview: "A majestic, multi-purpose venue designed for grand celebrations and spiritual gatherings. Videha Grand Hall is Janakpur's premier space for hosting large pilgrimage groups, holy yatra excursions, bhajan-kirtan sessions, and community satsangs. Keeping in mind the sacred traditions of yatris traveling across India and Nepal, the hall features a dedicated, fully-equipped Pure Vegetarian Kitchen (Rasoi) available for self-cooking, allowing groups to prepare clean, custom, and traditional satvik meals. With a capacity of 120+ guests, it blends the communal warmth of a traditional dharamshala with modern hotel comforts, featuring air conditioning, clean washrooms, hot water, and high-quality sound systems ideal for spiritual chanting.",
    images: ["/GrandHall1.jpeg", "/GrandHall2.jpeg"],
    eventTypes: ["Pilgrimage & Yatra Group Stay", "Satsang, Bhajan & Kirtan Gatherings", "Spiritual & Cultural Events", "Wedding Receptions & Banquets", "Corporate Conferences"],
    amenities: ["Pure Veg Kitchen (Rasoi) for Self-Cooking", "Bhajan, Kirtan & Chanting Sound System", "Spacious Group Dining Area (Bhandara)", "24/7 Hot Water & Power Backup", "Air Conditioning & Ventilation", "Clean Washrooms & Showers", "High-speed Wi-Fi", "Stage & Presentation Setup"],
    seatingArrangements: ["Banquet", "Theater", "Reception"],
    priceRange: "Contact us for custom packages",
    cateringNote: "We offer full in-house pure vegetarian catering featuring authentic Mithila cuisine. Alternatively, we proudly provide a dedicated, fully-equipped Pure Vegetarian Kitchen (Rasoi) with utilities and cooking space for groups preferring self-cooking."
  }
};
