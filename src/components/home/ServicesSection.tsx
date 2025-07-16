import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IService } from '@/lib/data/servicesData';
import LucideIcon from '../shared/LucideIcon';

const ServiceCard = ({ service, idx }: { service: IService; idx: number }) => {
  return (
    <Card
      key={service.title}
      className="group h-full flex flex-col transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1.5 bg-card animate-slide-up"
      style={{ animationDelay: `${idx * 150}ms` }}
    >
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary transition-colors duration-300">
            <LucideIcon
              name={service.icon}
              className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
            />
          </div>
          <CardTitle className="text-xl font-headline font-semibold">{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From frontend design to backend logic, I build complete web solutions to bring your
            ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} idx={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
