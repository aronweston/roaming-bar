"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useOnboardingRoutes from "@/hooks/useOnboardingRoutes";
import { BudgetSchema, CustomerSchema, EventSchema, TabSchema } from "@/lib/schema";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";
interface AllSteps {
  customer: CustomerSchema;
  event: EventSchema;
  budget: BudgetSchema;
  tab: TabSchema;
}

interface OnboardingContextType {
  allSteps: AllSteps | null;
  submitStep: (step: keyof AllSteps, details: AllSteps[keyof AllSteps]) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);
export function OnboardingProvider({ children }: { children: ReactNode }) {
  const { nextStep, currentRoute, previousStep } = useOnboardingRoutes();

  const [allSteps, setAllSteps] = useLocalStorage<AllSteps | null>("steps", null);

  const submitStep = (step: keyof AllSteps, details: AllSteps[keyof AllSteps]) => {
    console.log(step, details);
    setAllSteps((prev) => ({ ...prev, [step]: details }));
    nextStep();
  };

  useEffect(() => {
    console.log("allSteps", allSteps);
  }, []);

  return (
    <OnboardingContext.Provider
      value={{
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
