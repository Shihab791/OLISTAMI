import { useState } from "react";

const NAV_LINKS = ["Home", "Explore", "Booking", "Contact Us", "Resources", "Profile"];

export default function EventDetailPage({ event, onBack }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [quantity, setQuantity] = useState(2);
  const [coupon, setCoupon] = useState("ABID25");
  const [selectedDate, setSelectedDate] = useState("");

  const ev = event || {
    host: "Julian Ena",
    tag: "Group",
    title: "Event title",
    desc: "Lorem ipsum dolor sit amet consectetur. Dignissim donec nunc tellus bibendum neque vel ut vulputate id. Aliquet quis enim tristique dictumst. Odio nec semper ornare maecenas eget diam tellus enim id. Mattis orci a dignissim mauris velit aliquet nulla. Auctor vestibulum id et risus in. Facilisi libero vitae neque feugiat volutpat risus eget. Vehicula nec morbi risus sodales tempor. Nibh sem diam dui gravida felis eu molestie euismod. In quisque viverra nisi facilisi tellus.",
    price: "$589.00",
    location: "Event location",
    time: "09:00 AM",
    available: 10,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter','Segoe UI',sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 flex items-center justify-between h-14 gap-4" style={{ padding: "0 5%" }}>
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
              <a href="#" className={`text-xs font-medium no-underline transition-colors ${i === 1 ? "text-[#C9856A] font-semibold" : "text-gray-500 hover:text-gray-800"}`}>
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

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "70px 20px 60px" }}>

        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer mb-5 p-0"
          style={{ color: "#555", fontSize: 14, fontWeight: 600, fontFamily: "inherit" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back
        </button>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-5" style={{ height: 220 }}>
          <img
            src={ev.img}
            alt={ev.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Host + tag row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ background: "linear-gradient(135deg,#C9856A,#f5a623)" }}>
              {ev.host[0]}
            </div>
            <span className="font-semibold text-sm text-gray-700">{ev.host}</span>
          </div>
          {ev.tag && (
            <span className="text-xs font-semibold px-3 py-1 rounded-lg border border-gray-200 text-gray-400">
              {ev.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-bold text-gray-800 mb-3" style={{ fontSize: 18 }}>{ev.title}</h1>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed mb-4">{ev.desc}</p>

        {/* Details row */}
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span className="font-semibold text-gray-700">{ev.price}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {ev.location}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {ev.time}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Available: {ev.available}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-5" />

        {/* Select Date */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
          <div className="relative">
            <select
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-400 appearance-none outline-none bg-white"
            >
              <option value="">Select</option>
              <option value="2025-09-13">13 September, 2025</option>
              <option value="2025-09-14">14 September, 2025</option>
              <option value="2025-09-15">15 September, 2025</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Quantity of tickets */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity of tickets</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg hover:bg-gray-50 transition-colors bg-white"
            >
              −
            </button>
            <span className="text-sm font-semibold text-gray-700 w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg hover:bg-gray-50 transition-colors bg-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Coupon code */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Coupon code</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              className="flex-1 border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-600 outline-none"
            />
            <button
              className="px-5 py-3 rounded-xl text-sm font-semibold border border-gray-200 text-gray-500 bg-white hover:bg-gray-50 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            className="py-3.5 rounded-xl text-sm font-semibold border-2 bg-white transition-colors hover:bg-gray-50"
            style={{ borderColor: "#C9A99A", color: "#C9A99A" }}
          >
            Send Message
          </button>
          <button
            className="py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#C9A99A" }}
          >
            Purchase
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-gray-50 rounded-xl p-4 flex gap-3 items-start">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className="text-xs text-gray-400 leading-relaxed">
            Olistami is a self-service platform where each user independently publishes content and services, assuming full legal responsibility. Holistic practices are complementary to official medicine and do not replace it.*
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2a2a2a] text-gray-400 pt-12 pb-8">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
          <div className="grid grid-cols-4 gap-10 pb-8">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#aaa" strokeWidth="1.5" fill="none"/>
                  <path d="M18 4C10 4 4 11 4 18s6 14 14 14" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M18 4c8 0 14 7 14 14s-6 14-14 14" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M4 18q7-5 14 0t14 0" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
                <span className="font-bold text-base text-white tracking-wide">OLISTAMI</span>
              </div>
              <p className="font-bold text-sm text-white mb-2">Manage your all events in one place</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4" style={{ maxWidth: 220 }}>
                The operator dashboard lets event managers create, manage, and track events with ease, offering full control and clear insights for smooth execution.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">admin@gmail.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="font-bold text-sm text-white mb-4">Newsletter</div>
              <div className="text-xs text-gray-400 mb-2">Email</div>
              <div className="relative mb-3">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <input type="email" placeholder="Enter your email address" value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white border-none rounded-xl py-2.5 pl-8 pr-3 text-xs text-gray-700 outline-none" />
              </div>
              <button className="text-white border-none rounded-xl px-6 py-2 text-xs font-semibold cursor-pointer hover:opacity-90 transition-opacity" style={{ background: "#C9A99A" }}>
                Subscribe
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-bold text-sm text-white mb-4">Quick links</div>
              <div className="flex flex-col gap-3">
                {["Home", "Explore", "Booking", "Contact Us", "Profile"].map(l => (
                  <a key={l} href="#" className="text-gray-400 text-xs text-center no-underline hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>

            {/* Social + App */}
            <div>
              <div className="font-bold text-sm text-white mb-3">Follow us on</div>
              <div className="flex gap-2 mb-5">
                {[
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#2a2a2a"/></svg>,
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                ].map((ic, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-[#3a3a3a] flex items-center justify-center cursor-pointer hover:bg-[#555] transition-colors">{ic}</div>
                ))}
              </div>
              <div className="font-bold text-xs text-white mb-2">Download our app</div>
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>, label: "Play store" },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v8M8 12h8"/></svg>, label: "App store" },
              ].map((app, i) => (
                <div key={i} className="bg-[#3a3a3a] rounded-xl px-3 py-2 mb-2 flex items-center gap-2.5 cursor-pointer hover:bg-[#4a4a4a] transition-colors">
                  <div className="w-6 h-6 rounded-lg bg-[#555] flex items-center justify-center shrink-0">{app.icon}</div>
                  <span className="font-semibold text-xs text-white">{app.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { EventDetailPage };