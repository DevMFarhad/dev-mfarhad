import Link from 'next/link';
import Logo from '../shared/Logo';
import LucideIcon from '../shared/LucideIcon';
import { socialLinks } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <div className="text-sm font-medium text-muted-foreground">
              &copy; {currentYear}. All rights reserved.
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:-translate-y-1"
              >
                <LucideIcon name={icon} className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
