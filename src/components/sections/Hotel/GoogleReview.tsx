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
    <section className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif text-center mb-12"
        >
          Guest Reviews
        </motion.h2>

        {/* Overall Rating */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold">{averageRating}</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(averageRating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Based on {totalReviews} reviews
              </p>
            </div>
          </div>

          {/* Google badge */}
          <div className="mt-4 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"/>
            </svg>
            <span className="text-sm font-medium text-gray-600">
              Google Reviews
            </span>
          </div>
        </div>

        {/* Arrows */}
        {showLeft && (
          <button
            onClick={() => scrollByPage("left")}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
          >
            <ChevronLeft />
          </button>
        )}
        {showRight && (
          <button
            onClick={() => scrollByPage("right")}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
          >
            <ChevronRight />
          </button>
        )}

        {/* Reviews */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              whileHover={{ y: -6 }}
              className="flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] xl:w-[24%]"
            >
              <div className="bg-white rounded-2xl shadow-lg h-full border">
                <div className="p-6 bg-primary-50 rounded-t-2xl">
                  <div className="flex justify-between mb-3">
                    <div className="flex gap-3">
                      <div
                        className={`w-12 h-12 rounded-full ${r.avatarColor} flex items-center justify-center font-bold`}
                      >
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold">{r.name}</p>
                        <p className="text-xs text-gray-500">{r.date}</p>
                      </div>
                    </div>
                    <Quote className="text-primary-300 opacity-40" />
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < r.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6 text-sm text-gray-600 leading-relaxed">
                  {r.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Write review */}
        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/travel/search?ap=ugEHcmV2aWV3cw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition shadow-lg"
          >
            Write a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
