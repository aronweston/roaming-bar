import FooterNewsletter from "./FooterNewsletter";
import MainLink from "../MainLink";
import mainLogo from "@/assets/images/logo.png";
import raisingTheBar from "@/assets/images/raising-the-bar.png";
import Image from "next/image";
import { Routes } from "@/lib/cms";

export default function Footer() {
  return (
    <footer className="v-stack border border-t-primary overflow-hidden">
      <div className="container py-16 h-stack justify-between gap-14">
        <div className="v-stack gap-6 basis-5/12">
          <div className="v-stack gap-3">
            <MainLink href={Routes.HOME} className="max-w-[250px] p-0 -ml-2">
              <Image alt={"main logo"} {...mainLogo} />
            </MainLink>

            <p className="font-bold">cheers@roamingbar.com.au</p>

            <MainLink
              href={Routes.ONBOARDING}
              variant={"accent"}
              className="font-medium text-md uppercase w-fit">
              Call Us
            </MainLink>
          </div>

          <p>
            The Roaming Bar supports the responsible service of alcohol. It is against the law to
            sell or supply alcohol to, or obtain alcohol on behalf of, a person under the age of 18
            years. License number LIQP770016794.
          </p>

          <div className="h-stack gap-3">
            <MainLink href={Routes.PRIVACY} className="text-md font-medium underline px-0">
              Privacy Policy
            </MainLink>
            <MainLink href={Routes.TERMS} className="text-md font-medium underline px-0">
              Terms & Conditions
            </MainLink>
          </div>
        </div>

        <div className="relative v-stack basis-6/12 justify-end">
          <FooterNewsletter />

          <Image
            className="self-start absolute bottom-[0px] h-[200px] w-[200px] right-0 animate-spin-v-slow "
            alt="raising the bar"
            {...raisingTheBar}
          />
        </div>
      </div>
    </footer>
  );
}
