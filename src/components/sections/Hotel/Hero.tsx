import { motion, useReducedMotion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();

    const hotelImages = [
        { id: 1, src: 'https://i.ibb.co/D9CtStz/4.jpg', alt: 'Room 1' },
        { id: 2, src: 'https://i.ibb.co/HdTJFdG/doublebedapp2.jpg', alt: 'Room 2' },
        { id: 3, src: 'https://i.ibb.co/tBchncL/2.jpg', alt: 'Restaurant' },
    ];

    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 via-primary-50 to-white">

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-120px)]">
                {/* Image Slider */}
                <motion.div
                    className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[calc(100vh-120px)]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                >
                    <Swiper
                        slidesPerView={1}
                        loop
                        pagination={{ clickable: true }}
                        navigation
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={prefersReducedMotion ? false : { delay: 4000, disableOnInteraction: false }}
                        className="h-full w-full"
                        aria-label="Hotel image carousel"
                    >
                        {hotelImages.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="relative h-full w-full">
                                    <picture>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </picture>
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-10 md:px-12 lg:px-16 py-10 sm:py-16 md:py-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
                >


                    <motion.div
                        className="max-w-lg text-center md:text-left"
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-text-primary leading-tight">
                            Great Stay @<br />
                            <span className="text-accent-500">Hotel JanakpurInn</span>
                        </h1>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                            Experience comfort with our cozy rooms, world-class amenities, and authentic Nepalese hospitality & food.
                        </p>
                        <motion.div
                            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary inline-flex justify-center px-6 py-3 text-white bg-accent-500 hover:bg-accent-600 rounded-md transition-all shadow-md"
                                href="/booking"
                                aria-label="Book your stay now"
                                variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                                transition={{ type: 'spring', stiffness: 120 }}
                            >
                                Book Your Stay
                            </motion.a>
                            <motion.a
                                href="/rooms"
                                className="text-sm font-medium text-text-primary hover:text-accent-500 transition-colors inline-flex items-center justify-center"
                                aria-label="Explore rooms"
                                variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                                transition={{ type: 'spring', stiffness: 120 }}
                            >
                                Explore Rooms <span aria-hidden="true" className="ml-1">→</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Blob */}
            <motion.div
                className="absolute left-1/4 top-1/4 -z-10 blur-3xl"
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            >
                <div
                    className="aspect-square w-72 sm:w-96 bg-gradient-to-tr from-accent-400 to-accent-500 opacity-10"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </motion.div>
        </div>
    );
}
