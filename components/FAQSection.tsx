"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  { 
    q: "How does Talent Connect India's hiring process work?", 
    a: "Post a job → Our AI system calls verified candidates → Interested candidates are forwarded to your HR team → You conduct final interviews → Hire!" 
  },
  { 
    q: "Is the ₹199 price real? Are there hidden charges?", 
    a: "Absolutely real. ₹199 gets you a verified job posting with AI calling support and 30-day listing. No hidden fees. We have no setup charges or service fees on top." 
  },
  { 
    q: "What is the AI Calling System?", 
    a: "Our proprietary AI makes automated calls to verified candidates in our database, checks their availability and interest, and sends only interested candidates to you — saving 80% of your HR team's time." 
  },
  { 
    q: "How quickly will I receive candidates?", 
    a: "Within 24–48 hours of posting a job, our AI system begins calling candidates. You will receive shortlisted leads within 2–3 business days." 
  },
  { 
    q: "Can I hire in multiple cities at once?", 
    a: "Yes! Talent Connect India covers 135+ cities. When posting a job, simply select multiple city targets and our recruiter network will activate in all selected locations." 
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-4"
          >
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-lg"
          >
            Everything you need to know about our AI-powered recruitment process.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                activeIndex === index 
                  ? "border-blue-200 bg-white shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/10" 
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeIndex === index ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`font-bold text-base md:text-lg transition-colors ${
                    activeIndex === index ? "text-slate-900" : "text-slate-700 group-hover:text-blue-600"
                  }`}>
                    {faq.q}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`${activeIndex === index ? "text-blue-600" : "text-slate-400"}`}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 ml-14">
                      <div className="h-px bg-slate-100 mb-6" />
                      <p className="text-slate-600 leading-relaxed text-base">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
