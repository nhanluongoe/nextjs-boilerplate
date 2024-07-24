import { signOut } from '@/libs/auth';

export default function SignOutForm() {
  return (
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
  );
}
