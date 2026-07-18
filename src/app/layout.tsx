import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { SectionTransitionProvider } from "@/components/SectionTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Farhan Maulana",
  description:
    "Portfolio website showcasing projects, skills, and experience as a Frontend Developer.",
  keywords: ["portfolio", "developer", "next.js", "react", "frontend"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SectionTransitionProvider>
          <div id="site-root" className="overflow-x-hidden w-full max-w-full">
            <Navbar />
            <main className="overflow-x-hidden w-full max-w-full">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </SectionTransitionProvider>
      </body>
    </html>
  );
}
