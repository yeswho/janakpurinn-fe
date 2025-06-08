import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const hotelImages = [
    {
        id: 1,
        src: '/images/hotel/hotel-1.jpg',
        alt: 'Luxury hotel lobby with elegant decor',
        caption: 'Grand Lobby'
    },
    {
        id: 2,
        src: '/images/hotel/hotel-2.jpg',
        alt: 'Swimming pool with panoramic views',
        caption: 'Infinity Pool'
    },
    {
        id: 3,
        src: '/images/hotel/hotel-3.jpg',
        alt: 'Spa relaxation area',
        caption: 'Wellness Spa'
    },
    {
        id: 4,
        src: '/images/hotel/hotel-4.jpg',
        alt: 'Conference room with modern facilities',
        caption: 'Business Center'
    },
    {
        id: 5,
        src: '/images/hotel/hotel-5.jpg',
        alt: 'Beautiful garden landscape',
        caption: 'Landscaped Gardens'
    },
    {
        id: 6,
        src: '/images/hotel/hotel-6.jpg',
        alt: 'Rooftop bar with city view',
        caption: 'Sky Lounge'
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
        <div className="space-y-6">
            <div className={`grid ${getGridColumns()} gap-4`}>
                {hotelImages.map((image, index) => (
                    <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-xl border border-gray-200/50 bg-white/80 backdrop-blur-sm cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedImage(index)}
                        style={{ opacity: 1, transform: 'none' }}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <span className="text-white font-medium">{image.caption}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div 
                    className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 text-white text-2xl z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        ✕
                    </button>
                    
                    <div className="relative max-w-6xl w-full">
                        <img 
                            src={hotelImages[selectedImage].src} 
                            alt={hotelImages[selectedImage].alt}
                            className="w-full max-h-[80vh] object-contain"
                        />
                        <div className="mt-4 text-center text-white">
                            <h3 className="text-xl font-serif">{hotelImages[selectedImage].caption}</h3>
                            <p className="text-gray-300">{hotelImages[selectedImage].alt}</p>
                        </div>
                    </div>

                    <button
                        className="absolute left-4 md:left-8 text-white bg-accent-300 text-2xl rounded-full p-2 z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage((prev) => 
                                prev === 0 ? hotelImages.length - 1 : (prev || 0) - 1
                            );
                        }}
                    >
                        ←
                    </button>
                    <button
                        className="absolute right-4 md:right-8 text-white bg-accent-300 text-2xl rounded-full p-2 z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage((prev) => 
                                prev === hotelImages.length - 1 ? 0 : (prev || 0) + 1
                            );
                        }}
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
};

export default HotelGallery;
