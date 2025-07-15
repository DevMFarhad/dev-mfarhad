import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { type FC } from 'react';

type IconComponent = FC<LucideProps>;
type IconName = keyof typeof Icons;

const toPascalCase = (str: string) =>
  str
    .split(/[-_]/g)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

export const getLucideIcon = (iconName: string): IconComponent | null => {
  const formattedName = toPascalCase(iconName);
  const Icon = Icons[formattedName as IconName];

  if (!Icon) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Lucide icon "${iconName}" not found (formatted: "${formattedName}").`);
    }
    return null;
  }

  return Icon as IconComponent;
};
