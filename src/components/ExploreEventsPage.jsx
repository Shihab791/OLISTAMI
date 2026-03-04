import { useState } from "react";
import { EventDetailPage } from "./EventDetailPage";

const NAV_LINKS = ["Home", "Explore", "Booking", "Contact Us", "Resources", "Profile"];

const ALL_EVENTS = [
  {
    id: 1,
    host: "Julian Ena",
    hostImg: null,
    tag: "11",
    title: "Event title",
    desc: "This event organize for the music lover peoples. Every members...",
    location: "Event location",
    date: "13 September, 2025",
    time: "",
    price: "$589.00",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    hasPlay: true,
  },
  {
    id: 2,
    host: "Julian Ena",
    hostImg: null,
    tag: "Group",
    title: "Event title",
    desc: "This event organize for the music lover peoples. Every members...",
    location: null,
    link: "http://zoom21.43234df",
    date: null,
    time: "09:00 AM",
    price: "$589.00",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80",
    hasPlay: false,
  },
  {
    id: 3,
    host: "Julian Ena",
    hostImg: null,
    tag: "Retreat",
    title: "Event title",
    desc: "This event organize for the music lover peoples. Every members...",
    location: "Event location",
    date: "10 Sep, 2025 at 09:00 AM – 05:00 PM",
    time: "",
    price: "$589.00",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80",
    hasPlay: false,
  },
  {
    id: 4,
    host: "Julian Ena",
    hostImg: null,
    tag: "",
    title: "Event title",
    desc: "",
    location: null,
    date: "13 September, 2025",
    time: "09:00 AM – 05:00 PM",
    price: null,
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
    hasPlay: true,
  },
  {
    id: 5,
    host: "Julian Ena",
    hostImg: null,
    tag: "Group",
    title: "Event title",
    desc: "This event organize for the music lover peoples. Every members...",
    location: null,
    link: "http://zoom21.43234df",
    date: null,
    time: "09:00 AM",
    price: "$589.00",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
    hasPlay: false,
  },
  {
    id: 6,
    host: "Julian Ena",
    hostImg: null,
    tag: "Id",
    title: "Event title",
    desc: "This event organize for the music lover peoples. Every members...",
    location: "Event location",
    date: "13 September, 2025",
    time: null,
    price: "$589.00",
    img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&q=80",
    hasPlay: false,
  },
];

