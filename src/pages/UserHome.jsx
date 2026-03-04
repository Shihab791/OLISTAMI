import { useState } from "react";
import UserAd from "../assets/UserAd.jpg"
import { KeyFeaturesPage } from "../components/KeyFeaturesPage";
import {AddOnServicesPage} from "../components/AddOnServicesPage";
import { ExploreEventsPage } from "../components/ExploreEventsPage";
const NAV_LINKS = ["Home", "Explore", "Booking", "Contact Us", "Resources", "Profile"];

const FEATURES = [
  { icon: "👤", title: "Personal Profile", desc: "Create & customize your account" },
  { icon: "🔍", title: "Event Discovery", desc: "Create & customize your account" },
  { icon: "🎟️", title: "Ticketing & Booking", desc: "Create & customize your account" },
  { icon: "⭐", title: "Reviews & Ratings", desc: "Create & customize your account" },
  { icon: "💳", title: "Payments & Invoices", desc: "Create & customize your account" },
  { icon: "🔔", title: "Subscriptions", desc: "Create & customize your account" },
];

const EVENTS = [
  { id: 1, host: "Julian Ena", tag: "Save", title: "Event title", desc: "This event agenda for the music love people. Every mentions.", location: "Yolo,Room21 /122.hf", date: "15 September, 2025", time: "09:00 AM", price: "$999.00", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" },
  { id: 2, host: "Julian Ena", tag: "Save", title: "Event title", desc: "This event agenda for the music love people. Every mentions.", location: "Yolo,Room21 /122.hf", date: "15 September, 2025", time: "09:00 AM", price: "$999.00", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80" },
  { id: 3, host: "Julian Ena", tag: "+", title: "Event title", desc: "This event agenda for the music love people. Every mentions.", location: "Event location", date: "13 September, 2025", time: "09:00 AM – 05:00 PM", price: "$999.00", img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80" },
  { id: 4, host: "Julian Ena", tag: "Save", title: "Event title", desc: "This event agenda for the music love people. Every mentions.", location: "Event location", date: "10 Sep, 2025 at 09:00 AM", time: "", price: "$999.00", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80" },
  { id: 5, host: "Julian Ena", tag: "17", title: "Event title", desc: "This event agenda for the music love people. Every mentions.", location: "Event location", date: "10 September, 2025", time: "09:00 AM – 05:00 PM", price: "$999.00", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80" },
  { id: 6, host: "Julian Ena", tag: "Indoor", title: "Event title", desc: "This event agenda for the music love people. Every mentions.", location: "Event location", date: "10 Sep, 2025 at 09:00 AM", time: "", price: "$999.00", img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&q=80" },
];

const PLANS = [
  { name: "Basic Plan", price: "$0.00", period: "/monthly", color: "#30C9A0", icon: "●", features: ["Up to 2 Events set per day", "Listing in the Rescu app", "email support"], highlight: false },
  { name: "Standard Plan", price: "$66.00", period: "/monthly", color: "#F5A623", icon: "★", features: ["Up to 40 featured per day", "Listing in the Rescu app", "Higher placement in search", "email support"], highlight: true },
  { name: "Premium Plan", price: "$44.00", period: "/monthly", color: "#7C5CBF", icon: "◆", features: ["Unlimited bookings", "Priority placement", "Custom event badges", "Priority support"], highlight: false },
];

const ADDONS = [
  { label: "Featured event", price: "$30", btnColor: "#FF6B6B", tag: "Buy Now", popular: false },
  { label: "Featured event", price: "$100", btnColor: "#F5A623", tag: "Buy now", popular: true },
  { label: "Featured event", price: "$20", btnColor: "#30C9A0", tag: "Buy Now", popular: false },
];

export default function UserHome() {
   const [showFeatures, setShowFeatures] = useState(false);
   const [showAddons, setShowAddons] = useState(false);
   const [showExplore, setShowExplore] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  if (showFeatures) return <KeyFeaturesPage onBack={() => setShowFeatures(false)} />;
  if (showAddons) return <AddOnServicesPage onBack={() => setShowAddons(false)} />;
  if (showExplore) return <ExploreEventsPage onBack={() => setShowExplore(false)} />;

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1a1a2e", background: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* Full-page soft multi-color gradient */
        .hero-bg {
          min-height: 100vh;
          background:
            radial-gradient(ellipse at 5% 15%, #f5d6e8 0%, transparent 40%),
            radial-gradient(ellipse at 85% 5%,  #e2f5d0 0%, transparent 40%),
            radial-gradient(ellipse at 95% 80%, #d5e8f8 0%, transparent 40%),
            radial-gradient(ellipse at 10% 90%, #eedff8 0%, transparent 40%),
            #f5f2f8;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 80px;
        }

        /* floating pill nav */
        .pill-nav {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 200;
          width: 91%;
          max-width: 1020px;
          background: rgba(255,255,255,0.52);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.65);
          box-shadow: 0 4px 28px rgba(0,0,0,0.07);
          padding: 9px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .nav-logo {
          display: flex; align-items: center; gap: 7px;
          font-weight: 700; font-size: 14.5px; color: #2a2a2a;
          text-decoration: none; white-space: nowrap;
        }

        .nav-links {
          display: flex; align-items: center; gap: 24px; list-style: none;
        }
        .nav-links a {
          font-size: 13px; font-weight: 500; color: #555;
          text-decoration: none; transition: color 0.2s; white-space: nowrap;
        }
        .nav-links a:hover { color: #1a1a2e; }
        .nav-links a.active { color: #C9856A; font-weight: 600; }

        .nav-icons { display: flex; align-items: center; gap: 8px; }
        .nav-icon-btn {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(0,0,0,0.05);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .nav-icon-btn:hover { background: #fff; }

        /* hero */
        .hero-content {
          padding-top: 152px;
          text-align: center;
          max-width: 700px;
          padding-left: 20px; padding-right: 20px;
        }
        .hero-title {
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.5px;
        }
        .hero-desc {
          font-size: 14.5px; color: #666; line-height: 1.8;
          max-width: 560px; margin: 0 auto 36px;
        }
        .hero-btn {
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 14px; padding: 13px 48px;
          font-size: 14.5px; font-weight: 600; color: #555;
          cursor: pointer; font-family: inherit;
          box-shadow: 0 2px 14px rgba(0,0,0,0.08);
          transition: all 0.2s;
        }
        .hero-btn:hover { background: #fff; box-shadow: 0 4px 22px rgba(0,0,0,0.12); color: #333; }

        /* sections */
        .sec { padding: 70px 5%; }
        .sec-bg { background: #fafaf8; }
        .sec-wh { background: #fff; }

        .sec-label {
          text-align: center; color: #C9856A; font-weight: 700;
          font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 10px;
        }
        .sec-title {
          font-size: clamp(21px, 3.2vw, 31px); font-weight: 800;
          text-align: center; color: #1a1a2e; margin-bottom: 10px;
          letter-spacing: -0.3px;
        }
        .sec-sub { text-align: center; color: #aaa; font-size: 13px; margin-bottom: 44px; }

        .inner { max-width: 1100px; margin: 0 auto; }

        .g3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media(max-width:900px){ .g3 { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:580px){ .g3 { grid-template-columns: 1fr; } .pill-nav .nav-links { display: none; } }

        .feat-card {
          background: #fff; border-radius: 14px; padding: 22px 20px;
          border: 1.5px solid #f0ece8; transition: border 0.2s, box-shadow 0.2s;
        }
        .feat-card:hover { border-color: #C9856A; box-shadow: 0 4px 18px rgba(201,133,106,0.13); }

        .ev-card {
          background: #fff; border-radius: 14px;
          box-shadow: 0 2px 14px rgba(0,0,0,0.07); overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ev-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.13); }

        .avatar {
          width: 30px; height: 30px; border-radius: 50%;
          background: linear-gradient(135deg,#C9856A,#f5a623);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 12px; font-weight: 800; flex-shrink: 0;
        }

        .btn-p {
          background: #C9856A; color: #fff; border: none; border-radius: 10px;
          padding: 11px 28px; font-size: 14px; font-weight: 700; cursor: pointer;
          font-family: inherit; transition: all 0.2s;
        }
        .btn-p:hover { background: #b06e55; transform: translateY(-1px); }

        .btn-o {
          background: transparent; color: #C9856A; border: 2px solid #C9856A;
          border-radius: 10px; padding: 10px 28px; font-size: 14px; font-weight: 700;
          cursor: pointer; font-family: inherit; transition: all 0.2s;
        }
        .btn-o:hover { background: #C9856A; color: #fff; }

        .dot { width: 8px; height: 8px; border-radius: 50%; background: #ddd; }
        .dot.a { background: #C9856A; width: 22px; border-radius: 4px; }

        footer a { text-decoration: none; transition: color 0.2s; }
        footer a:hover { color: #C9856A !important; }
      `}</style>

      {/* ── PILL NAVBAR ── */}
      <nav className="pill-nav">
        <a href="#" className="nav-logo">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="7" fill="url(#g1)"/>
            <circle cx="13" cy="13" r="4.5" stroke="#fff" strokeWidth="2"/>
            <path d="M13 6v2M13 18v2M6 13h2M18 13h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="26" y2="26">
                <stop stopColor="#C9856A"/><stop offset="1" stopColor="#e8a87c"/>
              </linearGradient>
            </defs>
          </svg>
          OLISTAMI
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((l, i) => (
            <li key={l}><a href="#" className={i === 0 ? "active" : ""}>{l}</a></li>
          ))}
        </ul>

        <div className="nav-icons">
          {/* Heart */}
          <div className="nav-icon-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          {/* Chat */}
          <div className="nav-icon-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          {/* Bell */}
          <div className="nav-icon-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9856A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="hero-bg">
        <div className="hero-content">
          <h1 className="hero-title">Plan Your Next Experience</h1>
          <p className="hero-desc">
            Stay connected to the events that matter most to you. Easily search and filter by type,
            location, or price range. Book tickets in seconds with a smooth, reliable system.
            Track your bookings, invoices, and event updates effortlessly.
          </p>
          <button className="hero-btn">Find Events</button>
        </div>
      </div>

      {/* ── KEY FEATURES ── */}
<section style={{padding:"70px 5%", background:"#fff"}}>
  <div style={{maxWidth:1100, margin:"0 auto"}}>
    <h2 style={{fontFamily:"'Inter',sans-serif", fontSize:"clamp(24px,3.5vw,34px)", fontWeight:800, textAlign:"center", color:"#1a1a2e", marginBottom:48}}>Key Features</h2>
    
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginBottom:44}}>
      {[
        {
          bg:"#EEF2FF", iconBg:"#fff",
          icon:(
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="8" width="36" height="32" rx="4" fill="#E8EEFF" stroke="#8B9FE8" strokeWidth="2"/>
              <rect x="10" y="14" width="16" height="2.5" rx="1.25" fill="#8B9FE8"/>
              <rect x="10" y="20" width="12" height="2.5" rx="1.25" fill="#B0BCEF"/>
              <circle cx="34" cy="30" r="7" fill="#6979D4"/>
              <circle cx="34" cy="28" r="2.5" fill="#fff"/>
              <path d="M29.5 34c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
          title:"Personal Profile",
          desc:"Create & customize your account"
        },
        {
          bg:"#FFF0F0", iconBg:"#fff",
          icon:(
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="8" width="36" height="32" rx="4" fill="#FFE8E8" stroke="#F08080" strokeWidth="2"/>
              <rect x="12" y="14" width="24" height="3" rx="1.5" fill="#F08080"/>
              <rect x="12" y="20" width="18" height="2" rx="1" fill="#F5AAAA"/>
              <circle cx="30" cy="30" r="8" fill="#FF6B6B"/>
              <path d="M26 30l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title:"Event Discovery",
          desc:"Create & customize your account"
        },
        {
          bg:"#FFF4F8", iconBg:"#fff",
          icon:(
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="10" width="36" height="28" rx="4" fill="#FFE8F0" stroke="#E8849A" strokeWidth="2"/>
              <path d="M16 10V8M32 10V8" stroke="#E8849A" strokeWidth="2" strokeLinecap="round"/>
              <rect x="10" y="18" width="28" height="2" rx="1" fill="#F5AABC"/>
              <rect x="12" y="24" width="8" height="8" rx="2" fill="#FF8FAB"/>
              <rect x="22" y="24" width="8" height="3" rx="1.5" fill="#FFBDCC"/>
              <rect x="22" y="29" width="5" height="3" rx="1.5" fill="#FFBDCC"/>
            </svg>
          ),
          title:"Ticketing & Booking",
          desc:"Create & customize your account"
        },
        {
          bg:"#FFFBEC", iconBg:"#fff",
          icon:(
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="20" r="6" fill="#FFD700"/>
              <path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M36 16l1.5 3h3.5l-2.8 2 1 3.5L36 23l-3.2 1.5 1-3.5L31 19h3.5z" fill="#FFD700"/>
              <path d="M12 16l1.2 2.5H16l-2.3 1.6.8 2.8L12 21.4l-2.5 1.5.8-2.8L8 18.5h2.8z" fill="#FFD700"/>
            </svg>
          ),
          title:"Reviews & Ratings",
          desc:"Create & customize your account"
        },
        {
          bg:"#F0F8FF", iconBg:"#fff",
          icon:(
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="14" width="36" height="24" rx="4" fill="#D8EEFF" stroke="#6EB5FF" strokeWidth="2"/>
              <rect x="6" y="20" width="36" height="6" fill="#6EB5FF"/>
              <circle cx="14" cy="32" r="2.5" fill="#3A99FF"/>
              <circle cx="22" cy="32" r="2.5" fill="#3A99FF"/>
              <path d="M16 8h16l3 6H13l3-6z" fill="#91C9FF" stroke="#6EB5FF" strokeWidth="1.5"/>
            </svg>
          ),
          title:"Payments & Invoices",
          desc:"Create & customize your account"
        },
        {
          bg:"#F3FFF3", iconBg:"#fff",
          icon:(
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
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
          desc:"Create & customize your account"
        },
      ].map(f=>(
        <div key={f.title} style={{
          background: f.bg,
          borderRadius: 16,
          padding: "28px 24px",
          border: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "default"
        }}
        onMouseOver={e=>e.currentTarget.style.transform="translateY(-3px)"}
        onMouseOut={e=>e.currentTarget.style.transform="translateY(0)"}
        >
          {/* Icon box */}
          <div style={{
            width: 52, height: 52,
            background: "#fff",
            borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
          }}>
            {f.icon}
          </div>
          <div style={{fontWeight:800, fontSize:16, color:"#1a1a2e", marginBottom:6}}>{f.title}</div>
          <div style={{color:"#999", fontSize:13.5, lineHeight:1.5}}>{f.desc}</div>
        </div>
      ))}
    </div>

    <div style={{textAlign:"center"}}>
      <button
  onClick={() => setShowFeatures(true)}
  style={{
    background:"#9B8B82",
    color:"#fff",
    border:"none",
    borderRadius:12,
    padding:"14px 44px",
    fontSize:15,
    fontWeight:700,
    cursor:"pointer",
    fontFamily:"inherit",
    transition:"background 0.2s"
  }}
  onMouseOver={e=>e.currentTarget.style.background="#7d6e66"}
  onMouseOut={e=>e.currentTarget.style.background="#9B8B82"}
>
  Learn More
</button>
      
    </div>
  </div>
</section>

      {/* ── FEATURED EVENTS ── */}
      <section className="sec sec-wh">
        <div className="inner">
          <p className="sec-label">Discover</p>
          <h2 className="sec-title">Featured Events</h2>
          <p className="sec-sub">Handpicked experiences just for you</p>
          <div className="g3" style={{marginBottom:40}}>
            {EVENTS.map(ev=>(
              <div key={ev.id} className="ev-card">
                <div style={{position:"relative"}}>
                  <img src={ev.img} alt={ev.title} style={{width:"100%",height:165,objectFit:"cover",display:"block"}}/>
                  <span style={{position:"absolute",top:10,right:10,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,background:"rgba(255,255,255,0.92)",color:"#888"}}>{ev.tag}</span>
                </div>
                <div style={{padding:"14px 16px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                    <div className="avatar">{ev.host[0]}</div>
                    <span style={{fontWeight:700,fontSize:13,color:"#444"}}>{ev.host}</span>
                  </div>
                  <div style={{fontWeight:800,fontSize:15,marginBottom:5,color:"#1a1a2e"}}>{ev.title}</div>
                  <div style={{color:"#aaa",fontSize:12,lineHeight:1.5,marginBottom:10}}>{ev.desc}</div>
                  <div style={{display:"flex",flexDirection:"column",gap:4}}>
                    {ev.location&&<div style={{fontSize:12,color:"#777",display:"flex",gap:5}}><span>📍</span>{ev.location}</div>}
                    {ev.date&&<div style={{fontSize:12,color:"#777",display:"flex",gap:5}}><span>📅</span>{ev.date}</div>}
                    {ev.time&&<div style={{fontSize:12,color:"#777",display:"flex",gap:5}}><span>🕐</span>{ev.time}</div>}
                    <div style={{fontSize:14,fontWeight:900,color:"#C9856A",marginTop:6}}>{ev.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center"}}><button className="btn-o"onClick={() => setShowExplore(true)} >Explore more</button></div>
        </div>
      </section>

      {/* ── ADVERTISE ── */}
      <section className="sec sec-wh" style={{paddingTop:0}}>
        <div className="inner">
          <h2 className="sec-title" style={{marginBottom:28}}>OLISTAMI Advertise</h2>
          <div style={{borderRadius:22,overflow:"hidden",position:"relative",height:260}}>
            <img src={UserAd} at="advert" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(0,0,0,0.55),rgba(0,0,0,0.1))"}}/>
            <button className="btn-p" style={{position:"absolute",bottom:24,right:24,background:"rgba(255,255,255,0.18)",backdropFilter:"blur(10px)",border:"1.5px solid rgba(255,255,255,0.5)"}}>Open Link</button>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:16}}>
            {[0,1,2].map(i=><div key={i} className={`dot${i===0?" a":""}`}/>)}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIPTION ── */}
      <section className="sec sec-bg">
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <p className="sec-label">Pricing</p>
          <h2 className="sec-title">Subscription</h2>
          <p className="sec-sub">Choose the plan that fits your needs</p>
          <div className="g3">
            {PLANS.map(plan=>(
              <div key={plan.name} style={{borderRadius:20,padding:"32px 24px",textAlign:"center",background:plan.highlight?"linear-gradient(135deg,#1a1a2e,#2d2d4e)":"#fff",border:plan.highlight?"none":"1.5px solid #f0ece8",color:plan.highlight?"#fff":"#1a1a2e",boxShadow:plan.highlight?"0 14px 44px rgba(26,26,46,0.32)":"0 2px 12px rgba(0,0,0,0.06)",transform:plan.highlight?"scale(1.05)":"scale(1)"}}>
                <div style={{fontSize:36,color:plan.color,marginBottom:10}}>{plan.icon}</div>
                <div style={{fontWeight:900,fontSize:16,marginBottom:4}}>{plan.name}</div>
                <div style={{fontSize:26,fontWeight:900,color:plan.highlight?"#f5a623":"#1a1a2e",marginBottom:2}}>{plan.price}</div>
                <div style={{fontSize:12,color:"#aaa",marginBottom:22}}>{plan.period}</div>
                <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:26,textAlign:"left"}}>
                  {plan.features.map(f=>(
                    <div key={f} style={{display:"flex",gap:8,fontSize:13,color:plan.highlight?"#ccc":"#777",alignItems:"flex-start"}}>
                      <span style={{color:plan.color,fontWeight:800}}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <button style={{width:"100%",padding:"12px 0",borderRadius:10,border:plan.highlight?"none":`2px solid ${plan.color}`,background:plan.highlight?plan.color:"transparent",color:plan.highlight?"#fff":plan.color,fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>
                  Manage Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD ONS ── */}
      <section className="sec sec-wh">
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <p className="sec-label">Extras</p>
          <h2 className="sec-title">Add on services</h2>
          <p className="sec-sub">Boost your event visibility with premium add-ons</p>
          <div className="g3" style={{marginBottom:40}}>
            {ADDONS.map((a,i)=>(
              <div key={i} style={{border:`2px solid ${a.popular?a.btnColor:"#f0ece8"}`,borderRadius:20,padding:"30px 24px",position:"relative",background:a.popular?`linear-gradient(135deg,${a.btnColor}0a,${a.btnColor}1a)`:"#fff",boxShadow:a.popular?`0 10px 32px ${a.btnColor}25`:"0 2px 12px rgba(0,0,0,0.05)"}}>
                {a.popular&&<div style={{position:"absolute",top:-13,left:"50%",transform:"translateX(-50%)",background:a.btnColor,color:"#fff",fontSize:11,fontWeight:800,padding:"4px 16px",borderRadius:20,whiteSpace:"nowrap"}}>Most Popular</div>}
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
                  <div style={{fontWeight:800,fontSize:14}}>{a.label}</div>
                  <button style={{background:a.btnColor,color:"#fff",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>{a.tag}</button>
                </div>
                <div style={{fontSize:30,fontWeight:900,color:a.btnColor,marginBottom:16}}>{a.price}</div>
                <div style={{fontSize:12,color:"#888",marginBottom:8,fontWeight:700}}>Key benefits</div>
                {[1,2,3,4,5].map(j=>(<div key={j} style={{fontSize:11,color:"#ccc",marginBottom:5,display:"flex",gap:6}}><span style={{color:a.btnColor}}>•</span>Lorem ipsum dolor sit amet consectetur</div>))}
                <button style={{marginTop:18,background:"transparent",border:`1.5px solid ${a.btnColor}`,color:a.btnColor,borderRadius:10,padding:"9px 0",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%"}}>More details</button>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center"}}><button className="btn-o "onClick={() => setShowAddons(true)} >See all</button></div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{background:"#2a2a2a", color:"#ccc", padding:"48px 5% 0"}}>
  <div style={{maxWidth:1100, margin:"0 auto"}}>
    <div style={{display:"grid", gridTemplateColumns:"1.4fr 1.2fr 0.8fr 1fr", gap:48, paddingBottom:48}}>

      {/* ── Col 1: Brand ── */}
      <div>
        {/* Logo */}
        <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:20}}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" stroke="#aaa" strokeWidth="1.5" fill="none"/>
            <path d="M18 8 C12 8 8 13 8 18 C8 23 12 28 18 28" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M18 8 C24 8 28 13 28 18 C28 23 24 28 18 28" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M8 18 Q13 14 18 18 Q23 22 28 18" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          </svg>
          <span style={{fontWeight:700, fontSize:18, color:"#fff", letterSpacing:1}}>OLISTAMI</span>
        </div>

        {/* Tagline */}
        <p style={{fontWeight:700, fontSize:15, color:"#fff", marginBottom:10, lineHeight:1.4}}>
          Manage your all events in one place
        </p>
        <p style={{fontSize:12.5, color:"#888", lineHeight:1.7, marginBottom:20, maxWidth:280}}>
          The operator dashboard lets event managers create, manage, and track events with ease, offering full control and clear insights for smooth execution.
        </p>

        {/* Email */}
        <div style={{display:"flex", alignItems:"center", gap:8}}>
          <div style={{width:28, height:28, borderRadius:"50%", border:"1.5px solid #555", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4l3 3"/>
            </svg>
          </div>
          <span style={{fontSize:13, color:"#aaa"}}>admin@gmail.com</span>
        </div>
      </div>

      {/* ── Col 2: Newsletter ── */}
      <div>
        <div style={{fontWeight:700, fontSize:15, color:"#fff", marginBottom:20}}>Newsletter</div>
        <div style={{fontSize:13, color:"#aaa", marginBottom:8, fontWeight:500}}>Email</div>
        {/* Input */}
        <div style={{position:"relative", marginBottom:14}}>
          <div style={{position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", display:"flex"}}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            style={{
              width:"100%", background:"#fff", border:"none",
              borderRadius:10, padding:"12px 14px 12px 36px",
              fontSize:13, fontFamily:"inherit", outline:"none",
              color:"#333",
            }}
          />
        </div>
        {/* Subscribe button */}
        <button style={{
          background:"#C9A99A", color:"#fff", border:"none",
          borderRadius:10, padding:"11px 28px",
          fontSize:13, fontWeight:600, cursor:"pointer",
          fontFamily:"inherit", transition:"background 0.2s"
        }}
        onMouseOver={e=>e.currentTarget.style.background="#b8887a"}
        onMouseOut={e=>e.currentTarget.style.background="#C9A99A"}>
          Subscribe
        </button>
      </div>

      {/* ── Col 3: Quick Links ── */}
      <div>
        <div style={{fontWeight:700, fontSize:15, color:"#fff", marginBottom:20}}>Quick links</div>
        <div style={{display:"flex", flexDirection:"column", gap:14}}>
          {["Home","Explore","Booking","Contact Us","Profile"].map(l=>(
            <a key={l} href="#" style={{
              color:"#aaa", fontSize:13.5, textDecoration:"none",
              transition:"color 0.2s", textAlign:"center"
            }}
            onMouseOver={e=>e.target.style.color="#fff"}
            onMouseOut={e=>e.target.style.color="#aaa"}>
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* ── Col 4: Social + App ── */}
      <div>
        <div style={{fontWeight:700, fontSize:15, color:"#fff", marginBottom:16}}>Follow us on</div>
        {/* Social icons */}
        <div style={{display:"flex", gap:10, marginBottom:28}}>
          {[
            // Facebook
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
            // YouTube
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#3a3a3a"/></svg>,
            // Instagram
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          ].map((icon, i) => (
            <div key={i} style={{
              width:38, height:38, borderRadius:10,
              background:"#3a3a3a",
              display:"flex", alignItems:"center", justifyContent:"center",
              cursor:"pointer", transition:"background 0.2s"
            }}
            onMouseOver={e=>e.currentTarget.style.background="#555"}
            onMouseOut={e=>e.currentTarget.style.background="#3a3a3a"}>
              {icon}
            </div>
          ))}
        </div>

        {/* App downloads */}
        <div style={{fontWeight:700, fontSize:14, color:"#fff", marginBottom:12}}>Download our app</div>
        {[
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
            label: "Play store"
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v8M8 12h8"/></svg>,
            label: "App store"
          }
        ].map((app, i) => (
          <div key={i} style={{
            background:"#3a3a3a", borderRadius:10,
            padding:"11px 16px", marginBottom:10,
            display:"flex", alignItems:"center", gap:12,
            cursor:"pointer", transition:"background 0.2s"
          }}
          onMouseOver={e=>e.currentTarget.style.background="#4a4a4a"}
          onMouseOut={e=>e.currentTarget.style.background="#3a3a3a"}>
            <div style={{width:32, height:32, borderRadius:8, background:"#555", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
              {app.icon}
            </div>
            <span style={{fontWeight:600, fontSize:13.5, color:"#fff"}}>{app.label}</span>
          </div>
        ))}
      </div>

    </div>
  </div>
</footer>
    </div>
  );
}