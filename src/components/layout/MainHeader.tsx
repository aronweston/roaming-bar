import { PhoneIcon } from "lucide-react";
import MainLink from "../MainLink";
import mainLogo from "@/assets/images/logo.png";
import Image from "next/image";
import { Routes } from "@/lib/cms";

const navigation = [
  {
    href: Routes.FAQ,
    label: "FAQs",
  },
  {
    href: Routes.ABOUT,
    label: "About Us",
  },
];

export default function MainNav() {
  return (
    <header className="fixed z-50 min-h-40 top-0 w-full">
      <div className="container h-stack justify-between items-center p-6 border-b-foreground">
        <nav className="flex-1 items-center justify-start">
          <ul className="h-stack gap-2 text-md uppercase">
            {navigation.map(({ href, label }, i) => (
              <li key={i}>
                <MainLink className="underline text-md" href={href}>
                  {label}
                </MainLink>
              </li>
            ))}
          </ul>
        </nav>

        <MainLink href={"/"} className="max-w-[350px] p-0">
          <Image alt={"main logo"} {...mainLogo} />
        </MainLink>

        <div className="h-stack flex-1 justify-end">
          <MainLink
            href={Routes.ONBOARDING}
            variant={"accent"}
            className="font-medium text-md uppercase">
            Start Quote
          </MainLink>

          <MainLink href={Routes.FAQ} variant={"ghost"} size={"icon"}>
            <PhoneIcon />
          </MainLink>
        </div>
      </div>
    </header>
  );
}
