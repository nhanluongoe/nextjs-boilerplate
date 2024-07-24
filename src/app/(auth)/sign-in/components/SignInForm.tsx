import { signIn } from '@/libs/auth';

export default function SignInForm() {
  return (
    <div>
      <form
        action={async () => {
          'use server';

          await signIn('github');
        }}
      >
        <button className="primary-btn" type="submit">
          Sign in with Github
        </button>
      </form>
    </div>
  );
}
