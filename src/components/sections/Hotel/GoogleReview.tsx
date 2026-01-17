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
        "I'm pleased with the service, both the room and food were commendable. The food is prepared bespoke and the staff is extremely cordial.",
      avatarColor: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "Sumit Agarwalla",
      rating: 4,
      date: "a year ago",
      content:
        "I must rate them 6 stars for kindness. Staff helped me at 5:30 am without hesitation. Value for money stay.",
      avatarColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      name: "Preeti Singh",
      rating: 5,
      date: "6 months ago",
      content:
        "Loved the stay. Amazing staff, great food, and the owner was very helpful. Will visit again.",
      avatarColor: "bg-amber-100 text-amber-600",
    },
    {
      id: 5,
      name: "Simran Mahato",
      rating: 4,
      date: "1 week ago",
      content:
        "Neat and clean rooms. Good food and polite staff. Everything was well maintained.",
      avatarColor: "bg-pink-100 text-pink-600",
    },
    {
      id: 6,
      name: "Rita Pokharel",
      rating: 4,
      date: "a year ago",
      content:
        "Rooms and service were excellent. Entrance passage could be better but overall a good stay.",
      avatarColor: "bg-indigo-100 text-indigo-600",
    },
  ];

  const updateArrows = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollByPage = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const amount = container.clientWidth * 0.9;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateArrows();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl font-serif text-center mb-14">
          Guest Reviews
        </h2>

        {/* Arrows */}
        {showLeft && (
          <button
            onClick={() => scrollByPage("left")}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
          >
            <ChevronLeft />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scrollByPage("right")}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
          >
            <ChevronRight />
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ y: -6 }}
              className="
                flex-shrink-0
                w-[85%]
                sm:w-[48%]
                lg:w-[32%]
                xl:w-[24%]
              "
            >
              <div className="bg-white rounded-2xl shadow-lg h-full border border-gray-100">
                <div className="p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-t-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <div
                        className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center font-bold`}
                      >
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-gray-500">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <Quote className="text-primary-300 opacity-40" />
                  </div>

                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6 text-sm text-gray-600 leading-relaxed">
                  {review.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
