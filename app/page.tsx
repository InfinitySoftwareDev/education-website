"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Briefcase, Users, MapPin, Trophy, Phone, Star,
  CheckCircle, TrendingUp, Zap, Shield, Building2, ChevronRight,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQSection from "@/components/FAQSection";

/* ── Variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ── Data ─────────────────────────────────────── */
const stats = [
  { icon: Trophy, value: 5000, suffix: "+", label: "Successful Placements", color: "text-amber-400" },
  { icon: Users, value: 50, suffix: "+", label: "Active Recruiters", color: "text-blue-400" },
  { icon: MapPin, value: 135, suffix: "+", label: "Cities Covered", color: "text-emerald-400" },
  { icon: Briefcase, value: 10, suffix: "+", label: "Years Experience", color: "text-purple-400" },
];

const comparisons = [
  { feature: "Job Posting Cost", jobportal: "₹199 Only", naukri: "₹3,000+", apna: "₹1,500+", workindia: "₹1,000+" },
  { feature: "AI Calling System", jobportal: "✅ Yes", naukri: "❌ No", apna: "❌ No", workindia: "❌ No" },
  { feature: "Verified Leads", jobportal: "✅ Yes", naukri: "⚡ Partial", apna: "⚡ Partial", workindia: "✅ Yes" },
  { feature: "Dedicated Recruiter", jobportal: "✅ Yes", naukri: "❌ No", apna: "❌ No", workindia: "❌ No" },
  { feature: "Bulk Hiring Support", jobportal: "✅ Yes", naukri: "✅ Yes", apna: "⚡ Partial", workindia: "⚡ Partial" },
  { feature: "Mobile Verified DB", jobportal: "✅ Yes", naukri: "⚡ Partial", apna: "✅ Yes", workindia: "✅ Yes" },
  { feature: "Resume Database Access", jobportal: "✅ Included", naukri: "₹Paid Add-on", apna: "❌ No", workindia: "⚡ Partial" },
];

const aiFeatures = [
  { icon: Phone, title: "AI Auto-Calling", desc: "Our AI calls verified candidates on your behalf — 24/7, no manual effort." },
  { icon: Shield, title: "Verified Database", desc: "Every email and mobile number is verified before reaching you." },
  { icon: TrendingUp, title: "Smart Lead Scoring", desc: "AI ranks candidates by relevance, skills, and location match." },
  { icon: Zap, title: "Instant Alerts", desc: "Get real-time WhatsApp/SMS alerts when a candidate responds." },
];

