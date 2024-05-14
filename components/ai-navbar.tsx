import React from "react";
import { currentUser } from "@/lib/auth";
// import UserAccountNav from "./AiComponents/UserAccountNav";
// import SignInButton from "./AiComponents/SignInButton";
// // import MobileSidebar from "./mobile-sidebar";

type Props = {};

const AiNavbar = async (props: Props) => {
  const user = await currentUser();

  return (
    <div className="flex items-center p-4">
      {/* <MobileSidebar /> */}
      {/* <div className="flex w-full justify-end">
        {user ? <UserAccountNav user={user} /> : <SignInButton />}
      </div> */}
    </div>
  );
};

export default AiNavbar;
