import SignOutForm from '@/components/SignOutForm';
import { auth } from '@/libs/auth';
import Image from 'next/image';

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return null;

  const { user } = session;
  if (!user) return null;

  const { name, email, image } = user;
  const displayName = name ?? 'Signed-in user';

  return (
    <div>
      <h1>Profile</h1>
      <p className="text-zinc-300">
        This page is protected. You can only see your own profile when you are
        signed in.
      </p>
      <div className="flex flex-col place-items-center my-3">
        <p>Name: {displayName}</p>
        <p>Email: {email ?? 'No email provided'}</p>
        {image ? (
          <Image src={image} alt={displayName} width={280} height={280} />
        ) : null}
        <SignOutForm />
      </div>
    </div>
  );
}
