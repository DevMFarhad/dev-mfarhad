'use client';

import { testimonials } from '@/lib/data';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useMemo } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialCarousel = () => {
  const plugin = useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: true }), []);
  if (testimonials.length === 0) return null;
  return (
    <Carousel
      plugins={[plugin]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={plugin.stop}
      onMouseLeave={() => plugin.play()}
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-2 h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default TestimonialCarousel;
