"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Search, Filter, Shield, User, Briefcase, Megaphone, Users, MoreVertical, Ban, CheckCircle } from "lucide-react";
import { useState } from "react";

const users = [
  { id: 1, name: "Rahul Sharma", role: "Employer", email: "rahul@techcorp.in", status: "Active", joined: "Today" },
  { id: 2, name: "Priya Patel", role: "Job Seeker", email: "priya@email.com", status: "Active", joined: "Yesterday" },
  { id: 3, name: "Amit Singh", role: "Recruiter", email: "amit@recruiter.com", status: "Pending", joined: "2 days ago" },
  { id: 4, name: "Neha Gupta", role: "Employer", email: "neha@startup.co", status: "Active", joined: "3 days ago" },
  { id: 5, name: "Suresh Kumar", role: "Promoter", email: "suresh@promo.in", status: "Active", joined: "3 days ago" },
  { id: 6, name: "Vikram Malhotra", role: "Job Seeker", email: "vikram@email.com", status: "Banned", joined: "1 week ago" },
];

const roleIcons: any = {
  "Employer": Briefcase,
  "Job Seeker": User,
  "Recruiter": Users,
  "Promoter": Megaphone,
  "Admin": Shield
};

export default function UserManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "All Roles" || u.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <DashboardLayout role="admin" title="User Management">
      <div className="py-2">
        {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Users", value: "12,840", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Pending Verification", value: "48", color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Active Today", value: "842", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Banned Users", value: "12", color: "text-red-600", bg: "bg-red-50" },
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
            placeholder="Search by name, email, or role..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
          />
        </div>
        <div className="flex gap-2">
          <select 
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 outline-none cursor-pointer"
          >
            <option>All Roles</option>
            <option>Employer</option>
            <option>Job Seeker</option>
            <option>Recruiter</option>
            <option>Promoter</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all">
            + Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="text-left px-6 py-4">User</th>
                <th className="text-left px-6 py-4">Role</th>
                <th className="text-left px-6 py-4">Joined</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u) => {
                  const Icon = roleIcons[u.role];
                  return (
                    <tr 
                      key={u.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                            {u.name[0]}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">{u.name}</p>
                            <p className="text-slate-400 text-xs">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Icon size={14} className="text-blue-500" />
                          <span className="text-xs font-semibold">{u.role}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-500">{u.joined}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          u.status === "Active" ? "bg-emerald-50 text-emerald-700" :
                          u.status === "Pending" ? "bg-amber-50 text-amber-700" :
                          "bg-red-50 text-red-700"
                        }`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2 transition-opacity">
                          <button title="Approve" className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all border border-emerald-100/50">
                            <CheckCircle size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <p className="text-slate-400 font-bold">No users found matching "{searchQuery}"</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
