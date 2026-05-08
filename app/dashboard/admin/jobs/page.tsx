"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Search, Filter, Briefcase, 
  MapPin, IndianRupee, Clock, 
  CheckCircle, XCircle, Eye,
  AlertCircle, Building2, MoreVertical
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const allJobs = [
  { 
    id: 1, 
    title: "Senior React Developer", 
    company: "TechCorp Solutions", 
    location: "Bangalore (Remote)", 
    salary: "₹80k - ₹1.2L", 
    posted: "2 hours ago", 
    status: "Pending Approval",
    apps: 0
  },
  { 
    id: 2, 
    title: "Sales Executive", 
    company: "Global Sales Inc", 
    location: "Mumbai", 
    salary: "₹25k - ₹35k", 
    posted: "Yesterday", 
    status: "Active",
    apps: 124
  },
  { 
    id: 3, 
    title: "HR Manager", 
    company: "Startup Hub", 
    location: "Delhi", 
    salary: "₹50k - ₹70k", 
    posted: "2 days ago", 
    status: "Active",
    apps: 42
  },
  { 
    id: 4, 
    title: "PHP Developer", 
    company: "Legacy Systems", 
    location: "Pune", 
    salary: "₹30k - ₹45k", 
    posted: "3 days ago", 
    status: "Reported",
    apps: 12
  },
];

export default function AdminJobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredJobs = allJobs.filter(j => {
    const matchesSearch = j.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         j.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "All Status" || j.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout role="admin" title="Job Post Moderation">
      <div className="py-2">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Jobs", value: "437", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Pending Approval", value: "18", color: "text-amber-600", bg: "bg-amber-50" },
            { label: "Reported", value: "3", color: "text-red-600", bg: "bg-red-50" },
            { label: "Total Views", value: "12.4k", color: "text-purple-600", bg: "bg-purple-50" },
          ].map((s) => (
            <div key={s.label} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by job title or company..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
            />
          </div>
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 outline-none cursor-pointer"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Pending Approval</option>
            <option>Reported</option>
          </select>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="text-left px-6 py-4">Job Info</th>
                  <th className="text-left px-6 py-4">Company</th>
                  <th className="text-left px-6 py-4">Salary & Apps</th>
                  <th className="text-left px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Moderation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredJobs.map((j) => (
                  <tr key={j.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{j.title}</p>
                          <p className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-bold mt-0.5">
                            <MapPin size={10} /> {j.location} • {j.posted}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Building2 size={14} className="text-slate-400" />
                        <span className="text-xs font-semibold">{j.company}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-slate-700">{j.salary}</p>
                      <p className="text-[10px] text-blue-600 font-bold uppercase mt-1">{j.apps} Applications</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        j.status === "Active" ? "bg-emerald-50 text-emerald-700" :
                        j.status === "Pending Approval" ? "bg-amber-50 text-amber-700" :
                        "bg-red-50 text-red-700"
                      }`}>
                        {j.status === "Reported" && <AlertCircle size={10} className="inline mr-1 -mt-0.5" />}
                        {j.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {j.status === "Pending Approval" ? (
                          <>
                            <button title="Approve" className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all border border-emerald-100/50">
                              <CheckCircle size={16} />
                            </button>
                            <button title="Reject" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all border border-red-100/50">
                              <XCircle size={16} />
                            </button>
                          </>
                        ) : (
                          <>
                            <button title="View Details" className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                              <Eye size={16} />
                            </button>
                            <button title="More Options" className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-all">
                              <MoreVertical size={16} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
