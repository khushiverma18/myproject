import React from "react";
import { Phone } from "lucide-react";

const steps = [
  {
    num: "01",
    label: "We Get Your Requirements",
    subLabel: "Step 01",
    color: "#1e3a5f",
    position: "top",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="8" y="4" width="22" height="28" rx="2" fill="white" fillOpacity="0.9"/>
        <rect x="11" y="10" width="14" height="2" rx="1" fill="#1e3a5f"/>
        <rect x="11" y="15" width="10" height="2" rx="1" fill="#1e3a5f"/>
        <rect x="11" y="20" width="12" height="2" rx="1" fill="#1e3a5f"/>
        <circle cx="28" cy="28" r="8" fill="#1e3a5f" stroke="white" strokeWidth="2"/>
        <path d="M25 28 L27 30 L32 25" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Market Research & Feasibility Analysis",
    subLabel: "Step 02",
    color: "#c97d1a",
    position: "bottom",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="17" cy="17" r="10" fill="none" stroke="white" strokeWidth="2.5"/>
        <line x1="24" y1="24" x2="34" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="22" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="17" y1="12" x2="17" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Designing & Get Conformation",
    subLabel: "Step 03",
    color: "#b84a1a",
    position: "top",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M20 8 C20 8 14 14 14 22 C14 28 20 34 20 34" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M20 8 C20 8 26 14 26 22 C26 28 20 34 20 34" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="20" cy="22" r="4" fill="white"/>
        <circle cx="20" cy="22" r="2" fill="#b84a1a"/>
        <line x1="12" y1="10" x2="28" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 6 L28 10 L30 6 L28 8 Z" fill="white"/>
      </svg>
    ),
  },
  {
    num: "04",
    label: "Coding & Development",
    subLabel: "Step 04",
    color: "#1a8080",
    position: "bottom",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="6" y="10" width="28" height="20" rx="2" fill="none" stroke="white" strokeWidth="2"/>
        <text x="20" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="monospace">
          {"</>"}
        </text>
      </svg>
    ),
  },
  {
    num: "05",
    label: "Testing & Maintenance",
    subLabel: "Step 05",
    color: "#1a4fa3",
    position: "top",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="10" y="6" width="20" height="26" rx="2" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="14" y="10" width="12" height="2" rx="1" fill="white"/>
        <path d="M14 16 L16 18 L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M14 22 L16 24 L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
];

export default function WorkingProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-widest text-center mb-20 uppercase">
          OUR WORKING PROCESS
        </h2>

        <div className="relative flex items-center justify-between mb-20 overflow-x-auto pb-4">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2 z-0" />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center relative z-10 flex-1 min-w-[120px] px-2">
              
              {step.position === "top" && (
                <div className="text-center mb-4 min-h-[56px] flex flex-col justify-end">
                  <p className="text-xs text-gray-500 mb-1 max-w-[110px]">{step.label}</p>
                  <p className="font-black text-base" style={{ color: step.color }}>
                    {step.subLabel}
                  </p>
                </div>
              )}

              <div className="relative flex items-center justify-center my-2">
                <div className="absolute w-24 h-24 rounded-full border opacity-20" style={{ borderColor: step.color }} />
                <div className="absolute w-20 h-20 rounded-full border-2 opacity-30" style={{ borderColor: step.color }} />
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10"
                  style={{ background: step.color }}
                >
                  {step.icon}
                </div>
              </div>

              {step.position === "bottom" && (
                <div className="text-center mt-4 min-h-[56px]">
                  <p className="font-black text-base" style={{ color: step.color }}>
                    {step.subLabel}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 max-w-[110px]">
                    {step.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-12 py-4 font-bold tracking-widest text-sm text-white uppercase hover:opacity-90 transition-opacity"
            style={{ background: "#1e3a5f" }}
          >
            QUICK ENQUIRY
          </a>

          <a
            href="tel:9045301702"
            className="flex items-center gap-2 px-12 py-4 font-bold tracking-widest text-sm text-white uppercase hover:opacity-90 transition-opacity"
            style={{ background: "#3b82f6" }}
          >
            <Phone size={18} />
            9045301702
          </a>
        </div>
      </div>
    </section>
  );
}
