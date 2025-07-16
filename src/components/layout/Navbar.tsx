import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import Logo from '../shared/Logo';
import NavLink from '../shared/NabLink';
import MobileNav from './MobileNav';

export interface INavLink {
  href: string;
  label: string;
  icon: string;
}

const navLinks: INavLink[] = [
  { href: '/', label: 'Home', icon: 'Home' },
  { href: '/about', label: 'About', icon: 'User' },
  { href: '/portfolio', label: 'Portfolio', icon: 'Briefcase' },
  { href: '/blogs', label: 'Blog', icon: 'Rss' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 border-b border-border/60 bg-muted backdrop-blur-sm">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
