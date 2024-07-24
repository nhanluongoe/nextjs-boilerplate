import Link from 'next/link';

export default function Header() {
  return (
    <div className="m-8 text-blue-400">
      <h1>
        <Link href="/">Next.js Starter Template</Link>
      </h1>
    </div>
  );
}
