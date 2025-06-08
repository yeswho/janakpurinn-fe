import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {
    const hotelImages = [
        { id: 1, src: 'hotelImage1', alt: 'Room 1' },
        { id: 2, src: 'hotelImage2', alt: 'Room 2' },
        { id: 3, src: 'hotelImage3', alt: 'Restaurant' },
    ];

    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 via-primary-50 to-white">
            <div className="flex flex-col md:flex-row min-h-[calc(100vh-120px)]">
                <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-8 lg:px-16 py-12">
                    <div className="max-w-lg text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-text-primary leading-tight">
                            Great Stay @<br />
                            Hotel JanakpurInn
                        </h1>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
                            Experience comfort with our cozy rooms, world-class amenities, and authentic Nepalese hospitality & food
                        </p>
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                            <a className="btn-primary inline-flex justify-center" href="/booking">
                                Book Your Stay
                            </a>
                            <a href="/rooms" className="text-sm font-medium text-text-primary hover:text-accent-500 transition-colors inline-flex items-center justify-center">
                                Explore Rooms <span aria-hidden="true" className="ml-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-4/7 relative h-80 sm:h-[500px] md:h-auto">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        className="h-full w-full"
                    >
                        {hotelImages.map((image) => (
                            <SwiperSlide key={image.id}>
                                <div className="relative h-full w-full">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/20" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="absolute left-1/4 top-1/4 -z-10 blur-3xl" aria-hidden="true">
                <div
                    className="aspect-square w-72 sm:w-96 bg-gradient-to-tr from-accent-400 to-accent-500 opacity-10"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}
