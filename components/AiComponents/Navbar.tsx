import Link from "next/link";
import React from "react";
import Image from "next/image";
import SignInButton from "./SignInButton";
import { currentUser } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
// import { User } from "next-auth";
// import { UserRole } from "@prisma/client";

// type Props = {
//   session: {
//     user: User & {
//       customField: string;
//       role: UserRole;
//       isTwoFactorEnabled: boolean;
//       isOAuth: boolean;
//     };
//   };
// };

const Navbar = async () => {
  const user = await currentUser();
  // const session = { user };

  return (
    <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2 text-green-800">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
        <a href="/" className="items-center gap-2 sm:flex">
          <Image
            src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712524129/pllqwcarklr4cy8tbhtp.png"
            alt="logo of dealo academy"
            width={96}
            height={96}
          />
        </a>
        <div className="flex items-center">
          <Link href="/gallery" className="mr-3">
            Gallery
          </Link>
          {user && (
            <>
              <Link href="/create" className="mr-3">
                Create
              </Link>
              <Link href="/settings" className="mr-3">
                Settings
              </Link>
            </>
          )}
          <ThemeToggle className="mr-3" />
          <div className="flex items-center">
            {user ? <UserAccountNav user={user} /> : <SignInButton />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
