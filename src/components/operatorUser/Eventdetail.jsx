import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Footer from "../Footer";

const eventImg = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80";
const avatarImg = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80";

const navItems = ["Dashboard", "Events", "Pricing", "Privacy policy", "FAQ"];

// Ticket sold statistics — 30 days
const ticketData = Array.from({ length: 30 }, (_, i) => ({
  day: String(i + 1).padStart(2, "0"),
  Tickets: Math.floor(Math.random() * 800) + 100,
}));

const attendees = [
  { name: "Elizabeth Olson", email: "example@gmail.com", tickets: "02", date: "05 Sep, 2025", price: "$30.00" },
  { name: "Elizabeth Olson", email: "example@gmail.com", tickets: "02", date: "05 Sep, 2025", price: "$30.00" },
  { name: "Elizabeth Olson", email: "example@gmail.com", tickets: "01", date: "05 Sep, 2025", price: "$30.00" },
  { name: "Elizabeth Olson", email: "example@gmail.com", tickets: "04", date: "05 Sep, 2025", price: "$30.00" },
  { name: "Elizabeth Olson", email: "example@gmail.com", tickets: "02", date: "05 Sep, 2025", price: "$30.00" },
  { name: "Elizabeth Olson", email: "example@gmail.com", tickets: "02", date: "05 Sep, 2025", price: "$30.00" },
];

const timeslots = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"];

