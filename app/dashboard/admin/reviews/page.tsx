"use client";

import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { Star, ExternalLink } from "lucide-react";

const pending = [
  { id: 1, author: "Rahul S.", target: "TechCorp", rating: 5, excerpt: "Great hiring experience…", date: "May 8" },
  { id: 2, author: "Anonymous", target: "RetailPro", rating: 2, excerpt: "Slow response from HR…", date: "May 6" },
];

export default function AdminReviewsPage() {
  return (
    <DashboardLayout role="admin" title="Review Management">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-slate-500 text-sm max-w-xl">
          Moderate platform reviews before they go public. Below is sample data — wire to your
          database when ready.
        </p>
        <Link
          href="/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Open public reviews page <ExternalLink size={14} />
        </Link>
      </div>

      <div className="space-y-4">
        {pending.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-slate-900">{r.target}</span>
                <span className="flex items-center gap-0.5 text-amber-600 text-xs font-bold">
                  <Star size={12} className="fill-amber-400" /> {r.rating}/5
                </span>
              </div>
              <p className="text-slate-500 text-sm">&ldquo;{r.excerpt}&rdquo;</p>
              <p className="text-slate-400 text-xs mt-2">
                {r.author} · {r.date}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Approve
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Hide
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
