import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Sidebar, MobileNav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/lib/i18n";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "C, from the ground up",
  description: "A hands-on course covering the fundamentals of the C programming language.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${mono.variable} ${sans.variable} ${arabicSans.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <LocaleProvider>
          <Sidebar />
          <div className="lg:pl-72">
            <MobileNav />
            {children}
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
