'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import LucideIcon from './LucideIcon';

type NavLinkProps = {
  href: string;
  label: string;
  icon?: string;
};

const NavLink = ({ href, label, icon }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-colors
        hover:bg-accent hover:text-accent-foreground
        ${isActive ? 'bg-accent text-accent-foreground' : 'text-foreground'}`}
    >
      {icon && <LucideIcon name={icon} className="w-4 h-4" />}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
