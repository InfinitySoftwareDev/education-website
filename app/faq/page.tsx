"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    title: "Hiring Process",
    faqs: [
      { q: "How does Talent Connect India's hiring process work?", a: "Post a job → Our AI system calls verified candidates → Interested candidates are forwarded to your HR team → You conduct final interviews → Hire!" },
      { q: "How quickly will I receive candidates?", a: "Within 24–48 hours of posting a job, our AI system begins calling candidates. You will receive shortlisted leads within 2–3 business days." },
      { q: "Can I hire in multiple cities at once?", a: "Yes! Talent Connect India covers 135+ cities. When posting a job, simply select multiple city targets and our recruiter network will activate in all selected locations." },
    ],
  },
  {
    title: "Pricing & Plans",
    faqs: [
      { q: "Is the ₹199 price real? Are there hidden charges?", a: "Absolutely real. ₹199 gets you a verified job posting with AI calling support and 30-day listing. No hidden fees. We have no setup charges or service fees on top." },
      { q: "What is included in the ₹199 job post?", a: "AI calling, verified candidate reach, 30-day active listing, WhatsApp alerts, and recruiter follow-up. Everything you need to hire." },
      { q: "Do you offer refunds?", a: "If no candidate is delivered within 7 days of posting, we offer a full credit refund which you can use for future postings. Terms apply." },
    ],
  },
  {
    title: "AI Calling System",
    faqs: [
      { q: "What is the AI Calling System?", a: "Our proprietary AI makes automated calls to verified candidates in our database, checks their availability and interest, and sends only interested candidates to you — saving 80% of your HR team's time." },
      { q: "How many candidates does the AI call per day?", a: "Our AI can make 250+ calls per day for your job opening. This ensures rapid candidate reach unlike any other platform." },
      { q: "Is the AI calling available 24/7?", a: "The AI calls between 9 AM and 8 PM on weekdays. On weekends, it sends WhatsApp messages to candidates for next-day follow-up." },
    ],
  },
  {
    title: "Cities & Locations",
    faqs: [
      { q: "Which cities does Talent Connect India operate in?", a: "We currently operate in 135+ cities across India, including all major metros and Tier 1, Tier 2, and Tier 3 cities, ensuring a pan-India reach for your recruitment needs." },
      { q: "Can you hire for remote / work-from-home roles?", a: "Yes! For remote roles, our AI calling covers candidates from all major metropolitan areas and Tier-2 cities." },
      { q: "Are you expanding to more cities?", a: "Yes, we are actively expanding. 20 more cities are planned by end of 2025. Contact us if your city is not listed." },
    ],
  },
  {
    title: "Recruiter Support",
    faqs: [
      { q: "Will I get a dedicated recruiter?", a: "Pro plan and above come with a dedicated Human Recruiter who manages your job requirement personally. Basic plan has shared recruiter support." },
      { q: "How do I reach my recruiter?", a: "Via WhatsApp, phone call, or the dashboard messaging system. Pro plan guarantees response within 4 hours on working days." },
    ],
  },
  {
    title: "Verification & Trust",
    faqs: [
      { q: "How are candidates verified?", a: "Every candidate undergoes OTP-based mobile verification and email validation when they register. Our system also removes duplicate profiles automatically." },
      { q: "What if a candidate gives wrong information?", a: "All profiles on our platform have been OTP-verified at registration. If a candidate is found to have provided false info, we will replace them at no extra charge." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 text-sm pr-4">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} className="text-blue-500 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 text-slate-500 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg py-24 text-center relative">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">FAQ</span>
            <h1 className="font-heading text-5xl font-extrabold text-white mt-4 mb-5">
              Frequently Asked <span className="text-gradient-blue">Questions</span>
            </h1>
            <p className="text-slate-300 text-xl">Everything you need to know about Talent Connect India recruitment services.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-heading text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <span className="w-7 h-7 bg-blue-600 text-white text-xs font-bold rounded-lg flex items-center justify-center">{ci + 1}</span>
                {cat.title}
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
