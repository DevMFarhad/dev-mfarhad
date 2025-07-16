import TestimonialCarousel from '../TestimonialCarousel';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted border-t">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2 mb-4">
            What My Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from people I&apos;ve collaborated with and helped bring their visions to reality.
          </p>
        </div>
        <div className="animate-slide-up">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
