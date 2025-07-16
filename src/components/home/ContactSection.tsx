import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/20 border-t">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2 mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-2 bg-card p-8 rounded-lg shadow-lg border h-full animate-slide-up">
            <ContactInfo />
          </div>
          <div
            className="md:col-span-3 bg-card p-8 rounded-lg shadow-lg border h-full animate-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
