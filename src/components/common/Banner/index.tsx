"use client";

import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Banner: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  // const [api, setApi] = useState<CarouselApi>();

  // useEffect(() => {
  //   if (!api) return;

  //   console.log(api.selectedScrollSnap());

  //   api.on("select", () => {
  //     console.log(api.selectedScrollSnap());
  //   });
  // }, [api]);

  return (
    <div className="mb-4 flex w-full items-center justify-center px-4">
      <div className="flex h-96 flex-grow flex-col  items-center justify-center overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-800">
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent className="-ml-0">
            <CarouselItem className="pl-0">
              <div className="flex h-96 flex-grow flex-col items-center justify-center bg-slate-100">
                some_photo1.png
              </div>
            </CarouselItem>

            <CarouselItem className="pl-0">
              <div className="flex h-96 flex-grow flex-col items-center justify-center bg-slate-200">
                some_photo2.png
              </div>
            </CarouselItem>

            <CarouselItem className="pl-0">
              <div className="flex h-96 flex-grow flex-col items-center justify-center bg-slate-300">
                some_photo3.png
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
