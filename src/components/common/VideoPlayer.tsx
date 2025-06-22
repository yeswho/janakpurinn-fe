import { ArrowRight, Calendar, Car, Mail, MapPin, Phone, Projector, Utensils, Wifi } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  embedId: string;
  poster?: string;
  fallbackImage?: string;
  className?: string;
}

const VideoPlayer = ({
  embedId = "hdfmg7", 
  poster,
  fallbackImage = "",
  className = '',
}: VideoPlayerProps) => {
  const [error, setError] = useState(false);
  const [desktopId, mobileId] = embedId.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };


  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${className}`}>
      {error ? (
        <img
          src={poster || fallbackImage}
          alt="Hotel JanakpurInn"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 w-full h-full overflow-hidden md:hidden">
            <iframe
              src={`https://streamable.com/e/${mobileId || desktopId}?autoplay=1&loop=1&muted=1`}
              className="w-[120vw] h-[120vh] min-w-full min-h-full object-cover"
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              onError={() => setError(true)}
            />
          </div>
          <div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
            <iframe
              src={`https://streamable.com/e/${desktopId}?autoplay=1&loop=1&muted=1`}
              className="w-[120vw] h-[120vh] min-w-full min-h-full object-cover"
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              webkit-playsinline
              x-webkit-airplay="allow"
              onError={() => setError(true)}
            />
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex mt-2 min-h-screen px-4 py-4 sm:p-6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-12 gap-3 md:gap-12 items-center"
          >

            <motion.div 
              variants={item}
              className="lg:col-span-7 space-y-6 md:space-y-8"
            >
              <motion.div 
                variants={container}
                className="space-y-2 md:space-y-2 mb-2"
              >
                <motion.div 
                  variants={item}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white/90 text-sm font-medium">3 Years of Hospitality</span>
                </motion.div>

                <motion.h1 
                  variants={item}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-none tracking-tight"
                >
                  Hotel
                  <span className="block text-transparent bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text">
                    JanakpurInn
                  </span>
                </motion.h1>

                <motion.div 
                  variants={item}
                  className="flex items-center gap-3 text-white/90 text-lg sm:text-xl"
                >
                  <motion.div 
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full"
                    whileHover="hover"
                  >
                    <motion.div>
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <div className="font-semibold">Janakpur Dham, Janakpur</div>
                    <div className="text-white/70 text-sm sm:text-base">Dhanusha • Nepal</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Amenities Grid */}
              <motion.div 
                variants={item}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
              >
                {[
                  { icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Free WiFi" },
                  { icon: <Car className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Free Parking" },
                  { icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Restaurant" },
                  { icon: <Projector className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Hall" },
                ].map((amenity, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent-400/30 transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div 
                      className="text-accent-400 group-hover:scale-110 transition-transform duration-300"
                      whileHover="hover"
                    >
                      <motion.div>
                        {amenity.icon}
                      </motion.div>
                    </motion.div>
                    <span className="text-white/90 text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                      {amenity.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Booking Card */}
            <motion.div 
              variants={item}
              className="lg:col-span-5 flex justify-end sm:mt-0"
            >
              <motion.div 
                className="w-full max-w-md"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-xl sm:shadow-2xl">

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white/90 text-sm sm:text-base"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                      <a
                        href={`tel:${+9779810685891}`}
                        className="text-accent-500 hover:text-accent-400 font-medium underline decoration-accent-500/30 hover:decoration-accent-400 transition-all duration-200"
                      >
                        +977-9810685891
                      </a>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white/90 text-sm sm:text-base"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                      <a
                        href="mailto:janakpurinnhna2079@gmail.com"
                        className="text-accent-500 hover:text-accent-400 font-medium underline decoration-accent-500/30 hover:decoration-accent-400 transition-all duration-200 break-all"
                      >
                        janakpurinnhna2079@gmail.com
                      </a>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white/90 text-sm sm:text-base"
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                      <span>Open 24/7</span>
                    </motion.div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 sm:space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 group"
                      onClick={() => window.location.href = '/booking'}
                    >
                      <span className="text-sm sm:text-lg">Book Your Stay</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 sm:gap-3" 
                      onClick={() => window.location.href = '/rooms'}
                    >
                      <span className="text-sm sm:text-base">Explore Rooms</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>

                  {/* Special Offer Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl border border-amber-400/30"
                  >
                    <div className="text-center">
                      <div className="text-amber-400 font-bold text-xs sm:text-sm mb-1">Celebrating 3rd Aniversary</div>
                      <div className="text-white text-xs sm:text-sm">Upto 20% discounts on all rooms from 23/06/2025 till 16/08/2025*</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;