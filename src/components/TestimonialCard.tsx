import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { ITestimonial } from '@/lib/data/testimonialsData';

type TestimonialCardProps = {
  testimonial: ITestimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex-grow">
        <div className="flex items-center mb-4 text-primary">
          <Quote className="w-6 h-6 mr-2" />
          <p className="font-semibold text-lg">Client Feedback</p>
        </div>
        <blockquote className="text-muted-foreground italic text-base">
          “{testimonial.quote}”
        </blockquote>
      </CardContent>
      <CardFooter className="pt-4 border-t flex flex-col">
        <p className="font-semibold text-primary">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
