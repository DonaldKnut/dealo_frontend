"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CRYPTO_LINKS } from "@/constant";
import { usePathname } from "next/navigation";
import { CgMenuRound } from "react-icons/cg";
import { RiCloseCircleFill } from "react-icons/ri";
import { useCurrentUser } from "@/hooks/use-current-user";
import UserAccountNav from "@/components/AiComponents/UserAccountNav";
import SignInButton from "@/components/AiComponents/SignInButton";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";

type Route = {
  label: string;
  icon: React.ElementType;
  href: string;
  color?: string;
};

const routes: Route[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/create/dashboard",
    color: "text-green-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/create/message",
    color: "text-green-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "forge/create/image",
    color: "text-green-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/create/video",
    color: "text-green-500",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/create/music",
    color: "text-green-500",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/create/code",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/create/settings",
    color: "text-green-500",
  },
];

// type NavbarProps = {
//   children: React.ReactNode;
// };

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const user = useCurrentUser();
  const pathname = usePathname();

  return (
    <>
      <nav className="flex items-center justify-between max-container px-12 z-300 py-2 shadow-xl rounded-full ring-offset-green-500 fixed w-[95%] left-[50%] top-1 translate-x-[-50%] bg-green-900/90 text-white">
        <Link href="/dealopay" passHref>
          <Image
            src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712894291/s5t1rsu1kux7ie3iqppb.png"
            alt="dealo travels logo"
            width={80}
            height={80}
          />
        </Link>
        <div className="flex w-full justify-end mr-2">
          {user ? <UserAccountNav user={user} /> : <SignInButton />}
        </div>
        <ul className="hidden lg:flex h-full space-x-8">
          {CRYPTO_LINKS.map((link) => (
            <li key={link.key} className="flex items-center">
              <Link href={link.href} passHref>
                <div className="flex items-center transition-all duration-500 ease-in-out hover:text-green-500">
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                  <span className="inline-block absolute h-[2px] w-0 bg-green-500 -bottom-2 traansition-all duration-500 group-hover:w-full"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {!menuOpened ? (
          <CgMenuRound
            className="lg:hidden inline-block cursor-pointer"
            style={{ fontSize: "55px" }}
            onClick={toggleMenu}
          />
        ) : (
          <RiCloseCircleFill
            className="lg:hidden inline-block cursor-pointer"
            style={{ fontSize: "55px" }}
            onClick={toggleMenu}
          />
        )}
        <ul
          className={
            menuOpened
              ? "flex flex-col justify-center p-12 w-64 fixed top-24 right-0 bg-green-700 rounded-lg transition-all duration-500  text-center  shadow-emerald-450 "
              : "flex flex-col justify-center p-12 w-64 fixed top-24 right-[-100%] bg-green-700 rounded-lg transition-all duration-500  text-center  shadow-emerald-450"
          }
        >
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 ${
                pathname === route.href ? "font-bold" : ""
              }`}
            >
              <div className="flex items-center flex-1 text-white">
                <route.icon
                  className={`${route.color ? route.color + " " : ""}mr-2`}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
