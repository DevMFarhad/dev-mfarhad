import { Metadata } from 'next';
import config from '.';

const siteMeta: Metadata = {
  metadataBase: new URL(config.base_url),
  title: {
    default: 'Mohammad Farhad | Full Stack Developer & Software Engineer',
    template: '%s | Mohammad Farhad',
  },
  description:
    'Official portfolio of Mohammad Farhad — Full Stack Developer and Software Engineer. Explore cutting-edge web apps, projects, skills in React, Next.js, TypeScript, MongoDB, and modern web development.',
  keywords: [
    'Mohammad Farhad',
    'mfarhad',
    'Farhad Dev',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'MongoDB Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Portfolio Web Developer',
    'Bangladeshi Web Developer',
    'Full Stack Engineer',
    'Freelance Developer',
  ],
  authors: [{ name: 'Mohammad Farhad', url: 'https://mfarhad-dev.vercel.app' }],
  creator: 'Mohammad Farhad',
  publisher: 'Mohammad Farhad',
  alternates: {
    canonical: config.base_url,
  },
  openGraph: {
    title: 'Mohammad Farhad | Full Stack Developer & Software Engineer',
    description:
      'Discover the work, projects, and skills of Mohammad Farhad, an expert in building modern full stack web applications with React, Next.js, TypeScript, and MongoDB.',
    url: config.base_url,
    siteName: 'Mohammad Farhad Portfolio',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Farhad Portfolio Open Graph Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Farhad | Full Stack Web Developer',
    description:
      'Explore high-quality web development projects by Mohammad Farhad. Specialized in React, Next.js, TypeScript, MongoDB.',
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
  other: {
    'google-site-verification': config.googleSiteKey,
    'theme-color': '#0f172a',
    'application-name': 'DevMFarhad',
    'apple-mobile-web-app-title': 'Mohammad Farhad',
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#0f172a',
    manifest: '/manifest.webmanifest',
    author: 'Mohammad Farhad',
    copyright: 'Mohammad Farhad',
  },
};

export default siteMeta;
