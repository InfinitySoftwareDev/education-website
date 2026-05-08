"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Phone, CheckCircle, Clock, Search, Filter, PhoneIncoming, PhoneOutgoing, MoreVertical, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const leads = [
  { id: 1, name: "Rahul Sharma", phone: "+91 98765-XXXXX", job: "React Developer", city: "Bangalore", status: "Interested", lastCall: "10:24 AM", type: "Outgoing" },
  { id: 2, name: "Priya Patel", phone: "+91 87654-XXXXX", job: "Sales Executive", city: "Mumbai", status: "Not Answered", lastCall: "11:05 AM", type: "Outgoing" },
  { id: 3, name: "Amit Singh", phone: "+91 76543-XXXXX", job: "Warehouse Manager", city: "Delhi", status: "Callback", lastCall: "12:10 PM", type: "Incoming" },
  { id: 4, name: "Neha Gupta", phone: "+91 65432-XXXXX", job: "HR Executive", city: "Pune", status: "Interested", lastCall: "1:45 PM", type: "Outgoing" },
  { id: 5, name: "Suresh Kumar", phone: "+91 54321-XXXXX", job: "Site Engineer", city: "Jaipur", status: "Not Interested", lastCall: "2:30 PM", type: "Outgoing" },
];

export default function RecruiterLeadsPage() {
  return (
    <DashboardLayout role="recruiter">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900">Lead CRM</h1>
        <p className="text-slate-500 text-sm mt-1">Track and manage your candidate pipeline with AI-assisted logs.</p>
      </div>

      {/* Recruiter Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Calls Today", value: "48", icon: Phone, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Interested", value: "12", icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Callbacks", value: "8", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Not Answered", value: "15", icon: PhoneIncoming, color: "text-slate-400", bg: "bg-slate-50" },
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

      {/* Search & Tabs */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search leads by name or phone..." 
            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-purple-500/10 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
            <Filter size={16} /> Filters
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20">
            Export Logs
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="text-left px-6 py-4">Candidate</th>
                <th className="text-left px-6 py-4">Applied Job</th>
                <th className="text-left px-6 py-4">Last Call</th>
                <th className="text-left px-6 py-4">Type</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {leads.map((l) => (
                <motion.tr 
                  key={l.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{l.name}</p>
                      <p className="text-slate-400 text-xs">{l.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-600">{l.job}</p>
                      <p className="text-slate-400 text-[10px] mt-0.5">{l.city}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-semibold">{l.lastCall}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 text-[10px] font-bold ${l.type === 'Incoming' ? 'text-blue-600' : 'text-purple-600'}`}>
                      {l.type === 'Incoming' ? <PhoneIncoming size={12} /> : <PhoneOutgoing size={12} />} {l.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      l.status === "Interested" ? "bg-emerald-50 text-emerald-700" :
                      l.status === "Callback"   ? "bg-blue-50 text-blue-700" :
                      l.status === "Not Interested" ? "bg-red-50 text-red-600" :
                      "bg-amber-50 text-amber-700"
                    }`}>
                      {l.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-all" title="Call Now">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all" title="WhatsApp">
                        <MessageSquare size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
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
