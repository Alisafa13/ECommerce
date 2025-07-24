import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselList } from "@/constans";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {CarouselList.map((slider) => (
            <CarouselItem key={slider.id}>
              <Image
                alt="slider"
                src={slider.image}
                width={1920}
                height={1080}
                className="h-96 object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default Hero;
