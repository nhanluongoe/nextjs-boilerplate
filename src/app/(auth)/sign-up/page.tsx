import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up page',
  description: 'Description of the sign up page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default function SignUpPage() {
  return <div>Sign Up page</div>;
}
