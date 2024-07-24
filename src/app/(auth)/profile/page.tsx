import { auth } from '@/libs/auth';
import Image from 'next/image';
import SignOutForm from './components/SignOutForm';

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
      <SignOutForm />
    </div>
  );
}
