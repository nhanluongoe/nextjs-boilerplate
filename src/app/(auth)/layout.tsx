import { auth } from '@/libs/auth';
import { Metadata } from 'next';
import Link from 'next/link';
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

export default async function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const session = await auth();
  return (
    <div className="text-center mt-0 mx-auto max-w-[1280px]">
      {session ? (
        children
      ) : (
        <div>
          <h1>Not authenticated</h1>
          <Link className="primary-btn" href="/sign-in">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
