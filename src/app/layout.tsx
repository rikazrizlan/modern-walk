import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AppProvider, useAppContext } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Modernw walk is a modern e-commerce website",
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
        <AppProvider>
          <div style={{ height: 60}} className="flex justify-center items-center top-10 bg-white shadow-lg w-full">
            <Link className="font-bold text-lg" href="/">Modern Walk</Link>
          </div>

          <div className="p-10">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
