import type { Metadata } from "next";
import "./globals.css";
import "@/styles/legacy-widget.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
