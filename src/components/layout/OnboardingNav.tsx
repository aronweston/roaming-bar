"use client";
import useOnboardingRoutes, { steps } from "@/hooks/useOnboardingRoutes";
import { images } from "@/lib/cms";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function OnboardingNav() {
  const { isPreviousRoute, currentRoute } = useOnboardingRoutes();

  return (
    <header className="w-full">
      <div className="container v-stack justify-center items-center gap-5 p-6 border-b-foreground">
        <div className="max-w-[350px] p-0">
          <Image alt={"main logo"} {...images.mainLogo} />
        </div>

        <nav className="h-stack justify-between flex-grow w-full gap-20">
          {steps.map((step) => {
            const isCurrentRoute = currentRoute.route === step.route;
            const isPrevious = isPreviousRoute(step.route);
            const active = isCurrentRoute || isPrevious;

            const Comp = Link;
            return (
              <Comp
                href={step.route}
                key={step.title}
                className={cn(
                  "v-stack w-full items-center text-muted-foreground",
                  active && "text-foreground [&p]:text-foreground [span]:text-foreground"
                )}>
                <p className="uppercase font-semibold text-md">{step.title}</p>

                <span
                  className={cn("w-full h-2 rounded-md bg-muted", active && "bg-primary")}></span>
              </Comp>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
