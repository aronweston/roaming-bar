"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CustomerSchema, EventSchema } from "@/lib/schema";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { createContext, useContext } from "react";

interface AllSteps {
  customer: CustomerSchema;
  event: EventSchema;
  package: any;
  summary: any;
}

interface OnboardingContextType {
  goBack: () => void;
  allSteps: AllSteps | null;
  submitStep: (details: AllSteps[keyof AllSteps]) => void;
}

export const steps = [
  { title: "Your Details", route: "/onboarding", step: "customer" },
  { title: "Event Details", route: "/onboarding/event", step: "event" },
  { title: "Package", route: "/onboarding/package", step: "package" },
  { title: "Summary", route: "/onboarding/summary", step: "summary" },
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
  const { nextStep, previousStep, currentRoute } = useRoutes();
  const [allSteps, setAllSteps] = useLocalStorage<AllSteps | null>("steps", null);

  const goBack = () => {
    return router.push(previousStep.route);
  };

  const submitStep = (details: AllSteps[keyof AllSteps]) => {
    setAllSteps((prev) => ({ ...prev, [currentRoute.step]: details }));
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
