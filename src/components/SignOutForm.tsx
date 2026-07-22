import { signOut } from '@/libs/auth';
import Button from './ui/Button';

export default function SignOutForm() {
  return (
    <form
      action={async () => {
        'use server';

        await signOut({ redirectTo: '/' });
      }}
    >
      <Button type="submit" variant="danger">
        Sign Out
      </Button>
    </form>
  );
}
