"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
import {
  LayoutDashboard, Briefcase, Users,
  UserCheck, Megaphone, Settings,
  LogOut, Home, Bell, Search, Menu, X, Mail,
  AlertCircle, IndianRupee, Video, Star, CheckCircle,
  BarChart2, Phone
=======
import { 
  LayoutDashboard, Briefcase, Users, 
  UserCheck, Megaphone, Settings, 
  LogOut, Home, Bell, Search, Menu, X, Mail
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
} from "lucide-react";
import { useState } from "react";

interface SidebarItem {
  id: string;
  label: string;
  icon: any;
  path: string;
}

const menuItems: Record<string, SidebarItem[]> = {
  admin: [
<<<<<<< HEAD
    { id: "overview", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard/admin" },
    { id: "users", label: "Users & Roles", icon: Users, path: "/dashboard/admin/users" },
    { id: "jobs", label: "All Job Posts", icon: Briefcase, path: "/dashboard/admin/jobs" },
    { id: "pending", label: "Job Approvals", icon: AlertCircle, path: "/dashboard/admin/jobs/approvals" },
    { id: "enquiries", label: "User Enquiries", icon: Mail, path: "/dashboard/admin/enquiries" },
    { id: "finance", label: "Revenue & Finance", icon: IndianRupee, path: "/dashboard/admin/finance" },
=======
    { id: "overview", label: "Overview", icon: LayoutDashboard, path: "/dashboard/admin" },
    { id: "users", label: "Manage Users", icon: Users, path: "/dashboard/admin/users" },
    { id: "jobs", label: "All Job Posts", icon: Briefcase, path: "/dashboard/admin/jobs" },
    { id: "enquiries", label: "Enquiries", icon: Mail, path: "/dashboard/admin/enquiries" },
    { id: "settings", label: "Settings", icon: Settings, path: "/dashboard/admin/settings" },
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
  ],
  employer: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard/employer" },
    { id: "post-job", label: "Post New Job", icon: Briefcase, path: "/dashboard/employer/post-job" },
    { id: "candidates", label: "Applicants", icon: Users, path: "/dashboard/employer/applicants" },
<<<<<<< HEAD
    { id: "analytics", label: "Job Analytics", icon: BarChart2, path: "/dashboard/employer/analytics" },
=======
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
    { id: "settings", label: "Company Profile", icon: Settings, path: "/dashboard/employer/profile" },
  ],
  employee: [
    { id: "overview", label: "My Dashboard", icon: LayoutDashboard, path: "/dashboard/employee" },
<<<<<<< HEAD
    { id: "applications", label: "My Applications", icon: CheckCircle, path: "/dashboard/employee/applications" },
    { id: "saved", label: "Saved Jobs", icon: Star, path: "/dashboard/employee/saved-jobs" },
    { id: "interviews", label: "Interview Hub", icon: Video, path: "/dashboard/employee/interviews" },
    { id: "resume", label: "Resume Builder", icon: UserCheck, path: "/dashboard/employee/resume" },
=======
    { id: "jobs", label: "Browse Jobs", icon: Briefcase, path: "/jobs" },
    { id: "resume", label: "Resume Builder", icon: UserCheck, path: "/resume-builder" },
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
    { id: "profile", label: "My Profile", icon: Settings, path: "/dashboard/employee/profile" },
  ],
  recruiter: [
    { id: "overview", label: "Recruiter Hub", icon: LayoutDashboard, path: "/dashboard/recruiter" },
    { id: "leads", label: "Call Logs", icon: Users, path: "/dashboard/recruiter/leads" },
    { id: "settings", label: "Account Settings", icon: Settings, path: "/dashboard/recruiter/settings" },
  ],
  promoter: [
    { id: "overview", label: "Promoter Dashboard", icon: LayoutDashboard, path: "/dashboard/promoter" },
    { id: "referrals", label: "My Referrals", icon: Megaphone, path: "/dashboard/promoter/referrals" },
    { id: "earnings", label: "Earnings & Payouts", icon: Settings, path: "/dashboard/promoter/earnings" },
  ],
};

import Image from "next/image";

<<<<<<< HEAD
export default function DashboardSidebar({
  role = "employer",
  isOpen,
  setIsOpen
}: {
=======
export default function DashboardSidebar({ 
  role = "employer", 
  isOpen, 
  setIsOpen 
}: { 
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
  role?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const items = menuItems[role] || menuItems.employer;

  return (
    <>
      {/* Mobile Floating Toggle (Only shows when closed) */}
      <AnimatePresence>
        {!isOpen && (
<<<<<<< HEAD
          <motion.button
=======
          <motion.button 
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => setIsOpen(true)}
            className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
<<<<<<< HEAD
            aria-label="Open menu"
=======
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
          >
            <Menu size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
<<<<<<< HEAD
          <motion.div
=======
          <motion.div 
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
<<<<<<< HEAD
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? 280 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 80),
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -280 : 0)
        }}
        transition={{ type: "spring", damping: 25, stiffness: 100 }}
        className={`fixed left-0 top-0 h-full bg-sky-50 text-slate-600 z-40 flex flex-col border-r border-sky-100 shadow-xl lg:shadow-none lg:translate-x-0 ${!isOpen && 'lg:w-20'} touch-pan-y`}
=======
      <motion.aside 
        initial={false}
        animate={{ 
          width: isOpen ? 280 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 80),
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -280 : 0) 
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className={`fixed left-0 top-0 h-full bg-sky-50 text-slate-600 z-40 flex flex-col border-r border-sky-100 shadow-xl lg:shadow-none lg:translate-x-0 ${!isOpen && 'lg:w-20'}`}
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
      >
        {/* Brand */}
        <div className={`pt-8 pb-4 mb-2 flex items-center ${isOpen ? 'justify-between px-4' : 'justify-center'} border-b border-sky-100/50`}>
          {isOpen ? (
            <>
              <Link href="/" className="flex-1 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-20 shrink-0">
<<<<<<< HEAD
                  <Image
                    src="/cilogo.png"
                    alt="TCI Logo"
                    fill
=======
                  <Image 
                    src="/cilogo.png" 
                    alt="TCI Logo" 
                    fill 
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
                    className="object-contain mix-blend-multiply"
                    priority
                    sizes="280px"
                  />
                </div>
              </Link>
<<<<<<< HEAD
              <button
                onClick={() => setIsOpen(false)}
=======
              <button 
                onClick={() => setIsOpen(false)} 
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
                className="text-sky-400 hover:text-blue-600 p-2 hover:bg-white rounded-lg transition-all shrink-0 -ml-2"
              >
                <X size={24} />
              </button>
            </>
          ) : (
<<<<<<< HEAD
            <button
              onClick={() => setIsOpen(true)}
=======
            <button 
              onClick={() => setIsOpen(true)} 
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
              className="text-sky-400 hover:text-blue-600 p-3 hover:bg-white rounded-xl transition-all shadow-sm border border-sky-100 bg-white"
            >
              <Menu size={24} />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar">
          {items.map((item) => {
            const isActive = pathname === item.path;
            return (
<<<<<<< HEAD
              <Link
                key={item.id}
                href={item.path}
                onClick={() => { if (window.innerWidth < 1024) setIsOpen(false); }}
                className={`flex items-center ${isOpen ? 'gap-3 p-3' : 'justify-center p-3'} rounded-xl transition-all group ${isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-500 hover:bg-white hover:text-blue-600 shadow-sm hover:shadow-blue-500/5"
                  }`}
=======
              <Link 
                key={item.id} 
                href={item.path}
                onClick={() => { if(window.innerWidth < 1024) setIsOpen(false); }}
                className={`flex items-center ${isOpen ? 'gap-3 p-3' : 'justify-center p-3'} rounded-xl transition-all group ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "text-slate-500 hover:bg-white hover:text-blue-600 shadow-sm hover:shadow-blue-500/5"
                }`}
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
                title={!isOpen ? item.label : ""}
              >
                <item.icon size={20} className={isActive ? "text-white" : "group-hover:text-blue-600"} />
                {isOpen && <span className="text-sm font-semibold whitespace-nowrap">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-sky-100/50">
<<<<<<< HEAD
          <Link
=======
          <Link 
>>>>>>> 1268344df168c46e6895d0a4fbe21a9185824135
            href="/"
            className={`flex items-center ${isOpen ? 'gap-3 p-3' : 'justify-center p-3'} rounded-xl text-slate-500 hover:bg-white hover:text-blue-600 transition-all mb-2`}
          >
            <Home size={20} />
            {isOpen && <span className="text-sm font-semibold">Back to Site</span>}
          </Link>
          <button className={`w-full flex items-center ${isOpen ? 'gap-3 p-3' : 'justify-center p-3'} rounded-xl text-red-500 hover:bg-red-50 transition-all`}>
            <LogOut size={20} />
            {isOpen && <span className="text-sm font-semibold">Sign Out</span>}
          </button>
        </div>
      </motion.aside>

      {/* Spacing for layout */}
      <div className="hidden lg:block transition-all duration-300" style={{ width: isOpen ? 280 : 80 }} />
    </>
  );
}
