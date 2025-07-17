import { contactInfo } from '@/lib/data';
import LucideIcon from './shared/LucideIcon';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold font-headline mb-2">Contact Information</h3>
        <p className="text-muted-foreground">
          Fill up the form and our team will get back to you within 24 hours.
        </p>
      </div>
      <ul className="space-y-6">
        {contactInfo.map(({ href, title, icon, value }) => (
          <li key={href} className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
              <LucideIcon name={icon} />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <Link
                href={href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {value}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
