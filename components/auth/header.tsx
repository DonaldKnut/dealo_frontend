import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>Dealo</h1> */}
      <a href="/">
        <Image
          src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712158494/uir9zzsq1tpqm39i2qr5.png"
          alt=""
          height={100}
          width={100}
          className="m-auto"
        />
      </a>
      <p className="text-muted-foreground text-sm text-white">{label}</p>
    </div>
  );
};
