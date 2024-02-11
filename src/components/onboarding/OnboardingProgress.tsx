"use client";
import { ScrollTextIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useOnboarding, useRoutes } from "@/providers/OnboardingProvider";

export function OnboardingProgress() {
  const { isFirstPage } = useRoutes();
  const { allSteps } = useOnboarding();
  const customer = allSteps?.customer;

  return (
    <>
      <Sheet>
        {!isFirstPage && (
          <SheetTrigger className="absolute top-6 right-6">
            <ScrollTextIcon size={32} strokeWidth={1.5} />
          </SheetTrigger>
        )}

        <SheetContent className="v-stack">
          <SheetHeader>
            <SheetTitle className="text-3xl font-bold">The Run Down</SheetTitle>
          </SheetHeader>

          <div className="w-full text-wrap">
            <div className="v-stack">
              <p className="text-md font-semibold">Customer</p>
              <div className="v-stack gap-0">
                <p className="text-md h-stack">
                  <span className="font-semibold">Name:</span> {customer?.fullName}
                </p>
                <p className="text-md h-stack">
                  <span className="font-semibold">Email:</span> {customer?.email}
                </p>
                <p className="text-md h-stack">
                  <span className="font-semibold">Phone:</span> {customer?.phone}
                </p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
