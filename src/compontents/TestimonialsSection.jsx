import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    name: "Harriet Mitchell",
    role: "Director of inbrew",
    quote: "Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, an unknown printer took a gallery.",
    initials: "HM",
    avatarBg: "#b45309",
  },
  {
    name: "James Wilson",
    role: "CEO at TechForward",
    quote: "Kushel Digi Solutions exceeded all our expectations. Their team delivered an outstanding website that perfectly represents our brand and has significantly increased our online conversions.",
    initials: "JW",
    avatarBg: "#1d4ed8",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head at GrowthHub",
    quote: "Professional, responsive, and incredibly talented team. They built our e-commerce platform from scratch and the results have been phenomenal. Highly recommended!",
    initials: "PS",
    avatarBg: "#15803d",
  },
  {
    name: "Rajesh Kumar",
    role: "Founder, StartupX",
    quote: "Working with Kushel Digi was a pleasure. They understood our vision and turned it into a world-class application. The support team is also very prompt and helpful.",
    initials: "RK",
    avatarBg: "#7c3aed",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">TESTIMONIALS</p>
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 uppercase">OUR HAPPY CLIENT SAY</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Testimonial */}
          <div>
            {/* Avatar row */}
            <div className="flex items-center gap-3 mb-10">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full flex items-center justify-center text-white font-bold transition-all flex-shrink-0"
                  style={{
                    background: t.avatarBg,
                    width: i === current ? "64px" : "40px",
                    height: i === current ? "64px" : "40px",
                    fontSize: i === current ? "14px" : "11px",
                    opacity: i === current ? 1 : 0.55,
                  }}
                >
                  {t.initials}
                </button>
              ))}

              {/* Navigation arrows */}
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  style={{ background: "#3b82f6" }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <blockquote className="text-gray-500 text-base leading-loose mb-8">
              {testimonials[current].quote}
            </blockquote>

            <div className="mb-6">
              <p className="font-black text-xl text-gray-900">{testimonials[current].name}</p>
              <p className="text-gray-500 text-sm mt-1">{testimonials[current].role}</p>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: i === current ? "28px" : "10px",
                    background: i === current ? "#3b82f6" : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Video placeholder */}
          <div
            className="rounded-2xl overflow-hidden relative flex items-center justify-center"
            style={{ background: "#2d3748", height: "340px" }}
          >
            {/* Person silhouette */}
            <div className="absolute inset-0 flex items-end justify-center pb-0 opacity-60">
              <svg viewBox="0 0 200 300" className="h-full w-auto">
                <ellipse cx="100" cy="60" rx="40" ry="40" fill="#4a5568"/>
                <path d="M20 300 Q20 180 100 180 Q180 180 180 300 Z" fill="#4a5568"/>
              </svg>
            </div>
            {/* Play button */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10 relative"
              style={{ background: "#3b82f6" }}
            >
              <Play size={28} className="text-white ml-1" fill="white" />
            </div>
            {/* Dots bottom right */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {[0, 1, 2, 3].map((d) => (
                <div
                  key={d}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: d === 0 ? "#3b82f6" : "rgba(255,255,255,0.3)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
