"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Briefcase, UserCircle } from "lucide-react";

const recruiterFaqs = [
  {
    q: "How does Talent Connect India's hiring process work?",
    a: "Post a job → Our AI system calls verified candidates → Interested candidates are forwarded to your HR team → You conduct final interviews → Hire!",
  },
  {
    q: "Is the ₹199 price real? Are there hidden charges?",
    a: "Absolutely real. ₹199 gets you a verified job posting with AI calling support and 30-day listing. No hidden fees. We have no setup charges or service fees on top.",
  },
  {
    q: "What is the AI Calling System?",
    a: "Our proprietary AI makes automated calls to verified candidates in our database, checks their availability and interest, and sends only interested candidates to you — saving 80% of your HR team's time.",
  },
  {
    q: "How quickly will I receive candidates?",
    a: "Within 24–48 hours of posting a job, our AI system begins calling candidates. You will receive shortlisted leads within 2–3 business days.",
  },
  {
    q: "Can I hire in multiple cities at once?",
    a: "Yes! Talent Connect India covers 135+ cities. When posting a job, simply select multiple city targets and our recruiter network will activate in all selected locations.",
  },
];

const jobseekerFaqs = [
  {
    q: "Is Talent Connect India free for job seekers?",
    a: "Yes, our platform is completely free for candidates. You can build your resume, browse jobs, and apply without any charges.",
  },
  {
    q: "How do I apply for jobs?",
    a: "Simply create your profile, use our Resume Builder to showcase your skills and projects, and apply directly to verified job listings.",
  },
  {
    q: "Will my data be safe?",
    a: "Absolutely. We maintain strict data privacy standards and only share your profile with verified, actively hiring employers.",
  },
  {
    q: "Do I get updates on my application?",
    a: "Yes, you will receive real-time notifications via WhatsApp and Email regarding your application status and interview schedules.",
  },
  {
    q: "What kind of companies hire through this platform?",
    a: "We work with top companies across various sectors including IT, Healthcare, Retail, Manufacturing, and Logistics, ranging from startups to large enterprises.",
  },
];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<"recruiter" | "jobseeker">(
    "recruiter",
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const currentFaqs = activeTab === "recruiter" ? recruiterFaqs : jobseekerFaqs;

  return (
    <section id="faq" className="py-24 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
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
            Frequently Asked{" "}
            <span className="text-gradient-blue">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-lg"
          >
            Everything you need to know about our platform.
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-200/50 p-1.5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <button
              onClick={() => {
                setActiveTab("recruiter");
                setActiveIndex(0);
              }}
              className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === "recruiter"
                  ? "text-blue-700"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Briefcase size={18} />
              For Employers / Recruiters
              {activeTab === "recruiter" && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-100"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
            <button
              onClick={() => {
                setActiveTab("jobseeker");
                setActiveIndex(0);
              }}
              className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === "jobseeker"
                  ? "text-emerald-700"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <UserCircle size={18} />
              For Job Seekers
              {activeTab === "jobseeker" && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-100"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-4 min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    activeIndex === index
                      ? activeTab === "recruiter"
                        ? "border-blue-200 bg-white shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/10"
                        : "border-emerald-200 bg-white shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-500/10"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          activeIndex === index
                            ? activeTab === "recruiter"
                              ? "bg-blue-600 text-white"
                              : "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"
                        }`}
                      >
                        <HelpCircle size={20} />
                      </div>
                      <span
                        className={`font-bold text-base md:text-lg transition-colors ${
                          activeIndex === index
                            ? "text-slate-900"
                            : "text-slate-700 group-hover:text-slate-900"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`${activeIndex === index ? (activeTab === "recruiter" ? "text-blue-600" : "text-emerald-600") : "text-slate-400"}`}
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
