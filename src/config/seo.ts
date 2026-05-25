// src/config/seo.ts

export const siteConfig = {
  siteName: "Janakpur Inn",
  defaultTitle: "Janakpur Inn | Premier Hotel & Restaurant",
  defaultDescription: "Experience comfort and authentic Mithila hospitality at Janakpur Inn. Offering premium rooms, fine dining, and event spaces near the historic Janaki Temple.",
  baseUrl: "https://janakpurinn.com", // Replace with actual URL when known
  defaultOgImage: "/assets/images/logo.png" 
};

export const defaultHotelSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  "name": "Janakpur Inn",
  "image": `${siteConfig.baseUrl}/assets/images/logo.png`,
  "description": siteConfig.defaultDescription,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ramanand Chowk",
    "addressLocality": "Janakpur",
    "addressRegion": "Madhesh Province",
    "postalCode": "45600",
    "addressCountry": "NP"
  },
  "telephone": "+977-9800000000", // Placeholder
  "email": "info@janakpurinn.com", // Placeholder
  "url": siteConfig.baseUrl,
  "starRating": {
    "@type": "Rating",
    "ratingValue": "3"
  },
  "amenities": [
    "Free Wi-Fi",
    "Restaurant",
    "Air Conditioning",
    "Room Service"
  ]
};

// Placeholders for future halls
export const hallSchemas = {
  vaidehiBoardroom: {
    "@context": "https://schema.org",
    "@type": "MeetingRoom",
    "name": "Vaidehi Boardroom",
    "description": "Intimate seminar hall perfect for focused meetings.",
    "maximumAttendeeCapacity": 25
  },
  videhaGrandHall: {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Videha Grand Hall",
    "description": "Large banquet hall ideal for weddings and grand celebrations.",
    "maximumAttendeeCapacity": 120
  }
};
