"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Users, IndianRupee, Share2, TrendingUp, Copy, ExternalLink, ArrowUpRight, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

const referrals = [
  { id: 1, name: "Suresh Kumar", type: "Employer", date: "Today", status: "Active", earning: "₹150", phone: "+91 99887-XXXXX" },
  { id: 2, name: "Meena Iyer", type: "Job Seeker", date: "Yesterday", status: "Active", earning: "₹50", phone: "+91 88776-XXXXX" },
  { id: 3, name: "Vikram Malhotra", type: "Employer", date: "3 days ago", status: "Pending", earning: "₹150", phone: "+91 77665-XXXXX" },
  { id: 4, name: "Pooja Nair", type: "Job Seeker", date: "5 days ago", status: "Active", earning: "₹50", phone: "+91 66554-XXXXX" },
  { id: 5, name: "Rajan Mehta", type: "Employer", date: "1 week ago", status: "Paid", earning: "₹150", phone: "+91 55443-XXXXX" },
];

export default function PromoterReferralsPage() {
  const refCode = "HIRE-PROMO-2024";

  return (
    <DashboardLayout role="promoter">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">Referral Network</h1>
          <p className="text-slate-500 text-sm mt-1">Track your network growth and referral earnings in real-time.</p>
        </div>
        <button className="btn-amber flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-amber-600/20">
          <Share2 size={16} /> Share Link
        </button>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Referrals", value: "48", icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Active Today", value: "3", icon: ArrowUpRight, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Total Earnings", value: "₹7,300", icon: IndianRupee, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Unpaid Balance", value: "₹1,850", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center`}>
                <s.icon size={16} className={s.color} />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
            </div>
            <p className="text-2xl font-black text-slate-900">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Referral Link Card */}
      <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden shadow-xl shadow-amber-600/10">
        <div className="relative z-10">
          <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
            <Share2 size={20} /> Your Affiliate Link
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <code className="flex-1 w-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 rounded-xl text-sm font-mono overflow-auto">
              https://jobportal.in/ref/{refCode}
            </code>
            <button className="w-full sm:w-auto bg-white text-amber-600 px-6 py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 hover:bg-amber-50 transition-all">
              <Copy size={16} /> COPY
            </button>
          </div>
          <p className="text-amber-100 text-[10px] mt-4 font-bold uppercase tracking-widest">
            Earn ₹150 for every Employer and ₹50 for every Job Seeker you bring.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/20 rounded-full -ml-10 -mb-10 blur-2xl" />
      </div>

      {/* Search & List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between gap-4">
          <h2 className="font-heading font-bold text-slate-900">Recent Referrals</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by name..." 
                className="bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-xs outline-none focus:ring-2 focus:ring-amber-500/10 transition-all"
              />
            </div>
            <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-amber-600 transition-colors">
              <Filter size={16} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="text-left px-6 py-4">User Details</th>
                <th className="text-left px-6 py-4">Category</th>
                <th className="text-left px-6 py-4">Joined Date</th>
                <th className="text-left px-6 py-4">Commission</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {referrals.map((r) => (
                <motion.tr 
                  key={r.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                      <p className="text-slate-400 text-[10px]">{r.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${r.type === 'Employer' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {r.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-medium">{r.date}</td>
                  <td className="px-6 py-4">
                    <span className="font-black text-slate-900 text-sm">{r.earning}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      r.status === "Active"  ? "bg-emerald-50 text-emerald-700" :
                      r.status === "Paid"    ? "bg-blue-50 text-blue-700" :
                      "bg-amber-50 text-amber-700"
                    }`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-300 hover:text-amber-600 transition-colors">
                      <ExternalLink size={14} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
