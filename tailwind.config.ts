/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from 'tailwindcss';

const config = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'oklch(var(--primary))',
                    foreground: 'oklch(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary))',
                    foreground: 'oklch(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted))',
                    foreground: 'oklch(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent))',
                    foreground: 'oklch(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive))',
                    foreground: 'oklch(var(--destructive-foreground))',
                },
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring))',
                chart: {
                    '1': 'oklch(var(--chart-1))',
                    '2': 'oklch(var(--chart-2))',
                    '3': 'oklch(var(--chart-3))',
                    '4': 'oklch(var(--chart-4))',
                    '5': 'oklch(var(--chart-5))',
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar-background))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
                'fade-in': {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                'slide-up': {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'blob': {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.8s ease-in-out forwards',
                'slide-up': 'slide-up 0.8s ease-in-out forwards',
                'blob': 'blob 7s infinite',
            },
            animationDelay: {
                '2000': '2000ms',
                '4000': '4000ms',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography'), require('tailwindcss-animation-delay'),],
} satisfies Config;

export default config;
