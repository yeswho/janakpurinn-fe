import Room from '../sections/Hotel/Room'
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';
import { siteConfig } from '../../config/seo';

const roomsSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Janakpur Inn Rooms",
  "description": "Explore our premium rooms designed for comfort, including Heritage Apartments, Deluxe Sanctuaries, and Comfort Standard rooms.",
  "url": `${siteConfig.baseUrl}/rooms`,
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "Heritage Apartment",
        "description": "Spacious apartment with separate living area, kitchenette, and balcony.",
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": "King bed"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "Deluxe Sanctuary",
        "description": "Elegant room with premium furnishings and luxurious bathroom.",
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": "Queen bed"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "Comfort Standard",
        "description": "Cozy room with all essential amenities.",
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": "Queen bed"
        }
      }
    }
  ]
};

export default function Rooms() {
  return (
    <SEOWrapper 
      title="Our Rooms" 
      description="Discover our range of comfortable and well-equipped rooms at Janakpur Inn, from heritage apartments to standard comfort."
      canonicalUrl="/rooms"
      schema={roomsSchema}
    >
      <AnimationWrapper>
        <Room />
      </AnimationWrapper>
    </SEOWrapper>
  )
}
