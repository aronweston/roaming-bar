"use client";
import OnboardingPage from "@/components/OnboardingPage";

import { BudgetSchema, CustomerSchema } from "@/lib/schema";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Budget() {
  const { submitStep } = useOnboarding();

  const form = useForm<BudgetSchema>({
    mode: "all",
    resolver: zodResolver(CustomerSchema),
  });

  const onSubmit = form.handleSubmit((values: BudgetSchema) => submitStep("budget", values));

  return (
    <OnboardingPage>
      <div className="v-stack basis-full justify-center"></div>

      <div className="v-stack basis-full items-end w-full"></div>
    </OnboardingPage>
  );
}
