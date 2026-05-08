"use client";
import { motion } from "framer-motion";
import { Plus, Users, Eye, CheckCircle, Clock, Briefcase, BarChart2 } from "lucide-react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

const jobs = [
  { title: "React Developer", applications: 48, shortlisted: 12, status: "Active",   city: "Bangalore", posted: "3 days ago" },
  { title: "Sales Manager",   applications: 92, shortlisted: 18, status: "Active",   city: "Mumbai",    posted: "5 days ago" },
  { title: "HR Executive",    applications: 31, shortlisted: 7,  status: "Paused",   city: "Delhi",     posted: "8 days ago" },
  { title: "Accountant",      applications: 55, shortlisted: 14, status: "Closed",   city: "Pune",      posted: "12 days ago" },
];

const candidates = [
  { name: "Ankit Verma",   role: "React Developer",  score: 92, city: "Bangalore", status: "Shortlisted" },
  { name: "Sunita Rao",    role: "Sales Manager",    score: 85, city: "Mumbai",    status: "Interview" },
  { name: "Rajan Mehta",   role: "Accountant",       score: 78, city: "Pune",      status: "Shortlisted" },
  { name: "Kavya Reddy",   role: "HR Executive",     score: 71, city: "Delhi",     status: "Pending" },
];

export default function EmployerDashboard() {
  return (
    <DashboardLayout role="employer">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">TechCorp Pvt Ltd</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your active listings and candidates.</p>
        </div>
        <Link href="/employer" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition-colors">
          <Plus size={16} /> Post New Job
        </Link>
      </div>

      <div className="py-2">
        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { icon: Briefcase, label: "Active Jobs",      value: "4",    color: "text-blue-600",   bg: "bg-blue-50" },
            { icon: Users,     label: "Total Applicants", value: "226",  color: "text-emerald-600",bg: "bg-emerald-50" },
            { icon: CheckCircle,label: "Shortlisted",     value: "51",   color: "text-purple-600", bg: "bg-purple-50" },
            { icon: BarChart2, label: "Hires This Month", value: "8",    color: "text-amber-600",  bg: "bg-amber-50" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div className={`font-heading text-3xl font-extrabold ${s.color}`}>{s.value}</div>
              <p className="text-slate-500 text-xs font-semibold mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Posted Jobs */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="font-heading font-bold text-slate-900">Posted Jobs</h2>
              <Link href="/employer" className="text-blue-600 text-xs font-bold hover:underline">Post New +</Link>
            </div>
            <div className="divide-y divide-slate-50">
              {jobs.map((j) => (
                <div key={j.title} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{j.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{j.city} · {j.posted}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="font-bold text-blue-600 text-sm">{j.applications}</p>
                      <p className="text-slate-400 text-[10px]">Applied</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-emerald-600 text-sm">{j.shortlisted}</p>
                      <p className="text-slate-400 text-[10px]">Shortlisted</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${j.status === "Active" ? "bg-emerald-50 text-emerald-700" : j.status === "Paused" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"}`}>
                      {j.status}
                    </span>
                    <button className="text-blue-500 hover:text-blue-700"><Eye size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Candidates */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="font-heading font-bold text-slate-900">Top Candidates</h2>
              <span className="badge-blue">AI Matched</span>
            </div>
            <div className="divide-y divide-slate-50">
              {candidates.map((c) => (
                <div key={c.name} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                      {c.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{c.name}</p>
                      <p className="text-slate-400 text-xs">{c.role} · {c.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-bold text-blue-600 text-sm">{c.score}%</p>
                      <p className="text-slate-400 text-[10px]">Match</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${c.status === "Shortlisted" ? "bg-blue-50 text-blue-700" : c.status === "Interview" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                      {c.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-blue-50 p-3 rounded-xl">
                <Clock size={13} className="text-blue-500 shrink-0" />
                AI Calling is active. 48 candidates called today, 12 interested.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
