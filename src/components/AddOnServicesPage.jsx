import { useState } from "react";

const NAV_LINKS = ["Home", "Explore", "Booking", "Contact Us", "Resources", "Profile"];

const ADDONS_ALL = [
  {
    icon: "🎯",
    label: "Featured event",
    price: "$500",
    btnColor: "#FF6B6B",
    borderColor: "#FF6B6B",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "📄",
    label: "Mini PDF Course",
    price: "$500",
    btnColor: "#7C5CBF",
    borderColor: "#7C5CBF",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "📌",
    label: "Exclusive Post",
    price: "$500",
    btnColor: "#30C9A0",
    borderColor: "#30C9A0",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "🎬",
    label: "Exclusive Video",
    price: "$500",
    btnColor: "#FF6B6B",
    borderColor: "#FF6B6B",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "📧",
    label: "Newsletter",
    price: "$500",
    btnColor: "#7C5CBF",
    borderColor: "#7C5CBF",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "🎓",
    label: "Video masterclass",
    price: "$500",
    btnColor: "#30C9A0",
    borderColor: "#30C9A0",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "📝",
    label: "Blog feature",
    price: "$500",
    btnColor: "#FF6B6B",
    borderColor: "#FF6B6B",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "🎙️",
    label: "Podcast spotlight",
    price: "$500",
    btnColor: "#7C5CBF",
    borderColor: "#7C5CBF",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "📺",
    label: "Media service",
    price: "$500",
    btnColor: "#30C9A0",
    borderColor: "#30C9A0",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: "⚙️",
    label: "Custom solutions",
    price: "$500",
    btnColor: "#7C5CBF",
    borderColor: "#7C5CBF",
    tag: "Buy now",
    subtitle: "Add on Bis goes here",
    benefits: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
];

export default function AddOnServicesPage({ onBack }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-[5%] flex items-center justify-between h-14 gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-sm text-gray-800 no-underline whitespace-nowrap">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" stroke="#C9856A" strokeWidth="1.8" fill="none"/>
            <path d="M18 4C10 4 4 11 4 18s6 14 14 14" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M18 4c8 0 14 7 14 14s-6 14-14 14" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M4 18q7-5 14 0t14 0" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          </svg>
          OLISTAMI
        </a>

        {/* Links */}
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          {NAV_LINKS.map((l, i) => (
            <li key={l}>
              <a href="#" className={`text-[13px] font-medium no-underline transition-colors ${i === 0 ? "text-[#C9856A] font-semibold" : "text-gray-500 hover:text-gray-800"}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
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
      <div className="pt-14 pb-12">

        {/* Page title */}
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold text-gray-800">Add on services</h1>
        </div>

        {/* Purple discount banner */}
        <div className="mx-[5%] mb-8 bg-[#7C5CBF] text-white rounded-xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>⭐</span>
            <span>Automatic 5% discount at checkout when purchasing two or more add-ons</span>
          </div>
          <button className="text-white/70 hover:text-white text-lg leading-none">×</button>
        </div>

        {/* Cards grid */}
        <div className="mx-[5%] grid grid-cols-3 gap-5 mb-8">
          {ADDONS_ALL.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 p-5 flex flex-col"
              style={{ borderColor: a.borderColor }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: `${a.btnColor}18` }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-800">{a.label}</div>
                    <div className="font-bold text-sm" style={{ color: a.btnColor }}>{a.price}</div>
                  </div>
                </div>
                <button
                  className="text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                  style={{ background: a.btnColor }}
                >
                  🛒 {a.tag}
                </button>
              </div>

              {/* Subtitle */}
              <div className="text-xs text-gray-400 mb-3">{a.subtitle}</div>

              {/* Benefits */}
              <div className="mb-1">
                <div className="text-xs font-bold mb-2" style={{ color: a.btnColor }}>
                  Key benefits
                </div>
                <div className="flex flex-col gap-1">
                  {a.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-1.5 text-[11px] text-gray-400">
                      <span className="mt-0.5 shrink-0" style={{ color: a.btnColor }}>•</span>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* More details */}
              <div className="mt-auto pt-4">
                <button
                  className="w-full text-xs font-bold py-2 rounded-lg border bg-transparent transition-colors hover:opacity-80"
                  style={{ borderColor: a.btnColor, color: a.btnColor }}
                >
                  More details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mx-[5%] bg-gray-50 rounded-xl p-4 flex gap-3 items-start">
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
              <p className="text-xs text-gray-500 leading-relaxed mb-4 max-w-[240px]">
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

export { AddOnServicesPage };