import React from 'react';
import { motion } from 'framer-motion';

const FindUs: React.FC = () => {
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

    const iconHover = {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-text-primary mb-4 sm:mb-6 tracking-tight"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Find Your Way to Janakpur Inn
                    </motion.h1>
                    <div className="text-center mb-6 sm:mb-12">
                        <h2 className="text-base sm:text-lg md:text-xl font-serif font-medium text-text-primary">
                          Ramanand Chowk, Janakpur
                        </h2>
                        <div className="w-16 sm:w-24 h-1 bg-accent-400 mx-auto mt-3 sm:mt-6"></div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
                >
                    {/* Map */}
                    <motion.div
                        variants={item}
                        className="hotel-card overflow-hidden shadow-md hover:shadow-lg transition-all"
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.22171847403!2d85.91668091131955!3d26.737299867509265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4169194bb6bd%3A0xc733976a1e32e236!2sHotel%20JanakpurInn!5e0!3m2!1sen!2snp!4v1748835156128!5m2!1sen!2snp"
                                width="100%"
                                height="550"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={item}
                        className="flex flex-col justify-center"
                    >
                        <div className="hotel-card p-6 sm:p-8 shadow-md hover:shadow-lg transition-all h-full">
                            <h2 className="text-xl sm:text-2xl font-serif font-medium text-text-primary mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <motion.div
                                    className="flex items-start"
                                >
                                    <motion.div
                                        className="flex-shrink-0 bg-accent-100/20 p-3 rounded-lg text-accent-500"
                                        whileHover="hover"
                                    >
                                        <motion.svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </motion.svg>
                                    </motion.div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-text-primary">Address</h3>
                                        <p className="mt-1 text-sm sm:text-base text-text-secondary">
                                            Ramanand Chowk<br />
                                            Janakpur Dham - 08<br />
                                            Nepal
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="flex items-start"
                                >
                                    <motion.div
                                        className="flex-shrink-0 bg-accent-100/20 p-3 rounded-lg text-accent-500"
                                        whileHover="hover"
                                    >
                                        <motion.svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </motion.svg>
                                    </motion.div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-text-primary">Phone</h3>
                                        <p className="mt-1 text-sm sm:text-base text-text-secondary">
                                            +977 41-591317 / +977 41-591989<br />
                                            +977 9765263291 / +977 9840149464
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    className="flex items-start"
                                >
                                    <motion.div
                                        className="flex-shrink-0 bg-accent-100/20 p-3 rounded-lg text-accent-500"
                                        whileHover="hover"
                                    >
                                        <motion.svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </motion.svg>
                                    </motion.div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-text-primary">Email</h3>
                                        <p className="mt-1 text-sm sm:text-base text-text-secondary">
                                            janakpurinnhna2079@gmail.com
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Transportation Options */}
                            <div className="mt-10">
                                <h3 className="text-lg font-medium text-text-primary mb-4">Transportation Options</h3>
                                <ul className="space-y-3 text-sm sm:text-base text-text-secondary">
                                    <motion.li
                                        className="flex items-center"
                                        whileHover={{ x: 5, cursor: "default" }}
                                    >
                                        <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>4.5km from the airport</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-center"
                                        whileHover={{ x: 5, cursor: "default" }}
                                    >
                                        <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>1 min walk from Ramanand Chowk Bus Stand</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-center"
                                        whileHover={{ x: 5, cursor: "default" }}
                                    >
                                        <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>Free parking available</span>
                                    </motion.li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer/Closing */}
                <motion.div
                    className="mt-12 sm:mt-16 md:mt-20 text-center"
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
                        We Look Forward to Welcoming You
                    </motion.h3>
                    <motion.p
                        className="text-xs sm:text-sm md:text-base text-text-secondary max-w-3xl mx-auto px-2 sm:px-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Whether you're arriving by plane, bus, or car, our convenient location makes it easy to reach us.
                        Don't hesitate to contact us if you need any assistance with directions or transportation.
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default FindUs;