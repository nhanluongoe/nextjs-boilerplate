import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sign In page',
  description: 'Description of the sign in page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default function SignInPage() {
  return <div>Sign In page</div>;
}
