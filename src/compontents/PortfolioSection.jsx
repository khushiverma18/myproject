import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const projects = [
  {
    url: "www.2ndAmendment.com",
    desc: "Lorem Ipsum is simply dummy",
    previewBg: "#1a1a2e",
    navColor: "#1a2f5e",
    highlights: ["HOME", "SHOP BY MANUFACTURER", "SHOOTING", "HUNTING"],
    heroText: "HATFIELD USA12T",
    heroSub: "HATFIELD USA12T SAS 12/20 FULL RL",
  },
  {
    url: "www.kickeez.com",
    desc: "Lorem Ipsum is simply dummy",
    previewBg: "#111",
    navColor: "#cc0000",
    highlights: ["SHOP NOW", "ABOUT US", "RESELLER", "INSTALLATION"],
    heroText: "THE MOST COMFORTABLE RECOIL PADS",
    heroSub: "MADE IN USA",
  },
  {
    url: "www.fashionstore.com",
    desc: "Premium fashion e-commerce solution",
    previewBg: "#f8f0e8",
    navColor: "#2c2c2c",
    highlights: ["WOMEN", "MEN", "KIDS", "SALE"],
    heroText: "NEW COLLECTION",
    heroSub: "Spring / Summer 2024",
  },
  {
    url: "www.techsolutions.io",
    desc: "Modern SaaS platform with analytics",
    previewBg: "#0f172a",
    navColor: "#1e40af",
    highlights: ["FEATURES", "PRICING", "DOCS", "BLOG"],
    heroText: "SCALE YOUR BUSINESS",
    heroSub: "Powered by AI Technology",
  },
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const pairs = Math.ceil(projects.length / 2);
  const prev = () => setCurrent((c) => (c - 1 + pairs) % pairs);
  const next = () => setCurrent((c) => (c + 1) % pairs);
  const visible = [projects[current * 2], projects[current * 2 + 1]].filter(Boolean);

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 font-black uppercase select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontSize: "clamp(50px, 10vw, 120px)", color: "#eef0f5", letterSpacing: "-2px", top: "-5px" }}
      >
        OUR PORTFOLIO
      </div>

      <div className="max-w-7xl mx-auto px-8 relative pt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black tracking-widest uppercase text-gray-900 mb-4">OUR PORTFOLIO</h2>
          <p className="text-gray-500">
            We design project designed with passion on time,<br />within budget of full value
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex-1 grid md:grid-cols-2 gap-6">
            {visible.map((p) => (
              <div key={p.url} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                {/* Browser-style preview */}
                <div className="relative" style={{ background: p.previewBg, height: "220px" }}>
                  {/* Browser chrome */}
                  <div className="bg-gray-100 flex items-center gap-2 px-3 py-2 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded text-xs text-gray-400 px-2 py-0.5 text-center truncate">
                      {p.url}
                    </div>
                  </div>
                  {/* Fake navbar */}
                  <div className="flex items-center gap-4 px-3 py-1.5" style={{ background: p.navColor }}>
                    <div className="text-white text-xs font-bold opacity-80">{p.url.split('.')[1]}</div>
                    <div className="flex gap-3">
                      {p.highlights.slice(0, 3).map(h => (
                        <span key={h} className="text-white text-[9px] opacity-70">{h}</span>
                      ))}
                    </div>
                  </div>
                  {/* Hero content */}
                  <div className="absolute inset-0 top-16 flex flex-col justify-center px-4">
                    <p className="text-white text-xs font-black opacity-90 tracking-wide mb-1">{p.heroText}</p>
                    <p className="text-white text-[10px] opacity-60">{p.heroSub}</p>
                  </div>
                  {/* Arrow button */}
                  <div
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "#3b82f6" }}
                  >
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base">{p.url}</h3>
                  <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pairs }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-3 h-3 rounded-full transition-colors"
              style={{ background: i === current ? "#3b82f6" : "#d1d5db" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
