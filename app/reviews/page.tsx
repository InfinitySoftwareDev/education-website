"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "HR Manager, TechCorp",
    city: "Mumbai",
    stars: 5,
    text: "Talent Connect India filled 30 positions in 2 weeks. The AI calling saved us 60% of our recruitment time. Absolutely love the service!",
    category: "IT",
  },
  {
    name: "Priya Patel",
    role: "Founder, RetailPro",
    city: "Ahmedabad",
    stars: 5,
    text: "At ₹199, this is unbeatable value. We got 150+ verified applications in 3 days for our store manager position.",
    category: "Retail",
  },
  {
    name: "Amit Singh",
    role: "Operations Head, LogiCo",
    city: "Delhi",
    stars: 5,
    text: "Their recruiter network is massive. We hired 50 warehouse staff across 5 cities seamlessly. Highly recommended.",
    category: "Logistics",
  },
  {
    name: "Neha Gupta",
    role: "HR Director, PharmaCare",
    city: "Hyderabad",
    stars: 5,
    text: "Verified leads are a game-changer. No more fake CVs or wrong numbers. Every candidate we got was genuinely interested.",
    category: "Healthcare",
  },
  {
    name: "Suresh Kumar",
    role: "CEO, BuildRight Constructions",
    city: "Pune",
    stars: 5,
    text: "We needed 200 site workers in 1 month. Talent Connect India delivered 220 screened candidates. Simply outstanding!",
    category: "Construction",
  },
  {
    name: "Meena Iyer",
    role: "Head HR, EduFirst Academy",
    city: "Chennai",
    stars: 5,
    text: "Finding qualified teachers is hard. Talent Connect India made it easy. Their education sector database is excellent.",
    category: "Education",
  },
  {
    name: "Vikram Malhotra",
    role: "Director, AutoZone Pvt Ltd",
    city: "Jaipur",
    stars: 4,
    text: "Good service overall. The AI calling is very efficient. Would like even more city coverage in the future.",
    category: "Automobile",
  },
  {
    name: "Pooja Nair",
    role: "HR Manager, HospitalPro",
    city: "Kochi",
    stars: 5,
    text: "Found 15 nurses within 10 days. The verification system ensures quality. Will definitely use again.",
    category: "Healthcare",
  },
];

const successStories = [
  { company: "TechCorp", hired: 30, days: 14, sector: "IT", city: "Mumbai" },
  {
    company: "LogiCo",
    hired: 50,
    days: 21,
    sector: "Logistics",
    city: "Delhi",
  },
  {
    company: "BuildRight",
    hired: 200,
    days: 30,
    sector: "Construction",
    city: "Pune",
  },
  {
    company: "PharmaCare",
    hired: 25,
    days: 10,
    sector: "Healthcare",
    city: "Hyderabad",
  },
];

export default function ReviewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg py-24 text-center relative">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Client Feedback</span>
            <h1 className="font-heading text-5xl font-extrabold text-white mt-4 mb-5">
              Real Stories from{" "}
              <span className="text-gradient-amber">Real Employers</span>
            </h1>
            <p className="text-slate-300 text-xl">
              5000+ successful placements and counting. Here&apos;s what our
              clients say.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-label">Testimonials</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-3">
              What Our Clients Say
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="card group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={
                          i < t.stars
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-200"
                        }
                      />
                    ))}
                  </div>
                  <span className="badge-blue text-[10px]">{t.category}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
                  <p className="text-blue-500 text-xs mt-0.5">📍 {t.city}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Success Stories</span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mt-3">
              Hiring at Scale
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((s) => (
              <motion.div
                key={s.company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card text-center bg-linear-to-br from-blue-600 to-blue-800 text-white border-0"
              >
                <div className="font-heading text-4xl font-extrabold text-amber-300 mb-1">
                  {s.hired}+
                </div>
                <p className="text-black text-xs mb-3">
                  hired in {s.days} days
                </p>
                <p className="font-black text-white">{s.company}</p>
                <p className="text-black text-xs mt-1">
                  {s.sector} · {s.city}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
