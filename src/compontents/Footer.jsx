import { MapPin, Mail, Phone, Dribbble, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{background: "#0f2744" }}
    >
      {/* World map dot pattern background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 py-10">
        {/* Top row: Logo + Contact info */}
        <div className="flex flex-wrap items-center gap-29 pb-8 border-b border-blue-800">
          {/* Logo */}
          <div className="flex items-center gap-3 mr-8">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="26" cy="26" r="25" stroke="#2563eb" strokeWidth="1.5" fill="rgba(37,99,235,0.12)" />
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                <rect key={i} x="24.5" y="4" width="3" height="7" rx="1.5" fill="#2563eb"
                  transform={`rotate(${deg} 26 26)`} opacity={i % 2 === 0 ? "1" : "0.6"} />
              ))}
              <circle cx="26" cy="26" r="12" fill="#1d3a7a" stroke="#2563eb" strokeWidth="1.5" />
              <text x="26" y="30" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="Arial">KDS</text>
            </svg>
            <div className="border-l border-blue-600 pl-3">
              <div className="text-lg font-bold leading-tight">Kushel Digi</div>
              <div className="text-sm tracking-[0.2em] text-blue-300 font-light">Solutions</div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center flex-shrink-0">
              <MapPin size={16} className="text-blue-300" />
            </div>
            <span className="text-sm text-blue-100">G-9, First Floor, Sector 63, Noida</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center flex-shrink-0">
              <Mail size={16} className="text-blue-300" />
            </div>
            <span className="text-sm text-blue-100">Shubham@Kusheldigi.Com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center flex-shrink-0">
              <Phone size={16} className="text-blue-300" />
            </div>
            <span className="text-sm text-blue-100">9045301702</span>
          </div>
        </div>

        {/* Bottom row: copyright + links | social */}
        <div className="flex flex-wrap items-start justify-between gap-6 pt-7">
          {/* Left: copyright + nav links */}
          <div>
            <p className="text-sm text-blue-200 mb-3">© 2023 Kusheldigi. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-0 text-sm text-blue-300">
              {["About Us", "Insights", "Blog", "Privacy Policy", "Sitemap"].map((link, i, arr) => (
                <span key={link} className="flex items-center">
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                  {i < arr.length - 1 && <span className="mx-2 text-blue-600">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Right: social icons */}
          <div>
            <p className="text-sm text-blue-200 mb-3">Follow Us On</p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Dribbble, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full border border-blue-700 flex items-center justify-center hover:border-blue-400 hover:text-white text-blue-300 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
