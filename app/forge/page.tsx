"use client";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Reveal } from "@/components/utils/reveal";
import "./page.css";
import { useSession } from "next-auth/react";
// import Link from "next/link";

export default function Home() {
  const { data: user } = useSession();
  const userName = user?.user?.name || "Guest";

  return (
    <main className="ai_wrapper">
      <div className="ai_first_wrap">
        <div className="user_icon">
          <h1 className="text-white text-2xl">
            Welcome <span className="text-green-400">{userName}</span>
          </h1>
        </div>
        <h1 className="text-3xl text-white">
          Forge: Empowering Creativity and Innovation
        </h1>
        <Reveal>
          <p className="mt-4 text-white">
            Forge is your ultimate destination for unleashing creativity and
            innovation through the power of artificial intelligence. Whether
            you're a designer, musician, filmmaker, or developer, Forge provides
            the tools and resources you need to bring your ideas to life in ways
            you never thought possible.
          </p>
        </Reveal>
        <Reveal>
          <a href="/create">
            <Button variant="secondary" className="mt-5 mb-5">
              Start Work{" "}
              <MdOutlineArrowOutward className="text-green-700 text-2xl" />
            </Button>
          </a>
        </Reveal>
        <Reveal>
          <div className="socials_mother_wrapper_container flex gap-2 text-2xl text-green-300">
            <FaSquareXTwitter className="cursor-pointer hover:text-green-700" />
            <FaLinkedin className="cursor-pointer hover:text-green-700" />
            <PiInstagramLogoFill className="cursor-pointer hover:text-green-700" />
          </div>
        </Reveal>
      </div>
      <div>
        <Reveal>
          <Image
            src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712944561/ptfpnawdfcmfehk0bmte.png"
            alt="AI image"
            width="370"
            height={370}
            className="ai_image mt-5"
          />
        </Reveal>
      </div>
    </main>
  );
}
