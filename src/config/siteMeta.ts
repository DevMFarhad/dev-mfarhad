import { Metadata } from 'next';
import config from '.';

const siteMeta: Metadata = {
  metadataBase: new URL(config.base_url),
  title: {
    default: 'Mohammad Farhad | Full Stack Developer',
    template: '%s | Mohammad Farhad',
  },
  icons: {
    icon: '/icon.png',
  },
  other: {
    'google-site-verification': config.googleSiteKey,
  },
  description:
    'Portfolio of Mohammad Farhad, a full-stack web developer specializing in React, Next.js, TypeScript, and MongoDB.',
  keywords: [
    'Mohammad Farhad',
    'mfarhad',
    'farhad',
    'developer farhad',
    'Web Developer',
    'Next.js',
    'Portfolio',
    'React Developer',
  ],
  authors: [{ name: 'Mohammad Farhad', url: 'https://mfarhad-dev.vercel.app' }],
  creator: 'Mohammad Farhad',
  alternates: {
    canonical: config.base_url,
  },
  openGraph: {
    title: 'Mohammad Farhad | Full Stack Web Developer',
    description: 'Discover web projects and skills of Mohammad Farhad.',
    url: config.base_url,
    siteName: 'Mohammad Farhad Portfolio',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Farhad Portfolio Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Farhad | Web Developer',
    description: 'Explore projects and skills of Mohammad Farhad.',
    creator: config.twitterHandle,
    images: ['/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default siteMeta;
