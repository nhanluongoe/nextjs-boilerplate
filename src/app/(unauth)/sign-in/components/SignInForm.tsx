import { signIn } from '@/libs/auth';
import Button from '@/components/ui/Button';

export default function SignInForm() {
  return (
    <div>
      <form
        action={async () => {
          'use server';

          await signIn('github', { redirectTo: '/' });
        }}
      >
        <Button type="submit">
          Sign in with Github
        </Button>
      </form>
    </div>
  );
}
