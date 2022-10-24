import { signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'

function Signin() {
  return <button
    onClick={() => signIn()}
    className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg"
  >
    Ingresar
  </button>;
}

function Signout() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push('/profile')}
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver perfil
      </button>

      <button
        button onClick={() => signOut()}
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Salir
      </button >
    </div>
  )
}

export { Signin, Signout };
