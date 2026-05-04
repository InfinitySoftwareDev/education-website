"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, PhoneOff, MessageSquare, Sparkles, Volume2, ShieldCheck, PhoneCall, Waves, Bot, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

// Mock calling simulation flow
const callingFlow = [
  { role: "ai", text: "Initiating call to candidate: Rahul Sharma..." },
  { role: "ai", text: "Connected. 'Hello, this is the AI assistant from Talent Connect India. Are you still looking for a Full Stack Developer role?'" },
  { role: "user", text: "Yes, I am interested." },
  { role: "ai", text: "'Great. Do you have experience with React and Node.js?'" },
  { role: "user", text: "Yes, I have 3 years of experience." },
  { role: "ai", text: "'Perfect. I will mark you as an interested candidate and transfer your profile to the HR team. Have a great day!'" }
];

export default function AICallingPage() {
  const [isCalling, setIsCalling] = useState(false);
  const [status, setStatus] = useState("System Ready");
  const [transcript, setTranscript] = useState<{ role: string; text: string }[]>([]);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startDemo = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCalling(true);
    setStatus("Initiating AI Outreach...");
    setTranscript([]);
    let step = 0;
    
    timerRef.current = setInterval(() => {
      if (step < callingFlow.length) {
        const currentMessage = callingFlow[step];
        setTranscript(prev => [...prev, currentMessage]);
        setIsActive(currentMessage.role === 'ai');
        step++;
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setStatus("Call Campaign Completed");
        setIsActive(false);
      }
    }, 2000);
  };

  const stopDemo = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCalling(false);
    setStatus("System Ready");
    setTranscript([]);
    setIsActive(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Zap size={14} className="fill-blue-400" /> Proprietary AI Technology
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-heading font-extrabold tracking-tight mb-4"
          >
            AI Auto-Calling <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">System</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Stop manual calling. Our AI dials thousands of verified candidates, screens them for interest, and delivers hot leads directly to your dashboard.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Simulation Console */}
          <div className="lg:col-span-7">
            <motion.div 
              layout
              className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${isCalling ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`} />
                  <span className="text-xs font-bold uppercase tracking-tighter text-slate-400">{status}</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-12">
                <AnimatePresence mode="wait">
                  {!isCalling ? (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center"
                    >
                      <div className="relative mb-8">
                        <div className="w-24 h-24 rounded-3xl bg-blue-600/20 flex items-center justify-center mx-auto border border-blue-500/30 transform rotate-12">
                          <PhoneCall className="w-10 h-10 text-blue-500 -rotate-12" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center border-4 border-[#0B1120]">
                          <Bot size={14} className="text-slate-900" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Start Call Simulation</h3>
                      <p className="text-slate-400 mb-8 text-sm px-10">See how our AI agent interacts with candidates in real-time.</p>
                      <button 
                        onClick={startDemo}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-3 mx-auto"
                      >
                        <Zap size={18} /> Launch AI Campaign
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="active"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full flex flex-col items-center"
                    >
                      {/* Visualizer */}
                      <div className="flex items-center justify-center gap-2 h-24 mb-12">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              height: isActive ? [15, Math.random() * 60 + 15, 15] : [15, 20, 15],
                              opacity: isActive ? 1 : 0.3
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 0.4, 
                              delay: i * 0.05 
                            }}
                            className="w-2 rounded-full bg-linear-to-t from-blue-600 to-indigo-400"
                          />
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-8 w-full max-w-md mb-12">
                        <div className="text-center">
                          <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Success Rate</p>
                          <p className="text-xl font-black text-emerald-400">94%</p>
                        </div>
                        <div className="text-center border-x border-white/5">
                          <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Calls/Min</p>
                          <p className="text-xl font-black text-blue-400">120</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Hot Leads</p>
                          <p className="text-xl font-black text-amber-400">18</p>
                        </div>
                      </div>

                      <button 
                        onClick={stopDemo}
                        className="bg-red-500/10 text-red-500 border border-red-500/20 px-8 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all flex items-center gap-2"
                      >
                        <PhoneOff size={18} /> Terminate Campaign
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl">
                <CheckCircle2 className="text-emerald-500 mb-3" size={24} />
                <h4 className="font-bold mb-2">Interest Verification</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Our AI confirms candidate availability and interest before you spend time interviewing.</p>
              </div>
              <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl">
                <ShieldCheck className="text-blue-500 mb-3" size={24} />
                <h4 className="font-bold mb-2">Verified Database</h4>
                <p className="text-xs text-slate-500 leading-relaxed">We only call candidates from our OTP-verified database, ensuring 100% connectivity.</p>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 h-[600px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold flex items-center gap-2">
                  <MessageSquare size={16} className="text-blue-400" /> AI Activity Log
                </h3>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded">Real-time</span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {transcript.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                    <Waves className="w-10 h-10 mb-4" />
                    <p className="text-xs font-medium">Outreach log will appear here</p>
                  </div>
                ) : (
                  transcript.map((m, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={i} 
                      className={`p-4 rounded-2xl text-xs leading-relaxed ${m?.role === 'ai' ? 'bg-blue-500/10 border border-blue-500/10 text-blue-100' : 'bg-slate-800/50 text-slate-400 border border-white/5'}`}
                    >
                      <div className="flex items-center gap-2 mb-2 opacity-50">
                        {m?.role === 'ai' ? <Bot size={12} /> : <Volume2 size={12} />}
                        <span className="font-black uppercase text-[8px] tracking-widest">{m?.role === 'ai' ? 'AI Agent' : 'Candidate'}</span>
                      </div>
                      {m?.text}
                    </motion.div>
                  ))
                )}
              </div>

              {isCalling && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                          className="h-full w-1/3 bg-blue-500/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
