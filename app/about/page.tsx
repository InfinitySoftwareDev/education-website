"use client";
import { motion } from "framer-motion";
import { Users, Award, MapPin, TrendingUp, Target, Eye, Heart } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

const timeline = [
  { year: "2014", title: "Company Founded", desc: "Job Portal was established with a vision to make quality hiring accessible to all businesses across India." },
  { year: "2016", title: "100+ Placements", desc: "Crossed 100 successful placements and expanded to 5 major cities in India." },
  { year: "2018", title: "AI Calling Launched", desc: "Introduced India's first AI-based calling system for automated candidate screening." },
  { year: "2020", title: "135+ Cities Coverage", desc: "Expanded recruiter network to cover 135+ cities and 12 industry sectors." },
  { year: "2022", title: "5000+ Placements", desc: "Crossed a major milestone of 5000+ successful placements with 99% employer satisfaction." },
  { year: "2024", title: "₹199 Job Posting", desc: "Launched India's most affordable verified job posting solution at just ₹199." },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To democratize hiring in India by providing affordable, AI-powered recruitment solutions that connect the right talent with the right opportunity — every time.", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Eye, title: "Our Vision", desc: "To become India's most trusted and largest recruiter network, spanning 100+ cities, powered by AI and driven by verified data.", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Heart, title: "Our Values", desc: "Transparency, verified quality, affordability, and candidate dignity. We believe every job seeker deserves a fair chance and every employer deserves genuine candidates.", color: "text-emerald-600", bg: "bg-emerald-50" },
];

const teamStats = [
  { icon: Users, value: 50, suffix: "+", label: "Employees", color: "text-blue-600" },
  { icon: Award, value: 50, suffix: "+", label: "Active Recruiters", color: "text-amber-500" },
  { icon: MapPin, value: 135, suffix: "+", label: "Cities", color: "text-emerald-500" },
  { icon: TrendingUp, value: 5000, suffix: "+", label: "Placements in 5 Yrs", color: "text-purple-500" },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="hero-bg py-24 text-center relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">Our Story</span>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mt-4 mb-6">
              10+ Years of <span className="text-gradient-blue">Recruitment</span> Excellence
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
              From a small team of passionate recruiters to a network of 50+ professionals spanning 135+ cities — Job Portal has been building India's careers, one placement at a time.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 bg-white transition-all group cursor-default"
              >
                <s.icon className={`w-8 h-8 ${s.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className={`font-heading text-4xl font-extrabold ${s.color}`}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">What Drives Us</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-3">Mission, Vision & Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="card text-center hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 cursor-default"
              >
                <div className={`w-16 h-16 ${v.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <v.icon className={`w-8 h-8 ${v.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-3">10 Years of Growth</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-200 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`md:flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="card inline-block text-left w-full hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                    >
                      <span className="text-blue-600 font-bold text-sm font-heading">{item.year}</span>
                      <h4 className="font-heading font-bold text-slate-900 text-lg mt-1 mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg shadow-blue-600/30 shrink-0 z-10" />
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
