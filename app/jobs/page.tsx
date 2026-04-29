"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MapPin, Briefcase, Clock, BadgeCheck, Filter, ArrowRight, Upload, FileText } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

const cities = ["All Cities", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"];
const categories = ["All Categories", "IT & Software", "Healthcare", "Manufacturing", "Sales & Marketing", "BPO / Call Centre", "Retail", "Logistics", "Banking & Finance", "Education", "Hospitality"];
const jobTypes = ["All Types", "Full Time", "Part Time", "Remote", "Freelance", "Internship"];

const jobs = [
  { id: 1, title: "React Developer", company: "TechCorp Pvt Ltd", city: "Bangalore", salary: "₹8–14 LPA", type: "Full Time", category: "IT & Software", posted: "1 day ago", verified: true },
  { id: 2, title: "Sales Executive", company: "RetailPro", city: "Mumbai", salary: "₹3–5 LPA", type: "Full Time", category: "Sales & Marketing", posted: "2 days ago", verified: true },
  { id: 3, title: "Warehouse Supervisor", company: "LogiCo", city: "Delhi", salary: "₹2.5–4 LPA", type: "Full Time", category: "Logistics", posted: "3 days ago", verified: true },
  { id: 4, title: "Staff Nurse", company: "PharmaCare Hospital", city: "Hyderabad", salary: "₹3–5 LPA", type: "Full Time", category: "Healthcare", posted: "1 day ago", verified: true },
  { id: 5, title: "BPO Agent (Voice)", company: "CallFirst", city: "Pune", salary: "₹2–3.5 LPA", type: "Full Time", category: "BPO / Call Centre", posted: "Today", verified: true },
  { id: 6, title: "Site Engineer", company: "BuildRight", city: "Jaipur", salary: "₹4–7 LPA", type: "Full Time", category: "Manufacturing", posted: "2 days ago", verified: false },
  { id: 7, title: "Mathematics Teacher", company: "EduFirst Academy", city: "Chennai", salary: "₹3–5 LPA", type: "Full Time", category: "Education", posted: "Today", verified: true },
  { id: 8, title: "Hotel Receptionist", company: "HospitalPro Hotels", city: "Kochi", salary: "₹2–3 LPA", type: "Full Time", category: "Hospitality", posted: "3 days ago", verified: true },
];

export default function JobsPage() {
  const [cityFilter, setCityFilter] = useState("All Cities");
  const [catFilter, setCatFilter] = useState("All Categories");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [search, setSearch] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const filtered = jobs.filter((j) => {
    const matchCity = cityFilter === "All Cities" || j.city === cityFilter;
    const matchCat = catFilter === "All Categories" || j.category === catFilter;
    const matchType = typeFilter === "All Types" || j.type === typeFilter;
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase());
    return matchCity && matchCat && matchType && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <span className="section-label">Job Portal</span>
            <h1 className="font-heading text-5xl font-extrabold text-white mt-4 mb-3">
              Find Your <span className="text-gradient-amber">Dream Job</span>
            </h1>
            <p className="text-slate-300 text-lg">Verified jobs across 135+ cities. 5000+ candidates placed.</p>
          </motion.div>
          {/* Search Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-4 shadow-2xl shadow-blue-900/30">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search job title or company…" className="form-input pl-11" />
              </div>
              <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="form-input md:w-44">
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)} className="form-input md:w-52">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
              <button className="btn-primary px-6 shrink-0">
                <Search size={16} /> Search
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar filters */}
            <div className="md:w-64 shrink-0">
              <div className="card sticky top-24">
                <div className="flex items-center gap-2 mb-5 font-heading font-bold text-slate-900">
                  <Filter size={16} className="text-blue-600" /> Filters
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="form-label">Job Type</label>
                    {jobTypes.map((t) => (
                      <label key={t} className="flex items-center gap-2 py-1.5 cursor-pointer group">
                        <input type="radio" name="type" checked={typeFilter === t} onChange={() => setTypeFilter(t)} className="accent-blue-600" />
                        <span className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button onClick={() => setShowRegister(true)} className="btn-amber w-full text-sm mt-6">
                  <Upload size={14} /> Upload Resume
                </button>
              </div>
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-slate-600 text-sm font-semibold">{filtered.length} jobs found</p>
                <div className="flex gap-2">
                  <Link href="/resume-builder" className="btn-outline text-sm py-2.5 px-4 flex items-center gap-2">
                    <FileText size={14} /> Build Resume
                  </Link>
                  <button onClick={() => setShowRegister(true)} className="btn-primary text-sm py-2.5">
                    Create Profile <ArrowRight size={14} />
                  </button>
                </div>
              </div>
              <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-4">
                {filtered.map((job) => (
                  <motion.div key={job.id} variants={fadeUp} className="card hover:border-blue-200 cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                          <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-heading font-bold text-slate-900">{job.title}</h3>
                            {job.verified && <span className="badge-verified"><BadgeCheck size={11} /> Verified</span>}
                          </div>
                          <p className="text-slate-500 text-sm mt-0.5">{job.company}</p>
                          <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><MapPin size={11} /> {job.city}</span>
                            <span className="flex items-center gap-1"><Clock size={11} /> {job.posted}</span>
                            <span className="badge-blue">{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-blue-600 text-sm">{job.salary}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{job.category}</p>
                        <button className="btn-primary text-xs py-2 px-4 mt-3">Apply Now</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {filtered.length === 0 && (
                  <div className="text-center py-20 text-slate-400">
                    <Briefcase size={40} className="mx-auto mb-3 text-slate-300" />
                    <p className="font-semibold">No jobs found for selected filters.</p>
                    <p className="text-sm mt-1">Try changing your search criteria.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowRegister(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Create Job Seeker Profile</h2>
            <p className="text-slate-500 text-sm mb-6">Register free and get matched with verified jobs.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="form-label">First Name</label><input type="text" className="form-input" placeholder="First" /></div>
                <div><label className="form-label">Last Name</label><input type="text" className="form-input" placeholder="Last" /></div>
              </div>
              <div><label className="form-label">Mobile *</label><input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" /></div>
              <div><label className="form-label">Email *</label><input type="email" className="form-input" placeholder="you@email.com" /></div>
              <div><label className="form-label">City</label><select className="form-input">{cities.slice(1).map((c) => <option key={c}>{c}</option>)}</select></div>
              <div><label className="form-label">Upload Resume</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center text-sm text-slate-400 hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload size={20} className="mx-auto mb-1 text-blue-400" /> PDF / DOC — Max 5MB
                </div>
              </div>
              <button className="btn-primary w-full">Create Free Profile</button>
              <button className="w-full text-sm text-slate-500 hover:text-slate-700 mt-2" onClick={() => setShowRegister(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
