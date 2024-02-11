"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Routes } from "@/lib/cms";
import MainLink from "../MainLink";
import { Button } from "../ui/button";

export default function AgeVerificationModal() {
  const [ageVerifed, setAgeVerified] = useLocalStorage("age-verified", false);
  const verify = () => setAgeVerified(true);

  return (
    <Dialog open={!ageVerifed} onOpenChange={() => {}}>
      <DialogContent className="v-stack gap-5 p-14 bg-background text-background-foreground">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center font-bold">Verify your age</DialogTitle>
        </DialogHeader>

        <p className="text-center">You must be 18 or older to book an event with Roaming Bar.</p>

        <div className="h-stack w-full">
          <div className="v-stack w-full gap-2 text-center">
            <Button className="w-full" variant={"outline"} onClick={verify}>
              Yes
            </Button>
            <p className="text-xs">I am 18 years old or older</p>
          </div>

          <div className="v-stack w-full gap-2 text-center">
            <MainLink href={Routes.HOME} variant={"outline"}>
              No
            </MainLink>
            <p className="text-xs">I am under 18 years old</p>
          </div>
        </div>

        <p className="text-xs text-center">
          By clicking YES you agree to the Roaming Bar’s{" "}
          <MainLink className="p-0 text-xs underline h-fit" href={Routes.TERMS}>
            Terms & Conditions
          </MainLink>{" "}
          and{" "}
          <MainLink className="p-0 text-xs underline h-fit" href={Routes.PRIVACY}>
            Privacy Policy.
          </MainLink>
        </p>
      </DialogContent>
    </Dialog>
  );
}
