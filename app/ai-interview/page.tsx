"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, PhoneOff, MessageSquare, Sparkles, Volume2, ShieldCheck, BrainCircuit, Waves } from "lucide-react";
import Link from "next/link";

export default function AIInterviewPage() {
  const [isCalling, setIsCalling] = useState(false);
  const [status, setStatus] = useState("Ready to start");
  const [transcript, setTranscript] = useState<{ role: string; text: string }[]>([]);
  const [isListening, setIsListening] = useState(false);

  // Mock conversation flow
  const conversation = [
    { role: "ai", text: "Hello! I am your AI Interviewer from TalentConnect India. Can you start by introducing yourself?" },
    { role: "user", text: "Hi, I am a Full Stack Developer with 3 years of experience in React and Node.js." },
    { role: "ai", text: "That sounds great. What is the most challenging project you've worked on recently?" },
    { role: "user", text: "I recently built a real-time collaboration tool using WebSockets and optimized it for 10k concurrent users." },
    { role: "ai", text: "Impressive. How do you handle pressure when deadlines are tight?" }
  ];

  const startCall = () => {
    setIsCalling(true);
    setStatus("Connecting...");
    setTimeout(() => {
      setStatus("On Call with AI Assistant");
      setTranscript([{ role: "ai", text: conversation[0].text }]);
    }, 1500);
  };

  const endCall = () => {
    setIsCalling(false);
    setStatus("Interview Completed");
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.15),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} /> AI Recruitment Suite
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-4"
          >
            AI Voice <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Interviewer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Experience the future of hiring. Let our AI conduct your first-round technical screening through natural voice conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Voice Interface */}
          <div className="lg:col-span-7">
            <motion.div 
              layout
              className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 aspect-square md:aspect-video flex flex-col items-center justify-center relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isCalling ? (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center mb-6 mx-auto border border-blue-500/30">
                      <Volume2 className="w-10 h-10 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Ready for your interview?</h3>
                    <p className="text-slate-400 mb-8 text-sm px-10">Ensure you are in a quiet place with a good microphone connection.</p>
                    <button 
                      onClick={startCall}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-3 mx-auto"
                    >
                      <Mic size={20} /> Start Voice Interview
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex flex-col items-center justify-between"
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2 animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live Connection
                      </div>
                      <p className="text-xs text-slate-500">{status}</p>
                    </div>

                    {/* Voice Wave Animation */}
                    <div className="flex items-center justify-center gap-1.5 h-32">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            height: isListening ? [20, Math.random() * 80 + 20, 20] : [20, 30, 20],
                            opacity: isListening ? 1 : 0.3
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 0.5, 
                            delay: i * 0.05 
                          }}
                          className="w-1.5 rounded-full bg-linear-to-t from-blue-600 to-indigo-400"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setIsListening(!isListening)}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isListening ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                      >
                        {isListening ? <Mic size={24} /> : <MicOff size={24} />}
                      </button>
                      <button 
                        onClick={endCall}
                        className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                      >
                        <PhoneOff size={24} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Transcript / Features Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 overflow-hidden flex flex-col h-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold flex items-center gap-2">
                  <MessageSquare size={16} className="text-blue-400" /> Live Transcript
                </h3>
                <div className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400">Auto-saved</div>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {transcript.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                    <Waves className="w-8 h-8 mb-2" />
                    <p className="text-xs">Transcript will appear here during the call</p>
                  </div>
                ) : (
                  transcript.map((m, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: m.role === 'ai' ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={i} 
                      className={`p-3 rounded-2xl text-xs leading-relaxed ${m.role === 'ai' ? 'bg-blue-500/10 border border-blue-500/10 text-blue-100 self-start mr-8' : 'bg-slate-800 text-slate-300 self-end ml-8'}`}
                    >
                      <span className="block font-black uppercase text-[8px] mb-1 opacity-50">{m.role === 'ai' ? 'Assistant' : 'You'}</span>
                      {m.text}
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4">
                <ShieldCheck className="text-emerald-500 mb-2" size={20} />
                <h4 className="text-xs font-bold mb-1 text-emerald-100">Private & Secure</h4>
                <p className="text-[10px] text-slate-500">End-to-end encrypted voice data</p>
              </div>
              <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-4">
                <BrainCircuit className="text-indigo-500 mb-2" size={20} />
                <h4 className="text-xs font-bold mb-1 text-indigo-100">Smart Analysis</h4>
                <p className="text-[10px] text-slate-500">Real-time tone & skill evaluation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
