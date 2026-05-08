"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase, Users, Database, Phone, Building2, Shield,
  Megaphone, BadgeCheck, ArrowRight, CheckCircle,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const services = [
  {
    icon: Briefcase,
    title: "Job Posting",
    price: "₹199",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200",
    desc: "Post verified job openings to 50,000+ active candidates across India.",
    features: ["Verified candidate reach", "135+ cities targeting", "30-day active listing" /*, "WhatsApp alerts"*/],
  },
  {
    icon: Users,
    title: "Candidate Hiring",
    price: "Custom",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200",
    desc: "End-to-end hiring support — from sourcing to onboarding.",
    features: ["Pre-screened profiles", "Interview scheduling" /*, "Skill assessment", "Background verification"*/],
  },
  {
    icon: Database,
    title: "Resume Database Access",
    price: "₹999/mo",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200",
    desc: "Direct access to our verified resume database of 2 lakh+ job seekers.",
    features: ["Filter by city/skill", "Verified contact info", "Download profiles" /*, "Regular updates"*/],
  },
  {
    icon: Phone,
    title: "AI Calling System",
    price: "Included",
    color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200",
    desc: "Automated AI calling that screens candidates and delivers only interested ones to you.",
    features: ["250+ calls/day", "Auto-screening" /*, "Call recording", "Lead reports"*/],
  },
  {
    icon: Building2,
    title: "Bulk Hiring",
    price: "Custom",
    color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200",
    desc: "Need 50, 100, or 1000 workers? We specialize in large-scale recruitment drives.",
    features: ["Pan-India coverage", "Quick turnaround" /*, "Dedicated team", "Walk-in drive support"*/],
  },
  {
    icon: Shield,
    title: "Lead Verification",
    price: "Included",
    color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200",
    desc: "Every candidate's email and mobile is verified before you receive the lead.",
    features: ["OTP verification", "Email validation" /*, "Duplicate removal", "Quality scoring"*/],
  },
  {
    icon: Megaphone,
    title: "Recruitment Campaigns",
    price: "₹2,999",
    color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200",
    desc: "Social media + WhatsApp + SMS campaigns targeting specific job profiles.",
    features: ["Multi-channel reach", "10,000+ impressions", "Targeted demographics" /*, "Performance reports"*/],
  },
  {
    icon: BadgeCheck,
    title: "Affordable Plans",
    price: "From ₹199",
    color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200",
    desc: "Flexible subscription plans for startups, SMEs, and large enterprises.",
    features: ["No long-term lock-in", "Pay-per-hire option" /*, "Custom enterprise deals", "Volume discounts"*/],
  },
];

const plans = [
  {
    name: "Basic",
    price: "₹199",
    period: "per job post",
    highlight: false,
    color: "border-slate-200",
    features: ["1 Job Posting", "30-day listing", "Verified leads", "Email support" /*, "AI Calling"*/],
  },
  {
    name: "Pro",
    price: "₹999",
    period: "per month",
    highlight: true,
    color: "border-blue-500",
    features: ["5 Job Postings", "60-day listing", "AI Calling + Priority", "Resume DB Access" /*, "Dedicated Recruiter", "WhatsApp support"*/],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    highlight: false,
    color: "border-amber-400",
    features: ["Unlimited Postings", "Bulk Hiring", "Campaign Management", "Full DB Access" /*, "Account Manager", "SLA Guarantee"*/],
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="hero-bg py-24 text-center relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">What We Offer</span>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mt-4 mb-5">
              Complete <span className="text-gradient-blue">Recruitment</span> Services
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              From ₹199 job postings to full-scale AI-powered hiring campaigns — we have a solution for every business.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="card group cursor-default hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <svc.icon className={`w-6 h-6 ${svc.color}`} />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-slate-900 text-base">{svc.title}</h3>
                  <span className={`text-xs font-bold ${svc.color} ${svc.bg} px-2.5 py-1 rounded-full shrink-0 ml-2`}>{svc.price}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle size={12} className="text-emerald-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Pricing</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-3">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 mt-4">No hidden fees. Start at just ₹199.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`card relative transition-all duration-300 ${plan.highlight ? "border-2 border-blue-500 shadow-xl shadow-blue-100" : "hover:shadow-xl hover:shadow-slate-200"}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</div>
                )}
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-1">
                  <span className="font-heading text-4xl font-extrabold text-blue-600">{plan.price}</span>
                </div>
                <p className="text-slate-400 text-xs mb-6">{plan.period}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/employer" className={plan.highlight ? "btn-primary w-full text-center text-sm" : "btn-outline-blue w-full text-center text-sm"}>
                  Get Started <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
