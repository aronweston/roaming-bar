import actionOneImage from "@/assets/images/action-1.png";
import MainLink from "@/components/MainLink";
import Page from "@/components/Page";
import { Routes } from "@/lib/cms";
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <div className="h-stack w-full gap-12">
        <div className="relative basis-full h-screen w-screen rounded-3xl">
          <video
            className="absolute top-0 right-0 min-w-full max-w-fit min-h-screen rounded-3xl"
            autoPlay
            muted
            loop>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="container h-stack gap-8 items-center justify-center h-screen">
          <div className="v-stack basis-full gap-6">
            <div className="v-stack gap-4">
              <span className="text-muted-foreground mb-1">
                sydney&apos;s best remote bar service
              </span>
              <h1 className="font-bold text-5xl text-wrap">Your party. Your way.</h1>

              <p className="max-w-prose">
                From intimate gatherings or large-scale events, the Roaming Bar offers custom
                packages to suit your individual needs. Handling everything from expert staff,
                alcohol, cocktails to the bar itself, we’re raising the bar.
              </p>
            </div>

            <div className="h-stack gap-2">
              <MainLink
                href={Routes.ONBOARDING}
                variant={"accent"}
                className="text-md uppercase font-semibold">
                Get Started
              </MainLink>
              <MainLink href={Routes.ONBOARDING} variant={"default"} className="text-md uppercase">
                Watch Video
              </MainLink>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full min-h-[50vh] py-[300px] relative">
        <div className="container w-full h-full  h-stack gap-8 items-center justify-center">
          <div className="h-stack gap-8 items-center justify-center">
            <div className="v-stack basis-full gap-6">
              <div className="v-stack gap-4">
                <span className="text-muted-foreground mb-1">let the good times roam</span>
                <h2 className="font-bold text-5xl text-wrap">Crafting unforgettable experiences</h2>
                <p className="max-w-prose">
                  Roaming Bar&apos;s mission is simple – to alleviate the pressures of event
                  planning by providing an all-inclusive bar experience. With an extensive
                  background in events, bartending, and hospitality, founder Roman Baranov is the
                  driving force behind making each Roaming Bar event a memorable one.
                </p>
              </div>

              <div className="h-stack gap-2">
                <MainLink
                  href={Routes.ONBOARDING}
                  variant={"accent"}
                  className="text-md uppercase font-semibold">
                  Get Started
                </MainLink>
                <MainLink
                  href={Routes.ONBOARDING}
                  variant={"default"}
                  className="text-md uppercase">
                  Watch Video
                </MainLink>
              </div>
            </div>
          </div>

          <div className="basis-full">
            <div className="h-stack absolute right-[-5%] top-[15%]  h-[650px] w-[60%]">
              <Image
                className="rounded-l-full object-cover w-full h-full"
                alt="pouring drinks"
                {...actionOneImage}
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-secondary-foreground w-full h-full min-h-[50vh] py-[200px] relative">
        <div className="container w-full h-full h-stack gap-8 items-center justify-center">
          <div className="h-stack gap-8 items-center justify-center">
            <div className="v-stack basis-full gap-6">
              <div className="v-stack gap-4">
                <span className="mb-1">Services</span>
                <h2 className="font-bold text-5xl text-wrap">
                  We take care of it so that the good times keep roaming
                </h2>
                <p className="max-w-prose">
                  We offer a range of services from alcohol supply to bar staff. If you can’t see
                  what you need reach out to our team.
                </p>
              </div>

              <div className="h-stack gap-2">
                <MainLink
                  href={Routes.ONBOARDING}
                  variant={"accent"}
                  className="text-md uppercase font-semibold text-primary">
                  Get Started
                </MainLink>
                <MainLink
                  href={Routes.ONBOARDING}
                  variant={"outline"}
                  className="text-md uppercase border border-background">
                  Watch Video
                </MainLink>
              </div>
            </div>
          </div>

          <div className="basis-full w-full h-full">{/* <HomeProductCarousel /> */}</div>
        </div>
      </div>
    </Page>
  );
}
