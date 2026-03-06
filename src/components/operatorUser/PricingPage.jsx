import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const navItems = ["Dashboard", "Events", "Pricing", "Privacy policy", "FAQ"];

const benefits = [
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
  "Benefit 1 goes here",
];

export default function PricingPage() {
  const [activeNav, setActiveNav] = useState("Pricing");
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* ── Navbar ── */}
      <nav className="bg-white shadow-sm px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="#7c5c4e" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="8" stroke="#7c5c4e" strokeWidth="2" />
            <line
              x1="20"
              y1="4"
              x2="20"
              y2="36"
              stroke="#7c5c4e"
              strokeWidth="1.5"
            />
            <line
              x1="4"
              y1="20"
              x2="36"
              y2="20"
              stroke="#7c5c4e"
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-bold text-gray-800 tracking-widest text-base">
            OLISTAMI
          </span>
        </div>

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

        <div className="flex items-center gap-3">
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
            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#7c5c4e] rounded-full text-[9px] text-white flex items-center justify-center font-bold">
              2
            </span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80"
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
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

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col items-center py-10 px-8">
        {/* Billing Toggle */}
        <div className="flex items-center bg-[#e5e0db] rounded-full p-1 mb-10">
          {["Monthly", "Annual"].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle)}
              className={`px-14 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === cycle
                  ? "bg-[#8a9a7a] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {cycle}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-5 justify-center w-full max-w-2xl">
          {/* Basic Plan */}
          <div className="flex-1 bg-[#f2f0ed] rounded-2xl p-8 flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
              Basic Plan
            </h2>
            <p className="text-4xl font-bold text-gray-800 text-center mb-6">
              $0.00
            </p>

            <div className="flex items-center gap-2 mb-5">
              <hr className="flex-1 border-[#c4b5a5]" />
              <span className="text-xs text-gray-500 whitespace-nowrap">
                Benefits you will get
              </span>
              <hr className="flex-1 border-[#c4b5a5]" />
            </div>

            <ul className="space-y-2.5 flex-1 mb-12">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                  {b}
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-full bg-[#8a9a7a] text-white text-sm font-medium hover:bg-[#7a8a6a] transition">
              Purchase plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 bg-[#2c2c2c] rounded-2xl p-8 flex flex-col">
            <h2 className="text-xl font-semibold text-white text-center mb-6">
              Pro Plan
            </h2>
            <p className="text-4xl font-bold text-white text-center mb-6">
              {billingCycle === "Monthly" ? "$100.00" : "$999.00"}
            </p>

            <div className="flex items-center gap-2 mb-5">
              <hr className="flex-1 border-[#484848]" />
              <span className="text-xs text-gray-400 whitespace-nowrap">
                Benefits you will get
              </span>
              <hr className="flex-1 border-[#484848]" />
            </div>

            <ul className="space-y-2.5 flex-1 mb-12">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-sm text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                  {b}
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-full bg-[#8a9a7a] text-white text-sm font-medium hover:bg-[#7a8a6a] transition">
              Purchase plan
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
