"use client";
import Page from "@/components/Page";
import { TabSchema, CustomerSchema } from "@/lib/schema";
import { useOnboarding } from "@/providers/OnboardingProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Tab() {
  const { submitStep } = useOnboarding();

  const form = useForm<TabSchema>({
    mode: "all",
    resolver: zodResolver(CustomerSchema),
  });

  const onSubmit = form.handleSubmit((values: TabSchema) => submitStep("tab", values));

  return (
    <Page onboarding>
      <div className="v-stack basis-full justify-center">
        <h1>What kind of bar are you after?</h1>
      </div>

      <div className="v-stack">
        <form onSubmit={onSubmit}>
          <div>
            <input type="radio" name="tabType" value="cash" />
            <label>Cash bar</label>
          </div>
          <div>
            <input type="radio" name="tabType" value="open" />
            <label>Open bar</label>
          </div>
          <div>
            <input type="radio" name="tabType" value="token" />
            <label>Token bar</label>
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </Page>
  );
}
