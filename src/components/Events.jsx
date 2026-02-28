import React from "react";
import first from "../assets/exploreEvents/first.jpg"
import second from "../assets/exploreEvents/second.jpg"
import third from "../assets/exploreEvents/third.jpg"
import four from "../assets/exploreEvents/four.jpg"
import five from "../assets/exploreEvents/five.jpg"
import six from "../assets/exploreEvents/six.jpg"

const events = [
  {
    id: 1,
    title: "Majores qui aut dese",
    description: "Dolores error numqua",
    location: "Los Angeles, New York, California, America",
    date: "2026-02-28",
    img:first,
    author: "Admin",
    views: 943,
  },
  {
    id: 2,
    title: "Molestiae sit proide",
    description: "Quia officia ullamco",
    location: "Rome, Lazio, Italy",
    date: "2026-02-28",
    img:second,
    author: "Elizabeth Olsen",
    views: 364,
  },
  {
    id: 3,
    title: "Carnevale di Venezia",
    description:
      "The city's narrow alleys and canals fill with people wearing elaborate 18th-century costumes.",
    location: "Venice, Italy",
    date: "12:15 AM",
    img: third,
        author: "Admin",
    views: 364,
  },
  {
    id: 4,
    title: "The Battle of the Oranges",
    description:
      "Thousands of townspeople divide into teams to reenact a medieval revolt.",
    location: "Rome, Lazio, Italy",
    date: "12:05 AM",
    img: four,
    author: "Admin",
    views: 50,
  },
  {
    id: 5,
    title: "Giostra del Saracino",
    description:
      "Knights representing four quarters of the city gallop at full speed.",
    location: "Rome, Tuscany, Italy",
    date: "2026-09-06",
    img: five,
    author: "Elizabeth Olsen",
    views: 10,
  },
  {
    id: 6,
    title: "Creation timelines",
    description:
      "It's difficult to find examples of lorem ipsum in use before Letraset.",
    location: "Milan, Tuscany, Italy",
    date: "2026-02-11",
    img: six,
    author: "Jim Islam",
    views: 200,
  },
];

const Events = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-2xl font-bold text-center mb-10">
        Explore Events
      </h2>

      {/* Center Container */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-sm w-[300px] overflow-hidden hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={event.img}
                alt={event.title}
                className="h-36 w-full object-cover"
              />

              {/* Content */}
              <div className="p-3 space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold text-gray-700">
                    {event.author}
                  </span>
                  <span className="text-[10px] bg-gray-200 px-2 py-[2px] rounded">
                    1.1
                  </span>
                </div>

                <h3 className="font-semibold text-sm">
                  {event.title}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-2">
                  {event.description}
                </p>

                <div className="text-[11px] text-gray-500 pt-1 space-y-0.5">
                  <p>📍 {event.location}</p>
                  <p>📅 {event.date}</p>
                  <p>👁 {event.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;