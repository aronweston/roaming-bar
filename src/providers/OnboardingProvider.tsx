"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { BudgetSchema, CustomerSchema, EventSchema, TabSchema } from "@/lib/schema";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface AllSteps {
  customer: CustomerSchema;
  event: EventSchema;
  budget: BudgetSchema;
  tab: TabSchema;
}

interface OnboardingContextType {
  goBack: () => void;
  allSteps: AllSteps | null;
  submitStep: (step: keyof AllSteps, details: AllSteps[keyof AllSteps]) => void;
}

export const steps = [
  { title: "Your Details", route: "/onboarding" },
  { title: "Event Details", route: "/onboarding/event" },
  { title: "Package", route: "/onboarding/package" },
  { title: "Summary", route: "/onboarding/summary" },
];

export function useRoutes() {
  const pathname = usePathname();
  const currentRouteIndex = steps.findIndex((step) => step.route === pathname);
  const currentRoute = steps[currentRouteIndex];
  const isFirstPage = currentRouteIndex === 0;
  const isLastPage = currentRouteIndex === steps.length - 1;
  const nextStep = steps[currentRouteIndex + 1];
  const previousStep = steps[currentRouteIndex - 1];

  const isPreviousRoute = (route: string) => {
    const index = steps.findIndex((step) => step.route === route);
    return index <= currentRouteIndex;
  };

  return { isPreviousRoute, currentRoute, previousStep, nextStep, isFirstPage, isLastPage };
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { nextStep, previousStep } = useRoutes();
  const [activeStep, setActiveStep] = useLocalStorage("active-step", steps[0]);
  const [allSteps, setAllSteps] = useLocalStorage<AllSteps | null>("steps", null);

  const goBack = () => {
    setActiveStep(previousStep);
    return router.push(previousStep.route);
  };

  const submitStep = (step: keyof AllSteps, details: AllSteps[keyof AllSteps]) => {
    setAllSteps((prev) => ({ ...prev, [step]: details }));
    setActiveStep(nextStep);
    return router.push(nextStep.route);
  };

  return (
    <OnboardingContext.Provider
      value={{
        goBack,
        submitStep,
        allSteps,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error("useOnboarding must be used within an OnboardingProvider");
  return context;
}
