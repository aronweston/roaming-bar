import "@/assets/styles/globals.css";
import Footer from "@/components/layout/Footer";
import MainNav from "@/components/layout/MainHeader";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roaming Bar | Let The Good Times Roam",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <MainNav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
