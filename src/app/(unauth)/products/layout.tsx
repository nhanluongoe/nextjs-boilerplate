import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Product Layout',
  description: 'Product layout description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default function ProductLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
