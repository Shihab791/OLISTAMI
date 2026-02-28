import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sourov Das Mithun",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "This is a very nice event. I like the event so much. The we...",
  },
  {
    name: "Riya Sharma",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "I had an amazing time at the festival. The atmosphere w...",
  },
  {
    name: "Anik Dutta",
    rating: 2,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    message:
      "The event featured some talented artists. Each p...",
  },
  {
    name: "Priya Sen",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "What a wonderful experience! The decorations added a m...",
  },
  {
    name: "Sourov Das Mithun",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "This is a very nice event. I like the event so much. The we...",
  },
  {
    name: "Riya Sharma",
    rating: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "I had an amazing time at the festival. The atmosphere w...",
  },
  {
    name: "Anik Dutta",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    message:
      "The event featured some talented artists. Each p...",
  },
  {
    name: "Priya Sen",
    rating: 3,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "What a wonderful experience! The decorations added a m...",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Testimonial
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
          >
            {/* Avatar */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />

            {/* Name */}
            <h3 className="font-semibold text-lg mb-2">
              {item.name}
            </h3>

            {/* Stars */}
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < item.rating
                      ? "text-orange-400 fill-orange-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            {/* Message */}
            <p className="text-sm text-gray-600">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;