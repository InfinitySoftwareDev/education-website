"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Briefcase, 
  Settings, Download, Eye, FileText,
  Plus, Trash2, Layout, Sparkles, X,
  ArrowRight
} from "lucide-react";
import { TemplateSelection } from "./TemplateSelection";
import { 
  ProfessionalTemplate, ModernTemplate, ModernDoubleTemplate, 
  ATSFriendlyTemplate, ExecutiveTemplate, CreativeTemplate,
  TraditionalTemplate 
} from "./Templates";

export function ResumeBuilderMain() {
  const [activeTemplate, setActiveTemplate] = useState("professional");
  const [step, setStep] = useState("select"); // 'select', 'edit', or 'ai-build'
  const [aiStep, setAiStep] = useState(0);
  const [skillInput, setSkillInput] = useState("");

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash !== "#editor") {
        setStep("select");
      } else {
        setStep("edit");
      }
    };
    window.addEventListener("popstate", handlePopState);
    
    // Initial check in case user lands directly on #editor
    handlePopState();
    
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleBackToSelect = () => {
    if (window.location.hash === "#editor") {
      window.history.back(); // This will trigger popstate and setStep("select")
    } else {
      setStep("select");
    }
  };
  
  // Resume Data State
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    title: "Senior Software Engineer",
    summary: "Experienced software engineer with a passion for building scalable web applications. Proficient in React, Node.js, and modern cloud architectures.",
    experience: [
      { id: 1, company: "TechCorp Solutions", role: "Full Stack Developer", duration: "2020 - Present", desc: "Leading development of core product features and mentoring junior developers." }
    ],
    education: [
      { id: 1, school: "University of Mumbai", degree: "B.E. in Computer Science", year: "2019" }
    ],
    projects: [
      { id: 1, name: "AI Talent Connect India", link: "https://github.com/example/job-portal", techStack: "Next.js, Tailwind, OpenAI", desc: "Built a fully functional Talent Connect India with AI voice screening features." }
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const downloadResume = () => {
    window.print();
  };

  const selectTemplate = (id: string) => {
    setActiveTemplate(id);
    if (window.location.hash !== "#editor") {
      window.location.hash = "editor";
    }
    setStep("edit");
  };

  const startAiBuild = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      title: "",
      summary: "",
      experience: [],
      education: [],
      projects: [],
      skills: []
    });
    setStep("ai-build");
    setAiStep(1);
  };

  const handleAiFinish = () => {
    setStep("edit");
    window.location.hash = "editor";
  };

  return (
    <div className="bg-transparent">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4;
            margin: 0 !important;
          }
          nav, footer, .print-hidden, .no-print, .section-label, .btn-primary {
            display: none !important;
          }
          html, body {
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .min-h-screen {
            min-height: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          #resume-document {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            transform: none !important;
            border-radius: 0 !important;
            min-height: 0 !important;
            height: auto !important;
          }
          /* Ensure all parent containers don't interfere */
          .max-w-7xl, .lg\\:col-span-7, .sticky {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            position: static !important;
          }
        }
      ` }} />
      <div className="max-w-7xl mx-auto">
        
        <AnimatePresence mode="wait">
          {step === "select" ? (
            <TemplateSelection key="selection" onSelect={selectTemplate} onAiBuild={startAiBuild} />
          ) : step === "ai-build" ? (
            <div key="ai-build" className="max-w-2xl mx-auto py-20">
              <AnimatePresence mode="wait">
                {aiStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="card p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/20">
                      <Sparkles className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-4">Step 1: Contact Info</h2>
                    <p className="text-slate-500 mb-8">Let's start with your basics. Who are you and how can employers reach you?</p>
                    <div className="space-y-4 max-w-sm mx-auto">
                      <input 
                        type="text" placeholder="Full Name" 
                        value={formData.name || ""} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="form-input text-center"
                      />
                      <input 
                        type="text" placeholder="Job Title (e.g. Senior Manager)" 
                        value={formData.title || ""} onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="form-input text-center"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="email" placeholder="Email Address" 
                          value={formData.email || ""} onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="form-input text-center text-xs"
                        />
                        <input 
                          type="tel" placeholder="Mobile Number" 
                          value={formData.phone || ""} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="form-input text-center text-xs"
                        />
                      </div>
                      <input 
                        type="text" placeholder="Current City (e.g. Mumbai, India)" 
                        value={formData.location || ""} onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="form-input text-center"
                      />
                      <button 
                        disabled={!formData.name || !formData.title || !formData.email || !formData.phone || !formData.location}
                        onClick={() => setAiStep(2)}
                        className="btn-primary w-full py-4 disabled:opacity-50"
                      >
                        Next Step <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {aiStep === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="card p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20">
                      <Briefcase className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-4">Step 2: Experience</h2>
                    <p className="text-slate-500 mb-8">Tell us about your most recent role. Which company was it and what did you achieve?</p>
                    <div className="space-y-4 max-w-sm mx-auto">
                      <input 
                        type="text" placeholder="Company Name" 
                        value={formData.experience[0]?.company || ""}
                        onChange={(e) => {
                          const exp = [...formData.experience];
                          if (exp[0]) exp[0].company = e.target.value;
                          else exp.push({ id: 1, company: e.target.value, role: formData.title, duration: "Present", desc: "" });
                          setFormData({...formData, experience: exp});
                        }}
                        className="form-input text-center"
                      />
                      <textarea 
                        placeholder="I was a [Role] where I [Achievement]..." 
                        rows={3}
                        value={formData.summary || ""}
                        onChange={(e) => {
                          const exp = [...formData.experience];
                          if (exp[0]) exp[0].desc = e.target.value;
                          setFormData({...formData, summary: e.target.value, experience: exp});
                        }}
                        className="form-input text-center"
                      />
                      <button 
                        disabled={!formData.experience[0]?.company || !formData.summary}
                        onClick={() => setAiStep(3)}
                        className="btn-primary w-full py-4"
                      >
                        Almost There <ArrowRight size={16} className="ml-2" />
                      </button>
                      <button onClick={() => setAiStep(1)} className="text-slate-400 text-xs font-bold uppercase tracking-widest block mx-auto">Go Back</button>
                    </div>
                  </motion.div>
                )}

                {aiStep === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="card p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/20">
                      <Settings className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-4">Step 3: Skills</h2>
                    <p className="text-slate-500 mb-8">List your top 5 technical or professional skills (separated by commas).</p>
                    <div className="space-y-4 max-w-sm mx-auto">
                      <input 
                        type="text" placeholder="React, Project Management, Sales..." 
                        value={formData.skills.join(', ')}
                        onChange={(e) => {
                          const skills = e.target.value.split(',').map(s => s.trim()).filter(s => s);
                          setFormData({...formData, skills});
                        }}
                        className="form-input text-center"
                      />
                      <button 
                        disabled={formData.skills.length === 0}
                        onClick={() => setAiStep(4)}
                        className="btn-primary w-full py-4"
                      >
                        Next Step <ArrowRight size={16} className="ml-2" />
                      </button>
                      <button onClick={() => setAiStep(2)} className="text-slate-400 text-xs font-bold uppercase tracking-widest block mx-auto">Go Back</button>
                    </div>
                  </motion.div>
                )}

                {aiStep === 4 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="card p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-600/20">
                      <Eye className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-4">Step 4: Education</h2>
                    <p className="text-slate-500 mb-8">Tell us about your educational background.</p>
                    <div className="space-y-4 max-w-sm mx-auto">
                      <input 
                        type="text" placeholder="University / School Name" 
                        value={formData.education[0]?.school || ""}
                        onChange={(e) => {
                          const edu = [...formData.education];
                          if (edu[0]) edu[0].school = e.target.value;
                          else edu.push({ id: 1, school: e.target.value, degree: "", year: "2024" });
                          setFormData({...formData, education: edu});
                        }}
                        className="form-input text-center"
                      />
                      <input 
                        type="text" placeholder="Degree (e.g. Bachelor of Technology)" 
                        value={formData.education[0]?.degree || ""}
                        onChange={(e) => {
                          const edu = [...formData.education];
                          if (edu[0]) edu[0].degree = e.target.value;
                          else edu.push({ id: 1, school: "", degree: e.target.value, year: "2024" });
                          setFormData({...formData, education: edu});
                        }}
                        className="form-input text-center"
                      />
                      <button 
                        disabled={!formData.education[0]?.school || !formData.education[0]?.degree}
                        onClick={() => setAiStep(5)}
                        className="btn-primary w-full py-4"
                      >
                        Final Step <ArrowRight size={16} className="ml-2" />
                      </button>
                      <button onClick={() => setAiStep(3)} className="text-slate-400 text-xs font-bold uppercase tracking-widest block mx-auto">Go Back</button>
                    </div>
                  </motion.div>
                )}

                {aiStep === 5 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="card p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-600/20">
                      <Layout className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-4">Step 5: Top Project</h2>
                    <p className="text-slate-500 mb-8">Almost done! Tell us about a project you are proud of.</p>
                    <div className="space-y-4 max-w-sm mx-auto">
                      <input 
                        type="text" placeholder="Project Name" 
                        value={formData.projects[0]?.name || ""}
                        onChange={(e) => {
                          const proj = [...formData.projects];
                          if (proj[0]) proj[0].name = e.target.value;
                          else proj.push({ id: 1, name: e.target.value, link: "", techStack: "", desc: "" });
                          setFormData({...formData, projects: proj});
                        }}
                        className="form-input text-center"
                      />
                      <textarea 
                        placeholder="What did you build and what technology did you use?" 
                        rows={3}
                        value={formData.projects[0]?.desc || ""}
                        onChange={(e) => {
                          const proj = [...formData.projects];
                          if (proj[0]) proj[0].desc = e.target.value;
                          setFormData({...formData, projects: proj});
                        }}
                        className="form-input text-center"
                      />
                      <button 
                        onClick={handleAiFinish}
                        className="btn-amber w-full py-4 shadow-xl shadow-amber-500/20"
                      >
                        Generate My Resume <Sparkles size={16} className="ml-2" />
                      </button>
                      <button onClick={() => setAiStep(4)} className="text-slate-400 text-xs font-bold uppercase tracking-widest block mx-auto">Go Back</button>
                    </div>
                  </motion.div>
                )}

                {aiStep === 5 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="card p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-600/20">
                      <Layout className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-4">Step 5: Top Project</h2>
                    <p className="text-slate-500 mb-8">Almost done! Tell us about a project you are proud of.</p>
                    <div className="space-y-4 max-w-sm mx-auto">
                      <input 
                        type="text" placeholder="Project Name" 
                        value={formData.projects[0]?.name || ""}
                        onChange={(e) => {
                          const proj = [...formData.projects];
                          if (proj[0]) proj[0].name = e.target.value;
                          else proj.push({ id: 1, name: e.target.value, link: "", techStack: "", desc: "" });
                          setFormData({...formData, projects: proj});
                        }}
                        className="form-input text-center"
                      />
                      <textarea 
                        placeholder="What did you build and what technology did you use?" 
                        rows={3}
                        value={formData.projects[0]?.desc || ""}
                        onChange={(e) => {
                          const proj = [...formData.projects];
                          if (proj[0]) proj[0].desc = e.target.value;
                          setFormData({...formData, projects: proj});
                        }}
                        className="form-input text-center"
                      />
                      <button 
                        onClick={handleAiFinish}
                        className="btn-amber w-full py-4 shadow-xl shadow-amber-500/20"
                      >
                        Generate My Resume <Sparkles size={16} className="ml-2" />
                      </button>
                      <button onClick={() => setAiStep(4)} className="text-slate-400 text-xs font-bold uppercase tracking-widest block mx-auto">Go Back</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div 
              key="editor"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 print:hidden">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <button 
                      onClick={handleBackToSelect}
                      className="text-blue-600 hover:text-blue-700 font-bold text-xs flex items-center gap-1 uppercase tracking-wider transition-colors"
                    >
                      <X size={14} className="rotate-45" /> Change Template
                    </button>
                    <span className="text-slate-300">|</span>
                    <span className="section-label mb-0!">Resume Suite</span>
                  </div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="font-heading text-4xl font-extrabold text-slate-900"
                  >
                    Build Your <span className="text-gradient-blue">Future</span>
                  </motion.h1>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={downloadResume}
                    className="btn-primary flex items-center gap-2 px-6 py-3 shadow-lg shadow-blue-600/20"
                  >
                    <Download size={18} /> Download PDF
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Left Column: Controls & Forms */}
                <div className="lg:col-span-5 space-y-6 print:hidden">
                  
                  {/* Template Selector - Updated to be more compact or integrated */}
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <Layout size={18} className="text-blue-600" />
                        <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Quick Switch</h3>
                      </div>
                      <button 
                        onClick={handleBackToSelect}
                        className="text-xs font-bold text-blue-600 hover:underline"
                      >
                        All Templates
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 max-h-300px overflow-y-auto pr-2 custom-scrollbar">
                      {[
                        { id: "professional", name: "Professional", icon: Briefcase, color: "bg-slate-900" },
                        { id: "modern", name: "Modern Minimal", icon: Sparkles, color: "bg-blue-600" },
                        { id: "modern-double", name: "Modern Double", icon: Layout, color: "bg-teal-600" },
                        { id: "executive", name: "Executive", icon: User, color: "bg-slate-900" },
                        { id: "creative", name: "Creative", icon: Sparkles, color: "bg-purple-600" },
                        { id: "ats-friendly", name: "ATS Optimized", icon: FileText, color: "bg-slate-500" },
                        { id: "traditional", name: "Traditional", icon: FileText, color: "bg-slate-800" }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setActiveTemplate(t.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                            activeTemplate === t.id 
                              ? "border-blue-600 bg-blue-50/50 shadow-sm" 
                              : "border-slate-100 hover:border-blue-200 bg-white"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg ${t.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                            <t.icon size={16} />
                          </div>
                          <span className={`text-[10px] font-black text-left leading-tight ${activeTemplate === t.id ? 'text-blue-700' : 'text-slate-500'} uppercase tracking-tighter`}>
                            {t.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Data Form */}
                  <div className="card p-6 space-y-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings size={18} className="text-blue-600" />
                      <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Edit Information</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Professional Title</label>
                        <input 
                          type="text" 
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-sm font-medium"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 transition-all outline-none text-sm font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Phone</label>
                          <input 
                            type="text" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 transition-all outline-none text-sm font-medium"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Location</label>
                        <input 
                          type="text" 
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g. Mumbai, India"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 transition-all outline-none text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Professional Summary</label>
                        <textarea 
                          name="summary"
                          value={formData.summary}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 transition-all outline-none text-sm font-medium resize-none"
                        />
                      </div>

                      {/* SKILLS EDIT */}
                      <div className="pt-4 border-t border-slate-100">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Skills</label>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {formData.skills.map((skill, index) => (
                            <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">
                              {skill}
                              <button 
                                onClick={() => setFormData(prev => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }))}
                                className="hover:text-red-500"
                              >
                                <X size={12} />
                              </button>
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="Add skill (e.g. Java)" 
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                const val = skillInput.trim();
                                if (val) {
                                  setFormData(prev => ({ ...prev, skills: [...prev.skills, val] }));
                                  setSkillInput("");
                                }
                              }
                            }}
                            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-400"
                          />
                          <button 
                            onClick={() => {
                              const val = skillInput.trim();
                              if (val) {
                                setFormData(prev => ({ ...prev, skills: [...prev.skills, val] }));
                                setSkillInput("");
                              }
                            }}
                            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>

                      {/* EXPERIENCE EDIT */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Experience</label>
                          <button 
                            onClick={() => setFormData(prev => ({ 
                              ...prev, 
                              experience: [...prev.experience, { id: Date.now(), company: "New Company", role: "Your Role", duration: "2024", desc: "Job description here" }] 
                            }))}
                            className="text-blue-600 text-[10px] font-bold uppercase hover:underline"
                          >
                            + Add Experience
                          </button>
                        </div>
                        <div className="space-y-4">
                          {formData.experience.map((exp, index) => (
                            <div key={exp.id} className="p-3 bg-slate-50 rounded-xl relative group">
                              <button 
                                onClick={() => setFormData(prev => ({ ...prev, experience: prev.experience.filter((_, i) => i !== index) }))}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-white shadow-md rounded-full flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 size={12} />
                              </button>
                              <input 
                                value={exp.company}
                                onChange={(e) => {
                                  const newExp = [...formData.experience];
                                  newExp[index].company = e.target.value;
                                  setFormData(prev => ({ ...prev, experience: newExp }));
                                }}
                                className="w-full bg-transparent font-bold text-slate-800 text-sm mb-1 outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                placeholder="Company Name"
                              />
                              <div className="flex gap-2">
                                <input 
                                  value={exp.role}
                                  onChange={(e) => {
                                    const newExp = [...formData.experience];
                                    newExp[index].role = e.target.value;
                                    setFormData(prev => ({ ...prev, experience: newExp }));
                                  }}
                                  className="flex-1 bg-transparent text-slate-500 text-xs mb-1 outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                  placeholder="Role"
                                />
                                <input 
                                  value={exp.duration}
                                  onChange={(e) => {
                                    const newExp = [...formData.experience];
                                    newExp[index].duration = e.target.value;
                                    setFormData(prev => ({ ...prev, experience: newExp }));
                                  }}
                                  className="w-24 bg-transparent text-slate-400 text-[10px] font-bold text-right outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                  placeholder="2020-2024"
                                />
                              </div>
                              <textarea 
                                value={exp.desc}
                                onChange={(e) => {
                                  const newExp = [...formData.experience];
                                  newExp[index].desc = e.target.value;
                                  setFormData(prev => ({ ...prev, experience: newExp }));
                                }}
                                rows={2}
                                className="w-full bg-transparent text-slate-500 text-xs mt-2 outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400 resize-none"
                                placeholder="Briefly describe your responsibilities..."
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* EDUCATION EDIT */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Education</label>
                          <button 
                            onClick={() => setFormData(prev => ({ 
                              ...prev, 
                              education: [...prev.education, { id: Date.now(), school: "University Name", degree: "Degree", year: "2024" }] 
                            }))}
                            className="text-blue-600 text-[10px] font-bold uppercase hover:underline"
                          >
                            + Add Education
                          </button>
                        </div>
                        <div className="space-y-4">
                          {formData.education.map((edu, index) => (
                            <div key={edu.id} className="p-3 bg-slate-50 rounded-xl relative group">
                              <button 
                                onClick={() => setFormData(prev => ({ ...prev, education: prev.education.filter((_, i) => i !== index) }))}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-white shadow-md rounded-full flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 size={12} />
                              </button>
                              <input 
                                value={edu.degree}
                                onChange={(e) => {
                                  const newEdu = [...formData.education];
                                  newEdu[index].degree = e.target.value;
                                  setFormData(prev => ({ ...prev, education: newEdu }));
                                }}
                                className="w-full bg-transparent font-bold text-slate-800 text-sm mb-1 outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                placeholder="Degree"
                              />
                              <div className="flex gap-2">
                                <input 
                                  value={edu.school}
                                  onChange={(e) => {
                                    const newEdu = [...formData.education];
                                    newEdu[index].school = e.target.value;
                                    setFormData(prev => ({ ...prev, education: newEdu }));
                                  }}
                                  className="flex-1 bg-transparent text-slate-500 text-xs outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                  placeholder="School/University"
                                />
                                <input 
                                  value={edu.year}
                                  onChange={(e) => {
                                    const newEdu = [...formData.education];
                                    newEdu[index].year = e.target.value;
                                    setFormData(prev => ({ ...prev, education: newEdu }));
                                  }}
                                  className="w-16 bg-transparent text-blue-600 text-[10px] font-bold text-right outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                  placeholder="2024"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* PROJECTS EDIT */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Projects</label>
                          <button 
                            onClick={() => setFormData(prev => ({ 
                              ...prev, 
                              projects: [...prev.projects, { id: Date.now(), name: "Project Name", link: "https://...", techStack: "React, etc.", desc: "Project description & Date" }] 
                            }))}
                            className="text-blue-600 text-[10px] font-bold uppercase hover:underline"
                          >
                            + Add Project
                          </button>
                        </div>
                        <div className="space-y-4">
                          {formData.projects.map((proj, index) => (
                            <div key={proj.id} className="p-3 bg-slate-50 rounded-xl relative group">
                              <button 
                                onClick={() => setFormData(prev => ({ ...prev, projects: prev.projects.filter((_, i) => i !== index) }))}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-white shadow-md rounded-full flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 size={12} />
                              </button>
                              <div className="grid grid-cols-2 gap-2 mb-2">
                                <input 
                                  value={proj.name}
                                  onChange={(e) => {
                                    const newProj = [...formData.projects];
                                    newProj[index].name = e.target.value;
                                    setFormData(prev => ({ ...prev, projects: newProj }));
                                  }}
                                  className="w-full bg-transparent font-bold text-slate-800 text-sm outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                  placeholder="Project Name"
                                />
                                <input 
                                  value={proj.link}
                                  onChange={(e) => {
                                    const newProj = [...formData.projects];
                                    newProj[index].link = e.target.value;
                                    setFormData(prev => ({ ...prev, projects: newProj }));
                                  }}
                                  className="w-full bg-transparent text-blue-500 text-[10px] font-medium outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                  placeholder="Project Link (URL)"
                                />
                              </div>
                              <input 
                                value={proj.techStack}
                                onChange={(e) => {
                                  const newProj = [...formData.projects];
                                  newProj[index].techStack = e.target.value;
                                  setFormData(prev => ({ ...prev, projects: newProj }));
                                }}
                                className="w-full bg-transparent text-slate-500 text-[10px] font-bold uppercase mb-2 outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400"
                                placeholder="Tech Stack (e.g. React, Node.js)"
                              />
                              <textarea 
                                value={proj.desc}
                                onChange={(e) => {
                                  const newProj = [...formData.projects];
                                  newProj[index].desc = e.target.value;
                                  setFormData(prev => ({ ...prev, projects: newProj }));
                                }}
                                rows={2}
                                className="w-full bg-transparent text-slate-500 text-xs mt-1 outline-none border-b border-transparent hover:border-slate-200 focus:border-blue-400 resize-none"
                                placeholder="Description and Date..."
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column: Live Preview */}
                <div className="lg:col-span-7 print:col-span-12">
                  <div className="sticky top-24">
                    <div className="flex items-center justify-between mb-4 print:hidden">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Eye size={16} />
                        <span className="text-sm font-semibold uppercase tracking-wider text-[10px]">Live Preview</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      </div>
                    </div>

                    {/* Resume Document Wrapper */}
                    <div id="resume-document" className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-275 border border-slate-200 origin-top transform transition-all duration-500 print:shadow-none print:border-none print:rounded-none print:w-full print:absolute print:top-0 print:left-0 print:m-0 print:h-auto">
                      
                      {/* TEMPLATE RENDERING */}
                      {activeTemplate === "professional" && <ProfessionalTemplate formData={formData} />}
                      {activeTemplate === "modern" && <ModernTemplate formData={formData} />}
                      {activeTemplate === "modern-double" && <ModernDoubleTemplate formData={formData} />}
                      {activeTemplate === "ats-friendly" && <ATSFriendlyTemplate formData={formData} />}
                      {activeTemplate === "executive" && <ExecutiveTemplate formData={formData} />}
                      {activeTemplate === "creative" && <CreativeTemplate formData={formData} />}
                      {activeTemplate === "traditional" && <TraditionalTemplate formData={formData} />}

                    </div>
                    
                    {/* Note for Print */}
                    <p className="text-center text-[10px] text-slate-400 mt-6 print:hidden uppercase tracking-widest font-bold">
                      PRO TIP: Select &apos;Save as PDF&apos; in the print dialog for best results
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
