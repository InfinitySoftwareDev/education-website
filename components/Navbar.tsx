"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Briefcase, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resume-builder", label: "Resume Builder" },
  {
    label: "Portals",
    children: [
      { href: "/jobs", label: "Job Portal" },
      { href: "/employer", label: "Employer Portal" },
    ],
  },
  { href: "/reviews", label: "Reviews" },
  // { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 print:hidden ${scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-navy-900/8 border-b border-slate-100"
        : "bg-white/90 backdrop-blur-md border-b border-slate-100/50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-xl shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-all duration-500 hover:scale-105 group-hover:rotate-3 overflow-hidden">
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            {/* Glass Border */}
            <div className="absolute inset-0 rounded-2xl border border-white/20" />
            
            <Briefcase className="w-6 h-6 text-white relative z-10 animate-float-slow" />
            
            {/* Notification Dot with Pulse */}
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-sm">
               <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75" />
            </div>
          </div>
          
          <div className="leading-tight">
            <div className="flex items-center">
              <span className="font-heading font-800 text-2xl tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors duration-300">Talent</span>
              <span className="font-heading font-800 text-2xl tracking-tighter text-blue-600">Connect</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-blue-800 tracking-[0.2em] uppercase opacity-80">India</span>
              <div className="h-px w-8 bg-slate-200" />
              <div className="text-[9px] font-bold text-slate-400 tracking-wider">RECRUITMENT</div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${pathname === link.href
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors px-3 py-2">
            Login
          </Link>
          <Link
            href="/employer"
            className="btn-amber text-sm py-2.5 px-5 hover-shine"
          >
            Post Job @ ₹199
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-1 overflow-hidden"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${pathname === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex gap-3 pt-3 border-t border-slate-100 mt-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 btn-outline-blue text-sm py-2.5 text-center"
              >
                Login
              </Link>
              <Link
                href="/employer"
                onClick={() => setOpen(false)}
                className="flex-1 btn-amber text-sm py-2.5 text-center"
              >
                Post Job ₹199
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
