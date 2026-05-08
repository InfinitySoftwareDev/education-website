"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Search, Filter, Eye, Phone } from "lucide-react";
import { useState } from "react";

const applicants = [
  { id: 1, name: "Ankit Verma", role: "React Developer", score: 92, status: "Shortlisted", date: "May 5, 2024", experience: "3 years" },
  { id: 2, name: "Sunita Rao", role: "Sales Manager", score: 85, status: "Interview", date: "May 4, 2024", experience: "5 years" },
  { id: 3, name: "Rajan Mehta", role: "Accountant", score: 78, status: "Shortlisted", date: "May 3, 2024", experience: "2 years" },
  { id: 4, name: "Kavya Reddy", role: "HR Executive", score: 71, status: "Pending", date: "May 2, 2024", experience: "4 years" },
  { id: 5, name: "Rahul Singh", role: "UI Designer", score: 88, status: "Under Review", date: "May 1, 2024", experience: "3 years" },
];

export default function ApplicantsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApplicants = applicants.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout role="employer">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900">Manage Applicants</h1>
        <p className="text-slate-500 text-sm mt-1">Review and shortlist candidates for your active job posts.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, role, or skills..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
          <Filter size={16} /> Filters
        </button>
      </div>

      {/* Applicants Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="text-left px-6 py-4">Candidate Info</th>
                <th className="text-left px-6 py-4">Applied Role</th>
                <th className="text-center px-6 py-4">AI Score</th>
                <th className="text-left px-6 py-4">Applied Date</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredApplicants.length > 0 ? (
                filteredApplicants.map((a) => (
                  <tr 
                    key={a.id}
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                          {a.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{a.name}</p>
                          <p className="text-slate-400 text-xs">{a.experience} Exp</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{a.role}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center">
                        <span className={`text-sm font-bold ${a.score >= 85 ? "text-emerald-600" : a.score >= 75 ? "text-blue-600" : "text-amber-600"}`}>
                          {a.score}%
                        </span>
                        <div className="w-16 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${a.score >= 85 ? "bg-emerald-500" : a.score >= 75 ? "bg-blue-500" : "bg-amber-500"}`} 
                            style={{ width: `${a.score}%` }} 
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{a.date}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        a.status === "Shortlisted" ? "bg-blue-50 text-blue-700" :
                        a.status === "Interview"   ? "bg-emerald-50 text-emerald-700" :
                        a.status === "Pending"     ? "bg-amber-50 text-amber-700" :
                        "bg-slate-100 text-slate-500"
                      }`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2 transition-opacity">
                        <button title="View Profile" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all border border-slate-100/50">
                          <Eye size={16} />
                        </button>
                        <button title="Contact" className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all border border-slate-100/50">
                          <Phone size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <p className="text-slate-400 font-bold">No applicants found matching "{searchQuery}"</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
