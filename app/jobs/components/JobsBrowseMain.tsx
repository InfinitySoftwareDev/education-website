"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  BadgeCheck,
  ArrowRight,
  Upload,
  FileText,
  Star,
  Bookmark,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  X,
} from "lucide-react";
import {
  readSavedJobs,
  toggleSaveJob,
} from "@/lib/savedJobsStorage";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cities = [
  "All Cities",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];
const categories = [
  "All Categories",
  "IT & Software",
  "Healthcare",
  "Manufacturing",
  "Sales & Marketing",
  "BPO / Call Centre",
  "Retail",
  "Logistics",
  "Banking & Finance",
  "Education",
  "Hospitality",
];
const jobTypes = [
  "All Types",
  "Full Time",
  "Part Time",
  "Remote",
  "Freelance",
  "Internship",
];

const jobs = [
  {
    id: 1,
    title: "React Developer",
    company: "TechCorp Pvt Ltd",
    city: "Bangalore",
    salary: "₹8–14 LPA",
    type: "Full Time",
    category: "IT & Software",
    posted: "1 day ago",
    verified: true,
    hot: true,
    description: "We are looking for a skilled React Developer to join our front-end team. You will be responsible for building high-quality UI components and ensuring a seamless user experience.",
    requirements: [
      "2+ years of experience with React.js",
      "Proficiency in TypeScript and Tailwind CSS",
      "Knowledge of Next.js App Router",
      "Experience with Framer Motion is a plus",
    ],
    responsibilities: [
      "Develop new user-facing features using React",
      "Build reusable components and front-end libraries",
      "Optimize components for maximum performance",
      "Collaborate with back-end developers and designers",
    ],
  },
  {
    id: 2,
    title: "Sales Executive",
    company: "RetailPro",
    city: "Mumbai",
    salary: "₹3–5 LPA",
    type: "Full Time",
    category: "Sales & Marketing",
    posted: "2 days ago",
    verified: true,
    hot: false,
    description: "RetailPro is hiring ambitious Sales Executives to drive our market growth in Mumbai. You will be the face of our brand, helping customers find the best solutions.",
    requirements: [
      "Bachelor's degree in any field",
      "Excellent communication and negotiation skills",
      "Fluent in English and Hindi",
      "1-2 years of sales experience preferred",
    ],
    responsibilities: [
      "Identify and approach potential customers",
      "Conduct product demonstrations",
      "Meet monthly sales targets",
      "Maintain customer relationships",
    ],
  },
  {
    id: 3,
    title: "Warehouse Supervisor",
    company: "LogiCo",
    city: "Delhi",
    salary: "₹2.5–4 LPA",
    type: "Full Time",
    category: "Logistics",
    posted: "3 days ago",
    verified: true,
    hot: false,
    description: "Supervise daily warehouse operations and ensure efficiency in shipping and receiving. We need a detail-oriented leader who can manage a diverse team.",
    requirements: [
      "Prior experience in warehouse management",
      "Strong leadership and organizational skills",
      "Knowledge of inventory software",
      "Ability to work in shifts",
    ],
    responsibilities: [
      "Coordinate freight handling and logistics",
      "Manage warehouse staff and schedules",
      "Ensure safety regulations are met",
      "Maintain accurate inventory records",
    ],
  },
  {
    id: 4,
    title: "Staff Nurse",
    company: "PharmaCare Hospital",
    city: "Hyderabad",
    salary: "₹3–5 LPA",
    type: "Full Time",
    category: "Healthcare",
    posted: "1 day ago",
    verified: true,
    hot: true,
    description: "Provide compassionate care to our patients at PharmaCare. We are looking for dedicated nursing professionals to join our critical care unit.",
    requirements: [
      "B.Sc Nursing or GNM qualification",
      "Valid state nursing council registration",
      "0-3 years of experience",
      "Willingness to work in rotating shifts",
    ],
    responsibilities: [
      "Administer medications and treatments",
      "Monitor patient vital signs",
      "Assist doctors during procedures",
      "Maintain patient records and reports",
    ],
  },
  {
    id: 5,
    title: "BPO Agent (Voice)",
    company: "CallFirst",
    city: "Pune",
    salary: "₹2–3.5 LPA",
    type: "Full Time",
    category: "BPO / Call Centre",
    posted: "Today",
    verified: true,
    hot: false,
    description: "Join our international voice process at CallFirst. We provide excellent growth opportunities and performance-based incentives.",
    requirements: [
      "Minimum 12th pass",
      "Good communication skills in English",
      "Basic computer knowledge",
      "Flexible with US/UK shifts",
    ],
    responsibilities: [
      "Handle inbound customer queries",
      "Provide accurate information to customers",
      "Document customer interactions",
      "Follow call scripts and quality standards",
    ],
  },
  {
    id: 6,
    title: "Site Engineer",
    company: "BuildRight",
    city: "Jaipur",
    salary: "₹4–7 LPA",
    type: "Full Time",
    category: "Manufacturing",
    posted: "2 days ago",
    verified: false,
    hot: false,
    description: "Manage construction site operations and ensure projects are completed on time and within budget.",
    requirements: [
      "B.Tech in Civil Engineering",
      "Knowledge of AutoCAD and project management",
      "2+ years of on-site experience",
      "Willingness to travel to project sites",
    ],
    responsibilities: [
      "Supervise construction activities",
      "Ensure quality control and safety",
      "Liaise with architects and contractors",
      "Prepare progress reports and budgets",
    ],
  },
  {
    id: 7,
    title: "Mathematics Teacher",
    company: "EduFirst Academy",
    city: "Chennai",
    salary: "₹3–5 LPA",
    type: "Full Time",
    category: "Education",
    posted: "Today",
    verified: true,
    hot: false,
    description: "Inspire the next generation of students at EduFirst Academy. We are looking for an enthusiastic Mathematics teacher for higher secondary classes.",
    requirements: [
      "M.Sc in Mathematics with B.Ed",
      "Passion for teaching and student development",
      "Excellent classroom management skills",
      "Familiarity with digital teaching tools",
    ],
    responsibilities: [
      "Deliver engaging math lessons",
      "Prepare students for board exams",
      "Conduct assessments and provide feedback",
      "Organize math-related workshops",
    ],
  },
  {
    id: 8,
    title: "Hotel Receptionist",
    company: "HospitalPro Hotels",
    city: "Kochi",
    salary: "₹2–3 LPA",
    type: "Full Time",
    category: "Hospitality",
    posted: "3 days ago",
    verified: true,
    hot: false,
    description: "Be the first point of contact for our guests at HospitalPro Kochi. We seek professional individuals with a customer-first mindset.",
    requirements: [
      "Graduate in Hotel Management or related field",
      "Pleasing personality and communication skills",
      "Knowledge of PMS software",
      "Multi-lingual (English, Hindi, Malayalam)",
    ],
    responsibilities: [
      "Manage guest check-ins and check-outs",
      "Handle room reservations and inquiries",
      "Provide information about hotel services",
      "Address guest grievances promptly",
    ],
  },
];

