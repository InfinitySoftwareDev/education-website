"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { Settings } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <DashboardLayout role="admin" title="Settings">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
        <Settings size={48} className="mb-4 opacity-20" />
        <h2 className="text-xl font-bold">Settings Page</h2>
        <p className="text-sm">Global platform settings will be available here soon.</p>
      </div>
    </DashboardLayout>
  );
}
