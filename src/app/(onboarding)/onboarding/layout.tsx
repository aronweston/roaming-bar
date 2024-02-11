import "@/assets/styles/globals.css";
import Footer from "@/components/layout/Footer";
import OnboardingNav from "@/components/layout/OnboardingNav";
import AgeVerificationModal from "@/components/util/AgeVerificationModal";
import { cn } from "@/lib/utils";
import { OnboardingProvider } from "@/providers/OnboardingProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function OnboardingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.style)}>
        <OnboardingProvider>
          <OnboardingNav />
          {children}
        </OnboardingProvider>
        <Footer />
      </body>
      <AgeVerificationModal />
    </html>
  );
}
