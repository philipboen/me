import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Navbar } from "@/components/navbar";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio of my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} max-container font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
