'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import NavLink from '../shared/NabLink';
import Logo from '../shared/Logo';
import { useState } from 'react';
import { INavLink } from './Navbar';

type MobileNavProps = {
  navLinks: INavLink[];
};

const MobileNav = ({ navLinks }: MobileNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[240px] sm:w-[300px] p-0">
          <SheetHeader className="p-4 pb-2 border-b">
            <div className="flex items-center justify-between">
              <SheetClose asChild>
                <SheetTitle asChild>
                  <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                  </Link>
                </SheetTitle>
              </SheetClose>
            </div>
          </SheetHeader>
          <div className="p-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map(({ href, label, icon }) => (
                <SheetClose key={href} asChild>
                  <NavLink label={label} href={href} icon={icon} />
                </SheetClose>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
