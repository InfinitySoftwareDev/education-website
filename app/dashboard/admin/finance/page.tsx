"use client";
import { motion } from "framer-motion";
import { 
  IndianRupee, TrendingUp, ArrowUpRight, ArrowDownRight, 
  Download, Calendar, Search, Filter, CreditCard, 
  Wallet, PieChart, Users, Clock
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import AnimatedCounter from "@/components/AnimatedCounter";

const transactions = [
  { id: "TXN001", company: "TechCorp Solutions", plan: "Job Post (₹199)", date: "Today, 10:24 AM", amount: 199, status: "Success", method: "UPI" },
  { id: "TXN002", company: "RetailPro India", plan: "Featured Post (₹499)", date: "Today, 08:15 AM", amount: 499, status: "Success", method: "Card" },
  { id: "TXN003", company: "LogiCo Logistics", plan: "AI Calling Bundle", date: "Yesterday", amount: 2499, status: "Success", method: "UPI" },
  { id: "TXN005", company: "EduFirst Academy", plan: "Bulk Hiring (Premium)", date: "2 days ago", amount: 5000, status: "Success", method: "NetBanking" },
];

export default function FinancePage() {
  return (
    <DashboardLayout role="admin" title="Financial Intelligence">
      {/* ─── Financial Stats ───────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-600/20 overflow-hidden relative group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Wallet size={20} />
            </div>
            <span className="flex items-center gap-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">
              <ArrowUpRight size={10} /> +15.4%
            </span>
          </div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Total Revenue</p>
          <div className="font-heading text-3xl font-extrabold flex items-center gap-2">
            ₹<AnimatedCounter target={284000} />
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <TrendingUp size={20} />
            </div>
            <span className="flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">
              <ArrowUpRight size={10} /> +24%
            </span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Net Profit</p>
          <div className="font-heading text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            ₹<AnimatedCounter target={238800} />
          </div>
        </motion.div>
      </div>

      {/* ─── Transactions Table ────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <PieChart size={16} />
            </div>
            <h3 className="font-heading font-bold text-slate-900">Recent Transactions</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-outline-blue py-1.5 px-4 text-[10px]">
              <Download size={12} /> Export CSV
            </button>
            <div className="h-8 w-px bg-slate-100 mx-2" />
            <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1">
              <button className="px-3 py-1 text-[10px] font-bold bg-white text-blue-600 rounded shadow-xs">Today</button>
              <button className="px-3 py-1 text-[10px] font-bold text-slate-500 hover:text-slate-700">Month</button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="text-left px-6 py-4">Transaction ID</th>
                <th className="text-left px-6 py-4">Entity / Description</th>
                <th className="text-left px-6 py-4">Amount</th>
                <th className="text-left px-6 py-4">Method</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-slate-400 font-mono tracking-tighter">{t.id}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-800 leading-tight">{t.company}</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">{t.plan} • {t.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-bold ${t.amount < 0 ? "text-red-600" : "text-emerald-600"}`}>
                      {t.amount < 0 ? "- " : "+ "}₹{Math.abs(t.amount)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-2 py-0.5 rounded-lg">{t.method}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${t.status === "Success" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-500 hover:text-blue-700 transition-colors">
                      <ArrowUpRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
