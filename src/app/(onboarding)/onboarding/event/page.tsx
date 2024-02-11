"use client";
import OnboardingPage from "@/components/onboarding/OnboardingPage";
import { Form } from "@/components/ui/form";
import { DateField, InputField, TimeRange } from "@/components/util/fields";
import { EventSchema } from "@/lib/schema";
import { useOnboarding, useRoutes } from "@/providers/OnboardingProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function CustomerDetails() {
  const { currentRoute } = useRoutes();
  const { submitStep, allSteps } = useOnboarding();
  const form = useForm<EventSchema>({
    mode: "all",
    resolver: zodResolver(EventSchema),
    defaultValues: allSteps?.event,
  });

  const onSubmit = form.handleSubmit((values: EventSchema) => submitStep(values));

  return (
    <OnboardingPage className="v-stack gap-20 max-w-screen-md mx-auto">
      <Form id={currentRoute.step} form={form} onSubmit={onSubmit} className="v-stack gap-6">
        <h1 className="text-4xl font-bold ">Now, let&apos;s talk about your event</h1>
        <div className="v-stack">
          <DateField control={form.control} name="date" placeholder="Event Date" />

          <TimeRange control={form.control} name="time" startTime={"17:30"} endTime={"22:30"} />

          <InputField control={form.control} name="total_guests" placeholder="Total guest" />
        </div>
      </Form>
    </OnboardingPage>
  );
}
