"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Search, Filter, Mail, 
  Phone, MapPin, MessageSquare, 
  CheckCircle, Clock, Eye,
  FileText, Download, Trash2
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const enquiries = [
  { 
    id: 1, 
    name: "Sunita Deshmukh", 
    email: "sunita@corp.in", 
    mobile: "+91 98234 56789", 
    city: "Mumbai", 
    type: "Employer Inquiry", 
    message: "Interested in bulk hiring for our new IT facility in Pune. Need a quotation for 50+ candidates.", 
    status: "New", 
    date: "10:30 AM" 
  },
  { 
    id: 2, 
    name: "Rahul Mehra", 
    email: "rahul.m@gmail.com", 
    mobile: "+91 88776 55443", 
    city: "Delhi", 
    type: "Job Seeker", 
    message: "I have uploaded my resume. Looking for Full-stack roles in Bangalore. Please check my profile.", 
    status: "In Progress", 
    date: "Yesterday",
    hasResume: true
  },
  { 
    id: 3, 
    name: "TCI Partner Group", 
    email: "partners@tcip.com", 
    mobile: "+91 77665 44332", 
    city: "Hyderabad", 
    type: "Recruiter Partnership", 
    message: "We are a recruitment agency from Hyderabad. Want to partner with Talent Connect India for AI calling services.", 
    status: "Replied", 
    date: "May 5" 
  },
  { 
    id: 4, 
    name: "Amit Kumar", 
    email: "amit.k@outlook.com", 
    mobile: "+91 99008 87766", 
    city: "Pune", 
    type: "General Inquiry", 
    message: "Facing issues with the Resume Builder. The PDF export is not showing my profile picture.", 
    status: "Resolved", 
    date: "May 4" 
  },
];

export default function EnquiriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");

  const filteredEnquiries = enquiries.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         e.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All Types" || e.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <DashboardLayout role="admin" title="Platform Enquiries">
      <div className="py-2">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "New Enquiries", value: "12", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "In Progress", value: "8", color: "text-amber-600", bg: "bg-amber-50" },
            { label: "Resolved Today", value: "24", color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Average Response", value: "2.4h", color: "text-purple-600", bg: "bg-purple-50" },
          ].map((s) => (
            <div key={s.label} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search enquiries, names, messages..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
            />
          </div>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 outline-none cursor-pointer"
          >
            <option>All Types</option>
            <option>Employer Inquiry</option>
            <option>Job Seeker</option>
            <option>Recruiter Partnership</option>
            <option>General Inquiry</option>
          </select>
        </div>

        {/* Enquiries Grid */}
        <div className="grid gap-4">
          {filteredEnquiries.map((e) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={e.id} 
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all group"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{e.name}</h3>
                        <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">{e.type}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      e.status === "New" ? "bg-blue-600 text-white" :
                      e.status === "In Progress" ? "bg-amber-100 text-amber-700" :
                      e.status === "Replied" ? "bg-purple-100 text-purple-700" :
                      "bg-emerald-100 text-emerald-700"
                    }`}>
                      {e.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 italic border-l-4 border-slate-100 pl-4">
                    "{e.message}"
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <Mail size={12} className="text-blue-500" /> {e.email}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <Phone size={12} className="text-emerald-500" /> {e.mobile}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <MapPin size={12} className="text-amber-500" /> {e.city}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <Clock size={12} className="text-purple-500" /> {e.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex lg:flex-col items-center justify-center gap-2 lg:border-l border-slate-50 lg:pl-6 min-w-[120px]">
                  {e.hasResume && (
                    <button className="flex items-center gap-2 text-blue-600 text-xs font-bold hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-all w-full justify-center">
                      <Download size={14} /> Resume
                    </button>
                  )}
                  <button className="flex items-center gap-2 text-slate-600 text-xs font-bold hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all w-full justify-center">
                    <Eye size={14} /> Details
                  </button>
                  <button className="flex items-center gap-2 text-emerald-600 text-xs font-bold hover:bg-emerald-50 px-4 py-2.5 rounded-xl transition-all w-full justify-center">
                    <CheckCircle size={14} /> Resolve
                  </button>
                  <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
