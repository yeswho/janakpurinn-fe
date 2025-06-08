import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import dhanusSagar from '../../../assets/images/dhanusSagar.jpg';
import janakiTemple from '../../../assets/images/janakiTemple.jpg';
import gangaSagar from '../../../assets/images/gangaSagar.jpg';
import mithilaArtGallery from '../../../assets/images/mithilaArtGallery.jpg';
import ramMandir from '../../../assets/images/ramMandir.jpg';
import ramSitaMandap from '../../../assets/images/ramSitaMandap.jpg';

interface Attraction {
    id: number;
    title: string;
    description: string;
    image: string;
    distance: string;
    category: string;
}

const attractions: Attraction[] = [
    {
        id: 1,
        title: 'Janaki Mandir',
        description: 'A beautiful Hindu temple dedicated to Goddess Sita, an architectural marvel.',
        image: janakiTemple,
        distance: '0.5 km',
        category: 'Religious'
    },
    {
        id: 2,
        title: 'Ram Mandir',
        description: 'Ancient temple dedicated to Lord Ram, located near Janaki Mandir.',
        image: ramMandir,
        distance: '0.7 km',
        category: 'Religious'
    },
    {
        id: 3,
        title: 'Dhanush Sagar',
        description: 'Sacred pond believed to be created by Lord Ram\'s arrow.',
        image: dhanusSagar,
        distance: '1.2 km',
        category: 'Religious'
    },
    {
        id: 4,
        title: 'Ganga Sagar',
        description: 'Another sacred pond with historical significance in Ramayana.',
        image: gangaSagar,
        distance: '1.5 km',
        category: 'Religious'
    },
    {
        id: 5,
        title: 'Mithila Art Gallery',
        description: 'Showcasing vibrant traditional paintings of the Mithila region.',
        image: mithilaArtGallery,
        distance: '1.8 km',
        category: 'Cultural'
    },
    {
        id: 6,
        title: 'Ram Sita Vivah Mandap',
        description: 'The place where Ram and Sita got married. It is a gorgeous structure made of marble.',
        image: ramSitaMandap,
        distance: '1.8 km',
        category: 'Religious'
    },
];

const LookAround: React.FC = () => {
    return (
        <section className="py-16 px-4 md:px-6 bg-primary-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
                       Look Around
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Discover the rich cultural heritage and spiritual significance of Janakpur,
                        the city of Goddess Sita. Take a look around and explore the nearby attractions that make this place unique.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={32}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 4
                    }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 32
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 32
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 32
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 32
                        }
                    }}
                    className="pb-16"
                >
                    {attractions.map((attraction) => (
                        <SwiperSlide key={attraction.id}>
                            <div className="hotel-card h-full flex flex-col">
                                <div className="relative overflow-hidden rounded-l aspect-[9/6] mb-4">
                                    <img
                                        src={attraction.image}
                                        alt={attraction.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <span className="text-white text-sm font-medium bg-accent-500 px-3 py-1 rounded-full">
                                            {attraction.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow px-4">
                                    <h3 className="text-xl font-serif font-semibold text-text-primary mb-2">
                                        {attraction.title}
                                    </h3>
                                    <p className="text-text-secondary mb-4 text-sm md:text-base">
                                        {attraction.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-4 px-4 pb-4">
                                    <span className="text-sm text-text-secondary">
                                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {attraction.distance} from JanakpurInn
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LookAround;