const industries = [
  { icon: "💻", label: "Information Technology" },
  { icon: "🏥", label: "Healthcare & Pharma" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🏦", label: "Banking & Finance" },
  { icon: "🛒", label: "Retail & E-Commerce" },
  { icon: "🎓", label: "Education & Training" },
  { icon: "🏗️", label: "Construction & Real Estate" },
  { icon: "🚗", label: "Automobile & Auto Ancillary" },
  { icon: "🍽️", label: "Hospitality & Hotels" },
  { icon: "📦", label: "Logistics & Supply Chain" },
  { icon: "📞", label: "BPO / Call Centre" },
  { icon: "⚡", label: "Energy & Infrastructure" },
];

const testimonials = [
  { name: "Rahul Sharma", role: "HR Manager, TechCorp", stars: 5, text: "Job Portal filled 30 positions within 2 weeks. The AI calling saved us 60% of our time!" },
  { name: "Priya Patel", role: "Founder, RetailPro", stars: 5, text: "At ₹199 per job post, this is unbeatable. We got 150+ verified applications in 3 days." },
  { name: "Amit Singh", role: "Operations Head, LogiCo", stars: 5, text: "Their recruiter network is massive. We hired 50 warehouse staff across 5 cities easily." },
  { name: "Neha Gupta", role: "HR Director, PharmaCare", stars: 5, text: "Verified leads are a game-changer. No more fake CVs or wrong numbers." },
];

const trustedLogos = [
  "TechCorp", "RetailPro", "LogiCo", "PharmaCare", "BuildIt", "EduFirst", "AutoZone", "HospitalPro",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ═══ 1. HERO ═══════════════════════════════════ */}
      <section className="hero-bg min-h-screen flex items-center relative py-20">
        {/* Floating blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-400/8 rounded-full blur-3xl animate-float-slow pointer-events-none" />

        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[8%] hidden lg:flex w-14 h-14 glass-card items-center justify-center text-blue-400"
        >
          <Briefcase size={28} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[8%] hidden lg:flex w-14 h-14 glass-card items-center justify-center text-amber-400"
        >
          <Trophy size={28} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute top-40 right-[12%] hidden lg:flex w-12 h-12 glass-card items-center justify-center text-emerald-400"
        >
          <CheckCircle size={22} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold px-5 py-2 rounded-full mb-8 uppercase tracking-wider"
            >
              <Star size={12} className="fill-amber-300" />
              Trusted by 5000+ Companies Across India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              10+ Years of{" "}
              <span className="text-gradient-blue">Recruitment</span>{" "}
              <br className="hidden sm:block" />
              Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
            >
              Affordable Hiring Solutions Starting at{" "}
              <span className="text-amber-400 font-bold text-2xl">₹199</span>
              . AI-based calling, verified leads, and 50+ dedicated recruiters.
            </motion.p>

            {/* Trust Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {["AI Calling", "Verified Leads", "135+ Cities", "₹199 Only"].map((chip) => (
                <span key={chip} className="flex items-center gap-1.5 bg-white/8 border border-white/15 text-slate-300 text-xs font-semibold px-4 py-1.5 rounded-full">
                  <CheckCircle size={11} className="text-emerald-400" /> {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/employer" className="btn-amber text-base py-4 px-8 hover-shine">
                Post a Job — ₹199 <ArrowRight size={18} />
              </Link>
              <Link href="/jobs" className="btn-outline text-base py-4 px-8">
                Find Jobs
              </Link>
              <Link href="/contact" className="btn-outline text-base py-4 px-8">
                <Phone size={16} /> Contact Recruiter
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══ 2. STATS ═══════════════════════════════════ */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="group text-center p-8 rounded-2xl border border-slate-100 hover:border-blue-200 bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:scale-110 flex items-center justify-center mx-auto mb-4 transition-transform duration-300">
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`font-heading text-4xl md:text-5xl font-extrabold mb-1 ${stat.color}`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="w-8 h-1 bg-slate-100 group-hover:w-14 group-hover:bg-blue-500 mx-auto mb-3 rounded-full transition-all duration-300" />
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. COMPETITOR COMPARISON + AI CALLING ═════ */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Comparison Table */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Why Job Portal?</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              We Beat the Competition
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Compare and see why thousands of employers choose Job Portal over Naukri, Apna, and WorkIndia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl bg-white mb-20"
          >
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm w-48">Feature</th>
                  <th className="px-6 py-4 text-sm font-bold">
                    <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-full">Job Portal</span>
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold opacity-80">Naukri</th>
                  <th className="px-6 py-4 text-sm font-semibold opacity-80">Apna</th>
                  <th className="px-6 py-4 text-sm font-semibold opacity-80">WorkIndia</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{row.feature}</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-700 text-center bg-blue-50/40">{row.jobportal}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 text-center">{row.naukri}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 text-center">{row.apna}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 text-center">{row.workindia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* AI Calling Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="section-label">AI Technology</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-5">
                India&apos;s First <span className="text-gradient-blue">AI Recruiter</span> That Calls For You
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Our proprietary AI calling system auto-dials verified candidates, screens basic eligibility, and only transfers interested candidates to your HR team. Save 80% of your recruitment time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <f.icon size={18} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm mb-1">{f.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-8 hover:gap-3 transition-all group">
                Learn about all features <ChevronRight size={16} className="group-hover:text-blue-700" />
              </Link>
            </motion.div>

            {/* AI Phone Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center h-80"
            >
              <div className="absolute w-72 h-72 rounded-full bg-blue-100 animate-pulse-glow" />
              <div className="absolute w-56 h-56 rounded-full bg-blue-200/60 animate-ring-pulse" />
              <div className="absolute w-40 h-40 rounded-full bg-blue-300/40 animate-ring-pulse delay-300" />
              <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-brand flex items-center justify-center shadow-glow-blue">
                <Phone size={48} className="text-white animate-float" />
              </div>
              {/* Floating status chips */}
              <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-8 right-8 glass-card-light px-4 py-2 text-xs font-bold text-emerald-700">
                ✅ Call Connected
              </motion.div>
              <motion.div animate={{ x: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-10 left-6 glass-card-light px-4 py-2 text-xs font-bold text-blue-700">
                📞 250 Calls / Day
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4. INDUSTRIES ══════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Industries We Serve</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Hiring Across Every Sector
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.label}
                variants={fadeUp}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 bg-white transition-all duration-300 cursor-default text-center"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{ind.icon}</span>
                <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors leading-tight">{ind.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. TESTIMONIALS ════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Client Stories</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3">
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
              <motion.div key={t.name} variants={fadeUp} className="glass-card hover:bg-white/12 transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="btn-outline text-sm py-3 px-7">
              Read All Reviews <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 6. TRUSTED LOGOS ═══════════════════════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
            Trusted by Leading Companies Across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {trustedLogos.map((name) => (
              <div
                key={name}
                className="h-12 px-6 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-bold text-sm hover:border-blue-300 hover:text-blue-600 transition-all cursor-default shadow-sm"
              >
                <Building2 size={16} className="mr-2" /> {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. FAQ SECTION ═════════════════════════════ */}
      <FAQSection />

      {/* ═══ 8. CTA BANNER ══════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-400 to-amber-500 p-12 md:p-16 text-center shadow-2xl shadow-amber-400/30"
          >
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block bg-slate-900/15 text-slate-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                🔥 Limited Time Offer
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Post a Job for Just ₹199
              </h2>
              <p className="text-slate-800/80 text-lg mb-8 max-w-xl mx-auto">
                Reach 50,000+ verified candidates. Get AI-powered calling, verified leads & dedicated recruiter support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/employer" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl text-base">
                  Post a Job Now <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/30 hover:bg-white/50 text-slate-900 font-bold px-10 py-4 rounded-xl transition-all border border-slate-900/20 text-base">
                  Talk to a Recruiter
                </Link>
              </div>
              <p className="text-slate-700/70 text-xs mt-6">No hidden charges · Cancel anytime · 24/7 support</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
