import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const restaurantImages = [
  {
    id: 1,
    src: 'https://i.ibb.co/bgKt6JLv/Resturant.jpg',
    alt: 'Resturant with good ambiance and seating',
    caption: 'Restaurant Ambiance'
  },
  {
    id: 2,
    src: 'https://i.ibb.co/DfNvV6y8/Resturant3.jpg',
    alt: 'Bar area with a variety of drinks',
    caption: 'Bar Area'
  },
  {
    id: 3,
    src: 'https://i.ibb.co/WN4Y2955/Restuarnt2.jpg',
    alt: 'Resturant area',
    caption: 'Restuarnt Area with Bar'
  },
  {
    id: 4,
    src: 'https://i.ibb.co/KchhyY6X/Resturant-outside2.jpg',
    alt: 'Outdoor dining area with seating',
    caption: 'Outdoor Dining Area'
  },
  {
    id: 5,
    src: 'https://i.ibb.co/Z1vbkgWV/Resturant-Outside.jpg',
    alt: 'Outside Dining Area',
    caption: 'Outside Dining Area'
  }
];

const RestaurantGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const getGridColumns = () => {
    if (isMobile) return 'grid-cols-1';
    if (restaurantImages.length <= 2) return 'grid-cols-2';
    return 'grid-cols-2 md:grid-cols-3';
  };

  return (
    <div className="space-y-6">
      
      <div className={`grid ${getGridColumns()} gap-4`}>
        {restaurantImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-xl border border-gray-200/50 bg-white/80 backdrop-blur-sm cursor-pointer transition-all duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white font-medium">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
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
              src={restaurantImages[selectedImage].src} 
              alt={restaurantImages[selectedImage].alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-serif">{restaurantImages[selectedImage].caption}</h3>
              <p className="text-gray-300">{restaurantImages[selectedImage].alt}</p>
            </div>
          </div>

          {restaurantImages.length > 1 && (
            <>
              <button
                className="absolute left-4 md:left-8 text-2xl text-white bg-accent-300 rounded-full p-2 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => 
                    prev === 0 ? restaurantImages.length - 1 : (prev || 0) - 1
                  );
                }}
              >
                ←
              </button>
              <button
                className="absolute right-4 md:right-8 text-2xl text-white bg-accent-300 rounded-full p-2 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => 
                    prev === restaurantImages.length - 1 ? 0 : (prev || 0) + 1
                  );
                }}
              >
                →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantGallery;
