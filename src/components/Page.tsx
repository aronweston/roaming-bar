import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface IPage extends HTMLAttributes<HTMLElement> {}

export default function Page({ children, className, ...rest }: IPage) {
  return (
    <main
      className={cn(
        "flex min-h-screen overflow-hidden flex-col items-center justify-between",
        className
      )}
      {...rest}>
      {children}
    </main>
  );
}
