import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GoogleReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Paloma FF",
      rating: 5,
      date: "3 weeks ago",
      content:
        "They will help you with anything you need. If you order food, I really recommend their dal tadka which exceeded my expectations 👍🏼",
      avatarColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "Aaditya Pokharel",
      rating: 5,
      date: "5 months ago",
      content:
        "I'm pleased with the service, both the room and food were commendable. Located at the heart of Janakpur with a cordial team.",
      avatarColor: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "Sumit Agarwalla",
      rating: 4,
      date: "a year ago",
      content:
        "Staff helped me at 5:30 am without hesitation. Value for money. Central location. Clean rooms.",
      avatarColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      name: "Preeti Singh",
      rating: 5,
      date: "6 months ago",
      content:
        "Amazing staff, great food, and the owner was very helpful. Lovely stay.",
      avatarColor: "bg-amber-100 text-amber-600",
    },
    {
      id: 5,
      name: "Simran Mahato",
      rating: 4,
      date: "1 week ago",
      content:
        "Neat and clean rooms. Good food. Polite staff. Very impressed.",
      avatarColor: "bg-pink-100 text-pink-600",
    },
    {
      id: 6,
      name: "Rita Pokharel",
      rating: 4,
      date: "a year ago",
      content:
        "Rooms and service were excellent. Entrance could be better.",
      avatarColor: "bg-indigo-100 text-indigo-600",
    },
  ];

  const averageRating = 4.1;
  const totalReviews = 231;

  const updateArrows = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollByPage = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateArrows();
  }, []);

  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none translate-y-1/2 -translate-x-1/2">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-accent-500">
           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
           <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-accent-400 border-b border-accent-300/30"
          >
              Guest Voices
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-500 mb-8 tracking-tight mithila-section-title"
          >
            Kind Words
          </motion.h1>
          <p className="text-lg sm:text-xl font-serif italic text-text-secondary max-w-2xl mx-auto">
            Honest experiences from our guests who stepped into the heart of Mithila.
          </p>
        </motion.div>

        {/* Overall Rating */}
        <div className="flex flex-col items-center mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="text-6xl sm:text-7xl font-serif font-bold text-accent-500 leading-none">{averageRating}</div>
            <div className="hidden sm:block h-16 w-px bg-accent-300 opacity-20" />
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(averageRating)
                        ? "text-accent-400 fill-accent-400"
                        : "text-accent-300/30"
                    }
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-accent-400 uppercase tracking-widest">
                {totalReviews} Artisan Reviews
              </p>
            </div>
          </div>

          {/* Google badge */}
          <div className="mt-8 flex items-center gap-3 bg-white px-5 py-2.5 rounded-sm border border-accent-300/20 shadow-sm mithila-border scale-90 sm:scale-100">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"/>
            </svg>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">
              Verified on Google
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-10 overflow-x-auto pb-12 scrollbar-hide scroll-smooth px-4"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%]"
            >
              <div className="mithila-card group h-full flex flex-col !p-0 overflow-hidden">
                <div className="p-8 bg-accent-500/5 border-b border-accent-300/10 flex justify-between items-start">
                    <div className="flex gap-4 items-center">
                      <div
                        className={`w-14 h-14 rounded-sm border-2 border-accent-300/30 ${r.avatarColor} flex items-center justify-center font-serif text-2xl font-bold italic shadow-inner`}
                      >
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-serif font-bold text-accent-500 text-lg leading-tight">{r.name}</p>
                        <p className="text-[10px] font-bold text-accent-400 uppercase tracking-widest mt-1">{r.date}</p>
                      </div>
                    </div>
                    <Quote className="text-accent-300 opacity-20 w-8 h-8" />
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                    <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={
                            i < r.rating
                                ? "text-accent-400 fill-accent-400"
                                : "text-accent-300/20"
                            }
                        />
                        ))}
                    </div>
                    <p className="text-text-secondary text-base leading-relaxed italic mb-4">
                    "{r.content}"
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-12">
            <button
                onClick={() => scrollByPage("left")}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 mithila-border ${showLeft ? 'bg-white text-accent-500 active:bg-accent-500 active:text-white shadow-xl' : 'opacity-20 cursor-not-allowed grayscale'}`}
                disabled={!showLeft}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => scrollByPage("right")}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 mithila-border ${showRight ? 'bg-white text-accent-500 active:bg-accent-500 active:text-white shadow-xl' : 'opacity-20 cursor-not-allowed grayscale'}`}
                disabled={!showRight}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>

        {/* Write review */}
        <div className="mt-20 text-center">
          <a
            href="https://www.google.com/travel/search?ap=ugEHcmV2aWV3cw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mithila !px-12 !py-5 hover:!bg-accent-500 transition-colors"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
