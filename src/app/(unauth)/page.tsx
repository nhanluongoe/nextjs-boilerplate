import { Metadata } from 'next';

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
  return <div>IndexPage</div>;
}
