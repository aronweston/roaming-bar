"use client";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useOnboarding, useRoutes } from "@/providers/OnboardingProvider";

export function OnboardingFooter() {
  const { goBack } = useOnboarding();
  const { isFirstPage, currentRoute } = useRoutes();
  if (isFirstPage) return null;
  return (
    <div className="h-stack w-full pt-10 justify-end gap-2">
      <Button
        onClick={goBack}
        variant={"outline"}
        className="justify-self-start gap-2 font-semibold rounded-full p-6">
        Go back
      </Button>

      <Button
        form={currentRoute.step}
        type="submit"
        variant={"accent"}
        className="flex justify-self-end gap-2 font-semibold rounded-full p-6">
        <span>Keep roaming</span>
        <ChevronRightIcon />
      </Button>
    </div>
  );
}
