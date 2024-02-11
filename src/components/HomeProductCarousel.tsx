import serviceOneImage from "@/assets/images/service-1.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function HomeProductCarousel() {
  return (
    <Carousel plugins={[Autoplay({ delay: 2000 })]} opts={{ loop: true }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3 v-stack items-center">
            <div className="w-fit h-full">
              <Image alt="wfef" {...serviceOneImage} className="object-fit w-full h-full" />
            </div>

            <p className="text-xl font-bold">Service 1</p>

            {/* <div className="p-1"> */}
            {/* <Card> */}
            {/* <CardContent className="flex aspect-square items-center justify-center p-6">
              </CardContent> */}
            {/* </Card> */}
            {/* </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext />
    </Carousel>
  );
}
