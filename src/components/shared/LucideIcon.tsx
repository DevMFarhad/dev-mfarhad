import { getLucideIcon } from '@/lib/utils/icon';
import { LucideProps } from 'lucide-react';

const LucideIcon = ({ name, ...props }: { name: string } & LucideProps) => {
  const IconComponent = getLucideIcon(name);
  if (!IconComponent) return null;

  return <IconComponent {...props} />;
};

export default LucideIcon;
