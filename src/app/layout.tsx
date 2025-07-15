import type { Metadata } from 'next';
import { Inter, Lexend, Rubik } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Mohammad Farhad',
  description: 'Mohammad Farhad',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('min-h-screen antialiased', inter.variable, rubik.variable, lexend.variable)}
      >
        {children}
      </body>
    </html>
  );
}
