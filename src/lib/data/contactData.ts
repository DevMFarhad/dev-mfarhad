export interface IContactItem {
  icon: string;
  title: string;
  value: string;
  href: string;
}

export interface ISocialItem {
  icon: string;
  label: string;
  href: string;
}

type ContactData = {
  contact: IContactItem[];
  socials: ISocialItem[];
};

const contactData: ContactData = {
  contact: [
    {
      icon: 'phone',
      title: 'Call Me',
      value: '01568306714',
      href: 'tel:01568306714',
    },
    {
      icon: 'mail',
      title: 'Email Me',
      value: 'mfarhad.dev@gmail.com',
      href: 'mailto:mfarhad.dev@gmail.com',
    },
    {
      icon: 'map-pin',
      title: 'Location',
      value: 'Chattogram, Bangladesh',
      href: '#Chattogram, Bangladesh',
    },
  ],
  socials: [
    {
      icon: 'github',
      label: 'GitHub',
      href: 'https://github.com/your-username',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/your-username',
    },
    {
      icon: 'twitter',
      label: 'Twitter',
      href: 'https://twitter.com/your-username',
    },
    {
      icon: 'facebook',
      label: 'Facebook',
      href: 'https://facebook.com/your-username',
    },
    {
      icon: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/your-username',
    },
    {
      icon: 'dribbble',
      label: 'Dribbble',
      href: 'https://dribbble.com/your-username',
    },
  ],
};

export default contactData;
