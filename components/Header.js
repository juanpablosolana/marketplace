import { Signin, Signout } from "../components/session"
import Image from "next/image"
import { useSession } from 'next-auth/react'
import Link from 'next/link'

function Header() {
  const { data: session } = useSession()
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"
            width={50}
            height={50}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Super Marketplace</span>
          <div className="hidden items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {
                session
                  ? <li>
                    <Signout />
                  </li>
                  : <li>
                    <Signin />
                  </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header