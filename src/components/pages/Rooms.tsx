import Room from '../sections/Hotel/Room'
import SEOWrapper from '../common/SEOWrapper';
import { AnimationWrapper } from '../common/AnimationWrapper';
import { siteConfig } from '../../config/seo';

const roomsSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Janakpur Inn Rooms",
  "description": "Explore our premium suites and rooms designed for comfort, including Double bed Luxury Apartments with A/C, Double bed + Single bed Apartments, Deluxe rooms, and 3 single bed rooms with A/C and attached washroom.",
  "url": `${siteConfig.baseUrl}/rooms`,
  "makesOffer": [
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 4500,
        "priceCurrency": "NPR"
      },
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "Double bed Luxury Apartment with A/C",
        "description": "Spacious apartment with a luxurious room with double bed, flat screen tv, sofa, tea table, attached washroom, wooden cabinets, kitchen and kitchenwares.",
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": "Double bed"
        }
      }
    },
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 4500,
        "priceCurrency": "NPR"
      },
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "1 Double bed + Single bed Apartment with A/C",
        "description": "Elegant room with premium furnishings, double bed, flat screen tv, single bed, tea table, attached washroom, wooden cabinets, kitchen and kitchenwares.",
        "bed": [
          {
            "@type": "BedDetails",
            "typeOfBed": "Double bed"
          },
          {
            "@type": "BedDetails",
            "typeOfBed": "Single bed"
          }
        ]
      }
    },
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 3500,
        "priceCurrency": "NPR"
      },
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "1 Double bed Deluxe room with A/C",
        "description": "Cozy deluxe room with all essential amenities including double bed, flat screen tv, attached washroom, wooden closet, balcony and Dressing table.",
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": "Double bed"
        }
      }
    },
    {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 3500,
        "priceCurrency": "NPR"
      },
      "itemOffered": {
        "@type": "HotelRoom",
        "name": "3 single bed room with A/C",
        "description": "A comfortable room with three single beds, flat screen tv, furniture closet and ATTACHED WASHROOM.",
        "bed": {
          "@type": "BedDetails",
          "typeOfBed": "3 Single beds"
        }
      }
    }
  ]
};

export default function Rooms() {
  return (
    <SEOWrapper 
      title="Our Rooms" 
      description="Discover our range of premium accommodations in Janakpur: Luxury Apartments, Deluxe A/C rooms, and 3 single bed rooms."
      canonicalUrl="/rooms"
      schema={roomsSchema}
    >
      <AnimationWrapper>
        <Room />
      </AnimationWrapper>
    </SEOWrapper>
  )
}
