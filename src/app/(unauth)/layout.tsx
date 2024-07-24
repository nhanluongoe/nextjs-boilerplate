import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';

export default function UnauthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
