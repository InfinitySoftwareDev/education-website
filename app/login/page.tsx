"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Briefcase, Users, UserCheck, Megaphone } from "lucide-react";

const panels = [
  { id: "admin",     label: "Admin",     icon: Shield,    color: "text-red-600",    bg: "bg-red-50",    border: "border-red-200" },
  { id: "employer",  label: "Employer",  icon: Briefcase, color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-200" },
  { id: "employee",  label: "Job Seeker",icon: UserCheck, color: "text-emerald-600",bg: "bg-emerald-50",border: "border-emerald-200" },
  { id: "recruiter", label: "Recruiter", icon: Users,     color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
  { id: "promoter",  label: "Promoter",  icon: Megaphone, color: "text-amber-600",  bg: "bg-amber-50",  border: "border-amber-200" },
];

const dashLinks: Record<string, string> = {
  admin:     "/dashboard/admin",
  employer:  "/dashboard/employer",
  employee:  "/dashboard/employee",
  recruiter: "/dashboard/recruiter",
  promoter:  "/dashboard/promoter",
};

export default function LoginPage() {
  const [active, setActive] = useState("employer");
  const [isLogin, setIsLogin] = useState(true);

  const current = panels.find((p) => p.id === active)!;

  return (
    <div className="min-h-screen hero-bg flex items-center py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <span className="section-label">Secure Access</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-4 mb-3">
            Job Portal <span className="text-gradient-amber">Login Portal</span>
          </h1>
          <p className="text-slate-300">Select your role to access your dashboard.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-3 mb-8">
          {panels.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 ${
                active === p.id
                  ? `${p.bg} ${p.border} ${p.color} shadow-lg`
                  : "bg-white/5 border-white/15 text-slate-400 hover:bg-white/10"
              }`}
            >
              <p.icon size={22} className={active === p.id ? p.color : "text-slate-400"} />
              <span className="text-xs font-bold">{p.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Tab within panel */}
              <div className="flex border-b border-slate-100">
                {["Login", "Register"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setIsLogin(t === "Login")}
                    className={`flex-1 py-4 text-sm font-bold transition-colors ${
                      (t === "Login") === isLogin
                        ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="p-7">
                <div className={`flex items-center gap-3 ${current.bg} ${current.border} border rounded-xl p-3 mb-6`}>
                  <current.icon size={18} className={current.color} />
                  <span className={`text-sm font-bold ${current.color}`}>{current.label} {isLogin ? "Login" : "Registration"}</span>
                </div>

                {isLogin ? (
                  <div className="space-y-4">
                    <div><label className="form-label">Email / Mobile</label><input className="form-input" placeholder="Enter your email or mobile" /></div>
                    <div><label className="form-label">Password</label><input type="password" className="form-input" placeholder="••••••••" /></div>
                    {active === "admin" && (
                      <div><label className="form-label">Admin Code</label><input className="form-input" placeholder="Enter admin access code" /></div>
                    )}
                    <Link href={dashLinks[active]} className="btn-primary w-full text-center py-3.5 text-sm">
                      Login as {current.label} <ArrowRight size={15} />
                    </Link>
                    <div className="flex justify-between text-xs text-slate-500">
                      <Link href="#" className="hover:text-blue-600 transition-colors">Forgot password?</Link>
                      <button onClick={() => setIsLogin(false)} className="hover:text-blue-600 transition-colors">Create account →</button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="form-label">First Name</label><input className="form-input" placeholder="First" /></div>
                      <div><label className="form-label">Last Name</label><input className="form-input" placeholder="Last" /></div>
                    </div>
                    <div><label className="form-label">Email *</label><input type="email" className="form-input" placeholder="you@email.com" /></div>
                    <div><label className="form-label">Mobile *</label><input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" /></div>
                    {(active === "employer" || active === "recruiter") && (
                      <div><label className="form-label">Company / Agency Name</label><input className="form-input" placeholder="Organisation name" /></div>
                    )}
                    {active === "promoter" && (
                      <div><label className="form-label">Referral Code (optional)</label><input className="form-input" placeholder="Enter referral code" /></div>
                    )}
                    <div><label className="form-label">Password *</label><input type="password" className="form-input" placeholder="Create password" /></div>
                    <button className="btn-primary w-full py-3.5 text-sm">
                      Register as {current.label} <ArrowRight size={15} />
                    </button>
                    <button onClick={() => setIsLogin(true)} className="w-full text-xs text-slate-500 hover:text-blue-600 transition-colors">
                      Already have an account? Login →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