const quickStats = [
  {
    icon: Briefcase,
    label: "Live Jobs",
    value: "12,400+",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    label: "Verified Companies",
    value: "5,000+",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: MapPin,
    label: "Cities",
    value: "135+",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: TrendingUp,
    label: "Placed This Month",
    value: "840+",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const categoryChips = [
  "IT & Software",
  "Healthcare",
  "Logistics",
  "Sales & Marketing",
  "BPO / Call Centre",
  "Education",
];

export type JobsBrowseMainProps = {
  /** Sidebar “Build Now” target; use `/dashboard/employee/resume` inside the employee dashboard. */
  resumeBuilderHref?: string;
};

export function JobsBrowseMain({
  resumeBuilderHref = "/resume-builder",
}: JobsBrowseMainProps) {
  const [cityFilter, setCityFilter] = useState("All Cities");
  const [catFilter, setCatFilter] = useState("All Categories");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [search, setSearch] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set());
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  const refreshSavedIds = useCallback(() => {
    setSavedIds(new Set(readSavedJobs().map((j) => j.id)));
  }, []);

  useEffect(() => {
    refreshSavedIds();
  }, [refreshSavedIds]);

  const filtered = jobs.filter((j) => {
    const matchCity = cityFilter === "All Cities" || j.city === cityFilter;
    const matchCat =
      catFilter === "All Categories" || j.category === catFilter;
    const matchType = typeFilter === "All Types" || j.type === typeFilter;
    const matchSearch =
      !search ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase());
    return matchCity && matchCat && matchType && matchSearch;
  });

  const searchBar = (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl shadow-blue-900/30">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Job title or company…"
            className="w-full bg-white rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none"
          />
        </div>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="bg-white rounded-xl px-4 py-3.5 text-sm text-slate-700 outline-none md:w-40"
        >
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="bg-white rounded-xl px-4 py-3.5 text-sm text-slate-700 outline-none md:w-48"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <button
          type="button"
          className="btn-amber px-7 py-3.5 rounded-xl text-sm font-bold shrink-0"
        >
          <Search size={15} /> Search Jobs
        </button>
      </div>
    </div>
  );

  const categoryChipsRow = (
    <div className="flex flex-wrap justify-center gap-2 mt-5">
      <span className="text-slate-400 text-xs self-center">Popular:</span>
      {categoryChips.map((chip) => (
        <button
          key={chip}
          type="button"
          onClick={() => setCatFilter(chip)}
          className={`text-xs px-3 py-1.5 rounded-full border font-semibold transition-all ${
            catFilter === chip
              ? "bg-amber-400 border-amber-400 text-slate-900"
              : "border-white/20 text-slate-300 hover:border-amber-400/50 hover:text-amber-300"
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <section className="relative hero-bg pt-20 pb-32">
            <div className="absolute top-0 -right-20 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-100 h-100 bg-blue-400/20 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/25 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
                >
                  <Zap size={11} className="fill-amber-300" /> 840+ Placements
                  this month
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-heading text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
                >
                  Find Your{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-amber">Dream Job</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 8"
                      fill="none"
                    >
                      <path
                        d="M2 6 Q100 2 198 6"
                        stroke="#F59E0B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-slate-300 text-lg mb-10"
                >
                  Verified jobs across{" "}
                  <span className="text-amber-400 font-bold">135+ cities</span>.
                  AI-matched. Zero fake listings.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  {searchBar}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                  >
                    {categoryChipsRow}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 80" fill="none" className="w-full h-16">
                <path
                  d="M0,80 C480,0 960,80 1440,0 L1440,80 Z"
                  fill="white"
                />
              </svg>
            </div>
          </section>

          <section className="bg-white pt-0 pb-10 -mt-2">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {quickStats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={fadeUp}
                    className={`flex items-center gap-3 p-4 rounded-2xl border border-slate-100 ${s.bg} hover:shadow-md transition-all`}
                  >
                    <s.icon className={`${s.color} w-6 h-6 shrink-0`} />
                    <div>
                      <p
                        className={`font-heading font-extrabold text-lg ${s.color}`}
                      >
                        {s.value}
                      </p>
                      <p className="text-slate-500 text-xs font-semibold">
                        {s.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

      <section className="py-10 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 shrink-0">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-heading font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">
                    Filters
                  </h3>

                  <div className="mb-5">
                    <p className="form-label mb-2">Job Type</p>
                    <div className="space-y-2">
                      {jobTypes.map((t) => (
                        <label
                          key={t}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() => setTypeFilter(t)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ")
                                setTypeFilter(t);
                            }}
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${typeFilter === t ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-blue-400"}`}
                          >
                            {typeFilter === t && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <span
                            className={`text-sm transition-colors ${typeFilter === t ? "text-blue-700 font-semibold" : "text-slate-500 group-hover:text-slate-800"}`}
                          >
                            {t}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="form-label mb-2">City</p>
                    <select
                      value={cityFilter}
                      onChange={(e) => setCityFilter(e.target.value)}
                      className="form-input text-sm"
                    >
                      {cities.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative bg-linear-to-br from-blue-700 to-blue-900 rounded-2xl p-5 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                  <FileText className="w-8 h-8 text-blue-300 mb-3" />
                  <h4 className="font-bold text-white text-sm mb-1">
                    Build a Free Resume
                  </h4>
                  <p className="text-blue-200 text-xs mb-4 leading-relaxed">
                    Get noticed by 5000+ employers with a professional resume.
                  </p>
                  <Link
                    href={resumeBuilderHref}
                    className="flex items-center gap-1 bg-white text-blue-700 text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Build Now <ChevronRight size={12} />
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => setShowRegister(true)}
                  className="w-full flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-bold py-3 rounded-2xl hover:bg-amber-100 transition-colors"
                >
                  <Upload size={15} /> Upload Resume
                </button>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-heading font-bold text-slate-900">
                    {filtered.length} Jobs Found
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {catFilter !== "All Categories"
                      ? catFilter
                      : "All categories"}{" "}
                    ·{" "}
                    {cityFilter !== "All Cities" ? cityFilter : "All cities"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRegister(true)}
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  Create Profile <ArrowRight size={14} />
                </button>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filtered.map((job) => (
                  <motion.div
                    key={job.id}
                    variants={fadeUp}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 12px 30px rgba(37,99,235,0.10)",
                    }}
                    className="group relative bg-white rounded-2xl border border-slate-100 hover:border-blue-200 p-5 cursor-pointer transition-all duration-300"
                    onClick={() => setSelectedJob(job)}
                  >
                    <button
                      type="button"
                      title={
                        savedIds.has(job.id)
                          ? "Saved — click to remove from Saved Jobs"
                          : "Save job — adds to Saved Jobs"
                      }
                      aria-label={
                        savedIds.has(job.id)
                          ? "Remove from saved jobs"
                          : "Save job to saved list"
                      }
                      className={`absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm transition-colors ${
                        savedIds.has(job.id)
                          ? "border-blue-300 bg-blue-50 text-blue-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                          : "border-slate-200 text-slate-400 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveJob({
                          id: job.id,
                          title: job.title,
                          company: job.company,
                          city: job.city,
                          salary: job.salary,
                          type: job.type,
                        });
                        refreshSavedIds();
                      }}
                    >
                      <Bookmark
                        size={18}
                        className={
                          savedIds.has(job.id)
                            ? "fill-blue-600 text-blue-600"
                            : ""
                        }
                      />
                    </button>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-14">
                      <div className="flex gap-4 items-start">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-heading font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                              {job.title}
                            </h3>
                            {job.verified && (
                              <span className="badge-verified">
                                <BadgeCheck size={10} /> Verified
                              </span>
                            )}
                          </div>
                          <p className="text-slate-500 text-sm">{job.company}</p>
                          <div className="flex flex-wrap gap-3 mt-2.5">
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                              <MapPin size={11} className="text-blue-400" />{" "}
                              {job.city}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                              <Clock size={11} className="text-slate-300" />{" "}
                              {job.posted}
                            </span>
                            <span className="badge-blue">{job.type}</span>
                            <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                              {job.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3 shrink-0">
                        <div className="text-right">
                          <p className="font-heading font-extrabold text-blue-600 text-lg leading-tight">
                            {job.salary}
                          </p>
                          <p className="text-slate-400 text-xs">per annum</p>
                        </div>
                        <button
                          type="button"
                          className="group/btn relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 flex items-center gap-1.5"
                        >
                          Apply Now{" "}
                          <ArrowRight
                            size={12}
                            className="group-hover/btn:translate-x-0.5 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {filtered.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-24 bg-white rounded-2xl border border-slate-100"
                  >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Briefcase size={28} className="text-slate-300" />
                    </div>
                    <p className="font-semibold text-slate-600">
                      No jobs match your filters
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Try adjusting your search criteria
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setCityFilter("All Cities");
                        setCatFilter("All Categories");
                        setTypeFilter("All Types");
                        setSearch("");
                      }}
                      className="mt-4 text-sm text-blue-600 font-semibold hover:underline"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </motion.div>

              {filtered.length > 0 && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    className="btn-outline-blue text-sm py-3 px-8"
                  >
                    Load More Jobs <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                <div className="p-8 pb-0">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0 border border-blue-100">
                      <Briefcase className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h2 className="font-heading text-3xl font-extrabold text-slate-900 leading-tight">
                          {selectedJob.title}
                        </h2>
                        {selectedJob.verified && (
                          <span className="badge-verified py-1 px-3">
                            <BadgeCheck size={14} /> Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xl text-slate-500 font-semibold mb-4">
                        {selectedJob.company}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                          <MapPin size={16} className="text-blue-500" />
                          <span className="text-sm font-bold">
                            {selectedJob.city}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                          <Clock size={16} className="text-amber-500" />
                          <span className="text-sm font-bold">
                            {selectedJob.posted}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                          <TrendingUp size={16} className="text-emerald-500" />
                          <span className="text-sm font-bold">
                            {selectedJob.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-linear-to-r from-blue-600 to-blue-800 p-6 rounded-2xl shadow-lg">
                    <div className="text-white">
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
                        Salary Range
                      </p>
                      <p className="text-2xl font-black">{selectedJob.salary}</p>
                      <p className="text-blue-100 text-[10px]">Per Annum</p>
                    </div>
                    <div className="text-white border-l border-white/10 pl-6">
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
                        Experience
                      </p>
                      <p className="text-2xl font-black">1-3 Years</p>
                      <p className="text-blue-100 text-[10px]">Preferred</p>
                    </div>
                    <div className="text-white border-l border-white/10 pl-6">
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
                        Openings
                      </p>
                      <p className="text-2xl font-black">04</p>
                      <p className="text-blue-100 text-[10px]">Hiring Fast</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 space-y-8">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                      Job Description
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedJob.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
                      Key Responsibilities
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedJob.responsibilities.map((res, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          </div>
                          <span className="text-sm">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                      Requirements
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedJob(null);
                    setShowRegister(true);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  Apply for this position <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveJob({
                      id: selectedJob.id,
                      title: selectedJob.title,
                      company: selectedJob.company,
                      city: selectedJob.city,
                      salary: selectedJob.salary,
                      type: selectedJob.type,
                    });
                    refreshSavedIds();
                  }}
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${
                    savedIds.has(selectedJob.id)
                      ? "bg-blue-50 border-blue-200 text-blue-600"
                      : "bg-white border-slate-200 text-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <Bookmark
                    size={24}
                    className={savedIds.has(selectedJob.id) ? "fill-blue-600" : ""}
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showRegister && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowRegister(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowRegister(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Star size={18} className="text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-slate-900">
                    Create Free Profile
                  </h2>
                  <p className="text-slate-400 text-xs">
                    Get matched with verified jobs instantly
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Last"
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Mobile *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="form-label">City</label>
                  <select className="form-input">
                    {cities.slice(1).map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Upload Resume</label>
                  <div className="border-2 border-dashed border-blue-200 rounded-xl p-5 text-center text-sm text-slate-400 hover:border-blue-400 bg-blue-50/30 transition-colors cursor-pointer">
                    <Upload size={22} className="mx-auto mb-2 text-blue-400" />
                    <p className="font-semibold text-slate-600 text-sm">
                      Click to upload PDF / DOC
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Max 5MB</p>
                  </div>
                </div>
                <button type="button" className="btn-primary w-full py-3.5">
                  Create Free Profile <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
