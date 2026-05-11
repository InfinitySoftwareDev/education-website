"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Briefcase, MapPin, TrendingUp, IndianRupee, Star, Settings, Eye } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import DashboardLayout from "@/components/DashboardLayout";

const quickActions: { label: string; href: string }[] = [
  { label: "Manage Recruiters", href: "/dashboard/admin/users?role=recruiter" },
  { label: "View All Job Posts", href: "/dashboard/admin/jobs" },
  { label: "Revenue Reports", href: "/dashboard/admin/finance" },

  { label: "Review Management", href: "/dashboard/admin/reviews" },
  { label: "FAQ Management", href: "/dashboard/admin/faq" },
];

const stats = [
  { icon: Users, label: "Total Users", value: 12840, suffix: "", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Briefcase, label: "Active Job Posts", value: 437, suffix: "", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: IndianRupee, label: "Revenue (₹)", value: 284000, suffix: "", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: TrendingUp, label: "Placements This Month", value: 142, suffix: "", color: "text-purple-600", bg: "bg-purple-50" },
];

const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Nagpur", "Indore", "Bhopal", "Patna", "Coimbatore", "Vadodara", "Kochi", "Chandigarh", "Visakhapatnam"];

const recentUsers = [
  { name: "Rahul Sharma", role: "Employer", city: "Mumbai", joined: "Today", status: "Active" },
  { name: "Priya Patel", role: "Job Seeker", city: "Ahmedabad", joined: "Yesterday", status: "Active" },
  { name: "Amit Singh", role: "Recruiter", city: "Delhi", joined: "2 days ago", status: "Pending" },
  { name: "Neha Gupta", role: "Employer", city: "Hyderabad", joined: "3 days ago", status: "Active" },
  { name: "Suresh Kumar", role: "Promoter", city: "Pune", joined: "3 days ago", status: "Active" },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">Platform Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Global statistics and platform health.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-600/20">A</div>
          <div>
            <p className="font-bold text-sm text-slate-900 leading-none">Super Admin</p>
            <p className="text-slate-400 text-[10px] mt-1 font-semibold uppercase tracking-wider">Master Access</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Users */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h2 className="font-heading font-bold text-slate-900">Recent Registrations</h2>
                <Link href="/dashboard/admin/users" className="badge-blue hover:bg-blue-100 transition-colors">
                  Manage Users
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th className="text-left px-6 py-3">Name</th>
                      <th className="text-left px-6 py-3">Role</th>
                      <th className="text-left px-6 py-3">City</th>
                      <th className="text-left px-6 py-3">Joined</th>
                      <th className="text-left px-6 py-3">Status</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentUsers.map((u) => (
                      <tr key={u.name} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-slate-800">{u.name}</td>
                        <td className="px-6 py-4"><span className="badge-blue text-[10px]">{u.role}</span></td>
                        <td className="px-6 py-4 text-sm text-slate-500">{u.city}</td>
                        <td className="px-6 py-4 text-xs text-slate-400">{u.joined}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${u.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                            {u.status}
                          </span>
                        </td>
                        <td className="px-6 py-4"><button className="text-blue-500 hover:text-blue-700 transition-colors"><Eye size={15} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* City Management */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-blue-600" />
                <h3 className="font-heading font-bold text-slate-900 text-sm">City Management ({cities.length})</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                {cities.map((c) => (
                  <span key={c} className="text-[10px] font-semibold text-slate-600 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-lg px-2.5 py-1 cursor-pointer transition-colors">
                    {c}
                  </span>
                ))}
              </div>
              <button className="btn-outline-blue w-full text-xs py-2.5 mt-4">+ Add City</button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-heading font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                <Settings size={15} className="text-blue-600" /> Quick Actions
              </h3>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="block w-full text-left text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-colors font-medium"
                  >
                    {action.label} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="bg-linear-to-br from-amber-400 to-amber-500 rounded-2xl p-6 text-slate-900">
              <Star className="w-8 h-8 mb-3 fill-slate-900/20" />
              <div className="font-heading text-4xl font-extrabold mb-1">4.9/5</div>
              <p className="font-semibold text-sm">Average Rating</p>
              <p className="text-slate-800/70 text-xs mt-1">Based on 1,240+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
