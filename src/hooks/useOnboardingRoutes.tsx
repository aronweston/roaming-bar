import { usePathname, useRouter } from "next/navigation";

export const steps = [
  { title: "Your Details", route: "/onboarding" },
  { title: "Event Details", route: "/onboarding/event" },
  { title: "Budget", route: "/onboarding/event/budget" },
  { title: "Bar Type", route: "/onboarding/event/tab" },
  { title: "Package", route: "/onboarding/package" },
  { title: "Summary", route: "/onboarding/summary" },
];

export default function useOnboardingRoutes() {
  const pathname = usePathname();
  const router = useRouter();

  const currentRouteIndex = steps.findIndex((step) => step.route === pathname);
  const currentRoute = steps[currentRouteIndex];

  const isFirstPage = currentRouteIndex === 0;
  const isLastPage = currentRouteIndex === 0;

  const nextStep = () => router.push(steps[currentRouteIndex + 1].route);
  const previousStep = () => router.back();

  const isPreviousRoute = (route: string) => {
    const index = steps.findIndex((step) => step.route === route);
    return index <= currentRouteIndex;
  };

  return { isFirstPage, isLastPage, nextStep, previousStep, isPreviousRoute, currentRoute };
}
