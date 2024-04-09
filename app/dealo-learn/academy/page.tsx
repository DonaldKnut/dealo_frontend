import React from "react";
import Navbar from "@/components/AiComponents/Navbar";
import { CreatePage } from "@/app/generate/page";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <CreatePage />
    </div>
  );
};

export default page;
