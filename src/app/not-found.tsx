import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mx-auto">
      <h2>404 Not Found</h2>
      <Link href="/" className="primary-btn">
        Return Home
      </Link>
    </div>
  );
}
