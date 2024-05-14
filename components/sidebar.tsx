"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";

type Props = {};

const routes = [
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
    href: "/create/image",
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

const Sidebar = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-green-900 md:w-72">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-16 h-8 mr-4">
            <Image
              src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712894291/s5t1rsu1kux7ie3iqppb.png"
              alt="forge image"
              width="60"
              height="60"
            />
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 ${
                pathname === route.href ? "font-bold" : ""
              } group-hover:font-bold`}
            >
              <div className="flex items-center flex-1 text-white">
                <route.icon
                  className={`${route.color ? route.color + " " : ""}mr-2`}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
