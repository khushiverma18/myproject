import { ArrowRight } from "lucide-react";

export default function ConsultationBanner() {
  return (
    <section className="py-24 text-center" style={{ background: "#0f2744" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get Free Consultation</h2>
        <p className="text-blue-300 text-lg mb-10">
          Book An Appoinment With Our Team Through Google Meet / Zoom Call
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white hover:opacity-90 transition-opacity text-base"
          style={{ background: "#3b82f6" }}
        >
          Schedule a meeting <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
