"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { Plus, Pencil, Trash2, Save, X, HelpCircle, Briefcase, UserCircle, ExternalLink } from "lucide-react";
import { recruiterFaqs as defaultRecruiterFaqs, jobseekerFaqs as defaultJobseekerFaqs } from "@/lib/data/faqs";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  q: string;
  a: string;
};

type FAQData = {
  recruiter: FAQ[];
  jobseeker: FAQ[];
};

export default function AdminFaqPage() {
  const [faqs, setFaqs] = useState<FAQData>({
    recruiter: defaultRecruiterFaqs,
    jobseeker: defaultJobseekerFaqs,
  });
  const [activeTab, setActiveTab] = useState<"recruiter" | "jobseeker">("recruiter");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newFaq, setNewFaq] = useState<FAQ>({ q: "", a: "" });
  const [editFaq, setEditFaq] = useState<FAQ>({ q: "", a: "" });

  useEffect(() => {
    const savedFaqs = localStorage.getItem("admin_faqs");
    if (savedFaqs) {
      try {
        setFaqs(JSON.parse(savedFaqs));
      } catch (e) {
        console.error("Failed to parse FAQs from localStorage", e);
      }
    }
  }, []);

  const saveToLocalStorage = (updatedFaqs: FAQData) => {
    localStorage.setItem("admin_faqs", JSON.stringify(updatedFaqs));
    setFaqs(updatedFaqs);
  };

  const handleAddFaq = () => {
    if (!newFaq.q || !newFaq.a) return;
    const updated = {
      ...faqs,
      [activeTab]: [...faqs[activeTab], newFaq],
    };
    saveToLocalStorage(updated);
    setNewFaq({ q: "", a: "" });
    setIsAdding(false);
  };

  const handleDeleteFaq = (index: number) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    const updatedList = [...faqs[activeTab]];
    updatedList.splice(index, 1);
    const updated = {
      ...faqs,
      [activeTab]: updatedList,
    };
    saveToLocalStorage(updated);
  };

  const handleStartEdit = (index: number) => {
    setIsEditing(index);
    setEditFaq(faqs[activeTab][index]);
  };

  const handleSaveEdit = (index: number) => {
    const updatedList = [...faqs[activeTab]];
    updatedList[index] = editFaq;
    const updated = {
      ...faqs,
      [activeTab]: updatedList,
    };
    saveToLocalStorage(updated);
    setIsEditing(null);
  };

  return (
    <DashboardLayout role="admin" title="FAQ Management">
      <div className="max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-slate-500 text-sm max-w-2xl">
              Manage the questions and answers displayed on the public home page.

            </p>
          </div>
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Plus size={18} /> Add New FAQ
          </button>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 relative overflow-hidden">
            <button
              onClick={() => setActiveTab("recruiter")}
              className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === "recruiter" ? "text-blue-700" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <Briefcase size={16} /> For Employers
              {activeTab === "recruiter" && (
                <motion.div
                  layoutId="adminTabBg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-100"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("jobseeker")}
              className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === "jobseeker" ? "text-emerald-700" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <UserCircle size={16} /> For Job Seekers
              {activeTab === "jobseeker" && (
                <motion.div
                  layoutId="adminTabBg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-100"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-blue-900 flex items-center gap-2">
                    <Plus size={18} /> Add New {activeTab === "recruiter" ? "Employer" : "Job Seeker"} FAQ
                  </h3>
                  <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600">
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-700 uppercase tracking-wider mb-1.5">Question</label>
                    <input
                      type="text"
                      value={newFaq.q}
                      onChange={(e) => setNewFaq({ ...newFaq, q: e.target.value })}
                      placeholder="e.g., How do I apply for jobs?"
                      className="w-full bg-white border border-blue-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-700 uppercase tracking-wider mb-1.5">Answer</label>
                    <textarea
                      value={newFaq.a}
                      onChange={(e) => setNewFaq({ ...newFaq, a: e.target.value })}
                      placeholder="Enter the detailed answer here..."
                      rows={3}
                      className="w-full bg-white border border-blue-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                    />
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={() => setIsAdding(false)}
                      className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddFaq}
                      disabled={!newFaq.q || !newFaq.a}
                      className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-blue-500/20"
                    >
                      Add FAQ
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {faqs[activeTab].map((faq, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`bg-white rounded-2xl border-2 transition-all p-5 ${isEditing === index ? "border-blue-400 shadow-lg ring-4 ring-blue-500/5" : "border-slate-100 hover:border-slate-200"
                  }`}
              >
                {isEditing === index ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Editing FAQ #{index + 1}</span>
                      <button onClick={() => setIsEditing(null)} className="text-slate-400 hover:text-slate-600">
                        <X size={18} />
                      </button>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={editFaq.q}
                        onChange={(e) => setEditFaq({ ...editFaq, q: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        value={editFaq.a}
                        onChange={(e) => setEditFaq({ ...editFaq, a: e.target.value })}
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                      />
                    </div>
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setIsEditing(null)}
                        className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveEdit(index)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 flex items-center gap-2 shadow-md shadow-blue-500/20"
                      >
                        <Save size={16} /> Save Changes
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${activeTab === "recruiter" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"
                        }`}>
                        <HelpCircle size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{faq.q}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-start">
                      <button
                        onClick={() => handleStartEdit(index)}
                        className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        title="Edit FAQ"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(index)}
                        className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                        title="Delete FAQ"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {faqs[activeTab].length === 0 && !isAdding && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <HelpCircle size={32} />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">No FAQs Found</h3>
              <p className="text-slate-500 text-sm mb-6">Start by adding your first question for {activeTab === "recruiter" ? "employers" : "job seekers"}.</p>
              <button
                onClick={() => setIsAdding(true)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all"
              >
                Add Your First FAQ
              </button>
            </div>
          )}
        </div>


      </div>
    </DashboardLayout>
  );
}
