import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job Portal | Affordable Recruitment & Hiring Solutions — Starting at ₹199",
  description:
    "Job Portal offers 10+ years of recruitment excellence with AI-based calling, verified leads, 5000+ placements, and affordable job posting starting at ₹199. Trusted by employers and job seekers across 135+ cities in India.",
  keywords:
    "recruitment company, job placement, hiring solutions, affordable hiring, AI calling, job portal India, post a job ₹199, verified leads, Job Portal",
  openGraph: {
    title: "Job Portal | Affordable Recruitment & Hiring Solutions",
    description: "5000+ Placements | 50+ Recruiters | 135+ Cities | Post Job @ ₹199",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
        suppressHydrationWarning
      >
        {/* Ambient Background Blobs */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl animate-pulse-glow" />
          <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-amber-400/5 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl animate-float-delay" />
        </div>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
