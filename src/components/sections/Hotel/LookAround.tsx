import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
    mapUrl: string;
}

const attractions: Attraction[] = [
    {
        id: 1,
        title: 'Janaki Mandir',
        description: 'A beautiful Hindu temple dedicated to Goddess Sita, an architectural marvel with stunning Mughal and Rajput architectural styles. The temple is a three-storied structure made entirely of stone and marble.',
        image: janakiTemple,
        distance: '0.5 km',
        category: 'Religious',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Janaki+Mandir+Janakpur'
    },
    {
        id: 2,
        title: 'Ram Mandir',
        description: 'Ancient temple dedicated to Lord Ram, located near Janaki Mandir. This sacred site holds great significance in Hindu mythology and attracts devotees from all over the world.',
        image: ramMandir,
        distance: '0.7 km',
        category: 'Religious',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ram+Mandir+Janakpur'
    },
    {
        id: 3,
        title: 'Dhanush Sagar',
        description: 'Sacred pond believed to be created by Lord Ram\'s arrow. Pilgrims visit this site for ritual baths, especially during festivals and auspicious occasions.',
        image: dhanusSagar,
        distance: '1.2 km',
        category: 'Religious',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dhanush+Sagar+Janakpur'
    },
    {
        id: 4,
        title: 'Ganga Sagar',
        description: 'Another sacred pond with historical significance in Ramayana. The serene atmosphere and religious importance make it a must-visit spot in Janakpur.',
        image: gangaSagar,
        distance: '1.5 km',
        category: 'Religious',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ganga+Sagar+Janakpur'
    },
    {
        id: 5,
        title: 'Mithila Art Gallery',
        description: 'Showcasing vibrant traditional paintings of the Mithila region. The gallery features exquisite Madhubani paintings that depict mythological themes and daily life in vivid colors.',
        image: mithilaArtGallery,
        distance: '1.8 km',
        category: 'Cultural',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mithila+Art+Gallery+Janakpur'
    },
    {
        id: 6,
        title: 'Ram Sita Vivah Mandap',
        description: 'The place where Ram and Sita got married. It is a gorgeous structure made of marble, featuring intricate carvings that depict scenes from the epic Ramayana.',
        image: ramSitaMandap,
        distance: '1.8 km',
        category: 'Religious',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ram+Sita+Vivah+Mandap+Janakpur'
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

    return (
        <motion.section
            className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
                    className="text-center mb-20 sm:mb-28"
                >
                    <motion.div variants={item}>
                        <div className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30">
                            Discover the Region
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-500 mb-8 tracking-tight mithila-section-title">
                            Look Around
                        </h2>
                    </motion.div>
                    <motion.p
                        variants={item}
                        className="text-lg sm:text-xl font-serif italic text-text-secondary max-w-2xl mx-auto"
                    >
                        Step out and explore the rich cultural tapestry of Janakpur, where every landmark whispers a story of divinity and tradition.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative group px-12 sm:px-16 lg:px-20"
                >
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={32}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 32
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 40
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                        className="pb-24 look-around-swiper !px-0"
                    >
                        {attractions.map((attraction) => (
                            <SwiperSlide key={attraction.id}>
                                <motion.div
                                    variants={item}
                                    className="h-full py-4"
                                >
                                    <div className="mithila-card h-full flex flex-col overflow-hidden !p-0 active:shadow-2xl transition-all duration-500">
                                        <div
                                            className="relative overflow-hidden rounded-t-sm aspect-[4/3]"
                                        >
                                            <motion.img
                                                src={attraction.image}
                                                alt={attraction.title}
                                                className="w-full h-full object-cover transition-all duration-700"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="bg-accent-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 mithila-border">
                                                    {attraction.category}
                                                </span>
                                            </div>
                                            {/* Quick Map Overlay - Visible by default on mobile, active on desktop */}
                                            <div className="absolute inset-0 bg-accent-500/10 flex items-center justify-center opacity-100 transition-all duration-500">
                                                <motion.a
                                                    href={attraction.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent-500)' }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="btn-mithila !py-3 !px-6 text-xs shadow-2xl hover:bg-accent-500 transition-colors"
                                                >
                                                    Get Directions
                                                </motion.a>
                                            </div>
                                        </div>
                                        <div className="flex-grow p-8 flex flex-col bg-white/50 backdrop-blur-sm">
                                            <h3 className="text-2xl font-serif font-bold text-accent-500 mb-4 hover:text-accent-400 transition-colors cursor-pointer">
                                                {attraction.title}
                                            </h3>
                                            <div className="flex-grow mb-6">
                                                <p className={`text-sm text-text-secondary leading-relaxed ${expandedCards[attraction.id] ? '' : 'line-clamp-3'}`}>
                                                    {attraction.description}
                                                </p>
                                                {attraction.description.length > 100 && (
                                                    <button
                                                        onClick={() => toggleExpand(attraction.id)}
                                                        className="text-accent-400 hover:text-accent-500 text-xs font-bold mt-2 focus:outline-none uppercase tracking-tighter"
                                                    >
                                                        {expandedCards[attraction.id] ? 'Read less' : 'Read more...'}
                                                    </button>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-accent-300/10">
                                                <span className="text-[11px] font-bold text-accent-400 uppercase tracking-tight flex items-center gap-2">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {attraction.distance} away
                                                </span>
                                                <a
                                                    href={attraction.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-accent-500 hover:text-accent-400 transition-colors"
                                                >
                                                    <ArrowRight className="w-5 h-5" />
                                                </a>
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
                    className="mt-12 sm:mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="mithila-divider !w-32 mx-auto mb-12" />
                    <motion.h3
                        className="text-2xl sm:text-3xl font-serif font-bold text-accent-500 mb-4 italic"
                    >
                        Explore More
                    </motion.h3>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto italic">
                        The essence of Janakpur lies in its streets and temples. Allow us to curate a journey through the spiritual heart of the Mithila region.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default LookAround;