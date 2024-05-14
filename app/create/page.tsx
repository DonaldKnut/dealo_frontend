import React from "react";
import "./page.css";
import AiNavbar from "@/components/ai-navbar";
import Sidebar from "../../components/sidebar";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-full relative">
      {/* <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-green-900 md:w-72">
        {/* <Sidebar /> */}
      {/* </div> */}
      <main className="md:pl-72"></main>
    </div>
  );
};

export default page;
