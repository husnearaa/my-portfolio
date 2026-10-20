import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Husneara",
    icons: "/favicon.png",
  description: "Full Stack Web Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0d] cursor-none">
         <CustomCursor />
        <BackgroundAnimation /> 
        {children}</body>
    </html>
  );
}
