import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "AI Dating Profile Analyzer – Optimize Your Photos for Better Matches",
  description: "Get AI-powered analysis and recommendations for your dating profile photos to increase your matches and success in online dating.",
  keywords: ["dating profile", "AI photo analysis", "profile optimization", "dating app photos"],
};

// Add debug logging
console.log('Layout rendering on server');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Client-side JavaScript initialized');
              window.addEventListener('load', () => {
                console.log('Window loaded');
              });
            `,
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        geist.variable
      )}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-14 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="font-bold">
                    StinsonGPT
                  </Link>
                </div>
                <MainNav />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
