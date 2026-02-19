import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [tab, setTab] = useState("address");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">
        {/* Left: Form */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-1">Contact Us</h2>
          <p className="text-gray-500 text-sm mb-8">Please Complete The Below Form. We Will Get In Touch With You</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 mb-4 resize-none bg-white"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button
            className="w-full py-4 font-bold text-sm text-white rounded uppercase tracking-widest hover:opacity-90 transition-opacity"
            style={{ background: "#3b82f6" }}
          >
            SEND MESSAGE
          </button>
        </div>

        {/* Right: Address / Map tabs */}
        <div>
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className="px-6 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px"
              style={tab === "address" ? { borderColor: "#3b82f6", color: "#3b82f6" } : { borderColor: "transparent", color: "#9ca3af" }}
              onClick={() => setTab("address")}
            >
              Address
            </button>
            <button
              className="px-6 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px"
              style={tab === "map" ? { borderColor: "#3b82f6", color: "#3b82f6" } : { borderColor: "transparent", color: "#9ca3af" }}
              onClick={() => setTab("map")}
            >
              Google Maps
            </button>
          </div>

          {tab === "address" && (
            <div className="space-y-8">
              {[
                { Icon: MapPin, label: "OUR LOCATION", value: "G-9, First Floor, Sector 63, Noida" },
                { Icon: Mail, label: "SEND US MAIL", value: "info@kusheldigi.com" },
                { Icon: Phone, label: "CALL US", value: "+91 9045301702" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-5 items-start">
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{ borderColor: "#3b82f6" }}
                  >
                    <Icon size={22} style={{ color: "#3b82f6" }} />
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-gray-800 text-sm mb-1">{label}</p>
                    <p className="text-gray-500 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "map" && (
            <div
              className="rounded-xl overflow-hidden h-72 flex items-center justify-center"
              style={{ background: "#f3f4f6" }}
            >
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-3" style={{ color: "#3b82f6" }} />
                <p className="text-gray-500 text-sm font-medium">G-9, First Floor, Sector 63, Noida</p>
                <p className="text-gray-400 text-xs mt-1">Uttar Pradesh, India</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
