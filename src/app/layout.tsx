import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import { ReactNode } from 'react';
import { cn, getBaseUrl } from '@/utils/helpers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'Next.js Starter Template',
    template: '%s | Next.js Starter Template',
  },
  description:
    'A minimal, scalable Next.js starter with TypeScript, Tailwind CSS, Auth.js, and SEO-ready routes.',
  openGraph: {
    title: 'Next.js Starter Template',
    description:
      'A minimal, scalable Next.js starter with TypeScript, Tailwind CSS, Auth.js, and SEO-ready routes.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'min-h-screen min-w-[320px] bg-dark text-white antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