// ── Icons ──
const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DeleteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const EventTypeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400">
    <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 8h4l3 5v3h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const DateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const TicketSoldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400">
    <path d="M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const MoneyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v10M9 9.5c0-1.38 1.34-2.5 3-2.5s3 1.12 3 2.5S13.66 12 12 12s-3 1.12-3 2.5S10.34 17 12 17s3-1.12 3-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const EarnedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#7c5c4e]">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v10M9 9.5c0-1.38 1.34-2.5 3-2.5s3 1.12 3 2.5S13.66 12 12 12s-3 1.12-3 2.5S10.34 17 12 17s3-1.12 3-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function EventDetail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex flex-col font-sans">

      {/* ── Navbar ── */}
      <nav className="bg-white shadow-sm px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="#7c5c4e" strokeWidth="2" />
            <circle cx="20" cy="20" r="8" stroke="#7c5c4e" strokeWidth="2" />
            <line x1="20" y1="12" x2="20" y2="28" stroke="#7c5c4e" strokeWidth="1.5" />
            <line x1="12" y1="20" x2="28" y2="20" stroke="#7c5c4e" strokeWidth="1.5" />
          </svg>
          <span className="font-bold text-gray-800 tracking-widest text-base">OLISTAMI</span>
        </div>

        <div className="flex items-center bg-[#f0ebe6] rounded-full px-1.5 py-1 gap-0.5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Dashboard") navigate("/OperatorUser-Home");
                if (item === "Events") navigate("/EventsPage");
                if (item === "Pricing") navigate("/pricing");
                if (item === "Privacy policy") navigate("/policy");
                if (item === "FAQ") navigate("/faq");
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                item === "Events"
                  ? "bg-[#7c5c4e] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500 relative">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a99a] to-[#7c5c4e] flex items-center justify-center text-white text-xs font-bold">
              EO
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-gray-800 leading-tight">Elizabeth Olson</p>
              <p className="text-xs text-gray-400 leading-tight">example@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Main ── */}
      <main className="flex-1 px-8 py-6 max-w-7xl mx-auto w-full">

        {/* ── Header bar ── */}
        <div className="relative bg-white rounded-2xl px-5 py-4 mb-6 flex items-center justify-between overflow-hidden shadow-sm border border-gray-100">
          {/* Decorative blob top-right */}
          <div className="absolute right-0 top-0 w-48 h-full opacity-30 pointer-events-none">
            <svg viewBox="0 0 200 80" className="w-full h-full">
              <ellipse cx="160" cy="40" rx="80" ry="50" fill="#c9a99a" />
            </svg>
          </div>
          <div className="flex items-center gap-3 z-10">
            <button
              onClick={() => navigate("/EventsPage")}
              className="w-7 h-7 rounded-full bg-[#f5f0eb] flex items-center justify-center hover:bg-[#ede5de] transition"
            >
              <BackIcon />
            </button>
            <h2 className="text-base font-bold text-gray-800">Event title goes here</h2>
          </div>
          <div className="flex items-center gap-2 z-10">
            <button className="w-8 h-8 rounded-lg bg-[#f5f0eb] flex items-center justify-center hover:bg-[#ede5de] transition text-gray-600">
              <EditIcon />
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#c0392b] flex items-center justify-center hover:bg-[#a93226] transition text-white">
              <DeleteIcon />
            </button>
          </div>
        </div>

        {/* ── Two column layout ── */}
        <div className="flex gap-6">

          {/* ── LEFT: Event info ── */}
          <div className="w-64 flex-shrink-0">
            <img src={eventImg} alt="event" className="w-full h-40 object-cover rounded-2xl mb-4" />

            <h3 className="text-sm font-bold text-gray-800 mb-1">Event title goes here</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs border border-[#c9a99a] text-[#c9a99a] px-3 py-0.5 rounded-full">Upcoming</span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Dignissim donec nunc tellus bibendum neque vel ut vulputate id. Aliquet quis enim tristique dictumst. Odio nec semper ornare maecenas eget diam tellus enim id. Mattis erat a dignissim mauris velit aliquam nulla. Auctor vestibulum id et risus in. Facilisi libero vitae neque feugiat volutpat risus eget. Vehicula nec morbi risus sodales tempor. Nibh sem diam dui gravida felis eu molestie euismod. In quisque viverra nisi facilisi tellus.
            </p>

            {/* Event type & Delivery mode */}
            <div className="flex gap-4 mb-3">
              <div className="flex items-start gap-2">
                <EventTypeIcon />
                <div>
                  <p className="text-[10px] text-gray-400">Event type</p>
                  <p className="text-xs font-semibold text-gray-700">Group</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DeliveryIcon />
                <div>
                  <p className="text-[10px] text-gray-400">Delivery mode</p>
                  <p className="text-xs font-semibold text-gray-700">Offline (In-person)</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2 mb-3">
              <LocationIcon />
              <div>
                <p className="text-[10px] text-gray-400">Location</p>
                <p className="text-xs font-semibold text-gray-700">Event location goes here</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-start gap-2 mb-3">
              <DateIcon />
              <div>
                <p className="text-[10px] text-gray-400">Date</p>
                <p className="text-xs font-semibold text-gray-700">10 Sep, 2025</p>
              </div>
            </div>

            {/* Times */}
            <div className="flex items-start gap-2 mb-4">
              <ClockIcon />
              <div>
                <p className="text-[10px] text-gray-400 mb-1.5">Times</p>
                <div className="flex flex-wrap gap-1.5">
                  {timeslots.map((t) => (
                    <span key={t} className="text-[10px] bg-[#f5f0eb] text-gray-600 px-2 py-0.5 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket sold + price */}
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <TicketSoldIcon />
                <div>
                  <p className="text-[10px] text-gray-400">Ticket sold</p>
                  <p className="text-xs font-bold text-gray-800">153 / 300</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MoneyIcon />
                <div>
                  <p className="text-[10px] text-gray-400">Ticket price</p>
                  <p className="text-xs font-bold text-gray-800">$15.00</p>
                </div>
              </div>
            </div>

            {/* Total earned */}
            <div className="bg-[#f5f0eb] rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <EarnedIcon />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Total earned from this event</p>
                <p className="text-sm font-bold text-gray-800">$2,295</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Chart + Table ── */}
          <div className="flex-1 min-w-0">

            {/* Chart */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 mb-4">Ticket sold statistics</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={ticketData} barSize={18} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ fontSize: 11, borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    cursor={{ fill: "#f5f0eb" }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="Tickets" fill="#9b9bde" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Attendee List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-800">Attendee List</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-[#faf8f6]">
                    <th className="text-left text-xs text-gray-400 font-medium px-6 py-3">Attendee name</th>
                    <th className="text-center text-xs text-gray-400 font-medium px-4 py-3">Ticket booked</th>
                    <th className="text-center text-xs text-gray-400 font-medium px-4 py-3">Booking date</th>
                    <th className="text-right text-xs text-gray-400 font-medium px-6 py-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {attendees.map((a, i) => (
                    <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <img src={avatarImg} alt="avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-gray-800">{a.name}</p>
                            <p className="text-xs text-gray-400">{a.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-xs font-semibold text-gray-700 px-4 py-3">{a.tickets}</td>
                      <td className="text-center text-xs text-gray-400 px-4 py-3">{a.date}</td>
                      <td className="text-right text-xs font-bold text-gray-800 px-6 py-3">{a.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}