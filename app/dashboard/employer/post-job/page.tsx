"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Briefcase, MapPin, IndianRupee, 
  Clock, FileText, CheckCircle, 
  Plus, X, Save, ArrowLeft 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PostJobPage() {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const addSkill = () => {
    const val = skillInput.trim();
    if (val && !skills.includes(val)) {
      setSkills([...skills, val]);
      setSkillInput("");
    }
  };

  return (
    <DashboardLayout role="employer" title="Post New Job">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/dashboard/employer" 
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <ArrowLeft size={14} /> Back to Overview
          </Link>
          <button className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20">
            <Save size={16} /> Publish Job Post
          </button>
        </div>

        <div className="grid gap-6">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <h3 className="font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Briefcase size={18} className="text-blue-600" /> Basic Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              <div className="md:col-span-2">
                <label className="form-label">Job Title *</label>
                <input type="text" className="form-input" placeholder="e.g. Senior React Developer" />
              </div>
              
              <div>
                <label className="form-label">Category / Department *</label>
                <select className="form-input">
                  <option>Software Development</option>
                  <option>Sales & Marketing</option>
                  <option>Human Resources</option>
                  <option>Finance</option>
                  <option>Customer Support</option>
                  <option>Operations</option>
                </select>
              </div>

              <div>
                <label className="form-label">Job Type *</label>
                <select className="form-input">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Freelance</option>
                </select>
              </div>

              <div>
                <label className="form-label">Experience Level *</label>
                <select className="form-input">
                  <option>Fresher</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>5-10 Years</option>
                  <option>10+ Years</option>
                </select>
              </div>

              <div>
                <label className="form-label">Location (City) *</label>
                <input type="text" className="form-input" placeholder="e.g. Bangalore, Remote" />
              </div>

              <div>
                <label className="form-label">Salary Range (Monthly)</label>
                <input type="text" className="form-input" placeholder="e.g. 40,000 - 60,000" />
              </div>

              <div>
                <label className="form-label">Deadline to Apply</label>
                <input type="date" className="form-input" />
              </div>
            </div>
          </div>

          {/* Detailed Info */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <h3 className="font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText size={18} className="text-emerald-600" /> Job Description & Requirements
            </h3>

            <div className="space-y-6">
              <div>
                <label className="form-label">Job Description *</label>
                <textarea 
                  rows={6} 
                  className="form-input resize-none" 
                  placeholder="Describe the role, responsibilities, and what a typical day looks like..."
                ></textarea>
              </div>

              <div>
                <label className="form-label">Key Skills & Requirements</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skills.map((skill, idx) => (
                    <motion.span 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      key={idx} 
                      className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold flex items-center gap-2 border border-blue-100"
                    >
                      {skill}
                      <button 
                        onClick={() => setSkills(skills.filter((_, i) => i !== idx))}
                        className="hover:text-red-500 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Add a skill (e.g. React, Python)"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <button 
                    onClick={addSkill}
                    className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-md shrink-0"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
