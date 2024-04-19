import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parcel Track",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
