const policies = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Data collection",
    desc: "We collect information you provide when creating and managing events, such as event details, attendee information, and account credentials. This data is used only to deliver and improve our services.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Data usage",
    desc: "The data you manage is used solely for event organization, communication with attendees, and ensuring the smooth operation of your events. We do not sell or share your information with unauthorized third parties.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Data protection",
    desc: "We use industry-standard security measures to protect your information from unauthorized access, loss, or misuse. Only authorized personnel have access to your account and event data.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Your Responsibilities",
    desc: "As an operator, you are responsible for maintaining the confidentiality of your login details and ensuring that attendee data is handled responsibly and in compliance with applicable laws.",
  },
];

const Policy = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
          Privacy policy
        </h2>

        {/* Wrapper */}
        <div className="relative flex flex-col gap-6">

          {/* Top row */}
          <div className="flex gap-0">
            {/* Top-left card */}
            <div className="w-[calc(50%-1px)] pr-8">
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#9a7060] flex items-center justify-center flex-shrink-0">
                    {policies[0].icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">{policies[0].title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{policies[0].desc}</p>
              </div>
            </div>

            {/* Center vertical line top half */}
            <div className="w-[2px] bg-gray-300 self-stretch" />

            {/* Top-right card */}
            <div className="w-[calc(50%-1px)] pl-8">
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#9a7060] flex items-center justify-center flex-shrink-0">
                    {policies[1].icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">{policies[1].title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{policies[1].desc}</p>
              </div>
            </div>
          </div>

          {/* Middle logo row */}
          <div className="flex items-center justify-center gap-0">
            <div className="flex-1 h-[2px] bg-transparent" />
            <div className="flex flex-col items-center px-4 py-2">
              <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="#7c5c4e" strokeWidth="2" />
                <circle cx="20" cy="20" r="8" stroke="#7c5c4e" strokeWidth="2" />
                <line x1="20" y1="12" x2="20" y2="28" stroke="#7c5c4e" strokeWidth="1.5" />
                <line x1="12" y1="20" x2="28" y2="20" stroke="#7c5c4e" strokeWidth="1.5" />
              </svg>
              <span className="text-[9px] font-bold tracking-widest text-gray-500 mt-1">OLISTAMI</span>
            </div>
            <div className="flex-1 h-[2px] bg-transparent" />
          </div>

          {/* Bottom row */}
          <div className="flex gap-0">
            {/* Bottom-left card */}
            <div className="w-[calc(50%-1px)] pr-8">
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#9a7060] flex items-center justify-center flex-shrink-0">
                    {policies[2].icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">{policies[2].title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{policies[2].desc}</p>
              </div>
            </div>

            {/* Center vertical line bottom half */}
            <div className="w-[2px] bg-gray-300 self-stretch" />

            {/* Bottom-right card */}
            <div className="w-[calc(50%-1px)] pl-8">
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#9a7060] flex items-center justify-center flex-shrink-0">
                    {policies[3].icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">{policies[3].title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{policies[3].desc}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Policy;