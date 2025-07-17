import { Construction } from 'lucide-react';

const ComingSoon = () => {
  return (
    <section className="w-full py-20 flex items-center justify-center  relative overflow-hidden">
      <div className="text-center animate-fade-in-up duration-700">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-4 mb-6 animate-pulse">
          <Construction className="h-10 w-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold uppercase text-primary font-headline tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          This page is under construction. We’re crafting something awesome!
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse blur-2xl opacity-20 pointer-events-none" />
    </section>
  );
};

export default ComingSoon;
