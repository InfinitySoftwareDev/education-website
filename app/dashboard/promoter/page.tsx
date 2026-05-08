"use client";
import { motion } from "framer-motion";
import { Users, DollarSign, Share2, TrendingUp, Copy, Lightbulb } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import DashboardLayout from "@/components/DashboardLayout";

const referrals = [
  { name: "Suresh Kumar",  type: "Employer",  date: "Today",       status: "Active",  earning: "₹150" },
  { name: "Meena Iyer",    type: "Job Seeker", date: "Yesterday",   status: "Active",  earning: "₹50" },
  { name: "Vikram M.",     type: "Employer",  date: "3 days ago",  status: "Pending", earning: "₹150" },
  { name: "Pooja Nair",    type: "Job Seeker", date: "5 days ago",  status: "Active",  earning: "₹50" },
  { name: "Rajan Mehta",   type: "Employer",  date: "1 week ago",  status: "Paid",    earning: "₹150" },
];

const payouts = [
  { date: "Apr 15, 2024", amount: "₹2,400", method: "UPI", status: "Paid" },
  { date: "Mar 15, 2024", amount: "₹1,800", method: "UPI", status: "Paid" },
  { date: "Feb 15, 2024", amount: "₹3,100", method: "UPI", status: "Paid" },
];

export default function PromoterDashboard() {
  const refCode = "HIRE-PROMO-2024";

  return (
    <DashboardLayout role="promoter">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">Suresh Promoter</h1>
          <p className="text-slate-500 text-sm mt-1">Affiliate Partner · Mumbai</p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Earnings</p>
          <div className="font-heading text-3xl font-bold text-amber-600">₹7,300</div>
        </div>
      </div>

      <div className="py-2">
        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { icon: Users,      label: "Total Referrals",   value: 48,   color: "text-amber-600",  bg: "bg-amber-50" },
            { icon: TrendingUp, label: "This Month",        value: 12,   color: "text-blue-600",   bg: "bg-blue-50" },
            { icon: DollarSign, label: "Pending Payout (₹)",value: 1850, color: "text-emerald-600",bg: "bg-emerald-50" },
            { icon: Share2,     label: "Active Links",      value: 3,    color: "text-purple-600", bg: "bg-purple-50" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div className={`font-heading text-3xl font-extrabold ${s.color}`}>
                <AnimatedCounter target={s.value} />
              </div>
              <p className="text-slate-500 text-xs font-semibold mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Referral Link */}
        <div className="bg-linear-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 mb-8">
          <h2 className="font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Share2 size={16} className="text-amber-600" /> Your Referral Link
          </h2>
          <div className="flex items-center gap-3">
            <code className="flex-1 bg-white border border-amber-200 px-4 py-3 rounded-xl text-sm font-mono text-slate-700 overflow-auto">
              https://jobportal.in/ref/{refCode}
            </code>
            <button className="btn-amber px-5 py-3 text-sm shrink-0 flex items-center gap-2">
              <Copy size={14} /> Copy
            </button>
          </div>
          <p className="text-slate-600 text-xs mt-3 flex items-start gap-1">
            <Lightbulb size={16} className="text-amber-500 shrink-0" /> 
            <span>Earn <strong>₹150</strong> for each Employer and <strong>₹50</strong> for each Job Seeker who registers using your link.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Referrals Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-heading font-bold text-slate-900">Recent Referrals</h2>
            </div>
            <div className="divide-y divide-slate-50">
              {referrals.map((r) => (
                <div key={r.name} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{r.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{r.type} · {r.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-emerald-600 text-sm">{r.earning}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      r.status === "Active"  ? "bg-emerald-50 text-emerald-700" :
                      r.status === "Paid"    ? "bg-blue-50 text-blue-700" :
                      "bg-amber-50 text-amber-700"
                    }`}>{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payout History */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-heading font-bold text-slate-900">Payout History</h2>
            </div>
            <div className="divide-y divide-slate-50">
              {payouts.map((p) => (
                <div key={p.date} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{p.amount}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{p.date} · {p.method}</p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full">{p.status}</span>
                </div>
              ))}
            </div>
            <div className="p-5 border-t border-slate-100">
              <button className="btn-amber w-full text-sm py-3">Request Payout</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
