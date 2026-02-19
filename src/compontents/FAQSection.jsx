import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How much does a website consultant cost?", a: "Our website consultation is completely free. We assess your requirements and provide tailored recommendations at no charge." },
  { q: "How much should I pay for website design?", a: "Website design costs depend on complexity. A basic website starts from ₹15,000, while complex e-commerce or custom solutions range higher." },
  { q: "How much does a small website cost?", a: "A small 5-page informational website starts around ₹15,000–₹25,000 depending on design complexity and features." },
  { q: "How much does a basic 5 page website cost?", a: "A basic 5-page website with modern design costs approximately ₹15,000–₹30,000 including domain and one year hosting support." },
  { q: "How long does a website take to build?", a: "A standard website takes 2–4 weeks. Custom or complex projects may take 4–8 weeks depending on requirements and revisions." },
  { q: "Is maintaining the website costly?", a: "Website maintenance is affordable. We offer maintenance packages starting from ₹2,000/month covering updates, backups, and support." },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  const FaqItem = ({ faq, idx }) => (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        onClick={() => toggle(idx)}
      >
        <span className="font-medium text-gray-800 text-sm pr-4">
          {faq.q}
        </span>

        <div
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white"
          style={{ background: "#3b82f6" }}
        >
          {open === idx ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      {open === idx && (
        <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {faq.a}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20" style={{ background: "#f5f8fc" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide mb-3">
            FREQUENTLY ASKED{" "}
            <span style={{ color: "#3b82f6" }}>QUESTION</span>
          </h2>

          <p className="text-gray-500 text-sm">
            Here are some common queries and questions that brands ask.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 mb-14">
          <div>
            {leftFaqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} idx={i * 2} />
            ))}
          </div>

          <div>
            {rightFaqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} idx={i * 2 + 1} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 mb-6">
            Got More Questions On Your Mind?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-12 py-4 rounded font-semibold text-white hover:opacity-90 transition-opacity text-sm"
            style={{ background: "#3b82f6" }}
          >
            Ask Us a question →
          </a>
        </div>
      </div>
    </section>
  );
}
