"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, MapPin, Briefcase, GraduationCap, 
  Settings, Download, Upload, Eye, FileText, CheckCircle,
  Plus, Trash2, Layout, Sparkles, X
} from "lucide-react";
import Link from "next/link";
import { TemplateSelection } from "./components/TemplateSelection";
import { 
  ProfessionalTemplate, ModernTemplate, ModernDoubleTemplate, 
  ATSFriendlyTemplate, ExecutiveTemplate, CreativeTemplate,
  ElegantTemplate, TraditionalTemplate 
} from "./components/Templates";

/* ── Variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ResumeBuilder() {
  const [activeTemplate, setActiveTemplate] = useState("professional");
  const [step, setStep] = useState("select"); // 'select' or 'edit'
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
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
      { id: 1, name: "AI Job Portal", link: "https://github.com/example/job-portal", techStack: "Next.js, Tailwind, OpenAI", desc: "Built a fully functional job portal with AI voice screening features." }
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 2000);
  };

  const downloadResume = () => {
    window.print();
  };

  const selectTemplate = (id: string) => {
    setActiveTemplate(id);
    setStep("edit");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {step === "select" ? (
            <TemplateSelection key="selection" onSelect={selectTemplate} />
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
                      onClick={() => setStep("select")}
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
                        onClick={() => setStep("select")}
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
                        { id: "elegant", name: "Elegant", icon: GraduationCap, color: "bg-amber-600" },
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
                            id="skillInput"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                const val = (e.target as HTMLInputElement).value;
                                if (val) {
                                  setFormData(prev => ({ ...prev, skills: [...prev.skills, val] }));
                                  (e.target as HTMLInputElement).value = '';
                                }
                              }
                            }}
                            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-400"
                          />
                          <button 
                            onClick={() => {
                              const input = document.getElementById('skillInput') as HTMLInputElement;
                              if (input.value) {
                                setFormData(prev => ({ ...prev, skills: [...prev.skills, input.value] }));
                                input.value = '';
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
                      {activeTemplate === "elegant" && <ElegantTemplate formData={formData} />}
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
