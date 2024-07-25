import { auth } from '@/libs/auth';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Index page',
  description: 'Description of the index page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default async function IndexPage() {
  const session = await auth();

  return (
    <div className="text-center">
      <h1>Index Page</h1>
      <p className="my-3 text-zinc-300">
        This is the index page of unauth routes. This may be the landing page
      </p>
      <div className="flex gap-3 justify-center">
        {session ? (
          <Link href="/profile" className="primary-btn">
            Profile
          </Link>
        ) : (
          <Link href="/sign-in" className="primary-btn">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
