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

export default function IndexPage() {
  return (
    <div className="text-center mt-0 mx-auto max-w-[1280px]">
      <h1>Index Page</h1>
      <p className="mb-3">
        This is the index page of unauth routes. This may be the landing page
      </p>
      <div className="flex gap-3 justify-center">
        <Link href="/sign-in" className="primary-btn">
          Sign in
        </Link>
        <Link href="/sign-up" className="primary-btn">
          Sign up
        </Link>
      </div>
    </div>
  );
}
