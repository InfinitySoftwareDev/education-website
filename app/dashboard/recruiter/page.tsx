"use client";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Users, TrendingUp, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import DashboardLayout from "@/components/DashboardLayout";

const leads = [
  { name: "Rahul Sharma",  phone: "+91 98765-XXXXX", job: "React Developer",   city: "Bangalore", status: "Interested",   callTime: "10:24 AM" },
  { name: "Priya Patel",   phone: "+91 87654-XXXXX", job: "Sales Executive",   city: "Mumbai",    status: "Not Answered", callTime: "11:05 AM" },
  { name: "Amit Singh",    phone: "+91 76543-XXXXX", job: "Warehouse Manager", city: "Delhi",     status: "Callback",     callTime: "12:10 PM" },
  { name: "Neha Gupta",    phone: "+91 65432-XXXXX", job: "HR Executive",      city: "Pune",      status: "Interested",   callTime: "1:45 PM" },
  { name: "Suresh Kumar",  phone: "+91 54321-XXXXX", job: "Site Engineer",     city: "Jaipur",    status: "Not Interested", callTime: "2:30 PM" },
];

export default function RecruiterDashboard() {
  return (
    <DashboardLayout role="recruiter">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">Amit Recruiter</h1>
          <p className="text-slate-500 text-sm mt-1">Senior Recruiter · Delhi Region</p>
        </div>
        <div className="text-right">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Today's Target</div>
          <div className="font-heading text-2xl font-bold text-purple-600">48 / 60 Calls</div>
        </div>
      </div>

      <div className="py-2">
        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { icon: Phone,       label: "Calls Today",    value: 48,  suffix: "",  color: "text-purple-600", bg: "bg-purple-50" },
            { icon: CheckCircle, label: "Interested",     value: 12,  suffix: "",  color: "text-emerald-600",bg: "bg-emerald-50" },
            { icon: Users,       label: "Converted",      value: 5,   suffix: "",  color: "text-blue-600",   bg: "bg-blue-50" },
            { icon: TrendingUp,  label: "This Month",     value: 142, suffix: "",  color: "text-amber-600",  bg: "bg-amber-50" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div className={`font-heading text-3xl font-extrabold ${s.color}`}>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-slate-500 text-xs font-semibold mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Lead Tracking */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="font-heading font-bold text-slate-900 flex items-center gap-2">
              <Phone size={16} className="text-purple-600" /> Today&apos;s Call Log
            </h2>
            <span className="badge-blue">AI Assisted</span>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full min-w-160">
              <thead className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="text-left px-6 py-3">Candidate</th>
                  <th className="text-left px-6 py-3">Job Applied</th>
                  <th className="text-left px-6 py-3">City</th>
                  <th className="text-left px-6 py-3">Call Time</th>
                  <th className="text-left px-6 py-3">Status</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leads.map((l) => (
                  <tr key={l.name} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800 text-sm">{l.name}</p>
                      <p className="text-slate-400 text-xs">{l.phone}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{l.job}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{l.city}</td>
                    <td className="px-6 py-4 text-xs text-slate-400 flex items-center gap-1.5 mt-3">
                      <Clock size={11} /> {l.callTime}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        l.status === "Interested" ? "bg-emerald-50 text-emerald-700" :
                        l.status === "Callback"   ? "bg-blue-50 text-blue-700" :
                        l.status === "Not Interested" ? "bg-red-50 text-red-600" :
                        "bg-amber-50 text-amber-700"
                      }`}>{l.status}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors border border-purple-200 px-3 py-1.5 rounded-lg hover:bg-purple-50">
                        Update
                      </button>
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
