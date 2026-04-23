import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/legacy-widget.css";
import Navbar from "@/components/Navbar";
import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaunchPress - CMS & Marketing Starter",
  description: "A modern Next.js starter with Storyblok, Mailchimp, and Stripe integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <LegacyNewsletterWidget />
      </body>
    </html>
  );
}
