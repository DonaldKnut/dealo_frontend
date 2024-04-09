import React from "react";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
import CreateCourseForm from "@/components/AiComponents/CreateCourseForm";
// import { checkSubscription } from "@/lib/subscription";

type Props = {};

export const CreatePage = async (props: Props) => {
  const user = await currentUser();
  if (!user) {
    return redirect("/");
  }
  //   const isPro = await checkSubscription();
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl text-green-500">
        Dealo Academy
      </h1>
      {/* <Link
        href="/gallery"
        className="items-center gap-2 sm:flex text-center m-auto"
      >
        <Image
          src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712302506/nedqjnhoorxneefabhtn.png"
          alt="logo of dealo academy"
          width={376}
          height={376}
        />
      </Link> */}
      <div className="flex p-4 mt-5 border-none bg-secondary rounded-md bg-green-700 text-black">
        <InfoIcon className="w-12 h-12 mr-3 text-green-600" />
        <div className="text-green-700">
          Enter in a course title, or what you want to learn about. Then enter a
          list of units, which are the specifics you want to learn. And our AI
          will generate a course for you!
        </div>
      </div>
      <CreateCourseForm
      //   isPro={isPro}
      />
      {/* <CreateCourseForm isPro={isPro} /> */}
    </div>
  );
};
