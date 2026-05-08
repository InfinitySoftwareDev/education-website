"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Briefcase, Users, 
  UserCheck, Megaphone, Settings, 
  LogOut, Home, Bell, Search, Menu, X, Mail
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
    { id: "overview", label: "Overview", icon: LayoutDashboard, path: "/dashboard/admin" },
    { id: "users", label: "Manage Users", icon: Users, path: "/dashboard/admin/users" },
    { id: "jobs", label: "All Job Posts", icon: Briefcase, path: "/dashboard/admin/jobs" },
    { id: "enquiries", label: "Enquiries", icon: Mail, path: "/dashboard/admin/enquiries" },
    { id: "settings", label: "Settings", icon: Settings, path: "/dashboard/admin/settings" },
  ],
  employer: [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard/employer" },
    { id: "post-job", label: "Post New Job", icon: Briefcase, path: "/dashboard/employer/post-job" },
    { id: "candidates", label: "Applicants", icon: Users, path: "/dashboard/employer/applicants" },
    { id: "settings", label: "Company Profile", icon: Settings, path: "/dashboard/employer/profile" },
  ],
  employee: [
    { id: "overview", label: "My Dashboard", icon: LayoutDashboard, path: "/dashboard/employee" },
    { id: "jobs", label: "Browse Jobs", icon: Briefcase, path: "/jobs" },
    { id: "resume", label: "Resume Builder", icon: UserCheck, path: "/resume-builder" },
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

export default function DashboardSidebar({ 
  role = "employer", 
  isOpen, 
  setIsOpen 
}: { 
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
          <motion.button 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => setIsOpen(true)}
            className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          >
            <Menu size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isOpen ? 280 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 80),
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -280 : 0) 
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className={`fixed left-0 top-0 h-full bg-sky-50 text-slate-600 z-40 flex flex-col border-r border-sky-100 shadow-xl lg:shadow-none lg:translate-x-0 ${!isOpen && 'lg:w-20'}`}
      >
        {/* Brand */}
        <div className={`pt-8 pb-4 mb-2 flex items-center ${isOpen ? 'justify-between px-4' : 'justify-center'} border-b border-sky-100/50`}>
          {isOpen ? (
            <>
              <Link href="/" className="flex-1 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-20 shrink-0">
                  <Image 
                    src="/cilogo.png" 
                    alt="TCI Logo" 
                    fill 
                    className="object-contain mix-blend-multiply"
                    priority
                    sizes="280px"
                  />
                </div>
              </Link>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-sky-400 hover:text-blue-600 p-2 hover:bg-white rounded-lg transition-all shrink-0 -ml-2"
              >
                <X size={24} />
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsOpen(true)} 
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
              <Link 
                key={item.id} 
                href={item.path}
                onClick={() => { if(window.innerWidth < 1024) setIsOpen(false); }}
                className={`flex items-center ${isOpen ? 'gap-3 p-3' : 'justify-center p-3'} rounded-xl transition-all group ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "text-slate-500 hover:bg-white hover:text-blue-600 shadow-sm hover:shadow-blue-500/5"
                }`}
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
          <Link 
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
