import { CheckCircle, Clock, Phone, Utensils } from 'lucide-react';
import { useState } from 'react';
import RestaurantReservation from '../Hotel/ResturantReservation';

const Reservation = () => {
  const [isHovered, setIsHovered] = useState(false);
const [isReservationOpen, setIsReservationOpen] = useState(false);

  const restaurantData = {
    name: "Hotel Restaurant",
    description: "We are pleased to offer our restaurant services to in-house guests of the hotel. To ensure the best possible dining experience for all guests, we require that any outside guests who wish to dine at the restaurant must make a reservation in advance of their visit. This allows us to accommodate everyone who wishes to enjoy our food and provides a more pleasant experience for all guests. We thank you for your understanding and look forward to welcoming you to the restaurant.",
    contact: "+977 41-591317",
    note: "Note: Reservation is only necessary for the guests who are NOT staying in the hotel.",
    hours: {
      breakfast: "7:00 AM - 11:00 AM",
      lunch: "12:00 PM - 3:00 PM",
      dinner: "6:00 PM - 10:00 PM"
    },
    features: [
      "Locally-sourced ingredients",
      "Seasonal menu",
      "Fresh daily specials",
      "Dietary accommodations available"
    ]
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
          style={{ filter: 'brightness(0.85) saturate(0.9)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100/40 via-primary-50/60 to-accent-300/20" />
      </div>

      <div className="relative z-10 py-14 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="hotel-card max-w-none">
            <div className="mb-10">
              <p className="text-lg text-text-primary leading-relaxed text-center">
                {restaurantData.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-primary-100/50 rounded-lg p-6 border border-gray-200/30 hover:bg-primary-100/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-accent-400/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-serif text-accent-500 font-medium">Dining Hours</h3>
                </div>
                <div className="space-y-3">
                  {Object.entries(restaurantData.hours).map(([meal, time]) => (
                    <div key={meal} className="flex justify-between items-center py-2 border-b border-gray-200/40 last:border-b-0">
                      <span className="text-text-primary capitalize font-medium">{meal}</span>
                      <span className="text-text-secondary font-semibold bg-white/60 px-3 py-1 rounded-md text-sm">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-100/50 rounded-lg p-6 border border-gray-200/30 hover:bg-primary-100/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-accent-400/20 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-serif text-accent-500 font-medium">Our Features</h3>
                </div>
                <div className="space-y-3">
                  {restaurantData.features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 mt-2 group-hover:bg-accent-500 transition-colors duration-200"></div>
                      <span className="text-text-primary group-hover:text-text-primary transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="divider" />

            <div className="text-center">
              <button
                className={`btn-primary inline-flex items-center space-x-2 transform transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setIsReservationOpen(true)
                }
              >
                <Utensils className="w-5 h-5" />
                <span>Make a Reservation</span>
              </button>

              <div className="mt-8 p-4 bg-accent-300/10 border border-accent-300/30 rounded-lg">
                <p className="text-text-secondary italic text-sm">
                  {restaurantData.note}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center space-x-2 text-text-secondary">
                <Phone className="w-4 h-4 text-accent-500" />
                <span>Contact us on</span>
                <a
                  href={`tel:${restaurantData.contact}`}
                  className="text-accent-500 hover:text-accent-400 font-medium underline decoration-accent-500/30 hover:decoration-accent-400 transition-all duration-200"
                >
                  {restaurantData.contact}
                </a>
                <span>for further details.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RestaurantReservation
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
};

export default Reservation;