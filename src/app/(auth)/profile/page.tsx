import { auth, signOut } from '@/libs/auth';
import Image from 'next/image';

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return null;

  const { user } = session;
  if (!user) return null;

  const { name, email, image } = user;

  return (
    <div>
      <h1>Profile</h1>
      <p>
        Name:
        {name}
      </p>
      <p>
        Email:
        {email}
      </p>
      <Image src={image!} alt={name!} width={280} height={280} />
      <form
        action={async () => {
          'use server';

          await signOut({ redirectTo: '/' });
        }}
      >
        <button type="submit" className="danger-btn">
          Sign Out
        </button>
      </form>
    </div>
  );
}
