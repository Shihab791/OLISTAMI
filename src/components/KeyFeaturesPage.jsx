import { useState } from "react";

const NAV_LINKS = ["Home", "Explore", "Booking", "Contact Us", "Resources", "Profile"];

const FEATURES_DETAIL = [
  {
    bg:"#EEF2FF",
    icon:(
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="36" height="32" rx="4" fill="#E8EEFF" stroke="#8B9FE8" strokeWidth="2"/>
        <rect x="10" y="14" width="16" height="2.5" rx="1.25" fill="#8B9FE8"/>
        <rect x="10" y="20" width="12" height="2.5" rx="1.25" fill="#B0BCEF"/>
        <circle cx="34" cy="30" r="7" fill="#6979D4"/>
        <circle cx="34" cy="28" r="2.5" fill="#fff"/>
        <path d="M29.5 34c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title:"Personal Profile",
    desc:"Create your own account and add personal details to customize your experience. Update your profile anytime, keep your information secure, and manage your preferences with ease. Your profile is the starting point for exploring and booking events tailored just for you."
  },
  {
    bg:"#FFF0F0",
    icon:(
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="36" height="32" rx="4" fill="#FFE8E8" stroke="#F08080" strokeWidth="2"/>
        <rect x="12" y="14" width="24" height="3" rx="1.5" fill="#F08080"/>
        <rect x="12" y="20" width="18" height="2" rx="1" fill="#F5AAAA"/>
        <circle cx="30" cy="30" r="8" fill="#FF6B6B"/>
        <path d="M26 30l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title:"Event Discovery",
    desc:"Explore a wide range of events — from online workshops to in-person conferences. Use advanced filters like location, type, and fee range to quickly find what you're looking for. Save your favorite events and never miss out on opportunities that matter most to you."
  },
  {
    bg:"#FFF4F8",
    icon:(
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="4" fill="#FFE8F0" stroke="#E8849A" strokeWidth="2"/>
        <path d="M16 10V8M32 10V8" stroke="#E8849A" strokeWidth="2" strokeLinecap="round"/>
        <rect x="10" y="18" width="28" height="2" rx="1" fill="#F5AABC"/>
        <rect x="12" y="24" width="8" height="8" rx="2" fill="#FF8FAB"/>
        <rect x="22" y="24" width="8" height="3" rx="1.5" fill="#FFBDCC"/>
        <rect x="22" y="29" width="5" height="3" rx="1.5" fill="#FFBDCC"/>
      </svg>
    ),
    title:"Ticketing & Booking",
    desc:"Book tickets seamlessly with a secure and reliable checkout process. Once your booking is complete, you'll receive automatic confirmations and receipts. Stay worry-free knowing your tickets are stored in your account and can be accessed anytime."
  },
  {
    bg:"#FFFBEC",
    icon:(
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="20" r="6" fill="#FFD700"/>
        <path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 16l1.5 3h3.5l-2.8 2 1 3.5L36 23l-3.2 1.5 1-3.5L31 19h3.5z" fill="#FFD700"/>
        <path d="M12 16l1.2 2.5H16l-2.3 1.6.8 2.8L12 21.4l-2.5 1.5.8-2.8L8 18.5h2.8z" fill="#FFD700"/>
      </svg>
    ),
    title:"Reviews & Ratings",
    desc:"After attending events, share your honest feedback through ratings and reviews. Your input helps improve the platform and guides other users in choosing the best events. Build a community of trust by voicing your experience and recommendations."
  },
  {
    bg:"#F0F8FF",
    icon:(
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="14" width="36" height="24" rx="4" fill="#D8EEFF" stroke="#6EB5FF" strokeWidth="2"/>
        <rect x="6" y="20" width="36" height="6" fill="#6EB5FF"/>
        <circle cx="14" cy="32" r="2.5" fill="#3A99FF"/>
        <circle cx="22" cy="32" r="2.5" fill="#3A99FF"/>
        <path d="M16 8h16l3 6H13l3-6z" fill="#91C9FF" stroke="#6EB5FF" strokeWidth="1.5"/>
      </svg>
    ),
    title:"Payments & Invoices",
    desc:"Manage all your event-related payments in one convenient place. Access detailed invoices, track your booking history, and download receipts whenever you need them. Enjoy transparency and clarity with every transaction you make."
  },
  {
    bg:"#F3FFF3",
    icon:(
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="14" height="14" rx="3" fill="#90EE90" stroke="#4CAF50" strokeWidth="1.5"/>
        <rect x="26" y="8" width="14" height="14" rx="3" fill="#FFD580" stroke="#FFA500" strokeWidth="1.5"/>
        <rect x="8" y="26" width="14" height="14" rx="3" fill="#ADD8FF" stroke="#5599FF" strokeWidth="1.5"/>
        <rect x="26" y="26" width="14" height="14" rx="3" fill="#FFB3C6" stroke="#FF6B8A" strokeWidth="1.5"/>
        <path d="M13 15l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31 15l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 33l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31 33l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title:"Subscriptions",
    desc:"Stay updated by subscribing to event newsletters and notifications. Choose the types of updates you want to receive — from upcoming concerts to professional seminars. With customized subscriptions, you'll always be in the loop without unnecessary clutter."
  },
];

function KeyFeaturesPage({ onBack }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  return (
    <div style={{ fontFamily:"'Inter','Segoe UI',sans-serif", color:"#1a1a2e", background:"#fff", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── flat navbar like the screenshot ── */
        .kf-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #f0ece8;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
          gap: 16px;
        }

        .kf-nav-logo {
          display: flex; align-items: center; gap: 7px;
          font-weight: 700; font-size: 14px; color: #2a2a2a;
          text-decoration: none; white-space: nowrap;
        }

        .kf-nav-links {
          display: flex; align-items: center; gap: 22px; list-style: none;
        }
        .kf-nav-links a {
          font-size: 13px; font-weight: 500; color: #555;
          text-decoration: none; transition: color 0.2s;
        }
        .kf-nav-links a:hover { color: #1a1a2e; }
        .kf-nav-links a.active { color: #C9856A; font-weight: 600; }

        .kf-nav-icons { display: flex; align-items: center; gap: 8px; }
        .kf-nav-icon-btn {
          width: 30px; height: 30px; border-radius: 50%;
          background: #f5f5f5;
          border: 1px solid #eee;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
        }

        /* ── feature rows ── */
        .feat-row {
          background: #f9f9f9;
          border-radius: 12px;
          padding: 20px 22px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: box-shadow 0.2s;
        }
        .feat-row:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.07); }

        footer a { text-decoration: none; }
        footer a:hover { color: #fff !important; }
      `}</style>

      {/* ── NAVBAR (flat, like screenshot) ── */}
      <nav className="kf-nav">
        {/* Logo */}
        <a href="#" className="kf-nav-logo">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" stroke="#C9856A" strokeWidth="1.8" fill="none"/>
            <path d="M18 4C10 4 4 11 4 18s6 14 14 14" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M18 4c8 0 14 7 14 14s-6 14-14 14" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M4 18q7-5 14 0t14 0" stroke="#C9856A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          </svg>
          OLISTAMI
        </a>

        {/* Nav links */}
        <ul className="kf-nav-links">
          {NAV_LINKS.map((l, i) => (
            <li key={l}><a href="#" className={i === 0 ? "active" : ""}>{l}</a></li>
          ))}
        </ul>

        {/* Icons */}
        <div className="kf-nav-icons">
          <div className="kf-nav-icon-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <div className="kf-nav-icon-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div className="kf-nav-icon-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "76px 20px 48px" }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: "flex", alignItems: "center", gap: 5,
            background: "none", border: "none", cursor: "pointer",
            color: "#C9856A", fontSize: 14, fontWeight: 600,
            fontFamily: "inherit", marginBottom: 28, padding: 0
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back
        </button>

        {/* Feature rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FEATURES_DETAIL.map(f => (
            <div key={f.title} className="feat-row">
              {/* Icon */}
              <div style={{
                width: 46, height: 46, borderRadius: 10,
                background: f.bg, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {f.icon}
              </div>
              {/* Text */}
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: "#1a1a2e", marginBottom: 5 }}>{f.title}</div>
                <div style={{ fontSize: 12.5, color: "#777", lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: 36, background: "#f5f5f5", borderRadius: 10,
          padding: "13px 16px", display: "flex", gap: 10, alignItems: "flex-start"
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p style={{ fontSize: 11.5, color: "#888", lineHeight: 1.65 }}>
            Olistami is a self-service platform where each user independently publishes content and services, assuming full legal responsibility. Holistic practices are complementary to official medicine and do not replace it.*
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2a2a2a", color: "#ccc", padding: "48px 5% 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1.2fr 0.8fr 1fr", gap: 48, paddingBottom: 32 }}>

            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#aaa" strokeWidth="1.5" fill="none"/>
                  <path d="M18 4C10 4 4 11 4 18s6 14 14 14" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M18 4c8 0 14 7 14 14s-6 14-14 14" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M4 18q7-5 14 0t14 0" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
                <span style={{ fontWeight: 700, fontSize: 16, color: "#fff", letterSpacing: 1 }}>OLISTAMI</span>
              </div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 8 }}>Manage your all events in one place</p>
              <p style={{ fontSize: 12, color: "#888", lineHeight: 1.7, marginBottom: 18, maxWidth: 240 }}>
                The operator dashboard lets event managers create, manage, and track events with ease, offering full control and clear insights for smooth execution.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", border: "1.5px solid #555", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span style={{ fontSize: 12, color: "#aaa" }}>admin@gmail.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 18 }}>Newsletter</div>
              <div style={{ fontSize: 12, color: "#aaa", marginBottom: 8 }}>Email</div>
              <div style={{ position: "relative", marginBottom: 12 }}>
                <div style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)" }}>
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
                  style={{ width: "100%", background: "#fff", border: "none", borderRadius: 10, padding: "11px 12px 11px 30px", fontSize: 12.5, fontFamily: "inherit", outline: "none", color: "#333" }}
                />
              </div>
              <button style={{ background: "#C9A99A", color: "#fff", border: "none", borderRadius: 10, padding: "10px 26px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                Subscribe
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 18 }}>Quick links</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {["Home", "Explore", "Booking", "Contact Us", "Profile"].map(l => (
                  <a key={l} href="#" style={{ color: "#aaa", fontSize: 13, textAlign: "center" }}
                    onMouseOver={e => e.target.style.color = "#fff"}
                    onMouseOut={e => e.target.style.color = "#aaa"}>
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Social + App */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 14 }}>Follow us on</div>
              <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                {[
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#2a2a2a"/></svg>,
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                ].map((ic, i) => (
                  <div key={i} style={{ width: 36, height: 36, borderRadius: 10, background: "#3a3a3a", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    onMouseOver={e => e.currentTarget.style.background = "#555"}
                    onMouseOut={e => e.currentTarget.style.background = "#3a3a3a"}>
                    {ic}
                  </div>
                ))}
              </div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 12 }}>Download our app</div>
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>, label: "Play store" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v8M8 12h8"/></svg>, label: "App store" }
              ].map((app, i) => (
                <div key={i} style={{ background: "#3a3a3a", borderRadius: 10, padding: "10px 14px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
                  onMouseOver={e => e.currentTarget.style.background = "#4a4a4a"}
                  onMouseOut={e => e.currentTarget.style.background = "#3a3a3a"}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: "#555", display: "flex", alignItems: "center", justifyContent: "center" }}>{app.icon}</div>
                  <span style={{ fontWeight: 600, fontSize: 13, color: "#fff" }}>{app.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { KeyFeaturesPage };