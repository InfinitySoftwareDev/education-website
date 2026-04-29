"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai",
  "Kolkata", "Ahmedabad", "Jaipur", "Lucknow",
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg py-24 text-center relative">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Get in Touch</span>
            <h1 className="font-heading text-5xl font-extrabold text-white mt-4 mb-5">
              Contact <span className="text-gradient-blue">Job Portal</span>
            </h1>
            <p className="text-slate-300 text-xl">Have a hiring requirement? Need help? We are here for you.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-start">
          {/* Contact Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">Reach Us Directly</h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 43210", color: "bg-blue-50 text-blue-600" },
                { icon: Mail, label: "Email", value: "info@jobportal.in", color: "bg-emerald-50 text-emerald-600" },
                { icon: MapPin, label: "Head Office", value: "Andheri East, Mumbai, Maharashtra — 400069", color: "bg-amber-50 text-amber-600" },
                { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9:00 AM – 7:00 PM IST", color: "bg-purple-50 text-purple-600" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-slate-800 font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cities */}
            <div>
              <h3 className="font-heading font-bold text-slate-900 mb-4">Our Offices / Recruiter Presence</h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span key={c} className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5">
                    📍 {c}
                  </span>
                ))}
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 rounded-lg px-3 py-1.5">+10 more cities</span>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 h-52 bg-slate-100 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <MapPin size={36} className="mx-auto mb-2 text-blue-400" />
                <p className="font-semibold text-sm">Google Maps Embed</p>
                <p className="text-xs mt-1">Replace with your actual Google Maps embed code</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="card">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" placeholder="Your full name" />
                </div>
                <div>
                  <label className="form-label">Mobile Number *</label>
                  <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-input" placeholder="you@company.com" />
              </div>
              <div>
                <label className="form-label">City</label>
                <select className="form-input">
                  <option value="">Select your city</option>
                  {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Other"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Inquiry Type</label>
                <select className="form-input">
                  <option>I want to hire (Employer)</option>
                  <option>I am looking for a job (Job Seeker)</option>
                  <option>Recruiter Partnership</option>
                  <option>Promoter Inquiry</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea className="form-input h-28 resize-none" placeholder="Tell us about your requirement..." />
              </div>
              <div>
                <label className="form-label">Attach Resume (Job Seekers)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-5 text-center hover:border-blue-400 transition-colors cursor-pointer bg-slate-50">
                  <p className="text-slate-400 text-sm">Click to upload or drag & drop</p>
                  <p className="text-slate-400 text-xs mt-1">PDF, DOC, DOCX — Max 5MB</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full text-base py-4">
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
