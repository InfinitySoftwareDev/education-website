"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, MapPin, Briefcase, GraduationCap, 
  Settings, Download, Upload, Eye, FileText, CheckCircle,
  Plus, Trash2, Layout, Sparkles, X
} from "lucide-react";
import Link from "next/link";

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

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, footer, .print-hidden, header {
            display: none !important;
          }
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          #resume-document {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      ` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 print:hidden">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">Resume Suite</motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl font-extrabold text-slate-900 mt-2"
            >
              Build Your <span className="text-gradient-blue">Future</span>
            </motion.h1>
            <p className="text-slate-500 mt-2">Upload your existing resume or build a new one using premium templates.</p>
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
            
            {/* 1. Upload Section */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="card p-6 border-dashed border-2 border-blue-200 bg-blue-50/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Upload size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Quick Upload</h3>
                  <p className="text-xs text-slate-500">Already have a resume? Upload it here.</p>
                </div>
              </div>
              
              <div 
                className="relative group cursor-pointer"
                onClick={handleUpload}
              >
                <div className={`border-2 border-dashed rounded-xl p-8 transition-all text-center ${uploading ? 'bg-blue-50 border-blue-400' : 'bg-white border-slate-200 hover:border-blue-400'}`}>
                  {uploading ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-semibold text-blue-600">Processing file...</span>
                    </div>
                  ) : uploadSuccess ? (
                    <div className="flex flex-col items-center gap-2 text-emerald-600">
                      <CheckCircle size={32} />
                      <span className="text-sm font-bold">Resume Uploaded!</span>
                    </div>
                  ) : (
                    <>
                      <FileText size={32} className="mx-auto text-slate-300 mb-3 group-hover:text-blue-500 transition-colors" />
                      <p className="text-sm font-medium text-slate-600">Click or Drag PDF here</p>
                      <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">MAX 5MB (PDF/DOCX)</p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>

            {/* 2. Template Selector */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Layout size={18} className="text-blue-600" />
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Select Template</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "professional", name: "Professional", icon: Briefcase, color: "bg-blue-600" },
                  { id: "modern", name: "Modern Minimal", icon: Sparkles, color: "bg-slate-900" }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTemplate(t.id)}
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      activeTemplate === t.id 
                        ? "border-blue-600 bg-blue-50/50 shadow-sm" 
                        : "border-slate-100 hover:border-blue-200 bg-white"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${t.color} flex items-center justify-center text-white shadow-md`}>
                      <t.icon size={20} />
                    </div>
                    <span className={`text-xs font-bold ${activeTemplate === t.id ? 'text-blue-700' : 'text-slate-500'}`}>
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
              <div id="resume-document" className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[1100px] border border-slate-200 origin-top transform transition-all duration-500 print:shadow-none print:border-none print:rounded-none print:w-full print:absolute print:top-0 print:left-0 print:m-0 print:h-auto">
                
                {/* TEMPLATE: PROFESSIONAL */}
                {activeTemplate === "professional" && (
                  <div className="h-full flex flex-col">
                    {/* Header Banner */}
                    <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16" />
                      <div className="relative z-10">
                        <h2 className="text-4xl font-bold tracking-tight mb-2 uppercase">{formData.name}</h2>
                        <p className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase mb-6">{formData.title}</p>
                        <div className="flex flex-wrap gap-6 text-slate-300 text-xs">
                          <span className="flex items-center gap-2"><Mail size={12} className="text-blue-500" /> {formData.email}</span>
                          <span className="flex items-center gap-2"><Phone size={12} className="text-blue-500" /> {formData.phone}</span>
                          <span className="flex items-center gap-2"><MapPin size={12} className="text-blue-500" /> {formData.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-10 grid grid-cols-12 gap-8 flex-1">
                      {/* Main Info */}
                      <div className="col-span-8 space-y-8">
                        <section>
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.15em] border-b-2 border-slate-100 pb-2 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600" /> Professional Summary
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{formData.summary}</p>
                        </section>
                        
                        <section>
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.15em] border-b-2 border-slate-100 pb-2 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600" /> Experience
                          </h3>
                          <div className="space-y-6">
                            {formData.experience.map(exp => (
                              <div key={exp.id}>
                                <div className="flex justify-between items-start mb-1">
                                  <h4 className="font-bold text-slate-900">{exp.company}</h4>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase">{exp.duration}</span>
                                </div>
                                <p className="text-blue-600 text-xs font-bold mb-2">{exp.role}</p>
                                <p className="text-slate-500 text-xs leading-relaxed">{exp.desc}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>

                      {/* Sidebar */}
                      <div className="col-span-4 space-y-8">
                        <section>
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.15em] border-b-2 border-slate-100 pb-2 mb-4">Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {formData.skills.map(skill => (
                              <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-md border border-slate-100">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </section>
                        
                        <section>
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.15em] border-b-2 border-slate-100 pb-2 mb-4">Education</h3>
                          {formData.education.map(edu => (
                            <div key={edu.id} className="mb-4">
                              <p className="font-bold text-slate-900 text-xs">{edu.degree}</p>
                              <p className="text-slate-500 text-[11px]">{edu.school}</p>
                              <p className="text-blue-600 text-[10px] font-bold mt-1">{edu.year}</p>
                            </div>
                          ))}
                        </section>
                      </div>
                    </div>
                  </div>
                )}

                {/* TEMPLATE: MODERN */}
                {activeTemplate === "modern" && (
                  <div className="p-12 space-y-10">
                    <header className="text-center">
                      <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">{formData.name}</h2>
                      <div className="flex justify-center gap-4 text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                        <span>{formData.email}</span>
                        <span>•</span>
                        <span>{formData.phone}</span>
                        <span>•</span>
                        <span>{formData.location}</span>
                      </div>
                    </header>
                    
                    <div className="w-16 h-1 bg-blue-600 mx-auto" />

                    <div className="max-w-xl mx-auto space-y-10">
                      <section>
                        <p className="text-center text-slate-600 text-sm leading-relaxed italic">&ldquo;{formData.summary}&rdquo;</p>
                      </section>

                      <section className="grid grid-cols-12 gap-6">
                        <div className="col-span-4 text-right">
                          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Experience</h3>
                        </div>
                        <div className="col-span-8 border-l-2 border-slate-100 pl-6 space-y-6">
                          {formData.experience.map(exp => (
                            <div key={exp.id}>
                              <h4 className="font-bold text-slate-900 text-base">{exp.company}</h4>
                              <p className="text-blue-600 text-xs font-bold mb-3">{exp.role} / {exp.duration}</p>
                              <p className="text-slate-500 text-xs leading-relaxed">{exp.desc}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="grid grid-cols-12 gap-6">
                        <div className="col-span-4 text-right">
                          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Expertise</h3>
                        </div>
                        <div className="col-span-8 border-l-2 border-slate-100 pl-6">
                          <div className="flex flex-wrap gap-4">
                            {formData.skills.map(skill => (
                              <span key={skill} className="text-xs font-bold text-slate-800">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                )}

              </div>
              
              {/* Note for Print */}
              <p className="text-center text-[10px] text-slate-400 mt-6 print:hidden uppercase tracking-widest font-bold">
                PRO TIP: Select &apos;Save as PDF&apos; in the print dialog for best results
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
