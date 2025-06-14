import { ArrowRight, Calendar, Car, Mail, MapPin, Phone, Projector, Utensils, Wifi } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  fallbackImage?: string;
  className?: string;
}

const VideoPlayer = ({
  src = "",
  poster,
  fallbackImage = "",
  className = '',
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !error) {
      video.addEventListener('error', () => setError(true));

      return () => {
        video.removeEventListener('error', () => setError(true));
      };
    }
  }, [src, error]);

  const getVideoType = (url: string) => {
    const ext = url.split('.').pop()?.toLowerCase();
    return ext === 'webm' ? 'video/webm' : ext === 'ogg' ? 'video/ogg' : 'video/mp4';
  };

  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${className}`}>
      {/* Video Background */}
      {error ? (
        <img
          src={poster || fallbackImage}
          alt="Hotel JanakpurInn"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-linear"
          autoPlay
          muted
          loop
          playsInline
          poster={poster || fallbackImage}
        >
          <source src={src} type={getVideoType(src)} />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen p-6">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content - Main Hero */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Hotel Name & Rating */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white/90 text-sm font-medium">3 Years of Hospitality</span>
                </div>

                <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  Hotel
                  <span className="block text-transparent bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text">
                    JanakpurInn
                  </span>
                </h1>

                <div className="flex items-center gap-3 text-white/90 text-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Janakpur Dham, Janakpur</div>
                    <div className="text-white/70 text-base">Dhanusha • Nepal</div>
                  </div>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Wifi className="w-6 h-6" />, label: "Free WiFi" },
                  { icon: <Car className="w-6 h-6" />, label: "Free Parking" },
                  { icon: <Utensils className="w-6 h-6" />, label: "Restaurant" },
                  { icon: <Projector className="w-6 h-6" />, label: "Hall" },
                ].map((amenity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent-400/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-accent-400 group-hover:scale-110 transition-transform duration-300">
                      {amenity.icon}
                    </div>
                    <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Booking Card */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl">
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-white/90">
                      <Phone className="w-5 h-5 text-accent-400" />
                      <span>+977-9765263291</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Mail className="w-5 h-5 text-accent-400" />
                      <span>janakpurinnhna2079@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Calendar className="w-5 h-5 text-accent-400" />
                      <span>Open 24/7</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <button
                      className="w-full bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group"
                      onClick={() => window.location.href = '/booking'}
                    >
                      <span className="text-lg">Book Your Stay</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-3"  onClick={() => window.location.href = '/rooms'}>
                      <span>Explore Rooms</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Special Offer Badge */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-400/30">
                    <div className="text-center">
                      <div className="text-amber-400 font-bold text-sm mb-1">Celebrating 3rd Aniversary</div>
                      <div className="text-white text-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      
    </div>
  );
};

export default VideoPlayer;