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

      <div className="absolute inset-0 bg-secondary-500/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-500/60 via-transparent to-secondary-500/80"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="mithila-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.5" fill="white" fillOpacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mithila-dots)" />
        </svg>
      </div>

      <div className="relative z-10 flex items-center min-h-screen pt-28 pb-12 px-6 sm:px-10 lg:py-0">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
          >

            <motion.div 
              variants={item}
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-6">
                <motion.div 
                  variants={item}
                  className="inline-block"
                >
                  <span className="text-white/60 text-[10px] font-bold tracking-[0.5em] uppercase border-b border-white/20 pb-2">
                    Est. 2022 • Janakpur Dham
                  </span>
                </motion.div>

                <motion.h1 
                  variants={item}
                  className="text-4xl sm:text-6xl lg:text-8xl font-serif font-light text-white leading-[1] tracking-tight"
                >
                  The <br />
                  <span className="italic text-accent-300 font-normal">Janakpur Inn</span>
                </motion.h1>

                <motion.p
                  variants={item}
                  className="text-white/70 text-lg sm:text-xl font-light tracking-wide max-w-xl leading-relaxed italic"
                >
                  "A sanctuary where ancient Mithila heritage <br className="hidden sm:block" /> meets the art of modern hospitality."
                </motion.p>
              </div>

              {/* Minimal Amenities */}
              <motion.div 
                variants={item}
                className="flex flex-wrap gap-x-10 gap-y-4"
              >
                {[
                  "Gourmet Dining", "Sacred Gardens", "Artisan Suites", "Event Sanctuaries"
                ].map((label, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-accent-300/40 rounded-full" />
                    <span className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Ultra-Elegant Booking Card */}
            <motion.div 
              variants={item}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <motion.div 
                className="w-full max-w-sm"
              >
                <div className="bg-white/[0.03] backdrop-blur-3xl p-8 sm:p-12 border-t border-accent-300/30 shadow-2xl relative group">
                  {/* Subtle Gold Hairline */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-accent-300 shadow-[0_0_10px_rgba(198,146,72,0.5)]" />

                  <div className="space-y-6 mb-12">
                    <div className="text-center mb-10">
                        <h3 className="text-white text-xs font-bold tracking-[0.4em] uppercase mb-2">Inquiries</h3>
                        <div className="w-8 h-px bg-white/10 mx-auto" />
                    </div>
                    
                    <motion.div className="flex flex-col items-center gap-2 text-white/90 text-[10px] tracking-[0.2em] uppercase font-medium">
                      <a href="tel:+9779765263291" className="hover:text-accent-300 transition-colors">+977 9765263291</a>
                      <a href="tel:+9779810685891" className="hover:text-accent-300 transition-colors">+977 9810685891</a>
                      <a href="tel:+9779840149464" className="hover:text-accent-300 transition-colors">+977 9840149464</a>
                    </motion.div>
                    
                    <motion.div className="flex flex-col items-center gap-2 text-white/90 text-[10px] tracking-[0.2em] uppercase font-medium">
                      <a href="mailto:janakpurinnhna2079@gmail.com" className="hover:text-accent-300 transition-colors lowercase tracking-normal opacity-60">janakpurinnhna2079@gmail.com</a>
                    </motion.div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-mithila-light w-full"
                      onClick={() => window.location.href = '/booking'}
                    >
                      Reserve Sanctuary
                    </motion.button>

                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-transparent text-white font-serif font-bold py-4 px-6 text-[11px] tracking-[0.3em] uppercase border border-white/20 active:border-white/30 active:bg-white/5 transition-all flex items-center justify-center text-center" 
                      onClick={() => window.location.href = '/rooms'}
                    >
                      The Collection
                    </motion.button>
                  </div>

                  {/* Seasonal Curated Rewards */}
                  <div className="mt-12 text-center opacity-40 group-active:opacity-80 transition-opacity">
                    <p className="text-white text-[9px] tracking-[0.3em] uppercase italic">
                      Third Anniversary Collection
                    </p>
                  </div>
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