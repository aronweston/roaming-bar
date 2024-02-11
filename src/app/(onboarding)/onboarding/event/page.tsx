"use client";
import OnboardingPage from "@/components/onboarding/OnboardingPage";
import { EventSchema } from "@/lib/schema";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function EventDetails() {
  const { submitStep, allSteps } = useOnboarding();

  const form = useForm<EventSchema>({
    mode: "all",
    resolver: zodResolver(EventSchema),
    defaultValues: allSteps?.event,
  });

  const onSubmit = form.handleSubmit((values: EventSchema) => submitStep("event", values));

  return (
    <OnboardingPage>
      <div className="v-stack basis-full justify-center">
        <h1>Now, lets talk about your event</h1>
      </div>

      <div className="v-stack basis-full items-end w-full">jojwfoj</div>
    </OnboardingPage>
  );
}
