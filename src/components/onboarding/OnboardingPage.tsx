"use client";
import { cn } from "@/lib/utils";
import { IPage } from "../Page";
import { OnboardingFooter } from "./OnboardingFooter";
import { OnboardingProgress } from "./OnboardingProgress";

export default function OnboardingPage({ children, className, ...rest }: IPage) {
  return (
    <>
      <main
        className={cn("v-stack onboarding-page overflow-hidden items-center justify-between")}
        {...rest}>
        <div className="container v-stack h-full py-20">
          <section className={cn("h-full", className)}>{children}</section>
          <OnboardingFooter />
        </div>
      </main>
      <OnboardingProgress />
    </>
  );
}
