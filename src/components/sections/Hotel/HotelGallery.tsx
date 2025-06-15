import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

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
