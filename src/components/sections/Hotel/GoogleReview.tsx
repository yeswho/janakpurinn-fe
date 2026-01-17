import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const GoogleReviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Hardcoded reviews data
  const reviews = [
    {
      id: 1,
      name: "Paloma FF",
      rating: 5,
      date: "3 weeks ago",
      content: "They will help you with anything you need. If you order food, I really recommend their dal tadka which exceeded my expectations 👍🏼",
      avatarColor: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      name: "Aaditya Pokharel",
      rating: 5,
      date: "5 month ago",
      content: "I'm pleased with the service, both the room and food were commendable. I appreciate the management's gesture to upgrade my room. The food is prepared bespoke, keeping our taste at the center. Located at the heart of Janakpur, at a walking distance from the main road, it's not just accessible but well-equipped to make your stay delightful. With a cordial team of staff, the hotel offers a congenial stay.",
      avatarColor: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      name: "Sumit Agarwalla",
      rating: 4,
      date: "a year ago",
      content: "I must rate them 6 star for the kindness of the staff members. They are very helpful and humble. I required help at 5.30 am and one of their staff took me to the pharmacy on their own bike without even a single frown. Helped me procure a local SIM. Even the guard helped me get a proper auto guy. Hotel is located at a central place. Free from pollution. Rooms could have been little more spacious. However, value for money. Good rooms. Neat and clean.",
      avatarColor: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      name: "PREETI SINGH BHADORIA",
      rating: 5,
      date: "6 months ago",
      content: "I loved the stay. The location of the hotel is best, the staff is amazing and the food is yum and the cherry on top was the owner. He was very helpful and a great person with lots of experience to share. It was a lovely stay. Will love to visit again!!",
      avatarColor: "bg-amber-100 text-amber-600"
    },
    {
      id: 5,
      name: "Simran Mahato",
      rating: 4,
      date: "1 week ago",
      content: "Neat and clean rooms. Good food.Staffs were polite. Everything was clean which impressed me the most i must say.",
      avatarColor: "bg-pink-100 text-pink-600"
    },
    {
      id: 6,
      name: "Rita Pokharel",
      rating: 4,
      date: "a year ago",
      content: "The 3 star of for the entrance of the hotel which is very congested passage, lot Of crowd on the way to passage . Overall room and service 5 star",
      avatarColor: "bg-indigo-100 text-indigo-600"
    }
  ];

  // Calculate overall rating
  const averageRating = 4.1;
  const totalReviews = 231;

  // Render stars based on rating

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      });
      updateArrowVisibility();
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
      updateArrowVisibility();
    }
  };

  const updateArrowVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
    >
      <div className="max-w-7xl mx-auto">
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
            Guest Reviews
          </motion.h1>
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl font-serif font-medium text-text-primary">
              Experiences at Janakpur Inn
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent-400 mx-auto mt-3 sm:mt-6"></div>
          </div>
          
          {/* Overall Rating */}
          <motion.div 
            className="flex flex-col items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-text-primary">{averageRating}</div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < Math.floor(Number(averageRating)) 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-text-secondary">
                  Based on {totalReviews} reviews
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-medium text-text-secondary">Google Reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scrollable Reviews Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </motion.button>
          )}

          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </motion.button>
          )}

          {/* Scrollable Reviews */}
          <div
            ref={scrollContainerRef}
            onScroll={updateArrowVisibility}
            className="flex gap-6 lg:gap-8 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 snap-start"
              >
                {/* Enhanced Card Design */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 h-full">
                  {/* Card Header with Gradient */}
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center font-bold text-lg shadow-sm`}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary">{review.name}</h4>
                          <p className="text-xs text-text-secondary mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                            </svg>
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <Quote className="w-8 h-8 text-primary-300 opacity-30" />
                        <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center">
                          <div className="text-2xl font-serif text-primary-500">"</div>
                        </div>
                      </div>
                    </div>

                    {/* Rating with enhanced design */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={`${
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-text-primary ml-1">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-full shadow-sm">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-xs font-medium text-text-secondary">Google</span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="p-6">
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-2xl text-primary-200">"</div>
                      <p className="text-text-secondary leading-relaxed text-sm sm:text-base pl-1 line-clamp-5">
                        {review.content}
                      </p>
                      <div className="absolute -bottom-2 -right-2 text-2xl text-primary-200 rotate-180">"</div>
                    </div>
                    
                    {/* Decorative Divider */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-text-secondary flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>Verified Stay</span>
                        </div>
                        <div className="text-xs text-text-secondary flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{review.rating}.0 rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator Dots (for mobile) */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {reviews.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </motion.div>

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
            Share Your Experience
          </motion.h3>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-text-secondary max-w-3xl mx-auto px-2 sm:px-0 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We value your feedback. Share your experience at Janakpur Inn and help others discover our hospitality.
          </motion.p>
          <motion.a
            href="https://www.google.com/travel/search?g2lb=4965990,72471280,72560029,72573224,72647020,72686036,72803964,72882230,72958624,73059275,73064764,73107089,73192290&hl=en-NP&gl=np&cs=1&ssta=1&q=janakpurinn&ts=CAEaRwopEicyJTB4MzllYzQxNjkxOTRiYjZiZDoweGM3MzM5NzZhMWUzMmUyMzYSGhIUCgcI6g8QARgSEgcI6g8QARgTGAEyAhAA&qs=CAEyFENnc0l0c1RMOGFIdDVabkhBUkFCOAJCCQk24jIeapczx0IJCTbiMh5qlzPH&ap=ugEHcmV2aWV3cw&ictx=111&ved=1t:247458"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Write a Review on Google
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.section>
  );
};

export default GoogleReviews;