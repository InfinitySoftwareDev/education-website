"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  Building2, Globe, Mail, 
  Phone, MapPin, Users, 
  Camera, Save, ArrowLeft,
  Layout, ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CompanyProfilePage() {
  const [loading, setLoading] = useState(false);

  return (
    <DashboardLayout role="employer" title="Company Profile">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/dashboard/employer" 
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
          <button className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20">
            <Save size={16} /> Save Profile Changes
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Branding & Verification */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
              <div className="relative inline-block group mb-4">
                <div className="w-32 h-32 rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-blue-400 transition-all">
                  <Building2 size={40} className="text-slate-300 group-hover:text-blue-400" />
                </div>
                <button className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-lg hover:scale-110 transition-all">
                  <Camera size={16} />
                </button>
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-lg">TechCorp Solutions</h3>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">IT & Software Services</p>
              
              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-center gap-2 text-emerald-600">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Verified Employer</span>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/20">
              <h4 className="font-bold mb-2">Hiring Performance</h4>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="flex justify-between text-[10px] uppercase font-bold mb-1.5 opacity-80">Profile Completion</div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[85%]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-2xl font-black">4.8</p>
                    <p className="text-[10px] uppercase font-bold opacity-70">Company Rating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">92%</p>
                    <p className="text-[10px] uppercase font-bold opacity-70">Response Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
              <h3 className="font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Layout size={18} className="text-blue-600" /> General Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Official Company Name *</label>
                  <input type="text" className="form-input" defaultValue="TechCorp Solutions Pvt Ltd" />
                </div>
                <div>
                  <label className="form-label">Industry *</label>
                  <select className="form-input">
                    <option>Information Technology</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Manufacturing</option>
                    <option>Finance</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Company Website</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" className="form-input pl-10" defaultValue="www.techcorp.com" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Company Size</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <select className="form-input pl-10">
                      <option>1-10 Employees</option>
                      <option>11-50 Employees</option>
                      <option>51-200 Employees</option>
                      <option>201-500 Employees</option>
                      <option>500+ Employees</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="form-label">Headquarters Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" className="form-input pl-10" defaultValue="Silicon Valley, Tech Park, Bangalore" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="form-label">About the Company</label>
                  <textarea rows={4} className="form-input resize-none" placeholder="Briefly describe what your company does and your mission..."></textarea>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
              <h3 className="font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Mail size={18} className="text-amber-500" /> Contact Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">HR Contact Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="email" className="form-input pl-10" defaultValue="hr@techcorp.com" />
                  </div>
                </div>
                <div>
                  <label className="form-label">HR Contact Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="tel" className="form-input pl-10" defaultValue="+91 98765 43210" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
