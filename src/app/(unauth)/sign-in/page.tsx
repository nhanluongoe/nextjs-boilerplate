import { auth, signOut } from '@/libs/auth';

import { Metadata } from 'next';
import Link from 'next/link';
import SignInForm from './components/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In page',
  description: 'Description of the sign in page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default async function SignInPage() {
  const session = await auth();

  if (session) {
    return (
      <div>
        <h1>You are already signed in</h1>
        <div className="flex gap-3 justify-center">
          <Link href="/profile" className="primary-btn">
            Profile
          </Link>
          <form
            action={async () => {
              'use server';

              await signOut();
            }}
          >
            <button className="danger-btn" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <SignInForm />;
}