import { signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'

function Signin() {
  return <button onClick={() => signIn()}>Sign In</button>;
}
function Signout() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/profile')}>View profile</button>
      <button button onClick={() => signOut()}> Sign Out</button >
    </div>
  )

}

export { Signin, Signout };
