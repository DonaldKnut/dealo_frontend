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
import Link from "next/link";

export default function Home() {
  const { data: user } = useSession();
  const userName = user?.user?.name || "Guest";

  return (
    <main className="ai_wrapper">
      <div className="ai_first_wrap">
        <div className="user_icon">
          <Image
            src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712608245/tpabvgqsdaxapregllu3.png"
            alt="medical doctor's image"
            width={160}
            height={160}
            className="mt-5"
          />
          <h1 className="text-white text-2xl">
            Welcome <span className="text-green-400">{userName}</span>
          </h1>
        </div>
        <h1 className="text-3xl text-white">
          Unite, Innovate, Conquer: Welcome to Dealo Cancer Research Hub
        </h1>
        <Reveal>
          <p className="mt-4 text-white">
            Whether you're a seasoned oncologist, a dedicated researcher, or a
            healthcare professional passionate about cancer care, Dealo Cancer
            Research Center invites you to join our community and be part of the
            collective effort to find a cure for cancer. Together, we can make a
            difference in the lives of cancer patients and their families,
            bringing hope and healing to those affected by this devastating
            disease. Join Dealo Cancer Research Center today and be a driving
            force in the quest to conquer cancer!
          </p>
        </Reveal>
        <Reveal>
          <Link href="/dealo-learn/academy">
            <Button variant="secondary" className="mt-5 mb-5">
              Start Networking
              <MdOutlineArrowOutward className="text-green-700 text-2xl" />
            </Button>
          </Link>
        </Reveal>
        <Reveal>
          <div className="socials_mother_wrapper_container flex gap-2 text-2xl text-green-300">
            <FaSquareXTwitter className="cursor-pointer hover:text-green-700" />
            <FaLinkedin />
            <PiInstagramLogoFill />
          </div>
        </Reveal>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712604142/qyqm0i4lykeag63y250a.png"
          alt="medical doctor's image"
          width="470"
          height={470}
          className="ai_image mt-5"
        />
      </div>
    </main>
  );
}
