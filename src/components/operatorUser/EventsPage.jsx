import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const eventImg =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80";

const ongoingEvents = [
  {
    id: 1,
    title: "Event title goes here",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum imperdiet in amet at tortor. Molestie eu mi nunc pellentesque.",
    location: "Event location goes here",
    date: "10 Sep, 2025 at 09:00 PM - 09:00 PM",
    seats: "1/2",
    price: "$15.00",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Event title goes here",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum imperdiet in amet at tortor. Molestie eu mi nunc pellentesque.",
    location: "Event location goes here",
    date: "10 Sep, 2025 at 09:00 PM - 09:00 PM",
    seats: "1/2",
    price: "$15.00",
    status: "Ongoing",
  },
];

const upcomingEvents = [
  {
    id: 3,
    title: "Event title goes here",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum imperdiet in amet at tortor. Molestie eu mi nunc pellentesque.",
    location: "Event location goes here",
    date: "10 Sep, 2025 at 09:00 PM - 09:00 PM",
    seats: "1/2",
    price: "$15.00",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Event title goes here",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum imperdiet in amet at tortor. Molestie eu mi nunc pellentesque.",
    location: "Event location goes here",
    date: "10 Sep, 2025 at 05:00 PM - 09:00 PM",
    seats: "1/2",
    price: "$15.00",
    status: "Upcoming",
    soldOut: true,
  },
  {
    id: 5,
    title: "Event title goes here",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum imperdiet in amet at tortor. Molestie eu mi nunc pellentesque.",
    location: "Event location goes here",
    date: "10 Sep, 2025 at 09:00 PM - 09:00 PM",
    seats: "1/2",
    price: "$11.00",
    status: "Upcoming",
  },
  {
    id: 6,
    title: "Event title goes here",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum imperdiet in amet at tortor. Molestie eu mi nunc pellentesque.",
    location: "Event location goes here",
    date: "10 Sep, 2025 at 09:00 PM - 09:00 PM",
    seats: "1/2",
    price: "$15.00",
    status: "Upcoming",
  },
];

const navItems = ["Dashboard", "Events", "Pricing", "Privacy policy", "FAQ"];

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M16 2v4M8 2v4M3 10h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const PeopleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
  >
    <path
      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TicketIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
  >
    <path
      d="M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const EventCard = ({ event, onClick }) => (
  <div
    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    onClick={onClick}
  >
    {/* Image with badge overlay */}
    <div className="relative">
      <img src={eventImg} alt="event" className="w-full h-40 object-cover" />
      <span
        className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
          event.status === "Ongoing"
            ? "bg-[#8a9a7a] text-white"
            : "bg-[#d4a09a] text-white"
        }`}
      >
        {event.status}
      </span>
    </div>

    {/* Content */}
    <div className="p-4">
      <h4 className="text-sm font-bold text-gray-800 mb-1">{event.title}</h4>
      <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
        {event.desc}
      </p>

      <div className="flex items-center gap-1.5 mb-1">
        <LocationIcon />
        <span className="text-xs text-gray-400">{event.location}</span>
      </div>

      {event.soldOut && (
        <p className="text-xs text-gray-400 mb-1 pl-5">Sold out</p>
      )}

      <div className="flex items-center gap-1.5 mb-1">
        <CalendarIcon />
        <span className="text-xs text-gray-400">{event.date}</span>
      </div>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1.5">
          <PeopleIcon />
          <span className="text-xs text-gray-400">{event.seats}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <TicketIcon />
          <span className="text-xs font-semibold text-gray-700">
            {event.price}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default function Events() {
  const [activeNav, setActiveNav] = useState("Events");
  const [viewMode, setViewMode] = useState("Group");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex flex-col font-sans">
      {/* ── Navbar ── */}
      <nav className="bg-white shadow-sm px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="#7c5c4e" strokeWidth="2" />
            <circle cx="20" cy="20" r="8" stroke="#7c5c4e" strokeWidth="2" />
            <line
              x1="20"
              y1="12"
              x2="20"
              y2="28"
              stroke="#7c5c4e"
              strokeWidth="1.5"
            />
            <line
              x1="12"
              y1="20"
              x2="28"
              y2="20"
              stroke="#7c5c4e"
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-bold text-gray-800 tracking-widest text-base">
            OLISTAMI
          </span>
        </div>

        {/* Nav Pills */}
        <div className="flex items-center bg-[#f0ebe6] rounded-full px-1.5 py-1 gap-0.5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item);
                if (item === "Dashboard") navigate("/OperatorUser-Home");
                if (item === "Events") navigate("/EventsPage");
                if (item === "Pricing") navigate("/pricing");
                if (item === "Privacy policy") navigate("/policy");
                if (item === "FAQ") navigate("/faq");
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeNav === item
                  ? "bg-[#7c5c4e] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          {/* Chat */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Bell */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500 relative">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
          </button>
          {/* Avatar */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a99a] to-[#7c5c4e] flex items-center justify-center text-white text-xs font-bold">
              EO
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-gray-800 leading-tight">
                Elizabeth Olson
              </p>
              <p className="text-xs text-gray-400 leading-tight">
                example@gmail.com
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Main ── */}
      <main className="flex-1 px-8 py-6 max-w-7xl mx-auto w-full">
        {/* Stats row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 gap-6">
            {/* Total events */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f5f0eb] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-[#7c5c4e]"
                >
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Total events</p>
                <p className="text-sm font-bold text-gray-800">12</p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-200" />

            {/* Ongoing events */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f5f0eb] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-[#7c5c4e]"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 7v5l3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Ongoing events</p>
                <p className="text-sm font-bold text-gray-800">02</p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-200" />

            {/* Upcoming events */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f5f0eb] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-[#7c5c4e]"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 2v4M8 2v4M3 10h18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Upcoming events</p>
                <p className="text-sm font-bold text-gray-800">10</p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-200" />

            {/* Pending events */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f5f0eb] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-[#7c5c4e]"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8v4M12 16h.01"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] text-gray-400">Pending events</p>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-gray-400"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Create button */}
          <button className="bg-[#7c5c4e] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#6b4e42] transition flex items-center gap-2">
            Create new event
            <span className="text-lg leading-none">+</span>
          </button>
        </div>

        {/* View toggle */}
        <div className="flex justify-end mb-4 gap-2">
          {["11", "Group", "Retreat"].map((v) => (
            <button
              key={v}
              onClick={() => setViewMode(v)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition ${
                viewMode === v
                  ? "bg-[#7c5c4e] text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* ── Ongoing Events ── */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-800 mb-4">
            Ongoing events
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {ongoingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => navigate("/event-detail")}
              />
            ))}
          </div>
        </div>

        {/* ── Upcoming Events ── */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-800 mb-4">
            Upcoming events
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => navigate("/event-detail")}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
