"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, BarChart2, Phone, Briefcase, Plus, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const plans = [
  { name: "Basic", price: "₹199", period: "per job post", highlight: false, features: ["1 Job Posting", "30-day listing", "AI Calling included", "Verified leads", "Email support"] },
  { name: "Pro", price: "₹999", period: "per month", highlight: true, features: ["5 Job Postings", "60-day listing", "AI Calling (Priority)", "Resume DB Access", "Dedicated Recruiter", "WhatsApp support"] },
  { name: "Enterprise", price: "Custom", period: "contact us", highlight: false, features: ["Unlimited Postings", "Bulk Hiring Support", "Campaign Management", "Full DB Access", "Dedicated Account Manager", "SLA Guarantee"] },
];

const analyticsData = [
  { label: "Total Applications", value: "1,248", change: "+12%", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Shortlisted", value: "342", change: "+8%", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Interviews Scheduled", value: "87", change: "+24%", color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Offers Made", value: "23", change: "+5%", color: "text-purple-600", bg: "bg-purple-50" },
];

export default function EmployerPage() {
  const [activeTab, setActiveTab] = useState<"signup" | "login" | "forgot">("signup");
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSendOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
    }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="section-label">Employer Portal</span>
            <h1 className="font-heading text-5xl font-extrabold text-white mt-4 mb-3">
              Hire the Best. <span className="text-gradient-amber">For ₹199.</span>
            </h1>
            <p className="text-slate-300 text-lg">Post jobs, manage candidates, and use AI-powered hiring tools — all in one dashboard.</p>
          </motion.div>

          {/* Auth Card */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl shadow-blue-900/30 overflow-hidden">
            <div className="flex">
              {(["signup", "login"] as const).map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => {
                    setActiveTab(tab);
                    setOtpSent(false);
                  }} 
                  className={`flex-1 py-4 text-sm font-bold transition-colors ${
                    (activeTab === tab || (activeTab === "forgot" && tab === "login")) 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab === "signup" ? "Register as Employer" : "Employer Login"}
                </button>
              ))}
            </div>
            <div className="p-7">
              {activeTab === "signup" ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="form-label">First Name</label><input className="form-input" placeholder="First" /></div>
                    <div><label className="form-label">Last Name</label><input className="form-input" placeholder="Last" /></div>
                  </div>
                  <div><label className="form-label">Company Name *</label><input className="form-input" placeholder="Your company" /></div>
                  <div><label className="form-label">Business Email *</label><input type="email" className="form-input" placeholder="hr@company.com" /></div>
                  <div><label className="form-label">Mobile *</label><input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" /></div>
                  <div><label className="form-label">City</label>
                    <select className="form-input">
                      {["Mumbai","Delhi","Bangalore","Hyderabad","Pune","Chennai","Kolkata","Ahmedabad","Other"].map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Password *</label>
                      <div className="relative">
                        <input type={showPassword ? "text" : "password"} className="form-input pr-10" placeholder="••••••••" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Confirm Password *</label>
                      <div className="relative">
                        <input type={showPassword ? "text" : "password"} className="form-input pr-10" placeholder="••••••••" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="btn-primary w-full text-sm py-4 mt-2 font-bold">Register as Employer <ArrowRight size={16} /></button>
                  <button onClick={() => setActiveTab("login")} className="w-full text-xs text-slate-500 hover:text-blue-600 transition-all mt-4 font-medium text-center">
                    Already have an account? Login →
                  </button>
                </div>
              ) : activeTab === "login" ? (
                <div className="space-y-4">
                  {/* Login Method Switcher */}
                  <div className="flex p-1 bg-slate-50 rounded-lg mb-4">
                    <button
                      onClick={() => { setLoginMethod("password"); setOtpSent(false); }}
                      className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-md transition-all ${loginMethod === 'password' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                    >
                      Password
                    </button>
                    <button
                      onClick={() => setLoginMethod("otp")}
                      className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-md transition-all ${loginMethod === 'otp' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}
                    >
                      OTP Login
                    </button>
                  </div>

                  {loginMethod === "password" ? (
                    <>
                      <div><label className="form-label">Email / Mobile</label><input className="form-input" placeholder="Email or mobile number" /></div>
                      <div>
                        <label className="form-label">Password</label>
                        <div className="relative">
                          <input type={showPassword ? "text" : "password"} className="form-input pr-10" placeholder="••••••••" />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                      <Link href="/dashboard/employer" className="btn-primary w-full py-3.5 text-center text-sm font-bold">Login to Dashboard <ArrowRight size={16} /></Link>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="form-label">Mobile Number</label>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <input className="form-input" placeholder="+91 XXXXX XXXXX" disabled={otpSent} />
                          </div>
                          {!otpSent && (
                            <button onClick={handleSendOtp} disabled={loading} className="px-4 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 disabled:opacity-50">
                              {loading ? "..." : "Send"}
                            </button>
                          )}
                        </div>
                      </div>

                      {otpSent && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 pt-2">
                          <div>
                            <div className="flex justify-between items-center mb-1.5">
                              <label className="form-label mb-0">Enter OTP</label>
                              <button onClick={() => setOtpSent(false)} className="text-[10px] text-blue-600 font-bold hover:underline">Resend OTP</button>
                            </div>
                            <input className="form-input text-center text-xl tracking-[0.5em] font-bold" maxLength={6} placeholder="000000" value={otp} onChange={(e) => setOtp(e.target.value)} />
                          </div>
                          <Link href="/dashboard/employer" className="btn-primary w-full py-3.5 text-center text-sm font-bold">Verify & Login <ArrowRight size={16} /></Link>
                        </motion.div>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <button onClick={() => setActiveTab("forgot")} className="hover:text-blue-600 transition-colors">Forgot password?</button>
                    <button onClick={() => setActiveTab("signup")} className="hover:text-blue-600 transition-colors">Create account →</button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-slate-900">Reset Password</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {otpSent 
                        ? "Enter the 6-digit OTP sent to your email/mobile and choose a new password." 
                        : "Enter your registered email or mobile number to receive an OTP."}
                    </p>
                  </div>

                  {!otpSent ? (
                    <div className="space-y-4">
                      <div><label className="form-label">Email / Mobile</label><input type="text" className="form-input" placeholder="Enter email or mobile number" /></div>
                      <button 
                        onClick={handleSendOtp}
                        disabled={loading}
                        className="btn-primary w-full py-3.5"
                      >
                        {loading ? "Sending..." : "Send OTP"} <ArrowRight size={16} />
                      </button>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="form-label mb-0">Enter OTP</label>
                          <button onClick={() => setOtpSent(false)} className="text-[10px] text-blue-600 font-bold hover:underline">Resend OTP</button>
                        </div>
                        <input 
                          className="form-input text-center text-xl tracking-[0.5em] font-bold" 
                          maxLength={6} 
                          placeholder="000000" 
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="form-label">New Password</label>
                        <div className="relative">
                          <input type={showPassword ? "text" : "password"} className="form-input pr-10" placeholder="••••••••" />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                      <button className="btn-primary w-full py-3.5">
                        Reset Password <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  )}

                  <div className="text-center mt-4">
                    <button 
                      onClick={() => { setActiveTab("login"); setOtpSent(false); }} 
                      className="text-xs text-blue-600 font-bold hover:underline"
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="section-label">Employer Dashboard</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-3">Your Hiring Analytics at a Glance</h2>
          </motion.div>

          {/* Stats */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {analyticsData.map((d) => (
              <motion.div
                key={d.label}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card text-center group cursor-default hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
              >
                <p className={`font-heading text-3xl font-extrabold ${d.color} mb-1`}>{d.value}</p>
                <p className="text-slate-500 text-xs font-semibold mb-2">{d.label}</p>
                <span className={`text-xs font-bold ${d.color} ${d.bg} px-2 py-0.5 rounded-full`}>{d.change} this month</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Highlights */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Plus, title: "Post a Job", desc: "Create a verified job listing in under 2 minutes. Reach 50,000+ candidates instantly.", cta: "Post Now", color: "text-amber-600", bg: "bg-amber-50" },
              { icon: Users, title: "Manage Candidates", desc: "View all applicants, shortlist, reject, or schedule interviews — all from your dashboard.", cta: "View Candidates", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Phone, title: "AI Recruiter Tools", desc: "Let our AI make 250+ calls/day to pre-screen candidates and deliver only the interested ones.", cta: "Learn More", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: BarChart2, title: "Hiring Analytics", desc: "Track applications, shortlists, and hires with real-time analytics and export reports.", cta: "View Analytics", color: "text-purple-600", bg: "bg-purple-50" },
              { icon: Briefcase, title: "Subscription Plans", desc: "Choose from Basic ₹199, Pro ₹999/mo, or Enterprise custom plans. Scale as you grow.", cta: "See Plans", color: "text-rose-600", bg: "bg-rose-50" },
              { icon: CheckCircle, title: "Verified Leads Only", desc: "Every candidate contact is OTP-verified. No fake CVs, no wrong numbers — guaranteed.", cta: "Get Verified Leads", color: "text-teal-600", bg: "bg-teal-50" },
            ].map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="card group cursor-pointer hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-heading font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                <Link href="/login" className={`text-sm font-semibold ${f.color} flex items-center gap-1 hover:gap-2 transition-all`}>
                  {f.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="section-label">Subscription Plans</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-3">Choose Your Plan</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`card relative transition-all duration-300 ${plan.highlight ? "border-2 border-blue-500 shadow-xl shadow-blue-100" : "hover:shadow-xl hover:shadow-slate-200"}`}
              >
                {plan.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</div>}
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <div className="font-heading text-4xl font-extrabold text-blue-600 mb-0.5">{plan.price}</div>
                <p className="text-slate-400 text-xs mb-6">{plan.period}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={13} className="text-emerald-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/login" className={plan.highlight ? "btn-primary w-full text-center text-sm" : "btn-outline-blue w-full text-center text-sm"}>
                  {plan.name === "Enterprise" ? "Contact Us" : "Get Started"} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
