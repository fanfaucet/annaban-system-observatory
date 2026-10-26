import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnnabanAI System Observatory",
  description:
    "Official source-of-truth dashboard for the AnnabanAI governance-focused AI systems architecture associated with Jacob Wayne Kinnaird. Continuous status, modules, governance, and pipeline visibility.",
  keywords: [
    "AnnabanAI",
    "AnnabanOS",
    "Heritage Stack",
    "AI governance",
    "Jacob Wayne Kinnaird",
    "system observatory",
  ],
  authors: [{ name: "Jacob Wayne Kinnaird" }],
  openGraph: {
    title: "AnnabanAI System Observatory",
    description:
      "Unified live view of AnnabanAI core systems, operational stacks, modules, and governance controls.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
