"use client";
import { Mail, Phone, MapPin, User } from "lucide-react";

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  summary: string;
  experience: Array<{ id: number; company: string; role: string; duration: string; desc: string }>;
  education: Array<{ id: number; school: string; degree: string; year: string }>;
  projects: Array<{ id: number; name: string; link: string; techStack: string; desc: string }>;
  skills: string[];
}

export function ProfessionalTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="h-full flex flex-col bg-white">
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
          <section>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.15em] border-b-2 border-slate-100 pb-2 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" /> Projects
            </h3>
            <div className="space-y-6">
              {formData.projects.map(proj => (
                <div key={proj.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 text-sm">{proj.name}</h4>
                    {proj.link && <span className="text-[10px] font-bold text-blue-600 truncate max-w-40">{proj.link}</span>}
                  </div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-2">{proj.techStack}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-4 space-y-8">
          <section>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.15em] border-b-2 border-slate-100 pb-2 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-md border border-slate-100 uppercase">
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
  );
}

export function ModernTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="p-12 space-y-10 bg-white min-h-full">
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
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Projects</h3>
          </div>
          <div className="col-span-8 border-l-2 border-slate-100 pl-6 space-y-6">
            {formData.projects.map(proj => (
              <div key={proj.id}>
                <h4 className="font-bold text-slate-900 text-base">{proj.name}</h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-blue-600 text-[10px] font-bold uppercase">{proj.techStack}</p>
                  {proj.link && <span className="text-[10px] text-slate-400 truncate max-w-32">{proj.link}</span>}
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{proj.desc}</p>
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
                <span key={skill} className="text-xs font-bold text-slate-800 uppercase">{skill}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function ModernDoubleTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="p-10 flex flex-col h-full bg-white">
      <header className="border-b-4 border-teal-500 pb-6 mb-8">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{formData.name}</h2>
        <p className="text-teal-600 font-bold uppercase tracking-widest text-sm mt-1">{formData.title}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-slate-500 text-[10px] font-bold uppercase">
          <span>{formData.email}</span>
          <span>•</span>
          <span>{formData.phone}</span>
          <span>•</span>
          <span>{formData.location}</span>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-12 flex-1">
        <div className="space-y-8">
          <section>
            <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Experience</h3>
            <div className="space-y-6">
              {formData.experience.map(exp => (
                <div key={exp.id}>
                  <h4 className="font-bold text-slate-900 text-sm">{exp.company}</h4>
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-2">{exp.role} / {exp.duration}</p>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Projects</h3>
            <div className="space-y-6">
              {formData.projects.map(proj => (
                <div key={proj.id}>
                  <h4 className="font-bold text-slate-900 text-sm">{proj.name}</h4>
                  <p className="text-teal-600/60 text-[10px] font-bold uppercase mb-2">{proj.techStack}</p>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{proj.desc}</p>
                  {proj.link && <p className="text-[9px] text-teal-600 underline mt-1">{proj.link}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Summary</h3>
            <p className="text-slate-600 text-[11px] leading-relaxed">{formData.summary}</p>
          </section>
          <section>
            <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black rounded uppercase">
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Education</h3>
            {formData.education.map(edu => (
              <div key={edu.id} className="mb-4">
                <p className="font-bold text-slate-900 text-[11px]">{edu.degree}</p>
                <p className="text-slate-500 text-[10px]">{edu.school} • {edu.year}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export function ATSFriendlyTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="p-12 bg-white text-slate-900 font-sans leading-normal min-h-full">
      <header className="text-center mb-8 border-b border-slate-200 pb-6">
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">{formData.name}</h2>
        <div className="text-sm text-slate-600 space-x-2">
          <span>{formData.email}</span>
          <span>|</span>
          <span>{formData.phone}</span>
          <span>|</span>
          <span>{formData.location}</span>
        </div>
      </header>
      <div className="space-y-6">
        <section>
          <h3 className="text-sm font-bold uppercase border-b border-slate-900 mb-3">Professional Summary</h3>
          <p className="text-sm">{formData.summary}</p>
        </section>
        <section>
          <h3 className="text-sm font-bold uppercase border-b border-slate-900 mb-3">Work Experience</h3>
          <div className="space-y-4">
            {formData.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between font-bold text-sm">
                  <span>{exp.company}</span>
                  <span>{exp.duration}</span>
                </div>
                <div className="italic text-sm mb-1">{exp.role}</div>
                <p className="text-sm text-slate-700">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-sm font-bold uppercase border-b border-slate-900 mb-3">Projects</h3>
          <div className="space-y-4">
            {formData.projects.map(proj => (
              <div key={proj.id}>
                <div className="flex justify-between font-bold text-sm">
                  <span>{proj.name} {proj.link && <span className="font-normal text-xs ml-2 text-slate-500">({proj.link})</span>}</span>
                  <span className="text-xs uppercase">{proj.techStack}</span>
                </div>
                <p className="text-sm text-slate-700">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-sm font-bold uppercase border-b border-slate-900 mb-3">Skills</h3>
          <p className="text-sm text-slate-700 uppercase font-medium">{formData.skills.join(", ")}</p>
        </section>
        <section>
          <h3 className="text-sm font-bold uppercase border-b border-slate-900 mb-3">Education</h3>
          {formData.education.map(edu => (
            <div key={edu.id} className="flex justify-between text-sm">
              <span><strong>{edu.school}</strong> - {edu.degree}</span>
              <span>{edu.year}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export function ExecutiveTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="flex h-full min-h-[1100px] bg-white">
      <div className="w-1/3 bg-slate-900 text-white p-10 flex flex-col">
        <div className="mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-1">{formData.name}</h2>
          <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest">{formData.title}</p>
        </div>
        <div className="space-y-8 flex-1">
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Contact</h3>
            <div className="space-y-3 text-[11px] text-slate-300">
              <p className="flex items-center gap-2"><Mail size={12} className="text-blue-500" /> {formData.email}</p>
              <p className="flex items-center gap-2"><Phone size={12} className="text-blue-500" /> {formData.phone}</p>
              <p className="flex items-center gap-2"><MapPin size={12} className="text-blue-500" /> {formData.location}</p>
            </div>
          </section>
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Expertise</h3>
            <div className="space-y-4">
              {formData.skills.map((skill, i) => (
                <div key={skill}>
                  <div className="flex justify-between text-[10px] font-bold mb-1 uppercase">
                    <span>{skill}</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.max(40, 100 - (i * 10))}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Education</h3>
            {formData.education.map(edu => (
              <div key={edu.id} className="mb-4">
                <p className="font-bold text-white text-[11px]">{edu.degree}</p>
                <p className="text-slate-400 text-[10px]">{edu.school}</p>
                <p className="text-blue-400 text-[10px] font-bold mt-1">{edu.year}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="flex-1 bg-white p-12 overflow-hidden">
        <section className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-300 mb-6">Profile Summary</h3>
          <p className="text-slate-600 text-sm leading-relaxed italic border-l-4 border-blue-500 pl-6">
            &ldquo;{formData.summary}&rdquo;
          </p>
        </section>
        <section>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-300 mb-8">Professional Experience</h3>
          <div className="space-y-10 relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-slate-100" />
            {formData.experience.map(exp => (
              <div key={exp.id} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase">{exp.company}</h4>
                    <p className="text-blue-600 text-[10px] font-bold uppercase mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase">{exp.duration}</span>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-300 mb-8">Featured Projects</h3>
          <div className="space-y-8">
            {formData.projects.map(proj => (
              <div key={proj.id} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase">{proj.name}</h4>
                    <p className="text-blue-500 text-[10px] font-bold uppercase mt-0.5">{proj.techStack}</p>
                  </div>
                  {proj.link && <span className="text-[10px] font-black text-slate-400 uppercase">{proj.link}</span>}
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function CreativeTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="bg-white min-h-full pb-12">
      <div className="h-4 bg-purple-600" />
      <div className="p-12">
        <header className="flex flex-col items-center text-center mb-12">
          <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white">
            <User size={48} />
          </div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">{formData.name}</h2>
          <p className="text-xl font-medium text-slate-500 mb-6">{formData.title}</p>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-purple-600">
            <span>{formData.email}</span>
            <span className="text-slate-200">/</span>
            <span>{formData.phone}</span>
            <span className="text-slate-200">/</span>
            <span>{formData.location}</span>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-8 space-y-12">
            <section>
              <h3 className="text-2xl font-black text-slate-900 mb-6 underline decoration-purple-600 decoration-4 underline-offset-8">About Me</h3>
              <p className="text-slate-600 text-base leading-relaxed">{formData.summary}</p>
            </section>
            <section>
              <h3 className="text-2xl font-black text-slate-900 mb-8 underline decoration-purple-600 decoration-4 underline-offset-8">Experience</h3>
              <div className="space-y-8">
                {formData.experience.map(exp => (
                  <div key={exp.id} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{exp.company}</h4>
                      <span className="text-xs font-bold text-slate-400">{exp.duration}</span>
                    </div>
                    <p className="text-purple-600 font-bold text-sm mb-3">{exp.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-black text-slate-900 mb-8 underline decoration-purple-600 decoration-4 underline-offset-8">Projects</h3>
              <div className="space-y-8">
                {formData.projects.map(proj => (
                  <div key={proj.id} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{proj.name}</h4>
                      {proj.link && <span className="text-xs font-medium text-purple-400 italic">View Project</span>}
                    </div>
                    <p className="text-purple-600 font-bold text-sm mb-3">{proj.techStack}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="col-span-4 space-y-12">
            <section className="bg-slate-50 p-8 rounded-3xl">
              <h3 className="text-lg font-black text-slate-900 mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {formData.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white text-slate-800 text-xs font-bold rounded-xl shadow-sm border border-slate-100 uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            <section className="px-4">
              <h3 className="text-lg font-black text-slate-900 mb-6">Education</h3>
              <div className="space-y-6">
                {formData.education.map(edu => (
                  <div key={edu.id}>
                    <p className="font-bold text-slate-900 text-sm">{edu.degree}</p>
                    <p className="text-slate-500 text-xs mt-1">{edu.school}</p>
                    <p className="text-purple-600 text-[10px] font-black mt-2 uppercase tracking-wider">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ElegantTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="p-16 bg-[#fafafa] min-h-full font-serif pb-24">
      <header className="text-center mb-16 border-b border-slate-200 pb-12">
        <h2 className="text-5xl text-slate-900 mb-4 tracking-tight">{formData.name}</h2>
        <p className="text-lg text-slate-500 italic mb-8 font-sans tracking-wide uppercase text-sm font-bold tracking-[0.3em]">{formData.title}</p>
        <div className="flex justify-center gap-8 text-xs font-sans text-slate-400 uppercase tracking-widest">
          <span>{formData.email}</span>
          <span>•</span>
          <span>{formData.phone}</span>
          <span>•</span>
          <span>{formData.location}</span>
        </div>
      </header>
      <div className="max-w-3xl mx-auto space-y-16">
        <section className="text-center">
          <p className="text-xl text-slate-600 leading-relaxed font-light italic">&ldquo;{formData.summary}&rdquo;</p>
        </section>
        <section>
          <div className="flex items-center gap-6 mb-10">
            <h3 className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-slate-400 whitespace-nowrap">Career History</h3>
            <div className="h-[1px] bg-slate-200 w-full" />
          </div>
          <div className="space-y-12">
            {formData.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-2xl text-slate-900">{exp.company}</h4>
                  <span className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest">{exp.duration}</span>
                </div>
                <p className="text-slate-800 font-sans text-sm font-bold mb-4 uppercase tracking-wider">{exp.role}</p>
                <p className="text-slate-600 text-base leading-relaxed font-sans">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center gap-6 mb-10">
            <h3 className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-slate-400 whitespace-nowrap">Projects</h3>
            <div className="h-[1px] bg-slate-200 w-full" />
          </div>
          <div className="space-y-10">
            {formData.projects.map(proj => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-3">
                  <h4 className="text-2xl text-slate-900">{proj.name}</h4>
                  {proj.link && <span className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-widest">Link Provided</span>}
                </div>
                <p className="text-slate-400 font-sans text-[10px] font-bold mb-4 uppercase tracking-widest">{proj.techStack}</p>
                <p className="text-slate-600 text-base leading-relaxed font-sans italic">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-2 gap-16">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-slate-400 whitespace-nowrap">Core Skills</h3>
              <div className="h-[1px] bg-slate-200 w-full" />
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 font-sans">
              {formData.skills.map(skill => (
                <div key={skill} className="text-sm text-slate-600 flex items-center gap-2 uppercase font-medium">
                  <div className="w-1 h-1 bg-slate-300 rotate-45" /> {skill}
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-slate-400 whitespace-nowrap">Education</h3>
              <div className="h-[1px] bg-slate-200 w-full" />
            </div>
            <div className="space-y-6 font-sans">
              {formData.education.map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-slate-900 text-sm">{edu.degree}</p>
                  <p className="text-slate-500 text-xs mt-1">{edu.school}</p>
                  <p className="text-slate-400 text-[10px] mt-1 font-bold">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function TraditionalTemplate({ formData }: { formData: ResumeData }) {
  return (
    <div className="p-12 bg-white text-slate-900 font-serif leading-relaxed min-h-full pb-24">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{formData.name}</h2>
        <p className="text-sm mb-1">{formData.location} • {formData.phone} • {formData.email}</p>
        {formData.title && <p className="text-sm italic font-bold">{formData.title}</p>}
      </header>
      <div className="space-y-6">
        <section>
          <h3 className="text-sm font-bold uppercase border-b-2 border-slate-900 mb-2">Professional Summary</h3>
          <p className="text-[13px] leading-relaxed text-justify">{formData.summary}</p>
        </section>
        <section>
          <h3 className="text-sm font-bold uppercase border-b-2 border-slate-900 mb-3">Professional Experience</h3>
          <div className="space-y-5">
            {formData.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-bold text-[13px]">
                  <span>{exp.company}</span>
                  <span>{exp.duration}</span>
                </div>
                <div className="flex justify-between items-baseline italic text-[13px] mb-2">
                  <span>{exp.role}</span>
                </div>
                <p className="text-[12px] leading-relaxed text-justify text-slate-800">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-sm font-bold uppercase border-b-2 border-slate-900 mb-3">Projects</h3>
          <div className="space-y-5">
            {formData.projects.map(proj => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline font-bold text-[13px]">
                  <span>{proj.name}</span>
                  <span className="italic font-normal">{proj.techStack}</span>
                </div>
                {proj.link && <p className="text-[11px] text-slate-500 mb-1">{proj.link}</p>}
                <p className="text-[12px] leading-relaxed text-justify text-slate-800">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-1 gap-6">
          <section>
            <h3 className="text-sm font-bold uppercase border-b-2 border-slate-900 mb-2">Skills & Expertise</h3>
            <p className="text-[13px] leading-relaxed">
              <strong>Technical Proficiencies:</strong> {formData.skills.join(", ")}
            </p>
          </section>
          <section>
            <h3 className="text-sm font-bold uppercase border-b-2 border-slate-900 mb-3">Education</h3>
            <div className="space-y-3">
              {formData.education.map(edu => (
                <div key={edu.id} className="flex justify-between items-baseline text-[13px]">
                  <span><strong>{edu.school}</strong>, {edu.degree}</span>
                  <span className="font-bold">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
