import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/packages/utils/src/index";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`
          // "max-w-md mx-auto bg-white min-h-screen flex flex-col border border-gray-200 "
        )}
      >
        {children}
      </body>
    </html>
  );
}
