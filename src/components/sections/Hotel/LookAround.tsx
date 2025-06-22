import React, { useState } from 'react';
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
        description: 'A beautiful Hindu temple dedicated to Goddess Sita, an architectural marvel with stunning Mughal and Rajput architectural styles. The temple is a three-storied structure made entirely of stone and marble.',
        image: janakiTemple,
        distance: '0.5 km',
        category: 'Religious'
    },
    {
        id: 2,
        title: 'Ram Mandir',
        description: 'Ancient temple dedicated to Lord Ram, located near Janaki Mandir. This sacred site holds great significance in Hindu mythology and attracts devotees from all over the world.',
        image: ramMandir,
        distance: '0.7 km',
        category: 'Religious'
    },
    {
        id: 3,
        title: 'Dhanush Sagar',
        description: 'Sacred pond believed to be created by Lord Ram\'s arrow. Pilgrims visit this site for ritual baths, especially during festivals and auspicious occasions.',
        image: dhanusSagar,
        distance: '1.2 km',
        category: 'Religious'
    },
    {
        id: 4,
        title: 'Ganga Sagar',
        description: 'Another sacred pond with historical significance in Ramayana. The serene atmosphere and religious importance make it a must-visit spot in Janakpur.',
        image: gangaSagar,
        distance: '1.5 km',
        category: 'Religious'
    },
    {
        id: 5,
        title: 'Mithila Art Gallery',
        description: 'Showcasing vibrant traditional paintings of the Mithila region. The gallery features exquisite Madhubani paintings that depict mythological themes and daily life in vivid colors.',
        image: mithilaArtGallery,
        distance: '1.8 km',
        category: 'Cultural'
    },
    {
        id: 6,
        title: 'Ram Sita Vivah Mandap',
        description: 'The place where Ram and Sita got married. It is a gorgeous structure made of marble, featuring intricate carvings that depict scenes from the epic Ramayana.',
        image: ramSitaMandap,
        distance: '1.8 km',
        category: 'Religious'
    },
];

const LookAround: React.FC = () => {
    const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

    const toggleExpand = (id: number) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

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

    const imageHover = {
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    return (
        <motion.section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <motion.div variants={item}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-text-primary mb-4 tracking-tight">
                            Look Around
                        </h2>
                    </motion.div>
                    <motion.div variants={item} className="text-center mb-6 sm:mb-12">
                        <h3 className="text-base sm:text-lg md:text-xl font-serif font-medium text-text-primary">
                            Discover Janakpur's Heritage
                        </h3>
                        <div className="w-16 sm:w-24 h-1 bg-accent-400 mx-auto mt-3 sm:mt-6"></div>
                    </motion.div>
                    <motion.p
                        variants={item}
                        className="text-xs sm:text-sm md:text-base text-text-secondary max-w-2xl mx-auto"
                    >
                        Discover the rich cultural heritage and spiritual significance of Janakpur,
                        the city of Goddess Sita. Take a look around and explore the nearby attractions that make this place unique.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
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
                                spaceBetween: 24
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24
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
                                <motion.div
                                    variants={item}
                                    className="h-full"
                                >
                                    <div className="hotel-card h-full flex flex-col overflow-hidden">
                                        <motion.div
                                            className="relative overflow-hidden rounded-t-lg aspect-[4/3]"
                                            whileHover="hover"
                                        >
                                            <motion.img
                                                src={attraction.image}
                                                alt={attraction.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                variants={{ hover: imageHover }}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                <span className="text-white text-xs sm:text-sm font-medium bg-accent-500 px-3 py-1 rounded-full">
                                                    {attraction.category}
                                                </span>
                                            </div>
                                        </motion.div>
                                        <div className="flex-grow p-4 sm:p-5 flex flex-col">
                                            <h3 className="text-lg sm:text-xl font-serif font-semibold text-text-primary mb-2 sm:mb-3">
                                                {attraction.title}
                                            </h3>
                                            <div className="flex-grow">
                                                <p className={`text-xs sm:text-sm text-text-secondary ${expandedCards[attraction.id] ? '' : 'line-clamp-3'}`}>
                                                    {attraction.description}
                                                </p>
                                                {attraction.description.length > 100 && (
                                                    <button
                                                        onClick={() => toggleExpand(attraction.id)}
                                                        className="text-accent-500 hover:text-accent-600 text-xs sm:text-sm font-medium mt-1 focus:outline-none"
                                                    >
                                                        {expandedCards[attraction.id] ? 'Read less' : 'Read more...'}
                                                    </button>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                                                <span className="text-xs sm:text-sm text-text-secondary">
                                                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {attraction.distance} from JanakpurInn
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Footer/Closing */}
                <motion.div
                    className="mt-8 sm:mt-12 md:mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="divider mx-auto w-16 sm:w-24 h-1 bg-accent-400 mb-6 sm:mb-8"></div>
                    <motion.h3
                        className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-text-primary mb-3 sm:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Explore More
                    </motion.h3>
                    <motion.p
                        className="text-xs sm:text-sm md:text-base text-text-secondary max-w-3xl mx-auto px-2 sm:px-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Janakpur is filled with spiritual and cultural treasures waiting to be discovered.
                        Let us help you plan your exploration of these sacred sites and cultural landmarks.
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default LookAround;