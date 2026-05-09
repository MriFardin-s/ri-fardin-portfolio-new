import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ri Fardin Portfolio",
  description: "Personal portfolio of Ri Fardin",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300 selection:bg-purple-500/30 selection:text-purple-200" suppressHydrationWarning>
        <ClientLayout >{children}</ClientLayout>
      </body>
    </html>
  );
}