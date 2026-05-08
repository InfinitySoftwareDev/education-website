import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

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
  title: "TCI | Affordable Recruitment & Hiring Solutions — Starting at ₹199",
  description:
    "Talent Connect India offers 10+ years of recruitment excellence with AI-based calling, verified leads, 5000+ placements, and affordable job posting starting at ₹199. Trusted by employers and job seekers across 135+ cities in India.",
  keywords:
    "recruitment company, job placement, hiring solutions, affordable hiring, AI calling, Talent Connect India India, post a job ₹199, verified leads, Talent Connect India",
  openGraph: {
    title: "Talent Connect India | Affordable Recruitment & Hiring Solutions",
    description:
      "5000+ Placements | 350+ Recruiters | 135+ Cities | Post Job @ ₹199",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
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

        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
