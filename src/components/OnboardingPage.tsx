"use client";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import useOnboardingRoutes from "@/hooks/useOnboardingRoutes";
import { IPage } from "./Page";

export default function OnboardingPage({ children, className, ...rest }: IPage) {
  const { nextStep, previousStep, isFirstPage } = useOnboardingRoutes();

  return (
    <main
      className={cn("v-stack onboarding-page overflow-hidden items-center justify-between")}
      {...rest}>
      <div className="container v-stack h-full">
        <section className={cn("h-full", className)}>{children}</section>
        <div className="h-stack justify-between w-full py-20">
          {!isFirstPage && (
            <Button
              onClick={previousStep}
              variant={"outline"}
              className="justify-self-start gap-2 font-semibold rounded-full p-6">
              <ChevronLeftIcon />
              <span>Back</span>
            </Button>
          )}
          <Button
            onClick={nextStep}
            variant={"secondary"}
            className="flex justify-self-end gap-2 font-semibold rounded-full p-6">
            <span>{isFirstPage ? "Start roaming!" : "Keep roaming"}</span>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </main>
  );
}
