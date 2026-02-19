import { useState } from "react";
import { Phone } from "lucide-react";

export default function HeroSection() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", budget: "", startDate: "",
  });

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Light blue circle bottom-right like design */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #dbeafe 0%, transparent 70%)", transform: "translate(35%, 35%)" }}
      />

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center py-16">
        {/* Left Content */}
        <div>
          <p className="text-gray-500 mb-3 text-base font-normal">Welcome to Kushel Digi</p>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] mb-6">
            Revolutionising your business through Technology.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
            We are a leading company, which has been offering technology solutions across the globe for almost 5 years.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="px-8 py-4 font-bold text-sm tracking-widest text-white uppercase"
              style={{ background: "#1e3a5f" }}
            >
              QUICK ENQUIRY
            </a>
            <a
              href="tel:9045301702"
              className="flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-widest text-white uppercase"
              style={{ background: "#3b82f6" }}
            >
              <Phone size={18} />
              9045301702
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm font-medium text-gray-700">
            <span>• UI/UX DESIGN</span>
            <span>• WEBSITE &amp; APP DEVELOPMENT</span>
            <span>• E-COMMERCE DEVELOPMENT</span>
          </div>
        </div>

        {/* Right: Get Free Quote Form - dark card */}
        <div className="rounded-lg p-8 shadow-2xl" style={{ background: "#1e3a5f" }}>
          <h2 className="text-xl font-bold text-white text-center mb-1 leading-snug">
            Hire A Top Global Talent To Grow Your Business !
          </h2>
          <p className="text-center text-blue-300 mb-6 text-sm font-normal">Get Free Quote</p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-4 py-3 bg-white rounded-sm text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full px-4 py-3 bg-white rounded-sm text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-white rounded-sm text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <select
              className="w-full px-4 py-3 bg-white rounded-sm text-sm text-gray-500 outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
              value={form.service}
              onChange={e => setForm({ ...form, service: e.target.value })}
            >
              <option value="">Services ▾</option>
              <option>UI/UX Design</option>
              <option>Website Development</option>
              <option>App Development</option>
              <option>E-Commerce Development</option>
            </select>
          </div>

          <p className="text-white text-sm font-semibold mb-3">Additional Details</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <input
              type="text"
              placeholder="Select Budget"
              className="w-full px-4 py-3 bg-white rounded-sm text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              value={form.budget}
              onChange={e => setForm({ ...form, budget: e.target.value })}
            />
            <input
              type="text"
              placeholder="Best Start Date"
              className="w-full px-4 py-3 bg-white rounded-sm text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              value={form.startDate}
              onChange={e => setForm({ ...form, startDate: e.target.value })}
            />
          </div>

          <button
            className="w-full py-4 font-semibold text-white rounded-sm hover:opacity-90 transition-opacity text-base"
            style={{ background: "#3b82f6" }}
          >
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
}
