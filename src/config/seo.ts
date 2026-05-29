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
  "telephone": "+977-9810685891",
  "email": "janakpurinnhna2079@gmail.com",
  "url": siteConfig.baseUrl,
  "starRating": {
    "@type": "Rating",
    "ratingValue": "3"
  },
  "amenities": [
    "Free Wi-Fi",
    "Restaurant",
    "Air Conditioning",
    "Room Service",
    "3rd-Party Gym Option",
    "EV AC Charging Port"
  ],
  "employee": [
    {
      "@type": "Person",
      "name": "Satyendra Sah",
      "jobTitle": "Hotel Owner"
    },
    {
      "@type": "Person",
      "name": "Dhiraj Kumar Sah",
      "jobTitle": "General Manager"
    },
    {
      "@type": "Person",
      "name": "Manish Sah",
      "jobTitle": "Head of Housekeeping"
    },
    {
      "@type": "Person",
      "name": "Arjun Kumar Thakur",
      "jobTitle": "House Keeping in Charge"
    },
    {
      "@type": "Person",
      "name": "Ajay Thapa",
      "jobTitle": "Head Chef"
    }
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
  videhaGrandHall: [
    {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "name": "Videha Grand Hall - Janakpur Inn",
      "description": "Janakpur Dham's premier group stay hall for spiritual yatris, pilgrimage tour groups (Ramayana Circuit), and large family gatherings. Features a dedicated, fully-equipped pure vegetarian community kitchen (Rasoi) for self-cooking, premium bhajan-kirtan sound system, stage, air conditioning, and a comfortable capacity for 120+ guests.",
      "url": `${siteConfig.baseUrl}/halls/videha`,
      "telephone": "+977-9810685891",
      "image": `${siteConfig.baseUrl}/GrandHall1.jpeg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ramanand Chowk",
        "addressLocality": "Janakpur",
        "addressRegion": "Madhesh Province",
        "postalCode": "45600",
        "addressCountry": "NP"
      },
      "maximumAttendeeCapacity": 120,
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Pure Vegetarian Community Kitchen (Rasoi) for Self-Cooking",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Bhajan, Kirtan & Spiritual Chanting Sound System",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Group Dining and Bhandara Sharing Area",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Air Conditioning & Power Backup",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "24/7 Hot Water & Clean Washrooms",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "High-Speed Wi-Fi & Comfortable Bedding",
          "value": true
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Janakpur Inn allow self-cooking for yatra and pilgrimage groups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Janakpur Inn features a dedicated, fully-equipped Pure Vegetarian Kitchen (Rasoi) specifically for yatra and pilgrimage groups staying in the Videha Grand Hall. The kitchen includes complete utensils, gas stoves, and clean prep areas so groups can prepare their own traditional satvik food."
          }
        },
        {
          "@type": "Question",
          "name": "Is there space for spiritual chanting, bhajan, kirtan, or satsang?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Videha Grand Hall is custom-designed for spiritual groups. It offers a large elevated stage setup, excellent acoustics, and a premium audio-visual system perfect for conducting morning-evening prayers, chanting, bhajan-kirtans, and community satsangs."
          }
        },
        {
          "@type": "Question",
          "name": "How many pilgrims or guests can stay in the Videha Grand Hall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Videha Grand Hall is a very large facility that comfortably accommodates groups of 120+ guests. It serves as a modern, premium alternative to traditional dharamshalas, offering air conditioning, multiple clean toilets, 24/7 hot water, and comfortable sleeping arrangements."
          }
        },
        {
          "@type": "Question",
          "name": "Is the self-cooking kitchen strictly vegetarian?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the group self-cooking kitchen facility is strictly pure vegetarian (Sattvik-friendly) to respect the religious and spiritual sentiments of all pilgrimage groups visiting the holy city of Janakpur Dham."
          }
        }
      ]
    }
  ]
};
