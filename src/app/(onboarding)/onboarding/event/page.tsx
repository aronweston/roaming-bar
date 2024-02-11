"use client";
import OnboardingPage from "@/components/OnboardingPage";
import { EventSchema } from "@/lib/schema";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function EventDetails() {
  const { submitStep } = useOnboarding();

  const form = useForm<EventSchema>({
    mode: "all",
    resolver: zodResolver(EventSchema),
  });

  const onSubmit = form.handleSubmit((values: EventSchema) => submitStep("budget", values));

  return (
    <OnboardingPage>
      <div className="v-stack basis-full justify-center">
        <h1>Now, lets talk about your event</h1>
      </div>

      <div className="v-stack basis-full items-end w-full">jojwfoj</div>
    </OnboardingPage>
  );
}
