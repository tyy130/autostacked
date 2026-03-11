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
  title: "AutoStacked — AI Tools for Small Businesses",
  description: "AI voice agents, chatbots, and automations that work while you sleep. Setup in days, not months. Starting at $49/mo.",
  openGraph: {
    title: "AutoStacked — AI Tools for Small Businesses",
    description: "AI voice agents, chatbots, and automations that work while you sleep. Setup in days, not months.",
    url: "https://autostacked.com",
    siteName: "AutoStacked",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoStacked — AI Tools for Small Businesses",
    description: "AI voice agents, chatbots, and automations that work while you sleep.",
  },
  metadataBase: new URL("https://autostacked.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
