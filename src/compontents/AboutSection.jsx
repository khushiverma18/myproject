const features = [
  {
    title: "Great UI / UX",
    desc: "Our designs have great UI which results in great UX as well.",
  },
  {
    title: "SEO Friendly",
    desc: "Our websites are built with features to help your website rank higher.",
  },
  {
    title: "Clean Coding",
    desc: "Coding is kept clean and optimised as per industry standard.",
  },
  {
    title: "Responsive Design",
    desc: "Our Designs are device friendly across all platforms and screen sizes.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Light blue circle bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)", transform: "translate(40%, 40%)" }}
      />

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Watermark - large background text */}
        <div
          className="absolute top-0 left-0 font-black uppercase select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(60px, 12vw, 130px)", color: "#e8eef8", letterSpacing: "-2px", top: "-90px" }}
        >
          ABOUT US
        </div>

        <div className="pt-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-light text-gray-800 mb-1">Hire Top Website</h2>
            <h2 className="text-3xl font-black text-gray-900 mb-7">Designers &amp; Developers</h2>
            <p className="text-gray-500 text-sm leading-loose mb-10">
              If you're looking to hire expert website designers and developers, you've come to the right place to construct a website that stands out in aesthetics and functionality. We have the ability to offer a wide range of services. As we have a comprehensive understanding of website design and exposure across sectors all over the world, we also build websites that provide customers with the best first impression on digital platforms. Here's what we look for when hiring web designers to revitalize your company's online presence.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 font-bold text-sm tracking-widest text-white uppercase hover:opacity-90 transition-opacity"
              style={{ background: "#1e3a5f" }}
            >
              QUICK ENQUIRY
            </a>
          </div>

          {/* Right: 2x2 Feature Cards with blue border */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-lg border-2 text-center hover:shadow-md transition-shadow bg-white"
                style={{ borderColor: "#3b82f6" }}
              >
                <h3 className="font-bold text-base mb-3" style={{ color: "#3b82f6" }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
