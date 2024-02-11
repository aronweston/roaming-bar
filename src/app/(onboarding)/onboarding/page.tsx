"use client";
import OnboardingPage from "@/components/OnboardingPage";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/util/InputField";
import { CustomerSchema } from "@/lib/schema";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export default function CustomerDetails() {
  const { submitStep, allSteps } = useOnboarding();

  const form = useForm<CustomerSchema>({
    mode: "all",
    resolver: zodResolver(CustomerSchema),
    defaultValues: allSteps?.customer,
  });

  const onSubmit = form.handleSubmit((values: CustomerSchema) => submitStep("customer", values));

  return (
    <OnboardingPage>
      <div className="v-stack basis-full justify-center">
        <div className="v-stack mb-4">
          <h1 className="text-4xl font-bold ">Lets start with your details</h1>
          <p className="text-lg text-muted">(so that we can send you your quote)</p>
        </div>

        <Form form={form} onSubmit={onSubmit} className="v-stack gap-6">
          <InputField control={form.control} name="fullName" placeholder="Full name" />
          <InputField control={form.control} name="email" placeholder="Email address" />
          <InputField control={form.control} name="phone" placeholder="Phone number" />

          <Button
            type="submit"
            className="self-end min-w-[100px] bg-secondary font-semibold gap-2 rounded-full p-6">
            <span>Keep roaming</span>
            <ChevronRightIcon />
          </Button>
        </Form>
      </div>
    </OnboardingPage>
  );
}
