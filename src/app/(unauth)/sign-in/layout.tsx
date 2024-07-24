import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sign In Layout Page',
  description: 'Desc for Sign In Layout Page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default function SignInLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="text-center mt-0 mx-auto max-w-[1280px]">{children}</div>
  );
}
