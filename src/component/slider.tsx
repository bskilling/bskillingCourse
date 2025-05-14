/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const Slider = () => {
  // Create a reference for the API to access plugin methods
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Create a stable reference to the autoplay plugin
  const plugin = React.useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      // @ts-expect-error - type error
      rootMargin: '0px', // Helps with visibility detection
    })
  );

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={() => api?.plugins()?.autoplay?.stop()}
        onMouseLeave={() => api?.plugins()?.autoplay?.play()}
        opts={{
          loop: true, // Enable looping for continuous autoplay
          align: 'center', // Consistent alignment
        }}
        className="w-[100vw]"
      >
        <CarouselContent>
          <CarouselItem>
            <Link href="/courses">
              <img
                src="/new-image/offer.webp"
                alt="Individual training offer"
                className="w-full object-cover"
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/institutions/skill-development-programs">
              <img
                src="/new-image/skill-development.webp"
                alt="Skill development program"
                className="w-full object-cover"
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/government-training-program">
              <img
                src="/new-image/govt-training.webp"
                alt="Government training program"
                className="w-full object-cover"
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/corporate-training">
              <img
                src="/new-image/corporate.webp"
                alt="Corporate training"
                className="w-full object-cover"
              />
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-10 z-30 flex items-center justify-center px-4 cursor-pointer focus:outline-none" />
        <CarouselNext className="absolute right-10 z-30 flex items-center justify-center px-4 cursor-pointer focus:outline-none" />
      </Carousel>
    </>
  );
};

export default Slider;
