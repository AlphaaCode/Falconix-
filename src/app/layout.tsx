import type { Metadata } from "next";
import {  Saira } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar";


const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: [
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // SemiBold
    "700", // Bold
    "800", // ExtraBold
  ],
});

export const metadata: Metadata = {
  title: "FalconiX",
  description: "Drone-powered medical logistics Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} font-saira antialiased `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// src/app/layout.tsx
export const metadata1 = {
  title: "FalconiX",
  description: "Your site description here",
  icons: {
    icon: "/icons/logo.svg", // favicon
  },
}
