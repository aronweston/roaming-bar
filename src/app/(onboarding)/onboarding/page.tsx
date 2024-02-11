"use client";
import OnboardingPage from "@/components/onboarding/OnboardingPage";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField, CheckBoxField } from "@/components/util/fields";
import { images } from "@/lib/cms";
import { CustomerSchema } from "@/lib/schema";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function CustomerDetails() {
  const { submitStep, allSteps } = useOnboarding();
  const form = useForm<CustomerSchema>({
    mode: "all",
    resolver: zodResolver(CustomerSchema),
    defaultValues: allSteps?.customer ?? { accepts_marketing: false },
  });

  const onSubmit = form.handleSubmit((values: CustomerSchema) => submitStep(values));

  return (
    <OnboardingPage className="h-stack gap-20">
      <div className="v-stack basis-full justify-center">
        <div className="v-stack mb-4 max-w-[75%]">
          <p className="text-md text-muted-foreground uppercase">Details</p>
          <h1 className="text-4xl font-bold ">Lets start with your details.</h1>
          <p className="text-lg text-muted-foreground">(so that we can send you your quote)</p>
        </div>

        <Form id="customer" form={form} onSubmit={onSubmit} className="v-stack gap-6">
          <InputField control={form.control} name="fullName" placeholder="Full name" />
          <InputField control={form.control} name="email" placeholder="Email address" />
          <InputField control={form.control} name="phone" placeholder="Phone number" />

          <CheckBoxField
            control={form.control}
            name="accepts_marketing"
            title={"I'd like to subscribe to your mailing list"}
            info={"We promise they'll be worth it!"}
          />

          <Button
            form="customer"
            type="submit"
            variant={"accent"}
            className="flex w-fit gap-2 font-semibold rounded-full p-6">
            <span>Get started</span>
            <ChevronRightIcon />
          </Button>
        </Form>
      </div>

      <div className="basis-full w-full">
        <Image alt="form page 1" className="h-full w-full" {...images.formPage1} />
      </div>
    </OnboardingPage>
  );
}
