import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Auth module',
  description: 'Description of the auth module',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
