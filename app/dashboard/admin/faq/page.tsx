"use client";

import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { ExternalLink, Pencil } from "lucide-react";

export default function AdminFaqPage() {
  return (
    <DashboardLayout role="admin" title="FAQ Management">
      <p className="text-slate-500 text-sm max-w-2xl mb-6">
        Edit FAQ content on the public FAQ page, or replace this screen with a CMS later. Use the
        link below to preview what job seekers see today.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/faq"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700"
        >
          Open FAQ page <ExternalLink size={14} />
        </Link>
        <button
          type="button"
          className="inline-flex items-center gap-2 border border-slate-200 bg-white px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Pencil size={14} /> Edit in code (app/faq)
        </button>
      </div>


    </DashboardLayout>
  );
}
