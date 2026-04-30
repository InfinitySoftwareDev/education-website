import Link from "next/link";
import {
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";


const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/jobs", label: "Job Portal" },
  { href: "/employer", label: "Employer Portal" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Job Posting @ ₹199",
  "Candidate Hiring",
  "Resume Database",
  "AI Calling System",
  "Bulk Hiring",
  "Lead Verification",
  "Recruitment Campaigns",
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white print:hidden">
      {/* CTA Strip */}
      <div className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-white">
              Ready to Hire? Start at just ₹199!
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              Join 5000+ companies trusting Job Portal for smart recruitment.
            </p>
          </div>
          <Link
            href="/employer"
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-7 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Post a Job Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="group flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-xl shadow-blue-900/40 group-hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 group-hover:-rotate-3 overflow-hidden">
              {/* Animated Shine Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Glass Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/20" />
              
              <Briefcase className="w-6 h-6 text-white relative z-10 animate-float-slow" />
              
              {/* Notification Dot with Pulse */}
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-[#0B1120] shadow-sm">
                <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75" />
              </div>
            </div>
            
            <div className="leading-tight">
              <div className="flex items-center">
                <span className="font-heading font-800 text-2xl tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">Talent</span>
                <span className="font-heading font-800 text-2xl tracking-tighter text-blue-400">Connect</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-amber-400 tracking-[0.2em] uppercase">India</span>
                <div className="h-px w-8 bg-white/10" />
                <div className="text-[9px] font-bold text-slate-500 tracking-wider">RECRUITMENT</div>
              </div>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            10+ years of recruitment excellence. AI-powered hiring with verified
            leads and affordable job posting starting at ₹199.
          </p>
          {/* Contact */}
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <Phone size={15} className="text-blue-400 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={15} className="text-blue-400 shrink-0" />
              <span>info@jobportal.in</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-blue-400 shrink-0 mt-0.5" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
          {/* Social */}
          <div className="flex items-center gap-3 mt-6">
            {[
              { icon: Globe, href: "#", label: "Website" },
              { icon: Share2, href: "#", label: "Social" },
              { icon: ExternalLink, href: "#", label: "LinkedIn" },
              { icon: Globe, href: "#", label: "Instagram" },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/10 flex items-center justify-center transition-all duration-200 hover:border-blue-500"
              >
                <Icon size={15} className="text-slate-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-700 text-white text-base mb-5 pb-2 border-b border-white/10">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500 group-hover:w-2 transition-all duration-200" />
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
              >
                <span className="w-1 h-1 rounded-full bg-blue-500 group-hover:w-2 transition-all duration-200" />
                Login / Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-700 text-white text-base mb-5 pb-2 border-b border-white/10">
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400 group-hover:w-2 transition-all duration-200" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            © 2024 Job Portal Recruitment Solutions Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
