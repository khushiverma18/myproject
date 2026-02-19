import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "OUR PORTFOLIO", href: "#portfolio" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo - exact KDS gear logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-16 h-16 relative flex items-center justify-center">
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              {/* Outer gear teeth */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const cx = 40 + 33 * Math.cos(angle);
                const cy = 40 + 33 * Math.sin(angle);
                return (
                  <circle key={i} cx={cx} cy={cy} r="4" fill="#2563eb" />
                );
              })}
              {/* Middle ring */}
              <circle cx="40" cy="40" r="26" fill="white" stroke="#2563eb" strokeWidth="2" />
              <circle cx="40" cy="40" r="22" fill="#2563eb" />
              {/* KDS text */}
              <text x="40" y="37" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Arial">KDS</text>
              <text x="40" y="50" textAnchor="middle" fontSize="6" fontWeight="400" fill="white" fontFamily="Arial" letterSpacing="1">SOLUTIONS</text>
            </svg>
          </div>
          <div>
            <div className="text-xl font-black text-gray-800 leading-tight">Kushel Digi</div>
            <div className="text-xs font-medium text-gray-500 tracking-[0.2em] uppercase">Solutions</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - exact blue square */}
        <a
          href="tel:9045301702"
          className="hidden lg:flex items-center gap-2 px-5 py-3 font-bold text-sm text-white hover:opacity-90 transition-opacity"
          style={{ background: "#2563eb" }}
        >
          CALL NOW : 9045301702
        </a>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="tel:9045301702" className="flex items-center gap-2 px-5 py-3 font-bold text-sm text-white w-fit" style={{ background: "#2563eb" }}>
            <Phone size={16} /> CALL NOW : 9045301702
          </a>
        </div>
      )}
    </nav>
  );
}
