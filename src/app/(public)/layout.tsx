import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import siteMeta from '@/config/siteMeta';

export const metadata: Metadata = siteMeta;

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
