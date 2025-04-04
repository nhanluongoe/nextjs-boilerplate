import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import { ReactNode } from 'react';
import { cn } from '@/utils/helpers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
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
          'bg-dark text-white min-h-screen m-0 flex place-items-center min-w-[320px]'
        )}
      >
        {children}
      </body>
    </html>
  );
}