function EventCard({ ev, onClick }) {
  const [saved, setSaved] = useState(false);
  

  return (
    <div onClick={onClick} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative">
        <img
          src={ev.img}
          alt={ev.title}
          className="w-full object-cover"
          style={{ height: 170 }}
        />
        {/* Heart */}
        <button
          onClick={() => setSaved(v => !v)}
          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill={saved ? "#C9856A" : "none"} stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        {/* Play button */}
        {ev.hasPlay && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9856A">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
        )}
        {/* Tag */}
        {ev.tag && (
          <span className="absolute top-2 left-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/90 text-gray-500 shadow-sm">
            {ev.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-3.5">
        {/* Host row */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C9856A] to-[#f5a623] flex items-center justify-center text-white text-xs font-bold shrink-0">
              {ev.host[0]}
            </div>
            <span className="font-semibold text-[13px] text-gray-600">{ev.host}</span>
          </div>
          {ev.tag && (
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border border-gray-200 text-gray-400">
              {ev.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="font-bold text-[14.5px] text-gray-800 mb-1.5">{ev.title}</div>

        {/* Desc */}
        {ev.desc && (
          <div className="text-[12px] text-gray-400 leading-relaxed mb-2">{ev.desc}</div>
        )}

        {/* Details */}
        <div className="flex flex-col gap-1">
          {ev.link && (
            <div className="flex items-center gap-1.5 text-[11.5px] text-gray-500">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
              <span className="truncate">{ev.link}</span>
            </div>
          )}
          {ev.location && (
            <div className="flex items-center gap-1.5 text-[11.5px] text-gray-500">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {ev.location}
            </div>
          )}
          {ev.date && (
            <div className="flex items-center gap-1.5 text-[11.5px] text-gray-500">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {ev.date}
            </div>
          )}
          {ev.time && (
            <div className="flex items-center gap-1.5 text-[11.5px] text-gray-500">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {ev.time}
            </div>
          )}
          {ev.price && (
            <div className="text-[13.5px] font-bold mt-1" style={{ color: "#C9856A" }}>
              {ev.price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExploreEventsPage({ onBack }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const totalPages = 2;
  if (selectedEvent) {
  return (
    <EventDetailPage 
      event={selectedEvent} 
      onBack={() => setSelectedEvent(null)} 
    />
  );
}

  const filtered = ALL_EVENTS.filter(ev =>
    search === "" ||
    ev.title.toLowerCase().includes(search.toLowerCase()) ||
    ev.host.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-[5%] flex items-center justify-between h-14 gap-4">
        <a href="#" className="flex items-center gap-2 font-bold text-sm text-gray-800 no-underline">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" stroke="#C9856A" strokeWidth="1.8" fill="none"/>
            <path d="M18 4C10 4 4 11 4 18s6 14 14 14" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M18 4c8 0 14 7 14 14s-6 14-14 14" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M4 18q7-5 14 0t14 0" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          </svg>
          OLISTAMI
        </a>

        <ul className="flex items-center gap-5 list-none m-0 p-0">
          {NAV_LINKS.map((l, i) => (
            <li key={l}>
              <a href="#" className={`text-[13px] font-medium no-underline transition-colors ${i === 1 ? "text-[#C9856A] font-semibold underline underline-offset-4 decoration-[#C9856A]" : "text-gray-500 hover:text-gray-800"}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {[
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
          ].map((ic, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
              {ic}
            </div>
          ))}
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <div className="pt-14 pb-10 px-[5%] max-w-[1100px] mx-auto">

        {/* Title + Search row */}
        <div className="flex items-center justify-between py-6">
          <h1 className="text-xl font-bold text-gray-800">Explore OLISTAMI Events</h1>

          <div className="flex items-center gap-2">
            {/* Search box */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="outline-none text-sm text-gray-600 bg-transparent w-40 placeholder-gray-400"
              />
            </div>

            {/* Sort icon */}
            <button className="w-9 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
              </svg>
            </button>

            {/* Filter icon */}
            <button className="w-9 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          {filtered.map(ev => (
            <EventCard key={ev.id} ev={ev} onClick={() => setSelectedEvent(ev)} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1.5">
          {/* Prev */}
          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>
            </svg>
          </button>

          {/* Page numbers */}
          {[1, 2].map(p => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === p
                  ? "text-white"
                  : "border border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
              style={currentPage === p ? { background: "#C9856A" } : {}}
            >
              {p}
            </button>
          ))}

          {/* Next */}
          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-gray-50 rounded-xl p-4 flex gap-3 items-start">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className="text-[11.5px] text-gray-400 leading-relaxed">
            Olistami is a self-service platform where each user independently publishes content and services, assuming full legal responsibility. Holistic practices are complementary to official medicine and do not replace it.*
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2a2a2a] text-gray-400 pt-12 pb-8">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid grid-cols-4 gap-12 pb-8">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#aaa" strokeWidth="1.5" fill="none"/>
                  <path d="M18 4C10 4 4 11 4 18s6 14 14 14" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M18 4c8 0 14 7 14 14s-6 14-14 14" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M4 18q7-5 14 0t14 0" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
                <span className="font-bold text-base text-white tracking-wide">OLISTAMI</span>
              </div>
              <p className="font-bold text-sm text-white mb-2">Manage your all events in one place</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4 max-w-[220px]">
                The operator dashboard lets event managers create, manage, and track events with ease, offering full control and clear insights for smooth execution.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">admin@gmail.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="font-bold text-[15px] text-white mb-5">Newsletter</div>
              <div className="text-xs text-gray-400 mb-2">Email</div>
              <div className="relative mb-3">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white border-none rounded-xl py-3 pl-8 pr-3 text-xs text-gray-700 outline-none"
                />
              </div>
              <button className="bg-[#C9A99A] text-white border-none rounded-xl px-7 py-2.5 text-sm font-semibold cursor-pointer hover:bg-[#b8887a] transition-colors">
                Subscribe
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-bold text-[15px] text-white mb-5">Quick links</div>
              <div className="flex flex-col gap-3">
                {["Home", "Explore", "Booking", "Contact Us", "Profile"].map(l => (
                  <a key={l} href="#" className="text-gray-400 text-sm text-center no-underline hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Social + App */}
            <div>
              <div className="font-bold text-[15px] text-white mb-4">Follow us on</div>
              <div className="flex gap-2 mb-6">
                {[
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#2a2a2a"/></svg>,
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                ].map((ic, i) => (
                  <div key={i} className="w-9 h-9 rounded-lg bg-[#3a3a3a] flex items-center justify-center cursor-pointer hover:bg-[#555] transition-colors">
                    {ic}
                  </div>
                ))}
              </div>
              <div className="font-bold text-sm text-white mb-3">Download our app</div>
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>, label: "Play store" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v8M8 12h8"/></svg>, label: "App store" },
              ].map((app, i) => (
                <div key={i} className="bg-[#3a3a3a] rounded-xl px-4 py-2.5 mb-2.5 flex items-center gap-3 cursor-pointer hover:bg-[#4a4a4a] transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#555] flex items-center justify-center shrink-0">{app.icon}</div>
                  <span className="font-semibold text-sm text-white">{app.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { ExploreEventsPage };