import { ArrowRight } from "lucide-react";

const services = [
  {
    iconBg: "#e0f0ff",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14">
        {/* Monitor with design tools */}
        <rect x="8" y="8" width="48" height="36" rx="3" fill="#3b82f6" />
        <rect x="12" y="12" width="40" height="28" rx="2" fill="white" />
        <rect x="26" y="44" width="12" height="6" fill="#3b82f6" />
        <rect x="18" y="50" width="28" height="3" rx="1" fill="#3b82f6" />
        {/* Design tools on screen */}
        <rect x="16" y="16" width="20" height="14" rx="1" fill="#93c5fd" />
        <rect x="38" y="16" width="10" height="6" rx="1" fill="#fbbf24" />
        <rect x="38" y="25" width="10" height="4" rx="1" fill="#f87171" />
        <circle cx="24" cy="23" r="4" fill="#2563eb" />
        {/* Pencil tool */}
        <rect x="20" y="32" width="3" height="8" rx="1" fill="#f59e0b" transform="rotate(-20 20 32)" />
      </svg>
    ),
    title: "UI/UX DESIGN",
    desc: "An ordinary solution can dominate the Industry with significant design which is why, We at Kushel Digi make sure to provide you with innovative and user-friendly designs. User interface and User Experience design is an integral part of any digital marketing strategy and online enterprise.",
  },
  {
    iconBg: "#fff7ed",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14">
        {/* Shop/store icon */}
        <rect x="8" y="26" width="48" height="30" rx="2" fill="#fb923c" />
        <path d="M 8 26 L 16 12 L 48 12 L 56 26 Z" fill="#fdba74" />
        {/* Door */}
        <rect x="24" y="38" width="16" height="18" rx="1" fill="#fff7ed" />
        {/* Windows */}
        <rect x="12" y="32" width="10" height="8" rx="1" fill="#fff7ed" />
        <rect x="42" y="32" width="10" height="8" rx="1" fill="#fff7ed" />
        {/* Cart icon */}
        <circle cx="44" cy="20" r="10" fill="#2563eb" />
        <path d="M 37 15 L 39 15 L 41 21 L 49 21 L 47 18 L 43 18" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="41" cy="23" r="1.2" fill="white" />
        <circle cx="46" cy="23" r="1.2" fill="white" />
      </svg>
    ),
    title: "E-COMMERCE DEVELOPMENT",
    desc: "The growth of any business requires the use of e-commerce as a channel and instrument. Everything is now easy to reach and merely a click away. E-commerce solutions have made the relationship between the client and the consumer more effective and user-friendly. This is why integrating E-commerce Solutions in a business has become a necessity and is effective.",
  },
  {
    iconBg: "#eff6ff",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14">
        {/* Code/laptop icon */}
        <rect x="6" y="12" width="52" height="36" rx="4" fill="#1e3a5f" />
        <rect x="10" y="16" width="44" height="28" rx="2" fill="#1e293b" />
        <rect x="4" y="48" width="56" height="5" rx="2" fill="#1e3a5f" />
        {/* Code brackets */}
        <text x="14" y="36" fontSize="14" fill="#38bdf8" fontWeight="bold" fontFamily="monospace">{"</>"}</text>
        {/* Lines of code */}
        <rect x="14" y="22" width="18" height="2" rx="1" fill="#38bdf8" />
        <rect x="14" y="27" width="24" height="2" rx="1" fill="#22d3ee" />
        <rect x="14" y="32" width="12" height="2" rx="1" fill="#818cf8" />
      </svg>
    ),
    title: "WEBSITE & APP DEVELOPMENT",
    desc: "Our team of experts strives to develop the ideal website in accordance with your needs and expectations. Having a website for your business increases your credibility and awareness among the audiences. We have an excellent team dedicated to design and develop a SEO-friendly and E-commerce website. It will help your clients to understand you and your services better.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20" style={{ background: "#f5f8fc" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-widest uppercase mb-3">OUR SERVICES</h2>
          <p className="text-gray-500 text-lg font-light">We are expert in</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col border border-gray-100">
              {/* Icon */}
              <div className="mb-6">
                {s.icon}
              </div>
              <h3 className="text-sm font-black mb-5 tracking-wide" style={{ color: "#3b82f6" }}>
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-loose flex-1">{s.desc}</p>

              {/* Learn More */}
              <button className="flex items-center gap-3 mt-8 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#3b82f6" }}
                >
                  <ArrowRight size={16} className="text-white" />
                </span>
                LEARN MORE
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-12 py-4 font-semibold text-white hover:opacity-90 transition-opacity rounded"
            style={{ background: "#3b82f6" }}
          >
            Get Started <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
