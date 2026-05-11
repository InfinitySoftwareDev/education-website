"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Bookmark, Trash2, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import {
  readSavedJobs,
  removeSavedJob,
  type SavedJobStored,
} from "@/lib/savedJobsStorage";

function formatSavedWhen(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "Saved";
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Saved just now";
  if (mins < 60) return `Saved ${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `Saved ${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days === 1) return "Saved yesterday";
  if (days < 7) return `Saved ${days} days ago`;
  return `Saved ${d.toLocaleDateString()}`;
}

export default function SavedJobsPage() {
  const [list, setList] = useState<SavedJobStored[]>([]);

  const reload = useCallback(() => {
    setList(readSavedJobs());
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === null || e.key === "hireedge-saved-jobs") reload();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [reload]);

  return (
    <DashboardLayout role="employee" title="Saved Jobs">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-slate-900">
          Your Bookmarks
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Jobs you&apos;ve saved to apply for later. Use the bookmark icon on
          any job while browsing jobs.
        </p>
      </div>

      <div className="grid gap-4">
        {list.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                  <Bookmark size={22} className="fill-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium mt-0.5">
                    {job.company} · {job.city}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    {formatSavedWhen(job.savedAt)}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">
                      {job.salary}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Remove from saved"
                  className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  onClick={() => {
                    removeSavedJob(job.id);
                    reload();
                  }}
                >
                  <Trash2 size={18} />
                </button>
                <Link
                  href="/dashboard/employee/jobs"
                  className="flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 transition-all px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20"
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

        {list.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
              <Bookmark size={30} />
            </div>
            <h3 className="font-bold text-slate-900">No saved jobs</h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto px-4">
              Go to <strong>Browse Jobs</strong>, then click the{" "}
              <strong>bookmark</strong> on a job card (top-right). It will show
              up here on this device.
            </p>
            <Link
              href="/dashboard/employee/jobs"
              className="inline-block mt-6 text-emerald-600 font-bold text-sm"
            >
              Browse Jobs →
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
