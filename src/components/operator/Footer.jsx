import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#2a2a2a] text-white px-16 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">

        {/* ── Left — Logo + description + email ── */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" />
              <circle cx="20" cy="20" r="8"  stroke="white" strokeWidth="2" />
              <line x1="20" y1="12" x2="20" y2="28" stroke="white" strokeWidth="1.5" />
              <line x1="12" y1="20" x2="28" y2="20" stroke="white" strokeWidth="1.5" />
            </svg>
            <span className="font-bold text-white tracking-widest text-base">OLISTAMI</span>
          </div>

          {/* Tagline + description */}
          <div>
            <p className="text-sm font-semibold text-white mb-1">
              Manage your all events in one place
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              The operator dashboard lets event managers create, manage, and
              track events with ease, offering full control and clear insights for
              smooth execution.
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 mt-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400 flex-shrink-0">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-xs text-gray-400">admin@gmail.com</span>
          </div>
        </div>

        {/* ── Center — Quick links ── */}
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-sm font-semibold text-white">Quick links</h4>
          <nav className="flex flex-col items-center gap-3">
            {["Home", "Pricing", "Privacy policy", "FAQ", "Add-ons"].map((link) => (
              <button
                key={link}
                onClick={() => navigate("/")}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {link}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Right — Social + App stores ── */}
        <div className="flex flex-col items-end gap-6">
          {/* Follow us */}
          <div className="flex flex-col items-end gap-3">
            <p className="text-sm font-semibold text-white">Follow us on</p>
            <div className="flex gap-3">
              {/* Facebook */}
              <button className="w-9 h-9 rounded-lg bg-[#3a3a3a] flex items-center justify-center hover:bg-[#4a4a4a] transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </button>
              {/* YouTube */}
              <button className="w-9 h-9 rounded-lg bg-[#3a3a3a] flex items-center justify-center hover:bg-[#4a4a4a] transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon fill="#2a2a2a" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </button>
              {/* Instagram */}
              <button className="w-9 h-9 rounded-lg bg-[#3a3a3a] flex items-center justify-center hover:bg-[#4a4a4a] transition">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="white" />
                </svg>
              </button>
            </div>
          </div>

          {/* Download app */}
          <div className="flex flex-col items-end gap-3">
            <p className="text-sm font-semibold text-white">Download our app</p>
            {/* Play Store */}
            <button className="flex items-center gap-2 bg-[#3a3a3a] hover:bg-[#4a4a4a] transition rounded-xl px-5 py-2.5 w-44">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white flex-shrink-0">
                <path d="M5 3l14 9-14 9V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span className="text-sm text-white font-medium">Play store</span>
            </button>
            {/* App Store */}
            <button className="flex items-center gap-2 bg-[#3a3a3a] hover:bg-[#4a4a4a] transition rounded-xl px-5 py-2.5 w-44">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white flex-shrink-0">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-sm text-white font-medium">App store</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;