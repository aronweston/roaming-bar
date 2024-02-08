import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import MainLogo from "@/assets/icons/main-logo.svg";

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
        <header className="sticky top-0">
          <div className="container h-stack justify-between items-center p-6">
            <nav>Links</nav>
            <div className="w-1/2">
              <MainLogo />
            </div>

            <div>ctas go here</div>
          </div>
        </header>

        {children}

        <footer></footer>
      </body>
    </html>
  );
}
