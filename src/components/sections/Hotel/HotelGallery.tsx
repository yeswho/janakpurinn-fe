import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const hotelImages = [
    {
        id: 1,
        src: 'https://i.ibb.co/cK96fXY4/Hotel.jpg',
        alt: 'Hotel entrance with elegant decor',
        caption: 'Hotel Entrance'
    },
    {
        id: 2,
        src: 'https://i.ibb.co/DHQtzZB4/ArjunDai.jpg',
        alt: 'Hotel reception area with friendly staff',
        caption: 'Hotel Reception'
    },
    {
        id: 3,
        src: 'https://i.ibb.co/d03y7bqp/Hotel-Full-Night.jpg',
        alt: 'Hotel view at night with lights',
        caption: 'Hotel at Night'
    },
    {
        id: 4,
        src: 'https://i.ibb.co/rRBmh1w8/outside-4.jpg',
        alt: 'Mahadev Statue in the hotel garden',
        caption: 'Mahadev Statue'
    },
    {
        id: 5,
        src: 'https://i.ibb.co/G4qt0ZmR/Hall.jpg',
        alt: 'Small conference hall with seating',
        caption: 'Conference Hall'
    },
    {
        id: 6,
        src: 'https://i.ibb.co/hJRwknzR/Apt-Facilities.jpg',
        alt: 'Apartment facilities with modern amenities',
        caption: 'Apartment Facilities'
    },
    {
        id: 7,
        src: 'https://i.ibb.co/Dn4Gt8P/hotel-Fame.jpg',
        alt: 'Hotel manager with a welcoming smile',
        caption: 'Hotel Manager',
    },
    {
        id: 8,
        src: 'https://i.ibb.co/0VnxxdGV/mithila1.jpg',
        alt: 'Mithila art displayed in the hotel',
        caption: 'Mithila Art Display',
    },
    {
        id: 9,
        src: 'https://i.ibb.co/gbxzmZVj/Washroom.jpg',
        alt: 'Clean hotel washroom in standard room with hot water',
        caption: 'Standard Room Washroom',
    }
];

const HotelGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const isMobile = useMediaQuery({ maxWidth: 640 });

    const getGridColumns = () => {
        if (isMobile) return 'grid-cols-1';
        return 'grid-cols-2 md:grid-cols-3';
    };

    return (
        <div className="space-y-12 py-20 sm:py-24">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30">
                    Visual Journey
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-500 mb-8 tracking-tight mithila-section-title">
                    Our Gallery
                </h2>
                <p className="text-lg sm:text-xl font-serif italic text-text-secondary max-w-2xl mx-auto">
                    A glimpse into the elegance and artisanal charm of Hotel Janakpur Inn.
                </p>
            </div>

            <div className={`grid ${getGridColumns()} gap-6 sm:gap-10 max-w-7xl mx-auto px-4`}>
                {hotelImages.map((image, index) => (
                    <motion.div
                        key={image.id}
                        whileTap={{ scale: 0.98 }}
                        className="mithila-card !p-1.5 sm:!p-2 cursor-pointer active:shadow-2xl transition-all duration-500"
                        onClick={() => setSelectedImage(index)}
                    >
                        <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-accent-500/80 to-transparent p-4 sm:p-6 opacity-100">
                                <span className="text-white text-base sm:text-lg font-serif font-bold italic">{image.caption}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedImage !== null && (
                <div 
                    className="fixed inset-0 z-[100] bg-accent-500/10 backdrop-blur-xl flex items-center justify-center p-2 sm:p-8 md:p-12 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-accent-500 active:text-accent-400 transition-colors z-[110] p-2 bg-white/80 rounded-full shadow-lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    <div className="relative max-w-5xl w-full mithila-card !p-2 sm:!p-4 bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="relative overflow-hidden rounded-sm">
                            <img 
                                src={hotelImages[selectedImage].src} 
                                alt={hotelImages[selectedImage].alt}
                                className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
                            />
                        </div>
                        <div className="mt-6 sm:mt-8 text-center px-2 sm:px-4">
                            <h3 className="text-xl sm:text-3xl font-serif font-bold text-accent-500 mb-2 italic">
                                {hotelImages[selectedImage].caption}
                            </h3>
                            <p className="text-text-secondary text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
                                {hotelImages[selectedImage].alt}
                            </p>
                        </div>
                        
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-8 flex items-center z-[110]">
                            <button
                                className="text-accent-500 bg-white active:bg-accent-500 active:text-white transition-all w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-2xl flex items-center justify-center mithila-border"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage((prev) => 
                                        prev === 0 ? hotelImages.length - 1 : (prev || 0) - 1
                                    );
                                }}
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-8 flex items-center z-[110]">
                            <button
                                className="text-accent-500 bg-white active:bg-accent-500 active:text-white transition-all w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-2xl flex items-center justify-center mithila-border"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage((prev) => 
                                        prev === hotelImages.length - 1 ? 0 : (prev || 0) + 1
                                    );
                                }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelGallery;
