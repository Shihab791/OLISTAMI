import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

const barData = [
  { day: "01", t: 200 }, { day: "02", t: 150 }, { day: "03", t: 280 },
  { day: "04", t: 320 }, { day: "05", t: 180 }, { day: "06", t: 250 },
  { day: "07", t: 160 }, { day: "08", t: 140 }, { day: "09", t: 190 },
  { day: "10", t: 220 }, { day: "11", t: 170 }, { day: "12", t: 300 },
];

const pieData = [
  { name: "Sat", value: 97, color: "#a78bfa" },
  { name: "Sun", value: 187, color: "#34d399" },
  { name: "Mon", value: 154, color: "#60a5fa" },
  { name: "Tue", value: 120, color: "#f472b6" },
];

const Logo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="16" stroke="#7c5c4e" strokeWidth="2" />
    <circle cx="20" cy="20" r="8" stroke="#7c5c4e" strokeWidth="2" />
  </svg>
);

const DashboardMockup = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full">

    <div className="px-6 py-3 border-b flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo size={18} />
        <span className="font-bold text-gray-700 text-xs">OLISTAMI</span>
      </div>
      <span className="text-xs text-gray-400">Dashboard</span>
    </div>

    <div className="p-6">

      {/* stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "Revenue", value: "$15k" },
          { label: "Events", value: "50" },
          { label: "Bookings", value: "1200" },
          { label: "Tickets", value: "1350" },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">{s.label}</p>
            <p className="font-bold text-gray-800">{s.value}</p>
          </div>
        ))}
      </div>

      {/* charts */}
      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2 bg-gray-50 rounded-lg p-3">
          <p className="text-xs font-semibold mb-2">Ticket sold</p>

          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="2 2" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis />
              <Bar dataKey="t" fill="#a5b4fc" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs font-semibold mb-2">Bookings</p>

          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={25}
                outerRadius={40}
                dataKey="value"
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  </div>
);

const logos = Array(8).fill("Logo ipsum");

export default function Hero() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="flex flex-col bg-[#faf8f5]">

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-10 py-3 flex items-center justify-between sticky top-0 z-50">

        <div className="flex items-center gap-2">
          <Logo size={30} />
          <span className="font-bold text-gray-800 tracking-widest">
            OLISTAMI
          </span>
        </div>

        <div className="flex items-center bg-[#f0ebe6] rounded-full px-1.5 py-1 gap-1">
          {["Home", "Pricing", "FAQ"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`px-5 py-2 rounded-full text-sm ${
                activeNav === item
                  ? "bg-[#7c5c4e] text-white"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate("/operator")}
          className="bg-[#7c5c4e] text-white px-5 py-2 rounded-lg text-sm"
        >
          Sign up as operator
        </button>

      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center pt-10 px-6 relative">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center max-w-2xl leading-tight">
          Your all in one event management system
        </h1>

        <p className="text-gray-500 mt-3 text-base text-center">
          Manage your all events in one place
        </p>

        {/* dashboard */}
        <div className="w-full max-w-4xl mt-6 px-4">
          <DashboardMockup />
        </div>

      </section>

      {/* ticker */}
      <div className="bg-gray-900 mt-8 py-4 overflow-hidden w-full">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className="flex items-center gap-2 text-white opacity-80">
              <span className="text-sm font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes marquee {
          0% {transform: translateX(0);}
          100% {transform: translateX(-50%);}
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        `}
      </style>
    </div>
  );
}