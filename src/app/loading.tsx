import { Loader } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <Loader className="w-14 h-14 animate-spin text-primary " />
      <h1 className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary  animate-pulse">
        Please Wait...
      </h1>
    </div>
  );
};

export default LoadingPage;
