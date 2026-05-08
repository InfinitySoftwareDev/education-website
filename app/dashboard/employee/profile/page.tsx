"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Plus, Save, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SeekerProfilePage() {
  return (
    <DashboardLayout role="employee">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">My Profile</h1>
          <p className="text-slate-500 text-sm mt-1">Keep your profile updated to attract the best employers.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Personal Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-3xl overflow-hidden border-4 border-white shadow-md">
                  A
                </div>
                <button className="absolute -bottom-2 -right-2 bg-white border border-slate-200 p-2 rounded-xl shadow-sm hover:text-blue-600 transition-all">
                  <Plus size={14} />
                </button>
              </div>
              <h2 className="font-heading font-bold text-slate-900 mt-4">Ankit Verma</h2>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">React Developer</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input type="email" defaultValue="ankit@email.com" className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-9 pr-4 text-sm font-medium text-slate-700 outline-none" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input type="tel" defaultValue="+91 98765 43210" className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-9 pr-4 text-sm font-medium text-slate-700 outline-none" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">Current City</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input type="text" defaultValue="Bangalore" className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-9 pr-4 text-sm font-medium text-slate-700 outline-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-emerald-600 to-emerald-500 rounded-2xl p-6 text-white">
            <h3 className="font-heading font-bold text-lg mb-2">Profile Score</h3>
            <div className="text-4xl font-black mb-1">72%</div>
            <p className="text-emerald-100 text-xs leading-relaxed">Complete your work experience to reach 100% and get more job offers.</p>
            <div className="mt-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: "72%" }} />
            </div>
          </div>
        </div>

        {/* Right Column: Experience & Skills */}
        <div className="lg:col-span-2 space-y-6">
          {/* Experience Section */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-bold text-slate-900 flex items-center gap-2">
                <Briefcase size={18} className="text-emerald-600" /> Work Experience
              </h2>
              <button className="text-emerald-600 text-xs font-bold hover:underline">+ Add New</button>
            </div>
            
            <div className="space-y-6">
              {[
                { role: "React Developer", company: "TechCorp Pvt Ltd", period: "2021 – Present", desc: "Developing enterprise-scale React applications with high performance." },
                { role: "Junior Web Dev", company: "InnoSoft Solutions", period: "2019 – 2021", desc: "Worked on frontend components using HTML, CSS, and JavaScript." },
              ].map((exp, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-0.5 bg-slate-100 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-50 group-last:border-none group-last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-slate-900 text-sm">{exp.role}</h4>
                    </div>
                    <p className="text-emerald-600 text-xs font-bold">{exp.company} · {exp.period}</p>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap size={18} className="text-blue-600" /> Education
              </h2>
              <button className="text-blue-600 text-xs font-bold hover:underline">+ Add New</button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl">
                <h4 className="font-bold text-slate-900 text-sm">Bachelor of Computer Science</h4>
                <p className="text-slate-500 text-xs">University of Mumbai · 2015 – 2019</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="font-heading font-bold text-slate-900 mb-6">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Redux", "GraphQL", "Framer Motion"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                  {skill}
                </span>
              ))}
              <button className="px-3 py-1.5 border border-dashed border-slate-300 text-slate-400 rounded-lg text-xs font-bold hover:border-blue-300 hover:text-blue-500 transition-all">
                + Add Skill
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
