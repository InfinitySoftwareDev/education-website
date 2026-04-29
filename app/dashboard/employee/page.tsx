"use client";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Clock, BookOpen, User, Star } from "lucide-react";
import Link from "next/link";

const appliedJobs = [
  { title: "React Developer", company: "TechCorp", city: "Bangalore", date: "2 days ago", status: "Shortlisted" },
  { title: "UI/UX Designer", company: "DesignHub", city: "Mumbai", date: "5 days ago", status: "Under Review" },
  { title: "Software Engineer", company: "InnoSoft", city: "Pune", date: "1 week ago", status: "Interview" },
  { title: "Frontend Developer", company: "WebCraft", city: "Hyderabad", date: "2 weeks ago", status: "Rejected" },
];

const recommended = [
  { title: "Full Stack Developer", company: "GlobalTech", city: "Bangalore", salary: "₹10–16 LPA", match: 94 },
  { title: "React Native Dev", company: "MobileFirst", city: "Pune", salary: "₹8–13 LPA", match: 89 },
  { title: "Node.js Developer", company: "ServerCo", city: "Delhi", salary: "₹7–12 LPA", match: 85 },
];

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-emerald-200 text-sm mb-1">Job Seeker Dashboard</p>
            <h1 className="font-heading text-3xl font-bold">Ankit Verma</h1>
            <p className="text-emerald-200 text-sm mt-1">ankit@email.com · Bangalore</p>
          </div>
          <Link href="/jobs" className="bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors hover:bg-emerald-50">
            Browse Jobs →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Profile completion */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-2xl">A</div>
              <div>
                <h2 className="font-heading font-bold text-slate-900">Profile Completion</h2>
                <p className="text-slate-500 text-sm">Complete your profile to get better job matches.</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-heading text-3xl font-extrabold text-emerald-600">72%</span>
              <p className="text-slate-400 text-xs">Completed</p>
            </div>
          </div>
          <div className="mt-4 h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all" style={{ width: "72%" }} />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              { label: "Personal Info", done: true },
              { label: "Resume Uploaded", done: true },
              { label: "Skills Added", done: true },
              { label: "Work Experience", done: false },
              { label: "Education", done: false },
            ].map((item) => (
              <span key={item.label} className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${item.done ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400"}`}>
                {item.done ? <CheckCircle size={11} /> : <Clock size={11} />} {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Applied Jobs */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="font-heading font-bold text-slate-900 flex items-center gap-2">
                <Briefcase size={16} className="text-emerald-600" /> Applied Jobs
              </h2>
              <span className="text-emerald-600 text-xs font-bold">{appliedJobs.length} applications</span>
            </div>
            <div className="divide-y divide-slate-50">
              {appliedJobs.map((j) => (
                <div key={j.title} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{j.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{j.company} · {j.city} · {j.date}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${j.status === "Shortlisted" ? "bg-blue-50 text-blue-700" :
                      j.status === "Interview" ? "bg-emerald-50 text-emerald-700" :
                        j.status === "Rejected" ? "bg-red-50 text-red-600" :
                          "bg-amber-50 text-amber-700"
                    }`}>{j.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recommended */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="font-heading font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                <Star size={14} className="text-amber-400 fill-amber-400" /> AI Recommended Jobs
              </h3>
              <div className="space-y-4">
                {recommended.map((r) => (
                  <div key={r.title} className="border border-slate-100 rounded-xl p-4 hover:border-emerald-200 hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-semibold text-slate-800 text-sm">{r.title}</p>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{r.match}% match</span>
                    </div>
                    <p className="text-slate-400 text-xs">{r.company} · {r.city}</p>
                    <p className="text-emerald-600 font-bold text-xs mt-1">{r.salary}</p>
                  </div>
                ))}
              </div>
              <Link href="/jobs" className="btn-outline-blue w-full text-center text-xs py-2.5 mt-4">View All Jobs</Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="font-heading font-bold text-slate-900 text-sm mb-4">My Account</h3>
              <div className="space-y-2">
                {[
                  { icon: User, label: "Edit Profile" },
                  { icon: BookOpen, label: "Update Resume" },
                  { icon: Briefcase, label: "Saved Jobs" },
                  { icon: CheckCircle, label: "Verified Status: ✅" },
                ].map(({ icon: Icon, label }) => (
                  <button key={label} className="w-full flex items-center gap-3 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2.5 rounded-lg transition-colors text-left">
                    <Icon size={14} className="text-emerald-500" /> {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
