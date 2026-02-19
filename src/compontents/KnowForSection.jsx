import { ArrowRight } from "lucide-react";

const points = [
  "99.9% Uptime with web acceleration. Caching and compression enabled High-Traffic Websites & Apps development service to scale up sales and support hundreds of thousands of users in a fast, reliable manner.",
  "Clear terms and conditions, Robust data security to protect your customers' information. Providing Complete Ownership and Control your project. No Fake Commitment, Delivery on time",
  "Free Website Audit, Quick Review, 24x7 tech support. Easy to use complete Website Application end-to-end Analytics With Accelerated Mobile Pages (AMP)",
  "Use of Latest technologies like React Web Development, Vue JS Web Development, NodeJS Web Developers for web development & Website design service in India.",
  "Website UX Ui Design, Wireframing, Prototyping in figma before actually developing the webpages to make sure we're heading towards the right direction.",
];

export default function KnownForSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 uppercase mb-8 tracking-wide">WE ARE KNOW FOR</h2>
          <ul className="space-y-6 mb-10">
            {points.map((p, i) => (
              <li key={i} className="flex gap-4 items-start">
                {/* Green circle check */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#22c55e"/>
                  <path d="M7 12 L10 15 L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-gray-500 text-sm leading-loose">{p}</p>
              </li>
            ))}
          </ul>
          <a
            href="tel:9045301702"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm text-white uppercase tracking-widest hover:opacity-90 transition-opacity"
            style={{ background: "#3b82f6" }}
          >
            CALL NOW <ArrowRight size={16} />
          </a>
        </div>

        {/* Right: Blob person image */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72">
            {/* Blob shape background */}
            <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
              <defs>
                <clipPath id="blob">
                  <path d="M150,10 C200,10 250,40 270,90 C290,140 280,200 240,240 C200,280 140,290 90,260 C40,230 10,170 20,110 C30,50 100,10 150,10Z"/>
                </clipPath>
              </defs>
              <circle cx="150" cy="150" r="140" fill="#e0eeff" opacity="0.6"/>
              {/* Person silhouette */}
              <g clipPath="url(#blob)">
                <rect x="0" y="0" width="300" height="300" fill="#dbeafe"/>
                {/* Body */}
                <ellipse cx="150" cy="110" rx="42" ry="45" fill="#93c5fd"/>
                <path d="M60 300 Q60 190 150 190 Q240 190 240 300 Z" fill="#3b82f6"/>
                {/* Head */}
                <ellipse cx="150" cy="95" rx="32" ry="35" fill="#fcd34d"/>
                {/* Hair */}
                <ellipse cx="150" cy="68" rx="32" ry="15" fill="#1e3a5f"/>
                {/* Shirt collar */}
                <path d="M125 135 L150 155 L175 135" stroke="white" strokeWidth="3" fill="none"/>
              </g>
              {/* Outer ring */}
              <circle cx="150" cy="150" r="140" fill="none" stroke="#bfdbfe" strokeWidth="3" strokeDasharray="8 6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
