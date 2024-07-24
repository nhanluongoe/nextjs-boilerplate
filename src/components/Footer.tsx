import Link from 'next/link';

export default function Footer() {
  return (
    <div className="m-8 text-center">
      <p>
        Created by{' '}
        <Link href="https://nhanluong.dev" className="link">
          Nhan Luong
        </Link>
      </p>
    </div>
  );
}
