import { motion, useReducedMotion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slideUp, fadeIn, transitionSmooth } from '../../../utils/animations';

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();

    const hotelImages = [
        { id: 1, src: 'https://i.ibb.co/D9CtStz/4.jpg', alt: 'Room 1' },
        { id: 2, src: 'https://i.ibb.co/HdTJFdG/doublebedapp2.jpg', alt: 'Room 2' },
        { id: 3, src: 'https://i.ibb.co/tBchncL/2.jpg', alt: 'Restaurant' },
    ];

    return (
        <div className="relative isolate overflow-hidden bg-primary-100/30">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: 'var(--mithila-pattern)', backgroundSize: '40px 40px' }} />

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-6rem)] md:min-h-screen pt-20 lg:pt-24">
                {/* Image Slider */}
                <motion.div
                    className="w-full md:w-1/2 relative h-[280px] sm:h-[400px] md:h-auto"
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                >
                    <Swiper
                        slidesPerView={1}
                        loop
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={prefersReducedMotion ? false : { delay: 5000, disableOnInteraction: false }}
                        className="h-full w-full look-around-swiper"
                        aria-label="Hotel image carousel"
                    >
                        {hotelImages.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="relative h-full w-full overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-transparent" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
 
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-10 md:px-12 lg:px-20 py-10 md:py-24 bg-white/40 backdrop-blur-sm">
                    <motion.div
                        className="max-w-xl text-center md:text-left"
                        variants={slideUp}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ ...transitionSmooth, delay: 0.2 }}
                            className="inline-block px-5 py-2 mb-6 sm:mb-8 text-xs font-bold tracking-[0.3em] uppercase text-accent-500 bg-accent-500/5 border-y border-accent-300/30"
                        >
                            Authentic Mithila Hospitality
                        </motion.div>
                        
                        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-text-primary leading-[1.05] mithila-section-title">
                            Magic of <br />
                            <span className="text-accent-500 italic">Janakpur Inn</span>
                        </h1>
                        
                        <p className="mt-6 sm:mt-10 text-lg sm:text-2xl leading-relaxed text-text-secondary font-medium italic">
                            Where ancient tradition meets modern luxury.
                        </p>

                        <div className="mt-8 sm:mt-14 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center md:justify-start">
                            <motion.a
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-mithila"
                                href="/booking"
                                aria-label="Book your stay now"
                            >
                                Book Your Stay
                            </motion.a>
                            <motion.a
                                href="/rooms"
                                whileHover={{ x: 10 }}
                                className="text-base sm:text-lg font-bold text-accent-400 hover:text-accent-500 transition-colors inline-flex items-center justify-center gap-3"
                                aria-label="Explore rooms"
                            >
                                <span className="border-b-2 border-accent-300 pb-1">Explore Rooms</span>
                                <span aria-hidden="true" className="text-2xl">→</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Element - Mithila Sun Motif */}
            <div className="absolute right-[-10%] bottom-[-10%] -z-10 opacity-20 pointer-events-none overflow-hidden select-none">
                <svg width="600" height="600" viewBox="0 0 100 100" className="animate-[spin_60s_linear_infinite]">
                    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent-500" />
                    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent-500" />
                    {[...Array(24)].map((_, i) => (
                        <path 
                            key={i}
                            d="M50 5 L53 15 L47 15 Z" 
                            transform={`rotate(${i * 15} 50 50)`}
                            fill="currentColor"
                            className="text-accent-400"
                        />
                    ))}
                    {[...Array(24)].map((_, i) => (
                        <line 
                            key={i}
                            x1="50" y1="2" x2="50" y2="8" 
                            transform={`rotate(${i * 15 + 7.5} 50 50)`}
                            stroke="currentColor" strokeWidth="0.3"
                            className="text-accent-300"
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
}
