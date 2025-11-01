import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/SharedComponents/Navbar";
import Footer from "@/Components/SharedComponents/Footer";
import LaunchPad from "@/Components/SharedComponents/LaunchPad";

// ✅ Use Plus Jakarta Sans instead of Geist
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"], // optional: common font weights
});

export const metadata: Metadata = {
  title: "LaunchPad Labs",
  description: "We Build and Launch Your Startup MVP in Just 2 Weeks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <LaunchPad />
      </body>
    </html>
  );
}
