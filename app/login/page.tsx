"use client";
import { useState, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Shield, Briefcase, Users, UserCheck, Megaphone, Eye, EyeOff } from "lucide-react";

const panels = [
    // { id: "admin", label: "Admin", icon: Shield, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
    { id: "employee", label: "Job Seeker", icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
    { id: "recruiter", label: "Recruiter", icon: Users, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
];

const dashLinks: Record<string, string> = {
    admin: "/dashboard/admin",
    employer: "/dashboard/employer",
    employee: "/dashboard/employee",
    recruiter: "/dashboard/recruiter",
};

function LoginContent() {
    const searchParams = useSearchParams();
    const defaultRole = searchParams.get("role") || "employee";
    const [active, setActive] = useState(defaultRole);
    const [view, setView] = useState("login"); // 'login', 'register', 'forgot'

    // Sync active tab when search params change
    useEffect(() => {
        const role = searchParams.get("role");
        if (role) {
            setActive(role);
        }
    }, [searchParams]);

    const [loginMethod, setLoginMethod] = useState("password"); // 'password' or 'otp'
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const current = panels.find((p) => p.id === active)!;

    const handleSendOtp = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOtpSent(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen hero-bg flex items-center py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
                    <span className="section-label">Secure Access</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-4 mb-3">
                        Talent Connect India <span className="text-gradient-amber">Login Portal</span>
                    </h1>
                    <p className="text-slate-300">Select your role to access your dashboard.</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {panels.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => {
                                setActive(p.id);
                                setOtpSent(false);
                                setView("login");
                            }}
                            className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border-2 min-w-35 transition-all duration-300 ${active === p.id
                                ? `${p.bg} ${p.border} ${p.color} shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-105`
                                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active === p.id ? p.bg : "bg-white/5"}`}>
                                <p.icon size={22} className={active === p.id ? p.color : "text-slate-400"} />
                            </div>
                            <span className="text-sm font-bold tracking-tight">{p.label}</span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${active}-${view}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-md mx-auto"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            {/* Tab Switcher (only for login/register) */}
                            {view !== "forgot" && (
                                <div className="flex border-b border-slate-100">
                                    {["Login", "Register"].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setView(t === "Login" ? "login" : "register")}
                                            className={`flex-1 py-4 text-sm font-bold transition-colors ${((t === "Login") === (view === "login"))
                                                ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                                                : "text-slate-500 hover:bg-slate-50"
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="p-7">
                                <div className={`flex items-center gap-3 ${current.bg} ${current.border} border rounded-xl p-3 mb-6`}>
                                    <current.icon size={18} className={current.color} />
                                    <span className={`text-sm font-bold ${current.color}`}>
                                        {current.label} {view === "login" ? "Login" : view === "register" ? "Registration" : "Reset Password"}
                                    </span>
                                </div>

                                {view === "login" && (
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
                                                <div><label className="form-label">Email / Mobile</label><input className="form-input" placeholder="Enter your email or mobile" /></div>
                                                <div>
                                                    <label className="form-label">Password</label>
                                                    <div className="relative">
                                                        <input type={showPassword ? "text" : "password"} className="form-input pr-10" placeholder="••••••••" />
                                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                        </button>
                                                    </div>
                                                </div>
                                                {active === "admin" && (
                                                    <div><label className="form-label">Admin Code</label><input className="form-input" placeholder="Enter admin access code" /></div>
                                                )}
                                                <Link href={dashLinks[active]} className="btn-primary w-full text-center py-3.5 text-sm">
                                                    Login as {current.label} <ArrowRight size={15} />
                                                </Link>
                                            </>
                                        ) : (
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="form-label">Mobile Number</label>
                                                    <div className="flex gap-2">
                                                        <div className="flex-1">
                                                            <input
                                                                className="form-input"
                                                                placeholder="+91 XXXXX XXXXX"
                                                                disabled={otpSent}
                                                            />
                                                        </div>
                                                        {!otpSent && (
                                                            <button
                                                                onClick={handleSendOtp}
                                                                disabled={loading}
                                                                className="px-4 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 disabled:opacity-50"
                                                            >
                                                                {loading ? "..." : "Send"}
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                <AnimatePresence>
                                                    {otpSent && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            className="space-y-4 pt-2"
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
                                                            <Link href={dashLinks[active]} className="btn-primary w-full text-center py-3.5 text-sm">
                                                                Verify & Login <ArrowRight size={15} />
                                                            </Link>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}

                                        <div className="flex justify-between text-xs text-slate-500 pt-2">
                                            <button onClick={() => setView("forgot")} className="hover:text-blue-600 transition-colors">Forgot password?</button>
                                            <button onClick={() => setView("register")} className="hover:text-blue-600 transition-colors">Create account →</button>
                                        </div>
                                    </div>
                                )}

                                {view === "register" && (
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
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="form-label">Password *</label>
                                                <div className="relative">
                                                    <input type={showPassword ? "text" : "password"} className="form-input pr-10" placeholder="Create password" />
                                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="form-label">Confirm Password *</label>
                                                <div className="relative">
                                                    <input type={showPassword ? "text" : "password"} className="form-input pr-10" placeholder="Confirm password" />
                                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn-primary w-full py-3.5 text-sm">
                                            Register as {current.label} <ArrowRight size={15} />
                                        </button>
                                        <button onClick={() => setView("login")} className="w-full text-xs text-slate-500 hover:text-blue-600 transition-colors">
                                            Already have an account? Login →
                                        </button>
                                    </div>
                                )}

                                {view === "forgot" && (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {otpSent 
                                                    ? "Enter the 6-digit OTP sent to your mobile/email and choose a new password." 
                                                    : "Enter your registered email or mobile number to receive a verification OTP."}
                                            </p>
                                        </div>

                                        {!otpSent ? (
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="form-label">Email / Mobile</label>
                                                    <input className="form-input" placeholder="Enter your email or mobile" />
                                                </div>
                                                <button 
                                                    onClick={handleSendOtp}
                                                    disabled={loading}
                                                    className="btn-primary w-full py-3.5 text-sm"
                                                >
                                                    {loading ? "Sending..." : "Send OTP"} <ArrowRight size={15} />
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
                                                        <button onClick={() => setOtpSent(false)} className="text-[10px] text-blue-600 font-bold hover:underline">Resend</button>
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
                                                <button className="btn-primary w-full py-3.5 text-sm">
                                                    Reset Password <ArrowRight size={15} />
                                                </button>
                                            </motion.div>
                                        )}

                                        <button 
                                            onClick={() => { setView("login"); setOtpSent(false); }} 
                                            className="w-full text-xs text-slate-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                                        >
                                            ← Back to Login
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

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
            <LoginContent />
        </Suspense>
    );
}
