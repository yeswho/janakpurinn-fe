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

const hardcodedAboutData: AboutData = {
  title: "About Janakpur Inn",
  subtitle: "Discover the essence of Janakpur Inn",
  sections: [
    {
      title: "Elegant Accommodations",
      content:
        "Within our boutique hotel establishment, you'll find a range of contemporary and spacious rooms tailored to your comfort needs. We offer four distinct categories: luxurious Apartments, premium Deluxe rooms, comfortable Standard rooms, and value Non A/C standard rooms – each thoughtfully furnished with modern aesthetics and local artisan touches.",
      image: "/images/rooms.jpg",
    },
    {
      title: "Prime Location",
      content:
        "Janakpur Inn is idyllically located in the peaceful enclave of Ramanand Chowk, just 15 minutes from Janakpur airport. Our location combines tranquility with convenience, placing you near sacred sites while offering easy access to the city's vibrant culture.",
      image: "/images/location.jpg",
    },
    {
      title: "Cultural Heritage",
      content:
        "Ramanand Chowk holds deep significance as a Hindu pilgrimage site linked to the Ramayana. We've designed our hotel to reflect this spiritual heritage while providing modern comforts, creating a unique blend of tradition and contemporary hospitality.",
      image: "/images/culture.jpg",
    },
  ],
  team: [
    {
      name: "Satyendra Sah",
      position: "Hotel Owner",
      bio:
        "Satyendra's vision for Janakpur Inn is to create a sanctuary that reflects the rich cultural heritage of Janakpur while providing modern comforts.",
      image: "/images/team-1.jpg",
    },
    {
      name: "Dhiraj Kumar Sah",
      position: "General Manager",
      bio:
        "Dhiraj oversees daily operations, ensuring that every guest receives the highest level of service and care.",
      image: "/images/team-1.jpg",
    },
    {
      name: "Manish Sah",
      position: "Head of Housekeeping",
      bio:
        "Manish leads our housekeeping team, ensuring that every corner of the hotel is spotless and welcoming.",
      image: "/images/team-2.jpg",
    },
    {
      name: "Ajay Thapa",
      position: "Executive Chef",
      bio:
        "Ajay brings a wealth of culinary expertise, crafting dishes that blend traditional flavors with modern techniques.",
      image: "/images/team-3.jpg",
    },
  ],
};


export const useAbout = () => {
  return { data: hardcodedAboutData, isLoading: false, isError: false, error: null };
};
