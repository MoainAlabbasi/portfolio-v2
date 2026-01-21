import type { Metadata } from "next";
import { Tajawal, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ChatBot from "@/components/ChatBot";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Moain Alabbasi | AI Solutions Developer & Prompt Engineer",
  description:
    "معين العباسي - مطور حلول الذكاء الاصطناعي ومهندس البرومبتات. متخصص في بناء تطبيقات ويب وموبايل متقدمة باستخدام أحدث التقنيات.",
  keywords: [
    "Moain Alabbasi",
    "معين العباسي",
    "Full-Stack Developer",
    "AI Developer",
    "Prompt Engineer",
    "Python",
    "Django",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Moain Alabbasi" }],
  openGraph: {
    title: "Moain Alabbasi | AI Solutions Developer",
    description: "مطور حلول الذكاء الاصطناعي ومهندس البرومبتات",
    type: "website",
    locale: "ar_YE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg-dark">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:mr-72">{children}</main>
        </div>
        <ChatBot />
      </body>
    </html>
  );
}
