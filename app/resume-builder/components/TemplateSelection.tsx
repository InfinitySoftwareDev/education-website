"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface TemplateSelectionProps {
  onSelect: (id: string) => void;
  onAiBuild: () => void;
}

const templates = [
  {
    id: "professional",
    name: "The Professional",
    description:
      "Classic structure designed for corporate and executive roles. High readability and authority.",
    color: "blue",
    borderColor: "group-hover:border-blue-500",
    preview: (
      <div className="bg-white h-full w-full rounded shadow-2xl origin-top transform scale-[0.8] flex flex-col">
        <div className="bg-slate-900 p-4 h-1/4">
          <div className="h-4 w-1/2 bg-white/20 rounded mb-2"></div>
          <div className="h-2 w-1/4 bg-blue-400/40 rounded"></div>
        </div>
        <div className="p-4 flex gap-4 flex-1">
          <div className="flex-1 space-y-2">
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
          </div>
          <div className="w-1/4 space-y-2">
            <div className="h-2 w-full bg-blue-50 rounded"></div>
            <div className="h-2 w-full bg-blue-50 rounded"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "modern",
    name: "Modern Minimal",
    description:
      "Clean, minimalist approach for tech, creative, and startup environments. Focus on impact.",
    color: "slate",
    borderColor: "group-hover:border-slate-900",
    preview: (
      <div className="bg-white h-full w-full rounded shadow-2xl origin-top transform scale-[0.8] flex flex-col p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="h-6 w-1/2 bg-slate-900/10 mx-auto rounded"></div>
          <div className="h-2 w-1/3 bg-blue-500/20 mx-auto rounded"></div>
        </div>
        <div className="w-8 h-1 bg-blue-500 mx-auto"></div>
        <div className="space-y-3">
          <div className="h-2 w-full bg-slate-50 rounded"></div>
          <div className="h-2 w-full bg-slate-50 rounded"></div>
          <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
        </div>
      </div>
    ),
  },
  {
    id: "modern-double",
    name: "Modern Double",
    description:
      "Balanced two-column layout with high content density. Perfect for experienced mid-level pros.",
    color: "teal",
    borderColor: "group-hover:border-teal-500",
    preview: (
      <div className="bg-white h-full w-full rounded shadow-2xl origin-top transform scale-[0.8] flex flex-col">
        <div className="p-4 border-b-2 border-teal-500">
          <div className="h-4 w-1/3 bg-slate-900/10 rounded mb-1"></div>
          <div className="h-2 w-1/4 bg-teal-500/20 rounded"></div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-4 flex-1">
          <div className="space-y-2">
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-teal-50/50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "executive",
    name: "Executive Premium",
    description:
      "High-contrast design for senior leadership. Features visual skill bars and profile emphasis.",
    color: "blue",
    borderColor: "group-hover:border-blue-600",
    preview: (
      <div className="bg-white h-full w-full rounded shadow-2xl origin-top transform scale-[0.8] flex">
        <div className="w-1/3 bg-slate-900 h-full p-4 space-y-4">
          <div className="h-4 w-full bg-white/10 rounded"></div>
          <div className="space-y-2">
            <div className="h-1 w-full bg-blue-500/40 rounded"></div>
            <div className="h-1 w-full bg-blue-500/40 rounded"></div>
          </div>
        </div>
        <div className="flex-1 p-6 space-y-4">
          <div className="h-2 w-1/4 bg-slate-100 rounded"></div>
          <div className="h-8 w-full bg-slate-50 rounded border-l-4 border-blue-500"></div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "creative",
    name: "Creative Brand",
    description:
      "Bold, character-driven design for creatives and startups. Features a prominent profile area.",
    color: "purple",
    borderColor: "group-hover:border-purple-600",
    preview: (
      <div className="bg-white h-full w-full rounded shadow-2xl origin-top transform scale-[0.8] flex flex-col">
        <div className="h-2 bg-purple-600 w-full"></div>
        <div className="p-6 flex flex-col items-center space-y-3">
          <div className="w-12 h-12 bg-slate-100 rounded-xl border-2 border-slate-50 flex items-center justify-center">
            <div className="w-6 h-6 bg-purple-200 rounded-full"></div>
          </div>
          <div className="h-4 w-1/2 bg-slate-900/10 rounded"></div>
          <div className="h-2 w-1/3 bg-purple-500/10 rounded"></div>
        </div>
        <div className="px-6 grid grid-cols-12 gap-4">
          <div className="col-span-8 space-y-2">
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
          </div>
          <div className="col-span-4 bg-slate-50 rounded-xl h-16"></div>
        </div>
      </div>
    ),
  },
  {
    id: "ats-friendly",
    name: "ATS Optimized",
    description:
      "Ultra-simple, text-first layout guaranteed to pass any Applicant Tracking System.",
    color: "slate",
    borderColor: "group-hover:border-slate-400",
    preview: (
      <div className="bg-white h-full w-full rounded shadow-2xl origin-top transform scale-[0.8] p-8 space-y-6">
        <div className="text-center border-b border-slate-100 pb-4">
          <div className="h-4 w-1/2 bg-slate-900/20 mx-auto rounded"></div>
        </div>
        <div className="space-y-4">
          <div className="h-1 w-full bg-slate-900/10 rounded"></div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "traditional",
    name: "Traditional Ivy",
    description:
      "Standard academic/federal format. High information density and zero distractions.",
    color: "slate",
    borderColor: "group-hover:border-slate-900",
    preview: (
      <div className="bg-white h-full w-full rounded shadow-2xl origin-top transform scale-[0.8] p-8 space-y-4">
        <div className="text-center mb-4">
          <div className="h-4 w-1/3 bg-slate-900/20 mx-auto rounded mb-1"></div>
          <div className="h-2 w-1/2 bg-slate-400/10 mx-auto rounded"></div>
        </div>
        <div className="space-y-3">
          <div className="h-0.5 w-full bg-slate-900/20"></div>
          <div className="space-y-1">
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
            <div className="h-2 w-full bg-slate-50 rounded"></div>
          </div>
        </div>
      </div>
    ),
  },
];

export function TemplateSelection({ onSelect, onAiBuild }: TemplateSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12"
    >
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="section-label mb-4 inline-block tracking-[0.3em]"
        >
          Design Your Career
        </motion.span>
        <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-6">
          Choose Your <span className="text-gradient-blue">Canvas</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
          Select a professionally crafted template to get started. You can
          always switch templates later while keeping your data.
        </p>

        {/* AI Build Banner */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-3xl mx-auto bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-left relative overflow-hidden shadow-2xl shadow-blue-600/30 group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/10 transition-colors" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">New Feature</span>
              </div>
              <h2 className="text-2xl font-heading font-black text-white mb-2">Build with AI Assistant</h2>
              <p className="text-blue-100 text-sm">Answer 4 simple questions and let our AI generate a professional resume for you in seconds.</p>
            </div>
            <button 
              onClick={onAiBuild}
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
            >
              Start AI Build <Sparkles size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {templates.map((template, idx) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.05 } }}
            whileHover={{ y: -8 }}
            onClick={() => onSelect(template.id)}
            className="group cursor-pointer"
          >
            <div
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-transparent transition-all duration-500 ${template.borderColor}`}
            >
              <div className="h-80 bg-slate-50 relative overflow-hidden p-4">
                {template.preview}
                <div
                  className={`absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center`}
                >
                  <div className="bg-white text-slate-900 font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Use Template
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-slate-50">
                <h3 className="text-lg font-black text-slate-900 mb-1 leading-tight">
                  {template.name}
                </h3>
                <p className="text-slate-400 text-[10px] leading-relaxed font-medium line-clamp-2 uppercase tracking-tighter">
                  {template.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
